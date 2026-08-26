// @interop Chakra UI 기반 Jade 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#47a248"
          },
          "emphasized": {
            "value": "#3f9640"
          },
          "muted": {
            "value": "#d6e3d5"
          },
          "subtle": {
            "value": "#e9f1e8"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#244e24"
          },
          "focusRing": {
            "value": "#68a866"
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
            "value": "#68a866"
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
            "value": "#68a866"
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
            "value": "#68a866"
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
            "value": "#68a866"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f7f8f7"
          },
          "subtle": {
            "value": "#eff0ef"
          },
          "muted": {
            "value": "#eff0ef"
          },
          "emphasized": {
            "value": "#a9b0aa"
          },
          "panel": {
            "value": "#eff0ef"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#070807"
          },
          "muted": {
            "value": "#696e6a"
          },
          "subtle": {
            "value": "#696e6a"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c7cbc8"
          },
          "muted": {
            "value": "#d5d8d5"
          },
          "emphasized": {
            "value": "#b3b7b3"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "12px"
        },
        "container": {
          "value": "16px"
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
            "value": "#47a248"
          },
          "emphasized": {
            "value": "#5cb35b"
          },
          "muted": {
            "value": "#232e23"
          },
          "subtle": {
            "value": "#181d17"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#96c593"
          },
          "focusRing": {
            "value": "#539252"
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
            "value": "#539252"
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
            "value": "#539252"
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
            "value": "#539252"
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
            "value": "#539252"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#181918"
          },
          "subtle": {
            "value": "#222222"
          },
          "muted": {
            "value": "#222222"
          },
          "emphasized": {
            "value": "#7a807b"
          },
          "panel": {
            "value": "#222222"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f7faf7"
          },
          "muted": {
            "value": "#959a96"
          },
          "subtle": {
            "value": "#959a96"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#454846"
          },
          "muted": {
            "value": "#383b39"
          },
          "emphasized": {
            "value": "#585d59"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "12px"
        },
        "container": {
          "value": "16px"
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
            "value": "#90db8d"
          },
          "emphasized": {
            "value": "#a1eb9f"
          },
          "muted": {
            "value": "#040a04"
          },
          "subtle": {
            "value": "#010301"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#d0f9ce"
          },
          "focusRing": {
            "value": "#71a66f"
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
            "value": "#71a66f"
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
            "value": "#71a66f"
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
            "value": "#71a66f"
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
            "value": "#71a66f"
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
            "value": "#c5cbc6"
          },
          "panel": {
            "value": "#080808"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#eef1ee"
          },
          "muted": {
            "value": "#e1e6e2"
          },
          "subtle": {
            "value": "#e1e6e2"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#7f827f"
          },
          "muted": {
            "value": "#676a68"
          },
          "emphasized": {
            "value": "#959a96"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "control": {
          "value": "12px"
        },
        "container": {
          "value": "16px"
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
