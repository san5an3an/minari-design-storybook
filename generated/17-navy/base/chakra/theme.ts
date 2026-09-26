// @interop Chakra UI 기반 Navy 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#0055ff"
          },
          "emphasized": {
            "value": "#0048dd"
          },
          "muted": {
            "value": "#c7d6f1"
          },
          "subtle": {
            "value": "#e1eaf9"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#13398b"
          },
          "focusRing": {
            "value": "#336ee7"
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
            "value": "#336ee7"
          }
        },
        "info": {
          "solid": {
            "value": "#007cb8"
          },
          "emphasized": {
            "value": "#006ca0"
          },
          "muted": {
            "value": "#e4f2fd"
          },
          "subtle": {
            "value": "#f1f9ff"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#245372"
          },
          "focusRing": {
            "value": "#336ee7"
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
            "value": "#336ee7"
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
            "value": "#336ee7"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f7f8f9"
          },
          "subtle": {
            "value": "#eff0f2"
          },
          "muted": {
            "value": "#eff0f2"
          },
          "emphasized": {
            "value": "#71767f"
          },
          "panel": {
            "value": "#eff0f2"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#07080c"
          },
          "muted": {
            "value": "#595d63"
          },
          "subtle": {
            "value": "#595d63"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c7cacf"
          },
          "muted": {
            "value": "#d4d7db"
          },
          "emphasized": {
            "value": "#b2b6bd"
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
            "value": "#0055ff"
          },
          "emphasized": {
            "value": "#528bff"
          },
          "muted": {
            "value": "#182337"
          },
          "subtle": {
            "value": "#121823"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#86b0ff"
          },
          "focusRing": {
            "value": "#1f57cf"
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
            "value": "#1f57cf"
          }
        },
        "info": {
          "solid": {
            "value": "#1286c2"
          },
          "emphasized": {
            "value": "#3496d2"
          },
          "muted": {
            "value": "#19242b"
          },
          "subtle": {
            "value": "#141a1e"
          },
          "contrast": {
            "value": "#001625"
          },
          "fg": {
            "value": "#84b5d7"
          },
          "focusRing": {
            "value": "#1f57cf"
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
            "value": "#1f57cf"
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
            "value": "#1f57cf"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#181919"
          },
          "subtle": {
            "value": "#212223"
          },
          "muted": {
            "value": "#212223"
          },
          "emphasized": {
            "value": "#797f87"
          },
          "panel": {
            "value": "#212223"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f6faff"
          },
          "muted": {
            "value": "#9599a1"
          },
          "subtle": {
            "value": "#9599a1"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#45474b"
          },
          "muted": {
            "value": "#383a3d"
          },
          "emphasized": {
            "value": "#585c61"
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
            "value": "#aecbff"
          },
          "emphasized": {
            "value": "#c7dbff"
          },
          "muted": {
            "value": "#050811"
          },
          "subtle": {
            "value": "#010204"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#eaf1ff"
          },
          "focusRing": {
            "value": "#7899d6"
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
            "value": "#7899d6"
          }
        },
        "info": {
          "solid": {
            "value": "#8ed1ff"
          },
          "emphasized": {
            "value": "#b2dfff"
          },
          "muted": {
            "value": "#03090f"
          },
          "subtle": {
            "value": "#010204"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#e0f2ff"
          },
          "focusRing": {
            "value": "#7899d6"
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
            "value": "#7899d6"
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
            "value": "#7899d6"
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
            "value": "#c4cad2"
          },
          "panel": {
            "value": "#080809"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#eef1f5"
          },
          "muted": {
            "value": "#e1e5ec"
          },
          "subtle": {
            "value": "#e1e5ec"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#7f8185"
          },
          "muted": {
            "value": "#686a6d"
          },
          "emphasized": {
            "value": "#95999e"
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
