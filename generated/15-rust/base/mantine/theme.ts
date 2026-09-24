// @interop Mantine 기반 Rust 테마 정의

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
      "#fcf6f4",
      "#fcf6f4",
      "#fcf6f4",
      "#f8eeea",
      "#f8eeea",
      "#f8eeea",
      "#9e6954",
      "#8c5a46",
      "#8c5a46",
      "#8c5a46"
    ],
    "danger": [
      "#fae7e6",
      "#fae7e6",
      "#fae7e6",
      "#f3d2d0",
      "#f3d2d0",
      "#f3d2d0",
      "#eb0036",
      "#cf002e",
      "#cf002e",
      "#cf002e"
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
      "#fcf7ed",
      "#fcf7ed",
      "#fcf7ed",
      "#f8efdd",
      "#f8efdd",
      "#f8efdd",
      "#daa500",
      "#c59400",
      "#c59400",
      "#c59400"
    ]
  },
  "defaultRadius": "4px",
  "radius": {
    "xs": "0.125rem",
    "sm": "0.25rem",
    "md": "0.375rem",
    "lg": "0.5rem"
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
      "#1c1816",
      "#1c1816",
      "#1c1816",
      "#27201e",
      "#27201e",
      "#27201e",
      "#a7715c",
      "#b7826d",
      "#b7826d",
      "#b7826d"
    ],
    "danger": [
      "#231615",
      "#231615",
      "#231615",
      "#38201f",
      "#38201f",
      "#38201f",
      "#eb0036",
      "#ff4e58",
      "#ff4e58",
      "#ff4e58"
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
      "#1c1811",
      "#1c1811",
      "#1c1811",
      "#282114",
      "#282114",
      "#282114",
      "#a07800",
      "#b48700",
      "#b48700",
      "#b48700"
    ]
  },
  "defaultRadius": "4px",
  "radius": {
    "xs": "0.125rem",
    "sm": "0.25rem",
    "md": "0.375rem",
    "lg": "0.5rem"
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
      "#030201",
      "#030201",
      "#030201",
      "#0c0705",
      "#0c0705",
      "#0c0705",
      "#f2bea8",
      "#ffcfbc",
      "#ffcfbc",
      "#ffcfbc"
    ],
    "danger": [
      "#040101",
      "#040101",
      "#040101",
      "#100505",
      "#100505",
      "#100505",
      "#ffb8b4",
      "#ffd0cd",
      "#ffd0cd",
      "#ffd0cd"
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
  "defaultRadius": "4px",
  "radius": {
    "xs": "0.125rem",
    "sm": "0.25rem",
    "md": "0.375rem",
    "lg": "0.5rem"
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
