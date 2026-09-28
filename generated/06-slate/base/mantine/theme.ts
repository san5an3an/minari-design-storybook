// @interop Mantine 기반 Slate 테마 정의

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
      "#dadcdf",
      "#dadcdf",
      "#dadcdf",
      "#b9bcc1",
      "#b9bcc1",
      "#b9bcc1",
      "#14233c",
      "#08162d",
      "#08162d",
      "#08162d"
    ],
    "danger": [
      "#fff5f4",
      "#fff5f4",
      "#fff5f4",
      "#ffebe9",
      "#ffebe9",
      "#ffebe9",
      "#c94c49",
      "#b43d3b",
      "#b43d3b",
      "#b43d3b"
    ],
    "info": [
      "#f4f8fb",
      "#f4f8fb",
      "#f4f8fb",
      "#eaf1f7",
      "#eaf1f7",
      "#eaf1f7",
      "#4f7a99",
      "#416a87",
      "#416a87",
      "#416a87"
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
    "brand": [
      "#0e0f11",
      "#0e0f11",
      "#0e0f11",
      "#0f1115",
      "#0f1115",
      "#0f1115",
      "#14233c",
      "#7d90ae",
      "#7d90ae",
      "#7d90ae"
    ],
    "danger": [
      "#1f1615",
      "#1f1615",
      "#1f1615",
      "#2d1d1c",
      "#2d1d1c",
      "#2d1d1c",
      "#d25450",
      "#e36761",
      "#e36761",
      "#e36761"
    ],
    "info": [
      "#16191b",
      "#16191b",
      "#16191b",
      "#1e2327",
      "#1e2327",
      "#1e2327",
      "#5883a2",
      "#6994b2",
      "#6994b2",
      "#6994b2"
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
    "brand": [
      "#020203",
      "#020203",
      "#020203",
      "#06080d",
      "#06080d",
      "#06080d",
      "#b0cbf6",
      "#c4dbff",
      "#c4dbff",
      "#c4dbff"
    ],
    "danger": [
      "#040101",
      "#040101",
      "#040101",
      "#100504",
      "#100504",
      "#100504",
      "#ffb8b1",
      "#ffd0cb",
      "#ffd0cb",
      "#ffd0cb"
    ],
    "info": [
      "#010203",
      "#010203",
      "#010203",
      "#05090c",
      "#05090c",
      "#05090c",
      "#a5cfed",
      "#b6dffc",
      "#b6dffc",
      "#b6dffc"
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
