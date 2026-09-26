// @interop Chakra UI 기반 Emerald 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#40c68b"
          },
          "emphasized": {
            "value": "#2fb47b"
          },
          "muted": {
            "value": "#e4f5eb"
          },
          "subtle": {
            "value": "#f1fbf5"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#1b5a3d"
          },
          "focusRing": {
            "value": "#73cb9e"
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
            "value": "#73cb9e"
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
            "value": "#73cb9e"
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
            "value": "#73cb9e"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f7f8f7"
          },
          "subtle": {
            "value": "#eff0ef"
          },
          "muted": {
            "value": "#eff0ef"
          },
          "emphasized": {
            "value": "#a6b0ab"
          },
          "panel": {
            "value": "#eff0ef"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#060907"
          },
          "muted": {
            "value": "#676e6a"
          },
          "subtle": {
            "value": "#676e6a"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c6cbc8"
          },
          "muted": {
            "value": "#d4d8d5"
          },
          "emphasized": {
            "value": "#b0b8b3"
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
            "value": "#00925f"
          },
          "emphasized": {
            "value": "#10a46d"
          },
          "muted": {
            "value": "#18261e"
          },
          "subtle": {
            "value": "#141b17"
          },
          "contrast": {
            "value": "#001a0d"
          },
          "fg": {
            "value": "#7fbd9b"
          },
          "focusRing": {
            "value": "#006d46"
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
            "value": "#006d46"
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
            "value": "#006d46"
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
            "value": "#006d46"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#181918"
          },
          "subtle": {
            "value": "#212222"
          },
          "muted": {
            "value": "#212222"
          },
          "emphasized": {
            "value": "#77817b"
          },
          "panel": {
            "value": "#212222"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f5fbf8"
          },
          "muted": {
            "value": "#939b96"
          },
          "subtle": {
            "value": "#939b96"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#444846"
          },
          "muted": {
            "value": "#373b39"
          },
          "emphasized": {
            "value": "#575d59"
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
            "value": "#6edea7"
          },
          "emphasized": {
            "value": "#83eeb7"
          },
          "muted": {
            "value": "#020b06"
          },
          "subtle": {
            "value": "#010301"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#c2fadb"
          },
          "focusRing": {
            "value": "#5ba981"
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
            "value": "#5ba981"
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
            "value": "#5ba981"
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
            "value": "#5ba981"
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
            "value": "#c2ccc6"
          },
          "panel": {
            "value": "#080808"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#ecf2ee"
          },
          "muted": {
            "value": "#dfe7e2"
          },
          "subtle": {
            "value": "#dfe7e2"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#7e8380"
          },
          "muted": {
            "value": "#676b68"
          },
          "emphasized": {
            "value": "#949a96"
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
