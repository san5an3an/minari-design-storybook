// @interop MUI 기반 Cobalt 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#0052cc",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#c84d42",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f7f8f8",
      "paper": "#eff0f1"
    },
    "text": {
      "primary": "#08080b",
      "secondary": "#5a5d61"
    },
    "divider": "#d5d7da",
    "success": {
      "main": "#51c672",
      "contrastText": "#000000"
    },
    "warning": {
      "main": "#ffbb00",
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
      "main": "#0052cc",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#d25549",
      "contrastText": "#260907"
    },
    "background": {
      "default": "#181919",
      "paper": "#222223"
    },
    "text": {
      "primary": "#f8f9fd",
      "secondary": "#979a9f"
    },
    "divider": "#393a3c",
    "success": {
      "main": "#009342",
      "contrastText": "#011a07"
    },
    "warning": {
      "main": "#ffbb00",
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

export const highContrastTheme = createTheme({
  "palette": {
    "mode": "dark",
    "primary": {
      "main": "#abcbff",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#ffb8ad",
      "contrastText": "#000000"
    },
    "background": {
      "default": "#020202",
      "paper": "#080809"
    },
    "text": {
      "primary": "#eff1f4",
      "secondary": "#e3e5ea"
    },
    "divider": "#686a6c",
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
