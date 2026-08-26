// @interop MUI 기반 Berry 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#ea4c89",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#a2191f",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f8f7f8",
      "paper": "#f1f0f0"
    },
    "text": {
      "primary": "#0b080a",
      "secondary": "#615b5e"
    },
    "divider": "#d9d6d7",
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
    "borderRadius": 16
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
      "main": "#ea4c89",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#a2191f",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#191919",
      "paper": "#232222"
    },
    "text": {
      "primary": "#fcf8fa",
      "secondary": "#9e989b"
    },
    "divider": "#3c393a",
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
    "borderRadius": 16
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
      "main": "#ffb5ca",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#ffb7b5",
      "contrastText": "#000000"
    },
    "background": {
      "default": "#020202",
      "paper": "#090808"
    },
    "text": {
      "primary": "#f4f0f2",
      "secondary": "#e9e4e6"
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
    "borderRadius": 16
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
