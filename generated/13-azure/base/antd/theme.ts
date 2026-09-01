// @interop Ant Design 기반 Azure 테마 정의

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
    "itemSelectedColor": "#114380",
    "subMenuItemSelectedColor": "#114380",
    "horizontalItemSelectedColor": "#114380",
    "horizontalItemHoverColor": "#114380"
  },
  "Tabs": {
    "itemSelectedColor": "#070809",
    "itemHoverColor": "#070809",
    "itemActiveColor": "#070809"
  },
  "Pagination": {
    "itemActiveColor": "#070809",
    "itemActiveColorHover": "#070809"
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
    "itemSelectedColor": "#86baff",
    "subMenuItemSelectedColor": "#86baff",
    "horizontalItemSelectedColor": "#86baff",
    "horizontalItemHoverColor": "#86baff"
  },
  "Tabs": {
    "itemSelectedColor": "#f7fafb",
    "itemHoverColor": "#f7fafb",
    "itemActiveColor": "#f7fafb"
  },
  "Pagination": {
    "itemActiveColor": "#f7fafb",
    "itemActiveColorHover": "#f7fafb"
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
    "itemSelectedColor": "#e8f2ff",
    "subMenuItemSelectedColor": "#e8f2ff",
    "horizontalItemSelectedColor": "#e8f2ff",
    "horizontalItemHoverColor": "#e8f2ff"
  },
  "Tabs": {
    "itemSelectedColor": "#eef1f2",
    "itemHoverColor": "#eef1f2",
    "itemActiveColor": "#eef1f2"
  },
  "Pagination": {
    "itemActiveColor": "#eef1f2",
    "itemActiveColorHover": "#eef1f2"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#0080ff",
  "colorError": "#c84d42",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#007cb8",
  "colorLink": "#005bb8",
  "colorTextBase": "#070809",
  "colorBgBase": "#f7f8f8",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "1rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 43
} satisfies Token;
const themeOverrides = {
  "colorBgContainer": "#f7f8f8",
  "colorBgElevated": "#f7f8f8",
  "colorBgLayout": "#eff0f0",
  "colorBgSpotlight": "#999d9f",
  "colorBgMask": "#0000008f",
  "colorText": "#070809",
  "colorTextSecondary": "#6a6d6f",
  "colorTextTertiary": "#6a6d6f",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#c8cacb",
  "colorBorderSecondary": "#d5d7d8",
  "colorPrimaryBg": "#cfdef4",
  "colorErrorBg": "#ffebe8",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#6da0e5",
  "colorErrorBorder": "#feb4aa",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": "0.5rem",
  "borderRadiusLG": "1.5rem",
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.1875rem",
  "fontSizeHeading2": "1.75rem",
  "fontSizeHeading3": "1.375rem",
  "fontSizeHeading4": "1.25rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 35,
  "controlHeightLG": 53,
  "boxShadow": "0 0.0625rem 0.125rem 0 #111c211a, 0 0.0625rem 0.1875rem 0.0625rem #111c2114",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #111c2129, 0 0.125rem 0.375rem 0 #111c211a"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#0080ff",
  "colorError": "#d25549",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#1286c2",
  "colorLink": "#5aa1ff",
  "colorTextBase": "#f7fafb",
  "colorBgBase": "#181919",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "1rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 43
} satisfies Token;
const darkThemeOverrides = {
  "colorBgContainer": "#181919",
  "colorBgElevated": "#181919",
  "colorBgLayout": "#222222",
  "colorBgSpotlight": "#8b8f91",
  "colorBgMask": "#0000008f",
  "colorText": "#f7fafb",
  "colorTextSecondary": "#969a9b",
  "colorTextTertiary": "#969a9b",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#454748",
  "colorBorderSecondary": "#393a3b",
  "colorPrimaryBg": "#1e2a39",
  "colorErrorBg": "#2d1d1b",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#386aaa",
  "colorErrorBorder": "#6f322b",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": "0.5rem",
  "borderRadiusLG": "1.5rem",
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.1875rem",
  "fontSizeHeading2": "1.75rem",
  "fontSizeHeading3": "1.375rem",
  "fontSizeHeading4": "1.25rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 35,
  "controlHeightLG": 53,
  "boxShadow": "0 0.0625rem 0.125rem 0 #111c211a, 0 0.0625rem 0.1875rem 0.0625rem #111c2114",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #111c2129, 0 0.125rem 0.375rem 0 #111c211a"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#a7ccff",
  "colorError": "#ffb8ad",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#8ed1ff",
  "colorLink": "#d5e7ff",
  "colorTextBase": "#eef1f2",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "1rem",
  "lineWidth": 2,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 45
} satisfies Token;
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080808",
  "colorBgSpotlight": "#d6dadc",
  "colorBgMask": "#0000008f",
  "colorText": "#eef1f2",
  "colorTextSecondary": "#e2e5e7",
  "colorTextTertiary": "#e2e5e7",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#7f8282",
  "colorBorderSecondary": "#686a6a",
  "colorPrimaryBg": "#040811",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#6583ac",
  "colorErrorBorder": "#ae7168",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": "0.5rem",
  "borderRadiusLG": "1.5rem",
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.1875rem",
  "fontSizeHeading2": "1.75rem",
  "fontSizeHeading3": "1.375rem",
  "fontSizeHeading4": "1.25rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 37,
  "controlHeightLG": 55,
  "boxShadow": "0 0.0625rem 0.125rem 0 #111c211a, 0 0.0625rem 0.1875rem 0.0625rem #111c2114",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #111c2129, 0 0.125rem 0.375rem 0 #111c211a"
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
