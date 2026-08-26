// @interop MUI 6 기반 Navy 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#0055ff",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#c94c49",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f7f8f9",
      "paper": "#eff0f2"
    },
    "text": {
      "primary": "#07080c",
      "secondary": "#595d63"
    },
    "divider": "#d4d7db",
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
  "spacing": 4,
  "typography": {
    "fontSize": 16
  }
});

export const darkTheme = createTheme({
  "palette": {
    "mode": "dark",
    "primary": {
      "main": "#0055ff",
      "contrastText": "#ffffff"
    },
    "error": {
      "main": "#d25450",
      "contrastText": "#260908"
    },
    "background": {
      "default": "#181919",
      "paper": "#212223"
    },
    "text": {
      "primary": "#f6faff",
      "secondary": "#9599a1"
    },
    "divider": "#383a3d",
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
  "spacing": 4,
  "typography": {
    "fontSize": 16
  }
});

export const highContrastTheme = createTheme({
  "palette": {
    "mode": "dark",
    "primary": {
      "main": "#aecbff",
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
      "primary": "#eef1f5",
      "secondary": "#e1e5ec"
    },
    "divider": "#686a6d",
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
