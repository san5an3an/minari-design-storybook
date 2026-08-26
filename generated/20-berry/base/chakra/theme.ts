// @interop Chakra UI 기반 Berry 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "accent": {
          "solid": {
            "value": "#81c12c"
          },
          "emphasized": {
            "value": "#72af18"
          },
          "muted": {
            "value": "#e9f5e0"
          },
          "subtle": {
            "value": "#f4faef"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#395813"
          },
          "focusRing": {
            "value": "#e36e95"
          }
        },
        "brand": {
          "solid": {
            "value": "#ea4c89"
          },
          "emphasized": {
            "value": "#bf2568"
          },
          "muted": {
            "value": "#f4d8df"
          },
          "subtle": {
            "value": "#faeaee"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#752a45"
          },
          "focusRing": {
            "value": "#e36e95"
          }
        },
        "danger": {
          "solid": {
            "value": "#a2191f"
          },
          "emphasized": {
            "value": "#8d0011"
          },
          "muted": {
            "value": "#e0c8c5"
          },
          "subtle": {
            "value": "#f0e2e0"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#5e1e1c"
          },
          "focusRing": {
            "value": "#e36e95"
          }
        },
        "success": {
          "solid": {
            "value": "#35ca68"
          },
          "emphasized": {
            "value": "#21b759"
          },
          "muted": {
            "value": "#e3f6e6"
          },
          "subtle": {
            "value": "#f0fbf2"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#175b2d"
          },
          "focusRing": {
            "value": "#e36e95"
          }
        },
        "warning": {
          "solid": {
            "value": "#daa500"
          },
          "emphasized": {
            "value": "#c59400"
          },
          "muted": {
            "value": "#f9efda"
          },
          "subtle": {
            "value": "#fdf7ec"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#654a00"
          },
          "focusRing": {
            "value": "#e36e95"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f8f7f8"
          },
          "subtle": {
            "value": "#f1f0f0"
          },
          "muted": {
            "value": "#f1f0f0"
          },
          "emphasized": {
            "value": "#7b7478"
          },
          "panel": {
            "value": "#f1f0f0"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#0b080a"
          },
          "muted": {
            "value": "#615b5e"
          },
          "subtle": {
            "value": "#615b5e"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#cdc8cb"
          },
          "muted": {
            "value": "#d9d6d7"
          },
          "emphasized": {
            "value": "#bab4b7"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "16px"
        },
        "container": {
          "value": "24px"
        }
      }
    }
  }
});

export const darkConfig = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "accent": {
          "solid": {
            "value": "#598d00"
          },
          "emphasized": {
            "value": "#659f00"
          },
          "muted": {
            "value": "#1d2516"
          },
          "subtle": {
            "value": "#161a12"
          },
          "contrast": {
            "value": "#0c1801"
          },
          "fg": {
            "value": "#96ba75"
          },
          "focusRing": {
            "value": "#cb5980"
          }
        },
        "brand": {
          "solid": {
            "value": "#ea4c89"
          },
          "emphasized": {
            "value": "#fc629a"
          },
          "muted": {
            "value": "#39252a"
          },
          "subtle": {
            "value": "#23181b"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#f79fb9"
          },
          "focusRing": {
            "value": "#cb5980"
          }
        },
        "danger": {
          "solid": {
            "value": "#a2191f"
          },
          "emphasized": {
            "value": "#e8645d"
          },
          "muted": {
            "value": "#2a1918"
          },
          "subtle": {
            "value": "#1c1312"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#e3968e"
          },
          "focusRing": {
            "value": "#cb5980"
          }
        },
        "success": {
          "solid": {
            "value": "#009342"
          },
          "emphasized": {
            "value": "#00a64c"
          },
          "muted": {
            "value": "#18261b"
          },
          "subtle": {
            "value": "#131b15"
          },
          "contrast": {
            "value": "#011a07"
          },
          "fg": {
            "value": "#7cbf8a"
          },
          "focusRing": {
            "value": "#cb5980"
          }
        },
        "warning": {
          "solid": {
            "value": "#a07800"
          },
          "emphasized": {
            "value": "#b48700"
          },
          "muted": {
            "value": "#292111"
          },
          "subtle": {
            "value": "#1c1810"
          },
          "contrast": {
            "value": "#1c1200"
          },
          "fg": {
            "value": "#cdaa60"
          },
          "focusRing": {
            "value": "#cb5980"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#191919"
          },
          "subtle": {
            "value": "#232222"
          },
          "muted": {
            "value": "#232222"
          },
          "emphasized": {
            "value": "#847c80"
          },
          "panel": {
            "value": "#232222"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#fcf8fa"
          },
          "muted": {
            "value": "#9e989b"
          },
          "subtle": {
            "value": "#9e989b"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#494648"
          },
          "muted": {
            "value": "#3c393a"
          },
          "emphasized": {
            "value": "#5f5a5c"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "16px"
        },
        "container": {
          "value": "24px"
        }
      }
    }
  }
});

export const highContrastConfig = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "accent": {
          "solid": {
            "value": "#a1da64"
          },
          "emphasized": {
            "value": "#b0ea75"
          },
          "muted": {
            "value": "#050a02"
          },
          "subtle": {
            "value": "#010201"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#d7f9b9"
          },
          "focusRing": {
            "value": "#e07597"
          }
        },
        "brand": {
          "solid": {
            "value": "#ffb5ca"
          },
          "emphasized": {
            "value": "#ffcedb"
          },
          "muted": {
            "value": "#120408"
          },
          "subtle": {
            "value": "#040102"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#fff0f3"
          },
          "focusRing": {
            "value": "#e07597"
          }
        },
        "danger": {
          "solid": {
            "value": "#ffb7b5"
          },
          "emphasized": {
            "value": "#ffcfce"
          },
          "muted": {
            "value": "#120404"
          },
          "subtle": {
            "value": "#050101"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#ffefef"
          },
          "focusRing": {
            "value": "#e07597"
          }
        },
        "success": {
          "solid": {
            "value": "#6ce08a"
          },
          "emphasized": {
            "value": "#7df09a"
          },
          "muted": {
            "value": "#020b04"
          },
          "subtle": {
            "value": "#010301"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#bffcca"
          },
          "focusRing": {
            "value": "#e07597"
          }
        },
        "warning": {
          "solid": {
            "value": "#fac130"
          },
          "emphasized": {
            "value": "#ffd478"
          },
          "muted": {
            "value": "#0d0700"
          },
          "subtle": {
            "value": "#030200"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#fff0d1"
          },
          "focusRing": {
            "value": "#e07597"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#020202"
          },
          "subtle": {
            "value": "#090808"
          },
          "muted": {
            "value": "#090808"
          },
          "emphasized": {
            "value": "#cec8cb"
          },
          "panel": {
            "value": "#090808"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f4f0f2"
          },
          "muted": {
            "value": "#e9e4e6"
          },
          "subtle": {
            "value": "#e9e4e6"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#848182"
          },
          "muted": {
            "value": "#6b696a"
          },
          "emphasized": {
            "value": "#9c989a"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "16px"
        },
        "container": {
          "value": "24px"
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
