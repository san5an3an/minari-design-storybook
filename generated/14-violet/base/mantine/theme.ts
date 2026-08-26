// @interop Mantine 기반 Violet 테마 정의

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
      "#fff6f1",
      "#fff6f1",
      "#fff6f1",
      "#fdece5",
      "#fdece5",
      "#fdece5",
      "#b75c30",
      "#a34d21",
      "#a34d21",
      "#a34d21"
    ],
    "brand": [
      "#e8eaf5",
      "#e8eaf5",
      "#e8eaf5",
      "#d3d7ea",
      "#d3d7ea",
      "#d3d7ea",
      "#5e6ad2",
      "#505abd",
      "#505abd",
      "#505abd"
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
      "#1e1714",
      "#1e1714",
      "#1e1714",
      "#2b1f1a",
      "#2b1f1a",
      "#2b1f1a",
      "#c06538",
      "#d0764c",
      "#d0764c",
      "#d0764c"
    ],
    "brand": [
      "#171920",
      "#171920",
      "#171920",
      "#222532",
      "#222532",
      "#222532",
      "#5e6ad2",
      "#7786ee",
      "#7786ee",
      "#7786ee"
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
      "#040201",
      "#040201",
      "#040201",
      "#0e0603",
      "#0e0603",
      "#0e0603",
      "#ffba9a",
      "#ffd1bc",
      "#ffd1bc",
      "#ffd1bc"
    ],
    "brand": [
      "#020204",
      "#020204",
      "#020204",
      "#060711",
      "#060711",
      "#060711",
      "#bbc7ff",
      "#cfd8ff",
      "#cfd8ff",
      "#cfd8ff"
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
