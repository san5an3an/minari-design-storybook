// @interop Chakra UI 기반 Graphite 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#181717"
          },
          "emphasized": {
            "value": "#0c0b0b"
          },
          "muted": {
            "value": "#b7b7b7"
          },
          "subtle": {
            "value": "#dadada"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#020202"
          },
          "focusRing": {
            "value": "#201f1f"
          }
        },
        "danger": {
          "solid": {
            "value": "#c94c49"
          },
          "emphasized": {
            "value": "#b43d3b"
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
            "value": "#7a3c38"
          },
          "focusRing": {
            "value": "#201f1f"
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
            "value": "#201f1f"
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
            "value": "#f8efdd"
          },
          "subtle": {
            "value": "#fcf7ed"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#654a00"
          },
          "focusRing": {
            "value": "#201f1f"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f7f8f8"
          },
          "subtle": {
            "value": "#f0f0f0"
          },
          "muted": {
            "value": "#f0f0f0"
          },
          "emphasized": {
            "value": "#747679"
          },
          "panel": {
            "value": "#f0f0f0"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#080809"
          },
          "muted": {
            "value": "#5b5d5e"
          },
          "subtle": {
            "value": "#5b5d5e"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c9cacb"
          },
          "muted": {
            "value": "#d6d7d8"
          },
          "emphasized": {
            "value": "#b4b6b8"
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
            "value": "#181717"
          },
          "emphasized": {
            "value": "#8f8e8e"
          },
          "muted": {
            "value": "#101010"
          },
          "subtle": {
            "value": "#0e0e0e"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#a4a3a3"
          },
          "focusRing": {
            "value": "#171616"
          }
        },
        "danger": {
          "solid": {
            "value": "#d25450"
          },
          "emphasized": {
            "value": "#e36761"
          },
          "muted": {
            "value": "#2d1d1c"
          },
          "subtle": {
            "value": "#1f1615"
          },
          "contrast": {
            "value": "#260908"
          },
          "fg": {
            "value": "#e49b95"
          },
          "focusRing": {
            "value": "#171616"
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
            "value": "#171616"
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
            "value": "#282114"
          },
          "subtle": {
            "value": "#1c1811"
          },
          "contrast": {
            "value": "#1c1200"
          },
          "fg": {
            "value": "#c8ab6c"
          },
          "focusRing": {
            "value": "#171616"
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
            "value": "#7d7f81"
          },
          "panel": {
            "value": "#222222"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f8f9fb"
          },
          "muted": {
            "value": "#989a9b"
          },
          "subtle": {
            "value": "#989a9b"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#464748"
          },
          "muted": {
            "value": "#393a3b"
          },
          "emphasized": {
            "value": "#5a5b5d"
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
            "value": "#f5bbbc"
          },
          "emphasized": {
            "value": "#ffcece"
          },
          "muted": {
            "value": "#0c0707"
          },
          "subtle": {
            "value": "#030202"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#ffeeee"
          },
          "focusRing": {
            "value": "#b78e8e"
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
            "value": "#100504"
          },
          "subtle": {
            "value": "#040101"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#fff0ee"
          },
          "focusRing": {
            "value": "#b78e8e"
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
            "value": "#b78e8e"
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
            "value": "#b78e8e"
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
            "value": "#c8cacc"
          },
          "panel": {
            "value": "#080808"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f0f1f2"
          },
          "muted": {
            "value": "#e4e5e7"
          },
          "subtle": {
            "value": "#e4e5e7"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#808183"
          },
          "muted": {
            "value": "#696a6a"
          },
          "emphasized": {
            "value": "#97999a"
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
