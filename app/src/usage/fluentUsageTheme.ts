import type { CSSProperties } from "react";
import { teamsHighContrastTheme, webDarkTheme, webLightTheme, type BadgeProps, type Theme } from "@fluentui/react-components";
import type { Mode } from "../systems/types";

// generated theme가 override하지 않은 Fluent palette의 filled badge background에 맞춰 텍스트 color를 mode별 Fluent base theme에서 select
const FLUENT_BASE: Record<Mode, Theme> = {
  light: webLightTheme,
  dark: webDarkTheme,
  "high-contrast": teamsHighContrastTheme,
};

// generated theme가 design system value로 override해 filled badge background 위에서 low contrast가 된 colorNeutralForegroundOnBrand와 colorNeutralForeground1Static 대신 Fluent base theme value를 usage FluentProvider style의 mode별 CSS variable로 set
export function fluentUsageVars(mode: Mode): CSSProperties {
  const base = FLUENT_BASE[mode] ?? webLightTheme;
  return {
    "--usage-fluent-on-palette": base.colorNeutralForegroundOnBrand,
    "--usage-fluent-on-yellow": base.colorNeutralForeground1Static,
  } as CSSProperties;
}

// filled badge 텍스트 color를 --usage-fluent-* variable로 set하고 variable이 없는 portal 안에서는 FluentProvider theme의 Fluent token value로 fallback
export const FILLED_BADGE_TEXT: Partial<Record<NonNullable<BadgeProps["color"]>, CSSProperties>> = {
  danger: { color: "var(--usage-fluent-on-palette, var(--colorNeutralForegroundOnBrand))" },
  success: { color: "var(--usage-fluent-on-palette, var(--colorNeutralForegroundOnBrand))" },
  warning: { color: "var(--usage-fluent-on-yellow, var(--colorNeutralForeground1Static))" },
};

// generated theme의 colorNeutralForeground3가 colorNeutralBackground6 위에서 low contrast라 neutral avatar initials 텍스트 color를 --semantic-fg-neutral-default token으로 connect
export const AVATAR_INITIALS = { style: { color: "var(--semantic-fg-neutral-default)" } };
