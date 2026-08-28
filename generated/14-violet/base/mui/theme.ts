// @interop MUI 9 기반 Violet 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#5e6ad2",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#c94c49",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f8f8f8",
      "paper": "#f0f0f1"
    },
    "text": {
      "primary": "#09080a",
      "secondary": "#5d5c60"
    },
    "divider": "#d7d6d9",
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
    "borderRadius": 8
  },
  "spacing": 4,
  "typography": {
    "fontSize": 16
  },
  "components": {
    "MuiAlert": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-alert-radius)",
          "fontSize": "var(--component-alert-font-size)",
          "letterSpacing": "var(--component-alert-letter-spacing)"
        },
        "standard": {
          "&.MuiAlert-colorSuccess": {
            "backgroundColor": "var(--component-alert-success-bg)",
            "color": "var(--component-alert-success-fg)"
          },
          "&.MuiAlert-colorInfo": {
            "backgroundColor": "var(--component-alert-brand-bg)",
            "color": "var(--component-alert-brand-fg)"
          },
          "&.MuiAlert-colorWarning": {
            "backgroundColor": "var(--component-alert-warning-bg)",
            "color": "var(--component-alert-warning-fg)"
          },
          "&.MuiAlert-colorError": {
            "backgroundColor": "var(--component-alert-danger-bg)",
            "color": "var(--component-alert-danger-fg)"
          }
        }
      }
    },
    "MuiButton": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-button-radius)"
        },
        "sizeSmall": {
          "fontSize": "var(--component-button-sm-font-size)",
          "letterSpacing": "var(--component-button-sm-letter-spacing)"
        },
        "sizeMedium": {
          "fontSize": "var(--component-button-md-font-size)",
          "letterSpacing": "var(--component-button-md-letter-spacing)"
        },
        "sizeLarge": {
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
          "color": "var(--component-card-body-fg)"
        }
      }
    },
    "MuiDialog": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-dialog-radius)",
          "backgroundColor": "var(--component-dialog-bg)",
          "color": "var(--component-dialog-body-fg)"
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
    "MuiChip": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-chip-radius)",
          "fontSize": "var(--component-chip-font-size)"
        }
      }
    },
    "MuiTooltip": {
      "styleOverrides": {
        "tooltip": {
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
          "borderRadius": "var(--component-menu-radius)"
        }
      }
    },
    "MuiPopover": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-popover-radius)"
        }
      }
    },
    "MuiAccordion": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-accordion-radius)"
        }
      }
    },
    "MuiAvatar": {
      "styleOverrides": {
        "root": {
          "fontSize": "var(--component-avatar-font-size)"
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
          "fontSize": "var(--component-tabs-font-size)",
          "letterSpacing": "var(--component-tabs-letter-spacing)"
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
        "head": {
          "fontSize": "var(--component-table-head-font-size)",
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
            "color": "var(--component-drawer-fg)"
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
      "main": "#5e6ad2",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#d25450",
      "contrastText": "#260908"
    },
    "background": {
      "default": "#191919",
      "paper": "#222223"
    },
    "text": {
      "primary": "#f9f9fc",
      "secondary": "#9a999d"
    },
    "divider": "#3a3a3c",
    "success": {
      "main": "#009342",
      "contrastText": "#011a07"
    },
    "warning": {
      "main": "#a07800",
      "contrastText": "#1c1200"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "spacing": 4,
  "typography": {
    "fontSize": 16
  },
  "components": {
    "MuiAlert": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-alert-radius)",
          "fontSize": "var(--component-alert-font-size)",
          "letterSpacing": "var(--component-alert-letter-spacing)"
        },
        "standard": {
          "&.MuiAlert-colorSuccess": {
            "backgroundColor": "var(--component-alert-success-bg)",
            "color": "var(--component-alert-success-fg)"
          },
          "&.MuiAlert-colorInfo": {
            "backgroundColor": "var(--component-alert-brand-bg)",
            "color": "var(--component-alert-brand-fg)"
          },
          "&.MuiAlert-colorWarning": {
            "backgroundColor": "var(--component-alert-warning-bg)",
            "color": "var(--component-alert-warning-fg)"
          },
          "&.MuiAlert-colorError": {
            "backgroundColor": "var(--component-alert-danger-bg)",
            "color": "var(--component-alert-danger-fg)"
          }
        }
      }
    },
    "MuiButton": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-button-radius)"
        },
        "sizeSmall": {
          "fontSize": "var(--component-button-sm-font-size)",
          "letterSpacing": "var(--component-button-sm-letter-spacing)"
        },
        "sizeMedium": {
          "fontSize": "var(--component-button-md-font-size)",
          "letterSpacing": "var(--component-button-md-letter-spacing)"
        },
        "sizeLarge": {
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
          "color": "var(--component-card-body-fg)"
        }
      }
    },
    "MuiDialog": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-dialog-radius)",
          "backgroundColor": "var(--component-dialog-bg)",
          "color": "var(--component-dialog-body-fg)"
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
    "MuiChip": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-chip-radius)",
          "fontSize": "var(--component-chip-font-size)"
        }
      }
    },
    "MuiTooltip": {
      "styleOverrides": {
        "tooltip": {
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
          "borderRadius": "var(--component-menu-radius)"
        }
      }
    },
    "MuiPopover": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-popover-radius)"
        }
      }
    },
    "MuiAccordion": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-accordion-radius)"
        }
      }
    },
    "MuiAvatar": {
      "styleOverrides": {
        "root": {
          "fontSize": "var(--component-avatar-font-size)"
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
          "fontSize": "var(--component-tabs-font-size)",
          "letterSpacing": "var(--component-tabs-letter-spacing)"
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
        "head": {
          "fontSize": "var(--component-table-head-font-size)",
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
            "color": "var(--component-drawer-fg)"
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
      "main": "#bbc7ff",
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
      "primary": "#f1f0f3",
      "secondary": "#e5e4e9"
    },
    "divider": "#6a696b",
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
    "borderRadius": 8
  },
  "spacing": 4,
  "typography": {
    "fontSize": 16
  },
  "components": {
    "MuiAlert": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-alert-radius)",
          "fontSize": "var(--component-alert-font-size)",
          "letterSpacing": "var(--component-alert-letter-spacing)"
        },
        "standard": {
          "&.MuiAlert-colorSuccess": {
            "backgroundColor": "var(--component-alert-success-bg)",
            "color": "var(--component-alert-success-fg)"
          },
          "&.MuiAlert-colorInfo": {
            "backgroundColor": "var(--component-alert-brand-bg)",
            "color": "var(--component-alert-brand-fg)"
          },
          "&.MuiAlert-colorWarning": {
            "backgroundColor": "var(--component-alert-warning-bg)",
            "color": "var(--component-alert-warning-fg)"
          },
          "&.MuiAlert-colorError": {
            "backgroundColor": "var(--component-alert-danger-bg)",
            "color": "var(--component-alert-danger-fg)"
          }
        }
      }
    },
    "MuiButton": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-button-radius)"
        },
        "sizeSmall": {
          "fontSize": "var(--component-button-sm-font-size)",
          "letterSpacing": "var(--component-button-sm-letter-spacing)"
        },
        "sizeMedium": {
          "fontSize": "var(--component-button-md-font-size)",
          "letterSpacing": "var(--component-button-md-letter-spacing)"
        },
        "sizeLarge": {
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
          "color": "var(--component-card-body-fg)"
        }
      }
    },
    "MuiDialog": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-dialog-radius)",
          "backgroundColor": "var(--component-dialog-bg)",
          "color": "var(--component-dialog-body-fg)"
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
    "MuiChip": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-chip-radius)",
          "fontSize": "var(--component-chip-font-size)"
        }
      }
    },
    "MuiTooltip": {
      "styleOverrides": {
        "tooltip": {
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
          "borderRadius": "var(--component-menu-radius)"
        }
      }
    },
    "MuiPopover": {
      "styleOverrides": {
        "paper": {
          "borderRadius": "var(--component-popover-radius)"
        }
      }
    },
    "MuiAccordion": {
      "styleOverrides": {
        "root": {
          "borderRadius": "var(--component-accordion-radius)"
        }
      }
    },
    "MuiAvatar": {
      "styleOverrides": {
        "root": {
          "fontSize": "var(--component-avatar-font-size)"
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
          "fontSize": "var(--component-tabs-font-size)",
          "letterSpacing": "var(--component-tabs-letter-spacing)"
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
        "head": {
          "fontSize": "var(--component-table-head-font-size)",
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
            "color": "var(--component-drawer-fg)"
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
