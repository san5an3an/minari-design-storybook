// @interop Ant Design 기반 Slate 테마 정의

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
  "colorPrimary": "#14233c",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#4f7a99",
  "colorLink": "#040e21",
  "colorTextBase": "#07080a",
  "colorBgBase": "#f7f8f8",
  "fontSize": 16,
  "borderRadius": 4,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 32
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f7f8f8",
  "colorBgElevated": "#f7f8f8",
  "colorBgLayout": "#eff0f1",
  "colorBgSpotlight": "#63676a",
  "colorBgMask": "#0000008f",
  "colorText": "#07080a",
  "colorTextSecondary": "#595d60",
  "colorTextTertiary": "#595d60",
  "colorBorder": "#c7cacc",
  "colorBorderSecondary": "#d5d7d9",
  "colorPrimaryBg": "#b9bcc1",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#3d4655",
  "colorErrorBorder": "#feb4ad",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
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
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #111c251f"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm, antdTheme.compactAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#14233c",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#5883a2",
  "colorLink": "#8a9ab4",
  "colorTextBase": "#f7fafc",
  "colorBgBase": "#181919",
  "fontSize": 16,
  "borderRadius": 4,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 32
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#181919",
  "colorBgElevated": "#181919",
  "colorBgLayout": "#222223",
  "colorBgSpotlight": "#8b8f93",
  "colorBgMask": "#0000008f",
  "colorText": "#f7fafc",
  "colorTextSecondary": "#96999d",
  "colorTextTertiary": "#96999d",
  "colorBorder": "#454749",
  "colorBorderSecondary": "#393a3c",
  "colorPrimaryBg": "#0f1115",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#111926",
  "colorErrorBorder": "#6f322e",
  "colorSuccessBorder": "#1c542c",
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
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #111c251f"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#b0cbf6",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#a5cfed",
  "colorLink": "#d6e6ff",
  "colorTextBase": "#eef1f3",
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
  "colorBgLayout": "#080809",
  "colorBgSpotlight": "#d6dade",
  "colorBgMask": "#0000008f",
  "colorText": "#eef1f3",
  "colorTextSecondary": "#e2e5e9",
  "colorTextTertiary": "#e2e5e9",
  "colorBorder": "#7f8283",
  "colorBorderSecondary": "#686a6b",
  "colorPrimaryBg": "#06080d",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#748297",
  "colorErrorBorder": "#ae706b",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
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
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #111c251f"
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
