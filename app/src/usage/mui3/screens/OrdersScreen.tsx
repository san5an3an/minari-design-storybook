import * as React from "react";
import {
  Box, Card, Chip, IconButton, MenuItem, MenuList, Pagination, Popover, Select, Stack,
  Typography, type SelectChangeEvent,
} from "@mui/material";
import {
  Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem,
  TimelineOppositeContent, TimelineSeparator,
} from "@mui/lab";
import DeliveryDiningOutlined from "@mui/icons-material/DeliveryDiningOutlined";
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import PaymentsOutlined from "@mui/icons-material/PaymentsOutlined";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import { ORDERS, type Order } from "../data";

const DELIVERY_STEPS = [
  { label: "주문 접수", time: "12분 전" },
  { label: "조리 중", time: "9분 전" },
  { label: "배달 중", time: "3분 전" },
  { label: "도착 예정", time: "곧" },
] as const;

const STATUS_COLOR: Record<Order["status"], "info" | "success" | "warning"> = {
  "배달 중": "info",
  "배달 완료": "success",
  "준비 중": "warning",
};

const FILTERS = ["전체", "배달 중", "준비 중", "배달 완료"] as const;
type SortKey = "최신순" | "금액순";

const PAGE_SIZE = 3;

export function OrdersScreen {
  const [filter, setFilter] = React.useState<(typeof FILTERS)[number]>("전체");
  const [sort, setSort] = React.useState<SortKey>("최신순");
  const [page, setPage] = React.useState(1);
  const [menuAnchor, setMenuAnchor] = React.useState<{ el: HTMLElement; orderId: string } | null>(null);

  const inProgress = ORDERS.find((o) => o.status === "배달 중");

  // 통계마다 지난달 대비 증감 표시. 칩 대신 캡션 사용
  const stats = [
    { icon: DeliveryDiningOutlined, label: "진행 중", value: `${ORDERS.filter((o) => o.status !== "배달 완료").length}건`, delta: "+2건", up: true },
    { icon: ReceiptLongOutlined, label: "이번 달 주문", value: `${ORDERS.length}건`, delta: "+3건", up: true },
    { icon: PaymentsOutlined, label: "총 결제액", value: `${ORDERS.reduce((s, o) => s + o.total, 0).toLocaleString("ko-KR")}원`, delta: "+12%", up: true },
  ];

  const sorted = React.useMemo( => {
    const filtered = filter === "전체" ? ORDERS : ORDERS.filter((o) => o.status === filter);
    return sort === "금액순" ? [...filtered].sort((a, b) => b.total - a.total) : filtered;
  }, [filter, sort]);
  const pageCount = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const rows = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <Stack spacing={2}>
      <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label} variant="outlined" sx={{ p: 1.5, textAlign: "center" }}>
              <Icon color="action" fontSize="small" />
              <Typography variant="caption" color="text.secondary" component="p">{s.label}</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{s.value}</Typography>
              <Typography variant="caption" sx={{ color: s.up ? "success.main" : "error.main", fontWeight: 600 }}>
                {s.delta} 지난달 대비
              </Typography>
            </Card>
          );
        })}
      </Box>

      {inProgress ? (
        <Card variant="outlined" sx={{ p: 1.75 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>{inProgress.restaurantName} 배달 현황</Typography>
          <Timeline sx={{ p: 0, m: 0, "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 } }}>
            {DELIVERY_STEPS.map((step, i) => (
              <TimelineItem key={step.label}>
                <TimelineOppositeContent sx={{ flex: 0.3 }}>
                  <Typography variant="caption" color="text.secondary">{step.time}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color={i <= 2 ? "primary" : "grey"} />
                  {i < DELIVERY_STEPS.length - 1 ? <TimelineConnector /> : null}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body2">{step.label}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Card>
      ) : null}

      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap", justifyContent: "space-between", rowGap: 1 }}>
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1 }}>
          {FILTERS.map((f) => (
            <Chip
              key={f}
              label={f}
              size="small"
              color={filter === f ? "primary" : "default"}
              variant={filter === f ? "filled" : "outlined"}
              onClick={ => { setFilter(f); setPage(1); }}
            />
          ))}
        </Stack>
        <Select
          size="small"
          value={sort}
          onChange={(e: SelectChangeEvent) => { setSort(e.target.value as SortKey); setPage(1); }}
          sx={{ minWidth: 110 }}
        >
          <MenuItem value="최신순">최신순</MenuItem>
          <MenuItem value="금액순">금액순</MenuItem>
        </Select>
      </Stack>

      <Stack spacing={1.5}>
        {rows.map((o) => (
          <Card key={o.id} variant="outlined" sx={{ p: 1.5 }}>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
              <Stack>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{o.restaurantName}</Typography>
                <Typography variant="caption" color="text.secondary">{o.itemsLabel}</Typography>
                <Typography variant="caption" color="text.secondary">{o.timeLabel}</Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: "flex-start" }}>
                <Stack spacing={0.5} sx={{ alignItems: "flex-end" }}>
                  <Chip size="small" label={o.status} color={STATUS_COLOR[o.status]} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{o.total.toLocaleString("ko-KR")}원</Typography>
                </Stack>
                <IconButton
                  size="small"
                  aria-label="더보기"
                  onClick={(e) => setMenuAnchor({ el: e.currentTarget, orderId: o.id })}
                >
                  <MoreVertOutlined fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Stack>

      {pageCount > 1 ? (
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, v) => setPage(v)}
          size="small"
          sx={{ alignSelf: "center" }}
        />
      ) : null}

      <Popover
        open={menuAnchor !== null}
        anchorEl={menuAnchor?.el ?? null}
        onClose={ => setMenuAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MenuList dense>
          <MenuItem onClick={ => setMenuAnchor(null)}>같은 메뉴로 재주문</MenuItem>
          <MenuItem onClick={ => setMenuAnchor(null)}>영수증 보기</MenuItem>
          <MenuItem onClick={ => setMenuAnchor(null)}>환불 요청</MenuItem>
        </MenuList>
      </Popover>
    </Stack>
  );
}
