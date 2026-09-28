// @interop Ant Design 기반 Berry 테마 정의

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
    "itemSelectedColor": "#752a45",
    "subMenuItemSelectedColor": "#752a45",
    "horizontalItemSelectedColor": "#752a45",
    "horizontalItemHoverColor": "#752a45"
  },
  "Tabs": {
    "itemColor": "#615b5e",
    "itemSelectedColor": "#0b080a",
    "itemHoverColor": "#0b080a",
    "itemActiveColor": "#0b080a"
  },
  "Pagination": {
    "itemActiveBg": "#ea4c89",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  },
  "Calendar": {
    "itemActiveBg": "#ea4c89"
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
    "itemSelectedColor": "#f79fb9",
    "subMenuItemSelectedColor": "#f79fb9",
    "horizontalItemSelectedColor": "#f79fb9",
    "horizontalItemHoverColor": "#f79fb9"
  },
  "Tabs": {
    "itemColor": "#9e989b",
    "itemSelectedColor": "#fcf8fa",
    "itemHoverColor": "#fcf8fa",
    "itemActiveColor": "#fcf8fa"
  },
  "Pagination": {
    "itemActiveBg": "#ea4c89",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  },
  "Calendar": {
    "itemActiveBg": "#ea4c89"
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
    "itemSelectedColor": "#fff0f3",
    "subMenuItemSelectedColor": "#fff0f3",
    "horizontalItemSelectedColor": "#fff0f3",
    "horizontalItemHoverColor": "#fff0f3"
  },
  "Tabs": {
    "itemColor": "#e9e4e6",
    "itemSelectedColor": "#f4f0f2",
    "itemHoverColor": "#f4f0f2",
    "itemActiveColor": "#f4f0f2"
  },
  "Pagination": {
    "itemActiveBg": "#ffb5ca",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#ffb5ca"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#ea4c89",
  "colorError": "#a2191f",
  "colorSuccess": "#35ca68",
  "colorWarning": "#daa500",
  "colorInfo": "#ea4c89",
  "colorLink": "#a82d5f",
  "colorErrorText": "#790d13",
  "colorSuccessText": "#007e38",
  "colorWarningText": "#8b6700",
  "colorErrorTextHover": "#5e1e1c",
  "colorErrorTextActive": "#5e1e1c",
  "colorSuccessTextHover": "#175b2d",
  "colorSuccessTextActive": "#175b2d",
  "colorWarningTextHover": "#654a00",
  "colorWarningTextActive": "#654a00",
  "colorTextBase": "#0b080a",
  "colorBgBase": "#f8f7f8",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "1rem",
  "lineWidth": 1,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 31
} satisfies Token;
const themeOverrides = {
  "colorBgContainer": "#f8f7f8",
  "colorBgElevated": "#f8f7f8",
  "colorBgLayout": "#f1f0f0",
  "colorBgSpotlight": "#6b6568",
  "colorBgMask": "#0000008f",
  "colorText": "#0b080a",
  "colorTextSecondary": "#615b5e",
  "colorTextTertiary": "#615b5e",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#cdc8cb",
  "colorBorderSecondary": "#d9d6d7",
  "colorPrimaryBg": "#f4d8df",
  "colorErrorBg": "#e0c8c5",
  "colorSuccessBg": "#e3f6e6",
  "colorWarningBg": "#f9efda",
  "colorPrimaryBorder": "#e18aa4",
  "colorErrorBorder": "#a75f59",
  "colorSuccessBorder": "#99dda7",
  "colorWarningBorder": "#e8c57b",
  "borderRadiusSM": "0.5rem",
  "borderRadiusLG": "1.5rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.1875rem",
  "fontSizeHeading2": "1.75rem",
  "fontSizeHeading3": "1.375rem",
  "fontSizeHeading4": "1.25rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 27,
  "controlHeightLG": 37,
  "boxShadow": "0 0 1rem 0 #25151e26",
  "boxShadowSecondary": "0 0 3rem 0 #25151e33, 0 0.25rem 0.75rem 0 #25151e1f"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm, antdTheme.compactAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#ea4c89",
  "colorError": "#a2191f",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#ea4c89",
  "colorLink": "#fc7aa6",
  "colorErrorText": "#e97970",
  "colorSuccessText": "#3fae60",
  "colorWarningText": "#c19100",
  "colorErrorTextHover": "#e3968e",
  "colorErrorTextActive": "#e3968e",
  "colorSuccessTextHover": "#7cbf8a",
  "colorSuccessTextActive": "#7cbf8a",
  "colorWarningTextHover": "#cdaa60",
  "colorWarningTextActive": "#cdaa60",
  "colorTextBase": "#fcf8fa",
  "colorBgBase": "#191919",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "1rem",
  "lineWidth": 1,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 31
} satisfies Token;
const darkThemeOverrides = {
  "colorBgContainer": "#191919",
  "colorBgElevated": "#191919",
  "colorBgLayout": "#232222",
  "colorBgSpotlight": "#948d90",
  "colorBgMask": "#0000008f",
  "colorText": "#fcf8fa",
  "colorTextSecondary": "#9e989b",
  "colorTextTertiary": "#9e989b",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#494648",
  "colorBorderSecondary": "#3c393a",
  "colorPrimaryBg": "#39252a",
  "colorErrorBg": "#2a1918",
  "colorSuccessBg": "#18261b",
  "colorWarningBg": "#292111",
  "colorPrimaryBorder": "#a5546e",
  "colorErrorBorder": "#6e2d29",
  "colorSuccessBorder": "#0e5627",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": "0.5rem",
  "borderRadiusLG": "1.5rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.1875rem",
  "fontSizeHeading2": "1.75rem",
  "fontSizeHeading3": "1.375rem",
  "fontSizeHeading4": "1.25rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 27,
  "controlHeightLG": 37,
  "boxShadow": "0 0 1rem 0 #25151e26",
  "boxShadowSecondary": "0 0 3rem 0 #25151e33, 0 0.25rem 0.75rem 0 #25151e1f"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#ffb5ca",
  "colorError": "#ffb7b5",
  "colorSuccess": "#6ce08a",
  "colorWarning": "#fac130",
  "colorInfo": "#ffb5ca",
  "colorLink": "#ffdfe7",
  "colorErrorText": "#ffdfde",
  "colorSuccessText": "#99f8ae",
  "colorWarningText": "#ffe2a7",
  "colorErrorTextHover": "#ffefef",
  "colorErrorTextActive": "#ffefef",
  "colorSuccessTextHover": "#bffcca",
  "colorSuccessTextActive": "#bffcca",
  "colorWarningTextHover": "#fff0d1",
  "colorWarningTextActive": "#fff0d1",
  "colorTextBase": "#f4f0f2",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "1rem",
  "lineWidth": 2,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 33
} satisfies Token;
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#090808",
  "colorBgSpotlight": "#dfd8db",
  "colorBgMask": "#0000008f",
  "colorText": "#f4f0f2",
  "colorTextSecondary": "#e9e4e6",
  "colorTextTertiary": "#e9e4e6",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#848182",
  "colorBorderSecondary": "#6b696a",
  "colorPrimaryBg": "#120408",
  "colorErrorBg": "#120404",
  "colorSuccessBg": "#020b04",
  "colorWarningBg": "#0d0700",
  "colorPrimaryBorder": "#b56980",
  "colorErrorBorder": "#b9696a",
  "colorSuccessBorder": "#558f62",
  "colorWarningBorder": "#9b7d3c",
  "borderRadiusSM": "0.5rem",
  "borderRadiusLG": "1.5rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.1875rem",
  "fontSizeHeading2": "1.75rem",
  "fontSizeHeading3": "1.375rem",
  "fontSizeHeading4": "1.25rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 29,
  "controlHeightLG": 39,
  "boxShadow": "0 0 1rem 0 #25151e26",
  "boxShadowSecondary": "0 0 3rem 0 #25151e33, 0 0.25rem 0.75rem 0 #25151e1f"
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
