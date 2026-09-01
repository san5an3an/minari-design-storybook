// @interop Ant Design 기반 Mint 테마 정의

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
    "borderRadiusLG": "2rem"
  },
  "Drawer": {
    "borderRadiusLG": "2rem"
  },
  "Notification": {
    "borderRadiusLG": "2rem"
  },
  "Message": {
    "borderRadiusLG": "2rem"
  },
  "Popover": {
    "borderRadiusLG": "2rem"
  },
  "Tooltip": {
    "borderRadius": "0.5rem"
  },
  "Card": {
    "borderRadiusLG": "1.5rem"
  },
  "Collapse": {
    "borderRadiusLG": "1.5rem"
  },
  "Table": {
    "borderRadiusLG": "1.5rem"
  },
  "Alert": {
    "borderRadiusLG": "1.5rem"
  },
  "Menu": {
    "itemSelectedColor": "#335551",
    "subMenuItemSelectedColor": "#335551",
    "horizontalItemSelectedColor": "#335551",
    "horizontalItemHoverColor": "#335551"
  },
  "Tabs": {
    "itemSelectedColor": "#070808",
    "itemHoverColor": "#070808",
    "itemActiveColor": "#070808"
  },
  "Pagination": {
    "itemActiveColor": "#070808",
    "itemActiveColorHover": "#070808"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const darkComponents = { ...{
  "Modal": {
    "borderRadiusLG": "2rem"
  },
  "Drawer": {
    "borderRadiusLG": "2rem"
  },
  "Notification": {
    "borderRadiusLG": "2rem"
  },
  "Message": {
    "borderRadiusLG": "2rem"
  },
  "Popover": {
    "borderRadiusLG": "2rem"
  },
  "Tooltip": {
    "borderRadius": "0.5rem"
  },
  "Card": {
    "borderRadiusLG": "1.5rem"
  },
  "Collapse": {
    "borderRadiusLG": "1.5rem"
  },
  "Table": {
    "borderRadiusLG": "1.5rem"
  },
  "Alert": {
    "borderRadiusLG": "1.5rem"
  },
  "Menu": {
    "itemSelectedColor": "#91b7b1",
    "subMenuItemSelectedColor": "#91b7b1",
    "horizontalItemSelectedColor": "#91b7b1",
    "horizontalItemHoverColor": "#91b7b1"
  },
  "Tabs": {
    "itemSelectedColor": "#f7faf9",
    "itemHoverColor": "#f7faf9",
    "itemActiveColor": "#f7faf9"
  },
  "Pagination": {
    "itemActiveColor": "#f7faf9",
    "itemActiveColorHover": "#f7faf9"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const highContrastComponents = { ...{
  "Modal": {
    "borderRadiusLG": "2rem"
  },
  "Drawer": {
    "borderRadiusLG": "2rem"
  },
  "Notification": {
    "borderRadiusLG": "2rem"
  },
  "Message": {
    "borderRadiusLG": "2rem"
  },
  "Popover": {
    "borderRadiusLG": "2rem"
  },
  "Tooltip": {
    "borderRadius": "0.5rem"
  },
  "Card": {
    "borderRadiusLG": "1.5rem"
  },
  "Collapse": {
    "borderRadiusLG": "1.5rem"
  },
  "Table": {
    "borderRadiusLG": "1.5rem"
  },
  "Alert": {
    "borderRadiusLG": "1.5rem"
  },
  "Menu": {
    "itemSelectedColor": "#d3f6f1",
    "subMenuItemSelectedColor": "#d3f6f1",
    "horizontalItemSelectedColor": "#d3f6f1",
    "horizontalItemHoverColor": "#d3f6f1"
  },
  "Tabs": {
    "itemSelectedColor": "#eff1f0",
    "itemHoverColor": "#eff1f0",
    "itemActiveColor": "#eff1f0"
  },
  "Pagination": {
    "itemActiveColor": "#eff1f0",
    "itemActiveColorHover": "#eff1f0"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#71bbb1",
  "colorError": "#c84d42",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#71bbb1",
  "colorLink": "#3d776f",
  "colorTextBase": "#070808",
  "colorBgBase": "#f7f8f8",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "1rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 44
} satisfies Token;
const themeOverrides = {
  "colorBgContainer": "#f7f8f8",
  "colorBgElevated": "#f7f8f8",
  "colorBgLayout": "#eff0f0",
  "colorBgSpotlight": "#999d9b",
  "colorBgMask": "#0000008f",
  "colorText": "#070808",
  "colorTextSecondary": "#6a6d6c",
  "colorTextTertiary": "#6a6d6c",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#c8cac9",
  "colorBorderSecondary": "#d5d7d6",
  "colorPrimaryBg": "#e8f3f1",
  "colorErrorBg": "#ffebe8",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#add3cd",
  "colorErrorBorder": "#feb4aa",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": "0.5rem",
  "borderRadiusLG": "1.5rem",
  "controlInteractiveSize": 24,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 36,
  "controlHeightLG": 53,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#418b82",
  "colorError": "#d25549",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#418b82",
  "colorLink": "#6aa49c",
  "colorTextBase": "#f7faf9",
  "colorBgBase": "#181919",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "1rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 44
} satisfies Token;
const darkThemeOverrides = {
  "colorBgContainer": "#181919",
  "colorBgElevated": "#181919",
  "colorBgLayout": "#222222",
  "colorBgSpotlight": "#8b8f8d",
  "colorBgMask": "#0000008f",
  "colorText": "#f7faf9",
  "colorTextSecondary": "#969a98",
  "colorTextTertiary": "#969a98",
  "colorTextLightSolid": "#051815",
  "colorBorder": "#464847",
  "colorBorderSecondary": "#393a3a",
  "colorPrimaryBg": "#1c2423",
  "colorErrorBg": "#2d1d1b",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#2c4f4a",
  "colorErrorBorder": "#6f322b",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": "0.5rem",
  "borderRadiusLG": "1.5rem",
  "controlInteractiveSize": 24,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 36,
  "controlHeightLG": 53,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#94d6cc",
  "colorError": "#ffb8ad",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#94d6cc",
  "colorLink": "#baefe7",
  "colorTextBase": "#eff1f0",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "1rem",
  "lineWidth": 2,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 46
} satisfies Token;
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080808",
  "colorBgSpotlight": "#d7dbd9",
  "colorBgMask": "#0000008f",
  "colorText": "#eff1f0",
  "colorTextSecondary": "#e2e6e4",
  "colorTextTertiary": "#e2e6e4",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#7f8280",
  "colorBorderSecondary": "#686a69",
  "colorPrimaryBg": "#040a09",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#678883",
  "colorErrorBorder": "#ae7168",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": "0.5rem",
  "borderRadiusLG": "1.5rem",
  "controlInteractiveSize": 24,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 38,
  "controlHeightLG": 55,
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies Token;
export const highContrastTheme = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...highContrastThemeSeed, ...highContrastThemeOverrides },
  components: highContrastComponents,
} as unknown as ThemeConfig;

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
