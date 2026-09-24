// @interop Chakra UI 기반 Indigo 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#635bff"
          },
          "emphasized": {
            "value": "#564ae8"
          },
          "muted": {
            "value": "#d3d8f3"
          },
          "subtle": {
            "value": "#e8eafa"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#373787"
          },
          "focusRing": {
            "value": "#6f74eb"
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
            "value": "#6f74eb"
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
            "value": "#6f74eb"
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
            "value": "#6f74eb"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f7f8f8"
          },
          "subtle": {
            "value": "#f0f0f1"
          },
          "muted": {
            "value": "#f0f0f1"
          },
          "emphasized": {
            "value": "#75757c"
          },
          "panel": {
            "value": "#f0f0f1"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#08080b"
          },
          "muted": {
            "value": "#5b5c61"
          },
          "subtle": {
            "value": "#5b5c61"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c9c9cd"
          },
          "muted": {
            "value": "#d6d6da"
          },
          "emphasized": {
            "value": "#b5b5bb"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "xs": {
          "value": "2px"
        },
        "sm": {
          "value": "4px"
        },
        "md": {
          "value": "6px"
        },
        "lg": {
          "value": "6px"
        },
        "xl": {
          "value": "8px"
        },
        "2xl": {
          "value": "8px"
        },
        "control": {
          "value": "4px"
        },
        "container": {
          "value": "6px"
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
            "value": "#635bff"
          },
          "emphasized": {
            "value": "#7d82ff"
          },
          "muted": {
            "value": "#222439"
          },
          "subtle": {
            "value": "#171823"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#a3adff"
          },
          "focusRing": {
            "value": "#5c5ed3"
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
            "value": "#5c5ed3"
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
            "value": "#5c5ed3"
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
            "value": "#5c5ed3"
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
            "value": "#7d7e84"
          },
          "panel": {
            "value": "#222223"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f8f9fd"
          },
          "muted": {
            "value": "#98999e"
          },
          "subtle": {
            "value": "#98999e"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#46474a"
          },
          "muted": {
            "value": "#393a3c"
          },
          "emphasized": {
            "value": "#5a5b60"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "xs": {
          "value": "2px"
        },
        "sm": {
          "value": "4px"
        },
        "md": {
          "value": "6px"
        },
        "lg": {
          "value": "6px"
        },
        "xl": {
          "value": "8px"
        },
        "2xl": {
          "value": "8px"
        },
        "control": {
          "value": "4px"
        },
        "container": {
          "value": "6px"
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
            "value": "#bfc6ff"
          },
          "emphasized": {
            "value": "#d2d8ff"
          },
          "muted": {
            "value": "#060714"
          },
          "subtle": {
            "value": "#020205"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#eff1ff"
          },
          "focusRing": {
            "value": "#8790ee"
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
            "value": "#8790ee"
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
            "value": "#8790ee"
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
            "value": "#8790ee"
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
            "value": "#c8c9d0"
          },
          "panel": {
            "value": "#080809"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f0f0f4"
          },
          "muted": {
            "value": "#e4e5ea"
          },
          "subtle": {
            "value": "#e4e5ea"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#808184"
          },
          "muted": {
            "value": "#696a6c"
          },
          "emphasized": {
            "value": "#98989d"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "xs": {
          "value": "2px"
        },
        "sm": {
          "value": "4px"
        },
        "md": {
          "value": "6px"
        },
        "lg": {
          "value": "6px"
        },
        "xl": {
          "value": "8px"
        },
        "2xl": {
          "value": "8px"
        },
        "control": {
          "value": "4px"
        },
        "container": {
          "value": "6px"
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
