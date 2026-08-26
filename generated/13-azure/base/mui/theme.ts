// @interop MUI 6 기반 Azure 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#0080ff",
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
      "primary": "#070809",
      "secondary": "#6a6d6f"
    },
    "divider": "#d5d7d8",
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
    "borderRadius": 16
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
      "main": "#0080ff",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#d25549",
      "contrastText": "#260907"
    },
    "background": {
      "default": "#181919",
      "paper": "#222222"
    },
    "text": {
      "primary": "#f7fafb",
      "secondary": "#969a9b"
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
    "borderRadius": 16
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
      "main": "#a7ccff",
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
      "primary": "#eef1f2",
      "secondary": "#e2e5e7"
    },
    "divider": "#686a6a",
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
    "borderRadius": 16
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
