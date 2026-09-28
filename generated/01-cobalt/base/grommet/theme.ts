// @interop Grommet 기반 Cobalt 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#0052cc",
      "control": "#0052cc",
      "focus": "#3064bd",
      "selected": "#0052cc",
      "selected-background": "#0052cc",
      "selected-text": "#ffffff",
      "active-background": "#c4d1e6",
      "active-text": "#003c9a",
      "background": "#fcfdfd",
      "background-back": "#f7f8f8",
      "background-front": "#fcfdfd",
      "background-contrast": "#eff0f1",
      "border": "#c8cacd",
      "text": "#08080b",
      "text-strong": "#08080b",
      "text-weak": "#5a5d61",
      "text-xweak": "#83858c",
      "icon": "#5a5d61",
      "placeholder": "#83858c",
      "status-critical": "#c84d42",
      "status-error": "#9e3d35",
      "status-warning": "#ffbb00",
      "status-ok": "#51c672",
      "status-unknown": "#73767c",
      "status-disabled": "#eff0f1",
      "light-1": "#fcfdfd",
      "dark-1": "#c8cacd",
      "light-2": "#f7f8f8",
      "dark-2": "#b3b6bb",
      "light-3": "#eff0f1",
      "dark-3": "#73767c",
      "light-4": "#e8e8ea",
      "dark-4": "#64676c",
      "light-5": "#dfe0e3",
      "dark-5": "#5a5d61",
      "light-6": "#d5d7da",
      "dark-6": "#08080b"
    },
    "control": {
      "border": {
        "width": "1px",
        "radius": "8px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#3064bd"
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
      "xxsmall": "4px",
      "xsmall": "6px",
      "small": "8px",
      "medium": "12px",
      "large": "16px",
      "xlarge": "24px"
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
        "radius": "16px"
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
      "radius": "8px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "8px"
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
      "round": "12px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "4px"
    },
    "toggle": {
      "radius": "9999px"
    }
  },
  "layer": {
    "border": {
      "radius": "16px"
    }
  },
  "notification": {
    "container": {
      "round": "12px"
    }
  },
  "tip": {
    "content": {
      "round": "8px"
    }
  },
  "toggleGroup": {
    "container": {
      "round": "12px"
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
            "radius": "8px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "medium": {
          "border": {
            "radius": "8px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "large": {
          "border": {
            "radius": "8px"
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
      "round": "8px"
    }
  },
  "dateTimeInput": {
    "container": {
      "round": "8px"
    }
  },
  "timeInput": {
    "container": {
      "round": "8px"
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
      "brand": "#0052cc",
      "control": "#0052cc",
      "focus": "#1b4ea6",
      "selected": "#0052cc",
      "selected-background": "#0052cc",
      "selected-text": "#ffffff",
      "active-background": "#17202f",
      "active-text": "#5d99ff",
      "background": "#222223",
      "background-back": "#181919",
      "background-front": "#222223",
      "background-contrast": "#222223",
      "border": "#46474a",
      "text": "#f8f9fd",
      "text-strong": "#f8f9fd",
      "text-weak": "#979a9f",
      "text-xweak": "#6d7076",
      "icon": "#979a9f",
      "placeholder": "#6d7076",
      "status-critical": "#d25549",
      "status-error": "#e47c6f",
      "status-warning": "#ffbb00",
      "status-ok": "#009342",
      "status-unknown": "#7b7f85",
      "status-disabled": "#222223",
      "light-1": "#101011",
      "dark-1": "#46474a",
      "light-2": "#181919",
      "dark-2": "#595b60",
      "light-3": "#222223",
      "dark-3": "#7b7f85",
      "light-4": "#28282a",
      "dark-4": "#8c8f95",
      "light-5": "#2f3031",
      "dark-5": "#979a9f",
      "light-6": "#393a3c",
      "dark-6": "#f8f9fd"
    },
    "control": {
      "border": {
        "width": "1px",
        "radius": "8px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#1b4ea6"
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
      "xxsmall": "4px",
      "xsmall": "6px",
      "small": "8px",
      "medium": "12px",
      "large": "16px",
      "xlarge": "24px"
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
        "radius": "16px"
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
      "radius": "8px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "8px"
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
      "round": "12px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "4px"
    },
    "toggle": {
      "radius": "9999px"
    }
  },
  "layer": {
    "border": {
      "radius": "16px"
    }
  },
  "notification": {
    "container": {
      "round": "12px"
    }
  },
  "tip": {
    "content": {
      "round": "8px"
    }
  },
  "toggleGroup": {
    "container": {
      "round": "12px"
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
            "radius": "8px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "medium": {
          "border": {
            "radius": "8px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "large": {
          "border": {
            "radius": "8px"
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
      "round": "8px"
    }
  },
  "dateTimeInput": {
    "container": {
      "round": "8px"
    }
  },
  "timeInput": {
    "container": {
      "round": "8px"
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
      "brand": "#abcbff",
      "control": "#abcbff",
      "focus": "#7699d5",
      "selected": "#abcbff",
      "selected-background": "#abcbff",
      "selected-text": "#000000",
      "active-background": "#040811",
      "active-text": "#d7e6ff",
      "background": "#080809",
      "background-back": "#020202",
      "background-front": "#080809",
      "background-contrast": "#080809",
      "border": "#7f8184",
      "text": "#eff1f4",
      "text-strong": "#eff1f4",
      "text-weak": "#e3e5ea",
      "text-xweak": "#e3e5ea",
      "icon": "#e3e5ea",
      "placeholder": "#e3e5ea",
      "status-critical": "#ffb8ad",
      "status-error": "#ffe0db",
      "status-warning": "#f5c24b",
      "status-ok": "#79de91",
      "status-unknown": "#c7cad0",
      "status-disabled": "#080809",
      "light-1": "#000000",
      "dark-1": "#7f8184",
      "light-2": "#020202",
      "dark-2": "#96999d",
      "light-3": "#080809",
      "dark-3": "#c7cad0",
      "light-4": "#121314",
      "dark-4": "#d7dae0",
      "light-5": "#1d1e1f",
      "dark-5": "#e3e5ea",
      "light-6": "#686a6c",
      "dark-6": "#eff1f4"
    },
    "control": {
      "border": {
        "width": "2px",
        "radius": "8px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#7699d5"
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
      "xxsmall": "4px",
      "xsmall": "6px",
      "small": "8px",
      "medium": "12px",
      "large": "16px",
      "xlarge": "24px"
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
        "radius": "16px"
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
      "radius": "8px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "8px"
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
      "round": "12px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "4px"
    },
    "toggle": {
      "radius": "9999px"
    }
  },
  "layer": {
    "border": {
      "radius": "16px"
    }
  },
  "notification": {
    "container": {
      "round": "12px"
    }
  },
  "tip": {
    "content": {
      "round": "8px"
    }
  },
  "toggleGroup": {
    "container": {
      "round": "12px"
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
            "radius": "8px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "medium": {
          "border": {
            "radius": "8px"
          },
          "pad": {
            "vertical": "4px",
            "horizontal": "4px"
          }
        },
        "large": {
          "border": {
            "radius": "8px"
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
      "round": "8px"
    }
  },
  "dateTimeInput": {
    "container": {
      "round": "8px"
    }
  },
  "timeInput": {
    "container": {
      "round": "8px"
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
