// @interop Ant Design 기반 Mint 테마 정의

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
  "colorPrimary": "#71bbb1",
  "colorError": "#c84d42",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#71bbb1",
  "colorLink": "#3d776f",
  "colorTextBase": "#070808",
  "colorBgBase": "#f7f8f8",
  "fontSize": 16,
  "borderRadius": 16,
  "lineWidth": 1,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 44
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f7f8f8",
  "colorBgElevated": "#f7f8f8",
  "colorBgLayout": "#eff0f0",
  "colorBgSpotlight": "#999d9b",
  "colorBgMask": "#0000008f",
  "colorText": "#070808",
  "colorTextSecondary": "#6a6d6c",
  "colorTextTertiary": "#6a6d6c",
  "colorBorder": "#c8cac9",
  "colorBorderSecondary": "#d5d7d6",
  "colorPrimaryBg": "#e8f3f1",
  "colorErrorBg": "#ffebe8",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#add3cd",
  "colorErrorBorder": "#feb4aa",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
  "controlInteractiveSize": 24,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": 30,
  "fontSizeHeading2": 25,
  "fontSizeHeading3": 21,
  "fontSizeHeading4": 19,
  "fontSizeHeading5": 18,
  "controlHeightSM": 36,
  "controlHeightLG": 53,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#418b82",
  "colorError": "#d25549",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#418b82",
  "colorLink": "#6aa49c",
  "colorTextBase": "#f7faf9",
  "colorBgBase": "#181919",
  "fontSize": 16,
  "borderRadius": 16,
  "lineWidth": 1,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 44
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#181919",
  "colorBgElevated": "#181919",
  "colorBgLayout": "#222222",
  "colorBgSpotlight": "#8b8f8d",
  "colorBgMask": "#0000008f",
  "colorText": "#f7faf9",
  "colorTextSecondary": "#969a98",
  "colorTextTertiary": "#969a98",
  "colorBorder": "#464847",
  "colorBorderSecondary": "#393a3a",
  "colorPrimaryBg": "#1c2423",
  "colorErrorBg": "#2d1d1b",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#2c4f4a",
  "colorErrorBorder": "#6f322b",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
  "controlInteractiveSize": 24,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": 30,
  "fontSizeHeading2": 25,
  "fontSizeHeading3": 21,
  "fontSizeHeading4": 19,
  "fontSizeHeading5": 18,
  "controlHeightSM": 36,
  "controlHeightLG": 53,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#94d6cc",
  "colorError": "#ffb8ad",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#94d6cc",
  "colorLink": "#baefe7",
  "colorTextBase": "#eff1f0",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 16,
  "lineWidth": 2,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 46
} satisfies ThemeConfig["token"];
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080808",
  "colorBgSpotlight": "#d7dbd9",
  "colorBgMask": "#0000008f",
  "colorText": "#eff1f0",
  "colorTextSecondary": "#e2e6e4",
  "colorTextTertiary": "#e2e6e4",
  "colorBorder": "#7f8280",
  "colorBorderSecondary": "#686a69",
  "colorPrimaryBg": "#040a09",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#678883",
  "colorErrorBorder": "#ae7168",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
  "controlInteractiveSize": 24,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": 30,
  "fontSizeHeading2": 25,
  "fontSizeHeading3": 21,
  "fontSizeHeading4": 19,
  "fontSizeHeading5": 18,
  "controlHeightSM": 38,
  "controlHeightLG": 55,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
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
