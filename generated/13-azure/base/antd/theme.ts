// @interop Ant Design 기반 Azure 테마 정의

import { theme as antdTheme, type ThemeConfig } from "antd";

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
    "borderRadiusLG": 32
  },
  "Drawer": {
    "borderRadiusLG": 32
  },
  "Notification": {
    "borderRadiusLG": 32
  },
  "Message": {
    "borderRadiusLG": 32
  },
  "Popover": {
    "borderRadiusLG": 32
  },
  "Tooltip": {
    "borderRadius": 8
  },
  "Card": {
    "borderRadiusLG": 24
  },
  "Collapse": {
    "borderRadiusLG": 24
  },
  "Table": {
    "borderRadiusLG": 24
  },
  "Alert": {
    "borderRadiusLG": 24
  }
}, Button: button } satisfies ThemeConfig["components"];

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#0080ff",
  "colorError": "#c84d42",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#007cb8",
  "colorLink": "#005bb8",
  "colorTextBase": "#070809",
  "colorBgBase": "#f7f8f8",
  "fontSize": 16,
  "borderRadius": 16,
  "lineWidth": 1,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 43
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f7f8f8",
  "colorBgElevated": "#f7f8f8",
  "colorBgLayout": "#eff0f0",
  "colorBgSpotlight": "#999d9f",
  "colorBgMask": "#0000008f",
  "colorText": "#070809",
  "colorTextSecondary": "#6a6d6f",
  "colorTextTertiary": "#6a6d6f",
  "colorBorder": "#c8cacb",
  "colorBorderSecondary": "#d5d7d8",
  "colorPrimaryBg": "#cfdef4",
  "colorErrorBg": "#ffebe8",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#6da0e5",
  "colorErrorBorder": "#feb4aa",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 35,
  "fontSizeHeading2": 28,
  "fontSizeHeading3": 22,
  "fontSizeHeading4": 20,
  "fontSizeHeading5": 18,
  "controlHeightSM": 35,
  "controlHeightLG": 53,
  "boxShadow": "0 0.0625rem 0.125rem 0 #111c211a, 0 0.0625rem 0.1875rem 0.0625rem #111c2114",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #111c2129, 0 0.125rem 0.375rem 0 #111c211a"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#0080ff",
  "colorError": "#d25549",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#1286c2",
  "colorLink": "#5aa1ff",
  "colorTextBase": "#f7fafb",
  "colorBgBase": "#181919",
  "fontSize": 16,
  "borderRadius": 16,
  "lineWidth": 1,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 43
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#181919",
  "colorBgElevated": "#181919",
  "colorBgLayout": "#222222",
  "colorBgSpotlight": "#8b8f91",
  "colorBgMask": "#0000008f",
  "colorText": "#f7fafb",
  "colorTextSecondary": "#969a9b",
  "colorTextTertiary": "#969a9b",
  "colorBorder": "#454748",
  "colorBorderSecondary": "#393a3b",
  "colorPrimaryBg": "#1e2a39",
  "colorErrorBg": "#2d1d1b",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#386aaa",
  "colorErrorBorder": "#6f322b",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 35,
  "fontSizeHeading2": 28,
  "fontSizeHeading3": 22,
  "fontSizeHeading4": 20,
  "fontSizeHeading5": 18,
  "controlHeightSM": 35,
  "controlHeightLG": 53,
  "boxShadow": "0 0.0625rem 0.125rem 0 #111c211a, 0 0.0625rem 0.1875rem 0.0625rem #111c2114",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #111c2129, 0 0.125rem 0.375rem 0 #111c211a"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#a7ccff",
  "colorError": "#ffb8ad",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#8ed1ff",
  "colorLink": "#d5e7ff",
  "colorTextBase": "#eef1f2",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 16,
  "lineWidth": 2,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 45
} satisfies ThemeConfig["token"];
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080808",
  "colorBgSpotlight": "#d6dadc",
  "colorBgMask": "#0000008f",
  "colorText": "#eef1f2",
  "colorTextSecondary": "#e2e5e7",
  "colorTextTertiary": "#e2e5e7",
  "colorBorder": "#7f8282",
  "colorBorderSecondary": "#686a6a",
  "colorPrimaryBg": "#040811",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#6583ac",
  "colorErrorBorder": "#ae7168",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 35,
  "fontSizeHeading2": 28,
  "fontSizeHeading3": 22,
  "fontSizeHeading4": 20,
  "fontSizeHeading5": 18,
  "controlHeightSM": 37,
  "controlHeightLG": 55,
  "boxShadow": "0 0.0625rem 0.125rem 0 #111c211a, 0 0.0625rem 0.1875rem 0.0625rem #111c2114",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #111c2129, 0 0.125rem 0.375rem 0 #111c211a"
} satisfies ThemeConfig["token"];
export const highContrastTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...highContrastThemeSeed, ...highContrastThemeOverrides },
  components,
};

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
