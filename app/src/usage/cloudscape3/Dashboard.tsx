import * as React from "react";
import Header from "@cloudscape-design/components/header";
import Icon from "@cloudscape-design/components/icon";
import Input from "@cloudscape-design/components/input";
import SideNavigation, { type SideNavigationProps } from "@cloudscape-design/components/side-navigation";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import type { UsageDashboardProps } from "../registry";
import { GROUPS } from "./screens/GroupsScreen";
import { ROLES } from "./screens/RolesScreen";
import { USERS } from "./screens/UsersScreen";
import { SCREENS } from "./screens";

const FONT_OVERRIDE_CSS = `
.cloudscape-usage3-root {
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
  users: <Icon name="user-profile" />,
  roles: <Icon name="key" />,
  groups: <Icon name="group" />,
};

export function CloudscapeUsage3({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [region, setRegion] = React.useState<(typeof REGIONS)[number]>(REGIONS[0]);
  const [search, setSearch] = React.useState("");
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const mfaOffCount = USERS.filter((u) => !u.mfa).length;
  const crossAccountCount = ROLES.filter((r) => r.category === "교차 계정").length;
  const groupTotal = GROUPS.reduce((s, g) => s + g.members, 0);

  const navItems: SideNavigationProps["items"] = [
    {
      type: "section",
      text: "자격 증명",
      defaultExpanded: true,
      items: [
        {
          type: "link",
          text: "사용자",
          href: "#users",
          icon: NAV_ICON.users,
          info:
            mfaOffCount > 0 ? (
              <span style={{ color: "var(--semantic-fg-warning-default)", fontSize: "0.6875rem", fontWeight: 700 }}>{mfaOffCount}명 MFA 미설정</span>
            ) : undefined,
        },
      ],
    },
    { type: "divider" },
    {
      type: "section",
      text: "액세스 관리",
      defaultExpanded: true,
      items: [
        {
          type: "link",
          text: "역할",
          href: "#roles",
          icon: NAV_ICON.roles,
          info: <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.6875rem" }}>{crossAccountCount}개 교차 계정</span>,
        },
        {
          type: "link",
          text: "그룹",
          href: "#groups",
          icon: NAV_ICON.groups,
          info: <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.6875rem" }}>{groupTotal}명</span>,
        },
      ],
    },
  ];

  return (
    <div
      className="overflow-hidden cloudscape-usage3-root"
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
            title: `${system.name} IAM`,
            href: "#users",
            onFollow: (e) => {
              e.preventDefault;
              setScreenKey("users");
            },
          }}
          search={
            <Input
              type="search"
              value={search}
              onChange={({ detail }) => setSearch(detail.value)}
              placeholder="사용자·역할·그룹 검색"
              ariaLabel="검색"
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
              badge: mfaOffCount > 0,
              ariaLabel: `알림 ${mfaOffCount}건`,
              title: "알림",
              items:
                mfaOffCount > 0
                  ? USERS.filter((u) => !u.mfa).map((u) => ({ id: u.name, text: u.name, description: "MFA 미설정" }))
                  : [{ id: "none", text: "새 알림이 없어요", disabled: true }],
              onItemFollow: (e) => {
                e.preventDefault;
                setScreenKey("users");
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
            header={{ text: `${system.name} 접근 관리`, href: "#users" }}
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
