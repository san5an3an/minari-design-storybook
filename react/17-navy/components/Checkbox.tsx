import * as React from "react";
import { cx } from "./cx";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // 자식 일부 선택 여부
  indeterminate?: "true" | "false";
  // 오류 상태
  invalid?: "true" | "false";
  // 비활성화 여부
  disabled?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ indeterminate = "false", invalid = "false", disabled, children, className, ...rest }, ref) => (
    <label
      className={cx("ods-checkbox", className)}
    >
      <input type="checkbox" data-indeterminate={indeterminate} aria-invalid={invalid} disabled={disabled} ref={ref} {...rest} />
      <span className="ods-checkbox-box">
        <svg className="ods-checkbox-check" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        <svg className="ods-checkbox-dash" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
      </span>
      {children}
    </label>
  )
);
Checkbox.displayName = "Checkbox";

// 라벨 아래 설명 문구. 선택 시 벌어지는 일 안내
export const CheckboxDescription = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-checkbox-description", className)} {...rest}>
      {children}
    </span>
  )
);
CheckboxDescription.displayName = "CheckboxDescription";

// 여러 항목 그룹 위치
export const CheckboxGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-checkbox-group", className)} {...rest}>
      {children}
    </div>
  )
);
CheckboxGroup.displayName = "CheckboxGroup";
