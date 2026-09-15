// @interop Grommet 기반 Crimson 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#7f1d1d",
      "control": "#7f1d1d",
      "focus": "#7e3732",
      "selected": "#7f1d1d",
      "selected-background": "#7f1d1d",
      "selected-text": "#ffffff",
      "active-background": "#d6c4c1",
      "active-text": "#5a0d0f",
      "background": "#fdfdfd",
      "background-back": "#f8f7f8",
      "background-front": "#fdfdfd",
      "background-contrast": "#f1f0f0",
      "border": "#ccc9c9",
      "text": "#0a0809",
      "text-strong": "#0a0809",
      "text-weak": "#5f5b5c",
      "text-xweak": "#898585",
      "icon": "#5f5b5c",
      "placeholder": "#898585",
      "status-critical": "#e50914",
      "status-error": "#b51113",
      "status-warning": "#daa500",
      "status-ok": "#35ca68",
      "status-unknown": "#797575",
      "status-disabled": "#f1f0f0",
      "light-1": "#fdfdfd",
      "dark-1": "#ccc9c9",
      "light-2": "#f8f7f8",
      "dark-2": "#b8b5b5",
      "light-3": "#f1f0f0",
      "dark-3": "#797575",
      "light-4": "#e9e8e8",
      "dark-4": "#696565",
      "light-5": "#e2e0e0",
      "dark-5": "#5f5b5c",
      "light-6": "#d8d6d6",
      "dark-6": "#0a0809"
    },
    "control": {
      "border": {
        "width": "1px",
        "radius": "4px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#7e3732"
      }
    },
    "spacing": "12px",
    "edgeSize": {
      "xsmall": "4px",
      "small": "6px",
      "medium": "12px",
      "large": "20px",
      "xlarge": "32px"
    }
  },
  "button": {
    "border": {
      "radius": "4px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "6px",
      "horizontal": "12px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "6px"
        }
      },
      "medium": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "6px",
          "horizontal": "12px"
        }
      },
      "large": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "20px"
        }
      }
    }
  }
};

export const darkTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#7f1d1d",
      "control": "#7f1d1d",
      "focus": "#682320",
      "selected": "#7f1d1d",
      "selected-background": "#7f1d1d",
      "selected-text": "#ffffff",
      "active-background": "#231615",
      "active-text": "#d9827a",
      "background": "#222222",
      "background-back": "#191919",
      "background-front": "#222222",
      "background-contrast": "#222222",
      "border": "#494647",
      "text": "#fcf8f9",
      "text-strong": "#fcf8f9",
      "text-weak": "#9c9898",
      "text-xweak": "#736f6f",
      "icon": "#9c9898",
      "placeholder": "#736f6f",
      "status-critical": "#e50914",
      "status-error": "#ff6b5d",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#827d7d",
      "status-disabled": "#222222",
      "light-1": "#111010",
      "dark-1": "#494647",
      "light-2": "#191919",
      "dark-2": "#5e5a5b",
      "light-3": "#222222",
      "dark-3": "#827d7d",
      "light-4": "#292828",
      "dark-4": "#928d8e",
      "light-5": "#312f2f",
      "dark-5": "#9c9898",
      "light-6": "#3b393a",
      "dark-6": "#fcf8f9"
    },
    "control": {
      "border": {
        "width": "1px",
        "radius": "4px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#682320"
      }
    },
    "spacing": "12px",
    "edgeSize": {
      "xsmall": "4px",
      "small": "6px",
      "medium": "12px",
      "large": "20px",
      "xlarge": "32px"
    }
  },
  "button": {
    "border": {
      "radius": "4px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "6px",
      "horizontal": "12px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "6px"
        }
      },
      "medium": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "6px",
          "horizontal": "12px"
        }
      },
      "large": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "20px"
        }
      }
    }
  }
};

export const highContrastTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#ffb6c2",
      "control": "#ffb6c2",
      "focus": "#e3758c",
      "selected": "#ffb6c2",
      "selected-background": "#ffb6c2",
      "selected-text": "#000000",
      "active-background": "#120406",
      "active-text": "#ffdfe4",
      "background": "#080808",
      "background-back": "#020202",
      "background-front": "#080808",
      "background-contrast": "#080808",
      "border": "#838181",
      "text": "#f3f0f1",
      "text-strong": "#f3f0f1",
      "text-weak": "#e8e4e5",
      "text-xweak": "#e8e4e5",
      "icon": "#e8e4e5",
      "placeholder": "#e8e4e5",
      "status-critical": "#ffb8ad",
      "status-error": "#ffe0db",
      "status-warning": "#fac130",
      "status-ok": "#6ce08a",
      "status-unknown": "#cdc9c9",
      "status-disabled": "#080808",
      "light-1": "#000000",
      "dark-1": "#838181",
      "light-2": "#020202",
      "dark-2": "#9b9898",
      "light-3": "#080808",
      "dark-3": "#cdc9c9",
      "light-4": "#131212",
      "dark-4": "#ddd9d9",
      "light-5": "#1f1e1e",
      "dark-5": "#e8e4e5",
      "light-6": "#6b696a",
      "dark-6": "#f3f0f1"
    },
    "control": {
      "border": {
        "width": "2px",
        "radius": "4px",
        "color": "border"
      }
    },
    "focus": {
      "border": {
        "color": "#e3758c"
      }
    },
    "spacing": "12px",
    "edgeSize": {
      "xsmall": "4px",
      "small": "6px",
      "medium": "12px",
      "large": "20px",
      "xlarge": "32px"
    }
  },
  "button": {
    "border": {
      "radius": "4px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "6px",
      "horizontal": "12px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "6px"
        }
      },
      "medium": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "6px",
          "horizontal": "12px"
        }
      },
      "large": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "20px"
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
