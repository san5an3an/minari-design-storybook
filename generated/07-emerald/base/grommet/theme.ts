// @interop Grommet 기반 Emerald 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#40c68b",
      "control": "#40c68b",
      "focus": "#73cb9e",
      "selected": "#40c68b",
      "selected-background": "#40c68b",
      "selected-text": "#000000",
      "active-background": "#e4f5eb",
      "active-text": "#007d51",
      "background": "#fcfdfc",
      "background-back": "#f7f8f7",
      "background-front": "#fcfdfc",
      "background-contrast": "#eff0ef",
      "border": "#c6cbc8",
      "text": "#060907",
      "text-strong": "#060907",
      "text-weak": "#676e6a",
      "text-xweak": "#7e8882",
      "icon": "#676e6a",
      "placeholder": "#7e8882",
      "status-critical": "#c94c49",
      "status-error": "#9f3d3a",
      "status-warning": "#daa500",
      "status-ok": "#51c672",
      "status-unknown": "#a6b0ab",
      "status-disabled": "#eff0ef",
      "light-1": "#fcfdfc",
      "dark-1": "#c6cbc8",
      "light-2": "#f7f8f7",
      "dark-2": "#b0b8b3",
      "light-3": "#eff0ef",
      "dark-3": "#a6b0ab",
      "light-4": "#e7e9e8",
      "dark-4": "#969f9a",
      "light-5": "#dee1df",
      "dark-5": "#676e6a",
      "light-6": "#d4d8d5",
      "dark-6": "#060907"
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
        "color": "#73cb9e"
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
      "radius": "16px"
    },
    "gap": "8px",
    "padding": {
      "vertical": "12px",
      "horizontal": "24px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "12px"
        }
      },
      "medium": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      },
      "large": {
        "border": {
          "radius": "16px"
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
      "brand": "#00925f",
      "control": "#00925f",
      "focus": "#006d46",
      "selected": "#00925f",
      "selected-background": "#00925f",
      "selected-text": "#001a0d",
      "active-background": "#18261e",
      "active-text": "#47ac7c",
      "background": "#212222",
      "background-back": "#181918",
      "background-front": "#212222",
      "background-contrast": "#212222",
      "border": "#444846",
      "text": "#f5fbf8",
      "text-strong": "#f5fbf8",
      "text-weak": "#939b96",
      "text-xweak": "#69726c",
      "icon": "#939b96",
      "placeholder": "#69726c",
      "status-critical": "#d25450",
      "status-error": "#e47b74",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#77817b",
      "status-disabled": "#212222",
      "light-1": "#101110",
      "dark-1": "#444846",
      "light-2": "#181918",
      "dark-2": "#575d59",
      "light-3": "#212222",
      "dark-3": "#77817b",
      "light-4": "#272928",
      "dark-4": "#88918b",
      "light-5": "#2e302f",
      "dark-5": "#939b96",
      "light-6": "#373b39",
      "dark-6": "#f5fbf8"
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
        "color": "#006d46"
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
      "radius": "16px"
    },
    "gap": "8px",
    "padding": {
      "vertical": "12px",
      "horizontal": "24px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "12px"
        }
      },
      "medium": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      },
      "large": {
        "border": {
          "radius": "16px"
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
      "brand": "#6edea7",
      "control": "#6edea7",
      "focus": "#5ba981",
      "selected": "#6edea7",
      "selected-background": "#6edea7",
      "selected-text": "#000000",
      "active-background": "#020b06",
      "active-text": "#9ef6c7",
      "background": "#080808",
      "background-back": "#020202",
      "background-front": "#080808",
      "background-contrast": "#080808",
      "border": "#7e8380",
      "text": "#ecf2ee",
      "text-strong": "#ecf2ee",
      "text-weak": "#dfe7e2",
      "text-xweak": "#dfe7e2",
      "icon": "#dfe7e2",
      "placeholder": "#dfe7e2",
      "status-critical": "#ffb8b1",
      "status-error": "#ffe0dc",
      "status-warning": "#f5c24b",
      "status-ok": "#79de91",
      "status-unknown": "#c2ccc6",
      "status-disabled": "#080808",
      "light-1": "#000000",
      "dark-1": "#7e8380",
      "light-2": "#020202",
      "dark-2": "#949a96",
      "light-3": "#080808",
      "dark-3": "#c2ccc6",
      "light-4": "#121312",
      "dark-4": "#d3dcd6",
      "light-5": "#1c1f1d",
      "dark-5": "#dfe7e2",
      "light-6": "#676b68",
      "dark-6": "#ecf2ee"
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
        "color": "#5ba981"
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
      "radius": "16px"
    },
    "gap": "8px",
    "padding": {
      "vertical": "12px",
      "horizontal": "24px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "12px"
        }
      },
      "medium": {
        "border": {
          "radius": "16px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      },
      "large": {
        "border": {
          "radius": "16px"
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
