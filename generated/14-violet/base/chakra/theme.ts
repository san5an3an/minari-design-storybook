// @interop Chakra UI 기반 Violet 테마 정의

import { defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  "theme": {
    "semanticTokens": {
      "colors": {
        "accent": {
          "solid": {
            "value": "#b75c30"
          },
          "emphasized": {
            "value": "#a34d21"
          },
          "muted": {
            "value": "#fdece5"
          },
          "subtle": {
            "value": "#fff6f1"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#70432d"
          },
          "focusRing": {
            "value": "#6d7ac7"
          }
        },
        "brand": {
          "solid": {
            "value": "#5e6ad2"
          },
          "emphasized": {
            "value": "#505abd"
          },
          "muted": {
            "value": "#d3d7ea"
          },
          "subtle": {
            "value": "#e8eaf5"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#353c70"
          },
          "focusRing": {
            "value": "#6d7ac7"
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
            "value": "#6d7ac7"
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
            "value": "#6d7ac7"
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
            "value": "#6d7ac7"
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
            "value": "#6d7ac7"
          }
        },
        "bg": {
          "DEFAULT": {
            "value": "#f8f8f8"
          },
          "subtle": {
            "value": "#f0f0f1"
          },
          "muted": {
            "value": "#f0f0f1"
          },
          "emphasized": {
            "value": "#77757b"
          },
          "panel": {
            "value": "#f0f0f1"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#09080a"
          },
          "muted": {
            "value": "#5d5c60"
          },
          "subtle": {
            "value": "#5d5c60"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#cac9cc"
          },
          "muted": {
            "value": "#d7d6d9"
          },
          "emphasized": {
            "value": "#b6b5b9"
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
            "value": "#c06538"
          },
          "emphasized": {
            "value": "#d0764c"
          },
          "muted": {
            "value": "#2b1f1a"
          },
          "subtle": {
            "value": "#1e1714"
          },
          "contrast": {
            "value": "#240c03"
          },
          "fg": {
            "value": "#d8a28b"
          },
          "focusRing": {
            "value": "#5965b0"
          }
        },
        "brand": {
          "solid": {
            "value": "#5e6ad2"
          },
          "emphasized": {
            "value": "#7786ee"
          },
          "muted": {
            "value": "#222532"
          },
          "subtle": {
            "value": "#171920"
          },
          "contrast": {
            "value": "#ffffff"
          },
          "fg": {
            "value": "#a3b0eb"
          },
          "focusRing": {
            "value": "#5965b0"
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
            "value": "#5965b0"
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
            "value": "#5965b0"
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
            "value": "#5965b0"
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
            "value": "#5965b0"
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
            "value": "#7f7e83"
          },
          "panel": {
            "value": "#222223"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f9f9fc"
          },
          "muted": {
            "value": "#9a999d"
          },
          "subtle": {
            "value": "#9a999d"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#474749"
          },
          "muted": {
            "value": "#3a3a3c"
          },
          "emphasized": {
            "value": "#5b5b5e"
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
            "value": "#ffba9a"
          },
          "emphasized": {
            "value": "#ffd1bc"
          },
          "muted": {
            "value": "#0e0603"
          },
          "subtle": {
            "value": "#040201"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#fff0e9"
          },
          "focusRing": {
            "value": "#8894d6"
          }
        },
        "brand": {
          "solid": {
            "value": "#bbc7ff"
          },
          "emphasized": {
            "value": "#cfd8ff"
          },
          "muted": {
            "value": "#060711"
          },
          "subtle": {
            "value": "#020204"
          },
          "contrast": {
            "value": "#000000"
          },
          "fg": {
            "value": "#edf1ff"
          },
          "focusRing": {
            "value": "#8894d6"
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
            "value": "#8894d6"
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
            "value": "#8894d6"
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
            "value": "#8894d6"
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
            "value": "#8894d6"
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
            "value": "#c9c9ce"
          },
          "panel": {
            "value": "#080809"
          }
        },
        "fg": {
          "DEFAULT": {
            "value": "#f1f0f3"
          },
          "muted": {
            "value": "#e5e4e9"
          },
          "subtle": {
            "value": "#e5e4e9"
          }
        },
        "border": {
          "DEFAULT": {
            "value": "#818183"
          },
          "muted": {
            "value": "#6a696b"
          },
          "emphasized": {
            "value": "#99989b"
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
