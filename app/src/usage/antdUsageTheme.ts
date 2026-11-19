import type { ConfigProviderProps, ThemeConfig } from "antd";
import { MODES, type Mode } from "../systems/types";

// usage Dashboard 4개의 frame div에 붙여 아래 CSS rule이 usage 안의 antd element만 select하도록 root class name을 define
export const ANTD_USAGE_ROOT = "antd-usage-root";
// DatePicker popup과 Drawer와 Dropdown과 usage1 header notice Popover가 body로 portal되어 root selector가 닿지 않아 inner ConfigProvider classNames와 그 Popover classNames로 붙일 portal class name을 define
export const ANTD_USAGE_PORTAL = "antd-usage-portal";

type ComponentsConfig = NonNullable<ThemeConfig["components"]>;
type ThemeRule = { modes: Mode[]; component: keyof ComponentsConfig; token: ComponentsConfig[keyof ComponentsConfig] };
type AntdUsageConfig = Pick<ConfigProviderProps, "theme" | "datePicker" | "drawer" | "dropdown">;

const L: Mode[] = ["light"];
const D: Mode[] = ["dark"];
const LD: Mode[] = ["light", "dark"];
const ALL: Mode[] = [...MODES];

const themeRule = <K extends keyof ComponentsConfig>(modes: Mode[], component: K, token: ComponentsConfig[K]): ThemeRule => ({
  modes,
  component,
  token,
});

const THEME_RULES: ThemeRule[] = [
  themeRule(LD, "Tag", {
    colorSuccess: "var(--semantic-fg-on-success-subtle)",
    colorError: "var(--semantic-fg-on-danger-subtle)",
    colorInfo: "var(--semantic-fg-on-info-subtle, var(--semantic-fg-on-brand-subtle))",
    colorInfoBg: "var(--semantic-bg-info-subtle, var(--semantic-bg-brand-subtle))",
  }),
  themeRule(ALL, "Select", { colorTextDisabled: "var(--component-select-option-disabled-fg)" }),
  themeRule(L, "Select", {
    controlItemBgActiveHover: "color-mix(in srgb, var(--semantic-bg-brand-subtle), var(--semantic-fg-neutral-default) 10%)",
  }),
  themeRule(L, "Table", {
    rowSelectedHoverBg: "color-mix(in srgb, var(--component-table-row-selected-bg), var(--semantic-fg-neutral-default) 10%)",
  }),
  themeRule(LD, "Button", { dangerColor: "var(--component-button-solid-danger-fg)" }),
  themeRule(LD, "Button", {
    defaultHoverColor: "var(--semantic-fg-brand-default)",
    defaultActiveColor: "var(--semantic-fg-brand-strong)",
  }),
  themeRule(L, "Tooltip", { colorTextLightSolid: "var(--component-tooltip-fg)" }),
  themeRule(D, "Form", { colorError: "var(--semantic-fg-danger-default)" }),
];

const sel = (s: string) => `.${ANTD_USAGE_ROOT} ${s}, .${ANTD_USAGE_PORTAL} ${s}`;
const LINK_BUTTON = sel(".ant-btn-variant-link:not(:disabled)");
const DANGER_OUTLINED_BUTTON = sel(".ant-btn.ant-btn-color-dangerous:is(.ant-btn-variant-outlined,.ant-btn-variant-dashed)");
const DANGER_MENU_ITEM = `.${ANTD_USAGE_PORTAL} .ant-dropdown-menu-item-danger:not(.ant-dropdown-menu-item-disabled)`;
const NAV_STEP = sel(":is(.ant-steps-item-wait,.ant-steps-item-process)");

const CSS_RULES: { modes: Mode[]; css: string }[] = [
  { modes: ALL, css: `${sel(".ant-picker-cell:not(.ant-picker-cell-in-view):not(.ant-picker-cell-disabled)")} { color: var(--semantic-fg-neutral-subtle); }` },
  { modes: LD, css: `.${ANTD_USAGE_PORTAL} .ant-picker-header-view button:hover { color: var(--semantic-fg-brand-default); }` },
  { modes: LD, css: `.${ANTD_USAGE_ROOT} .ant-tag-checkable:not(.ant-tag-checkable-checked):hover { color: var(--semantic-fg-on-brand-subtle); background: var(--semantic-bg-brand-subtle); }` },
  { modes: D, css: `${LINK_BUTTON} { --ant-btn-text-color: var(--component-link-fg); }` },
  { modes: ALL, css: `${LINK_BUTTON} { --ant-btn-text-color-hover: var(--component-link-fg-hover); }` },
  { modes: D, css: `${LINK_BUTTON} { --ant-btn-text-color-active: var(--component-link-fg-hover); }` },
  { modes: D, css: `${DANGER_OUTLINED_BUTTON} { --ant-btn-text-color: var(--semantic-fg-danger-default); }` },
  { modes: LD, css: `${DANGER_OUTLINED_BUTTON} { --ant-btn-text-color-hover: var(--semantic-fg-danger-strong); }` },
  { modes: D, css: `${DANGER_OUTLINED_BUTTON} { --ant-btn-text-color-active: var(--semantic-fg-danger-strong); }` },
  { modes: D, css: `${DANGER_MENU_ITEM} { color: var(--component-menu-item-danger-fg); }` },
  { modes: LD, css: `${DANGER_MENU_ITEM}:hover { color: var(--component-menu-item-danger-fg); background-color: var(--component-menu-item-danger-bg-hover); }` },
  {
    modes: D,
    css: `${sel(".ant-steps-item-error")} { --ant-cmp-steps-item-title-color: var(--semantic-fg-danger-default); --ant-cmp-steps-item-content-color: var(--semantic-fg-danger-default); --ant-cmp-steps-item-content-active-color: var(--semantic-fg-danger-default); }`,
  },
  {
    modes: LD,
    css: `${sel(":is(.ant-steps-item-process,.ant-steps-item-finish)")} { --ant-cmp-steps-item-icon-bg-color: var(--semantic-bg-brand-subtle); --ant-cmp-steps-item-icon-text-color: var(--semantic-fg-on-brand-subtle); }`,
  },
  {
    modes: ALL,
    css: `${NAV_STEP} { --ant-cmp-steps-item-icon-bg-hover-color: var(--semantic-bg-brand-subtle); --ant-cmp-steps-item-icon-text-hover-color: var(--semantic-fg-on-brand-subtle); }`,
  },
  { modes: LD, css: `${NAV_STEP} { --ant-cmp-steps-item-text-hover-color: var(--semantic-fg-brand-default); }` },
  { modes: LD, css: `.${ANTD_USAGE_ROOT} .ant-table-row-selected .ant-typography.ant-typography-secondary { color: var(--semantic-fg-neutral-default); }` },
  { modes: LD, css: `.${ANTD_USAGE_ROOT} .ant-table-row-selected .ant-tag-processing { border-color: var(--semantic-fg-on-brand-subtle); }` },
];

const PORTAL_CONFIG = {
  datePicker: { classNames: { popup: { root: ANTD_USAGE_PORTAL } } },
  drawer: { classNames: { root: ANTD_USAGE_PORTAL } },
  dropdown: { classNames: { root: ANTD_USAGE_PORTAL } },
} satisfies Pick<ConfigProviderProps, "datePicker" | "drawer" | "dropdown">;

function mergeRules(mode: Mode): ComponentsConfig {
  const components: Record<string, object> = {};
  for (const rule of THEME_RULES) {
    if (rule.modes.includes(mode)) components[rule.component] = { ...components[rule.component], ...rule.token };
  }
  return components as ComponentsConfig;
}

const CONFIG_BY_MODE = Object.fromEntries(
  MODES.map((mode) => [mode, { theme: { components: mergeRules(mode) }, ...PORTAL_CONFIG }]),
) as Record<Mode, AntdUsageConfig>;

const CSS_BY_MODE = Object.fromEntries(
  MODES.map((mode) => [mode, CSS_RULES.filter((rule) => rule.modes.includes(mode)).map((rule) => rule.css).join("")]),
) as Record<Mode, string>;

// generated theme token이 Tag와 Select와 Table과 Button과 Tooltip과 Form에서 mode별로 low contrast라 그 mode의 component token override와 DatePicker와 Drawer와 Dropdown portal classNames를 담은 inner ConfigProvider props를 return
export function antdUsageConfig(mode: Mode): AntdUsageConfig {
  return CONFIG_BY_MODE[mode];
}

// component token으로 닿지 않는 DatePicker cell과 header와 CheckableTag와 link Button과 outlined danger Button과 Dropdown danger item과 Steps와 선택 행 Typography와 processing Tag가 mode별로 low contrast라 그 mode의 CSS rule만 이어 붙인 usage Dashboard style tag용 CSS string을 return
export function antdUsageCss(mode: Mode): string {
  return CSS_BY_MODE[mode];
}
