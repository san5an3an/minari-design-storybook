// @interop Mantine 기반 Sand 테마 정의

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
      "#faf7f3",
      "#faf7f3",
      "#faf7f3",
      "#f4f0e7",
      "#f4f0e7",
      "#f4f0e7",
      "#c5ab77",
      "#b39a68",
      "#b39a68",
      "#b39a68"
    ],
    "danger": [
      "#ede1de",
      "#ede1de",
      "#ede1de",
      "#dac6c1",
      "#dac6c1",
      "#dac6c1",
      "#8e1f0b",
      "#781100",
      "#781100",
      "#781100"
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
      "#1a1915",
      "#1a1915",
      "#1a1915",
      "#25221c",
      "#25221c",
      "#25221c",
      "#947b48",
      "#a48b5a",
      "#a48b5a",
      "#a48b5a"
    ],
    "danger": [
      "#1a1211",
      "#1a1211",
      "#1a1211",
      "#261815",
      "#261815",
      "#261815",
      "#8e1f0b",
      "#dd6c57",
      "#dd6c57",
      "#dd6c57"
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
      "#020201",
      "#020201",
      "#020201",
      "#0a0804",
      "#0a0804",
      "#0a0804",
      "#dfc798",
      "#efd7a9",
      "#efd7a9",
      "#efd7a9"
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
