// @interop Grommet 기반 Jade 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#47a248",
      "control": "#47a248",
      "focus": "#68a866",
      "selected": "#47a248",
      "selected-background": "#47a248",
      "selected-text": "#ffffff",
      "active-background": "#d6e3d5",
      "active-text": "#29702a",
      "background": "#fcfdfc",
      "background-back": "#f7f8f7",
      "background-front": "#fcfdfc",
      "background-contrast": "#eff0ef",
      "border": "#c7cbc8",
      "text": "#070807",
      "text-strong": "#070807",
      "text-weak": "#696e6a",
      "text-xweak": "#828783",
      "icon": "#696e6a",
      "placeholder": "#828783",
      "status-critical": "#c84d42",
      "status-error": "#9e3d35",
      "status-warning": "#daa500",
      "status-ok": "#51c672",
      "status-unknown": "#a9b0aa",
      "status-disabled": "#eff0ef",
      "light-1": "#fcfdfc",
      "dark-1": "#c7cbc8",
      "light-2": "#f7f8f7",
      "dark-2": "#b3b7b3",
      "light-3": "#eff0ef",
      "dark-3": "#a9b0aa",
      "light-4": "#e7e9e8",
      "dark-4": "#999e99",
      "light-5": "#dfe1df",
      "dark-5": "#696e6a",
      "light-6": "#d5d8d5",
      "dark-6": "#070807"
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
        "color": "#68a866"
      }
    },
    "spacing": "24px",
    "edgeSize": {
      "xsmall": "8px",
      "small": "12px",
      "medium": "24px",
      "large": "40px",
      "xlarge": "64px"
    }
  },
  "button": {
    "border": {
      "radius": "12px"
    },
    "gap": "8px",
    "padding": {
      "vertical": "12px",
      "horizontal": "24px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "12px"
        }
      },
      "medium": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      },
      "large": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "16px",
          "horizontal": "40px"
        }
      }
    }
  }
};

export const darkTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#47a248",
      "control": "#47a248",
      "focus": "#539252",
      "selected": "#47a248",
      "selected-background": "#47a248",
      "selected-text": "#ffffff",
      "active-background": "#232e23",
      "active-text": "#73bb72",
      "background": "#222222",
      "background-back": "#181918",
      "background-front": "#222222",
      "background-contrast": "#222222",
      "border": "#454846",
      "text": "#f7faf7",
      "text-strong": "#f7faf7",
      "text-weak": "#959a96",
      "text-xweak": "#6c726d",
      "icon": "#959a96",
      "placeholder": "#6c726d",
      "status-critical": "#d25549",
      "status-error": "#e47c6f",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#7a807b",
      "status-disabled": "#222222",
      "light-1": "#101010",
      "dark-1": "#454846",
      "light-2": "#181918",
      "dark-2": "#585d59",
      "light-3": "#222222",
      "dark-3": "#7a807b",
      "light-4": "#282928",
      "dark-4": "#8a908b",
      "light-5": "#2f302f",
      "dark-5": "#959a96",
      "light-6": "#383b39",
      "dark-6": "#f7faf7"
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
        "color": "#539252"
      }
    },
    "spacing": "24px",
    "edgeSize": {
      "xsmall": "8px",
      "small": "12px",
      "medium": "24px",
      "large": "40px",
      "xlarge": "64px"
    }
  },
  "button": {
    "border": {
      "radius": "12px"
    },
    "gap": "8px",
    "padding": {
      "vertical": "12px",
      "horizontal": "24px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "12px"
        }
      },
      "medium": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      },
      "large": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "16px",
          "horizontal": "40px"
        }
      }
    }
  }
};

export const highContrastTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#90db8d",
      "control": "#90db8d",
      "focus": "#71a66f",
      "selected": "#90db8d",
      "selected-background": "#90db8d",
      "selected-text": "#000000",
      "active-background": "#040a04",
      "active-text": "#b6f4b3",
      "background": "#080808",
      "background-back": "#020202",
      "background-front": "#080808",
      "background-contrast": "#080808",
      "border": "#7f827f",
      "text": "#eef1ee",
      "text-strong": "#eef1ee",
      "text-weak": "#e1e6e2",
      "text-xweak": "#e1e6e2",
      "icon": "#e1e6e2",
      "placeholder": "#e1e6e2",
      "status-critical": "#ffb8ad",
      "status-error": "#ffe0db",
      "status-warning": "#f5c24b",
      "status-ok": "#79de91",
      "status-unknown": "#c5cbc6",
      "status-disabled": "#080808",
      "light-1": "#000000",
      "dark-1": "#7f827f",
      "light-2": "#020202",
      "dark-2": "#959a96",
      "light-3": "#080808",
      "dark-3": "#c5cbc6",
      "light-4": "#121312",
      "dark-4": "#d5dbd6",
      "light-5": "#1d1e1d",
      "dark-5": "#e1e6e2",
      "light-6": "#676a68",
      "dark-6": "#eef1ee"
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
        "color": "#71a66f"
      }
    },
    "spacing": "24px",
    "edgeSize": {
      "xsmall": "8px",
      "small": "12px",
      "medium": "24px",
      "large": "40px",
      "xlarge": "64px"
    }
  },
  "button": {
    "border": {
      "radius": "12px"
    },
    "gap": "8px",
    "padding": {
      "vertical": "12px",
      "horizontal": "24px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "12px"
        }
      },
      "medium": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      },
      "large": {
        "border": {
          "radius": "12px"
        },
        "pad": {
          "vertical": "16px",
          "horizontal": "40px"
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
