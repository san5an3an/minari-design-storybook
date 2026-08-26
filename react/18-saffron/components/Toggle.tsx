import * as React from "react";
import { cx } from "./cx";

export type ToggleVariant = "plain" | "outline";
export type ToggleSize = "sm" | "md" | "lg";

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  // 테두리 여부
  variant?: ToggleVariant;
  // 한 변과 글자 크기
  size?: ToggleSize;
  // 눌림 상태. 이 속성이 상태 자체임
  pressed?: "true" | "false";
  // 비활성화 여부
  disabled?: boolean;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ variant = "plain", size = "md", pressed = "false", disabled, children, className, ...rest }, ref) => (
    <button type="button"
      className={cx("ods-toggle", `ods-toggle--${variant}`, `ods-toggle--${size}`, className)}
      aria-pressed={pressed}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  )
);
Toggle.displayName = "Toggle";
