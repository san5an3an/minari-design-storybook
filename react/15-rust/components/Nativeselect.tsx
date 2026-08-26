import * as React from "react";
import { cx } from "./cx";

export interface NativeselectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  // 비활성화 여부
  disabled?: boolean;
  // 값 오류 상태
  invalid?: "true" | "false";
}

export const Nativeselect = React.forwardRef<HTMLSelectElement, NativeselectProps>(
  ({ disabled, invalid = "false", className, ...rest }, ref) => (
    <select
      className={cx("ods-nativeselect", className)}
      disabled={disabled}
      aria-invalid={invalid}
      ref={ref}
      {...rest}
    />
  )
);
Nativeselect.displayName = "Nativeselect";

export const NativeSelectOption = React.forwardRef<HTMLOptionElement, React.OptionHTMLAttributes<HTMLOptionElement>>(
  ({ className, children, ...rest }, ref) => (
    <option ref={ref} className={cx("ods-nativeselect-option", className)} {...rest}>
      {children}
    </option>
  )
);
NativeSelectOption.displayName = "NativeSelectOption";

// 이름 붙은 항목 그룹
export const NativeSelectOptGroup = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...rest }, ref) => (
    <optgroup ref={ref} className={cx("ods-nativeselect-optgroup", className)} {...rest}>
      {children}
    </optgroup>
  )
);
NativeSelectOptGroup.displayName = "NativeSelectOptGroup";
