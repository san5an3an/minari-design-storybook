import * as React from "react";
import { cx } from "./cx";

export type TabsVariant = "default" | "line";
export type TabsOrientation = "horizontal" | "vertical";

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  // 활성 표시: 밑줄 또는 채운 배경
  variant?: TabsVariant;
  // 탭이 놓이는 방향
  orientation?: TabsOrientation;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ variant = "line", orientation = "horizontal", children, className, ...rest }, ref) => (
    <div role="tablist"
      className={cx("ods-tabs", `ods-tabs--${variant}`, `ods-tabs--${orientation}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Tabs.displayName = "Tabs";

// 탭 하나. aria-selected로 활성 상태, disabled로 잠금 상태 표시
export const TabsTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-tabs-trigger", className)} {...rest}>
      {children}
    </button>
  )
);
TabsTrigger.displayName = "TabsTrigger";

// 탭 앞머리 표시. 글자만으로 뜻이 통하면 제외
export const TabsIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  ({ className, children, ...rest }, ref) => (
    <svg ref={ref} className={cx("ods-tabs-icon", className)} {...rest}>
      {children}
    </svg>
  )
);
TabsIcon.displayName = "TabsIcon";
