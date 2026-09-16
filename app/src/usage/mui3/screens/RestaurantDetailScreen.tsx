import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { RESTAURANTS } from "../data";
import type { ScreenProps } from "../screens";

export function RestaurantDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const restaurant = RESTAURANTS.find((r) => r.id === selectedId);

  if (!restaurant) {
    return (
      <Box sx={{ border: 1, borderColor: "divider", borderRadius: 1, borderStyle: "dashed", p: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          가게를 먼저 골라 주세요. "가게" 탭에서 카드를 눌러 보세요.
        </Typography>
        <Button size="small" sx={{ mt: 1.5 }} onClick={ => onNavigate?.("restaurants")}>가게 목록으로</Button>
      </Box>
    );
  }

  return (
    <Stack spacing={2}>
      <Stack spacing={0.5}>
        <Typography variant="h6">{restaurant.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {restaurant.category} · ⭐ {restaurant.rating} · 배달 {restaurant.deliveryMin}분 · 최소주문 {restaurant.minOrder.toLocaleString("ko-KR")}원
        </Typography>
      </Stack>
      <Divider />
      <Stack spacing={1.25}>
        {restaurant.menu.map((m) => (
          <Stack key={m.name} direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography variant="body2">{m.name}</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>{m.price.toLocaleString("ko-KR")}원</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
