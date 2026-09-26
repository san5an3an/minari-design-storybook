// @interop Grommet 기반 Teal 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#26a5e4",
      "control": "#26a5e4",
      "focus": "#5faedd",
      "selected": "#26a5e4",
      "selected-background": "#26a5e4",
      "selected-text": "#ffffff",
      "active-background": "#d6e6f1",
      "active-text": "#006c9a",
      "background": "#fcfdfd",
      "background-back": "#f7f8f8",
      "background-front": "#fcfdfd",
      "background-contrast": "#eff0f0",
      "border": "#c7cbcb",
      "text": "#060909",
      "text-strong": "#060909",
      "text-weak": "#686d6e",
      "text-xweak": "#808787",
      "icon": "#686d6e",
      "placeholder": "#808787",
      "status-critical": "#c84d42",
      "status-error": "#9e3d35",
      "status-warning": "#daa500",
      "status-ok": "#51c672",
      "status-unknown": "#a8afaf",
      "status-disabled": "#eff0f0",
      "light-1": "#fcfdfd",
      "dark-1": "#c7cbcb",
      "light-2": "#f7f8f8",
      "dark-2": "#b2b7b7",
      "light-3": "#eff0f0",
      "dark-3": "#a8afaf",
      "light-4": "#e7e9e9",
      "dark-4": "#979d9e",
      "light-5": "#dfe1e1",
      "dark-5": "#686d6e",
      "light-6": "#d4d7d8",
      "dark-6": "#060909"
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
        "color": "#5faedd"
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
      "brand": "#26a5e4",
      "control": "#26a5e4",
      "focus": "#4898c6",
      "selected": "#26a5e4",
      "selected-background": "#26a5e4",
      "selected-text": "#ffffff",
      "active-background": "#233038",
      "active-text": "#68c1f5",
      "background": "#212222",
      "background-back": "#181919",
      "background-front": "#212222",
      "background-contrast": "#212222",
      "border": "#454848",
      "text": "#f6fafa",
      "text-strong": "#f6fafa",
      "text-weak": "#959a9b",
      "text-xweak": "#6a7171",
      "icon": "#959a9b",
      "placeholder": "#6a7171",
      "status-critical": "#d25549",
      "status-error": "#e47c6f",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#798080",
      "status-disabled": "#212222",
      "light-1": "#101010",
      "dark-1": "#454848",
      "light-2": "#181919",
      "dark-2": "#585c5d",
      "light-3": "#212222",
      "dark-3": "#798080",
      "light-4": "#272929",
      "dark-4": "#899090",
      "light-5": "#2e3030",
      "dark-5": "#959a9b",
      "light-6": "#383a3b",
      "dark-6": "#f6fafa"
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
        "color": "#4898c6"
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
      "brand": "#88d2ff",
      "control": "#88d2ff",
      "focus": "#57a1cc",
      "selected": "#88d2ff",
      "selected-background": "#88d2ff",
      "selected-text": "#000000",
      "active-background": "#020910",
      "active-text": "#c7e9ff",
      "background": "#080808",
      "background-back": "#020202",
      "background-front": "#080808",
      "background-contrast": "#080808",
      "border": "#7e8282",
      "text": "#edf1f1",
      "text-strong": "#edf1f1",
      "text-weak": "#e0e6e6",
      "text-xweak": "#e0e6e6",
      "icon": "#e0e6e6",
      "placeholder": "#e0e6e6",
      "status-critical": "#ffb8ad",
      "status-error": "#ffe0db",
      "status-warning": "#f5c24b",
      "status-ok": "#79de91",
      "status-unknown": "#c4cbcb",
      "status-disabled": "#080808",
      "light-1": "#000000",
      "dark-1": "#7e8282",
      "light-2": "#020202",
      "dark-2": "#959999",
      "light-3": "#080808",
      "dark-3": "#c4cbcb",
      "light-4": "#121313",
      "dark-4": "#d4dbdb",
      "light-5": "#1d1e1e",
      "dark-5": "#e0e6e6",
      "light-6": "#676a6a",
      "dark-6": "#edf1f1"
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
        "color": "#57a1cc"
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
