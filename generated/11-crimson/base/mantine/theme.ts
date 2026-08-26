// @interop Mantine 기반 Crimson 테마 정의

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
      "#ebe0df",
      "#ebe0df",
      "#ebe0df",
      "#d6c4c1",
      "#d6c4c1",
      "#d6c4c1",
      "#7f1d1d",
      "#6c0a0f",
      "#6c0a0f",
      "#6c0a0f"
    ],
    "danger": [
      "#f9e7e4",
      "#f9e7e4",
      "#f9e7e4",
      "#f2d1cc",
      "#f2d1cc",
      "#f2d1cc",
      "#e50914",
      "#ca000d",
      "#ca000d",
      "#ca000d"
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
  "defaultRadius": "4px",
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
      "#191211",
      "#191211",
      "#191211",
      "#231615",
      "#231615",
      "#231615",
      "#7f1d1d",
      "#d77169",
      "#d77169",
      "#d77169"
    ],
    "danger": [
      "#221614",
      "#221614",
      "#221614",
      "#371f1c",
      "#371f1c",
      "#371f1c",
      "#e50914",
      "#ff4f44",
      "#ff4f44",
      "#ff4f44"
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
  "defaultRadius": "4px",
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
      "#050102",
      "#050102",
      "#050102",
      "#120406",
      "#120406",
      "#120406",
      "#ffb6c2",
      "#ffced6",
      "#ffced6",
      "#ffced6"
    ],
    "danger": [
      "#050101",
      "#050101",
      "#050101",
      "#120403",
      "#120403",
      "#120403",
      "#ffb8ad",
      "#ffcfc8",
      "#ffcfc8",
      "#ffcfc8"
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
  "defaultRadius": "4px",
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
