// @interop MUI 6 기반 Saffron 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#ff9900",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#dd3338",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f8f8f7",
      "paper": "#f1f0ee"
    },
    "text": {
      "primary": "#0b0805",
      "secondary": "#716c65"
    },
    "divider": "#d9d6d2",
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
      "main": "#ff9900",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#e63e40",
      "contrastText": "#260908"
    },
    "background": {
      "default": "#191918",
      "paper": "#232221"
    },
    "text": {
      "primary": "#fdf9f3",
      "secondary": "#9e9991"
    },
    "divider": "#3c3a36",
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
      "main": "#ffbc79",
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
      "primary": "#f3f0eb",
      "secondary": "#e9e4dc"
    },
    "divider": "#6c6966",
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
