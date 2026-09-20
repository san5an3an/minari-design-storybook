import * as React from "react";
import Header from "@cloudscape-design/components/header";
import Icon from "@cloudscape-design/components/icon";
import Input from "@cloudscape-design/components/input";
import SideNavigation, { type SideNavigationProps } from "@cloudscape-design/components/side-navigation";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import type { UsageDashboardProps } from "../registry";
import { ALARMS } from "./screens/AlarmsScreen";
import { INSTANCES } from "./screens/InstancesScreen";
import { SCREENS } from "./screens";

const FONT_OVERRIDE_CSS = `
.cloudscape-usage-root {
  --font-family-base-c9u5cr: var(--base-font-family-sans, Pretendard, system-ui, sans-serif);
  --font-family-display-vybf2o: var(--base-font-family-sans, Pretendard, system-ui, sans-serif);
  --font-family-heading-f20kh9: var(--base-font-family-sans, Pretendard, system-ui, sans-serif);
}
`;

const REGIONS = [
  { id: "ap-northeast-2", text: "아시아 태평양(서울) · ap-northeast-2" },
  { id: "ap-northeast-1", text: "아시아 태평양(도쿄) · ap-northeast-1" },
  { id: "us-east-1", text: "미국 동부(버지니아 북부) · us-east-1" },
] as const;

const NAV_ICON: Record<string, React.ReactNode> = {
  overview: <Icon name="grid-view" />,
  instances: <Icon name="list-view" />,
  alarms: <Icon name="notification" />,
};

export function CloudscapeUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [region, setRegion] = React.useState<(typeof REGIONS)[number]>(REGIONS[0]);
  const [search, setSearch] = React.useState("");
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const runningCount = INSTANCES.filter((i) => i.status === "running").length;
  const alarmCount = ALARMS.filter((a) => a.state === "in-alarm").length;

  const navItems: SideNavigationProps["items"] = [
    {
      type: "section",
      text: "현황",
      defaultExpanded: true,
      items: [{ type: "link", text: "요약", href: "#overview", icon: NAV_ICON.overview }],
    },
    { type: "divider" },
    {
      type: "section",
      text: "리소스",
      defaultExpanded: true,
      items: [
        {
          type: "link",
          text: "인스턴스",
          href: "#instances",
          icon: NAV_ICON.instances,
          info: <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.6875rem" }}>{runningCount}대 실행 중</span>,
        },
        {
          type: "link",
          text: "알람",
          href: "#alarms",
          icon: NAV_ICON.alarms,
          info:
            alarmCount > 0 ? (
              <span style={{ color: "var(--semantic-fg-danger-default)", fontSize: "0.6875rem", fontWeight: 700 }}>{alarmCount}건 경보</span>
            ) : undefined,
        },
      ],
    },
  ];

  return (
    <div
      className="overflow-hidden cloudscape-usage-root"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "max(20rem, calc(100dvh - 9rem))",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
      }}
    >
      <style>{FONT_OVERRIDE_CSS}</style>
      <div style={{ flexShrink: 0 }}>
        <TopNavigation
          identity={{
            title: `${system.name} Console`,
            href: "#overview",
            onFollow: (e) => {
              e.preventDefault;
              setScreenKey("overview");
            },
          }}
          search={
            <Input
              type="search"
              value={search}
              onChange={({ detail }) => setSearch(detail.value)}
              placeholder="리소스·인스턴스 ID 검색"
              ariaLabel="리소스 검색"
            />
          }
          utilities={[
            {
              type: "menu-dropdown",
              text: region.id,
              iconName: "globe",
              title: "리전 전환",
              ariaLabel: "리전 선택",
              items: REGIONS.map((r) => ({ id: r.id, text: r.text })),
              onItemClick: (e) => {
                const next = REGIONS.find((r) => r.id === e.detail.id);
                if (next) setRegion(next);
              },
            },
            {
              type: "menu-dropdown",
              iconName: "notification",
              badge: alarmCount > 0,
              ariaLabel: `알림 ${alarmCount}건`,
              title: "알림",
              items:
                alarmCount > 0
                  ? ALARMS.filter((a) => a.state === "in-alarm").map((a) => ({ id: a.metric, text: a.name, description: a.threshold }))
                  : [{ id: "none", text: "새 알림이 없어요", disabled: true }],
              onItemFollow: (e) => {
                e.preventDefault;
                setScreenKey("alarms");
              },
            },
            {
              type: "menu-dropdown",
              text: "정하늘",
              description: `${system.name} 운영팀`,
              iconName: "user-profile",
              items: [
                { id: "profile", text: "프로필" },
                { id: "settings", text: "계정 설정" },
                { id: "signout", text: "로그아웃" },
              ],
            },
          ]}
          i18nStrings={{
            searchIconAriaLabel: "검색",
            searchDismissIconAriaLabel: "검색 닫기",
            overflowMenuTriggerText: "더 보기",
            overflowMenuTitleText: "메뉴",
            overflowMenuBackIconAriaLabel: "뒤로",
            overflowMenuDismissIconAriaLabel: "닫기",
          }}
        />
      </div>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        <div
          style={{
            width: "220px",
            flexShrink: 0,
            overflowY: "auto",
            borderRight: "1px solid var(--semantic-border-neutral-subtle)",
          }}
        >
          <SideNavigation
            activeHref={`#${screenKey}`}
            header={{ text: `${system.name} 리소스`, href: "#overview" }}
            items={navItems}
            onFollow={(e) => {
              e.preventDefault;
              setScreenKey(e.detail.href.replace("#", ""));
            }}
          />
        </div>

        <div style={{ flex: 1, minWidth: 0, overflowY: "auto", padding: "1.25rem" }}>
          <div style={{ marginBlockEnd: "1rem" }}>
            <Header variant="h2" description={screen.lede}>{screen.label}</Header>
          </div>
          <Screen />
        </div>
      </div>
    </div>
  );
}
