import type { Mode } from "../systems/types";

// PrimeReact Tooltip과 ConfirmDialog와 ConfirmPopup이 body로 portal되어 usage root class selector가 닿지 않아 아래 CSS가 select할 portal class name define
export const USAGE_PORTAL_CLASS = "primereact-usage-portal";

// lara text Button이 generated theme의 brand fill color를 텍스트로 써 dark mode와 bright brand system의 light mode에서 DataTable row와 ConfirmDialog와 ConfirmPopup background 위 low contrast라 --semantic-fg-brand-default token으로 override
const textButtonCss = (root: string) => `
.${root} .p-button.p-button-text,
.${root} .p-button.p-button-text:not(:disabled):hover,
.${root} .p-button.p-button-text:not(:disabled):active,
.${USAGE_PORTAL_CLASS} .p-button.p-button-text,
.${USAGE_PORTAL_CLASS} .p-button.p-button-text:not(:disabled):hover,
.${USAGE_PORTAL_CLASS} .p-button.p-button-text:not(:disabled):active {
  color: var(--semantic-fg-brand-default);
}
`;

// lara danger outlined Button이 generated theme의 danger fill color를 텍스트로 써 dark mode의 Card background 위 low contrast라 --semantic-fg-danger-default token으로 override
const dangerOutlinedButtonCss = (root: string) => `
.${root} .p-button.p-button-danger.p-button-outlined,
.${root} .p-button.p-button-danger.p-button-outlined:not(:disabled):hover,
.${root} .p-button.p-button-danger.p-button-outlined:not(:disabled):active {
  color: var(--semantic-fg-danger-default);
}
`;

// high-contrast mode에서 lara가 Chip과 MultiSelect token과 usage Dashboard가 p-focus class를 붙인 current Menubar item과 Tooltip의 background로 쓰는 generated theme shade600이 --semantic-border-neutral-default value라 그 background 위 텍스트가 low contrast라 design system chip token과 neutral fill token과 tooltip token으로 override
const highContrastCss = (root: string) => `
.${root} .p-chip,
.${root} .p-multiselect.p-multiselect-chip .p-multiselect-token {
  background: var(--component-chip-bg);
  color: var(--component-chip-fg);
  border: var(--semantic-border-width-default) solid var(--component-chip-border);
}
.${root} .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
  background: var(--semantic-bg-neutral-default);
}
.${root} .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--semantic-fg-on-neutral-default);
}
.${USAGE_PORTAL_CLASS}.p-tooltip .p-tooltip-text {
  background: var(--component-tooltip-bg);
  color: var(--component-tooltip-fg);
}
.${USAGE_PORTAL_CLASS}.p-tooltip.p-tooltip-right .p-tooltip-arrow { border-right-color: var(--component-tooltip-bg); }
.${USAGE_PORTAL_CLASS}.p-tooltip.p-tooltip-left .p-tooltip-arrow { border-left-color: var(--component-tooltip-bg); }
.${USAGE_PORTAL_CLASS}.p-tooltip.p-tooltip-top .p-tooltip-arrow { border-top-color: var(--component-tooltip-bg); }
.${USAGE_PORTAL_CLASS}.p-tooltip.p-tooltip-bottom .p-tooltip-arrow { border-bottom-color: var(--component-tooltip-bg); }
`;

// Button override는 모든 mode에, highContrastCss는 high-contrast mode에만 넣어 usage Dashboard style tag에 쓸 CSS string return
export function primereactUsageCss(root: string, mode: Mode): string {
  return textButtonCss(root) + dangerOutlinedButtonCss(root) + (mode === "high-contrast" ? highContrastCss(root) : "");
}
