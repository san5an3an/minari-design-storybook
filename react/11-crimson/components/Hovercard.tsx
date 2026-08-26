import * as React from "react";
import { cx } from "./cx";

export type HovercardProps = React.HTMLAttributes<HTMLDivElement>;

export const Hovercard = React.forwardRef<HTMLDivElement, HovercardProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-hovercard", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Hovercard.displayName = "Hovercard";

// 업로드 위치, 대개 이름 또는 링크
export const HoverCardTrigger = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, children, ...rest }, ref) => (
    <a ref={ref} className={cx("ods-hovercard-trigger", className)} {...rest}>
      {children}
    </a>
  )
);
HoverCardTrigger.displayName = "HoverCardTrigger";
