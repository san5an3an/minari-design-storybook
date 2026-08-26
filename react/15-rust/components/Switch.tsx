import * as React from "react";
import { cx } from "./cx";

export type SwitchSize = "sm" | "md";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  // 트랙과 핸들 크기
  size?: SwitchSize;
  // 오류 상태 여부, 필수인데 비활성인 경우 등
  invalid?: "true" | "false";
  // 켜기 비활성화 여부
  disabled?: boolean;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ size = "md", invalid = "false", disabled, children, className, ...rest }, ref) => (
    <label
      className={cx("ods-switch", `ods-switch--${size}`, className)}
    >
      <input type="checkbox" aria-invalid={invalid} disabled={disabled} ref={ref} {...rest} />
      <span className="ods-switch-track" />
      {children}
    </label>
  )
);
Switch.displayName = "Switch";

// 켜면 무슨 일이 일어나는지 설명, 라벨 길게 쓰지 않기
export const SwitchDescription = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-switch-description", className)} {...rest}>
      {children}
    </span>
  )
);
SwitchDescription.displayName = "SwitchDescription";

// 테두리로 감싸 카드 전체 클릭 가능하게 만든 위치. 설명이 길 때 사용
export const SwitchCard = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, children, ...rest }, ref) => (
    <label ref={ref} className={cx("ods-switch-card", className)} {...rest}>
      {children}
    </label>
  )
);
SwitchCard.displayName = "SwitchCard";
