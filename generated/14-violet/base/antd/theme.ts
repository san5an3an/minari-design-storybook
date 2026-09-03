// @interop Ant Design 기반 Violet 테마 정의

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
    "borderRadiusLG": "1rem"
  },
  "Drawer": {
    "borderRadiusLG": "1rem"
  },
  "Notification": {
    "borderRadiusLG": "1rem"
  },
  "Message": {
    "borderRadiusLG": "1rem"
  },
  "Popover": {
    "borderRadiusLG": "1rem"
  },
  "Tooltip": {
    "borderRadius": "0.25rem"
  },
  "Card": {
    "borderRadiusLG": "0.75rem"
  },
  "Collapse": {
    "borderRadiusLG": "0.75rem"
  },
  "Table": {
    "borderRadiusLG": "0.75rem"
  },
  "Alert": {
    "borderRadiusLG": "0.75rem"
  },
  "Menu": {
    "itemSelectedColor": "#353c70",
    "subMenuItemSelectedColor": "#353c70",
    "horizontalItemSelectedColor": "#353c70",
    "horizontalItemHoverColor": "#353c70"
  },
  "Tabs": {
    "itemColor": "#5d5c60",
    "itemSelectedColor": "#09080a",
    "itemHoverColor": "#09080a",
    "itemActiveColor": "#09080a"
  },
  "Pagination": {
    "itemActiveBg": "#5e6ad2",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const darkComponents = { ...{
  "Modal": {
    "borderRadiusLG": "1rem"
  },
  "Drawer": {
    "borderRadiusLG": "1rem"
  },
  "Notification": {
    "borderRadiusLG": "1rem"
  },
  "Message": {
    "borderRadiusLG": "1rem"
  },
  "Popover": {
    "borderRadiusLG": "1rem"
  },
  "Tooltip": {
    "borderRadius": "0.25rem"
  },
  "Card": {
    "borderRadiusLG": "0.75rem"
  },
  "Collapse": {
    "borderRadiusLG": "0.75rem"
  },
  "Table": {
    "borderRadiusLG": "0.75rem"
  },
  "Alert": {
    "borderRadiusLG": "0.75rem"
  },
  "Menu": {
    "itemSelectedColor": "#a3b0eb",
    "subMenuItemSelectedColor": "#a3b0eb",
    "horizontalItemSelectedColor": "#a3b0eb",
    "horizontalItemHoverColor": "#a3b0eb"
  },
  "Tabs": {
    "itemColor": "#9a999d",
    "itemSelectedColor": "#f9f9fc",
    "itemHoverColor": "#f9f9fc",
    "itemActiveColor": "#f9f9fc"
  },
  "Pagination": {
    "itemActiveBg": "#5e6ad2",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const highContrastComponents = { ...{
  "Modal": {
    "borderRadiusLG": "1rem"
  },
  "Drawer": {
    "borderRadiusLG": "1rem"
  },
  "Notification": {
    "borderRadiusLG": "1rem"
  },
  "Message": {
    "borderRadiusLG": "1rem"
  },
  "Popover": {
    "borderRadiusLG": "1rem"
  },
  "Tooltip": {
    "borderRadius": "0.25rem"
  },
  "Card": {
    "borderRadiusLG": "0.75rem"
  },
  "Collapse": {
    "borderRadiusLG": "0.75rem"
  },
  "Table": {
    "borderRadiusLG": "0.75rem"
  },
  "Alert": {
    "borderRadiusLG": "0.75rem"
  },
  "Menu": {
    "itemSelectedColor": "#edf1ff",
    "subMenuItemSelectedColor": "#edf1ff",
    "horizontalItemSelectedColor": "#edf1ff",
    "horizontalItemHoverColor": "#edf1ff"
  },
  "Tabs": {
    "itemColor": "#e5e4e9",
    "itemSelectedColor": "#f1f0f3",
    "itemHoverColor": "#f1f0f3",
    "itemActiveColor": "#f1f0f3"
  },
  "Pagination": {
    "itemActiveBg": "#bbc7ff",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#5e6ad2",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#007cb8",
  "colorLink": "#4953a5",
  "colorTextBase": "#09080a",
  "colorBgBase": "#f8f8f8",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies Token;
const themeOverrides = {
  "colorBgContainer": "#f8f8f8",
  "colorBgElevated": "#f8f8f8",
  "colorBgLayout": "#f0f0f1",
  "colorBgSpotlight": "#67666b",
  "colorBgMask": "#0000008f",
  "colorText": "#09080a",
  "colorTextSecondary": "#5d5c60",
  "colorTextTertiary": "#5d5c60",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#cac9cc",
  "colorBorderSecondary": "#d7d6d9",
  "colorPrimaryBg": "#d3d7ea",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#828dc7",
  "colorErrorBorder": "#feb4ad",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.75rem",
  "fontSizeHeading2": "2.0625rem",
  "fontSizeHeading3": "1.5625rem",
  "fontSizeHeading4": "1.3125rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 27,
  "controlHeightLG": 45,
  "boxShadow": "0 0 1rem 0 #1b182526",
  "boxShadowSecondary": "0 0 3rem 0 #1b182533, 0 0.25rem 0.75rem 0 #1b18251f"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#5e6ad2",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#1286c2",
  "colorLink": "#8594ec",
  "colorTextBase": "#f9f9fc",
  "colorBgBase": "#191919",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies Token;
const darkThemeOverrides = {
  "colorBgContainer": "#191919",
  "colorBgElevated": "#191919",
  "colorBgLayout": "#222223",
  "colorBgSpotlight": "#8f8e93",
  "colorBgMask": "#0000008f",
  "colorText": "#f9f9fc",
  "colorTextSecondary": "#9a999d",
  "colorTextTertiary": "#9a999d",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#474749",
  "colorBorderSecondary": "#3a3a3c",
  "colorPrimaryBg": "#222532",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#4f598e",
  "colorErrorBorder": "#6f322e",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.75rem",
  "fontSizeHeading2": "2.0625rem",
  "fontSizeHeading3": "1.5625rem",
  "fontSizeHeading4": "1.3125rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 27,
  "controlHeightLG": 45,
  "boxShadow": "0 0 1rem 0 #1b182526",
  "boxShadowSecondary": "0 0 3rem 0 #1b182533, 0 0.25rem 0.75rem 0 #1b18251f"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#bbc7ff",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#8ed1ff",
  "colorLink": "#dee4ff",
  "colorTextBase": "#f1f0f3",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
  "lineWidth": 2,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 37
} satisfies Token;
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080809",
  "colorBgSpotlight": "#dad9de",
  "colorBgMask": "#0000008f",
  "colorText": "#f1f0f3",
  "colorTextSecondary": "#e5e4e9",
  "colorTextTertiary": "#e5e4e9",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#818183",
  "colorBorderSecondary": "#6a696b",
  "colorPrimaryBg": "#060711",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#757ead",
  "colorErrorBorder": "#ae706b",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.75rem",
  "fontSizeHeading2": "2.0625rem",
  "fontSizeHeading3": "1.5625rem",
  "fontSizeHeading4": "1.3125rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 29,
  "controlHeightLG": 47,
  "boxShadow": "0 0 1rem 0 #1b182526",
  "boxShadowSecondary": "0 0 3rem 0 #1b182533, 0 0.25rem 0.75rem 0 #1b18251f"
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
