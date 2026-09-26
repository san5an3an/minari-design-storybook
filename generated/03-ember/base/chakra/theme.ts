// @interop Chakra UI 기반 Ember 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#f38020"
          },
          "emphasized": {
            "value": "#e57616"
          },
          "muted": {
            "value": "#f6e2d6"
          },
          "subtle": {
            "value": "#fbefe8"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#723a10"
          },
          "focusRing": {
            "value": "#ed965c"
          }
        },
        "danger": {
          "solid": {
            "value": "#991b1b"
          },
          "emphasized": {
            "value": "#85030c"
          },
          "muted": {
            "value": "#ddc7c4"
          },
          "subtle": {
            "value": "#efe2e0"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#571c18"
          },
          "focusRing": {
            "value": "#ed965c"
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
            "value": "#ed965c"
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
            "value": "#ed965c"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f8f7f7"
          },
          "subtle": {
            "value": "#f1f0ef"
          },
          "muted": {
            "value": "#f1f0ef"
          },
          "emphasized": {
            "value": "#b5aca6"
          },
          "panel": {
            "value": "#f1f0ef"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#0c0806"
          },
          "muted": {
            "value": "#726c66"
          },
          "subtle": {
            "value": "#726c66"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#cec9c5"
          },
          "muted": {
            "value": "#dad6d3"
          },
          "emphasized": {
            "value": "#bbb4af"
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
            "value": "#f38020"
          },
          "emphasized": {
            "value": "#ff964c"
          },
          "muted": {
            "value": "#3b2c23"
          },
          "subtle": {
            "value": "#241c17"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#fcbb91"
          },
          "focusRing": {
            "value": "#d58146"
          }
        },
        "danger": {
          "solid": {
            "value": "#991b1b"
          },
          "emphasized": {
            "value": "#e4685e"
          },
          "muted": {
            "value": "#281817"
          },
          "subtle": {
            "value": "#1b1311"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#df968e"
          },
          "focusRing": {
            "value": "#d58146"
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
            "value": "#d58146"
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
            "value": "#d58146"
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
            "value": "#857d76"
          },
          "panel": {
            "value": "#232221"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#fef8f4"
          },
          "muted": {
            "value": "#9f9892"
          },
          "subtle": {
            "value": "#9f9892"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#4a4643"
          },
          "muted": {
            "value": "#3c3937"
          },
          "emphasized": {
            "value": "#605a56"
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
            "value": "#ffbb8f"
          },
          "emphasized": {
            "value": "#ffd1b5"
          },
          "muted": {
            "value": "#110501"
          },
          "subtle": {
            "value": "#040100"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#fff0e7"
          },
          "focusRing": {
            "value": "#dc813f"
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
            "value": "#dc813f"
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
            "value": "#dc813f"
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
            "value": "#dc813f"
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
            "value": "#d0c8c2"
          },
          "panel": {
            "value": "#090807"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f4f0ec"
          },
          "muted": {
            "value": "#ebe4de"
          },
          "subtle": {
            "value": "#ebe4de"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#85817d"
          },
          "muted": {
            "value": "#6d6967"
          },
          "emphasized": {
            "value": "#9d9893"
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
