// @interop MUI 9 기반 Slate 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#14233c",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#c94c49",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f7f8f8",
      "paper": "#eff0f1"
    },
    "text": {
      "primary": "#07080a",
      "secondary": "#595d60"
    },
    "divider": "#d5d7d9",
    "info": {
      "main": "#4f7a99",
      "contrastText": "#ffffff"
    },
    "success": {
      "main": "#51c672",
      "contrastText": "#000000"
    },
    "warning": {
      "main": "#daa500",
      "contrastText": "#000000"
    }
  },
  "shape": {
    "borderRadius": 4
  },
  "spacing": 4,
  "typography": {
    "fontFamily": "var(--base-font-family-sans)",
    "fontSize": 16
  },
  "components": {
    "MuiAlert": {
      "styleOverrides": {
        "root": {
          "padding": "var(--component-alert-padding)",
          "borderRadius": "var(--component-alert-radius)",
          "fontSize": "var(--component-alert-font-size)",
          "letterSpacing": "var(--component-alert-letter-spacing)"
        },
        "standard": {
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "&.MuiAlert-colorSuccess": {
            "backgroundColor": "var(--component-alert-success-bg)",
            "color": "var(--component-alert-success-fg)",
            "borderColor": "var(--component-alert-success-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-success-icon)"
            }
          },
          "&.MuiAlert-colorInfo": {
            "backgroundColor": "var(--component-alert-brand-bg)",
            "color": "var(--component-alert-brand-fg)",
            "borderColor": "var(--component-alert-brand-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-brand-icon)"
            }
          },
          "&.MuiAlert-colorWarning": {
            "backgroundColor": "var(--component-alert-warning-bg)",
            "color": "var(--component-alert-warning-fg)",
            "borderColor": "var(--component-alert-warning-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-warning-icon)"
            }
          },
          "&.MuiAlert-colorError": {
            "backgroundColor": "var(--component-alert-danger-bg)",
            "color": "var(--component-alert-danger-fg)",
            "borderColor": "var(--component-alert-danger-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-danger-icon)"
            }
          }
        },
        "outlined": {
          "&.MuiAlert-colorSuccess": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-success-icon)"
            }
          },
          "&.MuiAlert-colorInfo": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-brand-icon)"
            }
          },
          "&.MuiAlert-colorWarning": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-warning-icon)"
            }
          },
          "&.MuiAlert-colorError": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-danger-icon)"
            }
          }
        }
      }
    },
    "MuiButton": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-button-radius)",
          "&.MuiButton-text.MuiButton-colorPrimary": {
            "color": "var(--component-button-plain-brand-fg)"
          },
          "&.MuiButton-outlined.MuiButton-colorPrimary": {
            "color": "var(--semantic-fg-brand-default)"
          },
          "&.MuiButton-outlined.MuiButton-colorError": {
            "color": "var(--semantic-fg-danger-default)"
          }
        },
        "sizeSmall": {
          "paddingInline": "var(--component-button-sm-padding-inline)",
          "paddingBlock": "var(--component-button-sm-padding-block)",
          "fontSize": "var(--component-button-sm-font-size)",
          "letterSpacing": "var(--component-button-sm-letter-spacing)"
        },
        "sizeMedium": {
          "paddingInline": "var(--component-button-md-padding-inline)",
          "paddingBlock": "var(--component-button-md-padding-block)",
          "fontSize": "var(--component-button-md-font-size)",
          "letterSpacing": "var(--component-button-md-letter-spacing)"
        },
        "sizeLarge": {
          "paddingInline": "var(--component-button-lg-padding-inline)",
          "paddingBlock": "var(--component-button-lg-padding-block)",
          "fontSize": "var(--component-button-lg-font-size)",
          "letterSpacing": "var(--component-button-lg-letter-spacing)"
        }
      }
    },
    "MuiCard": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-card-radius)",
          "backgroundColor": "var(--component-card-bg)",
          "color": "var(--component-card-body-fg)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-card-border)"
        }
      }
    },
    "MuiDialog": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-dialog-radius)",
          "backgroundColor": "var(--component-dialog-bg)",
          "color": "var(--component-dialog-body-fg)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-dialog-border)",
          "scrollbarWidth": "thin",
          "scrollbarColor": "var(--component-scrollarea-thumb) var(--component-scrollarea-track)"
        }
      }
    },
    "MuiOutlinedInput": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-input-radius)",
          "fontSize": "var(--component-input-font-size)",
          "letterSpacing": "var(--component-input-letter-spacing)"
        }
      }
    },
    "MuiInputLabel": {
      "styleOverrides": {
        "root": {
          "fontSize": "var(--component-input-font-size)",
          "letterSpacing": "var(--component-input-letter-spacing)"
        }
      }
    },
    "MuiFormLabel": {
      "styleOverrides": {
        "root": {
          "&.Mui-error": {
            "color": "var(--component-label-fg-invalid)"
          },
          "&.MuiFormLabel-colorWarning.Mui-focused": {
            "color": "var(--semantic-fg-warning-default)"
          },
          "&.MuiFormLabel-colorSuccess.Mui-focused": {
            "color": "var(--semantic-fg-success-default)"
          }
        }
      }
    },
    "MuiFormHelperText": {
      "styleOverrides": {
        "root": {
          "&.Mui-error": {
            "color": "var(--component-field-error-fg)"
          }
        }
      }
    },
    "MuiStepLabel": {
      "styleOverrides": {
        "label": {
          "&.Mui-error": {
            "color": "var(--component-label-fg-invalid)"
          }
        }
      }
    },
    "MuiChip": {
      "styleOverrides": {
        "label": {
          "paddingInline": "var(--component-chip-padding-inline)"
        },
        "root": {
          "borderRadius": "var(--component-chip-radius)",
          "fontSize": "var(--component-chip-font-size)",
          "&.MuiChip-outlined.MuiChip-colorPrimary": {
            "color": "var(--semantic-fg-brand-default)"
          },
          "&.MuiChip-outlined.MuiChip-colorSuccess": {
            "color": "var(--semantic-fg-success-default)"
          },
          "&.MuiChip-outlined.MuiChip-colorWarning": {
            "color": "var(--semantic-fg-warning-default)"
          },
          "&.MuiChip-outlined.MuiChip-colorError": {
            "color": "var(--semantic-fg-danger-default)"
          }
        }
      }
    },
    "MuiTooltip": {
      "styleOverrides": {
        "tooltip": {
          "paddingInline": "var(--component-tooltip-padding-inline)",
          "paddingBlock": "var(--component-tooltip-padding-block)",
          "borderRadius": "var(--component-tooltip-radius)",
          "fontSize": "var(--component-tooltip-font-size)",
          "backgroundColor": "var(--component-tooltip-bg)",
          "color": "var(--component-tooltip-fg)"
        }
      }
    },
    "MuiMenu": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-menu-radius)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-menu-border)"
        }
      }
    },
    "MuiPopover": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-popover-radius)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-popover-border)"
        }
      }
    },
    "MuiAccordion": {
      "styleOverrides": {
        "root": {
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-accordion-border)",
          "borderRadius": "0",
          "&:not(:last-of-type)": {
            "borderBottomWidth": "0"
          },
          "&.MuiPaper-rounded:first-of-type": {
            "borderTopLeftRadius": "var(--component-accordion-radius)",
            "borderTopRightRadius": "var(--component-accordion-radius)"
          },
          "&.MuiPaper-rounded:last-of-type": {
            "borderBottomLeftRadius": "var(--component-accordion-radius)",
            "borderBottomRightRadius": "var(--component-accordion-radius)"
          },
          "&.Mui-expanded": {
            "marginTop": "0",
            "marginBottom": "0"
          },
          "&:before": {
            "display": "none"
          }
        }
      }
    },
    "MuiAvatar": {
      "styleOverrides": {
        "circular": {
          "borderRadius": "var(--component-avatar-radius)"
        },
        "root": {
          "fontSize": "var(--component-avatar-font-size)",
          "backgroundColor": "var(--component-avatar-bg)",
          "color": "var(--component-avatar-fg)"
        }
      }
    },
    "MuiCardContent": {
      "styleOverrides": {
        "root": {
          "padding": "var(--component-card-padding)",
          "&:last-child": {
            "paddingBottom": "var(--component-card-padding)"
          }
        }
      }
    },
    "MuiDialogTitle": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-dialog-padding)",
          "paddingTop": "var(--component-dialog-padding)"
        }
      }
    },
    "MuiDialogActions": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-dialog-padding)",
          "paddingBottom": "var(--component-dialog-padding)"
        }
      }
    },
    "MuiMenuItem": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-menu-item-padding-inline)",
          "paddingBlock": "var(--component-menu-item-padding-block)"
        }
      }
    },
    "MuiAccordionSummary": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-accordion-head-padding-inline)"
        }
      }
    },
    "MuiAccordionDetails": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-accordion-body-padding-inline)",
          "paddingBottom": "var(--component-accordion-body-padding-block-end)"
        }
      }
    },
    "MuiSkeleton": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-skeleton-radius)"
        }
      }
    },
    "MuiTab": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-tabs-padding-inline)",
          "fontSize": "var(--component-tabs-font-size)",
          "letterSpacing": "var(--component-tabs-letter-spacing)"
        },
        "textColorPrimary": {
          "&.Mui-selected": {
            "color": "var(--semantic-fg-brand-default)"
          }
        }
      }
    },
    "MuiBreadcrumbs": {
      "styleOverrides": {
        "root": {
          "fontSize": "var(--component-breadcrumb-font-size)",
          "letterSpacing": "var(--component-breadcrumb-letter-spacing)"
        }
      }
    },
    "MuiTableCell": {
      "styleOverrides": {
        "sizeMedium": {
          "paddingInline": "var(--component-table-cell-padding-inline)",
          "paddingBlock": "var(--component-table-cell-padding-block)"
        },
        "head": {
          "fontSize": "var(--component-table-cell-font-size)",
          "letterSpacing": "var(--component-table-head-letter-spacing)",
          "color": "var(--component-table-head-fg)"
        },
        "body": {
          "fontSize": "var(--component-table-cell-font-size)",
          "letterSpacing": "var(--component-table-cell-letter-spacing)",
          "color": "var(--component-table-cell-fg)"
        }
      }
    },
    "MuiSnackbarContent": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-toast-padding-inline)",
          "paddingBlock": "var(--component-toast-padding-block)",
          "borderRadius": "var(--component-toast-radius)"
        }
      }
    },
    "MuiCheckbox": {
      "styleOverrides": {
        "root": {
          "color": "var(--component-checkbox-border)",
          "&.Mui-checked": {
            "color": "var(--component-checkbox-bg-checked)"
          }
        }
      }
    },
    "MuiDivider": {
      "styleOverrides": {
        "root": {
          "borderColor": "var(--component-divider-color)",
          "& .MuiDivider-wrapper": {
            "color": "var(--component-divider-label-fg)",
            "fontSize": "var(--component-divider-label-font-size)",
            "letterSpacing": "var(--component-divider-label-letter-spacing)"
          }
        }
      }
    },
    "MuiLink": {
      "styleOverrides": {
        "root": {
          "color": "var(--component-link-fg)",
          "&:hover": {
            "color": "var(--component-link-fg-hover)"
          }
        }
      }
    },
    "MuiPaginationItem": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-pagination-radius)",
          "fontSize": "var(--component-pagination-font-size)",
          "letterSpacing": "var(--component-pagination-letter-spacing)",
          "color": "var(--component-pagination-fg)",
          "&.Mui-selected": {
            "backgroundColor": "var(--component-pagination-current-bg)",
            "color": "var(--component-pagination-current-fg)"
          },
          "&.Mui-disabled": {
            "color": "var(--component-pagination-disabled-fg)"
          }
        }
      }
    },
    "MuiLinearProgress": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-progress-radius)",
          "backgroundColor": "var(--component-progress-track-bg)"
        },
        "bar": {
          "backgroundColor": "var(--component-progress-indicator-bg)"
        }
      }
    },
    "MuiSlider": {
      "styleOverrides": {
        "rail": {
          "backgroundColor": "var(--component-slider-track)"
        },
        "track": {
          "backgroundColor": "var(--component-slider-track-filled)"
        },
        "thumb": {
          "backgroundColor": "var(--component-slider-thumb-bg)"
        },
        "valueLabel": {
          "color": "var(--component-slider-value-fg)",
          "fontSize": "var(--component-slider-value-font-size)"
        },
        "markLabel": {
          "color": "var(--component-slider-tick-fg)",
          "fontSize": "var(--component-slider-tick-font-size)"
        }
      }
    },
    "MuiSwitch": {
      "styleOverrides": {
        "track": {
          "backgroundColor": "var(--component-switch-bg-off)"
        },
        "thumb": {
          "backgroundColor": "var(--component-switch-thumb-off)"
        },
        "switchBase": {
          "&.Mui-checked + .MuiSwitch-track": {
            "backgroundColor": "var(--component-switch-bg-on)"
          },
          "&.Mui-checked .MuiSwitch-thumb": {
            "backgroundColor": "var(--component-switch-thumb-on)"
          }
        }
      }
    },
    "MuiSelect": {
      "styleOverrides": {
        "icon": {
          "color": "var(--component-select-marker-fg)"
        }
      }
    },
    "MuiDrawer": {
      "styleOverrides": {
        "root": {
          "& .MuiDrawer-paper": {
            "backgroundColor": "var(--component-drawer-bg)",
            "color": "var(--component-drawer-fg)",
            "borderStyle": "solid",
            "borderWidth": "var(--semantic-border-width-default)",
            "borderColor": "var(--component-drawer-border)"
          }
        }
      }
    },
    "MuiToggleButton": {
      "styleOverrides": {
        "root": {
          "&.Mui-selected.MuiToggleButton-primary": {
            "color": "var(--semantic-fg-brand-default)"
          }
        }
      }
    },
    "MuiDialogContent": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-dialog-padding)",
          "scrollbarWidth": "thin",
          "&::-webkit-scrollbar": {
            "width": "0.5rem",
            "height": "0.5rem"
          },
          "&::-webkit-scrollbar-track": {
            "background": "var(--component-scrollarea-track)"
          },
          "&::-webkit-scrollbar-thumb": {
            "background": "var(--component-scrollarea-thumb)",
            "borderRadius": "var(--component-scrollarea-radius)"
          }
        }
      }
    },
    "MuiBottomNavigationAction": {
      "styleOverrides": {
        "root": {
          "& .MuiBottomNavigationAction-label.Mui-selected": {
            "color": "var(--semantic-fg-brand-default)"
          }
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  "palette": {
    "mode": "dark",
    "primary": {
      "main": "#14233c",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#d25450",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#181919",
      "paper": "#222223"
    },
    "text": {
      "primary": "#f7fafc",
      "secondary": "#96999d"
    },
    "divider": "#393a3c",
    "info": {
      "main": "#5883a2",
      "contrastText": "#ffffff"
    },
    "success": {
      "main": "#009342",
      "contrastText": "#ffffff"
    },
    "warning": {
      "main": "#a07800",
      "contrastText": "#ffffff"
    }
  },
  "shape": {
    "borderRadius": 4
  },
  "spacing": 4,
  "typography": {
    "fontFamily": "var(--base-font-family-sans)",
    "fontSize": 16
  },
  "components": {
    "MuiAlert": {
      "styleOverrides": {
        "root": {
          "padding": "var(--component-alert-padding)",
          "borderRadius": "var(--component-alert-radius)",
          "fontSize": "var(--component-alert-font-size)",
          "letterSpacing": "var(--component-alert-letter-spacing)"
        },
        "standard": {
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "&.MuiAlert-colorSuccess": {
            "backgroundColor": "var(--component-alert-success-bg)",
            "color": "var(--component-alert-success-fg)",
            "borderColor": "var(--component-alert-success-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-success-icon)"
            }
          },
          "&.MuiAlert-colorInfo": {
            "backgroundColor": "var(--component-alert-brand-bg)",
            "color": "var(--component-alert-brand-fg)",
            "borderColor": "var(--component-alert-brand-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-brand-icon)"
            }
          },
          "&.MuiAlert-colorWarning": {
            "backgroundColor": "var(--component-alert-warning-bg)",
            "color": "var(--component-alert-warning-fg)",
            "borderColor": "var(--component-alert-warning-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-warning-icon)"
            }
          },
          "&.MuiAlert-colorError": {
            "backgroundColor": "var(--component-alert-danger-bg)",
            "color": "var(--component-alert-danger-fg)",
            "borderColor": "var(--component-alert-danger-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-danger-icon)"
            }
          }
        },
        "outlined": {
          "&.MuiAlert-colorSuccess": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-success-icon)"
            }
          },
          "&.MuiAlert-colorInfo": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-brand-icon)"
            }
          },
          "&.MuiAlert-colorWarning": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-warning-icon)"
            }
          },
          "&.MuiAlert-colorError": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-danger-icon)"
            }
          }
        }
      }
    },
    "MuiButton": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-button-radius)",
          "&.MuiButton-text.MuiButton-colorPrimary": {
            "color": "var(--component-button-plain-brand-fg)"
          },
          "&.MuiButton-outlined.MuiButton-colorPrimary": {
            "color": "var(--semantic-fg-brand-default)"
          },
          "&.MuiButton-outlined.MuiButton-colorError": {
            "color": "var(--semantic-fg-danger-default)"
          }
        },
        "sizeSmall": {
          "paddingInline": "var(--component-button-sm-padding-inline)",
          "paddingBlock": "var(--component-button-sm-padding-block)",
          "fontSize": "var(--component-button-sm-font-size)",
          "letterSpacing": "var(--component-button-sm-letter-spacing)"
        },
        "sizeMedium": {
          "paddingInline": "var(--component-button-md-padding-inline)",
          "paddingBlock": "var(--component-button-md-padding-block)",
          "fontSize": "var(--component-button-md-font-size)",
          "letterSpacing": "var(--component-button-md-letter-spacing)"
        },
        "sizeLarge": {
          "paddingInline": "var(--component-button-lg-padding-inline)",
          "paddingBlock": "var(--component-button-lg-padding-block)",
          "fontSize": "var(--component-button-lg-font-size)",
          "letterSpacing": "var(--component-button-lg-letter-spacing)"
        }
      }
    },
    "MuiCard": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-card-radius)",
          "backgroundColor": "var(--component-card-bg)",
          "color": "var(--component-card-body-fg)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-card-border)"
        }
      }
    },
    "MuiDialog": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-dialog-radius)",
          "backgroundColor": "var(--component-dialog-bg)",
          "color": "var(--component-dialog-body-fg)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-dialog-border)",
          "scrollbarWidth": "thin",
          "scrollbarColor": "var(--component-scrollarea-thumb) var(--component-scrollarea-track)"
        }
      }
    },
    "MuiOutlinedInput": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-input-radius)",
          "fontSize": "var(--component-input-font-size)",
          "letterSpacing": "var(--component-input-letter-spacing)"
        }
      }
    },
    "MuiInputLabel": {
      "styleOverrides": {
        "root": {
          "fontSize": "var(--component-input-font-size)",
          "letterSpacing": "var(--component-input-letter-spacing)"
        }
      }
    },
    "MuiFormLabel": {
      "styleOverrides": {
        "root": {
          "&.Mui-error": {
            "color": "var(--component-label-fg-invalid)"
          },
          "&.MuiFormLabel-colorWarning.Mui-focused": {
            "color": "var(--semantic-fg-warning-default)"
          },
          "&.MuiFormLabel-colorSuccess.Mui-focused": {
            "color": "var(--semantic-fg-success-default)"
          }
        }
      }
    },
    "MuiFormHelperText": {
      "styleOverrides": {
        "root": {
          "&.Mui-error": {
            "color": "var(--component-field-error-fg)"
          }
        }
      }
    },
    "MuiStepLabel": {
      "styleOverrides": {
        "label": {
          "&.Mui-error": {
            "color": "var(--component-label-fg-invalid)"
          }
        }
      }
    },
    "MuiChip": {
      "styleOverrides": {
        "label": {
          "paddingInline": "var(--component-chip-padding-inline)"
        },
        "root": {
          "borderRadius": "var(--component-chip-radius)",
          "fontSize": "var(--component-chip-font-size)",
          "&.MuiChip-outlined.MuiChip-colorPrimary": {
            "color": "var(--semantic-fg-brand-default)"
          },
          "&.MuiChip-outlined.MuiChip-colorSuccess": {
            "color": "var(--semantic-fg-success-default)"
          },
          "&.MuiChip-outlined.MuiChip-colorWarning": {
            "color": "var(--semantic-fg-warning-default)"
          },
          "&.MuiChip-outlined.MuiChip-colorError": {
            "color": "var(--semantic-fg-danger-default)"
          }
        }
      }
    },
    "MuiTooltip": {
      "styleOverrides": {
        "tooltip": {
          "paddingInline": "var(--component-tooltip-padding-inline)",
          "paddingBlock": "var(--component-tooltip-padding-block)",
          "borderRadius": "var(--component-tooltip-radius)",
          "fontSize": "var(--component-tooltip-font-size)",
          "backgroundColor": "var(--component-tooltip-bg)",
          "color": "var(--component-tooltip-fg)"
        }
      }
    },
    "MuiMenu": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-menu-radius)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-menu-border)"
        }
      }
    },
    "MuiPopover": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-popover-radius)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-popover-border)"
        }
      }
    },
    "MuiAccordion": {
      "styleOverrides": {
        "root": {
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-accordion-border)",
          "borderRadius": "0",
          "&:not(:last-of-type)": {
            "borderBottomWidth": "0"
          },
          "&.MuiPaper-rounded:first-of-type": {
            "borderTopLeftRadius": "var(--component-accordion-radius)",
            "borderTopRightRadius": "var(--component-accordion-radius)"
          },
          "&.MuiPaper-rounded:last-of-type": {
            "borderBottomLeftRadius": "var(--component-accordion-radius)",
            "borderBottomRightRadius": "var(--component-accordion-radius)"
          },
          "&.Mui-expanded": {
            "marginTop": "0",
            "marginBottom": "0"
          },
          "&:before": {
            "display": "none"
          }
        }
      }
    },
    "MuiAvatar": {
      "styleOverrides": {
        "circular": {
          "borderRadius": "var(--component-avatar-radius)"
        },
        "root": {
          "fontSize": "var(--component-avatar-font-size)",
          "backgroundColor": "var(--component-avatar-bg)",
          "color": "var(--component-avatar-fg)"
        }
      }
    },
    "MuiCardContent": {
      "styleOverrides": {
        "root": {
          "padding": "var(--component-card-padding)",
          "&:last-child": {
            "paddingBottom": "var(--component-card-padding)"
          }
        }
      }
    },
    "MuiDialogTitle": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-dialog-padding)",
          "paddingTop": "var(--component-dialog-padding)"
        }
      }
    },
    "MuiDialogActions": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-dialog-padding)",
          "paddingBottom": "var(--component-dialog-padding)"
        }
      }
    },
    "MuiMenuItem": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-menu-item-padding-inline)",
          "paddingBlock": "var(--component-menu-item-padding-block)"
        }
      }
    },
    "MuiAccordionSummary": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-accordion-head-padding-inline)"
        }
      }
    },
    "MuiAccordionDetails": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-accordion-body-padding-inline)",
          "paddingBottom": "var(--component-accordion-body-padding-block-end)"
        }
      }
    },
    "MuiSkeleton": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-skeleton-radius)"
        }
      }
    },
    "MuiTab": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-tabs-padding-inline)",
          "fontSize": "var(--component-tabs-font-size)",
          "letterSpacing": "var(--component-tabs-letter-spacing)"
        },
        "textColorPrimary": {
          "&.Mui-selected": {
            "color": "var(--semantic-fg-brand-default)"
          }
        }
      }
    },
    "MuiBreadcrumbs": {
      "styleOverrides": {
        "root": {
          "fontSize": "var(--component-breadcrumb-font-size)",
          "letterSpacing": "var(--component-breadcrumb-letter-spacing)"
        }
      }
    },
    "MuiTableCell": {
      "styleOverrides": {
        "sizeMedium": {
          "paddingInline": "var(--component-table-cell-padding-inline)",
          "paddingBlock": "var(--component-table-cell-padding-block)"
        },
        "head": {
          "fontSize": "var(--component-table-cell-font-size)",
          "letterSpacing": "var(--component-table-head-letter-spacing)",
          "color": "var(--component-table-head-fg)"
        },
        "body": {
          "fontSize": "var(--component-table-cell-font-size)",
          "letterSpacing": "var(--component-table-cell-letter-spacing)",
          "color": "var(--component-table-cell-fg)"
        }
      }
    },
    "MuiSnackbarContent": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-toast-padding-inline)",
          "paddingBlock": "var(--component-toast-padding-block)",
          "borderRadius": "var(--component-toast-radius)"
        }
      }
    },
    "MuiCheckbox": {
      "styleOverrides": {
        "root": {
          "color": "var(--component-checkbox-border)",
          "&.Mui-checked": {
            "color": "var(--component-checkbox-bg-checked)"
          }
        }
      }
    },
    "MuiDivider": {
      "styleOverrides": {
        "root": {
          "borderColor": "var(--component-divider-color)",
          "& .MuiDivider-wrapper": {
            "color": "var(--component-divider-label-fg)",
            "fontSize": "var(--component-divider-label-font-size)",
            "letterSpacing": "var(--component-divider-label-letter-spacing)"
          }
        }
      }
    },
    "MuiLink": {
      "styleOverrides": {
        "root": {
          "color": "var(--component-link-fg)",
          "&:hover": {
            "color": "var(--component-link-fg-hover)"
          }
        }
      }
    },
    "MuiPaginationItem": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-pagination-radius)",
          "fontSize": "var(--component-pagination-font-size)",
          "letterSpacing": "var(--component-pagination-letter-spacing)",
          "color": "var(--component-pagination-fg)",
          "&.Mui-selected": {
            "backgroundColor": "var(--component-pagination-current-bg)",
            "color": "var(--component-pagination-current-fg)"
          },
          "&.Mui-disabled": {
            "color": "var(--component-pagination-disabled-fg)"
          }
        }
      }
    },
    "MuiLinearProgress": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-progress-radius)",
          "backgroundColor": "var(--component-progress-track-bg)"
        },
        "bar": {
          "backgroundColor": "var(--component-progress-indicator-bg)"
        }
      }
    },
    "MuiSlider": {
      "styleOverrides": {
        "rail": {
          "backgroundColor": "var(--component-slider-track)"
        },
        "track": {
          "backgroundColor": "var(--component-slider-track-filled)"
        },
        "thumb": {
          "backgroundColor": "var(--component-slider-thumb-bg)"
        },
        "valueLabel": {
          "color": "var(--component-slider-value-fg)",
          "fontSize": "var(--component-slider-value-font-size)"
        },
        "markLabel": {
          "color": "var(--component-slider-tick-fg)",
          "fontSize": "var(--component-slider-tick-font-size)"
        }
      }
    },
    "MuiSwitch": {
      "styleOverrides": {
        "track": {
          "backgroundColor": "var(--component-switch-bg-off)"
        },
        "thumb": {
          "backgroundColor": "var(--component-switch-thumb-off)"
        },
        "switchBase": {
          "&.Mui-checked + .MuiSwitch-track": {
            "backgroundColor": "var(--component-switch-bg-on)"
          },
          "&.Mui-checked .MuiSwitch-thumb": {
            "backgroundColor": "var(--component-switch-thumb-on)"
          }
        }
      }
    },
    "MuiSelect": {
      "styleOverrides": {
        "icon": {
          "color": "var(--component-select-marker-fg)"
        }
      }
    },
    "MuiDrawer": {
      "styleOverrides": {
        "root": {
          "& .MuiDrawer-paper": {
            "backgroundColor": "var(--component-drawer-bg)",
            "color": "var(--component-drawer-fg)",
            "borderStyle": "solid",
            "borderWidth": "var(--semantic-border-width-default)",
            "borderColor": "var(--component-drawer-border)"
          }
        }
      }
    },
    "MuiToggleButton": {
      "styleOverrides": {
        "root": {
          "&.Mui-selected.MuiToggleButton-primary": {
            "color": "var(--semantic-fg-brand-default)"
          }
        }
      }
    },
    "MuiDialogContent": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-dialog-padding)",
          "scrollbarWidth": "thin",
          "&::-webkit-scrollbar": {
            "width": "0.5rem",
            "height": "0.5rem"
          },
          "&::-webkit-scrollbar-track": {
            "background": "var(--component-scrollarea-track)"
          },
          "&::-webkit-scrollbar-thumb": {
            "background": "var(--component-scrollarea-thumb)",
            "borderRadius": "var(--component-scrollarea-radius)"
          }
        }
      }
    },
    "MuiBottomNavigationAction": {
      "styleOverrides": {
        "root": {
          "& .MuiBottomNavigationAction-label.Mui-selected": {
            "color": "var(--semantic-fg-brand-default)"
          }
        }
      }
    }
  }
});

export const highContrastTheme = createTheme({
  "palette": {
    "mode": "dark",
    "primary": {
      "main": "#b0cbf6",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#ffb8b1",
      "contrastText": "#000000"
    },
    "background": {
      "default": "#020202",
      "paper": "#080809"
    },
    "text": {
      "primary": "#eef1f3",
      "secondary": "#e2e5e9"
    },
    "divider": "#686a6b",
    "info": {
      "main": "#a5cfed",
      "contrastText": "#000000"
    },
    "success": {
      "main": "#79de91",
      "contrastText": "#000000"
    },
    "warning": {
      "main": "#f5c24b",
      "contrastText": "#000000"
    }
  },
  "shape": {
    "borderRadius": 4
  },
  "spacing": 4,
  "typography": {
    "fontFamily": "var(--base-font-family-sans)",
    "fontSize": 16
  },
  "components": {
    "MuiAlert": {
      "styleOverrides": {
        "root": {
          "padding": "var(--component-alert-padding)",
          "borderRadius": "var(--component-alert-radius)",
          "fontSize": "var(--component-alert-font-size)",
          "letterSpacing": "var(--component-alert-letter-spacing)"
        },
        "standard": {
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "&.MuiAlert-colorSuccess": {
            "backgroundColor": "var(--component-alert-success-bg)",
            "color": "var(--component-alert-success-fg)",
            "borderColor": "var(--component-alert-success-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-success-icon)"
            }
          },
          "&.MuiAlert-colorInfo": {
            "backgroundColor": "var(--component-alert-brand-bg)",
            "color": "var(--component-alert-brand-fg)",
            "borderColor": "var(--component-alert-brand-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-brand-icon)"
            }
          },
          "&.MuiAlert-colorWarning": {
            "backgroundColor": "var(--component-alert-warning-bg)",
            "color": "var(--component-alert-warning-fg)",
            "borderColor": "var(--component-alert-warning-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-warning-icon)"
            }
          },
          "&.MuiAlert-colorError": {
            "backgroundColor": "var(--component-alert-danger-bg)",
            "color": "var(--component-alert-danger-fg)",
            "borderColor": "var(--component-alert-danger-border)",
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-danger-icon)"
            }
          }
        },
        "outlined": {
          "&.MuiAlert-colorSuccess": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-success-icon)"
            }
          },
          "&.MuiAlert-colorInfo": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-brand-icon)"
            }
          },
          "&.MuiAlert-colorWarning": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-warning-icon)"
            }
          },
          "&.MuiAlert-colorError": {
            "& .MuiAlert-icon": {
              "color": "var(--component-alert-danger-icon)"
            }
          }
        }
      }
    },
    "MuiButton": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-button-radius)",
          "&.MuiButton-text.MuiButton-colorPrimary": {
            "color": "var(--component-button-plain-brand-fg)"
          },
          "&.MuiButton-outlined.MuiButton-colorPrimary": {
            "color": "var(--semantic-fg-brand-default)"
          },
          "&.MuiButton-outlined.MuiButton-colorError": {
            "color": "var(--semantic-fg-danger-default)"
          }
        },
        "sizeSmall": {
          "paddingInline": "var(--component-button-sm-padding-inline)",
          "paddingBlock": "var(--component-button-sm-padding-block)",
          "fontSize": "var(--component-button-sm-font-size)",
          "letterSpacing": "var(--component-button-sm-letter-spacing)"
        },
        "sizeMedium": {
          "paddingInline": "var(--component-button-md-padding-inline)",
          "paddingBlock": "var(--component-button-md-padding-block)",
          "fontSize": "var(--component-button-md-font-size)",
          "letterSpacing": "var(--component-button-md-letter-spacing)"
        },
        "sizeLarge": {
          "paddingInline": "var(--component-button-lg-padding-inline)",
          "paddingBlock": "var(--component-button-lg-padding-block)",
          "fontSize": "var(--component-button-lg-font-size)",
          "letterSpacing": "var(--component-button-lg-letter-spacing)"
        }
      }
    },
    "MuiCard": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-card-radius)",
          "backgroundColor": "var(--component-card-bg)",
          "color": "var(--component-card-body-fg)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-card-border)"
        }
      }
    },
    "MuiDialog": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-dialog-radius)",
          "backgroundColor": "var(--component-dialog-bg)",
          "color": "var(--component-dialog-body-fg)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-dialog-border)",
          "scrollbarWidth": "thin",
          "scrollbarColor": "var(--component-scrollarea-thumb) var(--component-scrollarea-track)"
        }
      }
    },
    "MuiOutlinedInput": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-input-radius)",
          "fontSize": "var(--component-input-font-size)",
          "letterSpacing": "var(--component-input-letter-spacing)"
        }
      }
    },
    "MuiInputLabel": {
      "styleOverrides": {
        "root": {
          "fontSize": "var(--component-input-font-size)",
          "letterSpacing": "var(--component-input-letter-spacing)"
        }
      }
    },
    "MuiFormLabel": {
      "styleOverrides": {
        "root": {
          "&.Mui-error": {
            "color": "var(--component-label-fg-invalid)"
          },
          "&.MuiFormLabel-colorWarning.Mui-focused": {
            "color": "var(--semantic-fg-warning-default)"
          },
          "&.MuiFormLabel-colorSuccess.Mui-focused": {
            "color": "var(--semantic-fg-success-default)"
          }
        }
      }
    },
    "MuiFormHelperText": {
      "styleOverrides": {
        "root": {
          "&.Mui-error": {
            "color": "var(--component-field-error-fg)"
          }
        }
      }
    },
    "MuiStepLabel": {
      "styleOverrides": {
        "label": {
          "&.Mui-error": {
            "color": "var(--component-label-fg-invalid)"
          }
        }
      }
    },
    "MuiChip": {
      "styleOverrides": {
        "label": {
          "paddingInline": "var(--component-chip-padding-inline)"
        },
        "root": {
          "borderRadius": "var(--component-chip-radius)",
          "fontSize": "var(--component-chip-font-size)",
          "&.MuiChip-outlined.MuiChip-colorPrimary": {
            "color": "var(--semantic-fg-brand-default)"
          },
          "&.MuiChip-outlined.MuiChip-colorSuccess": {
            "color": "var(--semantic-fg-success-default)"
          },
          "&.MuiChip-outlined.MuiChip-colorWarning": {
            "color": "var(--semantic-fg-warning-default)"
          },
          "&.MuiChip-outlined.MuiChip-colorError": {
            "color": "var(--semantic-fg-danger-default)"
          }
        }
      }
    },
    "MuiTooltip": {
      "styleOverrides": {
        "tooltip": {
          "paddingInline": "var(--component-tooltip-padding-inline)",
          "paddingBlock": "var(--component-tooltip-padding-block)",
          "borderRadius": "var(--component-tooltip-radius)",
          "fontSize": "var(--component-tooltip-font-size)",
          "backgroundColor": "var(--component-tooltip-bg)",
          "color": "var(--component-tooltip-fg)"
        }
      }
    },
    "MuiMenu": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-menu-radius)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-menu-border)"
        }
      }
    },
    "MuiPopover": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-popover-radius)",
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-popover-border)"
        }
      }
    },
    "MuiAccordion": {
      "styleOverrides": {
        "root": {
          "borderStyle": "solid",
          "borderWidth": "var(--semantic-border-width-default)",
          "borderColor": "var(--component-accordion-border)",
          "borderRadius": "0",
          "&:not(:last-of-type)": {
            "borderBottomWidth": "0"
          },
          "&.MuiPaper-rounded:first-of-type": {
            "borderTopLeftRadius": "var(--component-accordion-radius)",
            "borderTopRightRadius": "var(--component-accordion-radius)"
          },
          "&.MuiPaper-rounded:last-of-type": {
            "borderBottomLeftRadius": "var(--component-accordion-radius)",
            "borderBottomRightRadius": "var(--component-accordion-radius)"
          },
          "&.Mui-expanded": {
            "marginTop": "0",
            "marginBottom": "0"
          },
          "&:before": {
            "display": "none"
          }
        }
      }
    },
    "MuiAvatar": {
      "styleOverrides": {
        "circular": {
          "borderRadius": "var(--component-avatar-radius)"
        },
        "root": {
          "fontSize": "var(--component-avatar-font-size)",
          "backgroundColor": "var(--component-avatar-bg)",
          "color": "var(--component-avatar-fg)"
        }
      }
    },
    "MuiCardContent": {
      "styleOverrides": {
        "root": {
          "padding": "var(--component-card-padding)",
          "&:last-child": {
            "paddingBottom": "var(--component-card-padding)"
          }
        }
      }
    },
    "MuiDialogTitle": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-dialog-padding)",
          "paddingTop": "var(--component-dialog-padding)"
        }
      }
    },
    "MuiDialogActions": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-dialog-padding)",
          "paddingBottom": "var(--component-dialog-padding)"
        }
      }
    },
    "MuiMenuItem": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-menu-item-padding-inline)",
          "paddingBlock": "var(--component-menu-item-padding-block)"
        }
      }
    },
    "MuiAccordionSummary": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-accordion-head-padding-inline)"
        }
      }
    },
    "MuiAccordionDetails": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-accordion-body-padding-inline)",
          "paddingBottom": "var(--component-accordion-body-padding-block-end)"
        }
      }
    },
    "MuiSkeleton": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-skeleton-radius)"
        }
      }
    },
    "MuiTab": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-tabs-padding-inline)",
          "fontSize": "var(--component-tabs-font-size)",
          "letterSpacing": "var(--component-tabs-letter-spacing)"
        },
        "textColorPrimary": {
          "&.Mui-selected": {
            "color": "var(--semantic-fg-brand-default)"
          }
        }
      }
    },
    "MuiBreadcrumbs": {
      "styleOverrides": {
        "root": {
          "fontSize": "var(--component-breadcrumb-font-size)",
          "letterSpacing": "var(--component-breadcrumb-letter-spacing)"
        }
      }
    },
    "MuiTableCell": {
      "styleOverrides": {
        "sizeMedium": {
          "paddingInline": "var(--component-table-cell-padding-inline)",
          "paddingBlock": "var(--component-table-cell-padding-block)"
        },
        "head": {
          "fontSize": "var(--component-table-cell-font-size)",
          "letterSpacing": "var(--component-table-head-letter-spacing)",
          "color": "var(--component-table-head-fg)"
        },
        "body": {
          "fontSize": "var(--component-table-cell-font-size)",
          "letterSpacing": "var(--component-table-cell-letter-spacing)",
          "color": "var(--component-table-cell-fg)"
        }
      }
    },
    "MuiSnackbarContent": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-toast-padding-inline)",
          "paddingBlock": "var(--component-toast-padding-block)",
          "borderRadius": "var(--component-toast-radius)"
        }
      }
    },
    "MuiCheckbox": {
      "styleOverrides": {
        "root": {
          "color": "var(--component-checkbox-border)",
          "&.Mui-checked": {
            "color": "var(--component-checkbox-bg-checked)"
          }
        }
      }
    },
    "MuiDivider": {
      "styleOverrides": {
        "root": {
          "borderColor": "var(--component-divider-color)",
          "& .MuiDivider-wrapper": {
            "color": "var(--component-divider-label-fg)",
            "fontSize": "var(--component-divider-label-font-size)",
            "letterSpacing": "var(--component-divider-label-letter-spacing)"
          }
        }
      }
    },
    "MuiLink": {
      "styleOverrides": {
        "root": {
          "color": "var(--component-link-fg)",
          "&:hover": {
            "color": "var(--component-link-fg-hover)"
          }
        }
      }
    },
    "MuiPaginationItem": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-pagination-radius)",
          "fontSize": "var(--component-pagination-font-size)",
          "letterSpacing": "var(--component-pagination-letter-spacing)",
          "color": "var(--component-pagination-fg)",
          "&.Mui-selected": {
            "backgroundColor": "var(--component-pagination-current-bg)",
            "color": "var(--component-pagination-current-fg)"
          },
          "&.Mui-disabled": {
            "color": "var(--component-pagination-disabled-fg)"
          }
        }
      }
    },
    "MuiLinearProgress": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-progress-radius)",
          "backgroundColor": "var(--component-progress-track-bg)"
        },
        "bar": {
          "backgroundColor": "var(--component-progress-indicator-bg)"
        }
      }
    },
    "MuiSlider": {
      "styleOverrides": {
        "rail": {
          "backgroundColor": "var(--component-slider-track)"
        },
        "track": {
          "backgroundColor": "var(--component-slider-track-filled)"
        },
        "thumb": {
          "backgroundColor": "var(--component-slider-thumb-bg)"
        },
        "valueLabel": {
          "color": "var(--component-slider-value-fg)",
          "fontSize": "var(--component-slider-value-font-size)"
        },
        "markLabel": {
          "color": "var(--component-slider-tick-fg)",
          "fontSize": "var(--component-slider-tick-font-size)"
        }
      }
    },
    "MuiSwitch": {
      "styleOverrides": {
        "track": {
          "backgroundColor": "var(--component-switch-bg-off)"
        },
        "thumb": {
          "backgroundColor": "var(--component-switch-thumb-off)"
        },
        "switchBase": {
          "&.Mui-checked + .MuiSwitch-track": {
            "backgroundColor": "var(--component-switch-bg-on)"
          },
          "&.Mui-checked .MuiSwitch-thumb": {
            "backgroundColor": "var(--component-switch-thumb-on)"
          }
        }
      }
    },
    "MuiSelect": {
      "styleOverrides": {
        "icon": {
          "color": "var(--component-select-marker-fg)"
        }
      }
    },
    "MuiDrawer": {
      "styleOverrides": {
        "root": {
          "& .MuiDrawer-paper": {
            "backgroundColor": "var(--component-drawer-bg)",
            "color": "var(--component-drawer-fg)",
            "borderStyle": "solid",
            "borderWidth": "var(--semantic-border-width-default)",
            "borderColor": "var(--component-drawer-border)"
          }
        }
      }
    },
    "MuiToggleButton": {
      "styleOverrides": {
        "root": {
          "&.Mui-selected.MuiToggleButton-primary": {
            "color": "var(--semantic-fg-brand-default)"
          }
        }
      }
    },
    "MuiDialogContent": {
      "styleOverrides": {
        "root": {
          "paddingInline": "var(--component-dialog-padding)",
          "scrollbarWidth": "thin",
          "&::-webkit-scrollbar": {
            "width": "0.5rem",
            "height": "0.5rem"
          },
          "&::-webkit-scrollbar-track": {
            "background": "var(--component-scrollarea-track)"
          },
          "&::-webkit-scrollbar-thumb": {
            "background": "var(--component-scrollarea-thumb)",
            "borderRadius": "var(--component-scrollarea-radius)"
          }
        }
      }
    },
    "MuiBottomNavigationAction": {
      "styleOverrides": {
        "root": {
          "& .MuiBottomNavigationAction-label.Mui-selected": {
            "color": "var(--semantic-fg-brand-default)"
          }
        }
      }
    }
  }
});

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
