import * as React from "react";
import { cx } from "./cx";

export type DatatableProps = React.HTMLAttributes<HTMLDivElement>;

export const Datatable = React.forwardRef<HTMLDivElement, DatatableProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-datatable", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Datatable.displayName = "Datatable";

// 필터 필드와 열 선택이 놓이는 행
export const DataTableToolbar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-datatable-toolbar", className)} {...rest}>
      {children}
    </div>
  )
);
DataTableToolbar.displayName = "DataTableToolbar";

// 열 이름 겸 정렬 버튼
export interface DataTableSortProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // 현재 정렬 기준 열 여부
  active?: boolean;
}
export const DataTableSort = React.forwardRef<HTMLButtonElement, DataTableSortProps>(
  ({ active = false, className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-datatable-sort", active && "ods-datatable-sort--active", className)} {...rest}>
      {children}
    </button>
  )
);
DataTableSort.displayName = "DataTableSort";

// 선택 개수 표시. 페이지 이동해도 남아있으면 항상 노출
export const DataTableStatus = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-datatable-status", className)} {...rest}>
      {children}
    </div>
  )
);
DataTableStatus.displayName = "DataTableStatus";
