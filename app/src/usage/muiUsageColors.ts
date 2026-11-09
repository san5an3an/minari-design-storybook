import type { Theme } from "@mui/material/styles";

// trend Chip label과 icon이 generated theme가 design system fill token value를 hex로 copy한 palette success.main과 error.main을 써 light mode와 dark mode에서 같은 fill color의 12% tint background 위 label이 low contrast라 Chip background와 label과 icon color를 --semantic-bg-success-subtle과 --semantic-fg-on-success-subtle, --semantic-bg-danger-subtle과 --semantic-fg-on-danger-subtle token pair로 connect
export const trendChipSx = (up: boolean) => {
  const bg = up ? "var(--semantic-bg-success-subtle)" : "var(--semantic-bg-danger-subtle)";
  const fg = up ? "var(--semantic-fg-on-success-subtle)" : "var(--semantic-fg-on-danger-subtle)";
  return { bgcolor: bg, color: fg, "& .MuiChip-icon": { color: fg } };
};

// stat Card trend caption이 palette success.main과 error.main fill color를 텍스트 color로 써 light mode와 dark mode의 Card background 위 low contrast라 --semantic-fg-success-default와 --semantic-fg-danger-default token으로 connect
export const trendTextColor = (up: boolean) =>
  (up ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-danger-default)");

// generated theme가 outlined Button 텍스트 color를 primary와 error만 text token으로 override해 success outlined Button 텍스트가 success fill color로 남아 light mode와 dark mode의 outlined Card background 위 low contrast라 이 sx가 Button color를 --semantic-fg-success-default token으로 override하고 startIcon은 currentColor라 이 color를 follow
export const SUCCESS_OUTLINED_BUTTON_SX = { color: "var(--semantic-fg-success-default)" };

// MUI default placeholder가 input 텍스트 color에 opacity 0.42를 걸어 light mode의 header AppBar background와 inquiry Dialog paper 위 low contrast라 placeholder color를 --component-input-fg-placeholder token으로 connect하고 opacity를 1로 reset
export const PLACEHOLDER_SX = {
  "& .MuiInputBase-input::placeholder": { color: "var(--component-input-fg-placeholder)", opacity: 1 },
};

// MUI default inactive StepIcon이 text.disabled color circle 위 white number라 light mode에서 low contrast라 theme.applyStyles로 light mode에서만 active와 completed가 아닌 StepIcon의 circle color를 --semantic-bg-neutral-default, number fill을 --semantic-fg-on-neutral-default token으로 connect
export const inactiveStepIconSx = (theme: Theme) =>
  theme.applyStyles("light", {
    "& .MuiStepIcon-root:not(.Mui-active):not(.Mui-completed)": { color: "var(--semantic-bg-neutral-default)" },
    "& .MuiStepIcon-root:not(.Mui-active):not(.Mui-completed) .MuiStepIcon-text": { fill: "var(--semantic-fg-on-neutral-default)" },
  });

// MUI default filled Chip background가 translucent action.selected라 photo 위에서 photo에 따라 light mode와 dark mode와 high-contrast mode의 label이 low contrast라 photo 위 category Chip과 같은 --semantic-bg-neutral-surface background로 set
export const PHOTO_DEFAULT_CHIP_SX = { bgcolor: "var(--semantic-bg-neutral-surface)" };
