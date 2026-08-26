// @interop Ant Design 기반 Ember 테마 정의

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
  "colorPrimary": "#f38020",
  "colorError": "#991b1b",
  "colorSuccess": "#35ca68",
  "colorWarning": "#daa500",
  "colorInfo": "#f38020",
  "colorLink": "#a25000",
  "colorTextBase": "#0c0806",
  "colorBgBase": "#f8f7f7",
  "fontSize": 16,
  "borderRadius": 12,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f8f7f7",
  "colorBgElevated": "#f8f7f7",
  "colorBgLayout": "#f1f0ef",
  "colorBgSpotlight": "#a49b95",
  "colorBgMask": "#0000008f",
  "colorText": "#0c0806",
  "colorTextSecondary": "#726c66",
  "colorTextTertiary": "#726c66",
  "colorBorder": "#cec9c5",
  "colorBorderSecondary": "#dad6d3",
  "colorPrimaryBg": "#f6e2d6",
  "colorErrorBg": "#ddc7c4",
  "colorSuccessBg": "#e3f6e6",
  "colorWarningBg": "#f9efda",
  "colorPrimaryBorder": "#e9a980",
  "colorErrorBorder": "#a05d56",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2915051a, 0 0.0625rem 0.1875rem 0.0625rem #29150514",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #29150529, 0 0.125rem 0.375rem 0 #2915051a"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#f38020",
  "colorError": "#991b1b",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#f38020",
  "colorLink": "#ffa86f",
  "colorTextBase": "#fef8f4",
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
  "colorBgSpotlight": "#958d87",
  "colorBgMask": "#0000008f",
  "colorText": "#fef8f4",
  "colorTextSecondary": "#9f9892",
  "colorTextTertiary": "#9f9892",
  "colorBorder": "#4a4643",
  "colorBorderSecondary": "#3c3937",
  "colorPrimaryBg": "#3b2c23",
  "colorErrorBg": "#281817",
  "colorSuccessBg": "#18261b",
  "colorWarningBg": "#292111",
  "colorPrimaryBorder": "#ae724a",
  "colorErrorBorder": "#682b26",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2915051a, 0 0.0625rem 0.1875rem 0.0625rem #29150514",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #29150529, 0 0.125rem 0.375rem 0 #2915051a"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#ffbb8f",
  "colorError": "#ffb8b1",
  "colorSuccess": "#6ce08a",
  "colorWarning": "#fac130",
  "colorInfo": "#ffbb8f",
  "colorLink": "#ffe1ce",
  "colorTextBase": "#f4f0ec",
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
  "colorBgSpotlight": "#e0d8d2",
  "colorBgMask": "#0000008f",
  "colorText": "#f4f0ec",
  "colorTextSecondary": "#ebe4de",
  "colorTextTertiary": "#ebe4de",
  "colorBorder": "#85817d",
  "colorBorderSecondary": "#6d6967",
  "colorPrimaryBg": "#110501",
  "colorErrorBg": "#120404",
  "colorSuccessBg": "#020b04",
  "colorWarningBg": "#0d0700",
  "colorPrimaryBorder": "#b27145",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2915051a, 0 0.0625rem 0.1875rem 0.0625rem #29150514",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #29150529, 0 0.125rem 0.375rem 0 #2915051a"
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
