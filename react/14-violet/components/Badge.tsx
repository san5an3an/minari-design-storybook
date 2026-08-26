import * as React from "react";
import { cx } from "./cx";

export type BadgeVariant = "solid" | "subtle";
export type BadgeTone = "neutral" | "brand" | "danger" | "success" | "warning" | "accent" | "info";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  // 시각적 무게는 elevation glow 값으로 지정
  variant?: BadgeVariant;
  // 팔레트 구성과 1:1 대응하는 의미 색
  tone?: BadgeTone;
  // 표시 위치. 기본 앞쪽, 텍스트 우선 시 뒤쪽
  icon?: "inline-start" | "inline-end";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "solid", tone = "neutral", icon, children, className, ...rest }, ref) => (
    <span
      className={cx("ods-badge", `ods-badge--${variant}`, `ods-badge--${tone}`, className)}
      data-icon={icon}
      ref={ref}
      {...rest}
    >
      {children}
    </span>
  )
);
Badge.displayName = "Badge";

// 표시. 텍스트 대체 아님. 그림만 있는 배지는 읽을 수 없음
export const BadgeIcon = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...rest }, ref) => (
    <svg ref={ref} className={cx("ods-badge-icon", className)} {...rest}>
      {children}
    </svg>
  )
);
BadgeIcon.displayName = "BadgeIcon";
