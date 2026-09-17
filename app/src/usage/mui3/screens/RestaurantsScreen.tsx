import * as React from "react";
import {
  Avatar, Box, Card, Chip, FormControlLabel, Stack, Switch, Typography,
} from "@mui/material";
import { DataGrid, type GridColDef, type GridRowParams } from "@mui/x-data-grid";
import DeliveryDiningOutlined from "@mui/icons-material/DeliveryDiningOutlined";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import StarOutlined from "@mui/icons-material/StarOutlined";
import TimerOutlined from "@mui/icons-material/TimerOutlined";
import { ORDERS, RESTAURANTS, type Restaurant } from "../data";
import type { ScreenProps } from "../screens";

type StatTone = "primary" | "success" | "warning" | "error";
interface OrderStat {
  label: string; value: string; tone: StatTone;
  icon: React.ComponentType<{ fontSize?: "small" | "inherit" }>;
}
const ORDER_STATS: readonly OrderStat[] = [
  { label: "진행 중인 주문", value: `${ORDERS.filter((o) => o.status === "배달 중").length}건`, tone: "primary", icon: DeliveryDiningOutlined },
  { label: "이번 달 주문", value: `${ORDERS.length}건`, tone: "success", icon: ReceiptLongOutlined },
  { label: "평균 배달시간", value: "28분", tone: "warning", icon: TimerOutlined },
  { label: "즐겨찾는 맛집", value: "3곳", tone: "error", icon: StarOutlined },
];

function OrderStatCard({ stat }: { stat: OrderStat }) {
  const Icon = stat.icon;
  return (
    <Card variant="outlined" sx={{ p: 1.75 }}>
      <Stack spacing={1}>
        <Box
          aria-hidden
          sx={{
            alignItems: "center", bgcolor: `${stat.tone}.main`, borderRadius: "50%",
            color: `${stat.tone}.contrastText`, display: "flex", height: 30,
            justifyContent: "center", opacity: 0.9, width: 30,
          }}
        >
          <Icon fontSize="small" />
        </Box>
        <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
        <Typography variant="h6" component="p">{stat.value}</Typography>
      </Stack>
    </Card>
  );
}

const STATUS_TONE: Record<Restaurant["status"], "success" | "warning" | "default"> = {
  영업중: "success",
  브레이크타임: "warning",
  마감: "default",
};

const CATEGORIES = ["전체", ...new Set(RESTAURANTS.map((r) => r.category))];

export function RestaurantsScreen({ onNavigate, onSelect }: ScreenProps) {
  const [category, setCategory] = React.useState("전체");
  const [openOnly, setOpenOnly] = React.useState(false);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const rows = React.useMemo( => {
    const byCategory = category === "전체" ? RESTAURANTS : RESTAURANTS.filter((r) => r.category === category);
    return openOnly ? byCategory.filter((r) => r.status === "영업중") : byCategory;
  }, [category, openOnly]);

  const columns: GridColDef<Restaurant>[] = [
    {
      field: "name", headerName: "가게", flex: 1.4, minWidth: 160,
      renderCell: (p) => (
        <Stack direction="row" spacing={1} sx={{ alignItems: "center", height: "100%" }}>
          <Avatar sx={{ height: 28, width: 28, fontSize: 13 }}>{p.row.name.slice(0, 1)}</Avatar>
          <Typography variant="body2" noWrap>{p.row.name}</Typography>
        </Stack>
      ),
    },
    { field: "category", headerName: "분류", width: 90 },
    { field: "rating", headerName: "평점", width: 80, renderCell: (p) => `⭐ ${p.row.rating}` },
    { field: "deliveryMin", headerName: "배달", width: 80, renderCell: (p) => `${p.row.deliveryMin}분` },
    {
      field: "minOrder", headerName: "최소주문", width: 110,
      renderCell: (p) => `${p.row.minOrder.toLocaleString("ko-KR")}원`,
    },
    {
      field: "status", headerName: "상태", width: 120,
      renderCell: (p) => (
        <Chip size="small" label={p.row.status} color={STATUS_TONE[p.row.status]} variant="outlined" />
      ),
    },
  ];

  return (
    <Stack spacing={2}>
      <Box
        sx={{
          display: "grid",
          gap: 1.5,
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" },
        }}
      >
        {ORDER_STATS.map((s) => (
          <OrderStatCard key={s.label} stat={s} />
        ))}
      </Box>

      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap", rowGap: 1 }}>
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1 }}>
          {CATEGORIES.map((c) => {
            const count = c === "전체" ? RESTAURANTS.length : RESTAURANTS.filter((r) => r.category === c).length;
            return (
              <Chip
                key={c}
                label={`${c} ${count}`}
                size="small"
                color={category === c ? "primary" : "default"}
                variant={category === c ? "filled" : "outlined"}
                onClick={ => setCategory(c)}
              />
            );
          })}
        </Stack>
        <FormControlLabel
          control={<Switch size="small" checked={openOnly} onChange={(e) => setOpenOnly(e.target.checked)} />}
          label="영업중만"
        />
      </Stack>

      <Box sx={{ minHeight: 0 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(r) => r.id}
          disableRowSelectionOnClick
          onRowClick={(p: GridRowParams<Restaurant>) => open(p.row.id)}
          pageSizeOptions={[5, 10]}
          initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
          sx={{ "& .MuiDataGrid-row": { cursor: "pointer" } }}
          autoHeight
        />
      </Box>
    </Stack>
  );
}
