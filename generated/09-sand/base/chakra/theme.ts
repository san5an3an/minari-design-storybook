// @interop Chakra UI 기반 Sand 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#c5ab77"
          },
          "emphasized": {
            "value": "#b39a68"
          },
          "muted": {
            "value": "#f4f0e7"
          },
          "subtle": {
            "value": "#faf7f3"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#5a4d35"
          },
          "focusRing": {
            "value": "#c7b38d"
          }
        },
        "danger": {
          "solid": {
            "value": "#8e1f0b"
          },
          "emphasized": {
            "value": "#781100"
          },
          "muted": {
            "value": "#dac6c1"
          },
          "subtle": {
            "value": "#ede1de"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#4f1a11"
          },
          "focusRing": {
            "value": "#c7b38d"
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
            "value": "#c7b38d"
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
            "value": "#c7b38d"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f8f7f7"
          },
          "subtle": {
            "value": "#f1f0ee"
          },
          "muted": {
            "value": "#f1f0ee"
          },
          "emphasized": {
            "value": "#b6ada2"
          },
          "panel": {
            "value": "#f1f0ee"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#0c0805"
          },
          "muted": {
            "value": "#736b64"
          },
          "subtle": {
            "value": "#736b64"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#cec9c3"
          },
          "muted": {
            "value": "#dad6d2"
          },
          "emphasized": {
            "value": "#bcb4ad"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "xs": {
          "value": "4px"
        },
        "sm": {
          "value": "8px"
        },
        "md": {
          "value": "12px"
        },
        "lg": {
          "value": "12px"
        },
        "xl": {
          "value": "16px"
        },
        "2xl": {
          "value": "16px"
        },
        "control": {
          "value": "8px"
        },
        "container": {
          "value": "12px"
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
            "value": "#947b48"
          },
          "emphasized": {
            "value": "#a48b5a"
          },
          "muted": {
            "value": "#25221c"
          },
          "subtle": {
            "value": "#1a1915"
          },
          "contrast": {
            "value": "#191306"
          },
          "fg": {
            "value": "#bcae92"
          },
          "focusRing": {
            "value": "#6b5935"
          }
        },
        "danger": {
          "solid": {
            "value": "#8e1f0b"
          },
          "emphasized": {
            "value": "#dd6c57"
          },
          "muted": {
            "value": "#261815"
          },
          "subtle": {
            "value": "#1a1211"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#da988a"
          },
          "focusRing": {
            "value": "#6b5935"
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
            "value": "#6b5935"
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
            "value": "#6b5935"
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
            "value": "#857d73"
          },
          "panel": {
            "value": "#232221"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#fef8f2"
          },
          "muted": {
            "value": "#9f9890"
          },
          "subtle": {
            "value": "#9f9890"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#4b4641"
          },
          "muted": {
            "value": "#3d3936"
          },
          "emphasized": {
            "value": "#605a53"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "xs": {
          "value": "4px"
        },
        "sm": {
          "value": "8px"
        },
        "md": {
          "value": "12px"
        },
        "lg": {
          "value": "12px"
        },
        "xl": {
          "value": "16px"
        },
        "2xl": {
          "value": "16px"
        },
        "control": {
          "value": "8px"
        },
        "container": {
          "value": "12px"
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
            "value": "#dfc798"
          },
          "emphasized": {
            "value": "#efd7a9"
          },
          "muted": {
            "value": "#0a0804"
          },
          "subtle": {
            "value": "#020201"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#fdefd5"
          },
          "focusRing": {
            "value": "#a89675"
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
            "value": "#a89675"
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
            "value": "#a89675"
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
            "value": "#a89675"
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
            "value": "#d1c8bf"
          },
          "panel": {
            "value": "#090807"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f5f0ea"
          },
          "muted": {
            "value": "#ebe4dc"
          },
          "subtle": {
            "value": "#ebe4dc"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#85817c"
          },
          "muted": {
            "value": "#6d6966"
          },
          "emphasized": {
            "value": "#9e9891"
          }
        }
      }
    },
    "tokens": {
      "radii": {
        "xs": {
          "value": "4px"
        },
        "sm": {
          "value": "8px"
        },
        "md": {
          "value": "12px"
        },
        "lg": {
          "value": "12px"
        },
        "xl": {
          "value": "16px"
        },
        "2xl": {
          "value": "16px"
        },
        "control": {
          "value": "8px"
        },
        "container": {
          "value": "12px"
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
