import * as React from "react";
import {
  Avatar, Box, Button, Card, Chip, FormControlLabel, Stack, Switch, Typography, alpha, useTheme,
} from "@mui/material";
import { DataGrid, type GridColDef, type GridRowParams } from "@mui/x-data-grid";
import { PieChart } from "@mui/x-charts/PieChart";
import DeliveryDiningOutlined from "@mui/icons-material/DeliveryDiningOutlined";
import LocalOfferOutlined from "@mui/icons-material/LocalOfferOutlined";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import StarOutlined from "@mui/icons-material/StarOutlined";
import TimerOutlined from "@mui/icons-material/TimerOutlined";
import TrendingDown from "@mui/icons-material/TrendingDown";
import TrendingUp from "@mui/icons-material/TrendingUp";
import { ORDERS, RESTAURANTS, type Restaurant } from "../data";
import type { ScreenProps } from "../screens";

type StatTone = "primary" | "success" | "warning" | "error";
interface OrderStat {
  label: string; value: string; tone: StatTone; delta: string; up: boolean;
  icon: React.ComponentType<{ fontSize?: "small" | "inherit" }>;
}
// 통계 카드마다 증감율 표시: 아이콘 배지, 라벨, 숫자, 증감 칩
const ORDER_STATS: readonly OrderStat[] = [
  { label: "진행 중인 주문", value: `${ORDERS.filter((o) => o.status === "배달 중" || o.status === "준비 중").length}건`, tone: "primary", delta: "+2건", up: true, icon: DeliveryDiningOutlined },
  { label: "이번 달 주문", value: `${ORDERS.length}건`, tone: "success", delta: "+3건", up: true, icon: ReceiptLongOutlined },
  { label: "평균 배달시간", value: "26분", tone: "warning", delta: "-2분", up: true, icon: TimerOutlined },
  { label: "즐겨찾는 맛집", value: "4곳", tone: "error", delta: "+1곳", up: true, icon: StarOutlined },
];

function OrderStatCard({ stat }: { stat: OrderStat }) {
  const theme = useTheme;
  const Icon = stat.icon;
  const Trend = stat.up ? TrendingUp : TrendingDown;
  const trendColor = stat.up ? theme.palette.success.main : theme.palette.error.main;
  return (
    <Card variant="outlined" sx={{ p: 1.75 }}>
      <Stack direction="row" sx={{ alignItems: "flex-start", justifyContent: "space-between" }}>
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
        <Chip
          size="small"
          icon={<Trend fontSize="inherit" />}
          label={stat.delta}
          sx={{
            bgcolor: alpha(trendColor, 0.12),
            color: trendColor,
            "& .MuiChip-icon": { color: trendColor },
          }}
        />
      </Stack>
    </Card>
  );
}

function DeliveryPromoCard {
  const theme = useTheme;
  return (
    <Card
      variant="outlined"
      sx={{
        alignItems: { xs: "flex-start", sm: "center" },
        bgcolor: alpha(theme.palette.primary.main, 0.08),
        borderColor: alpha(theme.palette.primary.main, 0.3),
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 1.5,
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
        <Box
          aria-hidden
          sx={{
            alignItems: "center", bgcolor: "primary.main", borderRadius: "50%",
            color: "primary.contrastText", display: "flex", height: 36,
            justifyContent: "center", width: 36,
          }}
        >
          <LocalOfferOutlined fontSize="small" />
        </Box>
        <Stack spacing={0}>
          <Typography variant="subtitle2">첫 주문은 15% 할인, 3만원 이상이면 무료배달</Typography>
          <Typography variant="caption" color="text.secondary">쿠폰함에서 바로 받을 수 있어요 · 이번 주 목요일까지</Typography>
        </Stack>
      </Stack>
      <Button variant="contained" size="small" sx={{ flexShrink: 0 }}>
        쿠폰 받기
      </Button>
    </Card>
  );
}

const STATUS_TONE: Record<Restaurant["status"], "success" | "warning" | "default"> = {
  영업중: "success",
  브레이크타임: "warning",
  마감: "default",
};

const CATEGORIES = ["전체", ...new Set(RESTAURANTS.map((r) => r.category))];

// 차트 조각 색은 1~4색만 지원. 카테고리가 4종 넘으면 네 색 반복 사용
const CHART_SERIES = [
  "var(--component-chart-series-1)",
  "var(--component-chart-series-2)",
  "var(--component-chart-series-3)",
  "var(--component-chart-series-4)",
] as const;

const CATEGORY_PIE_DATA = [...new Set(RESTAURANTS.map((r) => r.category))].map((label, id) => ({
  id,
  label,
  value: RESTAURANTS.filter((r) => r.category === label).length,
  color: CHART_SERIES[id % CHART_SERIES.length],
}));

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
      <DeliveryPromoCard />

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

      <Card variant="outlined" sx={{ p: 1.75 }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: "center" }}>
          <Stack spacing={0.25} sx={{ flexShrink: 0 }}>
            <Typography variant="subtitle2">카테고리별 가게 분포</Typography>
            <Typography variant="caption" color="text.secondary">
              지금 {RESTAURANTS.length}곳 · {CATEGORY_PIE_DATA.length}개 카테고리
            </Typography>
          </Stack>
          <Box sx={{ flex: 1, minWidth: 0, width: "100%" }}>
            <PieChart
              series={[
                {
                  data: CATEGORY_PIE_DATA,
                  innerRadius: 28,
                  paddingAngle: 2,
                  cornerRadius: 3,
                  highlightScope: { fade: "global", highlight: "item" },
                },
              ]}
              height={150}
            />
          </Box>
        </Stack>
      </Card>

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
