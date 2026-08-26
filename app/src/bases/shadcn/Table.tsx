import {
  Table as ShadcnTable, TableBody, TableCaption, TableCell, TableFooter,
  TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import type { TableImpl, TableProps } from "../../systems/props";

function TableRoot({ children, ...rest }: TableProps) {
  return <ShadcnTable {...rest}>{children}</ShadcnTable>;
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
