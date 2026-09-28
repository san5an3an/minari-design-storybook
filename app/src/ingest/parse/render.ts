const SETTLE_MS = 1200;
// 그 안에 내용이 없으면 정적 HTML로 전환
const TIMEOUT_MS = 6000;

export interface RenderedMockup {
  // 스크립트 실행 이후 <body> 내부
  html: string;
  before: number;
  after: number;
  // 실행 실패 사유 표시. 빈 상태와 구분
  fellBackTo: string | null;
}

export function renderMockup(html: string): Promise<RenderedMockup> {
  const before = (html.match(/<[a-zA-Z]/g) ?? []).length;

  return new Promise<RenderedMockup>((resolve) => {
    const fallback = (why: string) => {
      cleanup;
      const doc = new DOMParser.parseFromString(html, "text/html");
      resolve({ html: doc.body.innerHTML, before, after: before, fellBackTo: why });
    };

    // 채널 이름 검증 없이 수신하면 다른 iframe, 확장이 보낸 메시지도 처리될 수 있음
    const channel = `ods-render-${before}-${html.length}`;

    // 목업 스크립트 종료 후 실행되도록 코드를 맨 끝에 배치하기
    const probe =
      `<script>(function{` +
      `var send=function{try{` +
      // 아이콘 먼저 렌더링. <i data-lucide>가 SVG로 바뀌기 전엔 모양이 없음
      `window.lucide&&window.lucide.createIcons;` +
      `}catch(e){}` +
      `try{parent.postMessage({__odsRender:${JSON.stringify(channel)},html:document.body.innerHTML},"*")}catch(e){}};` +
      // 여러 번 측정 필요, CDN 로딩과 목업 스크립트가 비동기일 수 있음
      `if(document.readyState==="complete")setTimeout(send,${SETTLE_MS});` +
      `else window.addEventListener("load",function{setTimeout(send,${SETTLE_MS})});` +
      `})<\/script>`;

    const iframe = document.createElement("iframe");
    // display:none 대신 다른 방식으로 숨김 처리, offsetWidth 오작동 방지
    iframe.style.cssText =
      "position:fixed;left:-99999px;top:0;width:1440px;height:900px;border:0;visibility:hidden";
    iframe.setAttribute("sandbox", "allow-scripts");

    let done = false;
    const onMsg = (e: MessageEvent) => {
      if (e.source !== iframe.contentWindow) return;
      const d = e.data as { __odsRender?: string; html?: string } | null;
      if (!d || d.__odsRender !== channel || typeof d.html !== "string") return;
      done = true;
      const after = (d.html.match(/<[a-zA-Z]/g) ?? []).length;
      cleanup;
      resolve({ html: d.html, before, after, fellBackTo: null });
    };
    const timer = setTimeout( => {
      if (!done) fallback(`스크립트가 ${TIMEOUT_MS / 1000}초 안에 답하지 않았어요`);
    }, TIMEOUT_MS);

    function cleanup {
      clearTimeout(timer);
      window.removeEventListener("message", onMsg);
      iframe.remove;
    }

    window.addEventListener("message", onMsg);
    // 탐침 스크립트를 </body> 직전에 삽입. <head>는 렌더링 전 실행돼 의미 없음
    const withProbe = /<\/body\s*>/i.test(html)
      ? html.replace(/<\/body\s*>/i, `${probe}</body>`)
      : html + probe;
    iframe.srcdoc = withProbe;
    document.body.appendChild(iframe);
  });
}
