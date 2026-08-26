// @interop MUI 6 기반 Rust 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#9e6954",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#eb0036",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f9f7f7",
      "paper": "#f2efee"
    },
    "text": {
      "primary": "#0c0706",
      "secondary": "#655a56"
    },
    "divider": "#dcd5d2",
    "success": {
      "main": "#51c672",
      "contrastText": "#000000"
    },
    "warning": {
      "main": "#daa500",
      "contrastText": "#000000"
    }
  },
  "shape": {
    "borderRadius": 4
  },
  "spacing": 4,
  "typography": {
    "fontSize": 16
  }
});

export const darkTheme = createTheme({
  "palette": {
    "mode": "dark",
    "primary": {
      "main": "#a7715c",
      "contrastText": "#1e100a"
    },
    "error": {
      "main": "#eb0036",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#191818",
      "paper": "#232221"
    },
    "text": {
      "primary": "#fff8f5",
      "secondary": "#a39792"
    },
    "divider": "#3e3936",
    "success": {
      "main": "#009342",
      "contrastText": "#011a07"
    },
    "warning": {
      "main": "#a07800",
      "contrastText": "#1c1200"
    }
  },
  "shape": {
    "borderRadius": 4
  },
  "spacing": 4,
  "typography": {
    "fontSize": 16
  }
});

export const highContrastTheme = createTheme({
  "palette": {
    "mode": "dark",
    "primary": {
      "main": "#f2bea8",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#ffb8b4",
      "contrastText": "#000000"
    },
    "background": {
      "default": "#020202",
      "paper": "#090807"
    },
    "text": {
      "primary": "#f7efec",
      "secondary": "#efe3de"
    },
    "divider": "#6e6866",
    "success": {
      "main": "#79de91",
      "contrastText": "#000000"
    },
    "warning": {
      "main": "#f5c24b",
      "contrastText": "#000000"
    }
  },
  "shape": {
    "borderRadius": 4
  },
  "spacing": 4,
  "typography": {
    "fontSize": 16
  }
});

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
