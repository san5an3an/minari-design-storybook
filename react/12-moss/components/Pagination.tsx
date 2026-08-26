import * as React from "react";
import { cx } from "./cx";

export type PaginationProps = React.HTMLAttributes<HTMLElement>;

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ children, className, ...rest }, ref) => (
    <nav aria-label="쪽 이동"
      className={cx("ods-pagination", className)}
      ref={ref}
      {...rest}
    >
      <ul className="ods-pagination-list">
        {children}
      </ul>
    </nav>
  )
);
Pagination.displayName = "Pagination";

// 페이지 하나, 현재 페이지에 aria-current=page 지정
export const PaginationItem = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, children, ...rest }, ref) => (
    <a ref={ref} className={cx("ods-pagination-item", className)} {...rest}>
      {children}
    </a>
  )
);
PaginationItem.displayName = "PaginationItem";

// 건너뛴 구간 표시
export const PaginationGap = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-pagination-gap", className)} {...rest}>
      {children}
    </span>
  )
);
PaginationGap.displayName = "PaginationGap";
