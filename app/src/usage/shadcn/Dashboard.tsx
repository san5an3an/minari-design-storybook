import * as React from "react";
import {
  BadgeCheck, Bell, ChevronsUpDown, CircleHelp, CirclePlus, CreditCard, Database,
  FileText, FileType, LayoutDashboard, ListTodo, LogIn, LogOut, Search, Settings,
  SlidersHorizontal, Sparkles,
} from "lucide-react";
import { Avatar } from "../../bases/shadcn/Avatar";
import { Button } from "../../bases/shadcn/Button";
import { Menu } from "../../bases/shadcn/Menu";
import { Select } from "../../bases/shadcn/Select";
import { Sidebar } from "../../bases/shadcn/Sidebar";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";
import { useIsWide } from "./useIsWide";

// 화면 이름에 대응하는 길잡이 아이콘, 접힌 폭에서도 선택에 사용
const SCREEN_ICON: Record<string, React.ReactNode> = {
  dashboard: <LayoutDashboard size={16} />,
  tasks: <ListTodo size={16} />,
  playground: <SlidersHorizontal size={16} />,
  authentication: <LogIn size={16} />,
};

const NAV_SCREENS = SCREENS.filter((s) => !s.fullBleed);

// 로그인 화면 경로 상수. 로그아웃 시 이 경로로 연결
const AUTH_KEY = SCREENS.find((s) => s.fullBleed)?.key ?? "authentication";

// 목업 사용자 정보 단일 관리. 따로 적으면 표시가 불일치하는 문제 있음
const USER = { name: "김하늘", email: "hn.kim@example.com", initial: "김" } as const;

// 아바타, 이름, 메일 그룹화해 사이드바 하단, 메뉴 상단, NavUser에 동일 사용
function UserBlock({ trailing }: { trailing?: React.ReactNode }) {
  return (
    <>
      <Avatar size="sm" fallback={USER.initial} />
      <span className="flex min-w-0 flex-1 flex-col text-start">
        <span className="truncate" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
          {USER.name}
        </span>
        <span
          className="truncate"
          style={{
            color: "var(--semantic-fg-neutral-subtle)",
            fontSize: "var(--semantic-text-caption)",
          }}
        >
          {USER.email}
        </span>
      </span>
      {trailing}
    </>
  );
}

// 메뉴 헤더 사용자 블록. heading 보통 한 라인이라 여백 여기서 조정
function MenuUser {
  return (
    <span className="flex items-center gap-2 px-1 py-1.5">
      <UserBlock />
    </span>
  );
}

function MenuLine({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2">
      {icon}
      {children}
    </span>
  );
}

const DECOR_GROUPS = [
  {
    label: "문서",
    items: [
      { label: "자료실", icon: <Database size={16} />, href: "#" },
      { label: "보고서", icon: <FileText size={16} />, href: "#" },
      { label: "문서 도우미", icon: <FileType size={16} />, href: "#" },
    ],
  },
  {
    items: [
      { label: "설정", icon: <Settings size={16} />, href: "#", muted: true },
      { label: "도움말", icon: <CircleHelp size={16} />, href: "#", muted: true },
      { label: "검색", icon: <Search size={16} />, href: "#", muted: true },
    ],
  },
];

const SIDEBAR_TOKEN_BRIDGE = {
  "--sidebar": "var(--component-sidebar-bg)",
  "--sidebar-foreground": "var(--component-sidebar-fg)",
  "--sidebar-border": "var(--component-sidebar-border)",
  "--sidebar-accent": "var(--component-sidebar-item-bg-hover)",
  "--sidebar-accent-foreground": "var(--component-sidebar-item-fg-active)",
  "--sidebar-primary": "var(--semantic-bg-brand-default)",
  "--sidebar-primary-foreground": "var(--semantic-fg-on-brand-default)",
  "--sidebar-ring": "var(--semantic-border-focus-default)",
  "--sidebar-width": "var(--component-sidebar-width)",
} as React.CSSProperties;

const SHELL = "ods-usage-shell";

const SHELL_CSS = `
.${SHELL} [data-slot="sidebar-gap"] { display: none; }
.${SHELL} [data-slot="sidebar"] {
  height: auto;
  align-self: stretch;
}
.${SHELL} [data-slot="sidebar-container"] {
  position: relative;
  height: 100%;
  border-inline-end: var(--semantic-border-width-default) solid var(--component-sidebar-border);
}
.${SHELL} [data-slot="sidebar-rail"] { z-index: 20; }
`;

export function ShadcnUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;
  const wide = useIsWide(768);

  const chromeless = screen.fullBleed === true;
  const showNav = wide && !chromeless;

  const body = (
    <>
      {chromeless ? null : (
      <header
        className="flex flex-wrap items-center gap-3 px-4 py-3"
        style={{
          borderBottom:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          background: "var(--semantic-bg-neutral-surface)",
        }}
      >
        {/* 공식 SidebarTrigger 그대로 사용. 버튼 교체 시 폭 트랜지션 사라짐 문제 있음 */}
        {showNav ? <Sidebar.Trigger /> : null}

        <div className="flex min-w-0 flex-col gap-0.5">
          <h3
            style={{
              color: "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-body)",
              lineHeight: "var(--semantic-line-height-tight)",
            }}
          >
            {screen.label}
          </h3>
          {/* 보고 있는 대상과 출처 함께 표시. 감추면 원본과 판단 구분이 안 되는 문제가 있음 */}
          {/* subtlest 대신 subtle 사용. caption(11px) 최소라 약함 중첩 문제임 */}
          <code
            style={{
              color: "var(--semantic-fg-neutral-subtle)",
              fontSize: "var(--semantic-text-caption)",
            }}
          >
            shadcn-ui/ui · {screen.source}
          </code>
        </div>

        <div className="ms-auto flex flex-wrap items-center gap-2">
          {/* 사이드바 없는 좁은 화면에서 선택기를 이 위치에 표시 */}
          {!wide ? (
            <Select
              aria-label="예제 고르기"
              value={screenKey}
              onValueChange={setScreenKey}
              items={Object.fromEntries(NAV_SCREENS.map((s) => [s.key, s.label]))}
            />
          ) : null}
          <Button variant="solid" tone="brand">
            <CirclePlus size={14} aria-hidden />
            빠른 만들기
          </Button>
        </div>
      </header>
      )}

      {/* 로그인 화면 fullBleed 렌더링. 여백 주면 구분선이 뜬 것처럼 보임 */}
      <div className={screen.fullBleed ? undefined : "p-4 sm:p-5"}>
        {/* 화면 간 이동 경로 제공. 로그인 화면이 이걸로 대시보드로 복귀하기 */}
        <Screen onNavigate={setScreenKey} />
      </div>
    </>
  );

  const frame = "overflow-hidden";
  const frameStyle: React.CSSProperties = {
    background: "var(--semantic-bg-neutral-surface)",
    border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
    borderRadius: "var(--semantic-radius-container)",
    boxShadow: "var(--semantic-shadow-raised)",
  };

  if (!showNav) {
    return (
      <div className={frame} style={frameStyle}>
        {body}
      </div>
    );
  }

  return (
    <div className={`${frame} ${SHELL}`} style={{ ...frameStyle, ...SIDEBAR_TOKEN_BRIDGE }}>
      {/* 규칙은 .ods-usage-shell 안에서만 적용. 밖 사이드바는 앱 것이라 수정 금지 */}
      <style>{SHELL_CSS}</style>
      <Sidebar
        className="min-h-0"
        // icon이어야 폭 트랜지션 동작. fixed는 SHELL_CSS로 액자 안 뚫음
        collapsible="icon"
        // 트리거 위치는 상단바에서 직접 지정, 어댑터가 앞에 그리면 제목 위에 표시
        showTrigger={false}
        groups={[
          {
            items: NAV_SCREENS.map((s) => ({
              label: s.label,
              icon: SCREEN_ICON[s.key],
              active: s.key === screenKey,
              // href 함께 지정 금지. 주면 <a>로 그려져 탭, 가운데 클릭 동작을 예측할 수 없음
              onSelect:  => setScreenKey(s.key),
            })),
          },
          ...DECOR_GROUPS,
        ]}
        header={
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size="lg">
                {/* size-8 지정. 접히면 32px+p-0, overflow-hidden이 나머지 제거 */}
                <span
                  aria-hidden
                  className="flex aspect-square size-8 shrink-0 items-center justify-center"
                  style={{
                    background: "var(--semantic-bg-brand-default)",
                    borderRadius: "var(--semantic-radius-control)",
                  }}
                />
                <span className="flex min-w-0 flex-1 flex-col text-start">
                  {/* 보고 있는 테마를 목업 내부에서 다시 표시 */}
                  <span className="truncate" style={{ fontSize: "var(--semantic-text-body)" }}>
                    {system.name}
                  </span>
                  <span
                    className="truncate"
                    style={{
                      color: "var(--semantic-fg-neutral-subtle)",
                      fontSize: "var(--semantic-text-caption)",
                    }}
                  >
                    {system.baseTitle}
                  </span>
                </span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        }
        footer={
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Menu
                side="right"
                align="end"
                trigger={
                  <Sidebar.MenuButton size="lg">
                    <UserBlock trailing={<ChevronsUpDown size={14} aria-hidden />} />
                  </Sidebar.MenuButton>
                }
                minWidth="14rem"
                items={[
                  { heading: <MenuUser /> },
                  { separator: true },
                  { label: <MenuLine icon={<Sparkles size={16} />}>프로로 올리기</MenuLine> },
                  { separator: true },
                  { label: <MenuLine icon={<BadgeCheck size={16} />}>계정</MenuLine> },
                  { label: <MenuLine icon={<CreditCard size={16} />}>결제</MenuLine> },
                  { label: <MenuLine icon={<Bell size={16} />}>알림</MenuLine> },
                  { separator: true },
                  {
                    label: <MenuLine icon={<LogOut size={16} />}>나가기</MenuLine>,
                    onSelect:  => setScreenKey(AUTH_KEY),
                  },
                ]}
              />
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        }
      >
        {body}
      </Sidebar>
    </div>
  );
}
