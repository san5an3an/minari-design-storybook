import * as React from "react";
import { cx } from "./cx";

export type TooltipSide = "top" | "right" | "bottom" | "left";

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  // 띄우는 방향. 대상이 가장자리에 붙으면 자동 전환
  side?: TooltipSide;
}

export const Tooltip = React.forwardRef<HTMLSpanElement, TooltipProps>(
  ({ side = "top", children, className, ...rest }, ref) => (
    <span role="tooltip"
      className={cx("ods-tooltip", `ods-tooltip--${side}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </span>
  )
);
Tooltip.displayName = "Tooltip";

// 가리킬 대상과 말풍선을 함께 담는 위치
export const TooltipWrap = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-tooltip-wrap", className)} {...rest}>
      {children}
    </span>
  )
);
TooltipWrap.displayName = "TooltipWrap";
