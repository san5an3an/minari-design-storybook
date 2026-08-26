import * as React from "react";
import { cx } from "./cx";

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, ...rest }, ref) => (
    <table
      className={cx("ods-table", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </table>
  )
);
Table.displayName = "Table";

// 수치 필드. 자릿수 맞춰 오른쪽 정렬
export const TableNum = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, children, ...rest }, ref) => (
    <td ref={ref} className={cx("ods-table-num", className)} {...rest}>
      {children}
    </td>
  )
);
TableNum.displayName = "TableNum";
