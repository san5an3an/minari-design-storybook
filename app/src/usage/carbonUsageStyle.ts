import type { Mode } from "../systems/types";

// 아래 CSS가 usage Dashboard 안 Carbon element만 select하도록 usage Dashboard 3개의 root에 붙일 class name define
export const CARBON_USAGE_ROOT = "carbon-usage-root";

// generated theme가 --cds-button-tertiary에 brand fill token을 connect해 tertiary Button 텍스트가 dark mode와 bright brand system의 light mode에서 Tile과 page background 위 low contrast라 hover와 focus와 active와 disabled가 아닌 rest state 텍스트만 --semantic-fg-brand-default token으로 override
const tertiaryButtonCss = `
.${CARBON_USAGE_ROOT} .cds--btn--tertiary:not(:hover):not(:focus):not(:active):not(:disabled):not(.cds--btn--disabled) {
  color: var(--semantic-fg-brand-default);
}
`;

// generated theme가 --cds-notification-background-*를 define하지 않아 dark mode와 high-contrast mode에서도 lowContrast InlineNotification이 Carbon light fallback background를 받아 그 위 --cds-text-primary 텍스트가 low contrast라 Carbon g100 theme처럼 --cds-layer-01로 connect
const notificationCss = `
.${CARBON_USAGE_ROOT} {
  --cds-notification-background-error: var(--cds-layer-01);
  --cds-notification-background-warning: var(--cds-layer-01);
  --cds-notification-background-success: var(--cds-layer-01);
  --cds-notification-background-info: var(--cds-layer-01);
}
`;

const TERTIARY_MODES: Mode[] = ["light", "dark"];
const NOTIFICATION_MODES: Mode[] = ["dark", "high-contrast"];

// tertiaryButtonCss는 light mode와 dark mode에, notificationCss는 dark mode와 high-contrast mode에 넣어 usage Dashboard style tag에 쓸 CSS string return
export function carbonUsageCss(mode: Mode): string {
  return (TERTIARY_MODES.includes(mode) ? tertiaryButtonCss : "") + (NOTIFICATION_MODES.includes(mode) ? notificationCss : "");
}
