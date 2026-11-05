// blueprint 사용 화면 감싸개 클래스. 카탈로그 미리보기에는 없는 클래스라 아래 CSS 가 카탈로그에 안 닿음
export const BLUEPRINT_USAGE_SCOPE = "blueprint-usage-scope";

const S = `.${BLUEPRINT_USAGE_SCOPE}`;

// 미니멀 태그 의도와 시스템 글자 토큰 짝
const TAG_INTENTS = [
  ["primary", "brand"],
  ["success", "success"],
  ["warning", "warning"],
  ["danger", "danger"],
] as const;

// 다크·고대비 카드 바탕을 표면 토큰으로 연결. 생성 테마가 Blueprint 다크 카드 계산 기준에 채움용 neutral 토큰을 이어 카드가 표면보다 밝은 회색이 됨
const CARD_BRIDGE = `.bp6-dark ${S} .bp6-card { background-color: var(--semantic-bg-neutral-surface); }`;

// 미니멀 태그 글자를 의미 글자 토큰으로 연결. 생성 테마가 글자에 쓰이는 intent hover 값을 채움 strong 토큰에 이어 글자가 옅어짐
const TAG_BRIDGE = TAG_INTENTS.map(([intent, token]) => [
  // 감싸개 클래스 두 번. Blueprint 다크 태그 규칙보다 우선순위를 높임
  `${S}${S} .bp6-tag.bp6-minimal.bp6-intent-${intent} { color: var(--semantic-fg-${token}-default); }`,
  // 다크는 strong 글자 토큰. 다크 태그의 옅은 의도색 바탕 위에서 default 글자는 대비가 모자람
  `.bp6-dark ${S}${S} .bp6-tag.bp6-minimal.bp6-intent-${intent} { color: var(--semantic-fg-${token}-strong); }`,
].join("\n")).join("\n");

export const BLUEPRINT_USAGE_CSS = [CARD_BRIDGE, TAG_BRIDGE].join("\n");
