// @interop Ant Design 기반 Sand 테마 정의

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
    "itemSelectedColor": "#5a4d35",
    "subMenuItemSelectedColor": "#5a4d35",
    "horizontalItemSelectedColor": "#5a4d35",
    "horizontalItemHoverColor": "#5a4d35"
  },
  "Tabs": {
    "itemColor": "#736b64",
    "itemSelectedColor": "#0c0805",
    "itemHoverColor": "#0c0805",
    "itemActiveColor": "#0c0805"
  },
  "Pagination": {
    "itemActiveBg": "#c5ab77",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
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
    "itemSelectedColor": "#bcae92",
    "subMenuItemSelectedColor": "#bcae92",
    "horizontalItemSelectedColor": "#bcae92",
    "horizontalItemHoverColor": "#bcae92"
  },
  "Tabs": {
    "itemColor": "#9f9890",
    "itemSelectedColor": "#fef8f2",
    "itemHoverColor": "#fef8f2",
    "itemActiveColor": "#fef8f2"
  },
  "Pagination": {
    "itemActiveBg": "#947b48",
    "itemActiveColor": "#191306",
    "itemActiveColorHover": "#191306"
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
    "itemSelectedColor": "#fdefd5",
    "subMenuItemSelectedColor": "#fdefd5",
    "horizontalItemSelectedColor": "#fdefd5",
    "horizontalItemHoverColor": "#fdefd5"
  },
  "Tabs": {
    "itemColor": "#ebe4dc",
    "itemSelectedColor": "#f5f0ea",
    "itemHoverColor": "#f5f0ea",
    "itemActiveColor": "#f5f0ea"
  },
  "Pagination": {
    "itemActiveBg": "#dfc798",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#c5ab77",
  "colorError": "#8e1f0b",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#c5ab77",
  "colorLink": "#7f6a43",
  "colorTextBase": "#0c0805",
  "colorBgBase": "#f8f7f7",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 43
} satisfies Token;
const themeOverrides = {
  "colorBgContainer": "#f8f7f7",
  "colorBgElevated": "#f8f7f7",
  "colorBgLayout": "#f1f0ee",
  "colorBgSpotlight": "#a49c92",
  "colorBgMask": "#0000008f",
  "colorText": "#0c0805",
  "colorTextSecondary": "#736b64",
  "colorTextTertiary": "#736b64",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#cec9c3",
  "colorBorderSecondary": "#dad6d2",
  "colorPrimaryBg": "#f4f0e7",
  "colorErrorBg": "#dac6c1",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#d7c8ac",
  "colorErrorBorder": "#975b4f",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.75rem",
  "fontSizeHeading2": "2.0625rem",
  "fontSizeHeading3": "1.5625rem",
  "fontSizeHeading4": "1.3125rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 35,
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
  "colorPrimary": "#947b48",
  "colorError": "#8e1f0b",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#947b48",
  "colorLink": "#ac976e",
  "colorTextBase": "#fef8f2",
  "colorBgBase": "#191918",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 43
} satisfies Token;
const darkThemeOverrides = {
  "colorBgContainer": "#191918",
  "colorBgElevated": "#191918",
  "colorBgLayout": "#232221",
  "colorBgSpotlight": "#968d83",
  "colorBgMask": "#0000008f",
  "colorText": "#fef8f2",
  "colorTextSecondary": "#9f9890",
  "colorTextTertiary": "#9f9890",
  "colorTextLightSolid": "#191306",
  "colorBorder": "#4b4641",
  "colorBorderSecondary": "#3d3936",
  "colorPrimaryBg": "#25221c",
  "colorErrorBg": "#261815",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#52452d",
  "colorErrorBorder": "#60291f",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.75rem",
  "fontSizeHeading2": "2.0625rem",
  "fontSizeHeading3": "1.5625rem",
  "fontSizeHeading4": "1.3125rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 35,
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
  "colorPrimary": "#dfc798",
  "colorError": "#ffb8ad",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#dfc798",
  "colorLink": "#f7e3bc",
  "colorTextBase": "#f5f0ea",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
  "lineWidth": 2,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 45
} satisfies Token;
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#090807",
  "colorBgSpotlight": "#e1d8cf",
  "colorBgMask": "#0000008f",
  "colorText": "#f5f0ea",
  "colorTextSecondary": "#ebe4dc",
  "colorTextTertiary": "#ebe4dc",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#85817c",
  "colorBorderSecondary": "#6d6966",
  "colorPrimaryBg": "#0a0804",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#8c8068",
  "colorErrorBorder": "#ae7168",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
  "controlInteractiveSize": 24,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.75rem",
  "fontSizeHeading2": "2.0625rem",
  "fontSizeHeading3": "1.5625rem",
  "fontSizeHeading4": "1.3125rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 37,
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
