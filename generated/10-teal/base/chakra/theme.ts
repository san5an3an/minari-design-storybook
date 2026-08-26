// @interop Chakra UI 기반 Teal 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#26a5e4"
          },
          "emphasized": {
            "value": "#1c9ad6"
          },
          "muted": {
            "value": "#d6e6f1"
          },
          "subtle": {
            "value": "#e9f2f8"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#134c6b"
          },
          "focusRing": {
            "value": "#5faedd"
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
            "value": "#5faedd"
          }
        },
        "info": {
          "solid": {
            "value": "#007cb8"
          },
          "emphasized": {
            "value": "#006ca0"
          },
          "muted": {
            "value": "#e4f2fd"
          },
          "subtle": {
            "value": "#f1f9ff"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#245372"
          },
          "focusRing": {
            "value": "#5faedd"
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
            "value": "#5faedd"
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
            "value": "#5faedd"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f7f8f8"
          },
          "subtle": {
            "value": "#eff0f0"
          },
          "muted": {
            "value": "#eff0f0"
          },
          "emphasized": {
            "value": "#a8afaf"
          },
          "panel": {
            "value": "#eff0f0"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#060909"
          },
          "muted": {
            "value": "#686d6e"
          },
          "subtle": {
            "value": "#686d6e"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c7cbcb"
          },
          "muted": {
            "value": "#d4d7d8"
          },
          "emphasized": {
            "value": "#b2b7b7"
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
            "value": "#26a5e4"
          },
          "emphasized": {
            "value": "#45b6f4"
          },
          "muted": {
            "value": "#233038"
          },
          "subtle": {
            "value": "#171e22"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#91c9ec"
          },
          "focusRing": {
            "value": "#4898c6"
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
            "value": "#4898c6"
          }
        },
        "info": {
          "solid": {
            "value": "#1286c2"
          },
          "emphasized": {
            "value": "#3496d2"
          },
          "muted": {
            "value": "#19242b"
          },
          "subtle": {
            "value": "#141a1e"
          },
          "contrast": {
            "value": "#001625"
          },
          "fg": {
            "value": "#84b5d7"
          },
          "focusRing": {
            "value": "#4898c6"
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
            "value": "#4898c6"
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
            "value": "#4898c6"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#181919"
          },
          "subtle": {
            "value": "#212222"
          },
          "muted": {
            "value": "#212222"
          },
          "emphasized": {
            "value": "#798080"
          },
          "panel": {
            "value": "#212222"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f6fafa"
          },
          "muted": {
            "value": "#959a9b"
          },
          "subtle": {
            "value": "#959a9b"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#454848"
          },
          "muted": {
            "value": "#383a3b"
          },
          "emphasized": {
            "value": "#585c5d"
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
            "value": "#88d2ff"
          },
          "emphasized": {
            "value": "#aedfff"
          },
          "muted": {
            "value": "#020910"
          },
          "subtle": {
            "value": "#010204"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#def2ff"
          },
          "focusRing": {
            "value": "#57a1cc"
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
            "value": "#57a1cc"
          }
        },
        "info": {
          "solid": {
            "value": "#8ed1ff"
          },
          "emphasized": {
            "value": "#b2dfff"
          },
          "muted": {
            "value": "#03090f"
          },
          "subtle": {
            "value": "#010204"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#e0f2ff"
          },
          "focusRing": {
            "value": "#57a1cc"
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
            "value": "#57a1cc"
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
            "value": "#57a1cc"
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
            "value": "#c4cbcb"
          },
          "panel": {
            "value": "#080808"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#edf1f1"
          },
          "muted": {
            "value": "#e0e6e6"
          },
          "subtle": {
            "value": "#e0e6e6"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#7e8282"
          },
          "muted": {
            "value": "#676a6a"
          },
          "emphasized": {
            "value": "#959999"
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
