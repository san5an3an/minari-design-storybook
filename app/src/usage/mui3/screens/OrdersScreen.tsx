import { Box, Chip, Stack, Typography } from "@mui/material";
import { ORDERS, type Order } from "../data";

const STATUS_COLOR: Record<Order["status"], "info" | "success" | "warning"> = {
  "배달 중": "info",
  "배달 완료": "success",
  "준비 중": "warning",
};

export function OrdersScreen {
  return (
    <Stack spacing={1.5}>
      {ORDERS.map((o) => (
        <Box key={o.id} sx={{ border: 1, borderColor: "divider", borderRadius: 1, p: 1.5 }}>
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
            <Stack>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>{o.restaurantName}</Typography>
              <Typography variant="caption" color="text.secondary">{o.itemsLabel}</Typography>
              <Typography variant="caption" color="text.secondary">{o.timeLabel}</Typography>
            </Stack>
            <Stack spacing={0.5} sx={{ alignItems: "flex-end" }}>
              <Chip size="small" label={o.status} color={STATUS_COLOR[o.status]} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>{o.total.toLocaleString("ko-KR")}원</Typography>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
