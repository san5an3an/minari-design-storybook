// @interop MUI 기반 Graphite 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#181717",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#c94c49",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f7f8f8",
      "paper": "#f0f0f0"
    },
    "text": {
      "primary": "#080809",
      "secondary": "#5b5d5e"
    },
    "divider": "#d6d7d8",
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
      "main": "#181717",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#d25450",
      "contrastText": "#260908"
    },
    "background": {
      "default": "#191919",
      "paper": "#222222"
    },
    "text": {
      "primary": "#f8f9fb",
      "secondary": "#989a9b"
    },
    "divider": "#393a3b",
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
      "main": "#f5bbbc",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#ffb8b1",
      "contrastText": "#000000"
    },
    "background": {
      "default": "#020202",
      "paper": "#080808"
    },
    "text": {
      "primary": "#f0f1f2",
      "secondary": "#e4e5e7"
    },
    "divider": "#696a6a",
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
