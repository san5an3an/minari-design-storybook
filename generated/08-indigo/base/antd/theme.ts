// @interop Ant Design 기반 Indigo 테마 정의

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
    "borderRadiusLG": 8
  },
  "Drawer": {
    "borderRadiusLG": 8
  },
  "Notification": {
    "borderRadiusLG": 8
  },
  "Message": {
    "borderRadiusLG": 8
  },
  "Popover": {
    "borderRadiusLG": 8
  },
  "Tooltip": {
    "borderRadius": 2
  },
  "Card": {
    "borderRadiusLG": 6
  },
  "Collapse": {
    "borderRadiusLG": 6
  },
  "Table": {
    "borderRadiusLG": 6
  },
  "Alert": {
    "borderRadiusLG": 6
  }
}, Button: button } satisfies ThemeConfig["components"];

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#635bff",
  "colorError": "#dd3338",
  "colorSuccess": "#35ca68",
  "colorWarning": "#daa500",
  "colorInfo": "#635bff",
  "colorLink": "#4e49c9",
  "colorTextBase": "#08080b",
  "colorBgBase": "#f7f8f8",
  "fontSize": 16,
  "borderRadius": 4,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f7f8f8",
  "colorBgElevated": "#f7f8f8",
  "colorBgLayout": "#f0f0f1",
  "colorBgSpotlight": "#65666c",
  "colorBgMask": "#0000008f",
  "colorText": "#08080b",
  "colorTextSecondary": "#5b5c61",
  "colorTextTertiary": "#5b5c61",
  "colorBorder": "#c9c9cd",
  "colorBorderSecondary": "#d6d6da",
  "colorPrimaryBg": "#d3d8f3",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e3f6e6",
  "colorWarningBg": "#f9efda",
  "colorPrimaryBorder": "#838be2",
  "colorErrorBorder": "#ffb4ad",
  "colorSuccessBorder": "#99dda7",
  "colorWarningBorder": "#e8c57b",
  "borderRadiusSM": 2,
  "borderRadiusLG": 6,
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
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #1819281f"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#635bff",
  "colorError": "#e63e40",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#635bff",
  "colorLink": "#8991ff",
  "colorTextBase": "#f8f9fd",
  "colorBgBase": "#191919",
  "fontSize": 16,
  "borderRadius": 4,
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
  "colorBgSpotlight": "#8d8e94",
  "colorBgMask": "#0000008f",
  "colorText": "#f8f9fd",
  "colorTextSecondary": "#98999e",
  "colorTextTertiary": "#98999e",
  "colorBorder": "#46474a",
  "colorBorderSecondary": "#393a3c",
  "colorPrimaryBg": "#222439",
  "colorErrorBg": "#301c1a",
  "colorSuccessBg": "#18261b",
  "colorWarningBg": "#292111",
  "colorPrimaryBorder": "#5155a7",
  "colorErrorBorder": "#782826",
  "colorSuccessBorder": "#0e5627",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 2,
  "borderRadiusLG": 6,
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
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #1819281f"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#bfc6ff",
  "colorError": "#ffb8b1",
  "colorSuccess": "#6ce08a",
  "colorWarning": "#fac130",
  "colorInfo": "#bfc6ff",
  "colorLink": "#e1e5ff",
  "colorTextBase": "#f0f0f4",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 4,
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
  "colorBgSpotlight": "#d8d9e0",
  "colorBgMask": "#0000008f",
  "colorText": "#f0f0f4",
  "colorTextSecondary": "#e4e5ea",
  "colorTextTertiary": "#e4e5ea",
  "colorBorder": "#808184",
  "colorBorderSecondary": "#696a6c",
  "colorPrimaryBg": "#060714",
  "colorErrorBg": "#120404",
  "colorSuccessBg": "#020b04",
  "colorWarningBg": "#0d0700",
  "colorPrimaryBorder": "#747bbe",
  "colorErrorBorder": "#b96a64",
  "colorSuccessBorder": "#558f62",
  "colorWarningBorder": "#9b7d3c",
  "borderRadiusSM": 2,
  "borderRadiusLG": 6,
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
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #1819281f"
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
