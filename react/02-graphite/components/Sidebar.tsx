import * as React from "react";
import { cx } from "./cx";

export type SidebarState = "expanded" | "collapsed";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  // 펼침 여부
  state?: SidebarState;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ state = "expanded", children, className, ...rest }, ref) => (
    <aside
      className={cx("ods-sidebar", `ods-sidebar--${state}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </aside>
  )
);
Sidebar.displayName = "Sidebar";

// 맨 위. 제품 이름 위치
export const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-sidebar-header", className)} {...rest}>
      {children}
    </div>
  )
);
SidebarHeader.displayName = "SidebarHeader";

// 그룹 라벨
export const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-sidebar-group-label", className)} {...rest}>
      {children}
    </div>
  )
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

export interface SidebarMenuButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // 현재 위치
  active?: boolean;
}
export const SidebarMenuButton = React.forwardRef<HTMLAnchorElement, SidebarMenuButtonProps>(
  ({ active = false, className, children, ...rest }, ref) => (
    <a ref={ref} className={cx("ods-sidebar-menu-button", active && "ods-sidebar-menu-button--active", className)} {...rest}>
      {children}
    </a>
  )
);
SidebarMenuButton.displayName = "SidebarMenuButton";

// 맨 아래. 계정 위치
export const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-sidebar-footer", className)} {...rest}>
      {children}
    </div>
  )
);
SidebarFooter.displayName = "SidebarFooter";
