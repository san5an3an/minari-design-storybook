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
        "xs": {
          "value": "8px"
        },
        "sm": {
          "value": "16px"
        },
        "md": {
          "value": "24px"
        },
        "lg": {
          "value": "24px"
        },
        "xl": {
          "value": "32px"
        },
        "2xl": {
          "value": "32px"
        },
        "control": {
          "value": "16px"
        },
        "container": {
          "value": "24px"
        }
      },
      "spacing": {
        "0.5": {
          "value": "0.1875rem"
        },
        "1": {
          "value": "0.375rem"
        },
        "1.5": {
          "value": "0.5625rem"
        },
        "2": {
          "value": "0.75rem"
        },
        "2.5": {
          "value": "0.9375rem"
        },
        "3": {
          "value": "1.125rem"
        },
        "3.5": {
          "value": "1.3125rem"
        },
        "4": {
          "value": "1.5rem"
        },
        "4.5": {
          "value": "1.6875rem"
        },
        "5": {
          "value": "1.875rem"
        },
        "6": {
          "value": "2.25rem"
        },
        "7": {
          "value": "2.625rem"
        },
        "8": {
          "value": "3.0rem"
        },
        "9": {
          "value": "3.375rem"
        },
        "10": {
          "value": "3.75rem"
        },
        "11": {
          "value": "4.125rem"
        },
        "12": {
          "value": "4.5rem"
        },
        "14": {
          "value": "5.25rem"
        },
        "16": {
          "value": "6.0rem"
        },
        "20": {
          "value": "7.5rem"
        },
        "24": {
          "value": "9.0rem"
        },
        "28": {
          "value": "10.5rem"
        },
        "32": {
          "value": "12.0rem"
        },
        "36": {
          "value": "13.5rem"
        },
        "40": {
          "value": "15.0rem"
        },
        "44": {
          "value": "16.5rem"
        },
        "48": {
          "value": "18.0rem"
        },
        "52": {
          "value": "19.5rem"
        },
        "56": {
          "value": "21.0rem"
        },
        "60": {
          "value": "22.5rem"
        },
        "64": {
          "value": "24.0rem"
        },
        "72": {
          "value": "27.0rem"
        },
        "80": {
          "value": "30.0rem"
        },
        "96": {
          "value": "36.0rem"
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
        "xs": {
          "value": "8px"
        },
        "sm": {
          "value": "16px"
        },
        "md": {
          "value": "24px"
        },
        "lg": {
          "value": "24px"
        },
        "xl": {
          "value": "32px"
        },
        "2xl": {
          "value": "32px"
        },
        "control": {
          "value": "16px"
        },
        "container": {
          "value": "24px"
        }
      },
      "spacing": {
        "0.5": {
          "value": "0.1875rem"
        },
        "1": {
          "value": "0.375rem"
        },
        "1.5": {
          "value": "0.5625rem"
        },
        "2": {
          "value": "0.75rem"
        },
        "2.5": {
          "value": "0.9375rem"
        },
        "3": {
          "value": "1.125rem"
        },
        "3.5": {
          "value": "1.3125rem"
        },
        "4": {
          "value": "1.5rem"
        },
        "4.5": {
          "value": "1.6875rem"
        },
        "5": {
          "value": "1.875rem"
        },
        "6": {
          "value": "2.25rem"
        },
        "7": {
          "value": "2.625rem"
        },
        "8": {
          "value": "3.0rem"
        },
        "9": {
          "value": "3.375rem"
        },
        "10": {
          "value": "3.75rem"
        },
        "11": {
          "value": "4.125rem"
        },
        "12": {
          "value": "4.5rem"
        },
        "14": {
          "value": "5.25rem"
        },
        "16": {
          "value": "6.0rem"
        },
        "20": {
          "value": "7.5rem"
        },
        "24": {
          "value": "9.0rem"
        },
        "28": {
          "value": "10.5rem"
        },
        "32": {
          "value": "12.0rem"
        },
        "36": {
          "value": "13.5rem"
        },
        "40": {
          "value": "15.0rem"
        },
        "44": {
          "value": "16.5rem"
        },
        "48": {
          "value": "18.0rem"
        },
        "52": {
          "value": "19.5rem"
        },
        "56": {
          "value": "21.0rem"
        },
        "60": {
          "value": "22.5rem"
        },
        "64": {
          "value": "24.0rem"
        },
        "72": {
          "value": "27.0rem"
        },
        "80": {
          "value": "30.0rem"
        },
        "96": {
          "value": "36.0rem"
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
        "xs": {
          "value": "8px"
        },
        "sm": {
          "value": "16px"
        },
        "md": {
          "value": "24px"
        },
        "lg": {
          "value": "24px"
        },
        "xl": {
          "value": "32px"
        },
        "2xl": {
          "value": "32px"
        },
        "control": {
          "value": "16px"
        },
        "container": {
          "value": "24px"
        }
      },
      "spacing": {
        "0.5": {
          "value": "0.1875rem"
        },
        "1": {
          "value": "0.375rem"
        },
        "1.5": {
          "value": "0.5625rem"
        },
        "2": {
          "value": "0.75rem"
        },
        "2.5": {
          "value": "0.9375rem"
        },
        "3": {
          "value": "1.125rem"
        },
        "3.5": {
          "value": "1.3125rem"
        },
        "4": {
          "value": "1.5rem"
        },
        "4.5": {
          "value": "1.6875rem"
        },
        "5": {
          "value": "1.875rem"
        },
        "6": {
          "value": "2.25rem"
        },
        "7": {
          "value": "2.625rem"
        },
        "8": {
          "value": "3.0rem"
        },
        "9": {
          "value": "3.375rem"
        },
        "10": {
          "value": "3.75rem"
        },
        "11": {
          "value": "4.125rem"
        },
        "12": {
          "value": "4.5rem"
        },
        "14": {
          "value": "5.25rem"
        },
        "16": {
          "value": "6.0rem"
        },
        "20": {
          "value": "7.5rem"
        },
        "24": {
          "value": "9.0rem"
        },
        "28": {
          "value": "10.5rem"
        },
        "32": {
          "value": "12.0rem"
        },
        "36": {
          "value": "13.5rem"
        },
        "40": {
          "value": "15.0rem"
        },
        "44": {
          "value": "16.5rem"
        },
        "48": {
          "value": "18.0rem"
        },
        "52": {
          "value": "19.5rem"
        },
        "56": {
          "value": "21.0rem"
        },
        "60": {
          "value": "22.5rem"
        },
        "64": {
          "value": "24.0rem"
        },
        "72": {
          "value": "27.0rem"
        },
        "80": {
          "value": "30.0rem"
        },
        "96": {
          "value": "36.0rem"
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
