import * as React from "react";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import { createColumnHelper, useTable } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { features, type DataTableFeatures } from "./datatable-features";
import type { DatatableProps } from "../../systems/props";

type Row = Record<string, string | number>;

export function Datatable({
  columns, rows, filterKey, filterPlaceholder = "걸러 보세요", pageSize, className,
}: DatatableProps) {
  const helper = React.useMemo(
     => createColumnHelper<DataTableFeatures, Row>, []);

  const defs = React.useMemo(
     =>
      helper.columns(
        columns.map((c) =>
          helper.accessor((r: Row) => r[c.key], {
            id: c.key,
            header: c.header,
            filterFn: "includesString",
            // v9 정렬 함수 sortFn 사용
            sortFn: c.numeric ? "alphanumeric" : "text",
          }),
        ),
      ),
    [helper, columns],
  );

  const data = React.useMemo( => rows as Row[], [rows]);

  const table = useTable({
    features,
    data,
    columns: defs,
    ...(pageSize
      ? { initialState: { pagination: { pageIndex: 0, pageSize } } }
      : {}),
  });

  const numeric = React.useMemo(
     => new Set(columns.filter((c) => c.numeric).map((c) => c.key)), [columns]);

  return (
    <div className={className} style={{ display: "grid", gap: "var(--component-datatable-gap, .75rem)" }}>
      {filterKey ? (
        <div style={{ display: "flex", gap: ".5rem" }}>
          <Input
            placeholder={filterPlaceholder}
            value={(table.getColumn(filterKey)?.getFilterValue as string) ?? ""}
            onChange={(e) =>
              table.getColumn(filterKey)?.setFilterValue(e.target.value)
            }
          />
        </div>
      ) : null}

      <Table>
        <TableHeader>
          {table.getHeaderGroups.map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((h) => {
                const dir = h.column.getIsSorted;
                return (
                  <TableHead
                    key={h.id}
                    className={numeric.has(h.column.id) ? "text-right" : undefined}
                  >
                    {h.isPlaceholder ? null : (
                      // 열 이름이 곧 정렬 버튼, 별도 화살표 버튼 없음
                      <button
                        type="button"
                        onClick={ => h.column.toggleSorting(dir === "asc")}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: ".25em",
                          background: "transparent", border: 0, padding: 0,
                          font: "inherit", color: "inherit", cursor: "pointer",
                        }}
                      >
                        <table.FlexRender header={h} />
                        {dir === "asc" ? <ArrowUp size={14} />
                          : dir === "desc" ? <ArrowDown size={14} />
                          : <ChevronsUpDown size={14} opacity={.4} />}
                      </button>
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel.rows.length ? (
            table.getRowModel.rows.map((r) => (
              <TableRow key={r.id}>
                {r.getVisibleCells.map((c) => (
                  <TableCell
                    key={c.id}
                    className={numeric.has(c.column.id) ? "text-right tabular-nums" : undefined}
                  >
                    <table.FlexRender cell={c} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            // 필터 결과가 없을 때 빈 화면으로 두지 않음. 고장처럼 보일 수 있음
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                걸린 게 없어요. 다른 낱말로 찾아보세요.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {pageSize ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: ".5rem" }}>
          <span style={{ color: "var(--component-datatable-status-fg)", fontSize: ".8125rem" }}>
            {table.getRowModel.rows.length}줄 보여요
          </span>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <Button variant="outline" size="sm"
              disabled={!table.getCanPreviousPage}
              onClick={ => table.previousPage}>이전</Button>
            <Button variant="outline" size="sm"
              disabled={!table.getCanNextPage}
              onClick={ => table.nextPage}>다음</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
