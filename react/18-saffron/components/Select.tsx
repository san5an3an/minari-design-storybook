import * as React from "react";
import { cx } from "./cx";

export type SelectSize = "sm" | "md";

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  // 여백과 글자 크기
  size?: SelectSize;
  // 미선택 상태, 값을 흐리게 표시
  empty?: "true" | "false";
  // 오류 상태
  invalid?: "true" | "false";
  // 비활성화 여부
  disabled?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = "md", empty = "true", invalid = "false", disabled, children, className, ...rest }, ref) => (
    <select
      className={cx("ods-select", `ods-select--${size}`, className)}
      data-empty={empty}
      aria-invalid={invalid}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";

// 표시용 래퍼
export const SelectWrap = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-select-wrap", className)} {...rest}>
      {children}
    </span>
  )
);
SelectWrap.displayName = "SelectWrap";

// 접힘 여부 표시
export const SelectMarker = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-select-marker", className)} {...rest}>
      {children}
    </span>
  )
);
SelectMarker.displayName = "SelectMarker";

// 같은 성격 항목 그룹, label 이 그룹 이름
export const SelectGroup = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...rest }, ref) => (
    <optgroup ref={ref} className={cx("ods-select-group", className)} {...rest}>
      {children}
    </optgroup>
  )
);
SelectGroup.displayName = "SelectGroup";

// 항목 하나, disabled로 개별 잠금 가능
export const SelectOption = React.forwardRef<HTMLOptionElement, React.OptionHTMLAttributes<HTMLOptionElement>>(
  ({ className, children, ...rest }, ref) => (
    <option ref={ref} className={cx("ods-select-option", className)} {...rest}>
      {children}
    </option>
  )
);
SelectOption.displayName = "SelectOption";
