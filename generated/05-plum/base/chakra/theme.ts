// @interop Chakra UI 기반 Plum 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "accent": {
          "solid": {
            "value": "#f69700"
          },
          "emphasized": {
            "value": "#df8800"
          },
          "muted": {
            "value": "#feeddc"
          },
          "subtle": {
            "value": "#fff6ee"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#734300"
          },
          "focusRing": {
            "value": "#9568ec"
          }
        },
        "brand": {
          "solid": {
            "value": "#9146ff"
          },
          "emphasized": {
            "value": "#8034e8"
          },
          "muted": {
            "value": "#dcd6f3"
          },
          "subtle": {
            "value": "#ede9fa"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#4f2e86"
          },
          "focusRing": {
            "value": "#9568ec"
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
            "value": "#9568ec"
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
            "value": "#9568ec"
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
            "value": "#9568ec"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f8f7f8"
          },
          "subtle": {
            "value": "#f1f0f1"
          },
          "muted": {
            "value": "#f1f0f1"
          },
          "emphasized": {
            "value": "#7a747b"
          },
          "panel": {
            "value": "#f1f0f1"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#0b080b"
          },
          "muted": {
            "value": "#5f5b60"
          },
          "subtle": {
            "value": "#5f5b60"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#ccc8cc"
          },
          "muted": {
            "value": "#d8d6d9"
          },
          "emphasized": {
            "value": "#b8b4b9"
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
        "accent": {
          "solid": {
            "value": "#b56d00"
          },
          "emphasized": {
            "value": "#cb7b00"
          },
          "muted": {
            "value": "#2c1f13"
          },
          "subtle": {
            "value": "#1e1711"
          },
          "contrast": {
            "value": "#200f00"
          },
          "fg": {
            "value": "#dca368"
          },
          "focusRing": {
            "value": "#8052d4"
          }
        },
        "brand": {
          "solid": {
            "value": "#9146ff"
          },
          "emphasized": {
            "value": "#a375ff"
          },
          "muted": {
            "value": "#292339"
          },
          "subtle": {
            "value": "#1b1823"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#bea6ff"
          },
          "focusRing": {
            "value": "#8052d4"
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
            "value": "#8052d4"
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
            "value": "#8052d4"
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
            "value": "#8052d4"
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
            "value": "#827d83"
          },
          "panel": {
            "value": "#222223"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#fbf8fc"
          },
          "muted": {
            "value": "#9d989e"
          },
          "subtle": {
            "value": "#9d989e"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#494649"
          },
          "muted": {
            "value": "#3b393c"
          },
          "emphasized": {
            "value": "#5e5a5f"
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
        "accent": {
          "solid": {
            "value": "#ffbc75"
          },
          "emphasized": {
            "value": "#ffd2a5"
          },
          "muted": {
            "value": "#0f0601"
          },
          "subtle": {
            "value": "#040200"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#ffefe1"
          },
          "focusRing": {
            "value": "#a388e6"
          }
        },
        "brand": {
          "solid": {
            "value": "#d0c1ff"
          },
          "emphasized": {
            "value": "#dfd5ff"
          },
          "muted": {
            "value": "#090613"
          },
          "subtle": {
            "value": "#020205"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#f4f1ff"
          },
          "focusRing": {
            "value": "#a388e6"
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
            "value": "#a388e6"
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
            "value": "#a388e6"
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
            "value": "#a388e6"
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
            "value": "#cdc8ce"
          },
          "panel": {
            "value": "#080809"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f3f0f3"
          },
          "muted": {
            "value": "#e8e4e9"
          },
          "subtle": {
            "value": "#e8e4e9"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#838184"
          },
          "muted": {
            "value": "#6b696b"
          },
          "emphasized": {
            "value": "#9b989c"
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
