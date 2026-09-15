// @interop Grommet 기반 Slate 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#14233c",
      "control": "#14233c",
      "focus": "#202c3f",
      "selected": "#14233c",
      "selected-background": "#14233c",
      "selected-text": "#ffffff",
      "active-background": "#b9bcc1",
      "active-text": "#040e21",
      "background": "#fcfdfd",
      "background-back": "#f7f8f8",
      "background-front": "#fcfdfd",
      "background-contrast": "#eff0f1",
      "border": "#c7cacc",
      "text": "#07080a",
      "text-strong": "#07080a",
      "text-weak": "#595d60",
      "text-xweak": "#82868a",
      "icon": "#595d60",
      "placeholder": "#82868a",
      "status-critical": "#c94c49",
      "status-error": "#9f3d3a",
      "status-warning": "#daa500",
      "status-ok": "#51c672",
      "status-unknown": "#72767a",
      "status-disabled": "#eff0f1",
      "light-1": "#fcfdfd",
      "dark-1": "#c7cacc",
      "light-2": "#f7f8f8",
      "dark-2": "#b3b6b9",
      "light-3": "#eff0f1",
      "dark-3": "#72767a",
      "light-4": "#e7e9ea",
      "dark-4": "#63676a",
      "light-5": "#dfe1e2",
      "dark-5": "#595d60",
      "light-6": "#d5d7d9",
      "dark-6": "#07080a"
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
        "color": "#202c3f"
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
      "brand": "#14233c",
      "control": "#14233c",
      "focus": "#101b2d",
      "selected": "#14233c",
      "selected-background": "#14233c",
      "selected-text": "#ffffff",
      "active-background": "#0f1115",
      "active-text": "#8a9ab4",
      "background": "#222223",
      "background-back": "#181919",
      "background-front": "#222223",
      "background-contrast": "#222223",
      "border": "#454749",
      "text": "#f7fafc",
      "text-strong": "#f7fafc",
      "text-weak": "#96999d",
      "text-xweak": "#6c7174",
      "icon": "#96999d",
      "placeholder": "#6c7174",
      "status-critical": "#d25450",
      "status-error": "#e47b74",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#7a7f82",
      "status-disabled": "#222223",
      "light-1": "#101011",
      "dark-1": "#454749",
      "light-2": "#181919",
      "dark-2": "#595c5f",
      "light-3": "#222223",
      "dark-3": "#7a7f82",
      "light-4": "#282829",
      "dark-4": "#8b8f93",
      "light-5": "#2f3031",
      "dark-5": "#96999d",
      "light-6": "#393a3c",
      "dark-6": "#f7fafc"
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
        "color": "#101b2d"
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
      "brand": "#b0cbf6",
      "control": "#b0cbf6",
      "focus": "#8799b8",
      "selected": "#b0cbf6",
      "selected-background": "#b0cbf6",
      "selected-text": "#000000",
      "active-background": "#06080d",
      "active-text": "#d6e6ff",
      "background": "#080809",
      "background-back": "#020202",
      "background-front": "#080809",
      "background-contrast": "#080809",
      "border": "#7f8283",
      "text": "#eef1f3",
      "text-strong": "#eef1f3",
      "text-weak": "#e2e5e9",
      "text-xweak": "#e2e5e9",
      "icon": "#e2e5e9",
      "placeholder": "#e2e5e9",
      "status-critical": "#ffb8b1",
      "status-error": "#ffe0dc",
      "status-warning": "#f5c24b",
      "status-ok": "#79de91",
      "status-unknown": "#c6cace",
      "status-disabled": "#080809",
      "light-1": "#000000",
      "dark-1": "#7f8283",
      "light-2": "#020202",
      "dark-2": "#95999b",
      "light-3": "#080809",
      "dark-3": "#c6cace",
      "light-4": "#121313",
      "dark-4": "#d6dade",
      "light-5": "#1d1e1f",
      "dark-5": "#e2e5e9",
      "light-6": "#686a6b",
      "dark-6": "#eef1f3"
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
        "color": "#8799b8"
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
