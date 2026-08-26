import * as React from "react";
import {
  BadgeCheck, Bell, BookOpen, Bot, ChevronsUpDown, CreditCard, Folder, Forward, Frame,
  Layers, LogOut, Map, MoreHorizontal, PieChart, Plus, Settings2, Sparkles,
  SquareTerminal, Trash2,
} from "lucide-react";
import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ComponentType } from "react";
import type { MenuProps, SidebarImpl } from "../../systems/props";
import type { PageProps } from "./types";

// 하위 항목 있으면 확장 가능 상태로 전환
const PLATFORM = [
  {
    label: "놀이터", icon: <SquareTerminal />, active: true,
    items: [{ label: "기록" }, { label: "즐겨찾기" }, { label: "설정" }],
  },
  { label: "모델", icon: <Bot />, items: [{ label: "제네시스" }, { label: "익스플로러" }] },
  { label: "문서", icon: <BookOpen />, items: [{ label: "소개" }, { label: "시작하기" }] },
  { label: "설정", icon: <Settings2 />, items: [{ label: "일반" }, { label: "팀" }] },
];

// 줄마다 붙는 동작, 마지막 동작은 구분선으로 분리 처리
const PROJECT_ACTIONS = [
  { label: <><Folder />프로젝트 열기</> },
  { label: <><Forward />공유하기</> },
  { separator: true },
  { label: <><Trash2 />지우기</>, danger: true },
];

// 목록, 하위 항목 없이 바로 이동하는 유형
const PROJECTS = [
  {
    label: "디자인 엔지니어링", icon: <Frame />,
    action: <MoreHorizontal />, actionItems: PROJECT_ACTIONS, actionOnHover: true,
  },
  {
    label: "영업·마케팅", icon: <PieChart />,
    action: <MoreHorizontal />, actionItems: PROJECT_ACTIONS, actionOnHover: true,
  },
  {
    label: "여행", icon: <Map />, badge: "3",
    action: <MoreHorizontal />, actionItems: PROJECT_ACTIONS, actionOnHover: true,
  },
  // 이동이 아닌 목록 열기용 항목이라 흐리게 처리
  { label: "더 보기", icon: <MoreHorizontal />, muted: true },
];

function frame(height: string): React.CSSProperties {
  return {
    position: "relative",
    height, width: "100%", overflow: "hidden",
    border: "0.0625rem solid var(--semantic-border-neutral-subtle)",
    borderRadius: "var(--semantic-radius-container)",
    transform: "translateZ(0)",
    isolation: "isolate",
  };
}

// 머리, 그룹 둘, 바닥이 모두 들어가는 높이. 잘리면 내용을 알 수 없음
const FULL = frame("34rem");
// 단일 그룹. 빈 공간 없이 채우기
const ONE = frame("19rem");

export function Page({ system }: PageProps) {
  const Sidebar = compound<SidebarImpl>(system, "sidebar");
  // 컴포넌트 없으면 드롭다운 생략, 버튼만 렌더링
  const Menu = system.impl.menu as ComponentType<MenuProps> | undefined;
  const Avatar = system.impl.avatar as ComponentType<
    { fallback?: React.ReactNode; alt?: string; src?: string }
  > | undefined;
  const [open, setOpen] = React.useState(true);

  // 헤더. 현재 위치 표시, team-switcher와 동일 구조
  const brandButton = (
    // team-switcher 트리거 재사용. 열림 상태 표시
    <Sidebar.MenuButton
      size="lg"
      className="data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground"
    >
          <div
            className="flex aspect-square size-8 items-center justify-center rounded-lg"
            style={{
              background: "var(--semantic-bg-brand-default)",
              color: "var(--semantic-fg-on-brand-default)",
            }}
          >
            <Layers className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">이 제품</span>
            <span className="truncate text-xs">기업용</span>
          </div>
      <ChevronsUpDown className="ml-auto" />
    </Sidebar.MenuButton>
  );

  // team-switcher 항목. 테두리 있는 타일 안에 표시
  const tile = (icon: React.ReactNode, plain = false) => (
    <span
      className={`flex size-6 items-center justify-center rounded-md border${
        plain ? " bg-transparent" : ""
      }`}
    >
      {icon}
    </span>
  );

  const header = (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        {Menu ? (
          <Menu
            // 화면 밖 벗어남 방지용 위치값 align="start" side="right" 고정
            side="right"
            align="start"
            minWidth="14rem"
            trigger={brandButton}
            items={[
              { heading: "팀" },
              { label: <>{tile(<Layers className="size-3.5" />)}제품명</>, hint: "⌘1" },
              { label: <>{tile(<Bot className="size-3.5" />)}다른 제품</>, hint: "⌘2" },
              { separator: true },
              {
                label: (
                  <>
                    {tile(<Plus className="size-4" />, true)}
                    <span style={{ color: "var(--component-menu-label-fg)" }}>팀 만들기</span>
                  </>
                ),
              },
            ]}
          />
        ) : (
          brandButton
        )}
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  );

  // 아바타 표시, Avatar 컴포넌트 사용, 직접 그린 원 제외
  const face = Avatar ? (
    <Avatar fallback="김" alt="김하늘" />
  ) : (
    <div
      className="flex aspect-square size-8 items-center justify-center rounded-full text-xs"
      style={{
        background: "var(--semantic-bg-neutral-subtle)",
        color: "var(--semantic-fg-neutral-default)",
      }}
    >
      김
    </div>
  );

  // 이름, 메일 2행 구성, 트리거와 메뉴에 동일 표시
  const identity = (
    <div className="grid flex-1 text-left text-sm leading-tight">
      <span
        className="truncate font-medium"
        style={{ color: "var(--component-menu-item-fg)" }}
      >
        김하늘
      </span>
      <span className="truncate text-xs">hn.kim@example.com</span>
    </div>
  );

  const userButton = (
    // nav-user 트리거 재사용. 열린 상태 표시 유지
    <Sidebar.MenuButton size="lg" className="aria-expanded:bg-muted">
      {face}
      {identity}
      <ChevronsUpDown className="ml-auto" />
    </Sidebar.MenuButton>
  );

  // 하단에 로그인 사용자 정보 표시
  const footer = (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        {Menu ? (
          <Menu
            // 화면 밖 벗어남 방지용 위치값 side="right" align="end" 고정
            side="right"
            align="end"
            minWidth="15rem"
            trigger={userButton}
            items={[
              {
                // 라벨은 텍스트 한 행이 아닌 아바타 포함 블록, 트리거와 동일 형태로 열람 주체 표시
                heading: (
                  <span className="flex items-center gap-2 text-left text-sm">
                    {face}
                    {identity}
                  </span>
                ),
              },
              { separator: true },
              { label: <><Sparkles />프로로 올리기</> },
              { separator: true },
              { label: <><BadgeCheck />계정</> },
              { label: <><CreditCard />결제</> },
              { label: <><Bell />알림</> },
              { separator: true },
              { label: <><LogOut />나가기</> },
            ]}
          />
        ) : (
          userButton
        )}
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  );

  const GROUPS = [
    { label: "종류", items: PLATFORM },
    // 접히면 전체 숨김. 아이콘만 남는 폭에서는 목록형 그룹을 표시할 수 없음
    { label: "프로젝트", action: <Plus />, items: PROJECTS, hideWhenCollapsed: true },
  ];

  return (
    <>
      <Master note="옆에 늘 붙어 있어요. 머리·바닥도 메뉴 버튼이라 목록과 왼쪽 끝선이 맞아요. 오른쪽 위 버튼으로 접어 보세요.">
        <div style={FULL} data-sidebar-frame>
          <Sidebar groups={GROUPS} header={header} footer={footer} open={open} onOpenChange={setOpen} />
        </div>
      </Master>

      <Kids
        axis="state"
        title="State"
        note={
          <>
            지금 <b>{open ? "펼쳐져" : "접혀"}</b> 있어요. 접히면 아이콘 한 벌만 남고 이름은
            툴팁으로 나와요. 아이콘이 스스로 뜻을 말한다고 믿지 않아요.
          </>
        }
      >
        <Kid label="펼침" hint="기본">
          <div style={FULL} data-sidebar-frame>
            <Sidebar groups={GROUPS} header={header} defaultOpen />
          </div>
        </Kid>
        <Kid label="접힘" hint="icon">
          <div style={FULL} data-sidebar-frame>
            <Sidebar groups={GROUPS} header={header} defaultOpen={false} />
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="collapsible"
        title="Variants"
        note={
          <>
            <b>none</b> 은 접힘이 아예 없는 위치예요. 그래서 여닫는 버튼도 그리지 않아요.
            눌러도 아무 일이 없는 버튼은 고장으로 읽히니까요.
          </>
        }
      >
        <Kid label="icon" hint="기본">
          <div style={FULL} data-sidebar-frame>
            <Sidebar groups={GROUPS} header={header} collapsible="icon" />
          </div>
        </Kid>
        <Kid label="offcanvas">
          <div style={FULL} data-sidebar-frame>
            <Sidebar groups={GROUPS} header={header} collapsible="offcanvas" />
          </div>
        </Kid>
        <Kid label="none" hint="버튼 없음">
          <div style={FULL} data-sidebar-frame>
            <Sidebar groups={GROUPS} header={header} collapsible="none" />
          </div>
        </Kid>
      </Kids>

      <Kids axis="parts" title="Parts" note="셀에 딸리는 것들이에요. 개수(badge), 줄 오른쪽 동작(action), 그룹 라벨 옆 동작(groupAction). 위치는 전부 그쪽이 잡아요.">
        <Kid label="badge + action">
          <div style={ONE} data-sidebar-frame>
            <Sidebar
              items={PROJECTS}
              groupLabel="프로젝트"
              groupAction={<Plus />}
              collapsible="none"
            />
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "볼일이 끝나면 닫힐 때", then: <><b>Sheet</b> 예요. 사이드바는 공간을 남겨요.</> },
  { when: "갈 곳이 적을 때", then: <><b>NavigationMenu</b> 로 가로 한 줄이면 돼요.</> },
  { when: "하위가 있을 때", then: <>누르는 영역이 아니라 <b>펴는 영역</b>이에요. 꺾쇠가 그 사실을 알려요.</> },
  { when: "collapsible=none", then: <>접힘이 없어요. 여닫는 버튼도 그리지 않아요.</> },
];
