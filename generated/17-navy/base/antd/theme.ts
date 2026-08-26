// @interop Ant Design 기반 Navy 테마 정의

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
  "colorPrimary": "#0055ff",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#007cb8",
  "colorLink": "#0241c6",
  "colorTextBase": "#07080c",
  "colorBgBase": "#f7f8f9",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 31
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f7f8f9",
  "colorBgElevated": "#f7f8f9",
  "colorBgLayout": "#eff0f2",
  "colorBgSpotlight": "#62676e",
  "colorBgMask": "#0000008f",
  "colorText": "#07080c",
  "colorTextSecondary": "#595d63",
  "colorTextTertiary": "#595d63",
  "colorBorder": "#c7cacf",
  "colorBorderSecondary": "#d4d7db",
  "colorPrimaryBg": "#c7d6f1",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#5986df",
  "colorErrorBorder": "#feb4ad",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 16,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 35,
  "fontSizeHeading2": 28,
  "fontSizeHeading3": 22,
  "fontSizeHeading4": 20,
  "fontSizeHeading5": 18,
  "controlHeightSM": 27,
  "controlHeightLG": 37,
  "boxShadow": "0 0.0625rem 0.125rem 0 #0f1a2e1a, 0 0.0625rem 0.1875rem 0.0625rem #0f1a2e14",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #0f1a2e29, 0 0.125rem 0.375rem 0 #0f1a2e1a"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm, antdTheme.compactAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#0055ff",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#1286c2",
  "colorLink": "#6498ff",
  "colorTextBase": "#f6faff",
  "colorBgBase": "#181919",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 31
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#181919",
  "colorBgElevated": "#181919",
  "colorBgLayout": "#212223",
  "colorBgSpotlight": "#8a8f97",
  "colorBgMask": "#0000008f",
  "colorText": "#f6faff",
  "colorTextSecondary": "#9599a1",
  "colorTextTertiary": "#9599a1",
  "colorBorder": "#45474b",
  "colorBorderSecondary": "#383a3d",
  "colorPrimaryBg": "#182337",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#2750a3",
  "colorErrorBorder": "#6f322e",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 16,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 35,
  "fontSizeHeading2": 28,
  "fontSizeHeading3": 22,
  "fontSizeHeading4": 20,
  "fontSizeHeading5": 18,
  "controlHeightSM": 27,
  "controlHeightLG": 37,
  "boxShadow": "0 0.0625rem 0.125rem 0 #0f1a2e1a, 0 0.0625rem 0.1875rem 0.0625rem #0f1a2e14",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #0f1a2e29, 0 0.125rem 0.375rem 0 #0f1a2e1a"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#aecbff",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#8ed1ff",
  "colorLink": "#d9e6ff",
  "colorTextBase": "#eef1f5",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 2,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 33
} satisfies ThemeConfig["token"];
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080809",
  "colorBgSpotlight": "#d5dae2",
  "colorBgMask": "#0000008f",
  "colorText": "#eef1f5",
  "colorTextSecondary": "#e1e5ec",
  "colorTextTertiary": "#e1e5ec",
  "colorBorder": "#7f8185",
  "colorBorderSecondary": "#686a6d",
  "colorPrimaryBg": "#050811",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#6a82ad",
  "colorErrorBorder": "#ae706b",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 16,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 35,
  "fontSizeHeading2": 28,
  "fontSizeHeading3": 22,
  "fontSizeHeading4": 20,
  "fontSizeHeading5": 18,
  "controlHeightSM": 29,
  "controlHeightLG": 39,
  "boxShadow": "0 0.0625rem 0.125rem 0 #0f1a2e1a, 0 0.0625rem 0.1875rem 0.0625rem #0f1a2e14",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #0f1a2e29, 0 0.125rem 0.375rem 0 #0f1a2e1a"
} satisfies ThemeConfig["token"];
export const highContrastTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...highContrastThemeSeed, ...highContrastThemeOverrides },
  components,
};

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
