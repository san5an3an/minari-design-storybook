// @interop Ant Design 기반 Crimson 테마 정의

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
  "colorPrimary": "#7f1d1d",
  "colorError": "#e50914",
  "colorSuccess": "#35ca68",
  "colorWarning": "#daa500",
  "colorInfo": "#7f1d1d",
  "colorLink": "#5a0d0f",
  "colorTextBase": "#0a0809",
  "colorBgBase": "#f8f7f8",
  "fontSize": 16,
  "borderRadius": 4,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 32
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f8f7f8",
  "colorBgElevated": "#f8f7f8",
  "colorBgLayout": "#f1f0f0",
  "colorBgSpotlight": "#696565",
  "colorBgMask": "#0000008f",
  "colorText": "#0a0809",
  "colorTextSecondary": "#5f5b5c",
  "colorTextTertiary": "#5f5b5c",
  "colorBorder": "#ccc9c9",
  "colorBorderSecondary": "#d8d6d6",
  "colorPrimaryBg": "#d6c4c1",
  "colorErrorBg": "#f2d1cc",
  "colorSuccessBg": "#e3f6e6",
  "colorWarningBg": "#f9efda",
  "colorPrimaryBorder": "#8c5651",
  "colorErrorBorder": "#d97468",
  "colorSuccessBorder": "#99dda7",
  "colorWarningBorder": "#e8c57b",
  "borderRadiusSM": 2,
  "borderRadiusLG": 6,
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": 30,
  "fontSizeHeading2": 25,
  "fontSizeHeading3": 21,
  "fontSizeHeading4": 19,
  "fontSizeHeading5": 18,
  "controlHeightSM": 28,
  "controlHeightLG": 37,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm, antdTheme.compactAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#7f1d1d",
  "colorError": "#e50914",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#7f1d1d",
  "colorLink": "#d9827a",
  "colorTextBase": "#fcf8f9",
  "colorBgBase": "#191919",
  "fontSize": 16,
  "borderRadius": 4,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 32
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#191919",
  "colorBgElevated": "#191919",
  "colorBgLayout": "#222222",
  "colorBgSpotlight": "#928d8e",
  "colorBgMask": "#0000008f",
  "colorText": "#fcf8f9",
  "colorTextSecondary": "#9c9898",
  "colorTextTertiary": "#9c9898",
  "colorBorder": "#494647",
  "colorBorderSecondary": "#3b393a",
  "colorPrimaryBg": "#231615",
  "colorErrorBg": "#371f1c",
  "colorSuccessBg": "#18261b",
  "colorWarningBg": "#292111",
  "colorPrimaryBorder": "#562522",
  "colorErrorBorder": "#9d3e35",
  "colorSuccessBorder": "#0e5627",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 2,
  "borderRadiusLG": 6,
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": 30,
  "fontSizeHeading2": 25,
  "fontSizeHeading3": 21,
  "fontSizeHeading4": 19,
  "fontSizeHeading5": 18,
  "controlHeightSM": 28,
  "controlHeightLG": 37,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#ffb6c2",
  "colorError": "#ffb8ad",
  "colorSuccess": "#6ce08a",
  "colorWarning": "#fac130",
  "colorInfo": "#ffb6c2",
  "colorLink": "#ffdfe4",
  "colorTextBase": "#f3f0f1",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 4,
  "lineWidth": 2,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 34
} satisfies ThemeConfig["token"];
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080808",
  "colorBgSpotlight": "#ddd9d9",
  "colorBgMask": "#0000008f",
  "colorText": "#f3f0f1",
  "colorTextSecondary": "#e8e4e5",
  "colorTextTertiary": "#e8e4e5",
  "colorBorder": "#838181",
  "colorBorderSecondary": "#6b696a",
  "colorPrimaryBg": "#120406",
  "colorErrorBg": "#120403",
  "colorSuccessBg": "#020b04",
  "colorWarningBg": "#0d0700",
  "colorPrimaryBorder": "#b76978",
  "colorErrorBorder": "#b86b61",
  "colorSuccessBorder": "#558f62",
  "colorWarningBorder": "#9b7d3c",
  "borderRadiusSM": 2,
  "borderRadiusLG": 6,
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": 30,
  "fontSizeHeading2": 25,
  "fontSizeHeading3": 21,
  "fontSizeHeading4": 19,
  "fontSizeHeading5": 18,
  "controlHeightSM": 30,
  "controlHeightLG": 39,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
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
