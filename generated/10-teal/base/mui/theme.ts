// @interop MUI 6 기반 Teal 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#26a5e4",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#c84d42",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f7f8f8",
      "paper": "#eff0f0"
    },
    "text": {
      "primary": "#060909",
      "secondary": "#686d6e"
    },
    "divider": "#d4d7d8",
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
    "borderRadius": 8
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
      "main": "#26a5e4",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#d25549",
      "contrastText": "#260907"
    },
    "background": {
      "default": "#181919",
      "paper": "#212222"
    },
    "text": {
      "primary": "#f6fafa",
      "secondary": "#959a9b"
    },
    "divider": "#383a3b",
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
    "borderRadius": 8
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
      "main": "#88d2ff",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#ffb8ad",
      "contrastText": "#000000"
    },
    "background": {
      "default": "#020202",
      "paper": "#080808"
    },
    "text": {
      "primary": "#edf1f1",
      "secondary": "#e0e6e6"
    },
    "divider": "#676a6a",
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
    "borderRadius": 8
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
