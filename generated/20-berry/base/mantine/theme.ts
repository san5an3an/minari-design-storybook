// @interop Mantine 기반 Berry 테마 정의

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
      "#f4faef",
      "#f4faef",
      "#f4faef",
      "#e9f5e0",
      "#e9f5e0",
      "#e9f5e0",
      "#81c12c",
      "#72af18",
      "#72af18",
      "#72af18"
    ],
    "brand": [
      "#faeaee",
      "#faeaee",
      "#faeaee",
      "#f4d8df",
      "#f4d8df",
      "#f4d8df",
      "#ea4c89",
      "#bf2568",
      "#bf2568",
      "#bf2568"
    ],
    "danger": [
      "#f0e2e0",
      "#f0e2e0",
      "#f0e2e0",
      "#e0c8c5",
      "#e0c8c5",
      "#e0c8c5",
      "#a2191f",
      "#8d0011",
      "#8d0011",
      "#8d0011"
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
    "sm": "0.375rem",
    "md": "0.75rem",
    "lg": "1.25rem",
    "xl": "2rem"
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
      "#161a12",
      "#161a12",
      "#161a12",
      "#1d2516",
      "#1d2516",
      "#1d2516",
      "#598d00",
      "#659f00",
      "#659f00",
      "#659f00"
    ],
    "brand": [
      "#23181b",
      "#23181b",
      "#23181b",
      "#39252a",
      "#39252a",
      "#39252a",
      "#ea4c89",
      "#fc629a",
      "#fc629a",
      "#fc629a"
    ],
    "danger": [
      "#1c1312",
      "#1c1312",
      "#1c1312",
      "#2a1918",
      "#2a1918",
      "#2a1918",
      "#a2191f",
      "#e8645d",
      "#e8645d",
      "#e8645d"
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
    "sm": "0.375rem",
    "md": "0.75rem",
    "lg": "1.25rem",
    "xl": "2rem"
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
      "#010201",
      "#010201",
      "#010201",
      "#050a02",
      "#050a02",
      "#050a02",
      "#a1da64",
      "#b0ea75",
      "#b0ea75",
      "#b0ea75"
    ],
    "brand": [
      "#040102",
      "#040102",
      "#040102",
      "#120408",
      "#120408",
      "#120408",
      "#ffb5ca",
      "#ffcedb",
      "#ffcedb",
      "#ffcedb"
    ],
    "danger": [
      "#050101",
      "#050101",
      "#050101",
      "#120404",
      "#120404",
      "#120404",
      "#ffb7b5",
      "#ffcfce",
      "#ffcfce",
      "#ffcfce"
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
    "sm": "0.375rem",
    "md": "0.75rem",
    "lg": "1.25rem",
    "xl": "2rem"
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
