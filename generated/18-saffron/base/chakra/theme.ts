// @interop Chakra UI 기반 Saffron 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#ff9900"
          },
          "emphasized": {
            "value": "#e78a00"
          },
          "muted": {
            "value": "#f9e8d9"
          },
          "subtle": {
            "value": "#fcf3ea"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#714000"
          },
          "focusRing": {
            "value": "#faad5f"
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
            "value": "#faad5f"
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
            "value": "#faad5f"
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
            "value": "#faad5f"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f8f8f7"
          },
          "subtle": {
            "value": "#f1f0ee"
          },
          "muted": {
            "value": "#f1f0ee"
          },
          "emphasized": {
            "value": "#b3ada2"
          },
          "panel": {
            "value": "#f1f0ee"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#0b0805"
          },
          "muted": {
            "value": "#716c65"
          },
          "subtle": {
            "value": "#716c65"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#cdc9c4"
          },
          "muted": {
            "value": "#d9d6d2"
          },
          "emphasized": {
            "value": "#bab5ad"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "xs": {
          "value": "6px"
        },
        "sm": {
          "value": "12px"
        },
        "md": {
          "value": "16px"
        },
        "lg": {
          "value": "16px"
        },
        "xl": {
          "value": "20px"
        },
        "2xl": {
          "value": "20px"
        },
        "control": {
          "value": "12px"
        },
        "container": {
          "value": "16px"
        }
      },
      "spacing": {
        "0.5": {
          "value": "0.125rem"
        },
        "1": {
          "value": "0.25rem"
        },
        "1.5": {
          "value": "0.375rem"
        },
        "2": {
          "value": "0.5rem"
        },
        "2.5": {
          "value": "0.625rem"
        },
        "3": {
          "value": "0.75rem"
        },
        "3.5": {
          "value": "0.875rem"
        },
        "4": {
          "value": "1.0rem"
        },
        "4.5": {
          "value": "1.125rem"
        },
        "5": {
          "value": "1.25rem"
        },
        "6": {
          "value": "1.5rem"
        },
        "7": {
          "value": "1.75rem"
        },
        "8": {
          "value": "2.0rem"
        },
        "9": {
          "value": "2.25rem"
        },
        "10": {
          "value": "2.5rem"
        },
        "11": {
          "value": "2.75rem"
        },
        "12": {
          "value": "3.0rem"
        },
        "14": {
          "value": "3.5rem"
        },
        "16": {
          "value": "4.0rem"
        },
        "20": {
          "value": "5.0rem"
        },
        "24": {
          "value": "6.0rem"
        },
        "28": {
          "value": "7.0rem"
        },
        "32": {
          "value": "8.0rem"
        },
        "36": {
          "value": "9.0rem"
        },
        "40": {
          "value": "10.0rem"
        },
        "44": {
          "value": "11.0rem"
        },
        "48": {
          "value": "12.0rem"
        },
        "52": {
          "value": "13.0rem"
        },
        "56": {
          "value": "14.0rem"
        },
        "60": {
          "value": "15.0rem"
        },
        "64": {
          "value": "16.0rem"
        },
        "72": {
          "value": "18.0rem"
        },
        "80": {
          "value": "20.0rem"
        },
        "96": {
          "value": "24.0rem"
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
            "value": "#ff9900"
          },
          "emphasized": {
            "value": "#ffb46a"
          },
          "muted": {
            "value": "#3e3125"
          },
          "subtle": {
            "value": "#251e18"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#ffd4ac"
          },
          "focusRing": {
            "value": "#e29748"
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
            "value": "#e29748"
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
            "value": "#e29748"
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
            "value": "#e29748"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#191918"
          },
          "subtle": {
            "value": "#232221"
          },
          "muted": {
            "value": "#232221"
          },
          "emphasized": {
            "value": "#837e74"
          },
          "panel": {
            "value": "#232221"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#fdf9f3"
          },
          "muted": {
            "value": "#9e9991"
          },
          "subtle": {
            "value": "#9e9991"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#4a4742"
          },
          "muted": {
            "value": "#3c3a36"
          },
          "emphasized": {
            "value": "#5f5b54"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "xs": {
          "value": "6px"
        },
        "sm": {
          "value": "12px"
        },
        "md": {
          "value": "16px"
        },
        "lg": {
          "value": "16px"
        },
        "xl": {
          "value": "20px"
        },
        "2xl": {
          "value": "20px"
        },
        "control": {
          "value": "12px"
        },
        "container": {
          "value": "16px"
        }
      },
      "spacing": {
        "0.5": {
          "value": "0.125rem"
        },
        "1": {
          "value": "0.25rem"
        },
        "1.5": {
          "value": "0.375rem"
        },
        "2": {
          "value": "0.5rem"
        },
        "2.5": {
          "value": "0.625rem"
        },
        "3": {
          "value": "0.75rem"
        },
        "3.5": {
          "value": "0.875rem"
        },
        "4": {
          "value": "1.0rem"
        },
        "4.5": {
          "value": "1.125rem"
        },
        "5": {
          "value": "1.25rem"
        },
        "6": {
          "value": "1.5rem"
        },
        "7": {
          "value": "1.75rem"
        },
        "8": {
          "value": "2.0rem"
        },
        "9": {
          "value": "2.25rem"
        },
        "10": {
          "value": "2.5rem"
        },
        "11": {
          "value": "2.75rem"
        },
        "12": {
          "value": "3.0rem"
        },
        "14": {
          "value": "3.5rem"
        },
        "16": {
          "value": "4.0rem"
        },
        "20": {
          "value": "5.0rem"
        },
        "24": {
          "value": "6.0rem"
        },
        "28": {
          "value": "7.0rem"
        },
        "32": {
          "value": "8.0rem"
        },
        "36": {
          "value": "9.0rem"
        },
        "40": {
          "value": "10.0rem"
        },
        "44": {
          "value": "11.0rem"
        },
        "48": {
          "value": "12.0rem"
        },
        "52": {
          "value": "13.0rem"
        },
        "56": {
          "value": "14.0rem"
        },
        "60": {
          "value": "15.0rem"
        },
        "64": {
          "value": "16.0rem"
        },
        "72": {
          "value": "18.0rem"
        },
        "80": {
          "value": "20.0rem"
        },
        "96": {
          "value": "24.0rem"
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
            "value": "#ffbc79"
          },
          "emphasized": {
            "value": "#ffd2a8"
          },
          "muted": {
            "value": "#100600"
          },
          "subtle": {
            "value": "#040200"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#fff0e2"
          },
          "focusRing": {
            "value": "#d5862c"
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
            "value": "#d5862c"
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
            "value": "#d5862c"
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
            "value": "#d5862c"
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
            "value": "#cec9bf"
          },
          "panel": {
            "value": "#090807"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f3f0eb"
          },
          "muted": {
            "value": "#e9e4dc"
          },
          "subtle": {
            "value": "#e9e4dc"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#83817c"
          },
          "muted": {
            "value": "#6c6966"
          },
          "emphasized": {
            "value": "#9c9891"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "xs": {
          "value": "6px"
        },
        "sm": {
          "value": "12px"
        },
        "md": {
          "value": "16px"
        },
        "lg": {
          "value": "16px"
        },
        "xl": {
          "value": "20px"
        },
        "2xl": {
          "value": "20px"
        },
        "control": {
          "value": "12px"
        },
        "container": {
          "value": "16px"
        }
      },
      "spacing": {
        "0.5": {
          "value": "0.125rem"
        },
        "1": {
          "value": "0.25rem"
        },
        "1.5": {
          "value": "0.375rem"
        },
        "2": {
          "value": "0.5rem"
        },
        "2.5": {
          "value": "0.625rem"
        },
        "3": {
          "value": "0.75rem"
        },
        "3.5": {
          "value": "0.875rem"
        },
        "4": {
          "value": "1.0rem"
        },
        "4.5": {
          "value": "1.125rem"
        },
        "5": {
          "value": "1.25rem"
        },
        "6": {
          "value": "1.5rem"
        },
        "7": {
          "value": "1.75rem"
        },
        "8": {
          "value": "2.0rem"
        },
        "9": {
          "value": "2.25rem"
        },
        "10": {
          "value": "2.5rem"
        },
        "11": {
          "value": "2.75rem"
        },
        "12": {
          "value": "3.0rem"
        },
        "14": {
          "value": "3.5rem"
        },
        "16": {
          "value": "4.0rem"
        },
        "20": {
          "value": "5.0rem"
        },
        "24": {
          "value": "6.0rem"
        },
        "28": {
          "value": "7.0rem"
        },
        "32": {
          "value": "8.0rem"
        },
        "36": {
          "value": "9.0rem"
        },
        "40": {
          "value": "10.0rem"
        },
        "44": {
          "value": "11.0rem"
        },
        "48": {
          "value": "12.0rem"
        },
        "52": {
          "value": "13.0rem"
        },
        "56": {
          "value": "14.0rem"
        },
        "60": {
          "value": "15.0rem"
        },
        "64": {
          "value": "16.0rem"
        },
        "72": {
          "value": "18.0rem"
        },
        "80": {
          "value": "20.0rem"
        },
        "96": {
          "value": "24.0rem"
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
