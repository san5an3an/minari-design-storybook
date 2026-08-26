import * as React from "react";
import { cx } from "./cx";

export type ComboboxProps = React.HTMLAttributes<HTMLDivElement>;

export const Combobox = React.forwardRef<HTMLDivElement, ComboboxProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-combobox", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Combobox.displayName = "Combobox";

// 타이핑해서 좁히는 필드
export const ComboboxInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, children, ...rest }, ref) => (
    <input ref={ref} className={cx("ods-combobox-input", className)} {...rest}>
      {children}
    </input>
  )
);
ComboboxInput.displayName = "ComboboxInput";

export const ComboboxList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, children, ...rest }, ref) => (
    <ul ref={ref} className={cx("ods-combobox-list", className)} {...rest}>
      {children}
    </ul>
  )
);
ComboboxList.displayName = "ComboboxList";

export const ComboboxItem = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-combobox-item", className)} {...rest}>
      {children}
    </button>
  )
);
ComboboxItem.displayName = "ComboboxItem";

// 매칭 결과 없음 상태
export const ComboboxEmpty = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-combobox-empty", className)} {...rest}>
      {children}
    </div>
  )
);
ComboboxEmpty.displayName = "ComboboxEmpty";

// 다중 선택 항목은 필드 안에 유지
export const ComboboxChip = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-combobox-chip", className)} {...rest}>
      {children}
    </span>
  )
);
ComboboxChip.displayName = "ComboboxChip";
