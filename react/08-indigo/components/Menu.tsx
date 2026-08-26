import * as React from "react";
import { cx } from "./cx";

export type MenuProps = React.HTMLAttributes<HTMLUListElement>;

export const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
  ({ children, className, ...rest }, ref) => (
    <ul role="menu"
      className={cx("ods-menu", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </ul>
  )
);
Menu.displayName = "Menu";

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // 되돌릴 수 없는 동작
  danger?: boolean;
}
export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ danger = false, className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-menu-item", danger && "ods-menu-item--danger", className)} {...rest}>
      {children}
    </button>
  )
);
MenuItem.displayName = "MenuItem";

// 단축키 같은 보조 정보
export const MenuHint = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-menu-hint", className)} {...rest}>
      {children}
    </span>
  )
);
MenuHint.displayName = "MenuHint";

// 그룹 라벨
export const MenuLabel = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ className, children, ...rest }, ref) => (
    <li ref={ref} className={cx("ods-menu-label", className)} {...rest}>
      {children}
    </li>
  )
);
MenuLabel.displayName = "MenuLabel";

// 그룹 경계
export const MenuSeparator = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  ({ className, children, ...rest }, ref) => (
    <hr ref={ref} className={cx("ods-menu-separator", className)} {...rest}>
      {children}
    </hr>
  )
);
MenuSeparator.displayName = "MenuSeparator";
