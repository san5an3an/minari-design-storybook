import type { Mode } from "../systems/types";

// 아래 CSS가 usage Dashboard 안 daisyUI element만 select하도록 usage Dashboard 3개의 root에 붙일 class name define
export const DAISYUI_USAGE_ROOT = "daisyui-usage-root";

// outline primary Badge가 daisyUI --color-primary fill color를 텍스트와 icon과 border로 써 system 16개의 dark mode와 bright brand system의 light mode에서 d-card와 d-modal-box background 위 low contrast라 --d-badge-color를 --semantic-fg-brand-default token으로 override
const outlinePrimaryBadgeCss = `
.${DAISYUI_USAGE_ROOT} .d-badge-outline.d-badge-primary { --d-badge-color: var(--semantic-fg-brand-default); }
`;

// Profile stat의 text-neutral이 daisyUI --color-neutral fill color를 텍스트와 icon color로 써 dark mode와 system 10개의 light mode에서 page background 위 low contrast라 --semantic-fg-neutral-subtle token으로 override
const neutralStatCss = `
.${DAISYUI_USAGE_ROOT} .d-stat .text-neutral { color: var(--semantic-fg-neutral-subtle); }
`;

const BADGE_MODES: Mode[] = ["light", "dark"];

// outlinePrimaryBadgeCss는 원래 low contrast였던 light mode와 dark mode에, usage code가 fill color를 고른 neutralStatCss는 모든 mode에 넣어 usage Dashboard style tag에 쓸 CSS string return
export function daisyuiUsageCss(mode: Mode): string {
  return (BADGE_MODES.includes(mode) ? outlinePrimaryBadgeCss : "") + neutralStatCss;
}
