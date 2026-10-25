// @interop Ant Design 기반 Berry 테마 정의

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
    "borderRadiusLG": "2rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "2rem",
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
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Tooltip": {
    "borderRadius": "var(--component-tooltip-radius)",
    "paddingXS": "var(--component-tooltip-padding-inline)",
    "paddingSM": "calc(var(--component-tooltip-padding-block) * 2)",
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Dropdown": {
    "paddingBlock": "var(--component-menu-item-padding-block)",
    "controlPaddingHorizontal": "var(--component-menu-item-padding-inline)",
    "paddingXXS": "var(--component-menu-padding)",
    "borderRadiusLG": "var(--component-menu-radius)",
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Card": {
    "borderRadiusLG": "1.5rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "1.5rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "1.5rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "1.5rem",
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
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Tour": {
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
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
    "borderRadiusLG": "2rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "2rem",
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
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Tooltip": {
    "borderRadius": "var(--component-tooltip-radius)",
    "paddingXS": "var(--component-tooltip-padding-inline)",
    "paddingSM": "calc(var(--component-tooltip-padding-block) * 2)",
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Dropdown": {
    "paddingBlock": "var(--component-menu-item-padding-block)",
    "controlPaddingHorizontal": "var(--component-menu-item-padding-inline)",
    "paddingXXS": "var(--component-menu-padding)",
    "borderRadiusLG": "var(--component-menu-radius)",
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Card": {
    "borderRadiusLG": "1.5rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "1.5rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "1.5rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "1.5rem",
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
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Tour": {
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
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
    "borderRadiusLG": "2rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "2rem",
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
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Tooltip": {
    "borderRadius": "var(--component-tooltip-radius)",
    "paddingXS": "var(--component-tooltip-padding-inline)",
    "paddingSM": "calc(var(--component-tooltip-padding-block) * 2)",
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Dropdown": {
    "paddingBlock": "var(--component-menu-item-padding-block)",
    "controlPaddingHorizontal": "var(--component-menu-item-padding-inline)",
    "paddingXXS": "var(--component-menu-padding)",
    "borderRadiusLG": "var(--component-menu-radius)",
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Card": {
    "borderRadiusLG": "1.5rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "1.5rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "1.5rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "1.5rem",
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
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
  },
  "Tour": {
    "borderRadiusXS": 2,
    "borderRadiusOuter": 6
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
