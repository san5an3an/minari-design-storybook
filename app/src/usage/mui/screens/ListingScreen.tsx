import * as React from "react";
import {
  Box, Button, Card, Chip, Divider, ImageList, ImageListItem, Rating, Stack,
  Typography, useMediaQuery, useTheme,
} from "@mui/material";
import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";
import BathtubOutlined from "@mui/icons-material/BathtubOutlined";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import DirectionsCarOutlined from "@mui/icons-material/DirectionsCarOutlined";
import DirectionsSubwayOutlined from "@mui/icons-material/DirectionsSubwayOutlined";
import MeetingRoomOutlined from "@mui/icons-material/MeetingRoomOutlined";
import PhotoCameraOutlined from "@mui/icons-material/PhotoCameraOutlined";
import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import SquareFootOutlined from "@mui/icons-material/SquareFootOutlined";
import { LISTINGS, monthlyTotal, won } from "../listings";
import type { ScreenProps } from "../screens";

// 스펙 한 셀, 아이콘, 값, 이름 구성 넷을 격자로 정렬
function SpecCell({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: React.ReactNode;
  label: string;
}) {
  return (
    <Stack spacing={0.5} sx={{ alignItems: "center", py: 1.5 }}>
      <Box sx={{ color: "text.secondary", display: "flex" }}>{icon}</Box>
      <Typography variant="subtitle1" component="p">{value}</Typography>
      <Typography variant="caption" color="text.secondary">{label}</Typography>
    </Stack>
  );
}

export function ListingScreen({ selectedId, onNavigate, onBook, bookedIds }: ScreenProps) {
  const theme = useTheme;
  const wide = useMediaQuery(theme.breakpoints.up("md"));
  const listing = LISTINGS.find((l) => l.id === selectedId);

  if (!listing) {
    return (
      <Card variant="outlined" sx={{ p: 4, textAlign: "center" }}>
        <Stack spacing={1.5} sx={{ alignItems: "center" }}>
          <Typography variant="subtitle1">아직 고른 매물이 없어요</Typography>
          <Typography variant="body2" color="text.secondary">
            탐색에서 카드를 누르면 그 매물이 여기 열립니다.
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

  const booked = bookedIds?.includes(listing.id) ?? false;

  return (
    <Stack spacing={2}>
      <Button
        size="small"
        startIcon={<ArrowBackOutlined />}
        onClick={ => onNavigate?.("search")}
        sx={{ alignSelf: "flex-start" }}
      >
        목록으로
      </Button>

      <ImageList cols={wide ? 4 : 2} rowHeight={wide ? 110 : 96} gap={8} sx={{ m: 0 }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <ImageListItem key={i} cols={i === 0 && wide ? 2 : 1} rows={i === 0 && wide ? 2 : 1}>
            <Box
              aria-hidden
              sx={{
                alignItems: "center",
                bgcolor: "action.hover",
                borderRadius: 1,
                color: "text.disabled",
                display: "flex",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <PhotoCameraOutlined fontSize="small" />
            </Box>
          </ImageListItem>
        ))}
      </ImageList>

      <Stack direction={wide ? "row" : "column"} spacing={2} sx={{ alignItems: "flex-start" }}>
        <Stack spacing={2} sx={{ flex: 1, minWidth: 0, width: "100%" }}>
          <Stack spacing={1}>
            <Stack direction="row" spacing={0.5} sx={{ flexWrap: "wrap", rowGap: 0.5 }}>
              {listing.tags.map((t) => (
                <Chip key={t} label={t} size="small" color="primary" variant="outlined" />
              ))}
            </Stack>
            <Typography variant="h6" component="h3">{listing.title}</Typography>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                <PlaceOutlined fontSize="small" sx={{ color: "text.secondary" }} />
                <Typography variant="body2" color="text.secondary">{listing.area}</Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                <DirectionsSubwayOutlined fontSize="small" sx={{ color: "text.secondary" }} />
                <Typography variant="body2" color="text.secondary">
                  역까지 도보 {listing.walk}분
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                <Rating value={listing.rating} precision={0.1} size="small" readOnly />
                <Typography variant="caption" color="text.secondary">
                  {listing.rating.toFixed(1)}
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Card variant="outlined">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                "& > :not(:last-child)": { borderRight: 1, borderColor: "divider" },
              }}
            >
              <SpecCell
                icon={<SquareFootOutlined fontSize="small" />}
                value={`${listing.size}㎡`}
                label="전용면적"
              />
              <SpecCell
                icon={<MeetingRoomOutlined fontSize="small" />}
                value={listing.rooms}
                label="방"
              />
              <SpecCell
                icon={<BathtubOutlined fontSize="small" />}
                value={listing.baths}
                label="욕실"
              />
              <SpecCell
                icon={<DirectionsCarOutlined fontSize="small" />}
                value={listing.parking}
                label="주차"
              />
            </Box>
          </Card>

          <Stack spacing={1}>
            <Typography variant="subtitle2">편의시설</Typography>
            <Stack direction="row" spacing={0.75} sx={{ flexWrap: "wrap", rowGap: 0.75 }}>
              {listing.amenities.map((a) => (
                <Chip
                  key={a}
                  label={a}
                  size="small"
                  icon={<CheckCircleOutlined />}
                  variant="outlined"
                />
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Card
          variant="outlined"
          sx={{
            flexShrink: 0,
            p: 2,
            position: wide ? "sticky" : "static",
            top: 16,
            width: wide ? 280 : "100%",
          }}
        >
          <Stack spacing={1.5}>
            <Stack spacing={0.25}>
              <Typography variant="h5" component="p">월 {won(listing.rent)}</Typography>
              <Typography variant="body2" color="text.secondary">
                관리비 {won(listing.fee)} · 보증금 {won(listing.deposit)}
              </Typography>
            </Stack>

            <Divider />

            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography variant="body2">달마다 내는 돈</Typography>
              <Typography variant="subtitle2">{won(monthlyTotal(listing))}</Typography>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography variant="body2" color="text.secondary">층</Typography>
              <Typography variant="body2" color="text.secondary">{listing.floor}</Typography>
            </Stack>

            {/* 방문 처리된 항목은 재처리 제외. 버튼 모양이 고정이면 클릭 여부가 구분되지 않음 */}
            {booked ? (
              <Button
                variant="outlined"
                color="success"
                startIcon={<CheckCircleOutlined />}
                onClick={ => onNavigate?.("saved")}
              >
                방문 예약됨 · 찜에서 보기
              </Button>
            ) : (
              <Button
                variant="contained"
                startIcon={<CalendarMonthOutlined />}
                onClick={ => {
                  onBook?.(listing.id);
                  onNavigate?.("schedule");
                }}
              >
                방문 예약하기
              </Button>
            )}
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
}
