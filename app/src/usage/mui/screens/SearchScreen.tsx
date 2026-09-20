import * as React from "react";
import {
  Box, Button, Card, CardActionArea, CardMedia, Chip, Divider, IconButton, Menu, MenuItem,
  Rating, Select, Slider, Stack, ToggleButton, ToggleButtonGroup, Tooltip,
  Typography, useMediaQuery, useTheme,
} from "@mui/material";
import { alpha, darken } from "@mui/material/styles";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import BathtubOutlined from "@mui/icons-material/BathtubOutlined";
import DirectionsCarOutlined from "@mui/icons-material/DirectionsCarOutlined";
import DirectionsSubwayOutlined from "@mui/icons-material/DirectionsSubwayOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";
import FlagOutlined from "@mui/icons-material/FlagOutlined";
import HomeWorkOutlined from "@mui/icons-material/HomeWorkOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";
import MeetingRoomOutlined from "@mui/icons-material/MeetingRoomOutlined";
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import PaidOutlined from "@mui/icons-material/PaidOutlined";
import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import ShareOutlined from "@mui/icons-material/ShareOutlined";
import SquareFootOutlined from "@mui/icons-material/SquareFootOutlined";
import TimerOutlined from "@mui/icons-material/TimerOutlined";
import TrendingDown from "@mui/icons-material/TrendingDown";
import TrendingUp from "@mui/icons-material/TrendingUp";
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

function ListingPhoto({ listing, height = 168 }: { listing: Listing; height?: number }) {
  return (
    <CardMedia
      component="img"
      image={listing.photo}
      alt={`${listing.area} ${listing.title}`}
      // 사진 로드 전 배경은 action.hover 대신 background.default 사용
      sx={{ bgcolor: "background.default", height, objectFit: "cover" }}
    />
  );
}

const SEARCH_HERO_IMAGE =
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=60";

function SearchHero {
  const theme = useTheme;
  return (
    <Box
      sx={{
        alignItems: "flex-start",
        backgroundImage:
          `linear-gradient(120deg, ${alpha(darken(theme.palette.primary.main, 0.62), 0.94)} 0%, `
          + `${alpha(darken(theme.palette.primary.main, 0.5), 0.85)} 70%), url("${SEARCH_HERO_IMAGE}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: 1,
        boxShadow: "var(--semantic-shadow-raised)",
        display: "flex",
        gap: 0.5,
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: 144,
        p: { xs: 2, sm: 2.5 },
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{ color: theme.palette.common.white }}
      >
        마포구에서 다음 집을 찾아보세요
      </Typography>
      <Typography variant="body2" sx={{ color: theme.palette.common.white }}>
        조건을 좁혀 가며 고르는 화면. 지도와 목록이 같은 매물을 표시.
      </Typography>
    </Box>
  );
}

type StatTone = "primary" | "success" | "warning" | "error";

interface HomeStat {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  tone: StatTone;
  icon: React.ComponentType<{ fontSize?: "small" | "inherit" | "medium" | "large" }>;
  trend: readonly number[];
}

const HOME_STATS: readonly HomeStat[] = [
  {
    label: "이번 주 신규 매물",
    value: "12건",
    delta: "+20%",
    up: true,
    tone: "primary",
    icon: HomeWorkOutlined,
    trend: [4, 6, 5, 8, 7, 10, 12],
  },
  {
    label: "평균 월세",
    value: "145만원",
    delta: "-3%",
    up: false,
    tone: "success",
    icon: PaidOutlined,
    trend: [152, 150, 149, 148, 147, 146, 145],
  },
  {
    label: "관심 매물",
    value: "8건",
    delta: "+2건",
    up: true,
    tone: "warning",
    icon: FavoriteBorderOutlined,
    trend: [3, 4, 4, 5, 6, 7, 8],
  },
  {
    label: "평균 도보 거리",
    value: "8분",
    delta: "-1분",
    up: true,
    tone: "error",
    icon: TimerOutlined,
    trend: [11, 10, 10, 9, 9, 8, 8],
  },
];

function HomeStatCard({ stat }: { stat: HomeStat }) {
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
              alignItems: "center",
              bgcolor: `${stat.tone}.main`,
              borderRadius: "50%",
              color: `${stat.tone}.contrastText`,
              display: "flex",
              height: 30,
              justifyContent: "center",
              opacity: 0.9,
              width: 30,
            }}
          >
            <Icon fontSize="small" />
          </Box>
          <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
          <Typography variant="h6" component="p">{stat.value}</Typography>
        </Stack>
        <Stack spacing={0.5} sx={{ alignItems: "flex-end" }}>
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
          <SparkLineChart
            data={[...stat.trend]}
            height={32}
            width={72}
            color={trendColor}
            showTooltip={false}
            showHighlight={false}
          />
        </Stack>
      </Stack>
    </Card>
  );
}

// 인기 매물 랭킹 리스트, 지도 패널과 짝지어 사이드바에 고정
function RankingList {
  const top = React.useMemo(
     => [...LISTINGS].sort((a, b) => b.rating - a.rating).slice(0, 3),
    [],
  );
  return (
    <Card variant="outlined" sx={{ p: 1.5 }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>이번 주 인기 매물</Typography>
      <Stack spacing={1}>
        {top.map((l, i) => (
          <Stack key={l.id} direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Typography
              variant="caption"
              sx={{
                alignItems: "center", bgcolor: i === 0 ? "primary.main" : "action.hover",
                borderRadius: "50%", color: i === 0 ? "primary.contrastText" : "text.secondary",
                display: "flex", flexShrink: 0, fontWeight: 700, height: 20,
                justifyContent: "center", width: 20,
              }}
            >
              {i + 1}
            </Typography>
            <Stack spacing={0} sx={{ minWidth: 0 }}>
              <Typography variant="body2" noWrap title={l.title}>{l.area}</Typography>
              <Typography variant="caption" color="text.secondary">⭐ {l.rating.toFixed(1)} · 월 {won(l.rent)}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}

function ListingMap({ rows }: { rows: readonly Listing[] }) {
  const theme = useTheme;
  const shownIds = new Set(rows.map((l) => l.id));
  const top = [...rows].sort((a, b) => b.rating - a.rating)[0];
  return (
    <Box sx={{ bgcolor: "background.default", height: 320, overflow: "hidden", position: "relative" }}>
      <Box
        aria-hidden
        component="svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{ height: "100%", inset: 0, position: "absolute", width: "100%" }}
      >
        {[20, 40, 60, 80].map((x) => (
          <line key={`v${x}`} x1={x} y1={0} x2={x} y2={100} stroke={theme.palette.divider} strokeWidth={0.4} />
        ))}
        {[20, 40, 60, 80].map((y) => (
          <line key={`h${y}`} x1={0} y1={y} x2={100} y2={y} stroke={theme.palette.divider} strokeWidth={0.4} />
        ))}
        {/* 한강, 마포구 남측 경계를 나타내는 지형지물 */}
        <path
          d="M0,88 C20,80 38,94 58,86 C76,79 88,90 100,84 L100,100 L0,100 Z"
          fill={alpha(theme.palette.primary.main, 0.18)}
        />
        {/* 지하철 2호선. 합정, 홍대입구, 신촌 구간 굵은 선으로 표시 */}
        <polyline
          points="10,72 26,64 46,58 68,62 92,54"
          fill="none"
          stroke={alpha(theme.palette.primary.main, 0.45)}
          strokeWidth={1.4}
          strokeLinecap="round"
        />
      </Box>

      {LISTINGS.map((l) => {
        const on = shownIds.has(l.id);
        const best = top?.id === l.id;
        return (
          <Tooltip key={l.id} title={`${l.area} · 월 ${won(l.rent)} · ⭐ ${l.rating.toFixed(1)}`}>
            <Box
              sx={{
                alignItems: "center",
                // 필터에서 빠진 핀은 지우지 않고 흐리게 유지. 사라지면 지도와 목록 대응이 안 보임
                bgcolor: best ? "primary.main" : "background.paper",
                border: 2,
                borderColor: on ? "primary.main" : "divider",
                borderRadius: "50%",
                color: best ? "primary.contrastText" : "text.secondary",
                display: "flex",
                height: best ? 26 : 18,
                justifyContent: "center",
                left: `${l.mapX}%`,
                opacity: on ? 1 : 0.45,
                position: "absolute",
                top: `${l.mapY}%`,
                transform: "translate(-50%, -50%)",
                width: best ? 26 : 18,
                zIndex: best ? 2 : 1,
              }}
            >
              <PlaceOutlined sx={{ fontSize: best ? 15 : 11 }} />
            </Box>
          </Tooltip>
        );
      })}

      {/* 지도 위 범례. 빈 항목 대신 의미 있는 내용으로 구성 */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
          bgcolor: alpha(theme.palette.background.paper, 0.92),
          borderRadius: 1,
          bottom: 8,
          left: 8,
          position: "absolute",
          px: 1,
          py: 0.5,
          right: 8,
        }}
      >
        <MapOutlined fontSize="small" sx={{ color: "text.secondary" }} />
        <Typography variant="caption" color="text.secondary" noWrap>
          마포구 · 표시 {rows.length}곳{top ? ` · 최고 평점 ${top.area}` : ""}
        </Typography>
      </Stack>
    </Box>
  );
}

// Quick Insights 한 줄 요약, 통계값에서 직접 추출하기
function QuickInsights {
  const cheapest = React.useMemo(
     => [...LISTINGS].sort((a, b) => monthlyTotal(a) - monthlyTotal(b))[0],
    [],
  );
  return (
    <Card variant="outlined" sx={{ bgcolor: "action.hover", p: 1.5 }}>
      <Typography variant="caption" color="text.secondary">
        💡 가장 저렴한 매물은 <strong>{cheapest.area}</strong>, 월 {won(monthlyTotal(cheapest))}이에요.
      </Typography>
    </Card>
  );
}

// 카드 우상단 더보기 메뉴, 공유/신고 포함. Menu를 anchorEl 기반으로 사용
function CardMenu({ title }: { title: string }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  return (
    <>
      <IconButton
        size="small"
        aria-label={`${title} 더보기`}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          bgcolor: "background.paper",
          position: "absolute",
          right: 44,
          top: 8,
          zIndex: 1,
          "&:hover": { bgcolor: "background.paper" },
        }}
      >
        <MoreVertOutlined fontSize="small" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={ => setAnchorEl(null)}>
        <MenuItem onClick={ => setAnchorEl(null)}>
          <ShareOutlined fontSize="small" sx={{ mr: 1 }} /> 공유하기
        </MenuItem>
        <MenuItem onClick={ => setAnchorEl(null)}>
          <FlagOutlined fontSize="small" sx={{ mr: 1 }} /> 신고하기
        </MenuItem>
      </Menu>
    </>
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
      <SearchHero />

      <Box
        sx={{
          display: "grid",
          gap: 1.5,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
        }}
      >
        {HOME_STATS.map((s) => (
          <HomeStatCard key={s.label} stat={s} />
        ))}
      </Box>

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
                <Tooltip title={on ? "찜 해제" : "찜하기"}>
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
                </Tooltip>
                <CardMenu title={l.title} />

                <CardActionArea onClick={ => open(l.id)}>
                  <ListingPhoto listing={l} />
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
          <Stack spacing={1.5} sx={{ flexShrink: 0, position: "sticky", top: 16, width: 300 }}>
          <Card
            variant="outlined"
          >
            <ListingMap rows={rows} />
            <Stack spacing={0.5} sx={{ p: 1.5 }}>
              <Typography variant="body2">
                지금 목록의 {rows.length}곳이 지도에 함께 표시됩니다.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                거르개를 바꾸면 지도도 같이 좁혀집니다.
              </Typography>
            </Stack>
          </Card>
          <RankingList />
          <QuickInsights />
          </Stack>
        ) : null}
      </Stack>
    </Stack>
  );
}
