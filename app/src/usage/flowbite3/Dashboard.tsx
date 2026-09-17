import * as React from "react";
import { Avatar, Navbar, NavbarBrand, Tabs, TabItem } from "flowbite-react";
import type { TabsRef } from "flowbite-react";
import { Bell } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { INVOICES, type Invoice } from "./data";
import { SCREENS } from "./screens";

export function FlowbiteUsage3({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  // 인보이스 목록 원본 데이터
  const [invoices, setInvoices] = React.useState<Invoice[]>(INVOICES);
  const issueInvoice = (inv: Invoice) => setInvoices((prev) => [inv, ...prev]);
  const activeIndex = SCREENS.findIndex((s) => s.key === screenKey);
  const screen = SCREENS[activeIndex] ?? SCREENS[0];
  const Screen = screen.Screen;

  const tabsRef = React.useRef<TabsRef>(null);
  React.useEffect( => {
    tabsRef.current?.setActiveTab(activeIndex);
  }, [activeIndex]);

  return (
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
      <Navbar fluid style={{ flexShrink: 0 }}>
        <NavbarBrand as="div" style={{ cursor: "default" }}>
          <span aria-hidden style={{ display: "inline-block", width: 20, height: 20, marginInlineEnd: 8, borderRadius: 4, background: "var(--color-primary-600)" }} />
          <span style={{ fontWeight: 600 }}>{system.name} 결제 센터</span>
        </NavbarBrand>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="search"
            placeholder="인보이스 검색"
            aria-label="인보이스 검색"
            style={{ width: "min(200px, 38vw)", borderRadius: "8px", border: "1px solid var(--color-gray-300)", padding: "6px 10px", fontSize: "14px" }}
          />
          {/* 헤더 3요소: 검색, 알림, 아바타 */}
          <button
            type="button"
            aria-label="알림 1건"
            style={{ position: "relative", display: "flex", color: "var(--color-gray-500)", background: "none", border: "none", cursor: "pointer" }}
          >
            <Bell size={18} />
            <span
              aria-hidden
              style={{
                position: "absolute", top: "-4px", right: "-4px", minWidth: "14px", height: "14px",
                borderRadius: "999px", background: "var(--color-red-600)", color: "white", fontSize: "9px",
                fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 3px",
              }}
            >
              1
            </span>
          </button>
          {/* 사이드바 없는 레이아웃의 상단 유저 블록, 아바타와 이름/역할 표시 */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingInlineStart: "6px", borderInlineStart: "1px solid var(--color-gray-200)" }}>
            <Avatar rounded size="sm" placeholderInitials="하" />
            <div className="hidden sm:flex sm:flex-col">
              <span style={{ fontSize: "12px", fontWeight: 600, lineHeight: 1.2 }}>하늘 매니저</span>
              <span style={{ fontSize: "11px", color: "var(--color-gray-500)", lineHeight: 1.2 }}>결제팀</span>
            </div>
          </div>
        </div>
      </Navbar>

      <div style={{ flexShrink: 0, paddingInline: "16px", paddingTop: "10px" }}>
        <Tabs ref={tabsRef} variant="pills" onActiveTabChange={(i) => setScreenKey(SCREENS[i]?.key ?? SCREENS[0].key)}>
          {SCREENS.map((s) => (
            <TabItem key={s.key} title={s.label} active={s.key === screenKey} />
          ))}
        </Tabs>
      </div>

      <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
          <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>{screen.label}</h2>
          <p style={{ margin: 0, fontSize: "14px", color: "var(--color-gray-500)" }}>{screen.lede}</p>
        </div>
        <Screen
          onNavigate={setScreenKey}
          selectedId={selectedId}
          onSelect={setSelectedId}
          invoices={invoices}
          onIssueInvoice={issueInvoice}
        />
      </div>
    </div>
  );
}
