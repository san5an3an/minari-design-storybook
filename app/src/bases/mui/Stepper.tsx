import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import AddRounded from "@mui/icons-material/AddRounded";
import RemoveRounded from "@mui/icons-material/RemoveRounded";

export interface MuiStepperProps {
  value: number;
  min?: number;
  max?: number;
  onValueChange?: (value: number) => void;
  "aria-label"?: string;
  className?: string;
}

export function Stepper({
  value, min = -Infinity, max = Infinity, onValueChange, className,
  "aria-label": ariaLabel,
}: MuiStepperProps) {
  const clamp = (n: number) => Math.min(max, Math.max(min, n));
  const set = (n: number) => onValueChange?.(clamp(n));

  return (
    <Box className={className} sx={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
      <IconButton size="small" onClick={ => set(value - 1)} disabled={value <= min} aria-label="하나 줄이기">
        <RemoveRounded fontSize="small" />
      </IconButton>
      <OutlinedInput
        size="small"
        value={value}
        inputProps={{
          "aria-label": ariaLabel,
          // 화면 낭독기에 범위 안내. 없으면 최대치를 못 읽음
          role: "spinbutton",
          "aria-valuenow": value,
          "aria-valuemin": Number.isFinite(min) ? min : undefined,
          "aria-valuemax": Number.isFinite(max) ? max : undefined,
          style: { textAlign: "center", width: "var(--component-stepper-input-width, 3rem)" },
        }}
        onChange={(e) => {
          const n = Number(e.target.value);
          // 숫자 아닌 입력 제외하고 기존 값 유지
          if (!Number.isNaN(n)) set(n);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") { e.preventDefault; set(value + 1); }
          if (e.key === "ArrowDown") { e.preventDefault; set(value - 1); }
        }}
      />
      <IconButton size="small" onClick={ => set(value + 1)} disabled={value >= max} aria-label="하나 늘리기">
        <AddRounded fontSize="small" />
      </IconButton>
    </Box>
  );
}
