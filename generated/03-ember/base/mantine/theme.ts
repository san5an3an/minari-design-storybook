// @interop Mantine 기반 Ember 테마 정의

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  "primaryColor": "brand",
  "primaryShade": {
    "light": 6,
    "dark": 6
  },
  "autoContrast": true,
  "colors": {
    "brand": [
      "#fbefe8",
      "#fbefe8",
      "#fbefe8",
      "#f6e2d6",
      "#f6e2d6",
      "#f6e2d6",
      "#f38020",
      "#e57616",
      "#e57616",
      "#e57616"
    ],
    "danger": [
      "#efe2e0",
      "#efe2e0",
      "#efe2e0",
      "#ddc7c4",
      "#ddc7c4",
      "#ddc7c4",
      "#991b1b",
      "#85030c",
      "#85030c",
      "#85030c"
    ],
    "success": [
      "#f0fbf2",
      "#f0fbf2",
      "#f0fbf2",
      "#e3f6e6",
      "#e3f6e6",
      "#e3f6e6",
      "#35ca68",
      "#21b759",
      "#21b759",
      "#21b759"
    ],
    "warning": [
      "#fdf7ec",
      "#fdf7ec",
      "#fdf7ec",
      "#f9efda",
      "#f9efda",
      "#f9efda",
      "#daa500",
      "#c59400",
      "#c59400",
      "#c59400"
    ]
  },
  "defaultRadius": "12px",
  "fontSizes": {
    "md": "16px"
  }
});

export const darkTheme = createTheme({
  "primaryColor": "brand",
  "primaryShade": {
    "light": 6,
    "dark": 6
  },
  "autoContrast": true,
  "colors": {
    "brand": [
      "#241c17",
      "#241c17",
      "#241c17",
      "#3b2c23",
      "#3b2c23",
      "#3b2c23",
      "#f38020",
      "#ff964c",
      "#ff964c",
      "#ff964c"
    ],
    "danger": [
      "#1b1311",
      "#1b1311",
      "#1b1311",
      "#281817",
      "#281817",
      "#281817",
      "#991b1b",
      "#e4685e",
      "#e4685e",
      "#e4685e"
    ],
    "success": [
      "#131b15",
      "#131b15",
      "#131b15",
      "#18261b",
      "#18261b",
      "#18261b",
      "#009342",
      "#00a64c",
      "#00a64c",
      "#00a64c"
    ],
    "warning": [
      "#1c1810",
      "#1c1810",
      "#1c1810",
      "#292111",
      "#292111",
      "#292111",
      "#a07800",
      "#b48700",
      "#b48700",
      "#b48700"
    ]
  },
  "defaultRadius": "12px",
  "fontSizes": {
    "md": "16px"
  }
});

export const highContrastTheme = createTheme({
  "primaryColor": "brand",
  "primaryShade": {
    "light": 6,
    "dark": 6
  },
  "autoContrast": true,
  "colors": {
    "brand": [
      "#040100",
      "#040100",
      "#040100",
      "#110501",
      "#110501",
      "#110501",
      "#ffbb8f",
      "#ffd1b5",
      "#ffd1b5",
      "#ffd1b5"
    ],
    "danger": [
      "#050101",
      "#050101",
      "#050101",
      "#120404",
      "#120404",
      "#120404",
      "#ffb8b1",
      "#ffd0cb",
      "#ffd0cb",
      "#ffd0cb"
    ],
    "success": [
      "#010301",
      "#010301",
      "#010301",
      "#020b04",
      "#020b04",
      "#020b04",
      "#6ce08a",
      "#7df09a",
      "#7df09a",
      "#7df09a"
    ],
    "warning": [
      "#030200",
      "#030200",
      "#030200",
      "#0d0700",
      "#0d0700",
      "#0d0700",
      "#fac130",
      "#ffd478",
      "#ffd478",
      "#ffd478"
    ]
  },
  "defaultRadius": "12px",
  "fontSizes": {
    "md": "16px"
  }
});

// 모드-테마 매핑 표. 화면은 이 표만 참조
export const byMode = {
  "light": theme,
  "dark": darkTheme,
  "high-contrast": highContrastTheme,
};
