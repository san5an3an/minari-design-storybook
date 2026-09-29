// @interop Ant Design 기반 Saffron 테마 정의

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
    "borderRadiusLG": "1.25rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "1.25rem",
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
    "borderRadiusLG": "1rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "1rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "1rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "1rem",
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
    "itemSelectedColor": "#714000",
    "subMenuItemSelectedColor": "#714000",
    "horizontalItemSelectedColor": "#714000",
    "horizontalItemHoverColor": "#714000"
  },
  "Tabs": {
    "itemColor": "#716c65",
    "itemSelectedColor": "#0b0805",
    "itemHoverColor": "#0b0805",
    "itemActiveColor": "#0b0805"
  },
  "Pagination": {
    "itemActiveBg": "#ff9900",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#ff9900"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const darkComponents = { ...{
  "Modal": {
    "borderRadiusLG": "1.25rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "1.25rem",
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
    "borderRadiusLG": "1rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "1rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "1rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "1rem",
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
    "itemSelectedColor": "#ffd4ac",
    "subMenuItemSelectedColor": "#ffd4ac",
    "horizontalItemSelectedColor": "#ffd4ac",
    "horizontalItemHoverColor": "#ffd4ac"
  },
  "Tabs": {
    "itemColor": "#9e9991",
    "itemSelectedColor": "#fdf9f3",
    "itemHoverColor": "#fdf9f3",
    "itemActiveColor": "#fdf9f3"
  },
  "Pagination": {
    "itemActiveBg": "#ff9900",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#ff9900"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const highContrastComponents = { ...{
  "Modal": {
    "borderRadiusLG": "1.25rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "1.25rem",
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
    "borderRadiusLG": "1rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "1rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "1rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "1rem",
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
    "itemSelectedColor": "#fff0e2",
    "subMenuItemSelectedColor": "#fff0e2",
    "horizontalItemSelectedColor": "#fff0e2",
    "horizontalItemHoverColor": "#fff0e2"
  },
  "Tabs": {
    "itemColor": "#e9e4dc",
    "itemSelectedColor": "#f3f0eb",
    "itemHoverColor": "#f3f0eb",
    "itemActiveColor": "#f3f0eb"
  },
  "Pagination": {
    "itemActiveBg": "#ffbc79",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#ffbc79"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#ff9900",
  "colorError": "#dd3338",
  "colorSuccess": "#35ca68",
  "colorWarning": "#daa500",
  "colorInfo": "#ff9900",
  "colorLink": "#9a5a00",
  "colorErrorText": "#af2b2d",
  "colorSuccessText": "#007e38",
  "colorWarningText": "#8b6700",
  "colorErrorTextHover": "#853431",
  "colorErrorTextActive": "#853431",
  "colorSuccessTextHover": "#175b2d",
  "colorSuccessTextActive": "#175b2d",
  "colorWarningTextHover": "#654a00",
  "colorWarningTextActive": "#654a00",
  "colorTextBase": "#0b0805",
  "colorBgBase": "#f8f8f7",
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
  "colorBgContainer": "#f8f8f7",
  "colorBgElevated": "#f8f8f7",
  "colorBgLayout": "#f1f0ee",
  "colorBgSpotlight": "#a19b92",
  "colorBgMask": "#0000008f",
  "colorText": "#0b0805",
  "colorTextSecondary": "#716c65",
  "colorTextTertiary": "#716c65",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#cdc9c4",
  "colorBorderSecondary": "#d9d6d2",
  "colorPrimaryBg": "#f9e8d9",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e3f6e6",
  "colorWarningBg": "#f9efda",
  "colorPrimaryBorder": "#f4bc86",
  "colorErrorBorder": "#ffb4ad",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2618001a, 0 0.0625rem 0.1875rem 0.0625rem #26180014",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #26180029, 0 0.125rem 0.375rem 0 #2618001a"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#ff9900",
  "colorError": "#e63e40",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#ff9900",
  "colorLink": "#ffc48d",
  "colorErrorText": "#f76f69",
  "colorSuccessText": "#3fae60",
  "colorWarningText": "#c19100",
  "colorErrorTextHover": "#f1958d",
  "colorErrorTextActive": "#f1958d",
  "colorSuccessTextHover": "#7cbf8a",
  "colorSuccessTextActive": "#7cbf8a",
  "colorWarningTextHover": "#cdaa60",
  "colorWarningTextActive": "#cdaa60",
  "colorTextBase": "#fdf9f3",
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
  "colorBgSpotlight": "#948e84",
  "colorBgMask": "#0000008f",
  "colorText": "#fdf9f3",
  "colorTextSecondary": "#9e9991",
  "colorTextTertiary": "#9e9991",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#4a4742",
  "colorBorderSecondary": "#3c3a36",
  "colorPrimaryBg": "#3e3125",
  "colorErrorBg": "#301c1a",
  "colorSuccessBg": "#18261b",
  "colorWarningBg": "#292111",
  "colorPrimaryBorder": "#b9844f",
  "colorErrorBorder": "#782826",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2618001a, 0 0.0625rem 0.1875rem 0.0625rem #26180014",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #26180029, 0 0.125rem 0.375rem 0 #2618001a"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#ffbc79",
  "colorError": "#ffb8b1",
  "colorSuccess": "#6ce08a",
  "colorWarning": "#fac130",
  "colorInfo": "#ffbc79",
  "colorLink": "#ffe1c5",
  "colorErrorText": "#ffe0dc",
  "colorSuccessText": "#99f8ae",
  "colorWarningText": "#ffe2a7",
  "colorErrorTextHover": "#fff0ee",
  "colorErrorTextActive": "#fff0ee",
  "colorSuccessTextHover": "#bffcca",
  "colorSuccessTextActive": "#bffcca",
  "colorWarningTextHover": "#fff0d1",
  "colorWarningTextActive": "#fff0d1",
  "colorTextBase": "#f3f0eb",
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
  "colorBgSpotlight": "#ded9cf",
  "colorBgMask": "#0000008f",
  "colorText": "#f3f0eb",
  "colorTextSecondary": "#e9e4dc",
  "colorTextTertiary": "#e9e4dc",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#83817c",
  "colorBorderSecondary": "#6c6966",
  "colorPrimaryBg": "#100600",
  "colorErrorBg": "#120404",
  "colorSuccessBg": "#020b04",
  "colorWarningBg": "#0d0700",
  "colorPrimaryBorder": "#ac753b",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #2618001a, 0 0.0625rem 0.1875rem 0.0625rem #26180014",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #26180029, 0 0.125rem 0.375rem 0 #2618001a"
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
