// @interop Ant Design 기반 Rust 테마 정의

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
    "titleMarginBottom": "var(--component-popover-gap)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
  },
  "Tooltip": {
    "borderRadius": "var(--component-tooltip-radius)",
    "paddingXS": "var(--component-tooltip-padding-inline)",
    "paddingSM": "calc(var(--component-tooltip-padding-block) * 2)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
  },
  "Dropdown": {
    "paddingBlock": "var(--component-menu-item-padding-block)",
    "controlPaddingHorizontal": "var(--component-menu-item-padding-inline)",
    "paddingXXS": "var(--component-menu-padding)",
    "borderRadiusLG": "var(--component-menu-radius)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
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
    "paddingInline": "var(--component-datepicker-trigger-padding-inline)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
  },
  "Tour": {
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
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
    "itemSelectedColor": "#64483e",
    "subMenuItemSelectedColor": "#64483e",
    "horizontalItemSelectedColor": "#64483e",
    "horizontalItemHoverColor": "#64483e"
  },
  "Tabs": {
    "itemColor": "#655a56",
    "itemSelectedColor": "#0c0706",
    "itemHoverColor": "#0c0706",
    "itemActiveColor": "#0c0706"
  },
  "Pagination": {
    "itemActiveBg": "#9e6954",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  },
  "Calendar": {
    "itemActiveBg": "#9e6954"
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
    "titleMarginBottom": "var(--component-popover-gap)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
  },
  "Tooltip": {
    "borderRadius": "var(--component-tooltip-radius)",
    "paddingXS": "var(--component-tooltip-padding-inline)",
    "paddingSM": "calc(var(--component-tooltip-padding-block) * 2)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
  },
  "Dropdown": {
    "paddingBlock": "var(--component-menu-item-padding-block)",
    "controlPaddingHorizontal": "var(--component-menu-item-padding-inline)",
    "paddingXXS": "var(--component-menu-padding)",
    "borderRadiusLG": "var(--component-menu-radius)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
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
    "paddingInline": "var(--component-datepicker-trigger-padding-inline)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
  },
  "Tour": {
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
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
    "itemSelectedColor": "#c7a89b",
    "subMenuItemSelectedColor": "#c7a89b",
    "horizontalItemSelectedColor": "#c7a89b",
    "horizontalItemHoverColor": "#c7a89b"
  },
  "Tabs": {
    "itemColor": "#a39792",
    "itemSelectedColor": "#fff8f5",
    "itemHoverColor": "#fff8f5",
    "itemActiveColor": "#fff8f5"
  },
  "Pagination": {
    "itemActiveBg": "#a7715c",
    "itemActiveColor": "#1e100a",
    "itemActiveColorHover": "#1e100a"
  },
  "Calendar": {
    "itemActiveBg": "#a7715c"
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
    "titleMarginBottom": "var(--component-popover-gap)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
  },
  "Tooltip": {
    "borderRadius": "var(--component-tooltip-radius)",
    "paddingXS": "var(--component-tooltip-padding-inline)",
    "paddingSM": "calc(var(--component-tooltip-padding-block) * 2)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
  },
  "Dropdown": {
    "paddingBlock": "var(--component-menu-item-padding-block)",
    "controlPaddingHorizontal": "var(--component-menu-item-padding-inline)",
    "paddingXXS": "var(--component-menu-padding)",
    "borderRadiusLG": "var(--component-menu-radius)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
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
    "paddingInline": "var(--component-datepicker-trigger-padding-inline)",
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
  },
  "Tour": {
    "borderRadiusXS": 1,
    "borderRadiusOuter": 4
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
    "itemSelectedColor": "#ffeee8",
    "subMenuItemSelectedColor": "#ffeee8",
    "horizontalItemSelectedColor": "#ffeee8",
    "horizontalItemHoverColor": "#ffeee8"
  },
  "Tabs": {
    "itemColor": "#efe3de",
    "itemSelectedColor": "#f7efec",
    "itemHoverColor": "#f7efec",
    "itemActiveColor": "#f7efec"
  },
  "Pagination": {
    "itemActiveBg": "#f2bea8",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#f2bea8"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#9e6954",
  "colorError": "#eb0036",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#9e6954",
  "colorLink": "#7c5342",
  "colorErrorText": "#ba0f2c",
  "colorSuccessText": "#1c7d3e",
  "colorWarningText": "#8b6700",
  "colorErrorTextHover": "#7d1c24",
  "colorErrorTextActive": "#7d1c24",
  "colorSuccessTextHover": "#225932",
  "colorSuccessTextActive": "#225932",
  "colorWarningTextHover": "#654a00",
  "colorWarningTextActive": "#654a00",
  "colorTextBase": "#0c0706",
  "colorBgBase": "#f9f7f7",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.25rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies Token;
const themeOverrides = {
  "colorBgContainer": "#f9f7f7",
  "colorBgElevated": "#f9f7f7",
  "colorBgLayout": "#f2efee",
  "colorBgSpotlight": "#71645e",
  "colorBgMask": "#0000008f",
  "colorText": "#0c0706",
  "colorTextSecondary": "#655a56",
  "colorTextTertiary": "#655a56",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#d0c8c4",
  "colorBorderSecondary": "#dcd5d2",
  "colorPrimaryBg": "#f8eeea",
  "colorErrorBg": "#f3d2d0",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#e2c2b5",
  "colorErrorBorder": "#de7574",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.75rem",
  "fontSizeHeading2": "2.0625rem",
  "fontSizeHeading3": "1.5625rem",
  "fontSizeHeading4": "1.3125rem",
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
  "colorPrimary": "#a7715c",
  "colorError": "#eb0036",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#a7715c",
  "colorLink": "#bd8f7d",
  "colorErrorText": "#ff6a6d",
  "colorSuccessText": "#51ab68",
  "colorWarningText": "#bf9221",
  "colorErrorTextHover": "#ff9694",
  "colorErrorTextActive": "#ff9694",
  "colorSuccessTextHover": "#84bd8f",
  "colorSuccessTextActive": "#84bd8f",
  "colorWarningTextHover": "#c8ab6c",
  "colorWarningTextActive": "#c8ab6c",
  "colorTextBase": "#fff8f5",
  "colorBgBase": "#191818",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.25rem",
  "lineWidth": 1,
  "sizeUnit": 4,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 35
} satisfies Token;
const darkThemeOverrides = {
  "colorBgContainer": "#191818",
  "colorBgElevated": "#191818",
  "colorBgLayout": "#232221",
  "colorBgSpotlight": "#9a8c86",
  "colorBgMask": "#0000008f",
  "colorText": "#fff8f5",
  "colorTextSecondary": "#a39792",
  "colorTextTertiary": "#a39792",
  "colorTextLightSolid": "#1e100a",
  "colorBorder": "#4d4542",
  "colorBorderSecondary": "#3e3936",
  "colorPrimaryBg": "#27201e",
  "colorErrorBg": "#38201f",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#5b4035",
  "colorErrorBorder": "#a13e41",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.75rem",
  "fontSizeHeading2": "2.0625rem",
  "fontSizeHeading3": "1.5625rem",
  "fontSizeHeading4": "1.3125rem",
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
  "colorPrimary": "#f2bea8",
  "colorError": "#ffb8b4",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#f2bea8",
  "colorLink": "#ffdfd2",
  "colorErrorText": "#ffe0de",
  "colorSuccessText": "#a5f6b5",
  "colorWarningText": "#ffe2a5",
  "colorErrorTextHover": "#fff0ef",
  "colorErrorTextActive": "#fff0ef",
  "colorSuccessTextHover": "#c6facf",
  "colorSuccessTextActive": "#c6facf",
  "colorWarningTextHover": "#ffefcf",
  "colorWarningTextActive": "#ffefcf",
  "colorTextBase": "#f7efec",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.25rem",
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
  "colorBgSpotlight": "#e5d7d1",
  "colorBgMask": "#0000008f",
  "colorText": "#f7efec",
  "colorTextSecondary": "#efe3de",
  "colorTextTertiary": "#efe3de",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#87807c",
  "colorBorderSecondary": "#6e6866",
  "colorPrimaryBg": "#0c0705",
  "colorErrorBg": "#100505",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#967b70",
  "colorErrorBorder": "#ad706d",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": "0.125rem",
  "borderRadiusLG": "0.375rem",
  "controlInteractiveSize": 20,
  "fontSizeSM": 14,
  "fontSizeLG": 18,
  "fontSizeHeading1": "2.75rem",
  "fontSizeHeading2": "2.0625rem",
  "fontSizeHeading3": "1.5625rem",
  "fontSizeHeading4": "1.3125rem",
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
