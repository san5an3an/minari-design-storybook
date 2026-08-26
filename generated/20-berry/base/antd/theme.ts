// @interop Ant Design 기반 Berry 테마 정의

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
    "borderRadiusLG": 32
  },
  "Drawer": {
    "borderRadiusLG": 32
  },
  "Notification": {
    "borderRadiusLG": 32
  },
  "Message": {
    "borderRadiusLG": 32
  },
  "Popover": {
    "borderRadiusLG": 32
  },
  "Tooltip": {
    "borderRadius": 8
  },
  "Card": {
    "borderRadiusLG": 24
  },
  "Collapse": {
    "borderRadiusLG": 24
  },
  "Table": {
    "borderRadiusLG": 24
  },
  "Alert": {
    "borderRadiusLG": 24
  }
}, Button: button } satisfies ThemeConfig["components"];

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#ea4c89",
  "colorError": "#a2191f",
  "colorSuccess": "#35ca68",
  "colorWarning": "#daa500",
  "colorInfo": "#ea4c89",
  "colorLink": "#a82d5f",
  "colorTextBase": "#0b080a",
  "colorBgBase": "#f8f7f8",
  "fontSize": 16,
  "borderRadius": 16,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 31
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f8f7f8",
  "colorBgElevated": "#f8f7f8",
  "colorBgLayout": "#f1f0f0",
  "colorBgSpotlight": "#6b6568",
  "colorBgMask": "#0000008f",
  "colorText": "#0b080a",
  "colorTextSecondary": "#615b5e",
  "colorTextTertiary": "#615b5e",
  "colorBorder": "#cdc8cb",
  "colorBorderSecondary": "#d9d6d7",
  "colorPrimaryBg": "#f4d8df",
  "colorErrorBg": "#e0c8c5",
  "colorSuccessBg": "#e3f6e6",
  "colorWarningBg": "#f9efda",
  "colorPrimaryBorder": "#e18aa4",
  "colorErrorBorder": "#a75f59",
  "colorSuccessBorder": "#99dda7",
  "colorWarningBorder": "#e8c57b",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
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
  "boxShadow": "0 0 1rem 0 #25151e26",
  "boxShadowSecondary": "0 0 3rem 0 #25151e33, 0 0.25rem 0.75rem 0 #25151e1f"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm, antdTheme.compactAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#ea4c89",
  "colorError": "#a2191f",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#ea4c89",
  "colorLink": "#fc7aa6",
  "colorTextBase": "#fcf8fa",
  "colorBgBase": "#191919",
  "fontSize": 16,
  "borderRadius": 16,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 31
} satisfies ThemeConfig["token"];
const darkThemeOverrides = {
  "colorBgContainer": "#191919",
  "colorBgElevated": "#191919",
  "colorBgLayout": "#232222",
  "colorBgSpotlight": "#948d90",
  "colorBgMask": "#0000008f",
  "colorText": "#fcf8fa",
  "colorTextSecondary": "#9e989b",
  "colorTextTertiary": "#9e989b",
  "colorBorder": "#494648",
  "colorBorderSecondary": "#3c393a",
  "colorPrimaryBg": "#39252a",
  "colorErrorBg": "#2a1918",
  "colorSuccessBg": "#18261b",
  "colorWarningBg": "#292111",
  "colorPrimaryBorder": "#a5546e",
  "colorErrorBorder": "#6e2d29",
  "colorSuccessBorder": "#0e5627",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
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
  "boxShadow": "0 0 1rem 0 #25151e26",
  "boxShadowSecondary": "0 0 3rem 0 #25151e33, 0 0.25rem 0.75rem 0 #25151e1f"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#ffb5ca",
  "colorError": "#ffb7b5",
  "colorSuccess": "#6ce08a",
  "colorWarning": "#fac130",
  "colorInfo": "#ffb5ca",
  "colorLink": "#ffdfe7",
  "colorTextBase": "#f4f0f2",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 16,
  "lineWidth": 2,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 33
} satisfies ThemeConfig["token"];
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#090808",
  "colorBgSpotlight": "#dfd8db",
  "colorBgMask": "#0000008f",
  "colorText": "#f4f0f2",
  "colorTextSecondary": "#e9e4e6",
  "colorTextTertiary": "#e9e4e6",
  "colorBorder": "#848182",
  "colorBorderSecondary": "#6b696a",
  "colorPrimaryBg": "#120408",
  "colorErrorBg": "#120404",
  "colorSuccessBg": "#020b04",
  "colorWarningBg": "#0d0700",
  "colorPrimaryBorder": "#b56980",
  "colorErrorBorder": "#b9696a",
  "colorSuccessBorder": "#558f62",
  "colorWarningBorder": "#9b7d3c",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
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
  "boxShadow": "0 0 1rem 0 #25151e26",
  "boxShadowSecondary": "0 0 3rem 0 #25151e33, 0 0.25rem 0.75rem 0 #25151e1f"
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
