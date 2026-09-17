import * as React from "react";
import {
  Avatar, Body1, Button, Caption1, Card, CounterBadge, FluentProvider, Hamburger, NavDrawer,
  NavDrawerBody, NavDrawerFooter, NavItem, Persona, Popover, PopoverSurface, PopoverTrigger,
  SearchBox, Toolbar, ToolbarButton,
} from "@fluentui/react-components";
import type { Theme } from "@fluentui/react-components";
import { AlertRegular, BookQuestionMarkRegular, RocketRegular, TicketDiagonalRegular } from "@fluentui/react-icons";
import type { UsageDashboardProps } from "../registry";
import { TICKETS, type Ticket } from "./data";
import { SCREENS } from "./screens";

import { byMode as s01 } from "../../../../generated/01-cobalt/base/fluent/theme";
import { byMode as s02 } from "../../../../generated/02-graphite/base/fluent/theme";
import { byMode as s03 } from "../../../../generated/03-ember/base/fluent/theme";
import { byMode as s04 } from "../../../../generated/04-jade/base/fluent/theme";
import { byMode as s05 } from "../../../../generated/05-plum/base/fluent/theme";
import { byMode as s06 } from "../../../../generated/06-slate/base/fluent/theme";
import { byMode as s07 } from "../../../../generated/07-emerald/base/fluent/theme";
import { byMode as s08 } from "../../../../generated/08-indigo/base/fluent/theme";
import { byMode as s09 } from "../../../../generated/09-sand/base/fluent/theme";
import { byMode as s10 } from "../../../../generated/10-teal/base/fluent/theme";
import { byMode as s11 } from "../../../../generated/11-crimson/base/fluent/theme";
import { byMode as s12 } from "../../../../generated/12-moss/base/fluent/theme";
import { byMode as s13 } from "../../../../generated/13-azure/base/fluent/theme";
import { byMode as s14 } from "../../../../generated/14-violet/base/fluent/theme";
import { byMode as s15 } from "../../../../generated/15-rust/base/fluent/theme";
import { byMode as s16 } from "../../../../generated/16-mint/base/fluent/theme";
import { byMode as s17 } from "../../../../generated/17-navy/base/fluent/theme";
import { byMode as s18 } from "../../../../generated/18-saffron/base/fluent/theme";
import { byMode as s19 } from "../../../../generated/19-fog/base/fluent/theme";
import { byMode as s20 } from "../../../../generated/20-berry/base/fluent/theme";

const THEMES: Record<string, Record<string, Theme>> = {
  "01-cobalt": s01, "02-graphite": s02, "03-ember": s03, "04-jade": s04, "05-plum": s05,
  "06-slate": s06, "07-emerald": s07, "08-indigo": s08, "09-sand": s09, "10-teal": s10,
  "11-crimson": s11, "12-moss": s12, "13-azure": s13, "14-violet": s14, "15-rust": s15,
  "16-mint": s16, "17-navy": s17, "18-saffron": s18, "19-fog": s19, "20-berry": s20,
};

const SCREEN_ICON: Record<string, React.ReactElement> = {
  tickets: <TicketDiagonalRegular />,
  detail: <TicketDiagonalRegular />,
  kb: <BookQuestionMarkRegular />,
};

// 알림 종, 긴급 티켓 수와 열린 티켓 수로 뱃지 표시
function NotificationBell {
  const urgent = TICKETS.filter((t) => t.priority === "긴급" && t.status !== "해결됨");
  const count = urgent.length + TICKETS.filter((t) => t.status === "열림").length;
  return (
    <Popover positioning="below-end">
      <PopoverTrigger disableButtonEnhancement>
        <span style={{ position: "relative", display: "inline-flex" }}>
          <ToolbarButton aria-label={`알림 ${count}건`} icon={<AlertRegular />} />
          {count > 0 ? (
            <CounterBadge
              count={count}
              size="small"
              color="danger"
              style={{ position: "absolute", top: -2, right: -2, pointerEvents: "none" }}
            />
          ) : null}
        </span>
      </PopoverTrigger>
      <PopoverSurface style={{ minWidth: "220px" }}>
        <Body1 style={{ fontWeight: 600, marginBottom: "8px" }}>알림</Body1>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {urgent.map((t) => (
            <Caption1 key={t.id}>긴급 · {t.subject} ({t.requester})</Caption1>
          ))}
          {count === 0 ? <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>새 알림이 없어요.</Caption1> : null}
        </div>
      </PopoverSurface>
    </Popover>
  );
}

function useWide: boolean {
  const [wide, setWide] = React.useState(true);
  React.useEffect( => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange =  => setWide(mq.matches);
    onChange;
    mq.addEventListener("change", onChange);
    return  => mq.removeEventListener("change", onChange);
  }, []);
  return wide;
}

export function FluentUsage2({ system, active }: UsageDashboardProps) {
  const theme = THEMES[system.slug]?.[active];
  const wide = useWide;
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  // 티켓 목록의 단일 소스, 두 화면 모두 여기서 데이터 전달받기
  const [tickets, setTickets] = React.useState<Ticket[]>(TICKETS);
  const addTicket = (ticket: Ticket) => setTickets((prev) => [ticket, ...prev]);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  if (!theme) {
    return (
      <p className="doc-note" style={{ marginTop: 0 }}>
        <code>{system.slug}</code> · <code>{active}</code> 의 fluent theme 생성물이 없어요.
      </p>
    );
  }

  return (
    <FluentProvider theme={theme}>
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
        <Toolbar style={{ flexShrink: 0, gap: "8px", padding: "8px 12px" }}>
          {!wide ? <Hamburger onClick={ => setDrawerOpen((v) => !v)} aria-label="메뉴 열고 닫기" /> : null}
          <span aria-hidden style={{ display: "inline-block", width: 20, height: 20, borderRadius: "var(--semantic-radius-selection)", background: "var(--colorBrandBackground)" }} />
          <Body1 style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{system.name} 헬프데스크</Body1>
          <SearchBox placeholder="티켓 검색" aria-label="티켓 검색" style={{ marginInlineStart: "auto", minWidth: 0, width: "min(220px, 40vw)" }} />
          <span style={{ display: wide ? undefined : "none" }}>
            <NotificationBell />
          </span>
          <Avatar name="박서준" size={28} />
        </Toolbar>

        <div style={{ display: "flex", flex: 1, minHeight: 0, position: "relative" }}>
          <NavDrawer
            type={wide ? "inline" : "overlay"}
            open={wide || drawerOpen}
            onOpenChange={(_, data) => setDrawerOpen(data.open)}
            style={{ width: wide ? 200 : 240, flexShrink: 0, borderInlineEnd: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)" }}
          >
            <NavDrawerBody>
              {SCREENS.map((s) => (
                <NavItem
                  key={s.key}
                  value={s.key}
                  icon={SCREEN_ICON[s.key]}
                  onClick={ => {
                    setScreenKey(s.key);
                    if (!wide) setDrawerOpen(false);
                  }}
                  style={{ fontWeight: s.key === screenKey ? 600 : 400 }}
                >
                  {s.label}
                </NavItem>
              ))}
            </NavDrawerBody>
            {/* 사이드바 하단 프로모 카드와 유저 블록 */}
            <NavDrawerFooter style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "0 8px 12px" }}>
              <Card style={{ padding: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <RocketRegular fontSize={16} style={{ color: "var(--colorBrandBackground)" }} />
                  <Caption1 style={{ fontWeight: 600 }}>오늘의 SLA</Caption1>
                </div>
                <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "8px" }}>
                  긴급 티켓 {TICKETS.filter((t) => t.priority === "긴급" && t.status !== "해결됨").length}건이 응답을 기다려요.
                </Caption1>
                <Button size="small" appearance="primary" style={{ width: "100%" }} onClick={ => setScreenKey("tickets")}>티켓 보기</Button>
              </Card>
              <Persona
                name="박서준"
                secondaryText="IT 지원팀"
                avatar={{ color: "colorful" }}
                size="small"
              />
            </NavDrawerFooter>
          </NavDrawer>

          <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
              <Body1 as="h2" style={{ fontSize: "20px", fontWeight: 600 }}>{screen.label}</Body1>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{screen.lede}</Caption1>
            </div>
            <Screen
              onNavigate={setScreenKey}
              selectedId={selectedId}
              onSelect={setSelectedId}
              tickets={tickets}
              onCreateTicket={addTicket}
            />
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}
