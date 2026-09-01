// @interop Ant Design 기반 Crimson 테마 정의

import { theme as antdTheme, type ThemeConfig } from "antd";

type Rem<T> = { [K in keyof T]: T[K] | string };
type Token = Rem<NonNullable<ThemeConfig["token"]>>;

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
    "borderRadiusLG": "0.5rem"
  },
  "Drawer": {
    "borderRadiusLG": "0.5rem"
  },
  "Notification": {
    "borderRadiusLG": "0.5rem"
  },
  "Message": {
    "borderRadiusLG": "0.5rem"
  },
  "Popover": {
    "borderRadiusLG": "0.5rem"
  },
  "Tooltip": {
    "borderRadius": "0.125rem"
  },
  "Card": {
    "borderRadiusLG": "0.375rem"
  },
  "Collapse": {
    "borderRadiusLG": "0.375rem"
  },
  "Table": {
    "borderRadiusLG": "0.375rem"
  },
  "Alert": {
    "borderRadiusLG": "0.375rem"
  },
  "Menu": {
    "itemSelectedColor": "#441513",
    "subMenuItemSelectedColor": "#441513",
    "horizontalItemSelectedColor": "#441513",
    "horizontalItemHoverColor": "#441513"
  },
  "Tabs": {
    "itemSelectedColor": "#0a0809",
    "itemHoverColor": "#0a0809",
    "itemActiveColor": "#0a0809"
  },
  "Pagination": {
    "itemActiveColor": "#0a0809",
    "itemActiveColorHover": "#0a0809"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const darkComponents = { ...{
  "Modal": {
    "borderRadiusLG": "0.5rem"
  },
  "Drawer": {
    "borderRadiusLG": "0.5rem"
  },
  "Notification": {
    "borderRadiusLG": "0.5rem"
  },
  "Message": {
    "borderRadiusLG": "0.5rem"
  },
  "Popover": {
    "borderRadiusLG": "0.5rem"
  },
  "Tooltip": {
    "borderRadius": "0.125rem"
  },
  "Card": {
    "borderRadiusLG": "0.375rem"
  },
  "Collapse": {
    "borderRadiusLG": "0.375rem"
  },
  "Table": {
    "borderRadiusLG": "0.375rem"
  },
  "Alert": {
    "borderRadiusLG": "0.375rem"
  },
  "Menu": {
    "itemSelectedColor": "#d39891",
    "subMenuItemSelectedColor": "#d39891",
    "horizontalItemSelectedColor": "#d39891",
    "horizontalItemHoverColor": "#d39891"
  },
  "Tabs": {
    "itemSelectedColor": "#fcf8f9",
    "itemHoverColor": "#fcf8f9",
    "itemActiveColor": "#fcf8f9"
  },
  "Pagination": {
    "itemActiveColor": "#fcf8f9",
    "itemActiveColorHover": "#fcf8f9"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const highContrastComponents = { ...{
  "Modal": {
    "borderRadiusLG": "0.5rem"
  },
  "Drawer": {
    "borderRadiusLG": "0.5rem"
  },
  "Notification": {
    "borderRadiusLG": "0.5rem"
  },
  "Message": {
    "borderRadiusLG": "0.5rem"
  },
  "Popover": {
    "borderRadiusLG": "0.5rem"
  },
  "Tooltip": {
    "borderRadius": "0.125rem"
  },
  "Card": {
    "borderRadiusLG": "0.375rem"
  },
  "Collapse": {
    "borderRadiusLG": "0.375rem"
  },
  "Table": {
    "borderRadiusLG": "0.375rem"
  },
  "Alert": {
    "borderRadiusLG": "0.375rem"
  },
  "Menu": {
    "itemSelectedColor": "#fff0f2",
    "subMenuItemSelectedColor": "#fff0f2",
    "horizontalItemSelectedColor": "#fff0f2",
    "horizontalItemHoverColor": "#fff0f2"
  },
  "Tabs": {
    "itemSelectedColor": "#f3f0f1",
    "itemHoverColor": "#f3f0f1",
    "itemActiveColor": "#f3f0f1"
  },
  "Pagination": {
    "itemActiveColor": "#f3f0f1",
    "itemActiveColorHover": "#f3f0f1"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

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
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.25rem",
  "lineWidth": 1,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 32
} satisfies Token;
const themeOverrides = {
  "colorBgContainer": "#f8f7f8",
  "colorBgElevated": "#f8f7f8",
  "colorBgLayout": "#f1f0f0",
  "colorBgSpotlight": "#696565",
  "colorBgMask": "#0000008f",
  "colorText": "#0a0809",
  "colorTextSecondary": "#5f5b5c",
  "colorTextTertiary": "#5f5b5c",
  "colorTextLightSolid": "#ffffff",
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
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 28,
  "controlHeightLG": 37,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm, antdTheme.compactAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

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
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.25rem",
  "lineWidth": 1,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 32
} satisfies Token;
const darkThemeOverrides = {
  "colorBgContainer": "#191919",
  "colorBgElevated": "#191919",
  "colorBgLayout": "#222222",
  "colorBgSpotlight": "#928d8e",
  "colorBgMask": "#0000008f",
  "colorText": "#fcf8f9",
  "colorTextSecondary": "#9c9898",
  "colorTextTertiary": "#9c9898",
  "colorTextLightSolid": "#ffffff",
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
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 28,
  "controlHeightLG": 37,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

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
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.25rem",
  "lineWidth": 2,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 34
} satisfies Token;
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080808",
  "colorBgSpotlight": "#ddd9d9",
  "colorBgMask": "#0000008f",
  "colorText": "#f3f0f1",
  "colorTextSecondary": "#e8e4e5",
  "colorTextTertiary": "#e8e4e5",
  "colorTextLightSolid": "#000000",
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
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 30,
  "controlHeightLG": 39,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies Token;
export const highContrastTheme = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...highContrastThemeSeed, ...highContrastThemeOverrides },
  components: highContrastComponents,
} as unknown as ThemeConfig;

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
