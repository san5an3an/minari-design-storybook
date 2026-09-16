import { Box, Card, CardActionArea, Chip, Stack, Typography } from "@mui/material";
import RestaurantOutlined from "@mui/icons-material/RestaurantOutlined";
import { RESTAURANTS } from "../data";
import type { ScreenProps } from "../screens";

export function RestaurantsScreen({ onNavigate, onSelect }: ScreenProps) {
  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
    <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" } }}>
      {RESTAURANTS.map((r) => (
        <Card key={r.id} variant="outlined">
          <CardActionArea onClick={ => open(r.id)} sx={{ p: 2 }}>
            <Stack spacing={1}>
              <Box aria-hidden sx={{ alignItems: "center", bgcolor: "action.hover", borderRadius: 1, color: "text.disabled", display: "flex", height: 96, justifyContent: "center" }}>
                <RestaurantOutlined />
              </Box>
              <Chip size="small" label={r.category} variant="outlined" sx={{ alignSelf: "flex-start" }} />
              <Typography variant="subtitle2">{r.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                ⭐ {r.rating} · 배달 {r.deliveryMin}분 · 최소주문 {r.minOrder.toLocaleString("ko-KR")}원
              </Typography>
            </Stack>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
