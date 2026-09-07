import * as React from "react";
import {
  Box, Button, Card, CardActionArea, Chip, Divider, IconButton, MenuItem,
  Rating, Select, Slider, Stack, ToggleButton, ToggleButtonGroup, Typography,
  useMediaQuery, useTheme,
} from "@mui/material";
import BathtubOutlined from "@mui/icons-material/BathtubOutlined";
import DirectionsCarOutlined from "@mui/icons-material/DirectionsCarOutlined";
import DirectionsSubwayOutlined from "@mui/icons-material/DirectionsSubwayOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";
import MeetingRoomOutlined from "@mui/icons-material/MeetingRoomOutlined";
import PhotoCameraOutlined from "@mui/icons-material/PhotoCameraOutlined";
import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import SquareFootOutlined from "@mui/icons-material/SquareFootOutlined";
import TuneOutlined from "@mui/icons-material/TuneOutlined";
import { LISTINGS, monthlyTotal, won, type Listing } from "../listings";
import type { ScreenProps } from "../screens";

const ROOM_OPTIONS = [1, 2, 3] as const;
const SORTS = {
  recommended: "추천순",
  cheap: "월세 낮은 순",
  big: "면적 넓은 순",
  near: "역 가까운 순",
} as const;
type SortKey = keyof typeof SORTS;

// 정렬 규칙을 표로 관리하기
const SORTERS: Record<SortKey, (a: Listing, b: Listing) => number> = {
  recommended: (a, b) => b.rating - a.rating,
  cheap: (a, b) => monthlyTotal(a) - monthlyTotal(b),
  big: (a, b) => b.size - a.size,
  near: (a, b) => a.walk - b.walk,
};

// 사진 위치 표시. 저작권 있는 사진은 저장소에 넣지 않고 위치만으로도 배치를 확인할 수 있음
function PhotoSlot({ height = 168 }: { height?: number }) {
  return (
    <Box
      aria-hidden
      sx={{
        alignItems: "center",
        bgcolor: "action.hover",
        color: "text.disabled",
        display: "flex",
        height,
        justifyContent: "center",
      }}
    >
      <PhotoCameraOutlined fontSize="small" />
    </Box>
  );
}

// 스펙 항목 하나, 아이콘과 값으로 구성. 넷이 한 행에서 줄바꿈 없이 고정
function Spec({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Stack direction="row" spacing={0.5} sx={{ alignItems: "center", whiteSpace: "nowrap" }}>
      <Box sx={{ color: "text.secondary", display: "flex" }}>{icon}</Box>
      <Typography variant="body2" color="text.secondary">{children}</Typography>
    </Stack>
  );
}

export function SearchScreen({ onNavigate, onSelect }: ScreenProps) {
  const theme = useTheme;
  const wide = useMediaQuery(theme.breakpoints.up("lg"));

  const [rooms, setRooms] = React.useState<number | null>(null);
  const [maxRent, setMaxRent] = React.useState(200);
  const [sort, setSort] = React.useState<SortKey>("recommended");
  const [liked, setLiked] = React.useState<readonly string[]>([]);

  const rows = React.useMemo( => {
    const out = LISTINGS.filter(
      (l) => (rooms === null || l.rooms >= rooms) && l.rent <= maxRent,
    );
    // sort는 원본 배열을 직접 변경. 다음 필터링 때 뒤섞인 목록이 보임
    return [...out].sort(SORTERS[sort]);
  }, [rooms, maxRent, sort]);

  const filtered = rooms !== null || maxRent < 200;

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("listing");
  };

  return (
    <Stack spacing={2}>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ alignItems: "center", flexWrap: "wrap", rowGap: 1.5 }}
      >
        <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
          <TuneOutlined fontSize="small" sx={{ color: "text.secondary" }} />
          <Typography variant="body2" color="text.secondary">방</Typography>
        </Stack>
        <ToggleButtonGroup
          size="small"
          exclusive
          value={rooms}
          onChange={(_, v: number | null) => setRooms(v)}
          aria-label="방 수"
        >
          {ROOM_OPTIONS.map((n) => (
            <ToggleButton key={n} value={n} aria-label={`${n}개 이상`}>
              {n}+
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Box sx={{ minWidth: 180, px: 1 }}>
          <Typography variant="caption" color="text.secondary">
            월세 {won(maxRent)} 이하
          </Typography>
          <Slider
            size="small"
            value={maxRent}
            min={60}
            max={200}
            step={10}
            onChange={(_, v) => setMaxRent(v as number)}
            aria-label="월세 상한"
          />
        </Box>

        <Select
          size="small"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          aria-label="정렬"
          sx={{ minWidth: 140 }}
        >
          {Object.entries(SORTS).map(([k, label]) => (
            <MenuItem key={k} value={k}>{label}</MenuItem>
          ))}
        </Select>

        {filtered ? (
          <Button
            size="small"
            onClick={ => {
              setRooms(null);
              setMaxRent(200);
            }}
          >
            초기화
          </Button>
        ) : null}
      </Stack>

      <Divider />

      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", flexWrap: "wrap" }}>
        <Typography variant="subtitle1" component="h3">
          마포구 매물 {rows.length}곳
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {SORTS[sort]}
        </Typography>
      </Stack>

      <Stack direction={wide ? "row" : "column"} spacing={2} sx={{ alignItems: "flex-start" }}>
        <Box
          sx={{
            display: "grid",
            flex: 1,
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              xl: "repeat(3, minmax(0, 1fr))",
            },
            minWidth: 0,
            width: "100%",
          }}
        >
          {rows.length === 0 ? (
            // 값 없음 상태를 빈 화면으로 두지 않음. 빈 화면은 고장과 구별되지 않음
            <Box
              sx={{
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
                borderStyle: "dashed",
                gridColumn: "1 / -1",
                p: 4,
                textAlign: "center",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                조건에 맞는 매물이 없어요. 월세 상한을 올리거나 방 수를 낮춰 보세요.
              </Typography>
            </Box>
          ) : null}

          {rows.map((l) => {
            const on = liked.includes(l.id);
            return (
              <Card key={l.id} variant="outlined" sx={{ overflow: "hidden", position: "relative" }}>
                {/* 찜 버튼 카드 클릭 영역 밖에 고정. 겹치면 찜과 상세 이동 모두 작동하지 않음 */}
                <IconButton
                  size="small"
                  aria-label={on ? `${l.title} 찜 해제` : `${l.title} 찜하기`}
                  onClick={ =>
                    setLiked((prev) => (on ? prev.filter((x) => x !== l.id) : [...prev, l.id]))
                  }
                  sx={{
                    bgcolor: "background.paper",
                    position: "absolute",
                    right: 8,
                    top: 8,
                    zIndex: 1,
                    "&:hover": { bgcolor: "background.paper" },
                  }}
                >
                  {on ? (
                    <FavoriteOutlined fontSize="small" color="error" />
                  ) : (
                    <FavoriteBorderOutlined fontSize="small" />
                  )}
                </IconButton>

                <CardActionArea onClick={ => open(l.id)}>
                  <PhotoSlot />
                  <Stack spacing={1} sx={{ p: 1.5 }}>
                    {l.tags.length ? (
                      <Stack direction="row" spacing={0.5} sx={{ flexWrap: "wrap", rowGap: 0.5 }}>
                        {l.tags.map((t) => (
                          <Chip key={t} label={t} size="small" color="primary" variant="outlined" />
                        ))}
                      </Stack>
                    ) : null}

                    <Stack direction="row" spacing={1} sx={{ alignItems: "baseline" }}>
                      <Typography variant="h6" component="p">
                        월 {won(l.rent)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        관리비 {won(l.fee)}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      보증금 {won(l.deposit)}
                    </Typography>

                    <Stack direction="row" spacing={1.5} sx={{ flexWrap: "wrap", rowGap: 0.5 }}>
                      <Spec icon={<SquareFootOutlined fontSize="inherit" />}>{l.size}㎡</Spec>
                      <Spec icon={<MeetingRoomOutlined fontSize="inherit" />}>방 {l.rooms}</Spec>
                      <Spec icon={<BathtubOutlined fontSize="inherit" />}>욕실 {l.baths}</Spec>
                      <Spec icon={<DirectionsCarOutlined fontSize="inherit" />}>
                        주차 {l.parking}
                      </Spec>
                    </Stack>

                    <Typography variant="body2" noWrap title={l.title}>
                      {l.title}
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }}>
                      <Spec icon={<PlaceOutlined fontSize="inherit" />}>{l.area}</Spec>
                      <Spec icon={<DirectionsSubwayOutlined fontSize="inherit" />}>
                        도보 {l.walk}분
                      </Spec>
                    </Stack>

                    <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                      <Rating value={l.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="caption" color="text.secondary">
                        {l.rating.toFixed(1)}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardActionArea>
              </Card>
            );
          })}
        </Box>

        {wide ? (
          <Card
            variant="outlined"
            sx={{ flexShrink: 0, position: "sticky", top: 16, width: 300 }}
          >
            <Box
              sx={{
                alignItems: "center",
                bgcolor: "background.default",
                color: "text.secondary",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                height: 320,
                justifyContent: "center",
              }}
            >
              <MapOutlined />
              <Typography variant="caption">지도 위치</Typography>
            </Box>
            <Stack spacing={0.5} sx={{ p: 1.5 }}>
              <Typography variant="body2">
                지금 목록의 {rows.length}곳이 지도에 함께 표시됩니다.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                거르개를 바꾸면 지도도 같이 좁혀집니다.
              </Typography>
            </Stack>
          </Card>
        ) : null}
      </Stack>
    </Stack>
  );
}
