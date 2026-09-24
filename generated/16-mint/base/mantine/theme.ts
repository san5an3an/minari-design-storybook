// @interop Mantine 기반 Mint 테마 정의

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
      "#f3f9f8",
      "#f3f9f8",
      "#f3f9f8",
      "#e8f3f1",
      "#e8f3f1",
      "#e8f3f1",
      "#71bbb1",
      "#62a9a0",
      "#62a9a0",
      "#62a9a0"
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
  "defaultRadius": "16px",
  "radius": {
    "xs": "0.5rem",
    "sm": "1rem",
    "md": "1.5rem",
    "lg": "2rem"
  },
  "spacing": {
    "xs": "0.5rem",
    "sm": "0.75rem",
    "md": "1.5rem",
    "lg": "2.5rem",
    "xl": "4rem"
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
      "#151a19",
      "#151a19",
      "#151a19",
      "#1c2423",
      "#1c2423",
      "#1c2423",
      "#418b82",
      "#559b92",
      "#559b92",
      "#559b92"
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
  "defaultRadius": "16px",
  "radius": {
    "xs": "0.5rem",
    "sm": "1rem",
    "md": "1.5rem",
    "lg": "2rem"
  },
  "spacing": {
    "xs": "0.5rem",
    "sm": "0.75rem",
    "md": "1.5rem",
    "lg": "2.5rem",
    "xl": "4rem"
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
      "#010202",
      "#010202",
      "#010202",
      "#040a09",
      "#040a09",
      "#040a09",
      "#94d6cc",
      "#a6e6dc",
      "#a6e6dc",
      "#a6e6dc"
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
  "defaultRadius": "16px",
  "radius": {
    "xs": "0.5rem",
    "sm": "1rem",
    "md": "1.5rem",
    "lg": "2rem"
  },
  "spacing": {
    "xs": "0.5rem",
    "sm": "0.75rem",
    "md": "1.5rem",
    "lg": "2.5rem",
    "xl": "4rem"
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
