import * as React from "react";
import { cx } from "./cx";

export type ScrollareaProps = React.HTMLAttributes<HTMLDivElement>;

export const Scrollarea = React.forwardRef<HTMLDivElement, ScrollareaProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-scrollarea", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Scrollarea.displayName = "Scrollarea";

// 굴리는 막대. 방향 지정
export type ScrollBarOrientation = "vertical" | "horizontal";
export interface ScrollBarProps extends React.HTMLAttributes<HTMLDivElement> {
  // 굴리는 방향
  orientation?: ScrollBarOrientation;
}
export const ScrollBar = React.forwardRef<HTMLDivElement, ScrollBarProps>(
  ({ orientation = "vertical", className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-scrollarea-bar", `ods-scrollarea--${orientation}`, className)} {...rest}>
      {children}
    </div>
  )
);
ScrollBar.displayName = "ScrollBar";
