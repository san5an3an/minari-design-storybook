import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

export interface MuiDatatableProps {
  columns: ReadonlyArray<{ key: string; header: string; numeric?: boolean }>;
  rows: ReadonlyArray<Record<string, string | number>>;
  filterKey?: string;
  filterPlaceholder?: string;
  pageSize?: number;
  className?: string;
}

export function Datatable({
  columns, rows, pageSize = 10, className,
}: MuiDatatableProps) {
  const cols: GridColDef[] = React.useMemo(
     =>
      columns.map((c) => ({
        field: c.key,
        headerName: c.header,
        flex: 1,
        // 숫자 필드 오른쪽 정렬
        type: c.numeric ? "number" : "string",
      })),
    [columns],
  );

  // id를 인덱스로 생성, 내용 사용 금지. DataGrid 행마다 id 필요하나 계약엔 없음
  const data = React.useMemo(
     => rows.map((r, i) => ({ id: i, ...r })),
    [rows],
  );

  return (
    <Box className={className} sx={{ height: "24rem", width: "100%" }}>
      <DataGrid
        columns={cols}
        rows={data}
        initialState={{ pagination: { paginationModel: { pageSize } } }}
        pageSizeOptions={[pageSize]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
