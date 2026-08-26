// @interop MUI 기반 Emerald 테마 정의

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#40c68b",
      "contrastText": "#000000"
    },
    "error": {
      "main": "#c94c49",
      "contrastText": "#ffffff"
    },
    "background": {
      "default": "#f7f8f7",
      "paper": "#eff0ef"
    },
    "text": {
      "primary": "#060907",
      "secondary": "#676e6a"
    },
    "divider": "#d4d8d5",
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
      "main": "#00925f",
      "contrastText": "#001a0d"
    },
    "error": {
      "main": "#d25450",
      "contrastText": "#260908"
    },
    "background": {
      "default": "#181918",
      "paper": "#212222"
    },
    "text": {
      "primary": "#f5fbf8",
      "secondary": "#939b96"
    },
    "divider": "#373b39",
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
      "main": "#6edea7",
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
      "primary": "#ecf2ee",
      "secondary": "#dfe7e2"
    },
    "divider": "#676b68",
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
