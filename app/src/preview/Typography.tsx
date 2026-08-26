import * as React from "react";
import { parseTokens, startingWith, type ColorToken } from "./tokens";
import type { FontChoice } from "./fonts";

const SAMPLE = "다람쥐 헌 쳇바퀴에 타고파 Handgloves 0123";

// 폰트 굵기 스케일의 실사용 값, 글꼴의 네 굵기 지원 여부 확인
const USED_WEIGHTS = [400, 500, 600, 700];

// `--semantic-text-heading-lg` → `heading-lg`
function shortName(name: string, prefix: string): string {
  return name.slice(prefix.length);
}

// base.font.size.8을 8로 치환. 어느 단계에서 왔는지는 참조 지도에만 있음
function stepOf(refs: Record<string, string>, tokenName: string): string | null {
  const path = tokenName.replace(/^--/, "").replace(/-/g, ".");
  // 하이픈 든 토큰은 참조 지도 키와 직접 확인. 치환 시 경로가 깨지는 문제가 있음
  const key = Object.keys(refs).find(
    (k) => "--" + k.replace(/\./g, "-") === tokenName,
  ) ?? path;
  const ref = refs[key];
  return ref?.startsWith("base.font.size.") ? ref.slice("base.font.size.".length) : null;
}

function px(value: string | undefined): number {
  return Number.parseFloat(value ?? "0");
}

// 그 역할의 CSS 스택. 이름과 달리 목록이며 브라우저만 읽음
function stackOf(tokens: ColorToken[], role: string): string {
  return tokens.find((t) => t.name === `--base-font-family-${role}`)?.values.light ?? "";
}

// 가변 버전 이름. Figma에서 사용 못할 수 있음
function variableOf(tokens: ColorToken[], role: string): string {
  return tokens.find((t) => t.name === `--base-font-variable-${role}`)?.values.light ?? "없음";
}

// 지정 크기 그대로 렌더링
function ScaleRow({
  token, prefix, refs,
}: {
  token: ColorToken;
  prefix: string;
  refs: Record<string, string>;
}) {
  const size = token.values.light;
  const step = stepOf(refs, token.name);
  return (
    <div className="doc-scale">
      <div className="doc-scale-meta">
        <b>{shortName(token.name, prefix)}</b>
        <code>{size}</code>
        {step ? <span className="doc-scale-step">계단 {step}</span> : null}
        <code className="doc-scale-var">{token.name}</code>
      </div>
      {/* 크기별 줄 높이 다르게 지정, 큰 글자는 좁게 본문은 넓게 설정 */}
      <div
        className="doc-scale-sample"
        style={{
          fontSize: size,
          lineHeight: px(size) >= 20 ? "var(--semantic-line-height-snug)"
                                     : "var(--semantic-line-height-normal)",
        }}
      >
        {SAMPLE}
      </div>
    </div>
  );
}

export function Typography({
  vars, refs, ratio, font,
}: {
  vars: string;
  refs: Record<string, Record<string, string>>;
  ratio: number;
  font: FontChoice;
}) {
  // 시스템 변경 시에만 다시 읽기
  const tokens = React.useMemo( => parseTokens(vars), [vars]);
  const light = refs.light ?? {};

  const text = startingWith(tokens, "--semantic-text-");
  const lineHeights = startingWith(tokens, "--semantic-line-height-");
  const weights = startingWith(tokens, "--base-font-weight-");
  const names = startingWith(tokens, "--base-font-name-");
  const sizeRamp = startingWith(tokens, "--base-font-size-")
    .sort((a, b) => px(a.values.light) - px(b.values.light));

  // 작은 값부터 정렬
  const scale = [...text].sort((a, b) => px(a.values.light) - px(b.values.light));

  return (
    <section className="doc-section">
      <h2>Typography</h2>
      <p className="doc-note" style={{ marginTop: 0 }}>
        이 시스템의 비율은 <b>{ratio}</b> 예요. 본문 16px 에서 출발해 그 비율로 계단을 올려요.
        비율이 커질수록 제목과 본문의 차이가 벌어져요.
      </p>

      <h3 className="doc-h3">1. 글꼴, 무엇으로 쓰는가</h3>
      <p className="doc-note" style={{ marginTop: 0 }}>
        <b>이름이 먼저예요.</b> 아래 CSS 스택은 브라우저가 읽는 우선순위 목록이지 이름이 아니고,
        Figma 는 스택을 못 받아요. 글꼴 목록에서 <b>이름 하나</b>를 고르게 되어 있어요.
      </p>
      <div className="doc-fonts">
        {names.map((t) => {
          const role = shortName(t.name, "--base-font-name-");
          // sans만 상단바에서 교체 가능. mono는 선택 UI가 없어 토큰값 그대로 사용
          const swapped = role === "sans";
          const declared = t.values.light;
          // 카드 제목은 읽기 좋은 이름, 입력 필드는 실제 이름 사용
          const title = swapped ? font.label : declared;
          const name = swapped ? font.family : declared;
          const stack = swapped ? font.stack : stackOf(tokens, role);
          const variable = swapped
            ? (font.variable ?? "없음")
            : variableOf(tokens, role);
          const weightList = swapped
            ? font.weights.join(" · ")
            : weights.map((w) => w.values.light)
                .sort((a, b) => Number(a) - Number(b)).join(" · ");
          return (
            <div key={t.name} className="doc-font">
              <div className="doc-font-name" style={{ fontFamily: stack }}>
                {title}
              </div>
              <dl className="doc-font-meta">
                <dt>역할</dt><dd>{role}</dd>
                <dt>Figma 에 적는 이름</dt>
                <dd><code>{name}</code> <span className="doc-scale-step">필수</span></dd>
                <dt>CSS 스택</dt><dd><code>{stack}</code></dd>
                <dt>굵기</dt>
                <dd>
                  {weightList}
                  {/* 굵기 400, 500, 600, 700 사용. 미지원 시 브라우저가 근접값으로 대체 */}
                  {swapped && !USED_WEIGHTS.every((w) => font.weights.includes(w)) ? (
                    <span className="doc-font-warn">
                      {USED_WEIGHTS.filter((w) => !font.weights.includes(w)).join(" · ")} 은
                      이 글꼴에 없어요, 가장 가까운 굵기로 대신 그려져요
                    </span>
                  ) : null}
                </dd>
                <dt>가변판</dt>
                <dd>
                  <code>{variable}</code>
                  {variable === "없음" ? null : (
                    <span className="doc-font-warn">
                      웹 전용, Figma 는 가변 글꼴을 일부만 받아요
                    </span>
                  )}
                </dd>
                {/* 산출물 명시 여부. 선택한 것과 다를 때만 표시 */}
                {swapped && name !== declared ? (
                  <>
                    <dt>산출물의 선언</dt>
                    <dd>
                      <code>{declared}</code>
                      <span className="doc-font-warn">
                        상단바에서 고른 글꼴은 <b>미리보기 위에만</b> 얹혀요.
                        generated/{"{"}시스템{"}"}/vars.css 는 그대로 {declared} 로 나가요
                      </span>
                    </dd>
                  </>
                ) : null}
              </dl>
              <div className="doc-scale-sample" style={{ fontFamily: stack }}>{SAMPLE}</div>
            </div>
          );
        })}
      </div>
      <p className="doc-empty">
        <b>가변판을 스택 앞자리에 두지 않아요.</b> 앞에 두면 그 판이 깔린 기계에서만 가변으로
        그려져 보는 사람마다 화면이 달라지고, Figma 는 그 판을 못 골라 고정판으로 대체해요.
        코드와 시안이 갈라져요. 그래서 굵기도 <b>고정판이 낼 수 있는 값</b>으로 묶었어요.
        <br />
        <code>생성 스크립트</code>(G15)가 이 네 가지를 20종 전부에서 검사해요.
      </p>

      <h3 className="doc-h3">2. 타입 스케일, 화면이 쓰는 이름</h3>
      <p className="doc-note" style={{ marginTop: 0 }}>
        실제 크기로 그렸어요. <code>계단 N</code> 은 그 이름이 12단 원시 계단의 몇 번째를
        쓰는지예요. 색과 같은 방식이에요.
      </p>
      <div className="doc-scales">
        {scale.map((t) => (
          <ScaleRow key={t.name} token={t} prefix="--semantic-text-" refs={light} />
        ))}
      </div>

      <h3 className="doc-h3">3. 줄 높이</h3>
      <div className="doc-lh">
        {lineHeights.map((t) => (
          <div key={t.name} className="doc-lh-item">
            <div className="doc-scale-meta">
              <b>{shortName(t.name, "--semantic-line-height-")}</b>
              <code>{t.values.light}</code>
            </div>
            <p style={{ lineHeight: t.values.light }}>
              줄 높이는 글자 크기가 아니라 <b>읽는 리듬</b>을 정해요. 좁으면 제목처럼 뭉쳐 보이고,
              넓으면 본문처럼 흘러가요. 긴 글에는 넓은 쪽이, 짧은 제목에는 좁은 쪽이 맞아요.
            </p>
          </div>
        ))}
      </div>

      <h3 className="doc-h3">4. 굵기</h3>
      <div className="doc-weights">
        {weights.map((t) => (
          <div key={t.name} className="doc-scale">
            <div className="doc-scale-meta">
              <b>{shortName(t.name, "--base-font-weight-")}</b>
              <code>{t.values.light}</code>
            </div>
            <div className="doc-scale-sample" style={{ fontWeight: t.values.light }}>
              {SAMPLE}
            </div>
          </div>
        ))}
      </div>

      <h3 className="doc-h3">5. Base 계단, 원시 12단</h3>
      <p className="doc-note" style={{ marginTop: 0 }}>
        컴포넌트는 이 계단을 직접 부르지 않아요. 위의 semantic 이름을 부르고, 그 이름이
        이 계단을 가리켜요. 색의 12단 계단과 같은 구조예요.
      </p>
      <div className="doc-ramp-row doc-ramp-row--type">
        {sizeRamp.map((t) => (
          <span key={t.name} className="doc-typestep" data-tip={`${t.name}\n${t.values.light}`}>
            {t.name.split("-").pop}
            <i>{t.values.light}</i>
          </span>
        ))}
      </div>
    </section>
  );
}
