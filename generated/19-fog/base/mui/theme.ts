// @interop MUI 기반 Fog 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#1d2d35",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#c94c49",
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
      "main": "#1d2d35",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#d25450",
      "contrastText": "#260908"
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
      "main": "#9bd1ec",
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
      "primary": "#eef1f2",
      "secondary": "#e2e6e7"
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
