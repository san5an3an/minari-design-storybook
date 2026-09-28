import * as React from "react";
import { BookOpen, CalendarClock, Library } from "lucide-react";
import { Badge } from "../../bases/standalone/Badge";
import { Breadcrumb } from "../../bases/standalone/Breadcrumb";
import { Divider } from "../../bases/standalone/Divider";
import { Pageheader } from "../../bases/standalone/Pageheader";
import { Toast } from "../../bases/standalone/Toast";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";
import { LOANS } from "./screens/LoansScreen";
import { RESERVATIONS } from "./screens/ReservationsScreen";

// 사이드바 셀에 아이콘, 짧은 이름 표시. SCREENS label 짧아 제목은 별도 표에서 가져오는 방식임
const NAV_ICON: Record<string, React.ReactNode> = {
  books: <Library size={16} />,
  loans: <BookOpen size={16} />,
  reservations: <CalendarClock size={16} />,
};
const HEADING: Record<string, string> = {
  books: "전체 장서",
  loans: "대출 현황",
  reservations: "예약 대기 목록",
};

// Unsplash CDN 이미지 직링크. 상업 이용 가능한 라이선스
const SIDEBAR_PROMO_IMAGE =
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=480&q=60";

function SidebarPromo {
  return (
    <div
      aria-hidden
      style={{
        marginTop: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: "0.25rem",
        overflow: "hidden",
        padding: "0.75rem",
        minHeight: "6.5rem",
        borderRadius: "var(--semantic-radius-container)",
        backgroundImage:
          `linear-gradient(180deg, color-mix(in oklch, var(--semantic-bg-brand-default) 15%, transparent) 0%, ` +
          `color-mix(in oklch, var(--semantic-bg-brand-default) 80%, black) 100%), url("${SIDEBAR_PROMO_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "var(--semantic-text-body-sm)", lineHeight: "1.3" }}>
        연체 없이 반납하면
        <br />
        포인트가 쌓여요.
      </span>
    </div>
  );
}

export function StandaloneUsage3({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const overdueCount = LOANS.filter((l) => l.status === "연체").length;
  const waitingCount = RESERVATIONS.length;

  return (
    <div
      style={{
        display: "flex",
        height: "max(20rem, calc(100dvh - 9rem))",
        overflow: "hidden",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
        // 가상 브라우저: contain layout 있어야 Toast.Region 위치 기준임
        contain: "layout",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "13.5rem",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          padding: "1rem 0.75rem",
          overflowY: "auto",
          background: "var(--component-sidebar-bg)",
          color: "var(--component-sidebar-fg)",
          borderInlineEnd: "var(--semantic-border-width-default) solid var(--component-sidebar-border)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0 0.5rem", marginBottom: "0.75rem" }}>
          <span
            aria-hidden
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: "2rem", height: "2rem", borderRadius: "var(--semantic-radius-control)",
              background: "var(--semantic-bg-brand-default)", color: "var(--semantic-fg-on-brand-default)",
              flexShrink: 0,
            }}
          >
            <Library size={16} />
          </span>
          <span style={{ fontWeight: 700, fontSize: "var(--semantic-text-body)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {system.name} 도서관
          </span>
        </div>

        <span
          style={{
            padding: "0 0.5rem", marginBottom: "0.125rem",
            color: "var(--component-sidebar-label-fg)",
            fontSize: "var(--component-sidebar-label-font-size)",
            letterSpacing: "var(--component-sidebar-label-letter-spacing)",
            textTransform: "uppercase",
          }}
        >
          메뉴
        </span>
        {SCREENS.map((s) => {
          const active = s.key === screenKey;
          const badgeCount = s.key === "loans" ? overdueCount : s.key === "reservations" ? waitingCount : 0;
          return (
            <button
              key={s.key}
              type="button"
              onClick={ => setScreenKey(s.key)}
              style={{
                display: "flex", alignItems: "center", gap: "0.625rem",
                padding: "var(--component-sidebar-item-padding-block) var(--component-sidebar-item-padding-inline)",
                borderRadius: "var(--semantic-radius-control)",
                border: "none", cursor: "pointer", textAlign: "left",
                fontSize: "var(--component-sidebar-item-font-size)",
                letterSpacing: "var(--component-sidebar-item-letter-spacing)",
                background: active ? "var(--component-sidebar-item-bg-active)" : "transparent",
                color: active ? "var(--component-sidebar-item-fg-active)" : "var(--component-sidebar-fg)",
              }}
            >
              {NAV_ICON[s.key]}
              <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.label}</span>
              {badgeCount > 0 && (
                <Badge tone={s.key === "loans" ? "danger" : "neutral"}>{badgeCount}</Badge>
              )}
            </button>
          );
        })}

        <Divider />
        <SidebarPromo />
      </div>

      <div style={{ flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ padding: "1rem 1.25rem 0", flexShrink: 0 }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <Breadcrumb items={[{ label: "도서관" }, { label: HEADING[screenKey] }]} />
          </div>
          <Pageheader title={HEADING[screenKey]} lede={screen.lede} />
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            padding: "0 1.25rem 1.25rem",
            containerType: "inline-size",
            containerName: "sa3",
          } as React.CSSProperties}
        >
          <Screen />
        </div>
      </div>
      <Toast.Region position="bottom-end" />
    </div>
  );
}
