import * as React from "react";
import { cx } from "./cx";

export type DrawerProps = React.HTMLAttributes<HTMLDivElement>;

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ children, className, ...rest }, ref) => (
    <div role="dialog"
      className={cx("ods-drawer", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Drawer.displayName = "Drawer";

// 드래그 핸들 아이콘 표시
export const DrawerSwipeHandle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-drawer-handle", className)} {...rest}>
      {children}
    </div>
  )
);
DrawerSwipeHandle.displayName = "DrawerSwipeHandle";

// 담긴 내용
export const DrawerTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...rest }, ref) => (
    <h2 ref={ref} className={cx("ods-drawer-title", className)} {...rest}>
      {children}
    </h2>
  )
);
DrawerTitle.displayName = "DrawerTitle";

// 제목 아래 한 줄
export const DrawerDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cx("ods-drawer-description", className)} {...rest}>
      {children}
    </p>
  )
);
DrawerDescription.displayName = "DrawerDescription";

// 종료 액션 위치
export const DrawerFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-drawer-footer", className)} {...rest}>
      {children}
    </div>
  )
);
DrawerFooter.displayName = "DrawerFooter";
