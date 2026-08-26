import * as React from "react";
import { cx } from "./cx";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  // 굵은 막대
  lg?: boolean;
  // 완료 시점 불명 시 사용, Spinner 대안 우선 검토
  indeterminate?: boolean;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ lg = false, indeterminate = false, children, className, ...rest }, ref) => (
    <div
      className={cx("ods-progress", lg && "ods-progress--lg", indeterminate && "ods-progress--indeterminate", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Progress.displayName = "Progress";

// 이름과 값이 놓이는 행
export const ProgressHead = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-progress-head", className)} {...rest}>
      {children}
    </div>
  )
);
ProgressHead.displayName = "ProgressHead";

// 바탕
export const ProgressTrack = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-progress-track", className)} {...rest}>
      {children}
    </div>
  )
);
ProgressTrack.displayName = "ProgressTrack";

// 채워지는 부분
export const ProgressBar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-progress-bar", className)} {...rest}>
      {children}
    </div>
  )
);
ProgressBar.displayName = "ProgressBar";
