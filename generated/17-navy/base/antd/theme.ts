// @interop Ant Design 기반 Navy 테마 정의

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
    "borderRadiusLG": "1rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "1rem",
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
    "borderRadiusLG": "0.75rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "0.75rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "0.75rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "0.75rem",
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
    "itemSelectedColor": "#13398b",
    "subMenuItemSelectedColor": "#13398b",
    "horizontalItemSelectedColor": "#13398b",
    "horizontalItemHoverColor": "#13398b"
  },
  "Tabs": {
    "itemColor": "#595d63",
    "itemSelectedColor": "#07080c",
    "itemHoverColor": "#07080c",
    "itemActiveColor": "#07080c"
  },
  "Pagination": {
    "itemActiveBg": "#0055ff",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  },
  "Calendar": {
    "itemActiveBg": "#0055ff"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const darkComponents = { ...{
  "Modal": {
    "borderRadiusLG": "1rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "1rem",
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
    "borderRadiusLG": "0.75rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "0.75rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "0.75rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "0.75rem",
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
    "itemSelectedColor": "#86b0ff",
    "subMenuItemSelectedColor": "#86b0ff",
    "horizontalItemSelectedColor": "#86b0ff",
    "horizontalItemHoverColor": "#86b0ff"
  },
  "Tabs": {
    "itemColor": "#9599a1",
    "itemSelectedColor": "#f6faff",
    "itemHoverColor": "#f6faff",
    "itemActiveColor": "#f6faff"
  },
  "Pagination": {
    "itemActiveBg": "#0055ff",
    "itemActiveColor": "#ffffff",
    "itemActiveColorHover": "#ffffff"
  },
  "Calendar": {
    "itemActiveBg": "#0055ff"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

const highContrastComponents = { ...{
  "Modal": {
    "borderRadiusLG": "1rem",
    "contentPadding": "var(--component-dialog-padding)",
    "headerMarginBottom": "var(--component-dialog-gap)",
    "footerMarginTop": "var(--component-dialog-actions-margin-top)",
    "confirmBtnsMarginTop": "var(--component-dialog-actions-margin-top)"
  },
  "Drawer": {
    "borderRadiusLG": "1rem",
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
    "borderRadiusLG": "0.75rem",
    "bodyPadding": "var(--component-card-padding)",
    "headerPadding": "var(--component-card-padding)",
    "paddingLG": "var(--component-card-padding)"
  },
  "Collapse": {
    "borderRadiusLG": "0.75rem",
    "headerPadding": "var(--component-accordion-head-padding-block) var(--component-accordion-head-padding-inline)",
    "contentPadding": "var(--component-accordion-body-padding-block-end) var(--component-accordion-body-padding-inline)",
    "borderlessContentPadding": "0 var(--component-accordion-body-padding-inline) var(--component-accordion-body-padding-block-end)"
  },
  "Table": {
    "borderRadiusLG": "0.75rem",
    "cellPaddingBlock": "var(--component-table-cell-padding-block)",
    "cellPaddingInline": "var(--component-table-cell-padding-inline)"
  },
  "Alert": {
    "borderRadiusLG": "0.75rem",
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
    "itemSelectedColor": "#eaf1ff",
    "subMenuItemSelectedColor": "#eaf1ff",
    "horizontalItemSelectedColor": "#eaf1ff",
    "horizontalItemHoverColor": "#eaf1ff"
  },
  "Tabs": {
    "itemColor": "#e1e5ec",
    "itemSelectedColor": "#eef1f5",
    "itemHoverColor": "#eef1f5",
    "itemActiveColor": "#eef1f5"
  },
  "Pagination": {
    "itemActiveBg": "#aecbff",
    "itemActiveColor": "#000000",
    "itemActiveColorHover": "#000000"
  },
  "Calendar": {
    "itemActiveBg": "#aecbff"
  }
}, Button: button } satisfies Record<string, Rem<Record<string, unknown>>>;

// 모드별 값 하나. 색은 토큰이 보유, 알고리즘은 밝기만 구분
const themeSeed = {
  "colorPrimary": "#0055ff",
  "colorError": "#c94c49",
  "colorSuccess": "#51c672",
  "colorWarning": "#daa500",
  "colorInfo": "#007cb8",
  "colorLink": "#0241c6",
  "colorErrorText": "#9f3d3a",
  "colorSuccessText": "#1c7d3e",
  "colorWarningText": "#8b6700",
  "colorErrorTextHover": "#7a3c38",
  "colorErrorTextActive": "#7a3c38",
  "colorSuccessTextHover": "#225932",
  "colorSuccessTextActive": "#225932",
  "colorWarningTextHover": "#654a00",
  "colorWarningTextActive": "#654a00",
  "colorTextBase": "#07080c",
  "colorBgBase": "#f7f8f9",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
  "lineWidth": 1,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 31
} satisfies Token;
const themeOverrides = {
  "colorBgContainer": "#f7f8f9",
  "colorBgElevated": "#f7f8f9",
  "colorBgLayout": "#eff0f2",
  "colorBgSpotlight": "#62676e",
  "colorBgMask": "#0000008f",
  "colorText": "#07080c",
  "colorTextSecondary": "#595d63",
  "colorTextTertiary": "#595d63",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#c7cacf",
  "colorBorderSecondary": "#d4d7db",
  "colorPrimaryBg": "#c7d6f1",
  "colorErrorBg": "#ffebe9",
  "colorSuccessBg": "#e5f5e7",
  "colorWarningBg": "#f8efdd",
  "colorPrimaryBorder": "#5986df",
  "colorErrorBorder": "#feb4ad",
  "colorSuccessBorder": "#a1dbac",
  "colorWarningBorder": "#e4c687",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #0f1a2e1a, 0 0.0625rem 0.1875rem 0.0625rem #0f1a2e14",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #0f1a2e29, 0 0.125rem 0.375rem 0 #0f1a2e1a"
} satisfies Token;
export const theme = {
  algorithm: [antdTheme.defaultAlgorithm, antdTheme.compactAlgorithm],
  token: { ...themeSeed, ...themeOverrides },
  components: components,
} as unknown as ThemeConfig;

const darkThemeSeed = {
  "colorPrimary": "#0055ff",
  "colorError": "#d25450",
  "colorSuccess": "#009342",
  "colorWarning": "#a07800",
  "colorInfo": "#1286c2",
  "colorLink": "#6498ff",
  "colorErrorText": "#e47b74",
  "colorSuccessText": "#51ab68",
  "colorWarningText": "#bf9221",
  "colorErrorTextHover": "#e49b95",
  "colorErrorTextActive": "#e49b95",
  "colorSuccessTextHover": "#84bd8f",
  "colorSuccessTextActive": "#84bd8f",
  "colorWarningTextHover": "#c8ab6c",
  "colorWarningTextActive": "#c8ab6c",
  "colorTextBase": "#f6faff",
  "colorBgBase": "#181919",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
  "lineWidth": 1,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 31
} satisfies Token;
const darkThemeOverrides = {
  "colorBgContainer": "#181919",
  "colorBgElevated": "#181919",
  "colorBgLayout": "#212223",
  "colorBgSpotlight": "#8a8f97",
  "colorBgMask": "#0000008f",
  "colorText": "#f6faff",
  "colorTextSecondary": "#9599a1",
  "colorTextTertiary": "#9599a1",
  "colorTextLightSolid": "#ffffff",
  "colorBorder": "#45474b",
  "colorBorderSecondary": "#383a3d",
  "colorPrimaryBg": "#182337",
  "colorErrorBg": "#2d1d1c",
  "colorSuccessBg": "#19261c",
  "colorWarningBg": "#282114",
  "colorPrimaryBorder": "#2750a3",
  "colorErrorBorder": "#6f322e",
  "colorSuccessBorder": "#1c542c",
  "colorWarningBorder": "#5b4300",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #0f1a2e1a, 0 0.0625rem 0.1875rem 0.0625rem #0f1a2e14",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #0f1a2e29, 0 0.125rem 0.375rem 0 #0f1a2e1a"
} satisfies Token;
export const darkTheme = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: { ...darkThemeSeed, ...darkThemeOverrides },
  components: darkComponents,
} as unknown as ThemeConfig;

const highContrastThemeSeed = {
  "colorPrimary": "#aecbff",
  "colorError": "#ffb8b1",
  "colorSuccess": "#79de91",
  "colorWarning": "#f5c24b",
  "colorInfo": "#8ed1ff",
  "colorLink": "#d9e6ff",
  "colorErrorText": "#ffe0dc",
  "colorSuccessText": "#a5f6b5",
  "colorWarningText": "#ffe2a5",
  "colorErrorTextHover": "#fff0ee",
  "colorErrorTextActive": "#fff0ee",
  "colorSuccessTextHover": "#c6facf",
  "colorSuccessTextActive": "#c6facf",
  "colorWarningTextHover": "#ffefcf",
  "colorWarningTextActive": "#ffefcf",
  "colorTextBase": "#eef1f5",
  "colorBgBase": "#020202",
  "fontSize": 16,
  "fontFamily": "var(--base-font-family-sans, Pretendard, system-ui, sans-serif)",
  "fontFamilyCode": "var(--base-font-family-mono, \"JetBrains Mono\", ui-monospace, monospace)",
  "borderRadius": "0.5rem",
  "lineWidth": 2,
  "sizeUnit": 3,
  "sizeStep": 4,
  "wireframe": false,
  "controlHeight": 33
} satisfies Token;
const highContrastThemeOverrides = {
  "colorBgContainer": "#020202",
  "colorBgElevated": "#020202",
  "colorBgLayout": "#080809",
  "colorBgSpotlight": "#d5dae2",
  "colorBgMask": "#0000008f",
  "colorText": "#eef1f5",
  "colorTextSecondary": "#e1e5ec",
  "colorTextTertiary": "#e1e5ec",
  "colorTextLightSolid": "#000000",
  "colorBorder": "#7f8185",
  "colorBorderSecondary": "#686a6d",
  "colorPrimaryBg": "#050811",
  "colorErrorBg": "#100504",
  "colorSuccessBg": "#030b04",
  "colorWarningBg": "#0c0701",
  "colorPrimaryBorder": "#6a82ad",
  "colorErrorBorder": "#ae706b",
  "colorSuccessBorder": "#5c8d66",
  "colorWarningBorder": "#977e47",
  "borderRadiusSM": "0.25rem",
  "borderRadiusLG": "0.75rem",
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
  "boxShadow": "0 0.0625rem 0.125rem 0 #0f1a2e1a, 0 0.0625rem 0.1875rem 0.0625rem #0f1a2e14",
  "boxShadowSecondary": "0 0.5rem 1.5rem -0.25rem #0f1a2e29, 0 0.125rem 0.375rem 0 #0f1a2e1a"
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
