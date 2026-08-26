// @interop MUI 기반 Ember 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#f38020",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#991b1b",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f8f7f7",
      "paper": "#f1f0ef"
    },
    "text": {
      "primary": "#0c0806",
      "secondary": "#726c66"
    },
    "divider": "#dad6d3",
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
    "borderRadius": 12
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
      "main": "#f38020",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#991b1b",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#191918",
      "paper": "#232221"
    },
    "text": {
      "primary": "#fef8f4",
      "secondary": "#9f9892"
    },
    "divider": "#3c3937",
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
    "borderRadius": 12
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
      "main": "#ffbb8f",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#ffb8b1",
      "contrastText": "#000000"
    },
    "background": {
      "default": "#020202",
      "paper": "#090807"
    },
    "text": {
      "primary": "#f4f0ec",
      "secondary": "#ebe4de"
    },
    "divider": "#6d6967",
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
    "borderRadius": 12
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
