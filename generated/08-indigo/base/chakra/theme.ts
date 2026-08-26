// @interop Chakra UI 기반 Indigo 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#635bff"
          },
          "emphasized": {
            "value": "#564ae8"
          },
          "muted": {
            "value": "#d3d8f3"
          },
          "subtle": {
            "value": "#e8eafa"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#373787"
          },
          "focusRing": {
            "value": "#6f74eb"
          }
        },
        "danger": {
          "solid": {
            "value": "#dd3338"
          },
          "emphasized": {
            "value": "#c7202a"
          },
          "muted": {
            "value": "#ffebe9"
          },
          "subtle": {
            "value": "#fff5f4"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#853431"
          },
          "focusRing": {
            "value": "#6f74eb"
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
            "value": "#6f74eb"
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
            "value": "#6f74eb"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f7f8f8"
          },
          "subtle": {
            "value": "#f0f0f1"
          },
          "muted": {
            "value": "#f0f0f1"
          },
          "emphasized": {
            "value": "#75757c"
          },
          "panel": {
            "value": "#f0f0f1"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#08080b"
          },
          "muted": {
            "value": "#5b5c61"
          },
          "subtle": {
            "value": "#5b5c61"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c9c9cd"
          },
          "muted": {
            "value": "#d6d6da"
          },
          "emphasized": {
            "value": "#b5b5bb"
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
            "value": "#635bff"
          },
          "emphasized": {
            "value": "#7d82ff"
          },
          "muted": {
            "value": "#222439"
          },
          "subtle": {
            "value": "#171823"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#a3adff"
          },
          "focusRing": {
            "value": "#5c5ed3"
          }
        },
        "danger": {
          "solid": {
            "value": "#e63e40"
          },
          "emphasized": {
            "value": "#f75553"
          },
          "muted": {
            "value": "#301c1a"
          },
          "subtle": {
            "value": "#211614"
          },
          "contrast": {
            "value": "#260908"
          },
          "fg": {
            "value": "#f1958d"
          },
          "focusRing": {
            "value": "#5c5ed3"
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
            "value": "#5c5ed3"
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
            "value": "#5c5ed3"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#191919"
          },
          "subtle": {
            "value": "#222223"
          },
          "muted": {
            "value": "#222223"
          },
          "emphasized": {
            "value": "#7d7e84"
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
            "value": "#98999e"
          },
          "subtle": {
            "value": "#98999e"
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
            "value": "#5a5b60"
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
            "value": "#bfc6ff"
          },
          "emphasized": {
            "value": "#d2d8ff"
          },
          "muted": {
            "value": "#060714"
          },
          "subtle": {
            "value": "#020205"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#eff1ff"
          },
          "focusRing": {
            "value": "#8790ee"
          }
        },
        "danger": {
          "solid": {
            "value": "#ffb8b1"
          },
          "emphasized": {
            "value": "#ffd0cb"
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
            "value": "#fff0ee"
          },
          "focusRing": {
            "value": "#8790ee"
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
            "value": "#8790ee"
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
            "value": "#8790ee"
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
            "value": "#c8c9d0"
          },
          "panel": {
            "value": "#080809"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f0f0f4"
          },
          "muted": {
            "value": "#e4e5ea"
          },
          "subtle": {
            "value": "#e4e5ea"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#808184"
          },
          "muted": {
            "value": "#696a6c"
          },
          "emphasized": {
            "value": "#98989d"
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
