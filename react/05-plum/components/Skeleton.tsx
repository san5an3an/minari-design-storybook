import * as React from "react";
import { cx } from "./cx";

export type SkeletonShape = "text" | "block" | "circle";

export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  // 전달될 값의 형태
  shape?: SkeletonShape;
}

export const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ shape = "text", className, ...rest }, ref) => (
    <span
      className={cx("ods-skeleton", `ods-skeleton--${shape}`, className)}
      ref={ref}
      {...rest}
    />
  )
);
Skeleton.displayName = "Skeleton";

// 여러 줄 그룹 위치
export const SkeletonGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-skeleton-group", className)} {...rest}>
      {children}
    </div>
  )
);
SkeletonGroup.displayName = "SkeletonGroup";
