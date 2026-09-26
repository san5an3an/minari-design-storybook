// @interop Mantine 기반 Cobalt 테마 정의

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
      "#e0e7f3",
      "#e0e7f3",
      "#e0e7f3",
      "#c4d1e6",
      "#c4d1e6",
      "#c4d1e6",
      "#0052cc",
      "#0044ad",
      "#0044ad",
      "#0044ad"
    ],
    "danger": [
      "#fff5f4",
      "#fff5f4",
      "#fff5f4",
      "#ffebe8",
      "#ffebe8",
      "#ffebe8",
      "#c84d42",
      "#b43d34",
      "#b43d34",
      "#b43d34"
    ],
    "success": [
      "#f1fbf3",
      "#f1fbf3",
      "#f1fbf3",
      "#e5f5e7",
      "#e5f5e7",
      "#e5f5e7",
      "#51c672",
      "#42b464",
      "#42b464",
      "#42b464"
    ],
    "warning": [
      "#fdf7ec",
      "#fdf7ec",
      "#fdf7ec",
      "#fbf0dd",
      "#fbf0dd",
      "#fbf0dd",
      "#ffbb00",
      "#e9ab00",
      "#e9ab00",
      "#e9ab00"
    ]
  },
  "defaultRadius": "8px",
  "radius": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "0.75rem",
    "lg": "1rem"
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
      "#11161f",
      "#11161f",
      "#11161f",
      "#17202f",
      "#17202f",
      "#17202f",
      "#0052cc",
      "#498cff",
      "#498cff",
      "#498cff"
    ],
    "danger": [
      "#1f1615",
      "#1f1615",
      "#1f1615",
      "#2d1d1b",
      "#2d1d1b",
      "#2d1d1b",
      "#d25549",
      "#e3685c",
      "#e3685c",
      "#e3685c"
    ],
    "success": [
      "#141b15",
      "#141b15",
      "#141b15",
      "#19261c",
      "#19261c",
      "#19261c",
      "#009342",
      "#2da354",
      "#2da354",
      "#2da354"
    ],
    "warning": [
      "#26211a",
      "#26211a",
      "#26211a",
      "#403728",
      "#403728",
      "#403728",
      "#ffbb00",
      "#ffd381",
      "#ffd381",
      "#ffd381"
    ]
  },
  "defaultRadius": "8px",
  "radius": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "0.75rem",
    "lg": "1rem"
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
      "#010204",
      "#010204",
      "#010204",
      "#040811",
      "#040811",
      "#040811",
      "#abcbff",
      "#c5dbff",
      "#c5dbff",
      "#c5dbff"
    ],
    "danger": [
      "#040101",
      "#040101",
      "#040101",
      "#100504",
      "#100504",
      "#100504",
      "#ffb8ad",
      "#ffcfc8",
      "#ffcfc8",
      "#ffcfc8"
    ],
    "success": [
      "#010301",
      "#010301",
      "#010301",
      "#030b04",
      "#030b04",
      "#030b04",
      "#79de91",
      "#8ceda2",
      "#8ceda2",
      "#8ceda2"
    ],
    "warning": [
      "#030200",
      "#030200",
      "#030200",
      "#0c0701",
      "#0c0701",
      "#0c0701",
      "#f5c24b",
      "#ffd476",
      "#ffd476",
      "#ffd476"
    ]
  },
  "defaultRadius": "8px",
  "radius": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "0.75rem",
    "lg": "1rem"
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
