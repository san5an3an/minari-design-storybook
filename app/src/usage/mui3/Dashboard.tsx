import * as React from "react";
import {
  AppBar, Avatar, Box, InputAdornment, Stack, Tab, Tabs, TextField, Toolbar, Typography,
  BottomNavigation, BottomNavigationAction, useMediaQuery, useTheme,
} from "@mui/material";
import ListAltOutlined from "@mui/icons-material/ListAltOutlined";
import RestaurantOutlined from "@mui/icons-material/RestaurantOutlined";
import RoomServiceOutlined from "@mui/icons-material/RoomServiceOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const SCREEN_ICON: Record<string, React.ReactNode> = {
  restaurants: <RestaurantOutlined />,
  detail: <RoomServiceOutlined />,
  orders: <ListAltOutlined />,
};

export function MuiUsage3({ system }: UsageDashboardProps) {
  const theme = useTheme;
  const wide = useMediaQuery(theme.breakpoints.up("md"));

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);

  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

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
      <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: "divider", flexShrink: 0 }}>
        <Toolbar sx={{ flexWrap: "wrap", gap: 1.5, minHeight: "auto !important", py: 1 }}>
          <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
            <Box aria-hidden sx={{ bgcolor: "primary.main", borderRadius: 1, height: 24, width: 24 }} />
            <Typography variant="body1" noWrap sx={{ fontWeight: 600 }}>{system.name} 런치박스</Typography>
          </Stack>

          <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", flexWrap: "wrap", ml: "auto" }}>
            <TextField
              size="small"
              placeholder="가게·메뉴 검색"
              aria-label="가게·메뉴 검색"
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
              <Tab key={s.key} value={s.key} label={s.label} icon={SCREEN_ICON[s.key] as React.ReactElement} iconPosition="start" sx={{ minHeight: 48 }} />
            ))}
          </Tabs>
        ) : null}
      </AppBar>

      <Box sx={{ minWidth: 0, flex: 1, minHeight: 0, overflowY: "auto", p: { xs: 2, sm: 2.5 } }}>
        <Stack spacing={2}>
          <Stack spacing={0.25}>
            <Typography variant="h6" component="h2">{screen.label}</Typography>
            <Typography variant="body2" color="text.secondary">{screen.lede}</Typography>
          </Stack>
          <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
        </Stack>
      </Box>

      {!wide ? (
        <BottomNavigation value={screenKey} onChange={(_, v: string) => setScreenKey(v)} showLabels sx={{ borderTop: 1, borderColor: "divider", flexShrink: 0 }}>
          {SCREENS.map((s) => (
            <BottomNavigationAction key={s.key} value={s.key} label={s.label} icon={SCREEN_ICON[s.key]} />
          ))}
        </BottomNavigation>
      ) : null}
    </Box>
  );
}
