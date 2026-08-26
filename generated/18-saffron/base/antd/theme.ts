// @interop Ant Design 기반 Saffron 테마 정의

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
  "colorPrimary": "#ff9900",
  "colorError": "#dd3338",
  "colorSuccess": "#35ca68",
  "colorWarning": "#daa500",
  "colorInfo": "#ff9900",
  "colorLink": "#9a5a00",
  "colorTextBase": "#0b0805",
  "colorBgBase": "#f8f8f7",
  "fontSize": 16,
  "borderRadius": 12,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f8f8f7",
  "colorBgElevated": "#f8f8f7",
  "colorBgLayout": "#f1f0ee",
  "colorBgSpotlight": "#a19b92",
  "colorBgMask": "#0000008f",
  "colorText": "#0b0805",
  "colorTextSecondary": "#716c65",
  "colorTextTertiary": "#716c65",
  "colorBorder": "#cdc9c4",
  "colorBorderSecondary": "#d9d6d2",
  "colorPrimaryBg": "#f9e8d9",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e3f6e6",
  "colorWarningBg": "#f9efda",
  "colorPrimaryBorder": "#f4bc86",
  "colorErrorBorder": "#ffb4ad",
  "colorSuccessBorder": "#99dda7",
  "colorWarningBorder": "#e8c57b",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2618001a, 0 0.0625rem 0.1875rem 0.0625rem #26180014",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #26180029, 0 0.125rem 0.375rem 0 #2618001a"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#ff9900",
  "colorError": "#e63e40",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#ff9900",
  "colorLink": "#ffc48d",
  "colorTextBase": "#fdf9f3",
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
  "colorBgLayout": "#232221",
  "colorBgSpotlight": "#948e84",
  "colorBgMask": "#0000008f",
  "colorText": "#fdf9f3",
  "colorTextSecondary": "#9e9991",
  "colorTextTertiary": "#9e9991",
  "colorBorder": "#4a4742",
  "colorBorderSecondary": "#3c3a36",
  "colorPrimaryBg": "#3e3125",
  "colorErrorBg": "#301c1a",
  "colorSuccessBg": "#18261b",
  "colorWarningBg": "#292111",
  "colorPrimaryBorder": "#b9844f",
  "colorErrorBorder": "#782826",
  "colorSuccessBorder": "#0e5627",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2618001a, 0 0.0625rem 0.1875rem 0.0625rem #26180014",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #26180029, 0 0.125rem 0.375rem 0 #2618001a"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#ffbc79",
  "colorError": "#ffb8b1",
  "colorSuccess": "#6ce08a",
  "colorWarning": "#fac130",
  "colorInfo": "#ffbc79",
  "colorLink": "#ffe1c5",
  "colorTextBase": "#f3f0eb",
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
  "colorBgLayout": "#090807",
  "colorBgSpotlight": "#ded9cf",
  "colorBgMask": "#0000008f",
  "colorText": "#f3f0eb",
  "colorTextSecondary": "#e9e4dc",
  "colorTextTertiary": "#e9e4dc",
  "colorBorder": "#83817c",
  "colorBorderSecondary": "#6c6966",
  "colorPrimaryBg": "#100600",
  "colorErrorBg": "#120404",
  "colorSuccessBg": "#020b04",
  "colorWarningBg": "#0d0700",
  "colorPrimaryBorder": "#ac753b",
  "colorErrorBorder": "#b96a64",
  "colorSuccessBorder": "#558f62",
  "colorWarningBorder": "#9b7d3c",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2618001a, 0 0.0625rem 0.1875rem 0.0625rem #26180014",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #26180029, 0 0.125rem 0.375rem 0 #2618001a"
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
