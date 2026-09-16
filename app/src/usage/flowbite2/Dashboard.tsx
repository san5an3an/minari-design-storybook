import * as React from "react";
import { Avatar, Navbar, NavbarBrand, Tabs, TabItem } from "flowbite-react";
import type { TabsRef } from "flowbite-react";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function FlowbiteUsage2({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
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
          <span style={{ fontWeight: 600 }}>{system.name} 관리자 콘솔</span>
        </NavbarBrand>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="search"
            placeholder="사용자 검색"
            aria-label="사용자 검색"
            style={{ width: "min(200px, 38vw)", borderRadius: "8px", border: "1px solid var(--color-gray-300)", padding: "6px 10px", fontSize: "14px" }}
          />
          <Avatar rounded size="sm" placeholderInitials="하" />
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
        <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
      </div>
    </div>
  );
}
