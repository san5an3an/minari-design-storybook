// @interop Grommet 기반 Moss 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#73bbad",
      "control": "#73bbad",
      "focus": "#8ec2b7",
      "selected": "#73bbad",
      "selected-background": "#73bbad",
      "selected-text": "#000000",
      "active-background": "#e8f3f0",
      "active-text": "#3f776c",
      "background": "#fdfdfc",
      "background-back": "#f7f8f7",
      "background-front": "#fdfdfc",
      "background-contrast": "#f0f0ef",
      "border": "#c8cbc6",
      "text": "#080906",
      "text-strong": "#080906",
      "text-weak": "#6a6e68",
      "text-xweak": "#838780",
      "icon": "#6a6e68",
      "placeholder": "#838780",
      "status-critical": "#c94c49",
      "status-error": "#9f3d3a",
      "status-warning": "#daa500",
      "status-ok": "#51c672",
      "status-unknown": "#abafa7",
      "status-disabled": "#f0f0ef",
      "light-1": "#fdfdfc",
      "dark-1": "#c8cbc6",
      "light-2": "#f7f8f7",
      "dark-2": "#b4b7b1",
      "light-3": "#f0f0ef",
      "dark-3": "#abafa7",
      "light-4": "#e8e9e7",
      "dark-4": "#9a9e96",
      "light-5": "#e0e1de",
      "dark-5": "#6a6e68",
      "light-6": "#d6d7d4",
      "dark-6": "#080906"
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
        "color": "#8ec2b7"
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
  }
};

export const darkTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#438b7e",
      "control": "#438b7e",
      "focus": "#34665d",
      "selected": "#438b7e",
      "selected-background": "#438b7e",
      "selected-text": "#051814",
      "active-background": "#1c2422",
      "active-text": "#6ba499",
      "background": "#222221",
      "background-back": "#191918",
      "background-front": "#222221",
      "background-contrast": "#222221",
      "border": "#464844",
      "text": "#f8faf6",
      "text-strong": "#f8faf6",
      "text-weak": "#979a94",
      "text-xweak": "#6d716a",
      "icon": "#979a94",
      "placeholder": "#6d716a",
      "status-critical": "#d25450",
      "status-error": "#e47b74",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#7c8078",
      "status-disabled": "#222221",
      "light-1": "#101010",
      "dark-1": "#464844",
      "light-2": "#191918",
      "dark-2": "#5a5c57",
      "light-3": "#222221",
      "dark-3": "#7c8078",
      "light-4": "#282927",
      "dark-4": "#8c9089",
      "light-5": "#2f302e",
      "dark-5": "#979a94",
      "light-6": "#393a38",
      "dark-6": "#f8faf6"
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
        "color": "#34665d"
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
  }
};

export const highContrastTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#96d6c9",
      "control": "#96d6c9",
      "focus": "#74a298",
      "selected": "#96d6c9",
      "selected-background": "#96d6c9",
      "selected-text": "#000000",
      "active-background": "#040a08",
      "active-text": "#bbefe4",
      "background": "#080808",
      "background-back": "#020202",
      "background-front": "#080808",
      "background-contrast": "#080808",
      "border": "#80827e",
      "text": "#eff1ed",
      "text-strong": "#eff1ed",
      "text-weak": "#e3e6e0",
      "text-xweak": "#e3e6e0",
      "icon": "#e3e6e0",
      "placeholder": "#e3e6e0",
      "status-critical": "#ffb8b1",
      "status-error": "#ffe0dc",
      "status-warning": "#f5c24b",
      "status-ok": "#79de91",
      "status-unknown": "#c7cbc3",
      "status-disabled": "#080808",
      "light-1": "#000000",
      "dark-1": "#80827e",
      "light-2": "#020202",
      "dark-2": "#969994",
      "light-3": "#080808",
      "dark-3": "#c7cbc3",
      "light-4": "#121312",
      "dark-4": "#d7dbd4",
      "light-5": "#1d1e1d",
      "dark-5": "#e3e6e0",
      "light-6": "#686a67",
      "dark-6": "#eff1ed"
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
        "color": "#74a298"
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
  }
};

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode: Record<string, ThemeType> = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
