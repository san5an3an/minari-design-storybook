// @interop Ant Design 기반 Moss 테마 정의

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
  "colorPrimary": "#73bbad",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#73bbad",
  "colorLink": "#3f776c",
  "colorTextBase": "#080906",
  "colorBgBase": "#f7f8f7",
  "fontSize": 16,
  "borderRadius": 12,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f7f8f7",
  "colorBgElevated": "#f7f8f7",
  "colorBgLayout": "#f0f0ef",
  "colorBgSpotlight": "#9a9e96",
  "colorBgMask": "#0000008f",
  "colorText": "#080906",
  "colorTextSecondary": "#6a6e68",
  "colorTextTertiary": "#6a6e68",
  "colorBorder": "#c8cbc6",
  "colorBorderSecondary": "#d6d7d4",
  "colorPrimaryBg": "#e8f3f0",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#aed3cb",
  "colorErrorBorder": "#feb4ad",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": 6,
  "borderRadiusLG": 16,
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 35,
  "fontSizeHeading2": 28,
  "fontSizeHeading3": 22,
  "fontSizeHeading4": 20,
  "fontSizeHeading5": 18,
  "controlHeightSM": 27,
  "controlHeightLG": 45,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#438b7e",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#438b7e",
  "colorLink": "#6ba499",
  "colorTextBase": "#f8faf6",
  "colorBgBase": "#191918",
  "fontSize": 16,
  "borderRadius": 12,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#191918",
  "colorBgElevated": "#191918",
  "colorBgLayout": "#222221",
  "colorBgSpotlight": "#8c9089",
  "colorBgMask": "#0000008f",
  "colorText": "#f8faf6",
  "colorTextSecondary": "#979a94",
  "colorTextTertiary": "#979a94",
  "colorBorder": "#464844",
  "colorBorderSecondary": "#393a38",
  "colorPrimaryBg": "#1c2422",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#2d4f48",
  "colorErrorBorder": "#6f322e",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 6,
  "borderRadiusLG": 16,
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 35,
  "fontSizeHeading2": 28,
  "fontSizeHeading3": 22,
  "fontSizeHeading4": 20,
  "fontSizeHeading5": 18,
  "controlHeightSM": 27,
  "controlHeightLG": 45,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#96d6c9",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#96d6c9",
  "colorLink": "#bbefe4",
  "colorTextBase": "#eff1ed",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 12,
  "lineWidth": 2,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 37
} satisfies ThemeConfig["token"];
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080808",
  "colorBgSpotlight": "#d7dbd4",
  "colorBgMask": "#0000008f",
  "colorText": "#eff1ed",
  "colorTextSecondary": "#e3e6e0",
  "colorTextTertiary": "#e3e6e0",
  "colorBorder": "#80827e",
  "colorBorderSecondary": "#686a67",
  "colorPrimaryBg": "#040a08",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#688881",
  "colorErrorBorder": "#ae706b",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": 6,
  "borderRadiusLG": 16,
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 35,
  "fontSizeHeading2": 28,
  "fontSizeHeading3": 22,
  "fontSizeHeading4": 20,
  "fontSizeHeading5": 18,
  "controlHeightSM": 29,
  "controlHeightLG": 47,
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
