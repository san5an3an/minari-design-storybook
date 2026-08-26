import * as React from "react";
import { cx } from "./cx";

export interface ListrowProps extends React.LiHTMLAttributes<HTMLLIElement> {
  // 줄 전체가 하나의 링크인 경우
  interactive?: boolean;
}

export const Listrow = React.forwardRef<HTMLLIElement, ListrowProps>(
  ({ interactive = false, children, className, ...rest }, ref) => (
    <li
      className={cx("ods-listrow", interactive && "ods-listrow--interactive", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </li>
  )
);
Listrow.displayName = "Listrow";

// 줄들을 담는 목록
export const ListRowList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, children, ...rest }, ref) => (
    <ul ref={ref} className={cx("ods-listrow-list", className)} {...rest}>
      {children}
    </ul>
  )
);
ListRowList.displayName = "ListRowList";

// 왼쪽에 붙는 아이콘, 머리글자 등
export const ListRowLead = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-listrow-lead", className)} {...rest}>
      {children}
    </span>
  )
);
ListRowLead.displayName = "ListRowLead";

// 본문 영역
export const ListRowMain = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-listrow-main", className)} {...rest}>
      {children}
    </div>
  )
);
ListRowMain.displayName = "ListRowMain";

// 이 행의 이름
export const ListRowTitle = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-listrow-title", className)} {...rest}>
      {children}
    </span>
  )
);
ListRowTitle.displayName = "ListRowTitle";

// 보조 설명
export const ListRowSub = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-listrow-sub", className)} {...rest}>
      {children}
    </span>
  )
);
ListRowSub.displayName = "ListRowSub";

// 오른쪽에 붙는 값, 배지, 컨트롤
export const ListRowTrail = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-listrow-trail", className)} {...rest}>
      {children}
    </span>
  )
);
ListRowTrail.displayName = "ListRowTrail";
