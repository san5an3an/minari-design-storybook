import * as React from "react";
import {
  Alert, Box, Button, Card, Chip, Divider, List, ListItem, ListItemIcon, ListItemText, Stack,
  Step, StepLabel, Stepper, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery, useTheme,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ko } from "date-fns/locale";
import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";
import BadgeOutlined from "@mui/icons-material/BadgeOutlined";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import SmartphoneOutlined from "@mui/icons-material/SmartphoneOutlined";
import VpnKeyOutlined from "@mui/icons-material/VpnKeyOutlined";
import { LISTINGS, won } from "../listings";
import type { ScreenProps } from "../screens";

// 영업 시간대는 고정 목록 사용. 매물마다 다르면 스크린샷 비교 불가 상태임
const SLOTS = ["10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"] as const;

// 예약된 슬롯, 항상 막힘 상태로 고정
const TAKEN = new Set(["11:00", "15:00"]);

const STEPS = ["날짜", "시간", "확인"] as const;

function asDate(v: unknown): Date | null {
  return v instanceof Date ? v : null;
}

export function ScheduleScreen({ selectedId, onNavigate, bookedIds, onBook }: ScreenProps) {
  const theme = useTheme;
  const wide = useMediaQuery(theme.breakpoints.up("md"));

  // 오늘 0시 기준으로 시와 분 제거. 남기면 오늘 오전엔 지난 날짜로 처리되는 문제가 있음
  const today = React.useMemo( => {
    const d = new Date;
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [date, setDate] = React.useState<Date | null>(null);
  const [slot, setSlot] = React.useState<string | null>(null);
  const [done, setDone] = React.useState(false);

  const listing = LISTINGS.find((l) => l.id === selectedId);
  const step = done ? 2 : date === null ? 0 : slot === null ? 1 : 2;

  if (!listing) {
    return (
      <Card variant="outlined" sx={{ p: 4, textAlign: "center" }}>
        <Stack spacing={1.5} sx={{ alignItems: "center" }}>
          <Typography variant="subtitle1">어느 집을 보러 갈까요</Typography>
          <Typography variant="body2" color="text.secondary">
            매물을 먼저 고르면 그 집의 방문 가능한 날짜가 여기 열립니다.
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

  const already = bookedIds?.includes(listing.id) ?? false;

  return (
    <Stack spacing={2}>
      <Stepper activeStep={step} alternativeLabel={!wide} sx={{ pb: 1 }}>
        {STEPS.map((s) => (
          <Step key={s}>
            <StepLabel>{s}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Stack direction={wide ? "row" : "column"} spacing={2} sx={{ alignItems: "flex-start" }}>
        <Card variant="outlined" sx={{ flexShrink: 0, width: wide ? "auto" : "100%" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
            <DateCalendar
              value={date}
              onChange={(v) => {
                setDate(asDate(v));
                // 날짜 변경 시 시간값 초기화
                setSlot(null);
                setDone(false);
              }}
              disablePast
              // 일요일은 휴무로 처리. getDay가 0이면 일요일임
              shouldDisableDate={(d) => asDate(d)?.getDay === 0}
              minDate={today}
            />
          </LocalizationProvider>
        </Card>

        <Stack spacing={2} sx={{ flex: 1, minWidth: 0, width: "100%" }}>
          <Card variant="outlined" sx={{ p: 2 }}>
            <Stack spacing={1.5}>
              <Stack spacing={0.25}>
                <Typography variant="subtitle2">{listing.title}</Typography>
                <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                  <PlaceOutlined fontSize="small" sx={{ color: "text.secondary" }} />
                  <Typography variant="body2" color="text.secondary">
                    {listing.area} · 월 {won(listing.rent)}
                  </Typography>
                </Stack>
              </Stack>

              <Divider />

              <Stack spacing={1}>
                <Typography variant="body2" color="text.secondary">
                  {date
                    ? `${date.toLocaleDateString("ko-KR", { month: "long", day: "numeric", weekday: "short" })} 방문 가능한 시간`
                    : "날짜를 먼저 고르세요"}
                </Typography>
                {/* 지난 날짜 이전 시간대는 숨김 대신 비활성화 처리 */}
                <ToggleButtonGroup
                  exclusive
                  value={slot}
                  onChange={(_, v: string | null) => {
                    setSlot(v);
                    setDone(false);
                  }}
                  aria-label="방문 시간"
                  sx={{ flexWrap: "wrap", gap: 1, "& .MuiToggleButtonGroup-grouped": { border: 1, borderRadius: 1 } }}
                >
                  {SLOTS.map((s) => (
                    <ToggleButton
                      key={s}
                      value={s}
                      size="small"
                      disabled={date === null || TAKEN.has(s)}
                      aria-label={TAKEN.has(s) ? `${s} 마감` : s}
                    >
                      {s}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
                {date && TAKEN.size > 0 ? (
                  <Typography variant="caption" color="text.secondary">
                    흐린 시간은 이미 다른 방문이 잡혀 있어요.
                  </Typography>
                ) : null}
              </Stack>
            </Stack>
          </Card>

          {/* 달력 대비 짧은 우측 영역에 준비물 안내 채우기 */}
          <Card variant="outlined">
            <List dense disablePadding>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}><BadgeOutlined fontSize="small" color="action" /></ListItemIcon>
                <ListItemText primary="신분증을 지참해 주세요" secondary="공인중개사가 방문자 본인 확인을 합니다" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}><SmartphoneOutlined fontSize="small" color="action" /></ListItemIcon>
                <ListItemText primary="예약 10분 전 문자로 안내드려요" secondary="변경·취소는 예약 내역에서 언제든 가능해요" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}><VpnKeyOutlined fontSize="small" color="action" /></ListItemIcon>
                <ListItemText primary="입주자가 있는 경우 늦지 않게 도착해 주세요" secondary="방문 시간은 통상 15분 내외예요" />
              </ListItem>
            </List>
          </Card>

          {done ? (
            <Alert
              severity="success"
              icon={<CheckCircleOutlined fontSize="inherit" />}
              action={
                <Button color="inherit" size="small" onClick={ => onNavigate?.("saved")}>
                  찜에서 보기
                </Button>
              }
            >
              {date?.toLocaleDateString("ko-KR", { month: "long", day: "numeric" })} {slot} 방문이
              잡혔습니다.
            </Alert>
          ) : (
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }}>
              <Button
                variant="contained"
                disabled={date === null || slot === null}
                onClick={ => {
                  setDone(true);
                  // 확정을 예약으로 처리, bookedIds 상태 동기화하고 중복 예약 막기
                  onBook?.(listing.id);
                }}
              >
                이 시간으로 예약
              </Button>
              {already ? (
                <Chip
                  size="small"
                  color="success"
                  variant="outlined"
                  icon={<CheckCircleOutlined />}
                  label="이 매물은 이미 방문을 잡아 두었어요"
                />
              ) : null}
              <Box sx={{ flex: 1 }} />
              <Button size="small" onClick={ => onNavigate?.("listing")}>
                매물 다시 보기
              </Button>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
