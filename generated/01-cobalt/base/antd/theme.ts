// @interop Ant Design 기반 Cobalt 테마 정의

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
    "itemSelectedColor": "#163975",
    "subMenuItemSelectedColor": "#163975",
    "horizontalItemSelectedColor": "#163975",
    "horizontalItemHoverColor": "#163975"
  },
  "Tabs": {
    "itemColor": "#5a5d61",
    "itemSelectedColor": "#08080b",
    "itemHoverColor": "#08080b",
    "itemActiveColor": "#08080b"
  },
  "Pagination": {
    "itemActiveBg": "#0052cc",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  },
  "Calendar": {
    "itemActiveBg": "#0052cc"
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
    "itemSelectedColor": "#84adf3",
    "subMenuItemSelectedColor": "#84adf3",
    "horizontalItemSelectedColor": "#84adf3",
    "horizontalItemHoverColor": "#84adf3"
  },
  "Tabs": {
    "itemColor": "#979a9f",
    "itemSelectedColor": "#f8f9fd",
    "itemHoverColor": "#f8f9fd",
    "itemActiveColor": "#f8f9fd"
  },
  "Pagination": {
    "itemActiveBg": "#0052cc",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  },
  "Calendar": {
    "itemActiveBg": "#0052cc"
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
    "itemSelectedColor": "#e9f1ff",
    "subMenuItemSelectedColor": "#e9f1ff",
    "horizontalItemSelectedColor": "#e9f1ff",
    "horizontalItemHoverColor": "#e9f1ff"
  },
  "Tabs": {
    "itemColor": "#e3e5ea",
    "itemSelectedColor": "#eff1f4",
    "itemHoverColor": "#eff1f4",
    "itemActiveColor": "#eff1f4"
  },
  "Pagination": {
    "itemActiveBg": "#abcbff",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#abcbff"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#0052cc",
  "colorError": "#c84d42",
  "colorSuccess": "#51c672",
  "colorWarning": "#ffbb00",
  "colorInfo": "#0052cc",
  "colorLink": "#003c9a",
  "colorTextBase": "#08080b",
  "colorBgBase": "#f7f8f8",
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
  "colorBgContainer": "#f7f8f8",
  "colorBgElevated": "#f7f8f8",
  "colorBgLayout": "#eff0f1",
  "colorBgSpotlight": "#64676c",
  "colorBgMask": "#0000008f",
  "colorText": "#08080b",
  "colorTextSecondary": "#5a5d61",
  "colorTextTertiary": "#5a5d61",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#c8cacd",
  "colorBorderSecondary": "#d5d7da",
  "colorPrimaryBg": "#c4d1e6",
  "colorErrorBg": "#ffebe8",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#fbf0dd",
  "colorPrimaryBorder": "#547bbd",
  "colorErrorBorder": "#feb4aa",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#f9d491",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.1875rem",
  "fontSizeHeading2": "1.75rem",
  "fontSizeHeading3": "1.375rem",
  "fontSizeHeading4": "1.25rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 27,
  "controlHeightLG": 45,
  "boxShadow": "0 0.0625rem 0.125rem 0 #141a291a, 0 0.0625rem 0.1875rem 0.0625rem #141a2914",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #141a2929, 0 0.125rem 0.375rem 0 #141a291a"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#0052cc",
  "colorError": "#d25549",
  "colorSuccess": "#009342",
  "colorWarning": "#ffbb00",
  "colorInfo": "#0052cc",
  "colorLink": "#5d99ff",
  "colorTextBase": "#f8f9fd",
  "colorBgBase": "#181919",
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
  "colorBgContainer": "#181919",
  "colorBgElevated": "#181919",
  "colorBgLayout": "#222223",
  "colorBgSpotlight": "#8c8f95",
  "colorBgMask": "#0000008f",
  "colorText": "#f8f9fd",
  "colorTextSecondary": "#979a9f",
  "colorTextTertiary": "#979a9f",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#46474a",
  "colorBorderSecondary": "#393a3c",
  "colorPrimaryBg": "#17202f",
  "colorErrorBg": "#2d1d1b",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#403728",
  "colorPrimaryBorder": "#234784",
  "colorErrorBorder": "#6f322b",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#be9b59",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.1875rem",
  "fontSizeHeading2": "1.75rem",
  "fontSizeHeading3": "1.375rem",
  "fontSizeHeading4": "1.25rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 27,
  "controlHeightLG": 45,
  "boxShadow": "0 0.0625rem 0.125rem 0 #141a291a, 0 0.0625rem 0.1875rem 0.0625rem #141a2914",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #141a2929, 0 0.125rem 0.375rem 0 #141a291a"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#abcbff",
  "colorError": "#ffb8ad",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#abcbff",
  "colorLink": "#d7e6ff",
  "colorTextBase": "#eff1f4",
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
  "colorBgSpotlight": "#d7dae0",
  "colorBgMask": "#0000008f",
  "colorText": "#eff1f4",
  "colorTextSecondary": "#e3e5ea",
  "colorTextTertiary": "#e3e5ea",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#7f8184",
  "colorBorderSecondary": "#686a6c",
  "colorPrimaryBg": "#040811",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#6882ac",
  "colorErrorBorder": "#ae7168",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.1875rem",
  "fontSizeHeading2": "1.75rem",
  "fontSizeHeading3": "1.375rem",
  "fontSizeHeading4": "1.25rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 29,
  "controlHeightLG": 47,
  "boxShadow": "0 0.0625rem 0.125rem 0 #141a291a, 0 0.0625rem 0.1875rem 0.0625rem #141a2914",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #141a2929, 0 0.125rem 0.375rem 0 #141a291a"
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
