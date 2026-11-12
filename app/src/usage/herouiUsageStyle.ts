import type { Mode } from "../systems/types";

// HeroUI Modal과 Popover와 Dropdown이 usage root의 sibling으로 같은 .heroui-ref-scope 안에 portal되어 아래 CSS가 그 scope까지 select하도록 usage root에 붙일 class name define
export const HEROUI_USAGE_ROOT = "heroui-usage-root";

const SCOPE = `.heroui-ref-scope:has(> .${HEROUI_USAGE_ROOT})`;

// catalog HeroUI CSS의 --field-background default value가 white라 high-contrast mode의 Select trigger와 input 위 bright field 텍스트가 low contrast라 generated theme field token인 --color-field로 connect하고, 이 background가 Card와 usage Dashboard surface background와 같아 field와 Checkbox와 Radio의 경계가 사라지지 않도록 --color-field-border border를 --semantic-border-width-default width로 show
const highContrastCss = `
${SCOPE} {
  --field-background: var(--color-field, var(--semantic-bg-neutral-surface));
  --field-border: var(--color-field-border, var(--semantic-border-neutral-default));
  --field-border-width: var(--semantic-border-width-default);
}
`;

// highContrastCss를 high-contrast mode에만 넣어 usage Dashboard style tag에 쓸 CSS string return
export function herouiUsageCss(mode: Mode): string {
  return mode === "high-contrast" ? highContrastCss : "";
}

// History Table의 not-done mark «–»가 opacity-30이라 light mode와 dark mode와 high-contrast mode 모두 usage Dashboard surface background 위 low contrast라 opacity 대신 --semantic-fg-neutral-subtle token으로 color set
export const NOT_DONE_MARK_STYLE = { color: "var(--semantic-fg-neutral-subtle)" };

// side nav count가 active item에서도 --semantic-fg-neutral-subtle이라 system 8개의 light mode와 saffron dark mode에서 active nav Button의 --semantic-bg-brand-subtle background 위 low contrast라 active일 때 label과 같은 --semantic-fg-brand-default token으로 switch
export const navCountColor = (isActive: boolean) =>
  (isActive ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-subtle)");
