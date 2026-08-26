// @interop Ant Design 기반 Rust 테마 정의

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
  "colorPrimary": "#9e6954",
  "colorError": "#eb0036",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#9e6954",
  "colorLink": "#7c5342",
  "colorTextBase": "#0c0706",
  "colorBgBase": "#f9f7f7",
  "fontSize": 16,
  "borderRadius": 4,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f9f7f7",
  "colorBgElevated": "#f9f7f7",
  "colorBgLayout": "#f2efee",
  "colorBgSpotlight": "#71645e",
  "colorBgMask": "#0000008f",
  "colorText": "#0c0706",
  "colorTextSecondary": "#655a56",
  "colorTextTertiary": "#655a56",
  "colorBorder": "#d0c8c4",
  "colorBorderSecondary": "#dcd5d2",
  "colorPrimaryBg": "#f8eeea",
  "colorErrorBg": "#f3d2d0",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#e2c2b5",
  "colorErrorBorder": "#de7574",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": 2,
  "borderRadiusLG": 6,
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
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#a7715c",
  "colorError": "#eb0036",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#a7715c",
  "colorLink": "#bd8f7d",
  "colorTextBase": "#fff8f5",
  "colorBgBase": "#191818",
  "fontSize": 16,
  "borderRadius": 4,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#191818",
  "colorBgElevated": "#191818",
  "colorBgLayout": "#232221",
  "colorBgSpotlight": "#9a8c86",
  "colorBgMask": "#0000008f",
  "colorText": "#fff8f5",
  "colorTextSecondary": "#a39792",
  "colorTextTertiary": "#a39792",
  "colorBorder": "#4d4542",
  "colorBorderSecondary": "#3e3936",
  "colorPrimaryBg": "#27201e",
  "colorErrorBg": "#38201f",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#5b4035",
  "colorErrorBorder": "#a13e41",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 2,
  "borderRadiusLG": 6,
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
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#f2bea8",
  "colorError": "#ffb8b4",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#f2bea8",
  "colorLink": "#ffdfd2",
  "colorTextBase": "#f7efec",
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
  "colorBgLayout": "#090807",
  "colorBgSpotlight": "#e5d7d1",
  "colorBgMask": "#0000008f",
  "colorText": "#f7efec",
  "colorTextSecondary": "#efe3de",
  "colorTextTertiary": "#efe3de",
  "colorBorder": "#87807c",
  "colorBorderSecondary": "#6e6866",
  "colorPrimaryBg": "#0c0705",
  "colorErrorBg": "#100505",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#967b70",
  "colorErrorBorder": "#ad706d",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": 2,
  "borderRadiusLG": 6,
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
