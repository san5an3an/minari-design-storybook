// @interop Ant Design 기반 Fog 테마 정의

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
  "colorPrimary": "#1d2d35",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#1d2d35",
  "colorLink": "#0f1c22",
  "colorTextBase": "#070809",
  "colorBgBase": "#f7f8f8",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 1,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 44
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f7f8f8",
  "colorBgElevated": "#f7f8f8",
  "colorBgLayout": "#eff0f0",
  "colorBgSpotlight": "#999d9f",
  "colorBgMask": "#0000008f",
  "colorText": "#070809",
  "colorTextSecondary": "#6a6d6f",
  "colorTextTertiary": "#6a6d6f",
  "colorBorder": "#c8cacb",
  "colorBorderSecondary": "#d5d7d8",
  "colorPrimaryBg": "#bcbfc1",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#454e53",
  "colorErrorBorder": "#feb4ad",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 24,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": 30,
  "fontSizeHeading2": 25,
  "fontSizeHeading3": 21,
  "fontSizeHeading4": 19,
  "fontSizeHeading5": 18,
  "controlHeightSM": 36,
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
  "colorPrimary": "#1d2d35",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#1d2d35",
  "colorLink": "#8d9ca4",
  "colorTextBase": "#f7fafb",
  "colorBgBase": "#181919",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 1,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 44
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#181919",
  "colorBgElevated": "#181919",
  "colorBgLayout": "#222222",
  "colorBgSpotlight": "#8b8f91",
  "colorBgMask": "#0000008f",
  "colorText": "#f7fafb",
  "colorTextSecondary": "#969a9b",
  "colorTextTertiary": "#969a9b",
  "colorBorder": "#454848",
  "colorBorderSecondary": "#393a3b",
  "colorPrimaryBg": "#111314",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#182024",
  "colorErrorBorder": "#6f322e",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 24,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": 30,
  "fontSizeHeading2": 25,
  "fontSizeHeading3": 21,
  "fontSizeHeading4": 19,
  "fontSizeHeading5": 18,
  "controlHeightSM": 36,
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
  "colorPrimary": "#9bd1ec",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#9bd1ec",
  "colorLink": "#c2eaff",
  "colorTextBase": "#eef1f2",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 8,
  "lineWidth": 2,
  "sizeUnit": 8,
  "sizeStep": 8,
  "wireframe": false,
  "controlHeight": 46
} satisfies ThemeConfig["token"];
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080808",
  "colorBgSpotlight": "#d6dadc",
  "colorBgMask": "#0000008f",
  "colorText": "#eef1f2",
  "colorTextSecondary": "#e2e6e7",
  "colorTextTertiary": "#e2e6e7",
  "colorBorder": "#7f8282",
  "colorBorderSecondary": "#686a6a",
  "colorPrimaryBg": "#05090c",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#6b8593",
  "colorErrorBorder": "#ae706b",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": 4,
  "borderRadiusLG": 12,
  "controlInteractiveSize": 24,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": 30,
  "fontSizeHeading2": 25,
  "fontSizeHeading3": 21,
  "fontSizeHeading4": 19,
  "fontSizeHeading5": 18,
  "controlHeightSM": 38,
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
