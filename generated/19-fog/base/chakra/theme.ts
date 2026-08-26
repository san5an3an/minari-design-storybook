// @interop Chakra UI 기반 Fog 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#1d2d35"
          },
          "emphasized": {
            "value": "#15242c"
          },
          "muted": {
            "value": "#bcbfc1"
          },
          "subtle": {
            "value": "#dcdedf"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#0b1317"
          },
          "focusRing": {
            "value": "#29353b"
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
            "value": "#29353b"
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
            "value": "#29353b"
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
            "value": "#29353b"
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
            "value": "#aaafb0"
          },
          "panel": {
            "value": "#eff0f0"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#070809"
          },
          "muted": {
            "value": "#6a6d6f"
          },
          "subtle": {
            "value": "#6a6d6f"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c8cacb"
          },
          "muted": {
            "value": "#d5d7d8"
          },
          "emphasized": {
            "value": "#b3b6b8"
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
            "value": "#1d2d35"
          },
          "emphasized": {
            "value": "#80929b"
          },
          "muted": {
            "value": "#111314"
          },
          "subtle": {
            "value": "#0f1011"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#9ca6ab"
          },
          "focusRing": {
            "value": "#18242a"
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
            "value": "#18242a"
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
            "value": "#18242a"
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
            "value": "#18242a"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#181919"
          },
          "subtle": {
            "value": "#222222"
          },
          "muted": {
            "value": "#222222"
          },
          "emphasized": {
            "value": "#7a7f81"
          },
          "panel": {
            "value": "#222222"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f7fafb"
          },
          "muted": {
            "value": "#969a9b"
          },
          "subtle": {
            "value": "#969a9b"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#454848"
          },
          "muted": {
            "value": "#393a3b"
          },
          "emphasized": {
            "value": "#595c5d"
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
            "value": "#9bd1ec"
          },
          "emphasized": {
            "value": "#ace1fb"
          },
          "muted": {
            "value": "#05090c"
          },
          "subtle": {
            "value": "#010203"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#dcf3ff"
          },
          "focusRing": {
            "value": "#789eb1"
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
            "value": "#789eb1"
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
            "value": "#789eb1"
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
            "value": "#789eb1"
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
            "value": "#c6cacc"
          },
          "panel": {
            "value": "#080808"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#eef1f2"
          },
          "muted": {
            "value": "#e2e6e7"
          },
          "subtle": {
            "value": "#e2e6e7"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#7f8282"
          },
          "muted": {
            "value": "#686a6a"
          },
          "emphasized": {
            "value": "#95999a"
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
