// @interop Ant Design 기반 Moss 테마 정의

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
    "borderRadiusLG": "1.25rem"
  },
  "Drawer": {
    "borderRadiusLG": "1.25rem"
  },
  "Notification": {
    "borderRadiusLG": "1.25rem"
  },
  "Message": {
    "borderRadiusLG": "1.25rem"
  },
  "Popover": {
    "borderRadiusLG": "1.25rem"
  },
  "Tooltip": {
    "borderRadius": "0.375rem"
  },
  "Card": {
    "borderRadiusLG": "1rem"
  },
  "Collapse": {
    "borderRadiusLG": "1rem"
  },
  "Table": {
    "borderRadiusLG": "1rem"
  },
  "Alert": {
    "borderRadiusLG": "1rem"
  },
  "Menu": {
    "itemSelectedColor": "#34554f",
    "subMenuItemSelectedColor": "#34554f",
    "horizontalItemSelectedColor": "#34554f",
    "horizontalItemHoverColor": "#34554f"
  },
  "Tabs": {
    "itemColor": "#6a6e68",
    "itemSelectedColor": "#080906",
    "itemHoverColor": "#080906",
    "itemActiveColor": "#080906"
  },
  "Pagination": {
    "itemActiveBg": "#73bbad",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#73bbad"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const darkComponents = { ...{
  "Modal": {
    "borderRadiusLG": "1.25rem"
  },
  "Drawer": {
    "borderRadiusLG": "1.25rem"
  },
  "Notification": {
    "borderRadiusLG": "1.25rem"
  },
  "Message": {
    "borderRadiusLG": "1.25rem"
  },
  "Popover": {
    "borderRadiusLG": "1.25rem"
  },
  "Tooltip": {
    "borderRadius": "0.375rem"
  },
  "Card": {
    "borderRadiusLG": "1rem"
  },
  "Collapse": {
    "borderRadiusLG": "1rem"
  },
  "Table": {
    "borderRadiusLG": "1rem"
  },
  "Alert": {
    "borderRadiusLG": "1rem"
  },
  "Menu": {
    "itemSelectedColor": "#92b7af",
    "subMenuItemSelectedColor": "#92b7af",
    "horizontalItemSelectedColor": "#92b7af",
    "horizontalItemHoverColor": "#92b7af"
  },
  "Tabs": {
    "itemColor": "#979a94",
    "itemSelectedColor": "#f8faf6",
    "itemHoverColor": "#f8faf6",
    "itemActiveColor": "#f8faf6"
  },
  "Pagination": {
    "itemActiveBg": "#438b7e",
    "itemActiveColor": "#051814",
    "itemActiveColorHover": "#051814"
  },
  "Calendar": {
    "itemActiveBg": "#438b7e"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const highContrastComponents = { ...{
  "Modal": {
    "borderRadiusLG": "1.25rem"
  },
  "Drawer": {
    "borderRadiusLG": "1.25rem"
  },
  "Notification": {
    "borderRadiusLG": "1.25rem"
  },
  "Message": {
    "borderRadiusLG": "1.25rem"
  },
  "Popover": {
    "borderRadiusLG": "1.25rem"
  },
  "Tooltip": {
    "borderRadius": "0.375rem"
  },
  "Card": {
    "borderRadiusLG": "1rem"
  },
  "Collapse": {
    "borderRadiusLG": "1rem"
  },
  "Table": {
    "borderRadiusLG": "1rem"
  },
  "Alert": {
    "borderRadiusLG": "1rem"
  },
  "Menu": {
    "itemSelectedColor": "#d4f6ef",
    "subMenuItemSelectedColor": "#d4f6ef",
    "horizontalItemSelectedColor": "#d4f6ef",
    "horizontalItemHoverColor": "#d4f6ef"
  },
  "Tabs": {
    "itemColor": "#e3e6e0",
    "itemSelectedColor": "#eff1ed",
    "itemHoverColor": "#eff1ed",
    "itemActiveColor": "#eff1ed"
  },
  "Pagination": {
    "itemActiveBg": "#96d6c9",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#96d6c9"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#73bbad",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#73bbad",
  "colorLink": "#3f776c",
  "colorErrorText": "#9f3d3a",
  "colorSuccessText": "#1c7d3e",
  "colorWarningText": "#8b6700",
  "colorErrorTextHover": "#7a3c38",
  "colorErrorTextActive": "#7a3c38",
  "colorSuccessTextHover": "#225932",
  "colorSuccessTextActive": "#225932",
  "colorWarningTextHover": "#654a00",
  "colorWarningTextActive": "#654a00",
  "colorTextBase": "#080906",
  "colorBgBase": "#f7f8f7",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.75rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies Token;
const themeOverrides = {
  "colorBgContainer": "#f7f8f7",
  "colorBgElevated": "#f7f8f7",
  "colorBgLayout": "#f0f0ef",
  "colorBgSpotlight": "#9a9e96",
  "colorBgMask": "#0000008f",
  "colorText": "#080906",
  "colorTextSecondary": "#6a6e68",
  "colorTextTertiary": "#6a6e68",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#c8cbc6",
  "colorBorderSecondary": "#d6d7d4",
  "colorPrimaryBg": "#e8f3f0",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#aed3cb",
  "colorErrorBorder": "#feb4ad",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": "0.375rem",
  "borderRadiusLG": "1rem",
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
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#438b7e",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#438b7e",
  "colorLink": "#6ba499",
  "colorErrorText": "#e47b74",
  "colorSuccessText": "#51ab68",
  "colorWarningText": "#bf9221",
  "colorErrorTextHover": "#e49b95",
  "colorErrorTextActive": "#e49b95",
  "colorSuccessTextHover": "#84bd8f",
  "colorSuccessTextActive": "#84bd8f",
  "colorWarningTextHover": "#c8ab6c",
  "colorWarningTextActive": "#c8ab6c",
  "colorTextBase": "#f8faf6",
  "colorBgBase": "#191918",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.75rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies Token;
const darkThemeOverrides = {
  "colorBgContainer": "#191918",
  "colorBgElevated": "#191918",
  "colorBgLayout": "#222221",
  "colorBgSpotlight": "#8c9089",
  "colorBgMask": "#0000008f",
  "colorText": "#f8faf6",
  "colorTextSecondary": "#979a94",
  "colorTextTertiary": "#979a94",
  "colorTextLightSolid": "#051814",
  "colorBorder": "#464844",
  "colorBorderSecondary": "#393a38",
  "colorPrimaryBg": "#1c2422",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#2d4f48",
  "colorErrorBorder": "#6f322e",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": "0.375rem",
  "borderRadiusLG": "1rem",
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
  "boxShadow": "none",
  "boxShadowSecondary": "none"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#96d6c9",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#96d6c9",
  "colorLink": "#bbefe4",
  "colorErrorText": "#ffe0dc",
  "colorSuccessText": "#a5f6b5",
  "colorWarningText": "#ffe2a5",
  "colorErrorTextHover": "#fff0ee",
  "colorErrorTextActive": "#fff0ee",
  "colorSuccessTextHover": "#c6facf",
  "colorSuccessTextActive": "#c6facf",
  "colorWarningTextHover": "#ffefcf",
  "colorWarningTextActive": "#ffefcf",
  "colorTextBase": "#eff1ed",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.75rem",
  "lineWidth": 2,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 37
} satisfies Token;
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080808",
  "colorBgSpotlight": "#d7dbd4",
  "colorBgMask": "#0000008f",
  "colorText": "#eff1ed",
  "colorTextSecondary": "#e3e6e0",
  "colorTextTertiary": "#e3e6e0",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#80827e",
  "colorBorderSecondary": "#686a67",
  "colorPrimaryBg": "#040a08",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#688881",
  "colorErrorBorder": "#ae706b",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": "0.375rem",
  "borderRadiusLG": "1rem",
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
