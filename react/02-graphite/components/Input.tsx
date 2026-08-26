import * as React from "react";
import { cx } from "./cx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // 오류 상태
  invalid?: "true" | "false";
  // 입력 불가
  disabled?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ invalid = "false", disabled, className, ...rest }, ref) => (
    <input
      className={cx("ods-input", className)}
      aria-invalid={invalid}
      disabled={disabled}
      ref={ref}
      {...rest}
    />
  )
);
Input.displayName = "Input";

// 도움말, 오류 문구 위치
export const InputHelp = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-input-help", className)} {...rest}>
      {children}
    </span>
  )
);
InputHelp.displayName = "InputHelp";
