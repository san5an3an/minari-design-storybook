import type * as React from "react";
import {
  Table as ShadcnTable, TableBody, TableCaption, TableCell as ShadcnTableCell, TableFooter,
  TableHead as ShadcnTableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { TableImpl, TableProps } from "../../systems/props";

function TableRoot({ children, ...rest }: TableProps) {
  return <ShadcnTable {...rest}>{children}</ShadcnTable>;
}

// 칸 여백은 inline style 대신 클래스로 지정. inline 이면 체크박스 칸의 [&:has([role=checkbox])]:pr-0 을 덮어 체크박스 열이 밀림
// 머리 칸은 가로 여백만 연결. shadcn 이 높이(h-10)로 세로를 고정하고 토큰도 칸 여백 한 쌍뿐임
export function TableCell({ className, ...rest }: React.ComponentProps<"td">) {
  return (
    <ShadcnTableCell
      className={cn("px-(--component-table-cell-padding-inline) py-(--component-table-cell-padding-block)", className)}
      {...rest}
    />
  );
}

export function TableHead({ className, ...rest }: React.ComponentProps<"th">) {
  return <ShadcnTableHead className={cn("px-(--component-table-cell-padding-inline)", className)} {...rest} />;
}

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
  Caption: TableCaption,
}) as TableImpl;
