// @interop Chakra UI 기반 Crimson 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#7f1d1d"
          },
          "emphasized": {
            "value": "#6c0a0f"
          },
          "muted": {
            "value": "#d6c4c1"
          },
          "subtle": {
            "value": "#ebe0df"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#441513"
          },
          "focusRing": {
            "value": "#7e3732"
          }
        },
        "danger": {
          "solid": {
            "value": "#e50914"
          },
          "emphasized": {
            "value": "#ca000d"
          },
          "muted": {
            "value": "#f2d1cc"
          },
          "subtle": {
            "value": "#f9e7e4"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#7b1e19"
          },
          "focusRing": {
            "value": "#7e3732"
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
            "value": "#7e3732"
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
            "value": "#7e3732"
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
            "value": "#797575"
          },
          "panel": {
            "value": "#f1f0f0"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#0a0809"
          },
          "muted": {
            "value": "#5f5b5c"
          },
          "subtle": {
            "value": "#5f5b5c"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#ccc9c9"
          },
          "muted": {
            "value": "#d8d6d6"
          },
          "emphasized": {
            "value": "#b8b5b5"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "4px"
        },
        "container": {
          "value": "6px"
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
            "value": "#7f1d1d"
          },
          "emphasized": {
            "value": "#d77169"
          },
          "muted": {
            "value": "#231615"
          },
          "subtle": {
            "value": "#191211"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#d39891"
          },
          "focusRing": {
            "value": "#682320"
          }
        },
        "danger": {
          "solid": {
            "value": "#e50914"
          },
          "emphasized": {
            "value": "#ff4f44"
          },
          "muted": {
            "value": "#371f1c"
          },
          "subtle": {
            "value": "#221614"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#ff9588"
          },
          "focusRing": {
            "value": "#682320"
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
            "value": "#682320"
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
            "value": "#682320"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#191919"
          },
          "subtle": {
            "value": "#222222"
          },
          "muted": {
            "value": "#222222"
          },
          "emphasized": {
            "value": "#827d7d"
          },
          "panel": {
            "value": "#222222"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#fcf8f9"
          },
          "muted": {
            "value": "#9c9898"
          },
          "subtle": {
            "value": "#9c9898"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#494647"
          },
          "muted": {
            "value": "#3b393a"
          },
          "emphasized": {
            "value": "#5e5a5b"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "4px"
        },
        "container": {
          "value": "6px"
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
            "value": "#ffb6c2"
          },
          "emphasized": {
            "value": "#ffced6"
          },
          "muted": {
            "value": "#120406"
          },
          "subtle": {
            "value": "#050102"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#fff0f2"
          },
          "focusRing": {
            "value": "#e3758c"
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
            "value": "#120403"
          },
          "subtle": {
            "value": "#050101"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#ffefed"
          },
          "focusRing": {
            "value": "#e3758c"
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
            "value": "#e3758c"
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
            "value": "#e3758c"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#020202"
          },
          "subtle": {
            "value": "#080808"
          },
          "muted": {
            "value": "#080808"
          },
          "emphasized": {
            "value": "#cdc9c9"
          },
          "panel": {
            "value": "#080808"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f3f0f1"
          },
          "muted": {
            "value": "#e8e4e5"
          },
          "subtle": {
            "value": "#e8e4e5"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#838181"
          },
          "muted": {
            "value": "#6b696a"
          },
          "emphasized": {
            "value": "#9b9898"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "4px"
        },
        "container": {
          "value": "6px"
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
