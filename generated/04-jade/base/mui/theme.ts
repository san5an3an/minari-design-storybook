// @interop MUI 6 기반 Jade 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#47a248",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#c84d42",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f7f8f7",
      "paper": "#eff0ef"
    },
    "text": {
      "primary": "#070807",
      "secondary": "#696e6a"
    },
    "divider": "#d5d8d5",
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
    "borderRadius": 12
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
      "main": "#47a248",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#d25549",
      "contrastText": "#260907"
    },
    "background": {
      "default": "#181918",
      "paper": "#222222"
    },
    "text": {
      "primary": "#f7faf7",
      "secondary": "#959a96"
    },
    "divider": "#383b39",
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
  "spacing": 8,
  "typography": {
    "fontSize": 16
  }
});

export const highContrastTheme = createTheme({
  "palette": {
    "mode": "dark",
    "primary": {
      "main": "#90db8d",
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
      "primary": "#eef1ee",
      "secondary": "#e1e6e2"
    },
    "divider": "#676a68",
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
    "borderRadius": 12
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
