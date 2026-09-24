// @interop Grommet 기반 Ember 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#f38020",
      "control": "#f38020",
      "focus": "#ed965c",
      "selected": "#f38020",
      "selected-background": "#f38020",
      "selected-text": "#ffffff",
      "active-background": "#f6e2d6",
      "active-text": "#a25000",
      "background": "#fdfdfc",
      "background-back": "#f8f7f7",
      "background-front": "#fdfdfc",
      "background-contrast": "#f1f0ef",
      "border": "#cec9c5",
      "text": "#0c0806",
      "text-strong": "#0c0806",
      "text-weak": "#726c66",
      "text-xweak": "#8d847e",
      "icon": "#726c66",
      "placeholder": "#8d847e",
      "status-critical": "#991b1b",
      "status-error": "#710e0f",
      "status-warning": "#daa500",
      "status-ok": "#35ca68",
      "status-unknown": "#b5aca6",
      "status-disabled": "#f1f0ef",
      "light-1": "#fdfdfc",
      "dark-1": "#cec9c5",
      "light-2": "#f8f7f7",
      "dark-2": "#bbb4af",
      "light-3": "#f1f0ef",
      "dark-3": "#b5aca6",
      "light-4": "#eae8e6",
      "dark-4": "#a49b95",
      "light-5": "#e3e0de",
      "dark-5": "#726c66",
      "light-6": "#dad6d3",
      "dark-6": "#0c0806"
    },
    "control": {
      "border": {
        "width": "1px",
        "radius": "12px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#ed965c"
      }
    },
    "spacing": "16px",
    "edgeSize": {
      "none": "0px",
      "xxsmall": "2px",
      "xsmall": "4px",
      "small": "8px",
      "medium": "16px",
      "large": "24px",
      "xlarge": "40px"
    },
    "radius": {
      "none": "0px",
      "hair": "0px",
      "xxsmall": "6px",
      "xsmall": "8px",
      "small": "12px",
      "medium": "16px",
      "large": "20px",
      "xlarge": "28px"
    },
    "breakpoints": {
      "small": {
        "edgeSize": {
          "none": "0px",
          "xxsmall": "2px",
          "xsmall": "4px",
          "small": "8px",
          "medium": "16px",
          "large": "24px",
          "xlarge": "40px"
        }
      }
    },
    "drop": {
      "border": {
        "radius": "20px"
      }
    },
    "input": {
      "padding": {
        "horizontal": "15px",
        "vertical": "7px"
      }
    }
  },
  "button": {
    "border": {
      "radius": "12px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      }
    }
  },
  "card": {
    "container": {
      "round": "16px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "6px"
    },
    "toggle": {
      "radius": "9999px"
    }
  },
  "layer": {
    "border": {
      "radius": "20px"
    }
  },
  "notification": {
    "container": {
      "round": "16px"
    }
  },
  "tip": {
    "content": {
      "round": "12px"
    }
  },
  "toggleGroup": {
    "container": {
      "round": "16px"
    },
    "button": {
      "pad": {
        "horizontal": "16px",
        "vertical": "4px"
      }
    }
  },
  "tag": {
    "round": "9999px",
    "pad": {
      "horizontal": "16px"
    },
    "size": {
      "xsmall": {
        "pad": {
          "horizontal": "4px"
        }
      },
      "small": {
        "pad": {
          "horizontal": "8px"
        }
      },
      "large": {
        "pad": {
          "horizontal": "24px"
        }
      },
      "xlarge": {
        "pad": {
          "horizontal": "40px"
        }
      }
    }
  },
  "pagination": {
    "button": {
      "size": {
        "small": {
          "border": {
            "radius": "12px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "medium": {
          "border": {
            "radius": "12px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "large": {
          "border": {
            "radius": "12px"
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
      "round": "12px"
    }
  },
  "dateTimeInput": {
    "container": {
      "round": "12px"
    }
  },
  "timeInput": {
    "container": {
      "round": "12px"
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
      "brand": "#f38020",
      "control": "#f38020",
      "focus": "#d58146",
      "selected": "#f38020",
      "selected-background": "#f38020",
      "selected-text": "#ffffff",
      "active-background": "#3b2c23",
      "active-text": "#ffa86f",
      "background": "#232221",
      "background-back": "#191918",
      "background-front": "#232221",
      "background-contrast": "#232221",
      "border": "#4a4643",
      "text": "#fef8f4",
      "text-strong": "#fef8f4",
      "text-weak": "#9f9892",
      "text-xweak": "#766f68",
      "icon": "#9f9892",
      "placeholder": "#766f68",
      "status-critical": "#991b1b",
      "status-error": "#e57c71",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#857d76",
      "status-disabled": "#232221",
      "light-1": "#111010",
      "dark-1": "#4a4643",
      "light-2": "#191918",
      "dark-2": "#605a56",
      "light-3": "#232221",
      "dark-3": "#857d76",
      "light-4": "#2a2827",
      "dark-4": "#958d87",
      "light-5": "#322f2e",
      "dark-5": "#9f9892",
      "light-6": "#3c3937",
      "dark-6": "#fef8f4"
    },
    "control": {
      "border": {
        "width": "1px",
        "radius": "12px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#d58146"
      }
    },
    "spacing": "16px",
    "edgeSize": {
      "none": "0px",
      "xxsmall": "2px",
      "xsmall": "4px",
      "small": "8px",
      "medium": "16px",
      "large": "24px",
      "xlarge": "40px"
    },
    "radius": {
      "none": "0px",
      "hair": "0px",
      "xxsmall": "6px",
      "xsmall": "8px",
      "small": "12px",
      "medium": "16px",
      "large": "20px",
      "xlarge": "28px"
    },
    "breakpoints": {
      "small": {
        "edgeSize": {
          "none": "0px",
          "xxsmall": "2px",
          "xsmall": "4px",
          "small": "8px",
          "medium": "16px",
          "large": "24px",
          "xlarge": "40px"
        }
      }
    },
    "drop": {
      "border": {
        "radius": "20px"
      }
    },
    "input": {
      "padding": {
        "horizontal": "15px",
        "vertical": "7px"
      }
    }
  },
  "button": {
    "border": {
      "radius": "12px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      }
    }
  },
  "card": {
    "container": {
      "round": "16px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "6px"
    },
    "toggle": {
      "radius": "9999px"
    }
  },
  "layer": {
    "border": {
      "radius": "20px"
    }
  },
  "notification": {
    "container": {
      "round": "16px"
    }
  },
  "tip": {
    "content": {
      "round": "12px"
    }
  },
  "toggleGroup": {
    "container": {
      "round": "16px"
    },
    "button": {
      "pad": {
        "horizontal": "16px",
        "vertical": "4px"
      }
    }
  },
  "tag": {
    "round": "9999px",
    "pad": {
      "horizontal": "16px"
    },
    "size": {
      "xsmall": {
        "pad": {
          "horizontal": "4px"
        }
      },
      "small": {
        "pad": {
          "horizontal": "8px"
        }
      },
      "large": {
        "pad": {
          "horizontal": "24px"
        }
      },
      "xlarge": {
        "pad": {
          "horizontal": "40px"
        }
      }
    }
  },
  "pagination": {
    "button": {
      "size": {
        "small": {
          "border": {
            "radius": "12px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "medium": {
          "border": {
            "radius": "12px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "large": {
          "border": {
            "radius": "12px"
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
      "round": "12px"
    }
  },
  "dateTimeInput": {
    "container": {
      "round": "12px"
    }
  },
  "timeInput": {
    "container": {
      "round": "12px"
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
      "brand": "#ffbb8f",
      "control": "#ffbb8f",
      "focus": "#dc813f",
      "selected": "#ffbb8f",
      "selected-background": "#ffbb8f",
      "selected-text": "#000000",
      "active-background": "#110501",
      "active-text": "#ffe1ce",
      "background": "#090807",
      "background-back": "#020202",
      "background-front": "#090807",
      "background-contrast": "#090807",
      "border": "#85817d",
      "text": "#f4f0ec",
      "text-strong": "#f4f0ec",
      "text-weak": "#ebe4de",
      "text-xweak": "#ebe4de",
      "icon": "#ebe4de",
      "placeholder": "#ebe4de",
      "status-critical": "#ffb8b1",
      "status-error": "#ffe0dc",
      "status-warning": "#fac130",
      "status-ok": "#6ce08a",
      "status-unknown": "#d0c8c2",
      "status-disabled": "#090807",
      "light-1": "#000000",
      "dark-1": "#85817d",
      "light-2": "#020202",
      "dark-2": "#9d9893",
      "light-3": "#090807",
      "dark-3": "#d0c8c2",
      "light-4": "#141211",
      "dark-4": "#e0d8d2",
      "light-5": "#201e1c",
      "dark-5": "#ebe4de",
      "light-6": "#6d6967",
      "dark-6": "#f4f0ec"
    },
    "control": {
      "border": {
        "width": "2px",
        "radius": "12px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#dc813f"
      }
    },
    "spacing": "16px",
    "edgeSize": {
      "none": "0px",
      "xxsmall": "2px",
      "xsmall": "4px",
      "small": "8px",
      "medium": "16px",
      "large": "24px",
      "xlarge": "40px"
    },
    "radius": {
      "none": "0px",
      "hair": "0px",
      "xxsmall": "6px",
      "xsmall": "8px",
      "small": "12px",
      "medium": "16px",
      "large": "20px",
      "xlarge": "28px"
    },
    "breakpoints": {
      "small": {
        "edgeSize": {
          "none": "0px",
          "xxsmall": "2px",
          "xsmall": "4px",
          "small": "8px",
          "medium": "16px",
          "large": "24px",
          "xlarge": "40px"
        }
      }
    },
    "drop": {
      "border": {
        "radius": "20px"
      }
    },
    "input": {
      "padding": {
        "horizontal": "14px",
        "vertical": "6px"
      }
    }
  },
  "button": {
    "border": {
      "radius": "12px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      }
    }
  },
  "card": {
    "container": {
      "round": "16px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "6px"
    },
    "toggle": {
      "radius": "9999px"
    }
  },
  "layer": {
    "border": {
      "radius": "20px"
    }
  },
  "notification": {
    "container": {
      "round": "16px"
    }
  },
  "tip": {
    "content": {
      "round": "12px"
    }
  },
  "toggleGroup": {
    "container": {
      "round": "16px"
    },
    "button": {
      "pad": {
        "horizontal": "16px",
        "vertical": "4px"
      }
    }
  },
  "tag": {
    "round": "9999px",
    "pad": {
      "horizontal": "16px"
    },
    "size": {
      "xsmall": {
        "pad": {
          "horizontal": "4px"
        }
      },
      "small": {
        "pad": {
          "horizontal": "8px"
        }
      },
      "large": {
        "pad": {
          "horizontal": "24px"
        }
      },
      "xlarge": {
        "pad": {
          "horizontal": "40px"
        }
      }
    }
  },
  "pagination": {
    "button": {
      "size": {
        "small": {
          "border": {
            "radius": "12px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "medium": {
          "border": {
            "radius": "12px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "large": {
          "border": {
            "radius": "12px"
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
      "round": "12px"
    }
  },
  "dateTimeInput": {
    "container": {
      "round": "12px"
    }
  },
  "timeInput": {
    "container": {
      "round": "12px"
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
