import * as React from "react";
import { CalendarClock, CalendarX2, CheckCircle2, InboxIcon, PlayCircle } from "lucide-react";
import { Badge } from "../../../bases/coss-ui/badge";
import { Button } from "../../../bases/coss-ui/button";
import { Card } from "../../../bases/coss-ui/card";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../../../bases/coss-ui/empty";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../../../bases/coss-ui/pagination";
import { Tabs, TabsList, TabsPanel, TabsTab } from "../../../bases/coss-ui/tabs";
import { CURRENT_USER, DATES, ROOM_MAP, type BookingStatus } from "../data";
import { StatTile } from "../StatTile";
import { StatusBadge, type Tone } from "../StatusBadge";
import type { ScreenProps } from "../screens";

const BOOKING_TONE: Record<BookingStatus, Tone> = { 예정: "brand", 진행중: "success", 완료: "neutral", 취소: "danger" };
const TABS: readonly BookingStatus[] = ["예정", "진행중", "완료", "취소"];
const PAGE_SIZE = 2;

export function MyBookingsScreen({ bookings, onOpenDetail, onStartNew }: ScreenProps) {
  const [status, setStatus] = React.useState<BookingStatus>("예정");
  const [page, setPage] = React.useState(1);

  const mine = bookings.filter((b) => b.organizer === CURRENT_USER.name);
  const byStatus = (s: BookingStatus) =>
    mine.filter((b) => b.status === s).slice.sort((a, b) => (a.date === b.date ? a.start.localeCompare(b.start) : a.date.localeCompare(b.date)));

  const list = byStatus(status);
  const pageCount = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const rows = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const changeTab = (s: BookingStatus) => {
    setStatus(s);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="font-semibold" style={{ fontSize: "var(--semantic-text-heading-sm)" }}>내 예약</span>
          <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
            {CURRENT_USER.name}님({CURRENT_USER.department})이 만든 예약이에요.
          </span>
        </div>
        <Button size="sm" onClick={ => onStartNew}>+ 새 예약</Button>
      </div>

      <div className="mr2-stats">
        <StatTile icon={CalendarClock} tone="brand" label="예정" value={`${byStatus("예정").length}건`} />
        <StatTile icon={PlayCircle} tone="success" label="진행중" value={`${byStatus("진행중").length}건`} />
        <StatTile icon={CheckCircle2} tone="neutral" label="완료" value={`${byStatus("완료").length}건`} />
        <StatTile icon={CalendarX2} tone="danger" label="취소" value={`${byStatus("취소").length}건`} />
      </div>

      <Tabs value={status} onValueChange={(v) => changeTab(v as BookingStatus)}>
        <TabsList>
          {TABS.map((t) => (
            <TabsTab key={t} value={t} className="gap-1.5">
              {t}
              <Badge variant="secondary" size="sm">{byStatus(t).length}</Badge>
            </TabsTab>
          ))}
        </TabsList>

        <TabsPanel value={status}>
          <div className="flex flex-col gap-2 pt-3">
            {rows.length === 0 ? (
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon"><InboxIcon /></EmptyMedia>
                  <EmptyTitle>{status} 예약이 없어요</EmptyTitle>
                  <EmptyDescription>
                    {status === "취소" ? "아직 취소한 예약이 없어요. 좋은 신호예요." : "새 예약을 만들면 여기서 볼 수 있어요."}
                  </EmptyDescription>
                </EmptyHeader>
                {status !== "취소" ? (
                  <EmptyContent>
                    <Button size="sm" onClick={ => onStartNew}>+ 새 예약 만들기</Button>
                  </EmptyContent>
                ) : null}
              </Empty>
            ) : (
              rows.map((b) => {
                const room = ROOM_MAP.get(b.roomId);
                const dateInfo = DATES.find((d) => d.iso === b.date);
                const tone = BOOKING_TONE[b.status];
                return (
                  <Card key={b.id} className="p-3">
                    <button type="button" onClick={ => onOpenDetail(b.id)} className="flex w-full items-center gap-3 text-start">
                      <span
                        aria-hidden
                        className="flex size-9 shrink-0 items-center justify-center rounded-md"
                        style={{ background: `var(--semantic-bg-${tone}-subtle)`, color: `var(--semantic-fg-${tone}-default)` }}
                      >
                        <CalendarClock size={16} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-medium" style={{ fontSize: "var(--semantic-text-body-sm)" }}>{b.title}</div>
                        <div className="truncate text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>
                          {room?.name} · {dateInfo?.label ?? b.date} {b.start}–{b.end} · 참석 {b.attendeeCount}명
                        </div>
                      </div>
                      <StatusBadge tone={tone}>{b.status}</StatusBadge>
                    </button>
                  </Card>
                );
              })
            )}
          </div>
        </TabsPanel>
      </Tabs>

      {list.length > PAGE_SIZE ? (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => { e.preventDefault; setPage((p) => Math.max(1, p - 1)); }}
                aria-disabled={page === 1}
                className={page === 1 ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <PaginationLink href="#" isActive={p === page} onClick={(e) => { e.preventDefault; setPage(p); }}>{p}</PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => { e.preventDefault; setPage((p) => Math.min(pageCount, p + 1)); }}
                aria-disabled={page === pageCount}
                className={page === pageCount ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ) : null}
    </div>
  );
}
