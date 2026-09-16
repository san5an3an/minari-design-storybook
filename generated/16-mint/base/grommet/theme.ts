// @interop Grommet 기반 Mint 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#71bbb1",
      "control": "#71bbb1",
      "focus": "#8dc2ba",
      "selected": "#71bbb1",
      "selected-background": "#71bbb1",
      "selected-text": "#000000",
      "active-background": "#e8f3f1",
      "active-text": "#3d776f",
      "background": "#fcfdfd",
      "background-back": "#f7f8f8",
      "background-front": "#fcfdfd",
      "background-contrast": "#eff0f0",
      "border": "#c8cac9",
      "text": "#070808",
      "text-strong": "#070808",
      "text-weak": "#6a6d6c",
      "text-xweak": "#828684",
      "icon": "#6a6d6c",
      "placeholder": "#828684",
      "status-critical": "#c84d42",
      "status-error": "#9e3d35",
      "status-warning": "#daa500",
      "status-ok": "#51c672",
      "status-unknown": "#aaafac",
      "status-disabled": "#eff0f0",
      "light-1": "#fcfdfd",
      "dark-1": "#c8cac9",
      "light-2": "#f7f8f8",
      "dark-2": "#b3b7b5",
      "light-3": "#eff0f0",
      "dark-3": "#aaafac",
      "light-4": "#e8e9e8",
      "dark-4": "#999d9b",
      "light-5": "#dfe1e0",
      "dark-5": "#6a6d6c",
      "light-6": "#d5d7d6",
      "dark-6": "#070808"
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
        "color": "#8dc2ba"
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
  },
  "text": {
    "xsmall": {
      "size": "0.75rem",
      "height": "16px"
    },
    "small": {
      "size": "0.9375rem",
      "height": "20px"
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
      "size": "1.1875rem",
      "height": "23px"
    },
    "xxlarge": {
      "size": "1.3125rem",
      "height": "25px"
    },
    "2xl": {
      "size": "1.3125rem",
      "height": "25px"
    },
    "3xl": {
      "size": "1.5625rem",
      "height": "30px"
    },
    "4xl": {
      "size": "1.875rem",
      "height": "36px"
    },
    "5xl": {
      "size": "1.875rem",
      "height": "36px"
    },
    "6xl": {
      "size": "1.875rem",
      "height": "36px"
    }
  }
};

export const darkTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#418b82",
      "control": "#418b82",
      "focus": "#33665f",
      "selected": "#418b82",
      "selected-background": "#418b82",
      "selected-text": "#051815",
      "active-background": "#1c2423",
      "active-text": "#6aa49c",
      "background": "#222222",
      "background-back": "#181919",
      "background-front": "#222222",
      "background-contrast": "#222222",
      "border": "#464847",
      "text": "#f7faf9",
      "text-strong": "#f7faf9",
      "text-weak": "#969a98",
      "text-xweak": "#6c716e",
      "icon": "#969a98",
      "placeholder": "#6c716e",
      "status-critical": "#d25549",
      "status-error": "#e47c6f",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#7b7f7d",
      "status-disabled": "#222222",
      "light-1": "#101010",
      "dark-1": "#464847",
      "light-2": "#181919",
      "dark-2": "#595c5b",
      "light-3": "#222222",
      "dark-3": "#7b7f7d",
      "light-4": "#282928",
      "dark-4": "#8b8f8d",
      "light-5": "#2f302f",
      "dark-5": "#969a98",
      "light-6": "#393a3a",
      "dark-6": "#f7faf9"
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
        "color": "#33665f"
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
  },
  "text": {
    "xsmall": {
      "size": "0.75rem",
      "height": "16px"
    },
    "small": {
      "size": "0.9375rem",
      "height": "20px"
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
      "size": "1.1875rem",
      "height": "23px"
    },
    "xxlarge": {
      "size": "1.3125rem",
      "height": "25px"
    },
    "2xl": {
      "size": "1.3125rem",
      "height": "25px"
    },
    "3xl": {
      "size": "1.5625rem",
      "height": "30px"
    },
    "4xl": {
      "size": "1.875rem",
      "height": "36px"
    },
    "5xl": {
      "size": "1.875rem",
      "height": "36px"
    },
    "6xl": {
      "size": "1.875rem",
      "height": "36px"
    }
  }
};

export const highContrastTheme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#94d6cc",
      "control": "#94d6cc",
      "focus": "#73a29b",
      "selected": "#94d6cc",
      "selected-background": "#94d6cc",
      "selected-text": "#000000",
      "active-background": "#040a09",
      "active-text": "#baefe7",
      "background": "#080808",
      "background-back": "#020202",
      "background-front": "#080808",
      "background-contrast": "#080808",
      "border": "#7f8280",
      "text": "#eff1f0",
      "text-strong": "#eff1f0",
      "text-weak": "#e2e6e4",
      "text-xweak": "#e2e6e4",
      "icon": "#e2e6e4",
      "placeholder": "#e2e6e4",
      "status-critical": "#ffb8ad",
      "status-error": "#ffe0db",
      "status-warning": "#f5c24b",
      "status-ok": "#79de91",
      "status-unknown": "#c6cbc8",
      "status-disabled": "#080808",
      "light-1": "#000000",
      "dark-1": "#7f8280",
      "light-2": "#020202",
      "dark-2": "#969997",
      "light-3": "#080808",
      "dark-3": "#c6cbc8",
      "light-4": "#121312",
      "dark-4": "#d7dbd9",
      "light-5": "#1d1e1e",
      "dark-5": "#e2e6e4",
      "light-6": "#686a69",
      "dark-6": "#eff1f0"
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
        "color": "#73a29b"
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
  },
  "text": {
    "xsmall": {
      "size": "0.75rem",
      "height": "16px"
    },
    "small": {
      "size": "0.9375rem",
      "height": "20px"
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
      "size": "1.1875rem",
      "height": "23px"
    },
    "xxlarge": {
      "size": "1.3125rem",
      "height": "25px"
    },
    "2xl": {
      "size": "1.3125rem",
      "height": "25px"
    },
    "3xl": {
      "size": "1.5625rem",
      "height": "30px"
    },
    "4xl": {
      "size": "1.875rem",
      "height": "36px"
    },
    "5xl": {
      "size": "1.875rem",
      "height": "36px"
    },
    "6xl": {
      "size": "1.875rem",
      "height": "36px"
    }
  }
};

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode: Record<string, ThemeType> = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
