import * as React from "react";
import { cx } from "./cx";

export type PageheaderProps = React.HTMLAttributes<HTMLElement>;

export const Pageheader = React.forwardRef<HTMLElement, PageheaderProps>(
  ({ children, className, ...rest }, ref) => (
    <header
      className={cx("ods-pageheader", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </header>
  )
);
Pageheader.displayName = "Pageheader";

// 제목, 설명 위치
export const PageHeaderMain = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-pageheader-main", className)} {...rest}>
      {children}
    </div>
  )
);
PageHeaderMain.displayName = "PageHeaderMain";

// 화면 이름
export const PageHeaderTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...rest }, ref) => (
    <h1 ref={ref} className={cx("ods-pageheader-title", className)} {...rest}>
      {children}
    </h1>
  )
);
PageHeaderTitle.displayName = "PageHeaderTitle";

// 한 행 설명, 선택 사항
export const PageHeaderLede = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cx("ods-pageheader-lede", className)} {...rest}>
      {children}
    </p>
  )
);
PageHeaderLede.displayName = "PageHeaderLede";

// 보조 정보, 상태와 갱신 시각 등 표시
export const PageHeaderMeta = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-pageheader-meta", className)} {...rest}>
      {children}
    </div>
  )
);
PageHeaderMeta.displayName = "PageHeaderMeta";

// 동작 위치. 주요 동작은 오른쪽 끝에 배치
export const PageHeaderActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-pageheader-actions", className)} {...rest}>
      {children}
    </div>
  )
);
PageHeaderActions.displayName = "PageHeaderActions";
