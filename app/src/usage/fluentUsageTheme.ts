import type { CSSProperties } from "react";
import { teamsHighContrastTheme, webDarkTheme, webLightTheme, type BadgeProps, type Theme } from "@fluentui/react-components";
import type { Mode } from "../systems/types";

// mode별 Fluent base theme. filled badge background는 generated theme가 안 바꾼 Fluent palette 값이라 텍스트 color도 같은 Fluent base theme에서 가져옴
const FLUENT_BASE: Record<Mode, Theme> = {
  light: webLightTheme,
  dark: webDarkTheme,
  "high-contrast": teamsHighContrastTheme,
};

// usage FluentProvider style에 넣는 mode별 CSS variable. generated theme가 colorNeutralForegroundOnBrand와 colorNeutralForeground1Static을 design system 값으로 바꿔 filled badge background 위 텍스트의 contrast가 모자람
export function fluentUsageVars(mode: Mode): CSSProperties {
  const base = FLUENT_BASE[mode] ?? webLightTheme;
  return {
    "--usage-fluent-on-palette": base.colorNeutralForegroundOnBrand,
    "--usage-fluent-on-yellow": base.colorNeutralForeground1Static,
  } as CSSProperties;
}

// filled badge 텍스트 color. --usage-fluent-* variable이 없는 portal 안에서는 FluentProvider theme의 Fluent token 값으로 fallback함
export const FILLED_BADGE_TEXT: Partial<Record<NonNullable<BadgeProps["color"]>, CSSProperties>> = {
  danger: { color: "var(--usage-fluent-on-palette, var(--colorNeutralForegroundOnBrand))" },
  success: { color: "var(--usage-fluent-on-palette, var(--colorNeutralForegroundOnBrand))" },
  warning: { color: "var(--usage-fluent-on-yellow, var(--colorNeutralForeground1Static))" },
};

// neutral avatar initials 텍스트 color. generated theme의 colorNeutralForeground3가 colorNeutralBackground6 위에서 contrast가 모자라 --semantic-fg-neutral-default token으로 연결함
export const AVATAR_INITIALS = { style: { color: "var(--semantic-fg-neutral-default)" } };
