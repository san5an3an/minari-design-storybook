// @interop Ant Design 기반 Violet 테마 정의

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
    "borderRadiusLG": 16
  },
  "Drawer": {
    "borderRadiusLG": 16
  },
  "Notification": {
    "borderRadiusLG": 16
  },
  "Message": {
    "borderRadiusLG": 16
  },
  "Popover": {
    "borderRadiusLG": 16
  },
  "Tooltip": {
    "borderRadius": 4
  },
  "Card": {
    "borderRadiusLG": 12
  },
  "Collapse": {
    "borderRadiusLG": 12
  },
  "Table": {
    "borderRadiusLG": 12
  },
  "Alert": {
    "borderRadiusLG": 12
  }
}, Button: button } satisfies ThemeConfig["components"];

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#5e6ad2",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#007cb8",
  "colorLink": "#4953a5",
  "colorTextBase": "#09080a",
  "colorBgBase": "#f8f8f8",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f8f8f8",
  "colorBgElevated": "#f8f8f8",
  "colorBgLayout": "#f0f0f1",
  "colorBgSpotlight": "#67666b",
  "colorBgMask": "#0000008f",
  "colorText": "#09080a",
  "colorTextSecondary": "#5d5c60",
  "colorTextTertiary": "#5d5c60",
  "colorBorder": "#cac9cc",
  "colorBorderSecondary": "#d7d6d9",
  "colorPrimaryBg": "#d3d7ea",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#828dc7",
  "colorErrorBorder": "#feb4ad",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 44,
  "fontSizeHeading2": 33,
  "fontSizeHeading3": 25,
  "fontSizeHeading4": 21,
  "fontSizeHeading5": 18,
  "controlHeightSM": 27,
  "controlHeightLG": 45,
  "boxShadow": "0 0 1rem 0 #1b182526",
  "boxShadowSecondary": "0 0 3rem 0 #1b182533, 0 0.25rem 0.75rem 0 #1b18251f"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#5e6ad2",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#1286c2",
  "colorLink": "#8594ec",
  "colorTextBase": "#f9f9fc",
  "colorBgBase": "#191919",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#191919",
  "colorBgElevated": "#191919",
  "colorBgLayout": "#222223",
  "colorBgSpotlight": "#8f8e93",
  "colorBgMask": "#0000008f",
  "colorText": "#f9f9fc",
  "colorTextSecondary": "#9a999d",
  "colorTextTertiary": "#9a999d",
  "colorBorder": "#474749",
  "colorBorderSecondary": "#3a3a3c",
  "colorPrimaryBg": "#222532",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#4f598e",
  "colorErrorBorder": "#6f322e",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 44,
  "fontSizeHeading2": 33,
  "fontSizeHeading3": 25,
  "fontSizeHeading4": 21,
  "fontSizeHeading5": 18,
  "controlHeightSM": 27,
  "controlHeightLG": 45,
  "boxShadow": "0 0 1rem 0 #1b182526",
  "boxShadowSecondary": "0 0 3rem 0 #1b182533, 0 0.25rem 0.75rem 0 #1b18251f"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#bbc7ff",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#8ed1ff",
  "colorLink": "#dee4ff",
  "colorTextBase": "#f1f0f3",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 2,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 37
} satisfies ThemeConfig["token"];
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080809",
  "colorBgSpotlight": "#dad9de",
  "colorBgMask": "#0000008f",
  "colorText": "#f1f0f3",
  "colorTextSecondary": "#e5e4e9",
  "colorTextTertiary": "#e5e4e9",
  "colorBorder": "#818183",
  "colorBorderSecondary": "#6a696b",
  "colorPrimaryBg": "#060711",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#757ead",
  "colorErrorBorder": "#ae706b",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 44,
  "fontSizeHeading2": 33,
  "fontSizeHeading3": 25,
  "fontSizeHeading4": 21,
  "fontSizeHeading5": 18,
  "controlHeightSM": 29,
  "controlHeightLG": 47,
  "boxShadow": "0 0 1rem 0 #1b182526",
  "boxShadowSecondary": "0 0 3rem 0 #1b182533, 0 0.25rem 0.75rem 0 #1b18251f"
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
