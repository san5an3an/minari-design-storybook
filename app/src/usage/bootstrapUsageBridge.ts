import type { SystemDefinition } from "../systems/types";

// bootstrap 사용 화면 감싸개 클래스. 카탈로그 미리보기에는 없는 클래스라 아래 CSS 가 카탈로그에 안 닿음
export const BOOTSTRAP_USAGE_SCOPE = "bootstrap-usage-scope";

const S = `.${BOOTSTRAP_USAGE_SCOPE}`;

// bootstrap 변형과 시스템 토큰 짝. secondary 는 neutral 토큰을 씀
const VARIANTS = [
  ["primary", "brand"],
  ["secondary", "neutral"],
  ["success", "success"],
  ["warning", "warning"],
  ["danger", "danger"],
] as const;

// 생성 테마가 글자색을 안 넘겨 채움 위 bootstrap 기본 흰 글자와 테두리 버튼의 채움 토큰 글자가 남음. 채움 위는 on 토큰, 테두리 버튼은 글자 토큰으로 연결
const TEXT_BRIDGE = VARIANTS.map(([v, t]) => {
  const on = `var(--semantic-fg-on-${t}-default)`;
  const fg = t === "neutral" ? "var(--semantic-fg-neutral-subtle)" : `var(--semantic-fg-${t}-default)`;
  return [
    `${S} .badge.bg-${v} { --bs-badge-color: ${on}; }`,
    `${S} .btn-${v} { --bs-btn-color: ${on}; --bs-btn-hover-color: ${on}; --bs-btn-active-color: ${on}; --bs-btn-disabled-color: ${on}; }`,
    `${S} .btn-outline-${v} { --bs-btn-color: ${fg}; --bs-btn-hover-color: ${on}; --bs-btn-active-color: ${on}; --bs-btn-disabled-color: ${fg}; }`,
  ].join("\n");
}).join("\n");

// 생성 테마에 tertiary·secondary 바탕 세 숫자 값이 없어 bootstrap 라이트 기본값에 고정됨. 모드를 따르는 바탕 변수로 바로 연결
const BG_BRIDGE = [
  `${S} .bg-body-tertiary { background-color: var(--bs-tertiary-bg) !important; }`,
  `${S} .bg-body-secondary { background-color: var(--bs-secondary-bg) !important; }`,
].join("\n");

// 생성 테마의 다크·고대비 세 숫자 값 블록을 감싸개에 다시 걺. 카탈로그 어댑터는 첫 :root 블록만 스코프로 옮겨 이 값이 스코프 안까지 안 닿음
function scopeModeBlocks(css: string) {
  return [...css.matchAll(/:root\[data-theme="[^"]+"\]\s*\{[^}]*\}/g)]
    .map((m) => m[0].replace(/^:root\[data-theme="[^"]+"\]/, (sel) => `${sel} ${S}`))
    .join("\n");
}

// 카탈로그 어댑터 mountTheme 다음에 붙이는 사용 화면 전용 style. 반환값은 정리 함수
export function mountBootstrapUsageBridge(system: SystemDefinition, doc: Document) {
  let alive = true;
  let el: HTMLStyleElement | null = null;
  import(`../systems/css/${system.slug}/_theme-bootstrap.json`).then((theme) => {
    if (!alive) return;
    el = doc.createElement("style");
    el.dataset.usageMount = "bootstrap:usage-bridge";
    el.textContent = [scopeModeBlocks(String(theme.default)), TEXT_BRIDGE, BG_BRIDGE].join("\n");
    doc.head.appendChild(el);
  }).catch(() => { /* 못 실으면 카탈로그 어댑터 테마만으로 렌더링 */ });
  return () => {
    alive = false;
    el?.remove();
  };
}
