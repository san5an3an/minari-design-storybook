// @interop Ant Design 기반 Emerald 테마 정의

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
    "itemSelectedColor": "#1b5a3d",
    "subMenuItemSelectedColor": "#1b5a3d",
    "horizontalItemSelectedColor": "#1b5a3d",
    "horizontalItemHoverColor": "#1b5a3d"
  },
  "Tabs": {
    "itemColor": "#676e6a",
    "itemSelectedColor": "#060907",
    "itemHoverColor": "#060907",
    "itemActiveColor": "#060907"
  },
  "Pagination": {
    "itemActiveBg": "#40c68b",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#40c68b"
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
    "itemSelectedColor": "#7fbd9b",
    "subMenuItemSelectedColor": "#7fbd9b",
    "horizontalItemSelectedColor": "#7fbd9b",
    "horizontalItemHoverColor": "#7fbd9b"
  },
  "Tabs": {
    "itemColor": "#939b96",
    "itemSelectedColor": "#f5fbf8",
    "itemHoverColor": "#f5fbf8",
    "itemActiveColor": "#f5fbf8"
  },
  "Pagination": {
    "itemActiveBg": "#00925f",
    "itemActiveColor": "#001a0d",
    "itemActiveColorHover": "#001a0d"
  },
  "Calendar": {
    "itemActiveBg": "#00925f"
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
    "itemSelectedColor": "#c2fadb",
    "subMenuItemSelectedColor": "#c2fadb",
    "horizontalItemSelectedColor": "#c2fadb",
    "horizontalItemHoverColor": "#c2fadb"
  },
  "Tabs": {
    "itemColor": "#dfe7e2",
    "itemSelectedColor": "#ecf2ee",
    "itemHoverColor": "#ecf2ee",
    "itemActiveColor": "#ecf2ee"
  },
  "Pagination": {
    "itemActiveBg": "#6edea7",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#6edea7"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#40c68b",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#40c68b",
  "colorLink": "#007d51",
  "colorTextBase": "#060907",
  "colorBgBase": "#f7f8f7",
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
  "colorBgContainer": "#f7f8f7",
  "colorBgElevated": "#f7f8f7",
  "colorBgLayout": "#eff0ef",
  "colorBgSpotlight": "#969f9a",
  "colorBgMask": "#0000008f",
  "colorText": "#060907",
  "colorTextSecondary": "#676e6a",
  "colorTextTertiary": "#676e6a",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#c6cbc8",
  "colorBorderSecondary": "#d4d8d5",
  "colorPrimaryBg": "#e4f5eb",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#9cdab8",
  "colorErrorBorder": "#feb4ad",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #0520141a, 0 0.0625rem 0.1875rem 0.0625rem #05201414",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #05201429, 0 0.125rem 0.375rem 0 #0520141a"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#00925f",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#00925f",
  "colorLink": "#47ac7c",
  "colorTextBase": "#f5fbf8",
  "colorBgBase": "#181918",
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
  "colorBgContainer": "#181918",
  "colorBgElevated": "#181918",
  "colorBgLayout": "#212222",
  "colorBgSpotlight": "#88918b",
  "colorBgMask": "#0000008f",
  "colorText": "#f5fbf8",
  "colorTextSecondary": "#939b96",
  "colorTextTertiary": "#939b96",
  "colorTextLightSolid": "#001a0d",
  "colorBorder": "#444846",
  "colorBorderSecondary": "#373b39",
  "colorPrimaryBg": "#18261e",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#145438",
  "colorErrorBorder": "#6f322e",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #0520141a, 0 0.0625rem 0.1875rem 0.0625rem #05201414",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #05201429, 0 0.125rem 0.375rem 0 #0520141a"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#6edea7",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#6edea7",
  "colorLink": "#9ef6c7",
  "colorTextBase": "#ecf2ee",
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
  "colorBgSpotlight": "#d3dcd6",
  "colorBgMask": "#0000008f",
  "colorText": "#ecf2ee",
  "colorTextSecondary": "#dfe7e2",
  "colorTextTertiary": "#dfe7e2",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#7e8380",
  "colorBorderSecondary": "#676b68",
  "colorPrimaryBg": "#020b06",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#588d70",
  "colorErrorBorder": "#ae706b",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #0520141a, 0 0.0625rem 0.1875rem 0.0625rem #05201414",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #05201429, 0 0.125rem 0.375rem 0 #0520141a"
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
