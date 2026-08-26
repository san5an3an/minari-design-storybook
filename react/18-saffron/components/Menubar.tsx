import * as React from "react";
import { cx } from "./cx";

export type MenubarProps = React.HTMLAttributes<HTMLDivElement>;

export const Menubar = React.forwardRef<HTMLDivElement, MenubarProps>(
  ({ children, className, ...rest }, ref) => (
    <div role="menubar"
      className={cx("ods-menubar", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Menubar.displayName = "Menubar";

// 막대 위 라벨. 항상 표시
export const MenubarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-menubar-trigger", className)} {...rest}>
      {children}
    </button>
  )
);
MenubarTrigger.displayName = "MenubarTrigger";
