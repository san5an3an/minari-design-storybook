import * as React from "react";
import { Avatar, Navbar, NavbarBrand, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, Tabs, TabItem } from "flowbite-react";
import type { TabsRef } from "flowbite-react";
import { Bell, History, IdCard, UserCog } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { LOGIN_HISTORY, USERS, type User } from "./data";
import { SCREENS } from "./screens";

export function FlowbiteUsage2({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  // 사용자 목록의 기준 위치
  const [users, setUsers] = React.useState<User[]>(USERS);
  const inviteUser = (u: User) => setUsers((prev) => [u, ...prev]);
  const activeIndex = SCREENS.findIndex((s) => s.key === screenKey);
  const screen = SCREENS[activeIndex] ?? SCREENS[0];
  const Screen = screen.Screen;

  // 사이드바 배지 카운트 계산. 드릴다운 대상이라 선택 카운트 없어 제외 대상임
  const NAV_COUNT: Partial<Record<string, number>> = {
    users: users.length,
    logins: LOGIN_HISTORY.length,
  };

  const tabsRef = React.useRef<TabsRef>(null);
  React.useEffect( => {
    tabsRef.current?.setActiveTab(activeIndex);
  }, [activeIndex]);

  const NAV_ICON: Record<string, typeof UserCog> = { users: UserCog, detail: IdCard, logins: History };

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
          {/* 헤더 3요소: 검색, 알림, 아바타 */}
          <button
            type="button"
            aria-label="알림 2건"
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
              2
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
        <Sidebar aria-label="관리자 콘솔 사이드바" style={{ width: "176px", flexShrink: 0 }}>
          <SidebarItems>
            {/* 그룹 헤딩 2개와 배지 카운트 체크리스트. 프로모 카드 없는 단순 구조 유지, 그룹핑 추가 */}
            <span
              aria-hidden
              style={{ display: "block", padding: "0 12px", marginBottom: "6px", fontSize: "11px", fontWeight: 700, color: "var(--color-gray-400)", textTransform: "uppercase", letterSpacing: "0.04em" }}
            >
              계정 관리
            </span>
            <SidebarItemGroup>
              {SCREENS.filter((s) => s.key !== "logins").map((s) => (
                <SidebarItem
                  key={s.key}
                  as="button"
                  icon={NAV_ICON[s.key] ?? UserCog}
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
              보안
            </span>
            <SidebarItemGroup>
              {SCREENS.filter((s) => s.key === "logins").map((s) => (
                <SidebarItem
                  key={s.key}
                  as="button"
                  icon={NAV_ICON[s.key] ?? UserCog}
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
        </Sidebar>

        <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
            <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>{screen.label}</h2>
            <p style={{ margin: 0, fontSize: "14px", color: "var(--color-gray-500)" }}>{screen.lede}</p>
          </div>
          <Screen
            onNavigate={setScreenKey}
            selectedId={selectedId}
            onSelect={setSelectedId}
            users={users}
            onInviteUser={inviteUser}
          />
        </div>
      </div>
    </div>
  );
}
