import * as React from "react";
import { cx } from "./cx";

export type ButtonVariant = "solid" | "outline" | "subtle" | "plain";
export type ButtonTone = "neutral" | "brand" | "danger" | "success" | "warning" | "info";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  // 시각적 무게는 elevation border 값으로 지정
  variant?: ButtonVariant;
  // 팔레트 구성과 1:1 대응하는 의미 색
  tone?: ButtonTone;
  // 여백과 글자 크기 동시 변경
  size?: ButtonSize;
  // 비활성 상태를 중립 배경과 커서 변경으로 표시
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", tone = "neutral", size = "md", disabled, children, className, ...rest }, ref) => (
    <button
      className={cx("ods-btn", `ods-btn--${variant}`, `ods-btn--${tone}`, `ods-btn--${size}`, className)}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";
