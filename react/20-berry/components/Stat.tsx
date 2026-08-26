import * as React from "react";
import { cx } from "./cx";

export type StatProps = React.HTMLAttributes<HTMLDivElement>;

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-stat", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Stat.displayName = "Stat";

// 수치 값
export const StatLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-stat-label", className)} {...rest}>
      {children}
    </span>
  )
);
StatLabel.displayName = "StatLabel";

// 수치
export const StatValue = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-stat-value", className)} {...rest}>
      {children}
    </span>
  )
);
StatValue.displayName = "StatValue";

// 변화량
export type StatDeltaDirection = "up" | "down";
export interface StatDeltaProps extends React.HTMLAttributes<HTMLSpanElement> {
  // 오름차순, 내림차순
  direction?: StatDeltaDirection;
}
export const StatDelta = React.forwardRef<HTMLSpanElement, StatDeltaProps>(
  ({ direction, className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-stat-delta", direction && `ods-stat-delta--${direction}`, className)} {...rest}>
      {children}
    </span>
  )
);
StatDelta.displayName = "StatDelta";
