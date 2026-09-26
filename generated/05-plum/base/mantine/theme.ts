// @interop Mantine 기반 Plum 테마 정의

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  "primaryColor": "brand",
  "primaryShade": {
    "light": 6,
    "dark": 6
  },
  "autoContrast": true,
  "colors": {
    "accent": [
      "#fff6ee",
      "#fff6ee",
      "#fff6ee",
      "#feeddc",
      "#feeddc",
      "#feeddc",
      "#f69700",
      "#df8800",
      "#df8800",
      "#df8800"
    ],
    "brand": [
      "#ede9fa",
      "#ede9fa",
      "#ede9fa",
      "#dcd6f3",
      "#dcd6f3",
      "#dcd6f3",
      "#9146ff",
      "#8034e8",
      "#8034e8",
      "#8034e8"
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
  "defaultRadius": "16px",
  "radius": {
    "xs": "0.5rem",
    "sm": "1rem",
    "md": "1.5rem",
    "lg": "2rem"
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
    "accent": [
      "#1e1711",
      "#1e1711",
      "#1e1711",
      "#2c1f13",
      "#2c1f13",
      "#2c1f13",
      "#b56d00",
      "#cb7b00",
      "#cb7b00",
      "#cb7b00"
    ],
    "brand": [
      "#1b1823",
      "#1b1823",
      "#1b1823",
      "#292339",
      "#292339",
      "#292339",
      "#9146ff",
      "#a375ff",
      "#a375ff",
      "#a375ff"
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
  "defaultRadius": "16px",
  "radius": {
    "xs": "0.5rem",
    "sm": "1rem",
    "md": "1.5rem",
    "lg": "2rem"
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
    "accent": [
      "#040200",
      "#040200",
      "#040200",
      "#0f0601",
      "#0f0601",
      "#0f0601",
      "#ffbc75",
      "#ffd2a5",
      "#ffd2a5",
      "#ffd2a5"
    ],
    "brand": [
      "#020205",
      "#020205",
      "#020205",
      "#090613",
      "#090613",
      "#090613",
      "#d0c1ff",
      "#dfd5ff",
      "#dfd5ff",
      "#dfd5ff"
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
  "defaultRadius": "16px",
  "radius": {
    "xs": "0.5rem",
    "sm": "1rem",
    "md": "1.5rem",
    "lg": "2rem"
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
