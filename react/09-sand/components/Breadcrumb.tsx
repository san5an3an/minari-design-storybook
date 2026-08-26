import * as React from "react";
import { cx } from "./cx";

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement>;

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ children, className, ...rest }, ref) => (
    <nav aria-label="현재 위치"
      className={cx("ods-breadcrumb-nav", className)}
      ref={ref}
      {...rest}
    >
      <ol className="ods-breadcrumb">
        {children}
      </ol>
    </nav>
  )
);
Breadcrumb.displayName = "Breadcrumb";

// 셀 사이 구분자 표시, 첫 셀 앞은 제외
export const BreadcrumbSeparator = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...rest }, ref) => (
    <svg ref={ref} className={cx("ods-breadcrumb-sep", className)} {...rest}>
      {children}
    </svg>
  )
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

// 가운데 접힘 시 표시
export const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-breadcrumb-ellipsis", className)} {...rest}>
      {children}
    </span>
  )
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

// 첫 셀 홈 아이콘. 글자 대신 사용, 구분자 미배치
export const BreadcrumbHome = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...rest }, ref) => (
    <svg ref={ref} className={cx("ods-breadcrumb-home", className)} {...rest}>
      {children}
    </svg>
  )
);
BreadcrumbHome.displayName = "BreadcrumbHome";
