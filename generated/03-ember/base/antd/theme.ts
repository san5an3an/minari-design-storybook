// @interop Ant Design 기반 Ember 테마 정의

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
    "itemSelectedColor": "#723a10",
    "subMenuItemSelectedColor": "#723a10",
    "horizontalItemSelectedColor": "#723a10",
    "horizontalItemHoverColor": "#723a10"
  },
  "Tabs": {
    "itemSelectedColor": "#0c0806",
    "itemHoverColor": "#0c0806",
    "itemActiveColor": "#0c0806"
  },
  "Pagination": {
    "itemActiveBg": "#f38020",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
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
    "itemSelectedColor": "#fcbb91",
    "subMenuItemSelectedColor": "#fcbb91",
    "horizontalItemSelectedColor": "#fcbb91",
    "horizontalItemHoverColor": "#fcbb91"
  },
  "Tabs": {
    "itemSelectedColor": "#fef8f4",
    "itemHoverColor": "#fef8f4",
    "itemActiveColor": "#fef8f4"
  },
  "Pagination": {
    "itemActiveBg": "#f38020",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
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
    "itemSelectedColor": "#fff0e7",
    "subMenuItemSelectedColor": "#fff0e7",
    "horizontalItemSelectedColor": "#fff0e7",
    "horizontalItemHoverColor": "#fff0e7"
  },
  "Tabs": {
    "itemSelectedColor": "#f4f0ec",
    "itemHoverColor": "#f4f0ec",
    "itemActiveColor": "#f4f0ec"
  },
  "Pagination": {
    "itemActiveBg": "#ffbb8f",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#f38020",
  "colorError": "#991b1b",
  "colorSuccess": "#35ca68",
  "colorWarning": "#daa500",
  "colorInfo": "#f38020",
  "colorLink": "#a25000",
  "colorTextBase": "#0c0806",
  "colorBgBase": "#f8f7f7",
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
  "colorBgContainer": "#f8f7f7",
  "colorBgElevated": "#f8f7f7",
  "colorBgLayout": "#f1f0ef",
  "colorBgSpotlight": "#a49b95",
  "colorBgMask": "#0000008f",
  "colorText": "#0c0806",
  "colorTextSecondary": "#726c66",
  "colorTextTertiary": "#726c66",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#cec9c5",
  "colorBorderSecondary": "#dad6d3",
  "colorPrimaryBg": "#f6e2d6",
  "colorErrorBg": "#ddc7c4",
  "colorSuccessBg": "#e3f6e6",
  "colorWarningBg": "#f9efda",
  "colorPrimaryBorder": "#e9a980",
  "colorErrorBorder": "#a05d56",
  "colorSuccessBorder": "#99dda7",
  "colorWarningBorder": "#e8c57b",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2915051a, 0 0.0625rem 0.1875rem 0.0625rem #29150514",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #29150529, 0 0.125rem 0.375rem 0 #2915051a"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#f38020",
  "colorError": "#991b1b",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#f38020",
  "colorLink": "#ffa86f",
  "colorTextBase": "#fef8f4",
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
  "colorBgLayout": "#232221",
  "colorBgSpotlight": "#958d87",
  "colorBgMask": "#0000008f",
  "colorText": "#fef8f4",
  "colorTextSecondary": "#9f9892",
  "colorTextTertiary": "#9f9892",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#4a4643",
  "colorBorderSecondary": "#3c3937",
  "colorPrimaryBg": "#3b2c23",
  "colorErrorBg": "#281817",
  "colorSuccessBg": "#18261b",
  "colorWarningBg": "#292111",
  "colorPrimaryBorder": "#ae724a",
  "colorErrorBorder": "#682b26",
  "colorSuccessBorder": "#0e5627",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2915051a, 0 0.0625rem 0.1875rem 0.0625rem #29150514",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #29150529, 0 0.125rem 0.375rem 0 #2915051a"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#ffbb8f",
  "colorError": "#ffb8b1",
  "colorSuccess": "#6ce08a",
  "colorWarning": "#fac130",
  "colorInfo": "#ffbb8f",
  "colorLink": "#ffe1ce",
  "colorTextBase": "#f4f0ec",
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
  "colorBgLayout": "#090807",
  "colorBgSpotlight": "#e0d8d2",
  "colorBgMask": "#0000008f",
  "colorText": "#f4f0ec",
  "colorTextSecondary": "#ebe4de",
  "colorTextTertiary": "#ebe4de",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#85817d",
  "colorBorderSecondary": "#6d6967",
  "colorPrimaryBg": "#110501",
  "colorErrorBg": "#120404",
  "colorSuccessBg": "#020b04",
  "colorWarningBg": "#0d0700",
  "colorPrimaryBorder": "#b27145",
  "colorErrorBorder": "#b96a64",
  "colorSuccessBorder": "#558f62",
  "colorWarningBorder": "#9b7d3c",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2915051a, 0 0.0625rem 0.1875rem 0.0625rem #29150514",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #29150529, 0 0.125rem 0.375rem 0 #2915051a"
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
