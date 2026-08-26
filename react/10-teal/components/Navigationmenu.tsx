import * as React from "react";
import { cx } from "./cx";

export type NavigationmenuProps = React.HTMLAttributes<HTMLElement>;

export const Navigationmenu = React.forwardRef<HTMLElement, NavigationmenuProps>(
  ({ children, className, ...rest }, ref) => (
    <nav
      className={cx("ods-navigationmenu", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </nav>
  )
);
Navigationmenu.displayName = "Navigationmenu";

export const NavigationMenuList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, children, ...rest }, ref) => (
    <ul ref={ref} className={cx("ods-navigationmenu-list", className)} {...rest}>
      {children}
    </ul>
  )
);
NavigationMenuList.displayName = "NavigationMenuList";

// 이동 위치, 반드시 실제 링크임
export interface NavigationMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // 현재 위치
  current?: boolean;
}
export const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, NavigationMenuLinkProps>(
  ({ current = false, className, children, ...rest }, ref) => (
    <a ref={ref} className={cx("ods-navigationmenu-link", current && "ods-navigationmenu-link--current", className)} {...rest}>
      {children}
    </a>
  )
);
NavigationMenuLink.displayName = "NavigationMenuLink";

// 펼쳐지는 영역
export const NavigationMenuContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-navigationmenu-content", className)} {...rest}>
      {children}
    </div>
  )
);
NavigationMenuContent.displayName = "NavigationMenuContent";
