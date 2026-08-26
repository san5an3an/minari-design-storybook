import * as React from "react";
import { cx } from "./cx";

export type ContextmenuProps = React.HTMLAttributes<HTMLUListElement>;

export const Contextmenu = React.forwardRef<HTMLUListElement, ContextmenuProps>(
  ({ children, className, ...rest }, ref) => (
    <ul role="menu"
      className={cx("ods-contextmenu", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </ul>
  )
);
Contextmenu.displayName = "Contextmenu";

export const ContextMenuItem = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-contextmenu-item", className)} {...rest}>
      {children}
    </button>
  )
);
ContextMenuItem.displayName = "ContextMenuItem";

// 같은 동작의 단축키
export const ContextMenuShortcut = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-contextmenu-shortcut", className)} {...rest}>
      {children}
    </span>
  )
);
ContextMenuShortcut.displayName = "ContextMenuShortcut";

// 그룹 라벨
export const ContextMenuLabel = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ className, children, ...rest }, ref) => (
    <li ref={ref} className={cx("ods-contextmenu-label", className)} {...rest}>
      {children}
    </li>
  )
);
ContextMenuLabel.displayName = "ContextMenuLabel";

// 그룹 경계
export const ContextMenuSeparator = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  ({ className, children, ...rest }, ref) => (
    <hr ref={ref} className={cx("ods-contextmenu-separator", className)} {...rest}>
      {children}
    </hr>
  )
);
ContextMenuSeparator.displayName = "ContextMenuSeparator";
