// @interop Ant Design 기반 Graphite 테마 정의

import { theme as antdTheme, type ThemeConfig } from "antd";

type Rem<T> = { [K in keyof T]: T[K] | string };
type Token = Rem<NonNullable<ThemeConfig["token"]>>;

const antdDefault = antdTheme.getDesignToken();
const button = {
  controlHeight: antdDefault.controlHeight,
  controlHeightSM: antdDefault.controlHeightSM,
  controlHeightLG: antdDefault.controlHeightLG,
  contentFontSize: antdDefault.fontSize,
  contentFontSizeSM: antdDefault.fontSize,
  contentFontSizeLG: antdDefault.fontSizeLG,
  paddingInline: "var(--component-button-md-padding-inline)",
  paddingInlineSM: "var(--component-button-sm-padding-inline)",
  paddingInlineLG: "var(--component-button-lg-padding-inline)",
};

const components = { ...{
  "Modal": {
    "borderRadiusLG": "0.5rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "0.5rem",
    "padding": "var(--component-sheet-padding)",
    "paddingLG": "var(--component-sheet-padding)",
    "footerPaddingBlock": "var(--component-sheet-padding)",
    "footerPaddingInline": "var(--component-sheet-padding)"
  },
  "Notification": {
    "borderRadiusLG": "var(--component-toast-radius)",
    "paddingMD": "var(--component-toast-padding-block)",
    "paddingContentHorizontalLG": "var(--component-toast-padding-inline)",
    "margin": "var(--component-toast-stack-gap)",
    "marginLG": "var(--component-toast-region-inset)"
  },
  "Message": {
    "borderRadiusLG": "var(--component-toast-radius)",
    "contentPadding": "var(--component-toast-padding-block) var(--component-toast-padding-inline)"
  },
  "Popover": {
    "borderRadiusLG": "var(--component-popover-radius)",
    "innerPadding": "var(--component-popover-padding)",
    "titleMarginBottom": "var(--component-popover-gap)"
  },
  "Tooltip": {
    "borderRadius": "var(--component-tooltip-radius)",
    "paddingXS": "var(--component-tooltip-padding-inline)",
    "paddingSM": "calc(var(--component-tooltip-padding-block) * 2)"
  },
  "Dropdown": {
    "paddingBlock": "var(--component-menu-item-padding-block)",
    "controlPaddingHorizontal": "var(--component-menu-item-padding-inline)",
    "paddingXXS": "var(--component-menu-padding)",
    "borderRadiusLG": "var(--component-menu-radius)"
  },
  "Card": {
    "borderRadiusLG": "0.375rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "0.375rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "0.375rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "0.375rem",
    "defaultPadding": "var(--component-alert-padding)",
    "withDescriptionPadding": "var(--component-alert-padding)"
  },
  "Input": {
    "paddingInline": "var(--component-input-padding-inline)"
  },
  "InputNumber": {
    "paddingInline": "var(--component-input-padding-inline)"
  },
  "Mentions": {
    "paddingInline": "var(--component-input-padding-inline)"
  },
  "DatePicker": {
    "paddingInline": "var(--component-datepicker-trigger-padding-inline)"
  },
  "Radio": {
    "wrapperMarginInlineEnd": "var(--component-radio-group-gap)"
  },
  "Slider": {
    "borderRadiusXS": "var(--component-slider-track-radius)"
  },
  "Progress": {
    "lineBorderRadius": "var(--component-progress-radius)"
  },
  "Skeleton": {
    "blockRadius": "var(--component-skeleton-radius)"
  },
  "Breadcrumb": {
    "separatorMargin": "var(--component-breadcrumb-gap)",
    "paddingXXS": "var(--component-breadcrumb-tap-padding-inline)"
  },
  "Divider": {
    "textPaddingInline": "var(--component-divider-label-gap)"
  },
  "List": {
    "itemPadding": "var(--component-listrow-padding-block) 0",
    "titleMarginBottom": "var(--component-listrow-main-gap)"
  },
  "Listy": {
    "itemPaddingInline": "var(--component-listrow-padding-inline)"
  },
  "Form": {
    "itemMarginBottom": "var(--component-field-group-gap)",
    "verticalLabelPadding": "0 0 var(--component-field-gap)"
  },
  "Menu": {
    "itemSelectedColor": "#020202",
    "subMenuItemSelectedColor": "#020202",
    "horizontalItemSelectedColor": "#020202",
    "horizontalItemHoverColor": "#020202"
  },
  "Tabs": {
    "itemColor": "#5b5d5e",
    "itemSelectedColor": "#080809",
    "itemHoverColor": "#080809",
    "itemActiveColor": "#080809"
  },
  "Pagination": {
    "itemActiveBg": "#181717",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  },
  "Calendar": {
    "itemActiveBg": "#181717"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const darkComponents = { ...{
  "Modal": {
    "borderRadiusLG": "0.5rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "0.5rem",
    "padding": "var(--component-sheet-padding)",
    "paddingLG": "var(--component-sheet-padding)",
    "footerPaddingBlock": "var(--component-sheet-padding)",
    "footerPaddingInline": "var(--component-sheet-padding)"
  },
  "Notification": {
    "borderRadiusLG": "var(--component-toast-radius)",
    "paddingMD": "var(--component-toast-padding-block)",
    "paddingContentHorizontalLG": "var(--component-toast-padding-inline)",
    "margin": "var(--component-toast-stack-gap)",
    "marginLG": "var(--component-toast-region-inset)"
  },
  "Message": {
    "borderRadiusLG": "var(--component-toast-radius)",
    "contentPadding": "var(--component-toast-padding-block) var(--component-toast-padding-inline)"
  },
  "Popover": {
    "borderRadiusLG": "var(--component-popover-radius)",
    "innerPadding": "var(--component-popover-padding)",
    "titleMarginBottom": "var(--component-popover-gap)"
  },
  "Tooltip": {
    "borderRadius": "var(--component-tooltip-radius)",
    "paddingXS": "var(--component-tooltip-padding-inline)",
    "paddingSM": "calc(var(--component-tooltip-padding-block) * 2)"
  },
  "Dropdown": {
    "paddingBlock": "var(--component-menu-item-padding-block)",
    "controlPaddingHorizontal": "var(--component-menu-item-padding-inline)",
    "paddingXXS": "var(--component-menu-padding)",
    "borderRadiusLG": "var(--component-menu-radius)"
  },
  "Card": {
    "borderRadiusLG": "0.375rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "0.375rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "0.375rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "0.375rem",
    "defaultPadding": "var(--component-alert-padding)",
    "withDescriptionPadding": "var(--component-alert-padding)"
  },
  "Input": {
    "paddingInline": "var(--component-input-padding-inline)"
  },
  "InputNumber": {
    "paddingInline": "var(--component-input-padding-inline)"
  },
  "Mentions": {
    "paddingInline": "var(--component-input-padding-inline)"
  },
  "DatePicker": {
    "paddingInline": "var(--component-datepicker-trigger-padding-inline)"
  },
  "Radio": {
    "wrapperMarginInlineEnd": "var(--component-radio-group-gap)"
  },
  "Slider": {
    "borderRadiusXS": "var(--component-slider-track-radius)"
  },
  "Progress": {
    "lineBorderRadius": "var(--component-progress-radius)"
  },
  "Skeleton": {
    "blockRadius": "var(--component-skeleton-radius)"
  },
  "Breadcrumb": {
    "separatorMargin": "var(--component-breadcrumb-gap)",
    "paddingXXS": "var(--component-breadcrumb-tap-padding-inline)"
  },
  "Divider": {
    "textPaddingInline": "var(--component-divider-label-gap)"
  },
  "List": {
    "itemPadding": "var(--component-listrow-padding-block) 0",
    "titleMarginBottom": "var(--component-listrow-main-gap)"
  },
  "Listy": {
    "itemPaddingInline": "var(--component-listrow-padding-inline)"
  },
  "Form": {
    "itemMarginBottom": "var(--component-field-group-gap)",
    "verticalLabelPadding": "0 0 var(--component-field-gap)"
  },
  "Menu": {
    "itemSelectedColor": "#a4a3a3",
    "subMenuItemSelectedColor": "#a4a3a3",
    "horizontalItemSelectedColor": "#a4a3a3",
    "horizontalItemHoverColor": "#a4a3a3"
  },
  "Tabs": {
    "itemColor": "#989a9b",
    "itemSelectedColor": "#f8f9fb",
    "itemHoverColor": "#f8f9fb",
    "itemActiveColor": "#f8f9fb"
  },
  "Pagination": {
    "itemActiveBg": "#181717",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  },
  "Calendar": {
    "itemActiveBg": "#181717"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const highContrastComponents = { ...{
  "Modal": {
    "borderRadiusLG": "0.5rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "0.5rem",
    "padding": "var(--component-sheet-padding)",
    "paddingLG": "var(--component-sheet-padding)",
    "footerPaddingBlock": "var(--component-sheet-padding)",
    "footerPaddingInline": "var(--component-sheet-padding)"
  },
  "Notification": {
    "borderRadiusLG": "var(--component-toast-radius)",
    "paddingMD": "var(--component-toast-padding-block)",
    "paddingContentHorizontalLG": "var(--component-toast-padding-inline)",
    "margin": "var(--component-toast-stack-gap)",
    "marginLG": "var(--component-toast-region-inset)"
  },
  "Message": {
    "borderRadiusLG": "var(--component-toast-radius)",
    "contentPadding": "var(--component-toast-padding-block) var(--component-toast-padding-inline)"
  },
  "Popover": {
    "borderRadiusLG": "var(--component-popover-radius)",
    "innerPadding": "var(--component-popover-padding)",
    "titleMarginBottom": "var(--component-popover-gap)"
  },
  "Tooltip": {
    "borderRadius": "var(--component-tooltip-radius)",
    "paddingXS": "var(--component-tooltip-padding-inline)",
    "paddingSM": "calc(var(--component-tooltip-padding-block) * 2)"
  },
  "Dropdown": {
    "paddingBlock": "var(--component-menu-item-padding-block)",
    "controlPaddingHorizontal": "var(--component-menu-item-padding-inline)",
    "paddingXXS": "var(--component-menu-padding)",
    "borderRadiusLG": "var(--component-menu-radius)"
  },
  "Card": {
    "borderRadiusLG": "0.375rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "0.375rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "0.375rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "0.375rem",
    "defaultPadding": "var(--component-alert-padding)",
    "withDescriptionPadding": "var(--component-alert-padding)"
  },
  "Input": {
    "paddingInline": "var(--component-input-padding-inline)"
  },
  "InputNumber": {
    "paddingInline": "var(--component-input-padding-inline)"
  },
  "Mentions": {
    "paddingInline": "var(--component-input-padding-inline)"
  },
  "DatePicker": {
    "paddingInline": "var(--component-datepicker-trigger-padding-inline)"
  },
  "Radio": {
    "wrapperMarginInlineEnd": "var(--component-radio-group-gap)"
  },
  "Slider": {
    "borderRadiusXS": "var(--component-slider-track-radius)"
  },
  "Progress": {
    "lineBorderRadius": "var(--component-progress-radius)"
  },
  "Skeleton": {
    "blockRadius": "var(--component-skeleton-radius)"
  },
  "Breadcrumb": {
    "separatorMargin": "var(--component-breadcrumb-gap)",
    "paddingXXS": "var(--component-breadcrumb-tap-padding-inline)"
  },
  "Divider": {
    "textPaddingInline": "var(--component-divider-label-gap)"
  },
  "List": {
    "itemPadding": "var(--component-listrow-padding-block) 0",
    "titleMarginBottom": "var(--component-listrow-main-gap)"
  },
  "Listy": {
    "itemPaddingInline": "var(--component-listrow-padding-inline)"
  },
  "Form": {
    "itemMarginBottom": "var(--component-field-group-gap)",
    "verticalLabelPadding": "0 0 var(--component-field-gap)"
  },
  "Menu": {
    "itemSelectedColor": "#ffeeee",
    "subMenuItemSelectedColor": "#ffeeee",
    "horizontalItemSelectedColor": "#ffeeee",
    "horizontalItemHoverColor": "#ffeeee"
  },
  "Tabs": {
    "itemColor": "#e4e5e7",
    "itemSelectedColor": "#f0f1f2",
    "itemHoverColor": "#f0f1f2",
    "itemActiveColor": "#f0f1f2"
  },
  "Pagination": {
    "itemActiveBg": "#f5bbbc",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#f5bbbc"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#181717",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#181717",
  "colorLink": "#050505",
  "colorErrorText": "#9f3d3a",
  "colorSuccessText": "#1c7d3e",
  "colorWarningText": "#8b6700",
  "colorErrorTextHover": "#7a3c38",
  "colorErrorTextActive": "#7a3c38",
  "colorSuccessTextHover": "#225932",
  "colorSuccessTextActive": "#225932",
  "colorWarningTextHover": "#654a00",
  "colorWarningTextActive": "#654a00",
  "colorTextBase": "#080809",
  "colorBgBase": "#f7f8f8",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.25rem",
  "lineWidth": 1,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 32
} satisfies Token;
const themeOverrides = {
  "colorBgContainer": "#f7f8f8",
  "colorBgElevated": "#f7f8f8",
  "colorBgLayout": "#f0f0f0",
  "colorBgSpotlight": "#656769",
  "colorBgMask": "#0000008f",
  "colorText": "#080809",
  "colorTextSecondary": "#5b5d5e",
  "colorTextTertiary": "#5b5d5e",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#c9cacb",
  "colorBorderSecondary": "#d6d7d8",
  "colorPrimaryBg": "#b7b7b7",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#3a3a3a",
  "colorErrorBorder": "#feb4ad",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 28,
  "controlHeightLG": 37,
  "boxShadow": "none",
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #161b201f"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm, antdTheme.compactAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#181717",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#181717",
  "colorLink": "#9a9999",
  "colorErrorText": "#e47b74",
  "colorSuccessText": "#51ab68",
  "colorWarningText": "#bf9221",
  "colorErrorTextHover": "#e49b95",
  "colorErrorTextActive": "#e49b95",
  "colorSuccessTextHover": "#84bd8f",
  "colorSuccessTextActive": "#84bd8f",
  "colorWarningTextHover": "#c8ab6c",
  "colorWarningTextActive": "#c8ab6c",
  "colorTextBase": "#f8f9fb",
  "colorBgBase": "#191919",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.25rem",
  "lineWidth": 1,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 32
} satisfies Token;
const darkThemeOverrides = {
  "colorBgContainer": "#191919",
  "colorBgElevated": "#191919",
  "colorBgLayout": "#222222",
  "colorBgSpotlight": "#8d8f91",
  "colorBgMask": "#0000008f",
  "colorText": "#f8f9fb",
  "colorTextSecondary": "#989a9b",
  "colorTextTertiary": "#989a9b",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#464748",
  "colorBorderSecondary": "#393a3b",
  "colorPrimaryBg": "#101010",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#151515",
  "colorErrorBorder": "#6f322e",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 28,
  "controlHeightLG": 37,
  "boxShadow": "none",
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #161b201f"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#f5bbbc",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#f5bbbc",
  "colorLink": "#ffdede",
  "colorErrorText": "#ffe0dc",
  "colorSuccessText": "#a5f6b5",
  "colorWarningText": "#ffe2a5",
  "colorErrorTextHover": "#fff0ee",
  "colorErrorTextActive": "#fff0ee",
  "colorSuccessTextHover": "#c6facf",
  "colorSuccessTextActive": "#c6facf",
  "colorWarningTextHover": "#ffefcf",
  "colorWarningTextActive": "#ffefcf",
  "colorTextBase": "#f0f1f2",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.25rem",
  "lineWidth": 2,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 34
} satisfies Token;
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080808",
  "colorBgSpotlight": "#d8dadc",
  "colorBgMask": "#0000008f",
  "colorText": "#f0f1f2",
  "colorTextSecondary": "#e4e5e7",
  "colorTextTertiary": "#e4e5e7",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#808183",
  "colorBorderSecondary": "#696a6a",
  "colorPrimaryBg": "#0c0707",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#977a7a",
  "colorErrorBorder": "#ae706b",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 16,
  "fontSizeSM": 15,
  "fontSizeLG": 18,
  "fontSizeHeading1": "1.875rem",
  "fontSizeHeading2": "1.5625rem",
  "fontSizeHeading3": "1.3125rem",
  "fontSizeHeading4": "1.1875rem",
  "fontSizeHeading5": "1.125rem",
  "controlHeightSM": 30,
  "controlHeightLG": 39,
  "boxShadow": "none",
  "boxShadowSecondary": "0 0.25rem 0.75rem 0 #161b201f"
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
