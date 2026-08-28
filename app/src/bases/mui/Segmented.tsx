import * as React from "react";
import MuiToggleButton from "@mui/material/ToggleButton";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export interface MuiSegmentedProps {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  multiple?: boolean;
  variant?: string;
  size?: string;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SIZE = { sm: "small", md: "medium", lg: "large" } as const;

function SegmentedRoot({
  value, defaultValue, onValueChange, multiple = false, size = "md",
  orientation = "horizontal", disabled, className, children,
}: MuiSegmentedProps) {
  const [own, setOwn] = React.useState<string[]>(defaultValue ?? []);
  const cur = value ?? own;

  // MUI exclusive면 string|null 반환 가능, 계약상 string[] 고정
  const toMui = multiple ? cur : (cur[0] ?? null);
  const fromMui = (v: string | string[] | null): string[] =>
    v == null ? [] : Array.isArray(v) ? v : [v];

  return (
    <MuiToggleButtonGroup
      className={className}
      exclusive={!multiple}
      value={toMui}
      disabled={disabled}
      size={SIZE[size as keyof typeof SIZE] ?? "medium"}
      orientation={orientation}
      onChange={(_e, v) => {
        const next = fromMui(v as string | string[] | null);
        if (value === undefined) setOwn(next);
        onValueChange?.(next);
      }}
    >
      {children}
    </MuiToggleButtonGroup>
  );
}

// 한 셀, value로 식별하기
function Item({
  value, children, className, disabled,
}: { value: string; children?: React.ReactNode; className?: string; disabled?: boolean }) {
  return (
    <MuiToggleButton className={className} value={value} disabled={disabled}>
      {children}
    </MuiToggleButton>
  );
}

export const Segmented = Object.assign(SegmentedRoot, { Item });
