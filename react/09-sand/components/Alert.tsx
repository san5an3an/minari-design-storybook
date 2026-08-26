import * as React from "react";
import { cx } from "./cx";

export type AlertTone = "neutral" | "brand" | "danger" | "success" | "warning";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  // 알림 종류, 시스템 팔레트로 한정
  tone?: AlertTone;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ tone = "neutral", children, className, ...rest }, ref) => (
    <div
      className={cx("ods-alert", `ods-alert--${tone}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Alert.displayName = "Alert";

// 종류를 색과 모양으로 함께 표시
export const AlertIcon = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...rest }, ref) => (
    <svg ref={ref} className={cx("ods-alert-icon", className)} {...rest}>
      {children}
    </svg>
  )
);
AlertIcon.displayName = "AlertIcon";

// 알림 제목 행
export const AlertTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-alert-title", className)} {...rest}>
      {children}
    </div>
  )
);
AlertTitle.displayName = "AlertTitle";

// 제목 아래 본문, 제목만으로 부족할 때만 표시
export const AlertDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-alert-description", className)} {...rest}>
      {children}
    </div>
  )
);
AlertDescription.displayName = "AlertDescription";

// 되돌리기 같은 동작. 하나까지
export const AlertAction = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-alert-action", className)} {...rest}>
      {children}
    </button>
  )
);
AlertAction.displayName = "AlertAction";
