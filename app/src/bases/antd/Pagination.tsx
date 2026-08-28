import { Pagination as AntPagination } from "antd";
import type { PaginationProps } from "../../systems/props";

export function Pagination({ page, total, onPage }: PaginationProps) {
  return (
    <AntPagination
      current={page}
      total={total}
      pageSize={1}
      onChange={(p: number) => onPage?.(p)}
      showSizeChanger={false}
    />
  );
}
