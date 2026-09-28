// @interop Chakra UI 기반 Slate 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "brand": {
          "solid": {
            "value": "#14233c"
          },
          "emphasized": {
            "value": "#08162d"
          },
          "muted": {
            "value": "#b9bcc1"
          },
          "subtle": {
            "value": "#dadcdf"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#030713"
          },
          "focusRing": {
            "value": "#202c3f"
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
            "value": "#202c3f"
          }
        },
        "info": {
          "solid": {
            "value": "#4f7a99"
          },
          "emphasized": {
            "value": "#416a87"
          },
          "muted": {
            "value": "#eaf1f7"
          },
          "subtle": {
            "value": "#f4f8fb"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#3c5161"
          },
          "focusRing": {
            "value": "#202c3f"
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
            "value": "#202c3f"
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
            "value": "#202c3f"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f7f8f8"
          },
          "subtle": {
            "value": "#eff0f1"
          },
          "muted": {
            "value": "#eff0f1"
          },
          "emphasized": {
            "value": "#72767a"
          },
          "panel": {
            "value": "#eff0f1"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#07080a"
          },
          "muted": {
            "value": "#595d60"
          },
          "subtle": {
            "value": "#595d60"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#c7cacc"
          },
          "muted": {
            "value": "#d5d7d9"
          },
          "emphasized": {
            "value": "#b3b6b9"
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
            "value": "#14233c"
          },
          "emphasized": {
            "value": "#7d90ae"
          },
          "muted": {
            "value": "#0f1115"
          },
          "subtle": {
            "value": "#0e0f11"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#9aa5b6"
          },
          "focusRing": {
            "value": "#101b2d"
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
            "value": "#101b2d"
          }
        },
        "info": {
          "solid": {
            "value": "#5883a2"
          },
          "emphasized": {
            "value": "#6994b2"
          },
          "muted": {
            "value": "#1e2327"
          },
          "subtle": {
            "value": "#16191b"
          },
          "contrast": {
            "value": "#0a151d"
          },
          "fg": {
            "value": "#9ab3c4"
          },
          "focusRing": {
            "value": "#101b2d"
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
            "value": "#101b2d"
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
            "value": "#101b2d"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#181919"
          },
          "subtle": {
            "value": "#222223"
          },
          "muted": {
            "value": "#222223"
          },
          "emphasized": {
            "value": "#7a7f82"
          },
          "panel": {
            "value": "#222223"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f7fafc"
          },
          "muted": {
            "value": "#96999d"
          },
          "subtle": {
            "value": "#96999d"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#454749"
          },
          "muted": {
            "value": "#393a3c"
          },
          "emphasized": {
            "value": "#595c5f"
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
            "value": "#b0cbf6"
          },
          "emphasized": {
            "value": "#c4dbff"
          },
          "muted": {
            "value": "#06080d"
          },
          "subtle": {
            "value": "#020203"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#e8f1ff"
          },
          "focusRing": {
            "value": "#8799b8"
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
            "value": "#8799b8"
          }
        },
        "info": {
          "solid": {
            "value": "#a5cfed"
          },
          "emphasized": {
            "value": "#b6dffc"
          },
          "muted": {
            "value": "#05090c"
          },
          "subtle": {
            "value": "#010203"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#e1f2ff"
          },
          "focusRing": {
            "value": "#8799b8"
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
            "value": "#8799b8"
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
            "value": "#8799b8"
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
            "value": "#c6cace"
          },
          "panel": {
            "value": "#080809"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#eef1f3"
          },
          "muted": {
            "value": "#e2e5e9"
          },
          "subtle": {
            "value": "#e2e5e9"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#7f8283"
          },
          "muted": {
            "value": "#686a6b"
          },
          "emphasized": {
            "value": "#95999b"
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
