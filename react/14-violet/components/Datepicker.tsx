import * as React from "react";
import { cx } from "./cx";

export type DatepickerProps = React.HTMLAttributes<HTMLDivElement>;

export const Datepicker = React.forwardRef<HTMLDivElement, DatepickerProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-datepicker", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Datepicker.displayName = "Datepicker";

// 선택한 날짜가 그대로 표시되는 위치
export interface DatePickerTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // 미선택 상태
  empty?: boolean;
}
export const DatePickerTrigger = React.forwardRef<HTMLButtonElement, DatePickerTriggerProps>(
  ({ empty = false, className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-datepicker-trigger", empty && "ods-datepicker-trigger--empty", className)} {...rest}>
      {children}
    </button>
  )
);
DatePickerTrigger.displayName = "DatePickerTrigger";
