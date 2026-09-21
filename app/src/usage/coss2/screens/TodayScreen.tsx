import * as React from "react";
import { ArrowRight, CalendarDays, Clock, Plus, Timer, Users } from "lucide-react";
import { Avatar, AvatarFallback } from "../../../bases/coss-ui/avatar";
import { Button } from "../../../bases/coss-ui/button";
import { Calendar } from "../../../bases/coss-ui/calendar";
import { Card } from "../../../bases/coss-ui/card";
import { Popover, PopoverPopup, PopoverTrigger } from "../../../bases/coss-ui/popover";
import { Progress } from "../../../bases/coss-ui/progress";
import { Separator } from "../../../bases/coss-ui/separator";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../../../bases/coss-ui/tooltip";
import {
  CURRENT_USER, DATES, HOUR_MARKS, ROOMS, ROOM_MAP, dateToIso, formatHour, hourToColumn, isKnownDate, isoToDate,
  type Booking, type BookingStatus,
} from "../data";
import { StatTile } from "../StatTile";
import { StatusBadge, type Tone } from "../StatusBadge";
import type { ScreenProps } from "../screens";

const BOOKING_TONE: Record<BookingStatus, Tone> = { 예정: "brand", 진행중: "success", 완료: "neutral", 취소: "danger" };

export function TodayScreen({ bookings, onOpenDetail, onStartNew, onNavigate }: ScreenProps) {
  const [selectedDate, setSelectedDate] = React.useState<string>(DATES[0].iso);
  const [dateOpen, setDateOpen] = React.useState(false);
  const dateInfo = DATES.find((d) => d.iso === selectedDate) ?? DATES[0];

  const dayBookings = bookings.filter((b) => b.date === selectedDate && b.status !== "취소");
  const inProgress = dayBookings.filter((b) => b.status === "진행중").length;
  const upcoming = dayBookings.filter((b) => b.status === "예정").length;
  const totalAttendees = dayBookings.reduce((sum, b) => sum + b.attendeeCount, 0);

  const bookedHours = dayBookings.reduce((sum, b) => sum + (Number(b.end.split(":")[0]) - Number(b.start.split(":")[0])), 0);
  const capacityHours = ROOMS.length * (HOUR_MARKS.length - 1);
  const utilizationPct = Math.round((bookedHours / capacityHours) * 100);

  const nextUp = dayBookings
    .filter((b) => b.status === "예정" || b.status === "진행중")
    .slice
    .sort((a, b) => a.start.localeCompare(b.start))
    .slice(0, 4);

  const columns = HOUR_MARKS.length - 1;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-0.5">
          <span style={{ fontSize: "var(--semantic-text-heading)", fontWeight: 600 }}>안녕하세요, {CURRENT_USER.name}님 👋</span>
          <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
            {dateInfo.label}({dateInfo.weekday}) 회의실 예약 현황이에요.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Popover open={dateOpen} onOpenChange={setDateOpen}>
            <PopoverTrigger
              className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-input px-3 text-sm hover:bg-accent"
              style={{ background: "var(--background)" }}
            >
              <CalendarDays size={14} aria-hidden />
              {dateInfo.label}
            </PopoverTrigger>
            <PopoverPopup align="end">
              <Calendar
                mode="single"
                selected={isoToDate(selectedDate)}
                onSelect={(day) => {
                  if (!day) return;
                  setSelectedDate(dateToIso(day));
                  setDateOpen(false);
                }}
                disabled={(day) => !isKnownDate(dateToIso(day))}
              />
            </PopoverPopup>
          </Popover>
          <Button size="sm" onClick={ => onStartNew}>
            <Plus size={14} aria-hidden />
            새 예약
          </Button>
        </div>
      </div>

      <div className="mr2-stats">
        <StatTile icon={CalendarDays} tone="brand" label="오늘 예약" value={`${dayBookings.length}건`} />
        <StatTile icon={Clock} tone="success" label="진행 중" value={`${inProgress}건`} />
        <StatTile icon={Timer} tone="warning" label="예정" value={`${upcoming}건`} />
        <StatTile icon={Users} tone="neutral" label="참석 인원" value={`${totalAttendees}명`} />
      </div>

      <Card className="overflow-hidden p-0">
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.5">
          <span className="font-semibold" style={{ fontSize: "var(--semantic-text-body)" }}>회의실별 시간표</span>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>이용률 {utilizationPct}%</span>
            <Progress value={utilizationPct} style={{ width: "5rem" }} />
            <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>빈 셀을 누르면 예약해요</span>
          </div>
        </div>
        <Separator />
        <div className="p-3" style={{ overflowX: "auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `9rem repeat(${columns}, minmax(3.75rem, 1fr))`,
              gridTemplateRows: `2rem repeat(${ROOMS.length}, 3.25rem)`,
              minWidth: `calc(9rem + ${columns} * 3.75rem)`,
            }}
          >
            <div style={{ gridColumn: 1, gridRow: 1 }} />
            {HOUR_MARKS.slice(0, -1).map((h, i) => (
              <div
                key={`h-${h}`}
                className="flex items-center justify-center text-muted-foreground"
                style={{ gridColumn: i + 2, gridRow: 1, fontSize: "var(--semantic-text-caption)" }}
              >
                {formatHour(h)}
              </div>
            ))}
            {ROOMS.map((room, rIdx) => (
              <React.Fragment key={room.id}>
                <div
                  className="flex flex-col justify-center gap-0 px-1.5"
                  style={{ gridColumn: 1, gridRow: rIdx + 2, borderTop: "1px solid var(--border)" }}
                >
                  <span className="truncate font-medium" style={{ fontSize: "var(--semantic-text-body-sm)" }}>{room.name}</span>
                  <span className="truncate text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>
                    {room.floor} · {room.capacity}인
                  </span>
                </div>
                {HOUR_MARKS.slice(0, -1).map((h) =>
                  // 점검 중인 방은 예약 불가. BookingScreen에 선택 불가 방이 미리 노출
                  room.status === "점검중" ? (
                    <div
                      key={`${room.id}-${h}`}
                      style={{
                        gridRow: rIdx + 2,
                        borderTop: "1px solid var(--border)",
                        borderInlineStart: "1px solid var(--border)",
                        background: "var(--muted)",
                      }}
                    />
                  ) : (
                    <button
                      key={`${room.id}-${h}`}
                      type="button"
                      aria-label={`${room.name} ${formatHour(h)}에 예약하기`}
                      onClick={ => onStartNew(room.id)}
                      className="h-full w-full cursor-pointer border-0 bg-transparent p-0 hover:bg-accent"
                      style={{ gridRow: rIdx + 2, borderTop: "1px solid var(--border)", borderInlineStart: "1px solid var(--border)" }}
                    />
                  ),
                )}
              </React.Fragment>
            ))}
            {dayBookings.map((b: Booking) => {
              const rIdx = ROOMS.findIndex((r) => r.id === b.roomId);
              if (rIdx < 0) return null;
              const tone = BOOKING_TONE[b.status];
              return (
                <Tooltip key={b.id}>
                  <TooltipTrigger
                    onClick={ => onOpenDetail(b.id)}
                    className="m-0.5 cursor-pointer truncate rounded-md border-0 px-1.5 text-start font-medium"
                    style={{
                      gridColumn: `${hourToColumn(b.start)} / ${hourToColumn(b.end)}`,
                      gridRow: rIdx + 2,
                      background: `var(--semantic-bg-${tone}-subtle)`,
                      color: `var(--semantic-fg-on-${tone}-subtle)`,
                      fontSize: "var(--semantic-text-caption)",
                    }}
                  >
                    {b.title}
                  </TooltipTrigger>
                  <TooltipPopup>{b.title} · {b.start}–{b.end} · {b.organizer}</TooltipPopup>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </Card>

      <Card className="p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-semibold" style={{ fontSize: "var(--semantic-text-body)" }}>다가오는 예약</span>
          <Button variant="ghost" size="sm" onClick={ => onNavigate("mine")}>
            전체 보기 <ArrowRight size={12} aria-hidden />
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          {nextUp.length === 0 ? (
            <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
              오늘 남은 예약이 더 없어요.
            </span>
          ) : (
            nextUp.map((b) => {
              const room = ROOM_MAP.get(b.roomId);
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={ => onOpenDetail(b.id)}
                  className="flex items-center gap-3 rounded-lg border border-input p-2 text-start hover:bg-accent"
                >
                  <Avatar>
                    <AvatarFallback>{b.organizer[0]}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium" style={{ fontSize: "var(--semantic-text-body-sm)" }}>{b.title}</div>
                    <div className="truncate text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>
                      {room?.name} · {b.start}–{b.end}
                    </div>
                  </div>
                  <StatusBadge tone={BOOKING_TONE[b.status]}>{b.status}</StatusBadge>
                </button>
              );
            })
          )}
        </div>
      </Card>
    </div>
  );
}
