// @interop Chakra UI 기반 Cobalt 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#0052cc"
          },
          "emphasized": {
            "value": "#0044ad"
          },
          "muted": {
            "value": "#c4d1e6"
          },
          "subtle": {
            "value": "#e0e7f3"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#163975"
          },
          "focusRing": {
            "value": "#3064bd"
          }
        },
        "danger": {
          "solid": {
            "value": "#c84d42"
          },
          "emphasized": {
            "value": "#b43d34"
          },
          "muted": {
            "value": "#ffebe8"
          },
          "subtle": {
            "value": "#fff5f4"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#7b3c35"
          },
          "focusRing": {
            "value": "#3064bd"
          }
        },
        "success": {
          "solid": {
            "value": "#51c672"
          },
          "emphasized": {
            "value": "#42b464"
          },
          "muted": {
            "value": "#e5f5e7"
          },
          "subtle": {
            "value": "#f1fbf3"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#225932"
          },
          "focusRing": {
            "value": "#3064bd"
          }
        },
        "warning": {
          "solid": {
            "value": "#ffbb00"
          },
          "emphasized": {
            "value": "#e9ab00"
          },
          "muted": {
            "value": "#fbf0dd"
          },
          "subtle": {
            "value": "#fdf7ec"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#694a00"
          },
          "focusRing": {
            "value": "#3064bd"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f7f8f8"
          },
          "subtle": {
            "value": "#eff0f1"
          },
          "muted": {
            "value": "#eff0f1"
          },
          "emphasized": {
            "value": "#73767c"
          },
          "panel": {
            "value": "#eff0f1"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#08080b"
          },
          "muted": {
            "value": "#5a5d61"
          },
          "subtle": {
            "value": "#5a5d61"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c8cacd"
          },
          "muted": {
            "value": "#d5d7da"
          },
          "emphasized": {
            "value": "#b3b6bb"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "8px"
        },
        "container": {
          "value": "12px"
        }
      }
    }
  }
});

export const darkConfig = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#0052cc"
          },
          "emphasized": {
            "value": "#498cff"
          },
          "muted": {
            "value": "#17202f"
          },
          "subtle": {
            "value": "#11161f"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#84adf3"
          },
          "focusRing": {
            "value": "#1b4ea6"
          }
        },
        "danger": {
          "solid": {
            "value": "#d25549"
          },
          "emphasized": {
            "value": "#e3685c"
          },
          "muted": {
            "value": "#2d1d1b"
          },
          "subtle": {
            "value": "#1f1615"
          },
          "contrast": {
            "value": "#260907"
          },
          "fg": {
            "value": "#e39c92"
          },
          "focusRing": {
            "value": "#1b4ea6"
          }
        },
        "success": {
          "solid": {
            "value": "#009342"
          },
          "emphasized": {
            "value": "#2da354"
          },
          "muted": {
            "value": "#19261c"
          },
          "subtle": {
            "value": "#141b15"
          },
          "contrast": {
            "value": "#011a07"
          },
          "fg": {
            "value": "#84bd8f"
          },
          "focusRing": {
            "value": "#1b4ea6"
          }
        },
        "warning": {
          "solid": {
            "value": "#ffbb00"
          },
          "emphasized": {
            "value": "#ffd381"
          },
          "muted": {
            "value": "#403728"
          },
          "subtle": {
            "value": "#26211a"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#ffefd3"
          },
          "focusRing": {
            "value": "#1b4ea6"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#181919"
          },
          "subtle": {
            "value": "#222223"
          },
          "muted": {
            "value": "#222223"
          },
          "emphasized": {
            "value": "#7b7f85"
          },
          "panel": {
            "value": "#222223"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f8f9fd"
          },
          "muted": {
            "value": "#979a9f"
          },
          "subtle": {
            "value": "#979a9f"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#46474a"
          },
          "muted": {
            "value": "#393a3c"
          },
          "emphasized": {
            "value": "#595b60"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "8px"
        },
        "container": {
          "value": "12px"
        }
      }
    }
  }
});

export const highContrastConfig = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#abcbff"
          },
          "emphasized": {
            "value": "#c5dbff"
          },
          "muted": {
            "value": "#040811"
          },
          "subtle": {
            "value": "#010204"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#e9f1ff"
          },
          "focusRing": {
            "value": "#7699d5"
          }
        },
        "danger": {
          "solid": {
            "value": "#ffb8ad"
          },
          "emphasized": {
            "value": "#ffcfc8"
          },
          "muted": {
            "value": "#100504"
          },
          "subtle": {
            "value": "#040101"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#ffefed"
          },
          "focusRing": {
            "value": "#7699d5"
          }
        },
        "success": {
          "solid": {
            "value": "#79de91"
          },
          "emphasized": {
            "value": "#8ceda2"
          },
          "muted": {
            "value": "#030b04"
          },
          "subtle": {
            "value": "#010301"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#c6facf"
          },
          "focusRing": {
            "value": "#7699d5"
          }
        },
        "warning": {
          "solid": {
            "value": "#f5c24b"
          },
          "emphasized": {
            "value": "#ffd476"
          },
          "muted": {
            "value": "#0c0701"
          },
          "subtle": {
            "value": "#030200"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#ffefcf"
          },
          "focusRing": {
            "value": "#7699d5"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#020202"
          },
          "subtle": {
            "value": "#080809"
          },
          "muted": {
            "value": "#080809"
          },
          "emphasized": {
            "value": "#c7cad0"
          },
          "panel": {
            "value": "#080809"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#eff1f4"
          },
          "muted": {
            "value": "#e3e5ea"
          },
          "subtle": {
            "value": "#e3e5ea"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#7f8184"
          },
          "muted": {
            "value": "#686a6c"
          },
          "emphasized": {
            "value": "#96999d"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "8px"
        },
        "container": {
          "value": "12px"
        }
      }
    }
  }
});

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode = {
  "light": config,
  "dark": darkConfig,
  "high-contrast": highContrastConfig,
};
