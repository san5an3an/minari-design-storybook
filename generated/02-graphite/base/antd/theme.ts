// @interop Ant Design 기반 Graphite 테마 정의

import { theme as antdTheme, type ThemeConfig } from "antd";

type Rem<T> = { [K in keyof T]: T[K] | string };
type Token = Rem<NonNullable<ThemeConfig["token"]>>;

const antdDefault = antdTheme.getDesignToken;
const button = {
  controlHeight: antdDefault.controlHeight,
  controlHeightSM: antdDefault.controlHeightSM,
  controlHeightLG: antdDefault.controlHeightLG,
  contentFontSize: antdDefault.fontSize,
  contentFontSizeSM: antdDefault.fontSize,
  contentFontSizeLG: antdDefault.fontSizeLG,
};

const components = { ...{
  "Modal": {
    "borderRadiusLG": "0.5rem"
  },
  "Drawer": {
    "borderRadiusLG": "0.5rem"
  },
  "Notification": {
    "borderRadiusLG": "0.5rem"
  },
  "Message": {
    "borderRadiusLG": "0.5rem"
  },
  "Popover": {
    "borderRadiusLG": "0.5rem"
  },
  "Tooltip": {
    "borderRadius": "0.125rem"
  },
  "Card": {
    "borderRadiusLG": "0.375rem"
  },
  "Collapse": {
    "borderRadiusLG": "0.375rem"
  },
  "Table": {
    "borderRadiusLG": "0.375rem"
  },
  "Alert": {
    "borderRadiusLG": "0.375rem"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#181717",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#181717",
  "colorLink": "#050505",
  "colorTextBase": "#080809",
  "colorBgBase": "#f7f8f8",
  "fontSize": 16,
  "borderRadius": "0.25rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 32
} satisfies Token;
const themeOverrides = {
  "colorBgContainer": "#f7f8f8",
  "colorBgElevated": "#f7f8f8",
  "colorBgLayout": "#f0f0f0",
  "colorBgSpotlight": "#656769",
  "colorBgMask": "#0000008f",
  "colorText": "#080809",
  "colorTextSecondary": "#5b5d5e",
  "colorTextTertiary": "#5b5d5e",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#c9cacb",
  "colorBorderSecondary": "#d6d7d8",
  "colorPrimaryBg": "#b7b7b7",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#3a3a3a",
  "colorErrorBorder": "#feb4ad",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 28,
  "controlHeightLG": 37,
  "boxShadow": "none",
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #161b201f"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm, antdTheme.compactAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#181717",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#181717",
  "colorLink": "#9a9999",
  "colorTextBase": "#f8f9fb",
  "colorBgBase": "#191919",
  "fontSize": 16,
  "borderRadius": "0.25rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 32
} satisfies Token;
const darkThemeOverrides = {
  "colorBgContainer": "#191919",
  "colorBgElevated": "#191919",
  "colorBgLayout": "#222222",
  "colorBgSpotlight": "#8d8f91",
  "colorBgMask": "#0000008f",
  "colorText": "#f8f9fb",
  "colorTextSecondary": "#989a9b",
  "colorTextTertiary": "#989a9b",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#464748",
  "colorBorderSecondary": "#393a3b",
  "colorPrimaryBg": "#101010",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#151515",
  "colorErrorBorder": "#6f322e",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 28,
  "controlHeightLG": 37,
  "boxShadow": "none",
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #161b201f"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#f5bbbc",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#f5bbbc",
  "colorLink": "#ffdede",
  "colorTextBase": "#f0f1f2",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": "0.25rem",
  "lineWidth": 2,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 34
} satisfies Token;
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080808",
  "colorBgSpotlight": "#d8dadc",
  "colorBgMask": "#0000008f",
  "colorText": "#f0f1f2",
  "colorTextSecondary": "#e4e5e7",
  "colorTextTertiary": "#e4e5e7",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#808183",
  "colorBorderSecondary": "#696a6a",
  "colorPrimaryBg": "#0c0707",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#977a7a",
  "colorErrorBorder": "#ae706b",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 30,
  "controlHeightLG": 39,
  "boxShadow": "none",
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #161b201f"
} satisfies Token;
export const highContrastTheme = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...highContrastThemeSeed, ...highContrastThemeOverrides },
  components,
} as unknown as ThemeConfig;

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
