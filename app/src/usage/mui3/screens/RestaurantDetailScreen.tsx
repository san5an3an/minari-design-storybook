import * as React from "react";
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  Divider, IconButton, Stack, Typography,
} from "@mui/material";
import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";
import { RESTAURANTS } from "../data";
import type { ScreenProps } from "../screens";

export function RestaurantDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const restaurant = RESTAURANTS.find((r) => r.id === selectedId);
  const [picked, setPicked] = React.useState<{ name: string; price: number } | null>(null);

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
          <Stack key={m.name} direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="body2">{m.name}</Typography>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>{m.price.toLocaleString("ko-KR")}원</Typography>
              <IconButton size="small" aria-label={`${m.name} 담기`} onClick={ => setPicked(m)}>
                <AddShoppingCartOutlined fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Dialog open={picked !== null} onClose={ => setPicked(null)}>
        <DialogTitle>장바구니에 담았어요</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {picked?.name} · {picked?.price.toLocaleString("ko-KR")}원, {restaurant.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ => setPicked(null)}>계속 담기</Button>
          <Button variant="contained" onClick={ => setPicked(null)}>주문하기</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
