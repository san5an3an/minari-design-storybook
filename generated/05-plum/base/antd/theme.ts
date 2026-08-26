// @interop Ant Design 기반 Plum 테마 정의

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
  "colorPrimary": "#9146ff",
  "colorError": "#dd3338",
  "colorSuccess": "#35ca68",
  "colorWarning": "#daa500",
  "colorInfo": "#9146ff",
  "colorLink": "#7339c9",
  "colorTextBase": "#0b080b",
  "colorBgBase": "#f8f7f8",
  "fontSize": 16,
  "borderRadius": 16,
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies ThemeConfig["token"];
const themeOverrides = {
  "colorBgContainer": "#f8f7f8",
  "colorBgElevated": "#f8f7f8",
  "colorBgLayout": "#f1f0f1",
  "colorBgSpotlight": "#6a656b",
  "colorBgMask": "#0000008f",
  "colorText": "#0b080b",
  "colorTextSecondary": "#5f5b60",
  "colorTextTertiary": "#5f5b60",
  "colorBorder": "#ccc8cc",
  "colorBorderSecondary": "#d8d6d9",
  "colorPrimaryBg": "#dcd6f3",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e3f6e6",
  "colorWarningBg": "#f9efda",
  "colorPrimaryBorder": "#a084e4",
  "colorErrorBorder": "#ffb4ad",
  "colorSuccessBorder": "#99dda7",
  "colorWarningBorder": "#e8c57b",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
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
  "boxShadow": "0 0 1rem 0 #22152526",
  "boxShadowSecondary": "0 0 3rem 0 #22152533, 0 0.25rem 0.75rem 0 #2215251f"
} satisfies ThemeConfig["token"];
export const theme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components,
};

const darkThemeSeed = {
  "colorPrimary": "#9146ff",
  "colorError": "#e63e40",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#9146ff",
  "colorLink": "#ac86ff",
  "colorTextBase": "#fbf8fc",
  "colorBgBase": "#191919",
  "fontSize": 16,
  "borderRadius": 16,
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
  "colorBgSpotlight": "#928d94",
  "colorBgMask": "#0000008f",
  "colorText": "#fbf8fc",
  "colorTextSecondary": "#9d989e",
  "colorTextTertiary": "#9d989e",
  "colorBorder": "#494649",
  "colorBorderSecondary": "#3b393c",
  "colorPrimaryBg": "#292339",
  "colorErrorBg": "#301c1a",
  "colorSuccessBg": "#18261b",
  "colorWarningBg": "#292111",
  "colorPrimaryBorder": "#6c4ea8",
  "colorErrorBorder": "#782826",
  "colorSuccessBorder": "#0e5627",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
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
  "boxShadow": "0 0 1rem 0 #22152526",
  "boxShadowSecondary": "0 0 3rem 0 #22152533, 0 0.25rem 0.75rem 0 #2215251f"
} satisfies ThemeConfig["token"];
export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components,
};

const highContrastThemeSeed = {
  "colorPrimary": "#d0c1ff",
  "colorError": "#ffb8b1",
  "colorSuccess": "#6ce08a",
  "colorWarning": "#fac130",
  "colorInfo": "#d0c1ff",
  "colorLink": "#e9e3ff",
  "colorTextBase": "#f3f0f3",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "borderRadius": 16,
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
  "colorBgSpotlight": "#ddd8de",
  "colorBgMask": "#0000008f",
  "colorText": "#f3f0f3",
  "colorTextSecondary": "#e8e4e9",
  "colorTextTertiary": "#e8e4e9",
  "colorBorder": "#838184",
  "colorBorderSecondary": "#6b696b",
  "colorPrimaryBg": "#090613",
  "colorErrorBg": "#120404",
  "colorSuccessBg": "#020b04",
  "colorWarningBg": "#0d0700",
  "colorPrimaryBorder": "#8876b9",
  "colorErrorBorder": "#b96a64",
  "colorSuccessBorder": "#558f62",
  "colorWarningBorder": "#9b7d3c",
  "borderRadiusSM": 8,
  "borderRadiusLG": 24,
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
  "boxShadow": "0 0 1rem 0 #22152526",
  "boxShadowSecondary": "0 0 3rem 0 #22152533, 0 0.25rem 0.75rem 0 #2215251f"
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
