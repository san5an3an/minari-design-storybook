import * as React from "react";
import { cx } from "./cx";

export interface InputotpProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // 오류 상태
  invalid?: "true" | "false";
  // 입력 불가
  disabled?: boolean;
}

export const Inputotp = React.forwardRef<HTMLInputElement, InputotpProps>(
  ({ invalid = "false", disabled, children, className, ...rest }, ref) => (
    <div
      className={cx("ods-inputotp", className)}
    >
      <input inputmode="numeric" autoComplete="one-time-code" aria-invalid={invalid} disabled={disabled} ref={ref} {...rest} />
      {children}
    </div>
  )
);
Inputotp.displayName = "Inputotp";

// 셀 그룹, 자릿수를 눈으로 나누는 단위
export const InputOTPGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-inputotp-group", className)} {...rest}>
      {children}
    </div>
  )
);
InputOTPGroup.displayName = "InputOTPGroup";

// 단일 문자 표시
export interface InputOTPSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  // 현재 입력 필드 표시
  active?: boolean;
}
export const InputOTPSlot = React.forwardRef<HTMLDivElement, InputOTPSlotProps>(
  ({ active = false, className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-inputotp-slot", active && "ods-inputotp-slot--active", className)} {...rest}>
      {children}
    </div>
  )
);
InputOTPSlot.displayName = "InputOTPSlot";

// 그룹 사이 구분선 표시. 보조기술에는 읽히지 않음
export const InputOTPSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-inputotp-separator", className)} {...rest}>
      {children}
    </div>
  )
);
InputOTPSeparator.displayName = "InputOTPSeparator";
