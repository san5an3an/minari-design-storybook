// @interop Chakra UI 기반 Rust 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#9e6954"
          },
          "emphasized": {
            "value": "#8c5a46"
          },
          "muted": {
            "value": "#f8eeea"
          },
          "subtle": {
            "value": "#fcf6f4"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#64483e"
          },
          "focusRing": {
            "value": "#d6ab9a"
          }
        },
        "danger": {
          "solid": {
            "value": "#eb0036"
          },
          "emphasized": {
            "value": "#cf002e"
          },
          "muted": {
            "value": "#f3d2d0"
          },
          "subtle": {
            "value": "#fae7e6"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#7d1c24"
          },
          "focusRing": {
            "value": "#d6ab9a"
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
            "value": "#d6ab9a"
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
            "value": "#d6ab9a"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f9f7f7"
          },
          "subtle": {
            "value": "#f2efee"
          },
          "muted": {
            "value": "#f2efee"
          },
          "emphasized": {
            "value": "#81736d"
          },
          "panel": {
            "value": "#f2efee"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#0c0706"
          },
          "muted": {
            "value": "#655a56"
          },
          "subtle": {
            "value": "#655a56"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#d0c8c4"
          },
          "muted": {
            "value": "#dcd5d2"
          },
          "emphasized": {
            "value": "#bfb3ae"
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
            "value": "#a7715c"
          },
          "emphasized": {
            "value": "#b7826d"
          },
          "muted": {
            "value": "#27201e"
          },
          "subtle": {
            "value": "#1c1816"
          },
          "contrast": {
            "value": "#1e100a"
          },
          "fg": {
            "value": "#c7a89b"
          },
          "focusRing": {
            "value": "#775142"
          }
        },
        "danger": {
          "solid": {
            "value": "#eb0036"
          },
          "emphasized": {
            "value": "#ff4e58"
          },
          "muted": {
            "value": "#38201f"
          },
          "subtle": {
            "value": "#231615"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#ff9694"
          },
          "focusRing": {
            "value": "#775142"
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
            "value": "#775142"
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
            "value": "#775142"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#191818"
          },
          "subtle": {
            "value": "#232221"
          },
          "muted": {
            "value": "#232221"
          },
          "emphasized": {
            "value": "#8a7c75"
          },
          "panel": {
            "value": "#232221"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#fff8f5"
          },
          "muted": {
            "value": "#a39792"
          },
          "subtle": {
            "value": "#a39792"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#4d4542"
          },
          "muted": {
            "value": "#3e3936"
          },
          "emphasized": {
            "value": "#635955"
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
            "value": "#f2bea8"
          },
          "emphasized": {
            "value": "#ffcfbc"
          },
          "muted": {
            "value": "#0c0705"
          },
          "subtle": {
            "value": "#030201"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#ffeee8"
          },
          "focusRing": {
            "value": "#b59081"
          }
        },
        "danger": {
          "solid": {
            "value": "#ffb8b4"
          },
          "emphasized": {
            "value": "#ffd0cd"
          },
          "muted": {
            "value": "#100505"
          },
          "subtle": {
            "value": "#040101"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#fff0ef"
          },
          "focusRing": {
            "value": "#b59081"
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
            "value": "#b59081"
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
            "value": "#b59081"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#020202"
          },
          "subtle": {
            "value": "#090807"
          },
          "muted": {
            "value": "#090807"
          },
          "emphasized": {
            "value": "#d5c7c0"
          },
          "panel": {
            "value": "#090807"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f7efec"
          },
          "muted": {
            "value": "#efe3de"
          },
          "subtle": {
            "value": "#efe3de"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#87807c"
          },
          "muted": {
            "value": "#6e6866"
          },
          "emphasized": {
            "value": "#a19692"
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
