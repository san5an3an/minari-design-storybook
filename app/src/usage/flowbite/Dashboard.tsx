import * as React from "react";
import {
  Avatar, Badge, Navbar, NavbarBrand, Sidebar, SidebarCTA, SidebarItem, SidebarItemGroup, SidebarItems,
  Tabs, TabItem,
} from "flowbite-react";
import type { TabsRef } from "flowbite-react";
import { Activity, Bell, IdCard, Star, Users } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { CUSTOMERS, DEAL_ACTIVITY, REVIEWS, type CustomerItem } from "./data";
import { SCREENS } from "./screens";

export function FlowbiteUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  // 고객 목록의 단일 출처, CustomersScreen과 상세 화면이 배열 공유해 열람 가능
  const [customers, setCustomers] = React.useState<CustomerItem[]>(CUSTOMERS);
  const registerCustomer = (c: CustomerItem) => setCustomers((prev) => [c, ...prev]);
  const activeIndex = SCREENS.findIndex((s) => s.key === screenKey);
  const screen = SCREENS[activeIndex] ?? SCREENS[0];
  const Screen = screen.Screen;

  const NAV_COUNT: Partial<Record<string, number>> = {
    customers: customers.length,
    reviews: REVIEWS.length,
    activity: DEAL_ACTIVITY.length,
  };

  const tabsRef = React.useRef<TabsRef>(null);
  React.useEffect( => {
    tabsRef.current?.setActiveTab(activeIndex);
  }, [activeIndex]);

  const NAV_ICON: Record<string, typeof Users> = { customers: Users, detail: IdCard, reviews: Star, activity: Activity };

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
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              marginInlineEnd: 8,
              borderRadius: 4,
              background: "var(--color-primary-600)",
            }}
          />
          <span style={{ fontWeight: 600 }}>{system.name} CRM</span>
        </NavbarBrand>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="search"
            placeholder="고객 검색"
            aria-label="고객 검색"
            style={{
              width: "min(200px, 38vw)",
              borderRadius: "8px",
              border: "1px solid var(--color-gray-300)",
              padding: "6px 10px",
              fontSize: "14px",
            }}
          />
          {/* 헤더 3요소: 검색, 알림, 아바타 */}
          <button
            type="button"
            aria-label="알림 3건"
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
              3
            </span>
          </button>
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

      <div style={{ flex: 1, minWidth: 0, minHeight: 0, display: "flex", overflow: "hidden" }}>
        <Sidebar aria-label="영업 CRM 사이드바" style={{ width: "192px", flexShrink: 0 }}>
          <SidebarItems>
            {/* 그룹 헤딩 2개와 배지 카운트로 구성된 체크리스트. 영업과 고객 경험으로 구분 */}
            <span
              aria-hidden
              style={{ display: "block", padding: "0 12px", marginBottom: "6px", fontSize: "11px", fontWeight: 700, color: "var(--color-gray-400)", textTransform: "uppercase", letterSpacing: "0.04em" }}
            >
              영업
            </span>
            <SidebarItemGroup>
              {SCREENS.filter((s) => s.key !== "reviews").map((s) => (
                <SidebarItem
                  key={s.key}
                  as="button"
                  icon={NAV_ICON[s.key] ?? Users}
                  active={s.key === screenKey}
                  label={NAV_COUNT[s.key] !== undefined ? String(NAV_COUNT[s.key]) : undefined}
                  labelColor="gray"
                  onClick={ => setScreenKey(s.key)}
                  style={{ width: "100%", textAlign: "left", cursor: "pointer" }}
                >
                  {s.label}
                </SidebarItem>
              ))}
            </SidebarItemGroup>
            <div aria-hidden style={{ borderTop: "1px solid var(--color-gray-200)", margin: "10px 12px" }} />
            <span
              aria-hidden
              style={{ display: "block", padding: "0 12px", marginBottom: "6px", fontSize: "11px", fontWeight: 700, color: "var(--color-gray-400)", textTransform: "uppercase", letterSpacing: "0.04em" }}
            >
              고객 경험
            </span>
            <SidebarItemGroup>
              {SCREENS.filter((s) => s.key === "reviews").map((s) => (
                <SidebarItem
                  key={s.key}
                  as="button"
                  icon={NAV_ICON[s.key] ?? Users}
                  active={s.key === screenKey}
                  label={NAV_COUNT[s.key] !== undefined ? String(NAV_COUNT[s.key]) : undefined}
                  labelColor="gray"
                  onClick={ => setScreenKey(s.key)}
                  style={{ width: "100%", textAlign: "left", cursor: "pointer" }}
                >
                  {s.label}
                </SidebarItem>
              ))}
            </SidebarItemGroup>
          </SidebarItems>
          {/* color="warning" 사용. blue 없고 primary 키도 없어 대체값임 */}
          <SidebarCTA color="warning">
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Badge color="success" className="w-fit">신규</Badge>
              <span style={{ fontSize: "13px", fontWeight: 600 }}>Growth 플랜 체험</span>
              <span style={{ fontSize: "12px", color: "var(--color-gray-600)" }}>
                딜 자동 분류 기능을 14일 무료로 써 보세요.
              </span>
            </div>
          </SidebarCTA>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--color-gray-200)" }}>
            <Avatar rounded size="sm" placeholderInitials="하" />
            <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
              <span style={{ fontSize: "13px", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>하늘 매니저</span>
              <span style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>영업팀</span>
            </div>
          </div>
        </Sidebar>

        {/* 내부 스크롤 영역, 다른 네 베이스와 동일 원칙 */}
        <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
            <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>{screen.label}</h2>
            <p style={{ margin: 0, fontSize: "14px", color: "var(--color-gray-500)" }}>{screen.lede}</p>
          </div>
          <Screen
            onNavigate={setScreenKey}
            selectedId={selectedId}
            onSelect={setSelectedId}
            customers={customers}
            onRegisterCustomer={registerCustomer}
          />
        </div>
      </div>
    </div>
  );
}
