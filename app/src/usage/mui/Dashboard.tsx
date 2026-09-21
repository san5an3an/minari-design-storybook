import * as React from "react";
import {
  AppBar, Avatar, Badge, Box, BottomNavigation, BottomNavigationAction, Chip,
  InputAdornment, Stack, Tab, Tabs, TextField, Toolbar, Typography,
  useMediaQuery, useTheme,
} from "@mui/material";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import KingBedOutlined from "@mui/icons-material/KingBedOutlined";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import type { UsageDashboardProps } from "../registry";
import { LISTINGS } from "./listings";
import { SCREENS } from "./screens";

// 화면 이름 아래 네비게이션 아이콘. 좁은 위치에서는 아이콘부터 표시
const SCREEN_ICON: Record<string, React.ReactNode> = {
  search: <SearchOutlined />,
  listing: <KingBedOutlined />,
  schedule: <CalendarMonthOutlined />,
  saved: <FavoriteBorderOutlined />,
};

export function MuiUsage({ system }: UsageDashboardProps) {
  const theme = useTheme;
  const wide = useMediaQuery(theme.breakpoints.up("md"));

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(LISTINGS[0]?.id);
  const [bookedIds, setBookedIds] = React.useState<readonly string[]>( =>
    [LISTINGS[2]?.id, LISTINGS[4]?.id].filter((id): id is string => Boolean(id)),
  );

  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const book = (id: string) =>
    // 같은 매물 중복 추가 막기. 찜 목록에 중복 행이 있으면 비교 기능이 깨지는 문제가 있음
    setBookedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        border: 1,
        borderColor: "divider",
        borderRadius: 1,
        boxShadow: "var(--semantic-shadow-raised)",
        display: "flex",
        flexDirection: "column",
        height: "max(20rem, calc(100dvh - 9rem))",
        overflow: "hidden",
      }}
    >
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: "divider", flexShrink: 0 }}
      >
        <Toolbar sx={{ flexWrap: "wrap", gap: 1.5, minHeight: "auto !important", py: 1 }}>
          <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
            <Box
              aria-hidden
              sx={{
                bgcolor: "primary.main",
                borderRadius: 1,
                height: 24,
                width: 24,
              }}
            />
            <Typography variant="body1" noWrap sx={{ fontWeight: 600 }}>
              {system.name} 집
            </Typography>
          </Stack>

          {/* 지역 변경 가능하게 두지 않음. 목업 데이터가 마포구뿐이라 눌러도 동작 없음 */}
          <Chip
            size="small"
            icon={<LocationOnOutlined />}
            label="마포구"
            variant="outlined"
          />

          <Stack
            direction="row"
            spacing={1.25}
            sx={{ alignItems: "center", flexWrap: "wrap", ml: "auto" }}
          >
            <TextField
              size="small"
              placeholder="동네·지하철역"
              aria-label="지역 검색"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined fontSize="small" />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{ inlineSize: "min(200px, 46vw)" }}
            />
            <Badge badgeContent={bookedIds.length} color="primary" showZero={false}>
              <FavoriteBorderOutlined fontSize="small" />
            </Badge>
            <Avatar sx={{ blockSize: 28, fontSize: 12, inlineSize: 28 }}>하</Avatar>
          </Stack>
        </Toolbar>

        {wide ? (
          <Tabs
            value={screenKey}
            onChange={(_, v: string) => setScreenKey(v)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{ borderTop: 1, borderColor: "divider", minHeight: 0, px: 1 }}
          >
            {SCREENS.map((s) => (
              <Tab
                key={s.key}
                value={s.key}
                label={s.label}
                icon={SCREEN_ICON[s.key] as React.ReactElement}
                iconPosition="start"
                sx={{ minHeight: 48 }}
              />
            ))}
          </Tabs>
        ) : null}
      </AppBar>

      {/* 내부 스크롤 영역. minHeight 0 없으면 오토스크롤이 동작하지 않음 */}
      <Box sx={{ minWidth: 0, flex: 1, minHeight: 0, overflowY: "auto", p: { xs: 2, sm: 2.5 } }}>
        <Stack spacing={2}>
          <Stack spacing={0.25}>
            <Typography variant="h6" component="h2">{screen.label}</Typography>
            <Typography variant="body2" color="text.secondary">{screen.lede}</Typography>
          </Stack>

          <Screen
            onNavigate={setScreenKey}
            selectedId={selectedId}
            onSelect={setSelectedId}
            bookedIds={bookedIds}
            onBook={book}
          />
        </Stack>
      </Box>

      {!wide ? (
        <BottomNavigation
          value={screenKey}
          onChange={(_, v: string) => setScreenKey(v)}
          showLabels
          sx={{ borderTop: 1, borderColor: "divider", flexShrink: 0 }}
        >
          {SCREENS.map((s) => (
            <BottomNavigationAction
              key={s.key}
              value={s.key}
              label={s.label}
              icon={SCREEN_ICON[s.key]}
            />
          ))}
        </BottomNavigation>
      ) : null}
    </Box>
  );
}
