import * as React from "react";
import {
  Avatar, Box, Button, Card, Chip, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Divider, Grid, IconButton, List, ListItem, ListItemAvatar,
  ListItemText, Rating, Snackbar, Stack, TextareaAutosize, Typography,
} from "@mui/material";
import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";
import DeliveryDiningOutlined from "@mui/icons-material/DeliveryDiningOutlined";
import PaymentsOutlined from "@mui/icons-material/PaymentsOutlined";
import ShareOutlined from "@mui/icons-material/ShareOutlined";
import TimerOutlined from "@mui/icons-material/TimerOutlined";
import { REVIEWS, RESTAURANTS } from "../data";
import type { ScreenProps } from "../screens";

const FOOD_IMAGE: Record<string, string> = {
  한식: "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?w=1200&q=80&auto=format&fit=crop",
  양식: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80&auto=format&fit=crop",
  일식: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=80&auto=format&fit=crop",
  중식: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1200&q=80&auto=format&fit=crop",
  // RESTAURANTS 카테고리별 사진 추가. 없으면 한식 기본값으로 국밥 사진 노출 문제임
  카페: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop",
  분식: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=1200&q=80&auto=format&fit=crop",
  버거: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&q=80&auto=format&fit=crop",
  인도: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&q=80&auto=format&fit=crop",
  베트남: "https://images.unsplash.com/photo-1585238341267-6478d84e4519?w=1200&q=80&auto=format&fit=crop",
  멕시칸: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=1200&q=80&auto=format&fit=crop",
};

const STATUS_TONE: Record<string, "success" | "warning" | "default"> = {
  영업중: "success", 브레이크타임: "warning", 마감: "default",
};

export function RestaurantDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const restaurant = RESTAURANTS.find((r) => r.id === selectedId);
  const [picked, setPicked] = React.useState<{ name: string; price: number } | null>(null);
  const [shared, setShared] = React.useState(false);
  const [draftReview, setDraftReview] = React.useState("");

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

  const restaurantReviews = REVIEWS.filter((r) => r.restaurantId === restaurant.id);
  const avgReviewRating = restaurantReviews.length
    ? restaurantReviews.reduce((s, r) => s + r.rating, 0) / restaurantReviews.length
    : restaurant.rating;

  return (
    <Stack spacing={2}>
      <Box
        sx={{
          alignItems: "flex-end", backgroundImage:
            `linear-gradient(180deg, transparent 0%, transparent 40%, color-mix(in oklch, var(--semantic-bg-neutral-default) 25%, black) 100%), url(${FOOD_IMAGE[restaurant.category] ?? FOOD_IMAGE["한식"]})`,
          backgroundPosition: "center", backgroundSize: "cover", borderRadius: 2,
          display: "flex", justifyContent: "space-between", minHeight: "8rem", p: 2,
        }}
      >
        <Stack spacing={0.5}>
          <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
            <Chip size="small" label={restaurant.category} sx={{ bgcolor: "rgba(255,255,255,0.85)" }} />
            <Chip size="small" label={restaurant.status} color={STATUS_TONE[restaurant.status]} />
          </Stack>
          <Typography variant="h6" sx={{ color: "common.white", fontWeight: 700 }}>{restaurant.name}</Typography>
        </Stack>
        <IconButton
          aria-label="공유하기"
          onClick={ => setShared(true)}
          sx={{ alignSelf: "flex-start", bgcolor: "rgba(255,255,255,0.85)" }}
          size="small"
        >
          <ShareOutlined fontSize="small" />
        </IconButton>
      </Box>

      <Snackbar
        open={shared}
        autoHideDuration={2500}
        onClose={ => setShared(false)}
        message={`${restaurant.name} 링크를 복사했어요`}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />

      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Rating value={avgReviewRating} precision={0.1} size="small" readOnly />
        <Typography variant="body2" color="text.secondary">
          {avgReviewRating.toFixed(1)} · 리뷰 {restaurantReviews.length}건
        </Typography>
      </Stack>

      {/* 배달 정보 통계 Grid로 여백 채우기 */}
      <Grid container spacing={1.5}>
        {[
          { icon: TimerOutlined, label: "배달 예상", value: `${restaurant.deliveryMin}분` },
          { icon: PaymentsOutlined, label: "최소 주문", value: `${restaurant.minOrder.toLocaleString("ko-KR")}원` },
          { icon: DeliveryDiningOutlined, label: "영업 상태", value: restaurant.status },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <Grid key={s.label} size={4}>
              <Card variant="outlined" sx={{ p: 1.5, textAlign: "center" }}>
                <Icon color="action" fontSize="small" />
                <Typography variant="caption" color="text.secondary" component="p">{s.label}</Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{s.value}</Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Divider textAlign="left">메뉴</Divider>
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

      {restaurantReviews.length > 0 && (
        <>
          <Divider textAlign="left">리뷰 {restaurantReviews.length}</Divider>
          <List disablePadding>
            {restaurantReviews.map((rv) => (
              <ListItem key={rv.id} alignItems="flex-start" disableGutters>
                <ListItemAvatar>
                  <Avatar sx={{ height: 32, width: 32, fontSize: 14 }}>{rv.author.slice(0, 1)}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{rv.author}</Typography>
                      <Rating value={rv.rating} size="small" readOnly />
                      <Typography variant="caption" color="text.secondary">{rv.dateLabel}</Typography>
                    </Stack>
                  }
                  secondary={rv.comment}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}

      <Divider textAlign="left">리뷰 쓰기</Divider>
      <Stack spacing={1}>
        <TextareaAutosize
          minRows={2}
          placeholder={`${restaurant.name}은(는) 어떠셨나요?`}
          value={draftReview}
          onChange={(e) => setDraftReview(e.target.value)}
          style={{
            borderColor: "var(--mui-palette-divider, #ccc)", borderRadius: 4, fontFamily: "inherit",
            fontSize: "0.875rem", padding: "0.5rem 0.75rem", resize: "vertical",
          }}
        />
        <Button
          size="small"
          variant="outlined"
          disabled={draftReview.trim.length === 0}
          onClick={ => setDraftReview("")}
          sx={{ alignSelf: "flex-end" }}
        >
          리뷰 등록
        </Button>
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
