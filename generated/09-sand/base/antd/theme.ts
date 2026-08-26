// @interop Ant Design 기반 Sand 테마 정의

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
  "colorPrimary": "#c5ab77",
  "colorError": "#8e1f0b",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#c5ab77",
  "colorLink": "#7f6a43",
  "colorTextBase": "#0c0805",
  "colorBgBase": "#f8f7f7",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 1,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 43
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f8f7f7",
  "colorBgElevated": "#f8f7f7",
  "colorBgLayout": "#f1f0ee",
  "colorBgSpotlight": "#a49c92",
  "colorBgMask": "#0000008f",
  "colorText": "#0c0805",
  "colorTextSecondary": "#736b64",
  "colorTextTertiary": "#736b64",
  "colorBorder": "#cec9c3",
  "colorBorderSecondary": "#dad6d2",
  "colorPrimaryBg": "#f4f0e7",
  "colorErrorBg": "#dac6c1",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#d7c8ac",
  "colorErrorBorder": "#975b4f",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 44,
  "fontSizeHeading2": 33,
  "fontSizeHeading3": 25,
  "fontSizeHeading4": 21,
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
  "colorPrimary": "#947b48",
  "colorError": "#8e1f0b",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#947b48",
  "colorLink": "#ac976e",
  "colorTextBase": "#fef8f2",
  "colorBgBase": "#191918",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 1,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 43
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#191918",
  "colorBgElevated": "#191918",
  "colorBgLayout": "#232221",
  "colorBgSpotlight": "#968d83",
  "colorBgMask": "#0000008f",
  "colorText": "#fef8f2",
  "colorTextSecondary": "#9f9890",
  "colorTextTertiary": "#9f9890",
  "colorBorder": "#4b4641",
  "colorBorderSecondary": "#3d3936",
  "colorPrimaryBg": "#25221c",
  "colorErrorBg": "#261815",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#52452d",
  "colorErrorBorder": "#60291f",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 44,
  "fontSizeHeading2": 33,
  "fontSizeHeading3": 25,
  "fontSizeHeading4": 21,
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
  "colorPrimary": "#dfc798",
  "colorError": "#ffb8ad",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#dfc798",
  "colorLink": "#f7e3bc",
  "colorTextBase": "#f5f0ea",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 2,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 45
} satisfies ThemeConfig["token"];
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#090807",
  "colorBgSpotlight": "#e1d8cf",
  "colorBgMask": "#0000008f",
  "colorText": "#f5f0ea",
  "colorTextSecondary": "#ebe4dc",
  "colorTextTertiary": "#ebe4dc",
  "colorBorder": "#85817c",
  "colorBorderSecondary": "#6d6966",
  "colorPrimaryBg": "#0a0804",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#8c8068",
  "colorErrorBorder": "#ae7168",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": 44,
  "fontSizeHeading2": 33,
  "fontSizeHeading3": 25,
  "fontSizeHeading4": 21,
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
