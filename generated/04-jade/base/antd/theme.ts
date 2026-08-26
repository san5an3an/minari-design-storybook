// @interop Ant Design 기반 Jade 테마 정의

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
    "borderRadiusLG": 20
  },
  "Drawer": {
    "borderRadiusLG": 20
  },
  "Notification": {
    "borderRadiusLG": 20
  },
  "Message": {
    "borderRadiusLG": 20
  },
  "Popover": {
    "borderRadiusLG": 20
  },
  "Tooltip": {
    "borderRadius": 6
  },
  "Card": {
    "borderRadiusLG": 16
  },
  "Collapse": {
    "borderRadiusLG": 16
  },
  "Table": {
    "borderRadiusLG": 16
  },
  "Alert": {
    "borderRadiusLG": 16
  }
}, Button: button } satisfies ThemeConfig["components"];

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#47a248",
  "colorError": "#c84d42",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#007cb8",
  "colorLink": "#29702a",
  "colorTextBase": "#070807",
  "colorBgBase": "#f7f8f7",
  "fontSize": 16,
  "borderRadius": 12,
  "lineWidth": 1,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 43
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f7f8f7",
  "colorBgElevated": "#f7f8f7",
  "colorBgLayout": "#eff0ef",
  "colorBgSpotlight": "#999e99",
  "colorBgMask": "#0000008f",
  "colorText": "#070807",
  "colorTextSecondary": "#696e6a",
  "colorTextTertiary": "#696e6a",
  "colorBorder": "#c7cbc8",
  "colorBorderSecondary": "#d5d8d5",
  "colorPrimaryBg": "#d6e3d5",
  "colorErrorBg": "#ffebe8",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#84b282",
  "colorErrorBorder": "#feb4aa",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": 6,
  "borderRadiusLG": 16,
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
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#47a248",
  "colorError": "#d25549",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#1286c2",
  "colorLink": "#73bb72",
  "colorTextBase": "#f7faf7",
  "colorBgBase": "#181918",
  "fontSize": 16,
  "borderRadius": 12,
  "lineWidth": 1,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 43
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#181918",
  "colorBgElevated": "#181918",
  "colorBgLayout": "#222222",
  "colorBgSpotlight": "#8a908b",
  "colorBgMask": "#0000008f",
  "colorText": "#f7faf7",
  "colorTextSecondary": "#959a96",
  "colorTextTertiary": "#959a96",
  "colorBorder": "#454846",
  "colorBorderSecondary": "#383b39",
  "colorPrimaryBg": "#232e23",
  "colorErrorBg": "#2d1d1b",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#4f7b4e",
  "colorErrorBorder": "#6f322b",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 6,
  "borderRadiusLG": 16,
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
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#90db8d",
  "colorError": "#ffb8ad",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#8ed1ff",
  "colorLink": "#b6f4b3",
  "colorTextBase": "#eef1ee",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 12,
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
  "colorBgSpotlight": "#d5dbd6",
  "colorBgMask": "#0000008f",
  "colorText": "#eef1ee",
  "colorTextSecondary": "#e1e6e2",
  "colorTextTertiary": "#e1e6e2",
  "colorBorder": "#7f827f",
  "colorBorderSecondary": "#676a68",
  "colorPrimaryBg": "#040a04",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#668b64",
  "colorErrorBorder": "#ae7168",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": 6,
  "borderRadiusLG": 16,
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
