// @interop Chakra UI 기반 Moss 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#73bbad"
          },
          "emphasized": {
            "value": "#64a99c"
          },
          "muted": {
            "value": "#e8f3f0"
          },
          "subtle": {
            "value": "#f3f9f8"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#34554f"
          },
          "focusRing": {
            "value": "#8ec2b7"
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
            "value": "#8ec2b7"
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
            "value": "#8ec2b7"
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
            "value": "#8ec2b7"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f7f8f7"
          },
          "subtle": {
            "value": "#f0f0ef"
          },
          "muted": {
            "value": "#f0f0ef"
          },
          "emphasized": {
            "value": "#abafa7"
          },
          "panel": {
            "value": "#f0f0ef"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#080906"
          },
          "muted": {
            "value": "#6a6e68"
          },
          "subtle": {
            "value": "#6a6e68"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c8cbc6"
          },
          "muted": {
            "value": "#d6d7d4"
          },
          "emphasized": {
            "value": "#b4b7b1"
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
            "value": "#438b7e"
          },
          "emphasized": {
            "value": "#569b8e"
          },
          "muted": {
            "value": "#1c2422"
          },
          "subtle": {
            "value": "#161a19"
          },
          "contrast": {
            "value": "#051814"
          },
          "fg": {
            "value": "#92b7af"
          },
          "focusRing": {
            "value": "#34665d"
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
            "value": "#34665d"
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
            "value": "#34665d"
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
            "value": "#34665d"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#191918"
          },
          "subtle": {
            "value": "#222221"
          },
          "muted": {
            "value": "#222221"
          },
          "emphasized": {
            "value": "#7c8078"
          },
          "panel": {
            "value": "#222221"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f8faf6"
          },
          "muted": {
            "value": "#979a94"
          },
          "subtle": {
            "value": "#979a94"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#464844"
          },
          "muted": {
            "value": "#393a38"
          },
          "emphasized": {
            "value": "#5a5c57"
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
            "value": "#96d6c9"
          },
          "emphasized": {
            "value": "#a7e6d9"
          },
          "muted": {
            "value": "#040a08"
          },
          "subtle": {
            "value": "#010202"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#d4f6ef"
          },
          "focusRing": {
            "value": "#74a298"
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
            "value": "#74a298"
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
            "value": "#74a298"
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
            "value": "#74a298"
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
            "value": "#c7cbc3"
          },
          "panel": {
            "value": "#080808"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#eff1ed"
          },
          "muted": {
            "value": "#e3e6e0"
          },
          "subtle": {
            "value": "#e3e6e0"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#80827e"
          },
          "muted": {
            "value": "#686a67"
          },
          "emphasized": {
            "value": "#969994"
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
