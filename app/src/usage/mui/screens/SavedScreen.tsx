import * as React from "react";
import { Box, Button, Card, Chip, Stack, Typography } from "@mui/material";
import { DataGrid, type GridColDef, type GridRenderCellParams } from "@mui/x-data-grid";
import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import { LISTINGS, monthlyTotal, won } from "../listings";
import type { ScreenProps } from "../screens";

export function SavedScreen({ bookedIds, selectedId, onNavigate, onSelect }: ScreenProps) {
  // 찜 목록과 방문 예약 구분 유지
  const ids = React.useMemo( => {
    const set = new Set<string>(bookedIds ?? []);
    if (selectedId) set.add(selectedId);
    return set;
  }, [bookedIds, selectedId]);

  const rows = LISTINGS.filter((l) => ids.has(l.id)).map((l) => ({
    id: l.id,
    title: l.title,
    area: l.area,
    rent: l.rent,
    total: monthlyTotal(l),
    deposit: l.deposit,
    size: l.size,
    rooms: l.rooms,
    walk: l.walk,
    booked: (bookedIds ?? []).includes(l.id),
  }));

  const columns: GridColDef[] = [
    { field: "title", headerName: "매물", flex: 1, minWidth: 200 },
    { field: "area", headerName: "위치", width: 140 },
    {
      field: "rent",
      headerName: "월세",
      type: "number",
      width: 100,
      valueFormatter: (v: number) => won(v),
    },
    {
      field: "total",
      headerName: "월 부담",
      type: "number",
      width: 100,
      valueFormatter: (v: number) => won(v),
      description: "월세와 관리비를 더한 값",
    },
    {
      field: "deposit",
      headerName: "보증금",
      type: "number",
      width: 110,
      valueFormatter: (v: number) => won(v),
    },
    {
      field: "size",
      headerName: "면적",
      type: "number",
      width: 90,
      valueFormatter: (v: number) => `${v}㎡`,
    },
    { field: "rooms", headerName: "방", type: "number", width: 70 },
    {
      field: "walk",
      headerName: "역까지",
      type: "number",
      width: 100,
      valueFormatter: (v: number) => `${v}분`,
    },
    {
      field: "booked",
      headerName: "방문",
      width: 120,
      sortable: false,
      renderCell: (p: GridRenderCellParams) =>
        p.value ? (
          <Chip
            size="small"
            color="success"
            variant="outlined"
            icon={<CheckCircleOutlined />}
            label="예약됨"
          />
        ) : (
          <Chip size="small" variant="outlined" label="관심" />
        ),
    },
  ];

  if (rows.length === 0) {
    return (
      <Card variant="outlined" sx={{ p: 4, textAlign: "center" }}>
        <Stack spacing={1.5} sx={{ alignItems: "center" }}>
          <FavoriteBorderOutlined sx={{ color: "text.disabled" }} />
          <Typography variant="subtitle1">아직 모아 둔 매물이 없어요</Typography>
          <Typography variant="body2" color="text.secondary">
            탐색에서 마음에 드는 집을 고르면 여기서 나란히 견줄 수 있습니다.
          </Typography>
          <Button
            variant="outlined"
            startIcon={<ArrowBackOutlined />}
            onClick={ => onNavigate?.("search")}
          >
            탐색으로 가기
          </Button>
        </Stack>
      </Card>
    );
  }

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", flexWrap: "wrap" }}>
        <Typography variant="subtitle1" component="h3">모아 둔 매물 {rows.length}곳</Typography>
        <Typography variant="body2" color="text.secondary">
          열 이름을 누르면 그 기준으로 다시 렌더링됩니다.
        </Typography>
      </Stack>

      {/* 높이 고정. 부모가 auto 면 DataGrid 가 0이 되어 표가 안 보임 */}
      <Box sx={{ height: 360, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          density="compact"
          disableRowSelectionOnClick
          onRowClick={(p) => {
            onSelect?.(String(p.id));
            onNavigate?.("listing");
          }}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[10, 25]}
          sx={{ "& .MuiDataGrid-row": { cursor: "pointer" } }}
        />
      </Box>

      <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
        <Button
          variant="contained"
          startIcon={<CalendarMonthOutlined />}
          onClick={ => onNavigate?.("schedule")}
        >
          방문 일정 잡기
        </Button>
        <Button variant="outlined" onClick={ => onNavigate?.("search")}>
          더 찾아보기
        </Button>
      </Stack>
    </Stack>
  );
}
