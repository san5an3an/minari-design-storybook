// @interop Grommet 기반 Rust 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#9e6954",
      "control": "#9e6954",
      "focus": "#d6ab9a",
      "selected": "#9e6954",
      "selected-background": "#9e6954",
      "selected-text": "#ffffff",
      "active-background": "#f8eeea",
      "active-text": "#7c5342",
      "background": "#fdfcfc",
      "background-back": "#f9f7f7",
      "background-front": "#fdfcfc",
      "background-contrast": "#f2efee",
      "border": "#d0c8c4",
      "text": "#0c0706",
      "text-strong": "#0c0706",
      "text-weak": "#655a56",
      "text-xweak": "#91827c",
      "icon": "#655a56",
      "placeholder": "#91827c",
      "status-critical": "#eb0036",
      "status-error": "#ba0f2c",
      "status-warning": "#daa500",
      "status-ok": "#51c672",
      "status-unknown": "#81736d",
      "status-disabled": "#f2efee",
      "light-1": "#fdfcfc",
      "dark-1": "#d0c8c4",
      "light-2": "#f9f7f7",
      "dark-2": "#bfb3ae",
      "light-3": "#f2efee",
      "dark-3": "#81736d",
      "light-4": "#ebe7e6",
      "dark-4": "#71645e",
      "light-5": "#e4dfdd",
      "dark-5": "#655a56",
      "light-6": "#dcd5d2",
      "dark-6": "#0c0706"
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
        "color": "#d6ab9a"
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
      "radius": "4px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "4px"
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
      "brand": "#a7715c",
      "control": "#a7715c",
      "focus": "#775142",
      "selected": "#a7715c",
      "selected-background": "#a7715c",
      "selected-text": "#1e100a",
      "active-background": "#27201e",
      "active-text": "#bd8f7d",
      "background": "#232221",
      "background-back": "#191818",
      "background-front": "#232221",
      "background-contrast": "#232221",
      "border": "#4d4542",
      "text": "#fff8f5",
      "text-strong": "#fff8f5",
      "text-weak": "#a39792",
      "text-xweak": "#7b6e68",
      "icon": "#a39792",
      "placeholder": "#7b6e68",
      "status-critical": "#eb0036",
      "status-error": "#ff6a6d",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#8a7c75",
      "status-disabled": "#232221",
      "light-1": "#111010",
      "dark-1": "#4d4542",
      "light-2": "#191818",
      "dark-2": "#635955",
      "light-3": "#232221",
      "dark-3": "#8a7c75",
      "light-4": "#2b2826",
      "dark-4": "#9a8c86",
      "light-5": "#332f2d",
      "dark-5": "#a39792",
      "light-6": "#3e3936",
      "dark-6": "#fff8f5"
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
        "color": "#775142"
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
      "radius": "4px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "4px"
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
      "brand": "#f2bea8",
      "control": "#f2bea8",
      "focus": "#b59081",
      "selected": "#f2bea8",
      "selected-background": "#f2bea8",
      "selected-text": "#000000",
      "active-background": "#0c0705",
      "active-text": "#ffdfd2",
      "background": "#090807",
      "background-back": "#020202",
      "background-front": "#090807",
      "background-contrast": "#090807",
      "border": "#87807c",
      "text": "#f7efec",
      "text-strong": "#f7efec",
      "text-weak": "#efe3de",
      "text-xweak": "#efe3de",
      "icon": "#efe3de",
      "placeholder": "#efe3de",
      "status-critical": "#ffb8b4",
      "status-error": "#ffe0de",
      "status-warning": "#f5c24b",
      "status-ok": "#79de91",
      "status-unknown": "#d5c7c0",
      "status-disabled": "#090807",
      "light-1": "#000000",
      "dark-1": "#87807c",
      "light-2": "#020202",
      "dark-2": "#a19692",
      "light-3": "#090807",
      "dark-3": "#d5c7c0",
      "light-4": "#141211",
      "dark-4": "#e5d7d1",
      "light-5": "#211d1c",
      "dark-5": "#efe3de",
      "light-6": "#6e6866",
      "dark-6": "#f7efec"
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
        "color": "#b59081"
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
      "radius": "4px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "8px",
      "horizontal": "16px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "8px"
        }
      },
      "medium": {
        "border": {
          "radius": "4px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "16px"
        }
      },
      "large": {
        "border": {
          "radius": "4px"
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
