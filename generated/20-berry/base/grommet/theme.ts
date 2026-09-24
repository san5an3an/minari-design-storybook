// @interop Grommet 기반 Berry 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#ea4c89",
      "control": "#ea4c89",
      "focus": "#e36e95",
      "selected": "#ea4c89",
      "selected-background": "#ea4c89",
      "selected-text": "#ffffff",
      "active-background": "#f4d8df",
      "active-text": "#a82d5f",
      "background": "#fdfdfd",
      "background-back": "#f8f7f8",
      "background-front": "#fdfdfd",
      "background-contrast": "#f1f0f0",
      "border": "#cdc8cb",
      "text": "#0b080a",
      "text-strong": "#0b080a",
      "text-weak": "#615b5e",
      "text-xweak": "#8b8488",
      "icon": "#615b5e",
      "placeholder": "#8b8488",
      "status-critical": "#a2191f",
      "status-error": "#790d13",
      "status-warning": "#daa500",
      "status-ok": "#35ca68",
      "status-unknown": "#7b7478",
      "status-disabled": "#f1f0f0",
      "light-1": "#fdfdfd",
      "dark-1": "#cdc8cb",
      "light-2": "#f8f7f8",
      "dark-2": "#bab4b7",
      "light-3": "#f1f0f0",
      "dark-3": "#7b7478",
      "light-4": "#eae8e9",
      "dark-4": "#6b6568",
      "light-5": "#e2e0e1",
      "dark-5": "#615b5e",
      "light-6": "#d9d6d7",
      "dark-6": "#0b080a"
    },
    "control": {
      "border": {
        "width": "1px",
        "radius": "16px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#e36e95"
      }
    },
    "spacing": "12px",
    "edgeSize": {
      "none": "0px",
      "xxsmall": "2px",
      "xsmall": "4px",
      "small": "6px",
      "medium": "12px",
      "large": "20px",
      "xlarge": "32px"
    },
    "radius": {
      "none": "0px",
      "hair": "0px",
      "xxsmall": "8px",
      "xsmall": "12px",
      "small": "16px",
      "medium": "24px",
      "large": "32px",
      "xlarge": "48px"
    },
    "breakpoints": {
      "small": {
        "edgeSize": {
          "none": "0px",
          "xxsmall": "2px",
          "xsmall": "4px",
          "small": "6px",
          "medium": "12px",
          "large": "20px",
          "xlarge": "32px"
        }
      }
    },
    "drop": {
      "border": {
        "radius": "32px"
      }
    },
    "input": {
      "padding": {
        "horizontal": "11px",
        "vertical": "5px"
      }
    }
  },
  "button": {
    "border": {
      "radius": "16px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "6px",
      "horizontal": "12px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "6px"
        }
      },
      "medium": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "6px",
          "horizontal": "12px"
        }
      },
      "large": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "20px"
        }
      }
    }
  },
  "card": {
    "container": {
      "round": "24px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "8px"
    },
    "toggle": {
      "radius": "9999px"
    }
  },
  "layer": {
    "border": {
      "radius": "32px"
    }
  },
  "notification": {
    "container": {
      "round": "24px"
    }
  },
  "tip": {
    "content": {
      "round": "16px"
    }
  },
  "toggleGroup": {
    "container": {
      "round": "24px"
    },
    "button": {
      "pad": {
        "horizontal": "12px",
        "vertical": "4px"
      }
    }
  },
  "tag": {
    "round": "9999px",
    "pad": {
      "horizontal": "12px"
    },
    "size": {
      "xsmall": {
        "pad": {
          "horizontal": "4px"
        }
      },
      "small": {
        "pad": {
          "horizontal": "6px"
        }
      },
      "large": {
        "pad": {
          "horizontal": "20px"
        }
      },
      "xlarge": {
        "pad": {
          "horizontal": "32px"
        }
      }
    }
  },
  "pagination": {
    "button": {
      "size": {
        "small": {
          "border": {
            "radius": "16px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "medium": {
          "border": {
            "radius": "16px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "large": {
          "border": {
            "radius": "16px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        }
      }
    }
  },
  "dateInput": {
    "container": {
      "round": "16px"
    }
  },
  "dateTimeInput": {
    "container": {
      "round": "16px"
    }
  },
  "timeInput": {
    "container": {
      "round": "16px"
    }
  },
  "text": {
    "xsmall": {
      "size": "0.6875rem",
      "height": "14px"
    },
    "small": {
      "size": "0.875rem",
      "height": "18px"
    },
    "medium": {
      "size": "1rem",
      "height": "24px"
    },
    "large": {
      "size": "1.125rem",
      "height": "27px"
    },
    "xlarge": {
      "size": "1.25rem",
      "height": "24px"
    },
    "xxlarge": {
      "size": "1.375rem",
      "height": "26px"
    },
    "2xl": {
      "size": "1.375rem",
      "height": "26px"
    },
    "3xl": {
      "size": "1.75rem",
      "height": "34px"
    },
    "4xl": {
      "size": "2.1875rem",
      "height": "42px"
    },
    "5xl": {
      "size": "2.1875rem",
      "height": "42px"
    },
    "6xl": {
      "size": "2.1875rem",
      "height": "42px"
    }
  }
};

export const darkTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#ea4c89",
      "control": "#ea4c89",
      "focus": "#cb5980",
      "selected": "#ea4c89",
      "selected-background": "#ea4c89",
      "selected-text": "#ffffff",
      "active-background": "#39252a",
      "active-text": "#fc7aa6",
      "background": "#232222",
      "background-back": "#191919",
      "background-front": "#232222",
      "background-contrast": "#232222",
      "border": "#494648",
      "text": "#fcf8fa",
      "text-strong": "#fcf8fa",
      "text-weak": "#9e989b",
      "text-xweak": "#756f72",
      "icon": "#9e989b",
      "placeholder": "#756f72",
      "status-critical": "#a2191f",
      "status-error": "#e97970",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#847c80",
      "status-disabled": "#232222",
      "light-1": "#111010",
      "dark-1": "#494648",
      "light-2": "#191919",
      "dark-2": "#5f5a5c",
      "light-3": "#232222",
      "dark-3": "#847c80",
      "light-4": "#292829",
      "dark-4": "#948d90",
      "light-5": "#312f30",
      "dark-5": "#9e989b",
      "light-6": "#3c393a",
      "dark-6": "#fcf8fa"
    },
    "control": {
      "border": {
        "width": "1px",
        "radius": "16px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#cb5980"
      }
    },
    "spacing": "12px",
    "edgeSize": {
      "none": "0px",
      "xxsmall": "2px",
      "xsmall": "4px",
      "small": "6px",
      "medium": "12px",
      "large": "20px",
      "xlarge": "32px"
    },
    "radius": {
      "none": "0px",
      "hair": "0px",
      "xxsmall": "8px",
      "xsmall": "12px",
      "small": "16px",
      "medium": "24px",
      "large": "32px",
      "xlarge": "48px"
    },
    "breakpoints": {
      "small": {
        "edgeSize": {
          "none": "0px",
          "xxsmall": "2px",
          "xsmall": "4px",
          "small": "6px",
          "medium": "12px",
          "large": "20px",
          "xlarge": "32px"
        }
      }
    },
    "drop": {
      "border": {
        "radius": "32px"
      }
    },
    "input": {
      "padding": {
        "horizontal": "11px",
        "vertical": "5px"
      }
    }
  },
  "button": {
    "border": {
      "radius": "16px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "6px",
      "horizontal": "12px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "6px"
        }
      },
      "medium": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "6px",
          "horizontal": "12px"
        }
      },
      "large": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "20px"
        }
      }
    }
  },
  "card": {
    "container": {
      "round": "24px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "8px"
    },
    "toggle": {
      "radius": "9999px"
    }
  },
  "layer": {
    "border": {
      "radius": "32px"
    }
  },
  "notification": {
    "container": {
      "round": "24px"
    }
  },
  "tip": {
    "content": {
      "round": "16px"
    }
  },
  "toggleGroup": {
    "container": {
      "round": "24px"
    },
    "button": {
      "pad": {
        "horizontal": "12px",
        "vertical": "4px"
      }
    }
  },
  "tag": {
    "round": "9999px",
    "pad": {
      "horizontal": "12px"
    },
    "size": {
      "xsmall": {
        "pad": {
          "horizontal": "4px"
        }
      },
      "small": {
        "pad": {
          "horizontal": "6px"
        }
      },
      "large": {
        "pad": {
          "horizontal": "20px"
        }
      },
      "xlarge": {
        "pad": {
          "horizontal": "32px"
        }
      }
    }
  },
  "pagination": {
    "button": {
      "size": {
        "small": {
          "border": {
            "radius": "16px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "medium": {
          "border": {
            "radius": "16px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "large": {
          "border": {
            "radius": "16px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        }
      }
    }
  },
  "dateInput": {
    "container": {
      "round": "16px"
    }
  },
  "dateTimeInput": {
    "container": {
      "round": "16px"
    }
  },
  "timeInput": {
    "container": {
      "round": "16px"
    }
  },
  "text": {
    "xsmall": {
      "size": "0.6875rem",
      "height": "14px"
    },
    "small": {
      "size": "0.875rem",
      "height": "18px"
    },
    "medium": {
      "size": "1rem",
      "height": "24px"
    },
    "large": {
      "size": "1.125rem",
      "height": "27px"
    },
    "xlarge": {
      "size": "1.25rem",
      "height": "24px"
    },
    "xxlarge": {
      "size": "1.375rem",
      "height": "26px"
    },
    "2xl": {
      "size": "1.375rem",
      "height": "26px"
    },
    "3xl": {
      "size": "1.75rem",
      "height": "34px"
    },
    "4xl": {
      "size": "2.1875rem",
      "height": "42px"
    },
    "5xl": {
      "size": "2.1875rem",
      "height": "42px"
    },
    "6xl": {
      "size": "2.1875rem",
      "height": "42px"
    }
  }
};

export const highContrastTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#ffb5ca",
      "control": "#ffb5ca",
      "focus": "#e07597",
      "selected": "#ffb5ca",
      "selected-background": "#ffb5ca",
      "selected-text": "#000000",
      "active-background": "#120408",
      "active-text": "#ffdfe7",
      "background": "#090808",
      "background-back": "#020202",
      "background-front": "#090808",
      "background-contrast": "#090808",
      "border": "#848182",
      "text": "#f4f0f2",
      "text-strong": "#f4f0f2",
      "text-weak": "#e9e4e6",
      "text-xweak": "#e9e4e6",
      "icon": "#e9e4e6",
      "placeholder": "#e9e4e6",
      "status-critical": "#ffb7b5",
      "status-error": "#ffdfde",
      "status-warning": "#fac130",
      "status-ok": "#6ce08a",
      "status-unknown": "#cec8cb",
      "status-disabled": "#090808",
      "light-1": "#000000",
      "dark-1": "#848182",
      "light-2": "#020202",
      "dark-2": "#9c989a",
      "light-3": "#090808",
      "dark-3": "#cec8cb",
      "light-4": "#131213",
      "dark-4": "#dfd8db",
      "light-5": "#1f1e1e",
      "dark-5": "#e9e4e6",
      "light-6": "#6b696a",
      "dark-6": "#f4f0f2"
    },
    "control": {
      "border": {
        "width": "2px",
        "radius": "16px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#e07597"
      }
    },
    "spacing": "12px",
    "edgeSize": {
      "none": "0px",
      "xxsmall": "2px",
      "xsmall": "4px",
      "small": "6px",
      "medium": "12px",
      "large": "20px",
      "xlarge": "32px"
    },
    "radius": {
      "none": "0px",
      "hair": "0px",
      "xxsmall": "8px",
      "xsmall": "12px",
      "small": "16px",
      "medium": "24px",
      "large": "32px",
      "xlarge": "48px"
    },
    "breakpoints": {
      "small": {
        "edgeSize": {
          "none": "0px",
          "xxsmall": "2px",
          "xsmall": "4px",
          "small": "6px",
          "medium": "12px",
          "large": "20px",
          "xlarge": "32px"
        }
      }
    },
    "drop": {
      "border": {
        "radius": "32px"
      }
    },
    "input": {
      "padding": {
        "horizontal": "10px",
        "vertical": "4px"
      }
    }
  },
  "button": {
    "border": {
      "radius": "16px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "6px",
      "horizontal": "12px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "6px"
        }
      },
      "medium": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "6px",
          "horizontal": "12px"
        }
      },
      "large": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "20px"
        }
      }
    }
  },
  "card": {
    "container": {
      "round": "24px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "8px"
    },
    "toggle": {
      "radius": "9999px"
    }
  },
  "layer": {
    "border": {
      "radius": "32px"
    }
  },
  "notification": {
    "container": {
      "round": "24px"
    }
  },
  "tip": {
    "content": {
      "round": "16px"
    }
  },
  "toggleGroup": {
    "container": {
      "round": "24px"
    },
    "button": {
      "pad": {
        "horizontal": "12px",
        "vertical": "4px"
      }
    }
  },
  "tag": {
    "round": "9999px",
    "pad": {
      "horizontal": "12px"
    },
    "size": {
      "xsmall": {
        "pad": {
          "horizontal": "4px"
        }
      },
      "small": {
        "pad": {
          "horizontal": "6px"
        }
      },
      "large": {
        "pad": {
          "horizontal": "20px"
        }
      },
      "xlarge": {
        "pad": {
          "horizontal": "32px"
        }
      }
    }
  },
  "pagination": {
    "button": {
      "size": {
        "small": {
          "border": {
            "radius": "16px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "medium": {
          "border": {
            "radius": "16px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "large": {
          "border": {
            "radius": "16px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        }
      }
    }
  },
  "dateInput": {
    "container": {
      "round": "16px"
    }
  },
  "dateTimeInput": {
    "container": {
      "round": "16px"
    }
  },
  "timeInput": {
    "container": {
      "round": "16px"
    }
  },
  "text": {
    "xsmall": {
      "size": "0.6875rem",
      "height": "14px"
    },
    "small": {
      "size": "0.875rem",
      "height": "18px"
    },
    "medium": {
      "size": "1rem",
      "height": "24px"
    },
    "large": {
      "size": "1.125rem",
      "height": "27px"
    },
    "xlarge": {
      "size": "1.25rem",
      "height": "24px"
    },
    "xxlarge": {
      "size": "1.375rem",
      "height": "26px"
    },
    "2xl": {
      "size": "1.375rem",
      "height": "26px"
    },
    "3xl": {
      "size": "1.75rem",
      "height": "34px"
    },
    "4xl": {
      "size": "2.1875rem",
      "height": "42px"
    },
    "5xl": {
      "size": "2.1875rem",
      "height": "42px"
    },
    "6xl": {
      "size": "2.1875rem",
      "height": "42px"
    }
  }
};

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode: Record<string, ThemeType> = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
