import * as React from "react";
import MuiToggleButton from "@mui/material/ToggleButton";

export interface MuiToggleProps {
  variant?: string;
  size?: string;
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SIZE = { sm: "small", md: "medium", lg: "large" } as const;

export function Toggle({
  size = "md", pressed, defaultPressed, onPressedChange,
  disabled, className, children,
}: MuiToggleProps) {
  // 제어 및 비제어 모두 지원, 미지정 시 상태 관리 후 계약 이름만 노출
  const [own, setOwn] = React.useState(defaultPressed ?? false);
  const on = pressed ?? own;

  return (
    <MuiToggleButton
      className={className}
      value="on"
      selected={on}
      disabled={disabled}
      size={SIZE[size as keyof typeof SIZE] ?? "medium"}
      onChange={ => {
        if (pressed === undefined) setOwn(!on);
        onPressedChange?.(!on);
      }}
    >
      {children}
    </MuiToggleButton>
  );
}
