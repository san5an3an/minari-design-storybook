// @interop Chakra UI 기반 Graphite 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#181717"
          },
          "emphasized": {
            "value": "#0c0b0b"
          },
          "muted": {
            "value": "#b7b7b7"
          },
          "subtle": {
            "value": "#dadada"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#020202"
          },
          "focusRing": {
            "value": "#201f1f"
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
            "value": "#201f1f"
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
            "value": "#201f1f"
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
            "value": "#201f1f"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f7f8f8"
          },
          "subtle": {
            "value": "#f0f0f0"
          },
          "muted": {
            "value": "#f0f0f0"
          },
          "emphasized": {
            "value": "#747679"
          },
          "panel": {
            "value": "#f0f0f0"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#080809"
          },
          "muted": {
            "value": "#5b5d5e"
          },
          "subtle": {
            "value": "#5b5d5e"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c9cacb"
          },
          "muted": {
            "value": "#d6d7d8"
          },
          "emphasized": {
            "value": "#b4b6b8"
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
          "value": "0.0938rem"
        },
        "1": {
          "value": "0.1875rem"
        },
        "1.5": {
          "value": "0.2812rem"
        },
        "2": {
          "value": "0.375rem"
        },
        "2.5": {
          "value": "0.4688rem"
        },
        "3": {
          "value": "0.5625rem"
        },
        "3.5": {
          "value": "0.6562rem"
        },
        "4": {
          "value": "0.75rem"
        },
        "4.5": {
          "value": "0.8438rem"
        },
        "5": {
          "value": "0.9375rem"
        },
        "6": {
          "value": "1.125rem"
        },
        "7": {
          "value": "1.3125rem"
        },
        "8": {
          "value": "1.5rem"
        },
        "9": {
          "value": "1.6875rem"
        },
        "10": {
          "value": "1.875rem"
        },
        "11": {
          "value": "2.0625rem"
        },
        "12": {
          "value": "2.25rem"
        },
        "14": {
          "value": "2.625rem"
        },
        "16": {
          "value": "3.0rem"
        },
        "20": {
          "value": "3.75rem"
        },
        "24": {
          "value": "4.5rem"
        },
        "28": {
          "value": "5.25rem"
        },
        "32": {
          "value": "6.0rem"
        },
        "36": {
          "value": "6.75rem"
        },
        "40": {
          "value": "7.5rem"
        },
        "44": {
          "value": "8.25rem"
        },
        "48": {
          "value": "9.0rem"
        },
        "52": {
          "value": "9.75rem"
        },
        "56": {
          "value": "10.5rem"
        },
        "60": {
          "value": "11.25rem"
        },
        "64": {
          "value": "12.0rem"
        },
        "72": {
          "value": "13.5rem"
        },
        "80": {
          "value": "15.0rem"
        },
        "96": {
          "value": "18.0rem"
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
            "value": "#181717"
          },
          "emphasized": {
            "value": "#8f8e8e"
          },
          "muted": {
            "value": "#101010"
          },
          "subtle": {
            "value": "#0e0e0e"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#a4a3a3"
          },
          "focusRing": {
            "value": "#171616"
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
            "value": "#171616"
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
            "value": "#171616"
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
            "value": "#171616"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#191919"
          },
          "subtle": {
            "value": "#222222"
          },
          "muted": {
            "value": "#222222"
          },
          "emphasized": {
            "value": "#7d7f81"
          },
          "panel": {
            "value": "#222222"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f8f9fb"
          },
          "muted": {
            "value": "#989a9b"
          },
          "subtle": {
            "value": "#989a9b"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#464748"
          },
          "muted": {
            "value": "#393a3b"
          },
          "emphasized": {
            "value": "#5a5b5d"
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
          "value": "0.0938rem"
        },
        "1": {
          "value": "0.1875rem"
        },
        "1.5": {
          "value": "0.2812rem"
        },
        "2": {
          "value": "0.375rem"
        },
        "2.5": {
          "value": "0.4688rem"
        },
        "3": {
          "value": "0.5625rem"
        },
        "3.5": {
          "value": "0.6562rem"
        },
        "4": {
          "value": "0.75rem"
        },
        "4.5": {
          "value": "0.8438rem"
        },
        "5": {
          "value": "0.9375rem"
        },
        "6": {
          "value": "1.125rem"
        },
        "7": {
          "value": "1.3125rem"
        },
        "8": {
          "value": "1.5rem"
        },
        "9": {
          "value": "1.6875rem"
        },
        "10": {
          "value": "1.875rem"
        },
        "11": {
          "value": "2.0625rem"
        },
        "12": {
          "value": "2.25rem"
        },
        "14": {
          "value": "2.625rem"
        },
        "16": {
          "value": "3.0rem"
        },
        "20": {
          "value": "3.75rem"
        },
        "24": {
          "value": "4.5rem"
        },
        "28": {
          "value": "5.25rem"
        },
        "32": {
          "value": "6.0rem"
        },
        "36": {
          "value": "6.75rem"
        },
        "40": {
          "value": "7.5rem"
        },
        "44": {
          "value": "8.25rem"
        },
        "48": {
          "value": "9.0rem"
        },
        "52": {
          "value": "9.75rem"
        },
        "56": {
          "value": "10.5rem"
        },
        "60": {
          "value": "11.25rem"
        },
        "64": {
          "value": "12.0rem"
        },
        "72": {
          "value": "13.5rem"
        },
        "80": {
          "value": "15.0rem"
        },
        "96": {
          "value": "18.0rem"
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
            "value": "#f5bbbc"
          },
          "emphasized": {
            "value": "#ffcece"
          },
          "muted": {
            "value": "#0c0707"
          },
          "subtle": {
            "value": "#030202"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#ffeeee"
          },
          "focusRing": {
            "value": "#b78e8e"
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
            "value": "#b78e8e"
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
            "value": "#b78e8e"
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
            "value": "#b78e8e"
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
            "value": "#c8cacc"
          },
          "panel": {
            "value": "#080808"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f0f1f2"
          },
          "muted": {
            "value": "#e4e5e7"
          },
          "subtle": {
            "value": "#e4e5e7"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#808183"
          },
          "muted": {
            "value": "#696a6a"
          },
          "emphasized": {
            "value": "#97999a"
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
          "value": "0.0938rem"
        },
        "1": {
          "value": "0.1875rem"
        },
        "1.5": {
          "value": "0.2812rem"
        },
        "2": {
          "value": "0.375rem"
        },
        "2.5": {
          "value": "0.4688rem"
        },
        "3": {
          "value": "0.5625rem"
        },
        "3.5": {
          "value": "0.6562rem"
        },
        "4": {
          "value": "0.75rem"
        },
        "4.5": {
          "value": "0.8438rem"
        },
        "5": {
          "value": "0.9375rem"
        },
        "6": {
          "value": "1.125rem"
        },
        "7": {
          "value": "1.3125rem"
        },
        "8": {
          "value": "1.5rem"
        },
        "9": {
          "value": "1.6875rem"
        },
        "10": {
          "value": "1.875rem"
        },
        "11": {
          "value": "2.0625rem"
        },
        "12": {
          "value": "2.25rem"
        },
        "14": {
          "value": "2.625rem"
        },
        "16": {
          "value": "3.0rem"
        },
        "20": {
          "value": "3.75rem"
        },
        "24": {
          "value": "4.5rem"
        },
        "28": {
          "value": "5.25rem"
        },
        "32": {
          "value": "6.0rem"
        },
        "36": {
          "value": "6.75rem"
        },
        "40": {
          "value": "7.5rem"
        },
        "44": {
          "value": "8.25rem"
        },
        "48": {
          "value": "9.0rem"
        },
        "52": {
          "value": "9.75rem"
        },
        "56": {
          "value": "10.5rem"
        },
        "60": {
          "value": "11.25rem"
        },
        "64": {
          "value": "12.0rem"
        },
        "72": {
          "value": "13.5rem"
        },
        "80": {
          "value": "15.0rem"
        },
        "96": {
          "value": "18.0rem"
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
