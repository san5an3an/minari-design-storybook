import * as React from "react";
import { cx } from "./cx";

export type ToolbarProps = React.HTMLAttributes<HTMLDivElement>;

export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ children, className, ...rest }, ref) => (
    <div role="toolbar"
      className={cx("ods-toolbar", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Toolbar.displayName = "Toolbar";

// 그룹 라벨
export const ToolbarLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-toolbar-label", className)} {...rest}>
      {children}
    </span>
  )
);
ToolbarLabel.displayName = "ToolbarLabel";

// 그룹 경계
export const ToolbarSep = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-toolbar-sep", className)} {...rest}>
      {children}
    </span>
  )
);
ToolbarSep.displayName = "ToolbarSep";

// 남은 공간 밀어내 주 동작을 끝에 배치
export const ToolbarSpacer = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-toolbar-spacer", className)} {...rest}>
      {children}
    </span>
  )
);
ToolbarSpacer.displayName = "ToolbarSpacer";
