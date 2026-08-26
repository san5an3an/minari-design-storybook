import * as React from "react";
import { cx } from "./cx";

export type MarkerVariant = "default" | "border" | "separator";

export interface MarkerProps extends React.HTMLAttributes<HTMLDivElement> {
  // 구분 기준: 없음, 행, 구간
  variant?: MarkerVariant;
}

export const Marker = React.forwardRef<HTMLDivElement, MarkerProps>(
  ({ variant = "default", children, className, ...rest }, ref) => (
    <div
      className={cx("ods-marker", `ods-marker--${variant}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Marker.displayName = "Marker";

// 표시. 스크린리더가 읽지 않음
export const MarkerIcon = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-marker-icon", className)} {...rest}>
      {children}
    </span>
  )
);
MarkerIcon.displayName = "MarkerIcon";

// 이력 요약 한 줄
export const MarkerContent = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-marker-content", className)} {...rest}>
      {children}
    </span>
  )
);
MarkerContent.displayName = "MarkerContent";
