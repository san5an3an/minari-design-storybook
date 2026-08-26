// @interop MUI 6 기반 Sand 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#c5ab77",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#8e1f0b",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f8f7f7",
      "paper": "#f1f0ee"
    },
    "text": {
      "primary": "#0c0805",
      "secondary": "#736b64"
    },
    "divider": "#dad6d2",
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
  "spacing": 8,
  "typography": {
    "fontSize": 16
  }
});

export const darkTheme = createTheme({
  "palette": {
    "mode": "dark",
    "primary": {
      "main": "#947b48",
      "contrastText": "#191306"
    },
    "error": {
      "main": "#8e1f0b",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#191918",
      "paper": "#232221"
    },
    "text": {
      "primary": "#fef8f2",
      "secondary": "#9f9890"
    },
    "divider": "#3d3936",
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
  "spacing": 8,
  "typography": {
    "fontSize": 16
  }
});

export const highContrastTheme = createTheme({
  "palette": {
    "mode": "dark",
    "primary": {
      "main": "#dfc798",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#ffb8ad",
      "contrastText": "#000000"
    },
    "background": {
      "default": "#020202",
      "paper": "#090807"
    },
    "text": {
      "primary": "#f5f0ea",
      "secondary": "#ebe4dc"
    },
    "divider": "#6d6966",
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
  "spacing": 8,
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
