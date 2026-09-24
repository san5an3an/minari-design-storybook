// @interop Mantine 기반 Saffron 테마 정의

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
      "#fcf3ea",
      "#fcf3ea",
      "#fcf3ea",
      "#f9e8d9",
      "#f9e8d9",
      "#f9e8d9",
      "#ff9900",
      "#e78a00",
      "#e78a00",
      "#e78a00"
    ],
    "danger": [
      "#fff5f4",
      "#fff5f4",
      "#fff5f4",
      "#ffebe9",
      "#ffebe9",
      "#ffebe9",
      "#dd3338",
      "#c7202a",
      "#c7202a",
      "#c7202a"
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
  "radius": {
    "xs": "0.375rem",
    "sm": "0.75rem",
    "md": "1rem",
    "lg": "1.25rem"
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2.5rem"
  },
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
      "#251e18",
      "#251e18",
      "#251e18",
      "#3e3125",
      "#3e3125",
      "#3e3125",
      "#ff9900",
      "#ffb46a",
      "#ffb46a",
      "#ffb46a"
    ],
    "danger": [
      "#211614",
      "#211614",
      "#211614",
      "#301c1a",
      "#301c1a",
      "#301c1a",
      "#e63e40",
      "#f75553",
      "#f75553",
      "#f75553"
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
  "radius": {
    "xs": "0.375rem",
    "sm": "0.75rem",
    "md": "1rem",
    "lg": "1.25rem"
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2.5rem"
  },
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
      "#040200",
      "#040200",
      "#040200",
      "#100600",
      "#100600",
      "#100600",
      "#ffbc79",
      "#ffd2a8",
      "#ffd2a8",
      "#ffd2a8"
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
  "radius": {
    "xs": "0.375rem",
    "sm": "0.75rem",
    "md": "1rem",
    "lg": "1.25rem"
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2.5rem"
  },
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
