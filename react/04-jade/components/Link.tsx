import * as React from "react";
import { cx } from "./cx";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // 외부 링크, 표시 아이콘 포함
  external?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ external = false, children, className, ...rest }, ref) => (
    <a
      className={cx("ods-link", external && "ods-link-external", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </a>
  )
);
Link.displayName = "Link";
