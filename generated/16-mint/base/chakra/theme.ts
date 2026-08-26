// @interop Chakra UI 기반 Mint 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#71bbb1"
          },
          "emphasized": {
            "value": "#62a9a0"
          },
          "muted": {
            "value": "#e8f3f1"
          },
          "subtle": {
            "value": "#f3f9f8"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#335551"
          },
          "focusRing": {
            "value": "#8dc2ba"
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
            "value": "#8dc2ba"
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
            "value": "#8dc2ba"
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
            "value": "#8dc2ba"
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
            "value": "#aaafac"
          },
          "panel": {
            "value": "#eff0f0"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#070808"
          },
          "muted": {
            "value": "#6a6d6c"
          },
          "subtle": {
            "value": "#6a6d6c"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c8cac9"
          },
          "muted": {
            "value": "#d5d7d6"
          },
          "emphasized": {
            "value": "#b3b7b5"
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
        "brand": {
          "solid": {
            "value": "#418b82"
          },
          "emphasized": {
            "value": "#559b92"
          },
          "muted": {
            "value": "#1c2423"
          },
          "subtle": {
            "value": "#151a19"
          },
          "contrast": {
            "value": "#051815"
          },
          "fg": {
            "value": "#91b7b1"
          },
          "focusRing": {
            "value": "#33665f"
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
            "value": "#33665f"
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
            "value": "#33665f"
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
            "value": "#33665f"
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
            "value": "#7b7f7d"
          },
          "panel": {
            "value": "#222222"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f7faf9"
          },
          "muted": {
            "value": "#969a98"
          },
          "subtle": {
            "value": "#969a98"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#464847"
          },
          "muted": {
            "value": "#393a3a"
          },
          "emphasized": {
            "value": "#595c5b"
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
        "brand": {
          "solid": {
            "value": "#94d6cc"
          },
          "emphasized": {
            "value": "#a6e6dc"
          },
          "muted": {
            "value": "#040a09"
          },
          "subtle": {
            "value": "#010202"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#d3f6f1"
          },
          "focusRing": {
            "value": "#73a29b"
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
            "value": "#73a29b"
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
            "value": "#73a29b"
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
            "value": "#73a29b"
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
            "value": "#c6cbc8"
          },
          "panel": {
            "value": "#080808"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#eff1f0"
          },
          "muted": {
            "value": "#e2e6e4"
          },
          "subtle": {
            "value": "#e2e6e4"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#7f8280"
          },
          "muted": {
            "value": "#686a69"
          },
          "emphasized": {
            "value": "#969997"
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
