// @interop Grommet 기반 Navy 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#0055ff",
      "control": "#0055ff",
      "focus": "#336ee7",
      "selected": "#0055ff",
      "selected-background": "#0055ff",
      "selected-text": "#ffffff",
      "active-background": "#c7d6f1",
      "active-text": "#0241c6",
      "background": "#fcfdfd",
      "background-back": "#f7f8f9",
      "background-front": "#fcfdfd",
      "background-contrast": "#eff0f2",
      "border": "#c7cacf",
      "text": "#07080c",
      "text-strong": "#07080c",
      "text-weak": "#595d63",
      "text-xweak": "#81868f",
      "icon": "#595d63",
      "placeholder": "#81868f",
      "status-critical": "#c94c49",
      "status-error": "#9f3d3a",
      "status-warning": "#daa500",
      "status-ok": "#51c672",
      "status-unknown": "#71767f",
      "status-disabled": "#eff0f2",
      "light-1": "#fcfdfd",
      "dark-1": "#c7cacf",
      "light-2": "#f7f8f9",
      "dark-2": "#b2b6bd",
      "light-3": "#eff0f2",
      "dark-3": "#71767f",
      "light-4": "#e7e8eb",
      "dark-4": "#62676e",
      "light-5": "#dfe1e4",
      "dark-5": "#595d63",
      "light-6": "#d4d7db",
      "dark-6": "#07080c"
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
        "color": "#336ee7"
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
      "radius": "8px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "6px",
      "horizontal": "12px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "6px"
        }
      },
      "medium": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "6px",
          "horizontal": "12px"
        }
      },
      "large": {
        "border": {
          "radius": "8px"
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
      "brand": "#0055ff",
      "control": "#0055ff",
      "focus": "#1f57cf",
      "selected": "#0055ff",
      "selected-background": "#0055ff",
      "selected-text": "#ffffff",
      "active-background": "#182337",
      "active-text": "#6498ff",
      "background": "#212223",
      "background-back": "#181919",
      "background-front": "#212223",
      "background-contrast": "#212223",
      "border": "#45474b",
      "text": "#f6faff",
      "text-strong": "#f6faff",
      "text-weak": "#9599a1",
      "text-xweak": "#6c7078",
      "icon": "#9599a1",
      "placeholder": "#6c7078",
      "status-critical": "#d25450",
      "status-error": "#e47b74",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#797f87",
      "status-disabled": "#212223",
      "light-1": "#101011",
      "dark-1": "#45474b",
      "light-2": "#181919",
      "dark-2": "#585c61",
      "light-3": "#212223",
      "dark-3": "#797f87",
      "light-4": "#27282a",
      "dark-4": "#8a8f97",
      "light-5": "#2e3032",
      "dark-5": "#9599a1",
      "light-6": "#383a3d",
      "dark-6": "#f6faff"
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
        "color": "#1f57cf"
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
      "radius": "8px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "6px",
      "horizontal": "12px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "6px"
        }
      },
      "medium": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "6px",
          "horizontal": "12px"
        }
      },
      "large": {
        "border": {
          "radius": "8px"
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
      "brand": "#aecbff",
      "control": "#aecbff",
      "focus": "#7899d6",
      "selected": "#aecbff",
      "selected-background": "#aecbff",
      "selected-text": "#000000",
      "active-background": "#050811",
      "active-text": "#d9e6ff",
      "background": "#080809",
      "background-back": "#020202",
      "background-front": "#080809",
      "background-contrast": "#080809",
      "border": "#7f8185",
      "text": "#eef1f5",
      "text-strong": "#eef1f5",
      "text-weak": "#e1e5ec",
      "text-xweak": "#e1e5ec",
      "icon": "#e1e5ec",
      "placeholder": "#e1e5ec",
      "status-critical": "#ffb8b1",
      "status-error": "#ffe0dc",
      "status-warning": "#f5c24b",
      "status-ok": "#79de91",
      "status-unknown": "#c4cad2",
      "status-disabled": "#080809",
      "light-1": "#000000",
      "dark-1": "#7f8185",
      "light-2": "#020202",
      "dark-2": "#95999e",
      "light-3": "#080809",
      "dark-3": "#c4cad2",
      "light-4": "#121314",
      "dark-4": "#d5dae2",
      "light-5": "#1d1e20",
      "dark-5": "#e1e5ec",
      "light-6": "#686a6d",
      "dark-6": "#eef1f5"
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
        "color": "#7899d6"
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
      "radius": "8px"
    },
    "gap": "4px",
    "padding": {
      "vertical": "6px",
      "horizontal": "12px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "4px",
          "horizontal": "6px"
        }
      },
      "medium": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "6px",
          "horizontal": "12px"
        }
      },
      "large": {
        "border": {
          "radius": "8px"
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
