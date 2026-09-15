// @interop Grommet 기반 Plum 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#9146ff",
      "control": "#9146ff",
      "focus": "#9568ec",
      "selected": "#9146ff",
      "selected-background": "#9146ff",
      "selected-text": "#ffffff",
      "active-background": "#dcd6f3",
      "active-text": "#7339c9",
      "background": "#fdfdfd",
      "background-back": "#f8f7f8",
      "background-front": "#fdfdfd",
      "background-contrast": "#f1f0f1",
      "border": "#ccc8cc",
      "text": "#0b080b",
      "text-strong": "#0b080b",
      "text-weak": "#5f5b60",
      "text-xweak": "#8a848b",
      "icon": "#5f5b60",
      "placeholder": "#8a848b",
      "status-critical": "#dd3338",
      "status-error": "#af2b2d",
      "status-warning": "#daa500",
      "status-ok": "#35ca68",
      "status-unknown": "#7a747b",
      "status-disabled": "#f1f0f1",
      "light-1": "#fdfdfd",
      "dark-1": "#ccc8cc",
      "light-2": "#f8f7f8",
      "dark-2": "#b8b4b9",
      "light-3": "#f1f0f1",
      "dark-3": "#7a747b",
      "light-4": "#e9e8ea",
      "dark-4": "#6a656b",
      "light-5": "#e2e0e2",
      "dark-5": "#5f5b60",
      "light-6": "#d8d6d9",
      "dark-6": "#0b080b"
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
        "color": "#9568ec"
      }
    },
    "spacing": "16px",
    "edgeSize": {
      "xsmall": "4px",
      "small": "8px",
      "medium": "16px",
      "large": "24px",
      "xlarge": "40px"
    }
  },
  "button": {
    "border": {
      "radius": "16px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      }
    }
  }
};

export const darkTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#9146ff",
      "control": "#9146ff",
      "focus": "#8052d4",
      "selected": "#9146ff",
      "selected-background": "#9146ff",
      "selected-text": "#ffffff",
      "active-background": "#292339",
      "active-text": "#ac86ff",
      "background": "#222223",
      "background-back": "#191919",
      "background-front": "#222223",
      "background-contrast": "#222223",
      "border": "#494649",
      "text": "#fbf8fc",
      "text-strong": "#fbf8fc",
      "text-weak": "#9d989e",
      "text-xweak": "#746e75",
      "icon": "#9d989e",
      "placeholder": "#746e75",
      "status-critical": "#e63e40",
      "status-error": "#f76f69",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#827d83",
      "status-disabled": "#222223",
      "light-1": "#111011",
      "dark-1": "#494649",
      "light-2": "#191919",
      "dark-2": "#5e5a5f",
      "light-3": "#222223",
      "dark-3": "#827d83",
      "light-4": "#292829",
      "dark-4": "#928d94",
      "light-5": "#312f31",
      "dark-5": "#9d989e",
      "light-6": "#3b393c",
      "dark-6": "#fbf8fc"
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
        "color": "#8052d4"
      }
    },
    "spacing": "16px",
    "edgeSize": {
      "xsmall": "4px",
      "small": "8px",
      "medium": "16px",
      "large": "24px",
      "xlarge": "40px"
    }
  },
  "button": {
    "border": {
      "radius": "16px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      }
    }
  }
};

export const highContrastTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#d0c1ff",
      "control": "#d0c1ff",
      "focus": "#a388e6",
      "selected": "#d0c1ff",
      "selected-background": "#d0c1ff",
      "selected-text": "#000000",
      "active-background": "#090613",
      "active-text": "#e9e3ff",
      "background": "#080809",
      "background-back": "#020202",
      "background-front": "#080809",
      "background-contrast": "#080809",
      "border": "#838184",
      "text": "#f3f0f3",
      "text-strong": "#f3f0f3",
      "text-weak": "#e8e4e9",
      "text-xweak": "#e8e4e9",
      "icon": "#e8e4e9",
      "placeholder": "#e8e4e9",
      "status-critical": "#ffb8b1",
      "status-error": "#ffe0dc",
      "status-warning": "#fac130",
      "status-ok": "#6ce08a",
      "status-unknown": "#cdc8ce",
      "status-disabled": "#080809",
      "light-1": "#000000",
      "dark-1": "#838184",
      "light-2": "#020202",
      "dark-2": "#9b989c",
      "light-3": "#080809",
      "dark-3": "#cdc8ce",
      "light-4": "#131213",
      "dark-4": "#ddd8de",
      "light-5": "#1f1e1f",
      "dark-5": "#e8e4e9",
      "light-6": "#6b696b",
      "dark-6": "#f3f0f3"
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
        "color": "#a388e6"
      }
    },
    "spacing": "16px",
    "edgeSize": {
      "xsmall": "4px",
      "small": "8px",
      "medium": "16px",
      "large": "24px",
      "xlarge": "40px"
    }
  },
  "button": {
    "border": {
      "radius": "16px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      }
    }
  }
};

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode: Record<string, ThemeType> = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
