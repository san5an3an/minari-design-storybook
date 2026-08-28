import * as React from "react";
import MuiPagination from "@mui/material/Pagination";

export interface MuiPaginationProps {
  page: number;
  total: number;
  onPage?: (page: number) => void;
  className?: string;
}

export function Pagination({ page, total, onPage, className }: MuiPaginationProps) {
  return (
    <MuiPagination
      className={className}
      // total 값을 MUI count 로 변환
      count={total}
      page={page}
      onChange={(_e: React.ChangeEvent<unknown>, p: number) => onPage?.(p)}
      // 이 구조엔 첫/끝 버튼 옵션 없어 MUI 기본값 그대로 사용
      shape="rounded"
    />
  );
}
