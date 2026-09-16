// @interop Grommet 기반 Fog 테마 정의

import type { ThemeType } from "grommet";

export const theme: ThemeType = {
  "global": {
    "colors": {
      "brand": "#1d2d35",
      "control": "#1d2d35",
      "focus": "#29353b",
      "selected": "#1d2d35",
      "selected-background": "#1d2d35",
      "selected-text": "#ffffff",
      "active-background": "#bcbfc1",
      "active-text": "#0f1c22",
      "background": "#fcfdfd",
      "background-back": "#f7f8f8",
      "background-front": "#fcfdfd",
      "background-contrast": "#eff0f0",
      "border": "#c8cacb",
      "text": "#070809",
      "text-strong": "#070809",
      "text-weak": "#6a6d6f",
      "text-xweak": "#828688",
      "icon": "#6a6d6f",
      "placeholder": "#828688",
      "status-critical": "#c94c49",
      "status-error": "#9f3d3a",
      "status-warning": "#daa500",
      "status-ok": "#51c672",
      "status-unknown": "#aaafb0",
      "status-disabled": "#eff0f0",
      "light-1": "#fcfdfd",
      "dark-1": "#c8cacb",
      "light-2": "#f7f8f8",
      "dark-2": "#b3b6b8",
      "light-3": "#eff0f0",
      "dark-3": "#aaafb0",
      "light-4": "#e7e9e9",
      "dark-4": "#999d9f",
      "light-5": "#dfe1e1",
      "dark-5": "#6a6d6f",
      "light-6": "#d5d7d8",
      "dark-6": "#070809"
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
        "color": "#29353b"
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
      "radius": "8px"
    },
    "gap": "8px",
    "padding": {
      "vertical": "12px",
      "horizontal": "24px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "12px"
        }
      },
      "medium": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      },
      "large": {
        "border": {
          "radius": "8px"
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
      "brand": "#1d2d35",
      "control": "#1d2d35",
      "focus": "#18242a",
      "selected": "#1d2d35",
      "selected-background": "#1d2d35",
      "selected-text": "#ffffff",
      "active-background": "#111314",
      "active-text": "#8d9ca4",
      "background": "#222222",
      "background-back": "#181919",
      "background-front": "#222222",
      "background-contrast": "#222222",
      "border": "#454848",
      "text": "#f7fafb",
      "text-strong": "#f7fafb",
      "text-weak": "#969a9b",
      "text-xweak": "#6c7172",
      "icon": "#969a9b",
      "placeholder": "#6c7172",
      "status-critical": "#d25450",
      "status-error": "#e47b74",
      "status-warning": "#a07800",
      "status-ok": "#009342",
      "status-unknown": "#7a7f81",
      "status-disabled": "#222222",
      "light-1": "#101011",
      "dark-1": "#454848",
      "light-2": "#181919",
      "dark-2": "#595c5d",
      "light-3": "#222222",
      "dark-3": "#7a7f81",
      "light-4": "#282829",
      "dark-4": "#8b8f91",
      "light-5": "#2f3030",
      "dark-5": "#969a9b",
      "light-6": "#393a3b",
      "dark-6": "#f7fafb"
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
        "color": "#18242a"
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
      "radius": "8px"
    },
    "gap": "8px",
    "padding": {
      "vertical": "12px",
      "horizontal": "24px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "12px"
        }
      },
      "medium": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      },
      "large": {
        "border": {
          "radius": "8px"
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
      "brand": "#9bd1ec",
      "control": "#9bd1ec",
      "focus": "#789eb1",
      "selected": "#9bd1ec",
      "selected-background": "#9bd1ec",
      "selected-text": "#000000",
      "active-background": "#05090c",
      "active-text": "#c2eaff",
      "background": "#080808",
      "background-back": "#020202",
      "background-front": "#080808",
      "background-contrast": "#080808",
      "border": "#7f8282",
      "text": "#eef1f2",
      "text-strong": "#eef1f2",
      "text-weak": "#e2e6e7",
      "text-xweak": "#e2e6e7",
      "icon": "#e2e6e7",
      "placeholder": "#e2e6e7",
      "status-critical": "#ffb8b1",
      "status-error": "#ffe0dc",
      "status-warning": "#f5c24b",
      "status-ok": "#79de91",
      "status-unknown": "#c6cacc",
      "status-disabled": "#080808",
      "light-1": "#000000",
      "dark-1": "#7f8282",
      "light-2": "#020202",
      "dark-2": "#95999a",
      "light-3": "#080808",
      "dark-3": "#c6cacc",
      "light-4": "#121313",
      "dark-4": "#d6dadc",
      "light-5": "#1d1e1f",
      "dark-5": "#e2e6e7",
      "light-6": "#686a6a",
      "dark-6": "#eef1f2"
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
        "color": "#789eb1"
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
      "radius": "8px"
    },
    "gap": "8px",
    "padding": {
      "vertical": "12px",
      "horizontal": "24px"
    },
    "size": {
      "small": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "8px",
          "horizontal": "12px"
        }
      },
      "medium": {
        "border": {
          "radius": "8px"
        },
        "pad": {
          "vertical": "12px",
          "horizontal": "24px"
        }
      },
      "large": {
        "border": {
          "radius": "8px"
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
