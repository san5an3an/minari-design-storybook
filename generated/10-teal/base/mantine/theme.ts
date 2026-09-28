// @interop Mantine 기반 Teal 테마 정의

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
      "#e9f2f8",
      "#e9f2f8",
      "#e9f2f8",
      "#d6e6f1",
      "#d6e6f1",
      "#d6e6f1",
      "#26a5e4",
      "#1c9ad6",
      "#1c9ad6",
      "#1c9ad6"
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
    "info": [
      "#f1f9ff",
      "#f1f9ff",
      "#f1f9ff",
      "#e4f2fd",
      "#e4f2fd",
      "#e4f2fd",
      "#007cb8",
      "#006ca0",
      "#006ca0",
      "#006ca0"
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
      "#171e22",
      "#171e22",
      "#171e22",
      "#233038",
      "#233038",
      "#233038",
      "#26a5e4",
      "#45b6f4",
      "#45b6f4",
      "#45b6f4"
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
    "info": [
      "#141a1e",
      "#141a1e",
      "#141a1e",
      "#19242b",
      "#19242b",
      "#19242b",
      "#1286c2",
      "#3496d2",
      "#3496d2",
      "#3496d2"
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
      "#020910",
      "#020910",
      "#020910",
      "#88d2ff",
      "#aedfff",
      "#aedfff",
      "#aedfff"
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
    "info": [
      "#010204",
      "#010204",
      "#010204",
      "#03090f",
      "#03090f",
      "#03090f",
      "#8ed1ff",
      "#b2dfff",
      "#b2dfff",
      "#b2dfff"
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
