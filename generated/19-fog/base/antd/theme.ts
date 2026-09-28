// @interop Ant Design 기반 Fog 테마 정의

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
    "itemSelectedColor": "#0b1317",
    "subMenuItemSelectedColor": "#0b1317",
    "horizontalItemSelectedColor": "#0b1317",
    "horizontalItemHoverColor": "#0b1317"
  },
  "Tabs": {
    "itemColor": "#6a6d6f",
    "itemSelectedColor": "#070809",
    "itemHoverColor": "#070809",
    "itemActiveColor": "#070809"
  },
  "Pagination": {
    "itemActiveBg": "#1d2d35",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  },
  "Calendar": {
    "itemActiveBg": "#1d2d35"
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
    "itemSelectedColor": "#9ca6ab",
    "subMenuItemSelectedColor": "#9ca6ab",
    "horizontalItemSelectedColor": "#9ca6ab",
    "horizontalItemHoverColor": "#9ca6ab"
  },
  "Tabs": {
    "itemColor": "#969a9b",
    "itemSelectedColor": "#f7fafb",
    "itemHoverColor": "#f7fafb",
    "itemActiveColor": "#f7fafb"
  },
  "Pagination": {
    "itemActiveBg": "#1d2d35",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  },
  "Calendar": {
    "itemActiveBg": "#1d2d35"
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
    "itemSelectedColor": "#dcf3ff",
    "subMenuItemSelectedColor": "#dcf3ff",
    "horizontalItemSelectedColor": "#dcf3ff",
    "horizontalItemHoverColor": "#dcf3ff"
  },
  "Tabs": {
    "itemColor": "#e2e6e7",
    "itemSelectedColor": "#eef1f2",
    "itemHoverColor": "#eef1f2",
    "itemActiveColor": "#eef1f2"
  },
  "Pagination": {
    "itemActiveBg": "#9bd1ec",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#9bd1ec"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#1d2d35",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#1d2d35",
  "colorLink": "#0f1c22",
  "colorErrorText": "#9f3d3a",
  "colorSuccessText": "#1c7d3e",
  "colorWarningText": "#8b6700",
  "colorErrorTextHover": "#7a3c38",
  "colorErrorTextActive": "#7a3c38",
  "colorSuccessTextHover": "#225932",
  "colorSuccessTextActive": "#225932",
  "colorWarningTextHover": "#654a00",
  "colorWarningTextActive": "#654a00",
  "colorTextBase": "#070809",
  "colorBgBase": "#f7f8f8",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
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
  "colorBgSpotlight": "#999d9f",
  "colorBgMask": "#0000008f",
  "colorText": "#070809",
  "colorTextSecondary": "#6a6d6f",
  "colorTextTertiary": "#6a6d6f",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#c8cacb",
  "colorBorderSecondary": "#d5d7d8",
  "colorPrimaryBg": "#bcbfc1",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#454e53",
  "colorErrorBorder": "#feb4ad",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
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
  "colorPrimary": "#1d2d35",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#1d2d35",
  "colorLink": "#8d9ca4",
  "colorErrorText": "#e47b74",
  "colorSuccessText": "#51ab68",
  "colorWarningText": "#bf9221",
  "colorErrorTextHover": "#e49b95",
  "colorErrorTextActive": "#e49b95",
  "colorSuccessTextHover": "#84bd8f",
  "colorSuccessTextActive": "#84bd8f",
  "colorWarningTextHover": "#c8ab6c",
  "colorWarningTextActive": "#c8ab6c",
  "colorTextBase": "#f7fafb",
  "colorBgBase": "#181919",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
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
  "colorBgSpotlight": "#8b8f91",
  "colorBgMask": "#0000008f",
  "colorText": "#f7fafb",
  "colorTextSecondary": "#969a9b",
  "colorTextTertiary": "#969a9b",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#454848",
  "colorBorderSecondary": "#393a3b",
  "colorPrimaryBg": "#111314",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#182024",
  "colorErrorBorder": "#6f322e",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
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
  "colorPrimary": "#9bd1ec",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#9bd1ec",
  "colorLink": "#c2eaff",
  "colorErrorText": "#ffe0dc",
  "colorSuccessText": "#a5f6b5",
  "colorWarningText": "#ffe2a5",
  "colorErrorTextHover": "#fff0ee",
  "colorErrorTextActive": "#fff0ee",
  "colorSuccessTextHover": "#c6facf",
  "colorSuccessTextActive": "#c6facf",
  "colorWarningTextHover": "#ffefcf",
  "colorWarningTextActive": "#ffefcf",
  "colorTextBase": "#eef1f2",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
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
  "colorBgSpotlight": "#d6dadc",
  "colorBgMask": "#0000008f",
  "colorText": "#eef1f2",
  "colorTextSecondary": "#e2e6e7",
  "colorTextTertiary": "#e2e6e7",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#7f8282",
  "colorBorderSecondary": "#686a6a",
  "colorPrimaryBg": "#05090c",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#6b8593",
  "colorErrorBorder": "#ae706b",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
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
