"use client";
import * as React from "react";
import {
  Bell, CalendarDays, CalendarPlus, ChevronDown, DoorOpen, LogOut, Plus, Search, Settings2, UserRound,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../../bases/coss-ui/avatar";
import { Badge } from "../../bases/coss-ui/badge";
import { Button } from "../../bases/coss-ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../bases/coss-ui/input-group";
import { Kbd } from "../../bases/coss-ui/kbd";
import { Menu, MenuGroupLabel, MenuItem, MenuPopup, MenuSeparator, MenuTrigger } from "../../bases/coss-ui/menu";
import { Popover, PopoverPopup, PopoverTitle, PopoverTrigger } from "../../bases/coss-ui/popover";
import { Tabs, TabsList, TabsTab } from "../../bases/coss-ui/tabs";
import { ToastProvider } from "../../bases/coss-ui/toast";
import { TooltipProvider } from "../../bases/coss-ui/tooltip";
import type { UsageDashboardProps } from "../registry";
import { CURRENT_USER, DATES, INITIAL_BOOKINGS, ROOMS, draftToBooking, type Booking, type NewBookingDraft } from "./data";
import { SCREENS, type BookingSelection } from "./screens";

const NAV_ICON: Record<string, React.ReactNode> = {
  today: <CalendarDays size={14} aria-hidden />,
  rooms: <DoorOpen size={14} aria-hidden />,
  booking: <CalendarPlus size={14} aria-hidden />,
  mine: <UserRound size={14} aria-hidden />,
};

const SHELL_CSS = `
.mr2-scroll { container-type: inline-size; container-name: mr2; }
.mr2-stats { display: grid; grid-template-columns: repeat(2, minmax(11rem, 1fr)); gap: 0.75rem; }
@container mr2 (min-width: 46rem) {
  .mr2-stats { grid-template-columns: repeat(4, minmax(11rem, 1fr)); }
}
// 상세 화면 본문과 레일 배치, 38rem 이상에서 가로 배치
.mr2-split { display: flex; flex-direction: column; gap: 1rem; }
.mr2-rail { display: flex; flex-direction: column; gap: 1rem; width: 100%; }
@container mr2 (min-width: 38rem) {
  .mr2-split { flex-direction: row; }
  .mr2-rail { width: 15rem; flex: 0 0 auto; }
}
`;

export function CossUsage2({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [bookings, setBookings] = React.useState<Booking[]>( => [...INITIAL_BOOKINGS]);
  const [selection, setSelection] = React.useState<BookingSelection | null>(null);
  const [searchValue, setSearchValue] = React.useState("");

  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const onNavigate = (key: string) => setScreenKey(key);
  const onOpenDetail = (bookingId: string) => {
    setSelection({ mode: "detail", bookingId });
    setScreenKey("booking");
  };
  const onStartNew = (roomId?: string) => {
    setSelection({ mode: "new", roomId });
    setScreenKey("booking");
  };
  const onCreateBooking = (draft: NewBookingDraft) => setBookings((prev) => [draftToBooking(draft), ...prev]);
  const onCancelBooking = (bookingId: string) =>
    setBookings((prev) => prev.map((b) => (b.id === bookingId ? { ...b, status: "취소" as const } : b)));
  const onUpdateBooking = (bookingId: string, patch: { title?: string; attendeeCount?: number; note?: string }) =>
    setBookings((prev) => prev.map((b) => (b.id === bookingId ? { ...b, ...patch } : b)));

  const maintenanceRooms = ROOMS.filter((r) => r.status === "점검중");
  const busyRooms = ROOMS.filter((r) => r.status === "사용중");
  const notices = [
    ...maintenanceRooms.map((r) => `${r.name} 회의실이 점검 중이에요.`),
    ...busyRooms.map((r) => `${r.name} 회의실이 지금 사용 중이에요.`),
  ];

  const todayCount = bookings.filter((b) => b.date === DATES[0].iso && b.status !== "취소").length;
  const mineUpcoming = bookings.filter((b) => b.organizer === CURRENT_USER.name && b.status === "예정").length;
  const navBadge: Partial<Record<string, number>> = { today: todayCount, mine: mineUpcoming };

  return (
    <TooltipProvider>
      <ToastProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "max(20rem, calc(100dvh - 9rem))",
            overflow: "hidden",
            border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
            borderRadius: "var(--semantic-radius-container)",
            boxShadow: "var(--semantic-shadow-raised)",
          }}
        >
          <style>{SHELL_CSS}</style>

          <div
            className="flex flex-wrap items-center justify-between gap-2"
            style={{ flexShrink: 0, padding: "0.625rem 1rem", borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)" }}
          >
            <div className="flex min-w-0 items-center gap-2" style={{ flexShrink: 0 }}>
              <span
                aria-hidden
                className="flex size-7 shrink-0 items-center justify-center rounded-md"
                style={{ background: "var(--semantic-bg-brand-default)", color: "var(--semantic-fg-on-brand-default)" }}
              >
                <DoorOpen size={15} />
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="truncate font-semibold" style={{ fontSize: "var(--semantic-text-body-sm)", lineHeight: "var(--semantic-line-height-tight)" }}>모임룸</span>
                <span className="truncate text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{system.name}</span>
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-2">
              <InputGroup style={{ width: "min(14rem, 100%)" }}>
                <InputGroupAddon><Search size={14} aria-hidden /></InputGroupAddon>
                <InputGroupInput
                  placeholder="회의실·예약 검색…"
                  aria-label="회의실·예약 검색"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") onNavigate("rooms"); }}
                />
                <InputGroupAddon align="inline-end"><Kbd>/</Kbd></InputGroupAddon>
              </InputGroup>

              <Popover>
                <PopoverTrigger
                  aria-label={`알림 ${notices.length}건`}
                  className="relative inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-input hover:bg-accent"
                  style={{ background: "var(--background)" }}
                >
                  <Bell size={15} aria-hidden />
                  {notices.length > 0 ? (
                    <span
                      aria-hidden
                      className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center px-1 tabular-nums"
                      style={{ background: "var(--semantic-bg-danger-default)", color: "var(--semantic-fg-on-danger-default)", borderRadius: "9999px", fontSize: "0.625rem" }}
                    >
                      {notices.length}
                    </span>
                  ) : null}
                </PopoverTrigger>
                <PopoverPopup align="end">
                  <PopoverTitle>알림</PopoverTitle>
                  <div className="flex flex-col gap-2" style={{ minWidth: "14rem" }}>
                    {notices.length === 0 ? (
                      <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>새 알림이 없어요.</span>
                    ) : (
                      notices.map((n, i) => <span key={i} style={{ fontSize: "var(--semantic-text-body-sm)" }}>{n}</span>)
                    )}
                  </div>
                </PopoverPopup>
              </Popover>

              <Button size="sm" onClick={ => onStartNew}>
                <Plus size={14} aria-hidden />
                새 예약
              </Button>

              <Menu>
                <MenuTrigger className="flex shrink-0 items-center gap-1.5 rounded-lg p-1 hover:bg-accent">
                  <Avatar className="size-7"><AvatarFallback>{CURRENT_USER.initial}</AvatarFallback></Avatar>
                  <ChevronDown size={14} aria-hidden className="text-muted-foreground" />
                </MenuTrigger>
                <MenuPopup align="end">
                  <MenuGroupLabel>{CURRENT_USER.name} · {CURRENT_USER.department}</MenuGroupLabel>
                  <MenuSeparator />
                  <MenuItem onClick={ => onNavigate("mine")}><UserRound size={14} aria-hidden />내 예약 보기</MenuItem>
                  <MenuItem><Settings2 size={14} aria-hidden />환경설정</MenuItem>
                  <MenuSeparator />
                  <MenuItem variant="destructive"><LogOut size={14} aria-hidden />로그아웃</MenuItem>
                </MenuPopup>
              </Menu>
            </div>
          </div>

          <div style={{ flexShrink: 0, padding: "0.5rem 1rem", borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)" }}>
            <Tabs value={screenKey} onValueChange={(v) => { if (v) setScreenKey(v as string); }}>
              <TabsList>
                {SCREENS.map((s) => (
                  <TabsTab key={s.key} value={s.key}>
                    {NAV_ICON[s.key]}
                    {s.label}
                    {navBadge[s.key] !== undefined ? <Badge variant="secondary" size="sm">{navBadge[s.key]}</Badge> : null}
                  </TabsTab>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="mr2-scroll" style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "1.25rem" }}>
            <Screen
              onNavigate={onNavigate}
              bookings={bookings}
              selection={selection}
              onOpenDetail={onOpenDetail}
              onStartNew={onStartNew}
              onCreateBooking={onCreateBooking}
              onCancelBooking={onCancelBooking}
              onUpdateBooking={onUpdateBooking}
            />
          </div>
        </div>
      </ToastProvider>
    </TooltipProvider>
  );
}
