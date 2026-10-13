"use client";
import * as React from "react";
import { ArrowLeft, Bell, Bookmark, BookMarked, BookOpen, Layers, Search } from "lucide-react";
import { Avatar } from "../../../bases/shadcn/Avatar";
import { Button } from "../../../bases/shadcn/Button";
import { Command } from "../../../bases/shadcn/Command";
import { Popover } from "../../../bases/shadcn/Popover";
import { Sheet } from "../../../bases/shadcn/Sheet";
import { Toggle } from "../../../bases/shadcn/Toggle";
import type { SystemDefinition } from "../../../systems/types";
import { MobileShell, TOUCH, type MobileTab } from "../../shadcn/mobile/MobileShell";
import { ARTICLES, COLLECTIONS } from "../data";
import { SCREENS } from "../screens";

// 아이콘 버튼 최소 크기 지정. 밀도 토큰이 작아도 터치 영역 44px을 확보하기 위함
const ICON_BUTTON = { minWidth: TOUCH, minHeight: TOUCH, padding: 0 } as const;

// 탭바에 표시할 화면 목록 정의. 읽기 화면은 목록 아래에서만 열리므로 제외함
const NAV_SCREENS = SCREENS.filter((s) => s.key !== "reader");

const TAB_ICON: Record<string, React.ReactNode> = {
  list: <BookMarked size={20} aria-hidden />,
  collections: <Layers size={20} aria-hidden />,
};

// 독자 프로필 사진 주소 정의. 데스크탑 Dashboard.tsx 네브바와 같은 사진 사용
const READER_PHOTO = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=80&q=60";

// Portal로 뜨는 메뉴, Select, Command 항목의 글자 크기 지정. 어댑터의 인라인 style보다 우선하도록 !important 사용함
const OVERLAY_CSS = `
[data-slot="dropdown-menu-item"], [data-slot="select-item"], [data-slot="command-item"] {
  font-size: var(--semantic-text-body-sm) !important;
}
[data-slot="command-input"] {
  font-size: var(--semantic-text-body) !important;
}
`;

interface Props {
  system: SystemDefinition;
  screenKey: string;
  itemId: string;
  onOpen: (screenKey: string, itemId: string) => void;
}

export function Shadcn2Mobile({ system, screenKey, itemId, onOpen }: Props) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  // 글마다 북마크 상태 관리. 기본값은 데스크탑 읽기 화면처럼 켜짐 상태임
  const [bookmarks, setBookmarks] = React.useState<Record<string, boolean>>({});

  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.MobileScreen ?? screen.Screen;
  const isReader = screen.key === "reader";
  const article = ARTICLES.find((a) => a.id === itemId) ?? ARTICLES[0];
  const bookmarked = bookmarks[article.id] ?? true;

  const tabs: MobileTab[] = NAV_SCREENS.map((s) => ({ key: s.key, label: s.label, icon: TAB_ICON[s.key] }));

  const leading = isReader ? (
    <Button variant="plain" aria-label="목록으로" style={ICON_BUTTON} onClick={() => onOpen("list", "")}>
      <ArrowLeft size={20} aria-hidden />
    </Button>
  ) : (
    <span
      aria-hidden
      className="flex size-8 items-center justify-center"
      style={{
        background: "var(--semantic-bg-brand-default)",
        color: "var(--semantic-fg-on-brand-default)",
        borderRadius: "var(--semantic-radius-control)",
      }}
    >
      <BookOpen size={16} />
    </span>
  );

  const trailing = isReader ? (
    <Toggle
      pressed={bookmarked}
      onPressedChange={(next) => setBookmarks((m) => ({ ...m, [article.id]: next }))}
      aria-label="북마크"
      className="min-h-11 min-w-11"
    >
      <Bookmark size={20} fill={bookmarked ? "currentColor" : "none"} aria-hidden />
    </Toggle>
  ) : (
    <>
      <Sheet
        side="bottom"
        open={searchOpen}
        onOpenChange={setSearchOpen}
        trigger={
          <Button variant="plain" aria-label="글 찾기" style={ICON_BUTTON}>
            <Search size={20} aria-hidden />
          </Button>
        }
        title="글 찾기"
        description="글이나 컬렉션 이름으로 찾아보세요."
        className="max-h-[80dvh] pb-[var(--ods-safe-bottom,0px)]"
      >
        <Command
          placeholder="무엇을 찾을까요?"
          groups={[
            { heading: "글", items: ARTICLES.map((a) => ({ label: a.title, hint: `${a.minutes}분` })) },
            { heading: "컬렉션", items: COLLECTIONS.map((c) => ({ label: c.label })) },
          ]}
        />
      </Sheet>

      {/* 알림 Popover 표시. 최근 저장된 글로 목록을 채움 */}
      <Popover
        trigger={
          <Button variant="plain" aria-label="알림" className="relative" style={ICON_BUTTON}>
            <Bell size={20} aria-hidden />
            <span
              aria-hidden
              className="absolute end-1 top-1 flex size-4 items-center justify-center"
              style={{
                background: "var(--semantic-bg-danger-default)",
                color: "var(--semantic-fg-on-danger-default)",
                borderRadius: "var(--semantic-radius-pill)",
                fontSize: "0.625rem",
              }}
            >
              {ARTICLES.length > 9 ? "9+" : ARTICLES.length}
            </span>
          </Button>
        }
        title="최근 저장됨"
        side="bottom"
        align="end"
      >
        <div className="flex w-64 max-w-full flex-col gap-(--semantic-space-sm)">
          {ARTICLES.slice(0, 3).map((a) => (
            <div key={a.id} className="flex min-w-0 flex-col gap-(--semantic-space-xs)">
              <span className="truncate" style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}>
                {a.title}
              </span>
              <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>
                {a.source} · {a.savedAt}
              </span>
            </div>
          ))}
        </div>
      </Popover>

      <Avatar size="sm" src={READER_PHOTO} alt="" fallback="나" />
    </>
  );

  return (
    <MobileShell
      title={isReader ? "읽기" : screen.label}
      subtitle={isReader ? article.source : `리드미 · ${system.name}`}
      leading={leading}
      trailing={trailing}
      tabs={tabs}
      /* 읽기 화면에서는 저장한 글 탭 강조 처리. 읽기는 목록의 하위 화면이기 때문임 */
      activeKey={isReader ? "list" : screenKey}
      /* 같은 탭에서 다른 글로 이동하면 스크롤을 맨 위로 초기화 */
      scrollKey={itemId}
      onSelect={(key) => onOpen(key, "")}
    >
      <style>{OVERLAY_CSS}</style>
      {/* 데스크탑 본문 칸과 같은 안쪽 여백 적용. break-keep으로 한글을 낱말 단위로 줄바꿈함 */}
      <div className="break-keep break-words p-(--semantic-space-md)">
        <Screen itemId={itemId} onOpen={onOpen} />
      </div>
    </MobileShell>
  );
}
