// @interop MUI 기반 Crimson 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#7f1d1d",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#e50914",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f8f7f8",
      "paper": "#f1f0f0"
    },
    "text": {
      "primary": "#0a0809",
      "secondary": "#5f5b5c"
    },
    "divider": "#d8d6d6",
    "success": {
      "main": "#35ca68",
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
      "main": "#7f1d1d",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#e50914",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#191919",
      "paper": "#222222"
    },
    "text": {
      "primary": "#fcf8f9",
      "secondary": "#9c9898"
    },
    "divider": "#3b393a",
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
      "main": "#ffb6c2",
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
      "primary": "#f3f0f1",
      "secondary": "#e8e4e5"
    },
    "divider": "#6b696a",
    "success": {
      "main": "#6ce08a",
      "contrastText": "#000000"
    },
    "warning": {
      "main": "#fac130",
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
