// @interop MUI 6 기반 Indigo 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#635bff",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#dd3338",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f7f8f8",
      "paper": "#f0f0f1"
    },
    "text": {
      "primary": "#08080b",
      "secondary": "#5b5c61"
    },
    "divider": "#d6d6da",
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
      "main": "#635bff",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#e63e40",
      "contrastText": "#260908"
    },
    "background": {
      "default": "#191919",
      "paper": "#222223"
    },
    "text": {
      "primary": "#f8f9fd",
      "secondary": "#98999e"
    },
    "divider": "#393a3c",
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
      "main": "#bfc6ff",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#ffb8b1",
      "contrastText": "#000000"
    },
    "background": {
      "default": "#020202",
      "paper": "#080809"
    },
    "text": {
      "primary": "#f0f0f4",
      "secondary": "#e4e5ea"
    },
    "divider": "#696a6c",
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
