import * as React from "react";
import { cx } from "./cx";

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // 선택 상태
  pressed?: "true" | "false";
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ pressed = "false", children, className, ...rest }, ref) => (
    <button
      className={cx("ods-chip", className)}
      aria-pressed={pressed}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  )
);
Chip.displayName = "Chip";

// 지우기 버튼
export const ChipRemove = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-chip-remove", className)} {...rest}>
      {children}
    </button>
  )
);
ChipRemove.displayName = "ChipRemove";
