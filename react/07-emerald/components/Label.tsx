import * as React from "react";
import { cx } from "./cx";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  // 반드시 채워야 하는 필드
  required?: boolean;
  // 셀 잠기면 이름도 흐려지게 표시
  disabled?: boolean;
  // 오류 상태
  invalid?: "true" | "false";
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ required = false, disabled = false, invalid = "false", children, className, ...rest }, ref) => (
    <label
      className={cx("ods-label", required && "ods-label--required", disabled && "ods-label--disabled", className)}
      aria-invalid={invalid}
      ref={ref}
      {...rest}
    >
      {children}
    </label>
  )
);
Label.displayName = "Label";

// 이름 옆 보조 문구, 선택 입력 여부 표시
export const LabelHint = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-label-hint", className)} {...rest}>
      {children}
    </span>
  )
);
LabelHint.displayName = "LabelHint";
