import * as React from "react";
import { Bell, BookOpen, Search } from "lucide-react";
import { Command } from "../../bases/shadcn/Command";
import { Popover } from "../../bases/shadcn/Popover";
import { Sheet } from "../../bases/shadcn/Sheet";
import type { UsageDashboardProps } from "../registry";
import { ARTICLES, COLLECTIONS } from "./data";
import { SCREENS } from "./screens";

const SHELL_HEIGHT = "max(20rem, calc(100dvh - 9rem))";

const NAV_SCREENS = SCREENS.filter((s) => s.key !== "reader");

export function ShadcnUsage2({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [itemId, setItemId] = React.useState<string>("");
  const [searchOpen, setSearchOpen] = React.useState(false);
  const frameRef = React.useRef<HTMLDivElement>(null);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const onOpen = (nextKey: string, nextItemId: string) => {
    setScreenKey(nextKey);
    setItemId(nextItemId);
  };

  return (
    <div
      ref={frameRef}
      className="flex flex-col overflow-hidden"
      style={{
        height: SHELL_HEIGHT,
        minHeight: 0,
        background: "var(--semantic-bg-neutral-surface)",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
        // 가상 브라우저: contain layout이 포털 fixed 자손 위치 기준임
        contain: "layout",
        position: "relative",
      }}
    >
      <header
        className="flex shrink-0 flex-wrap items-center gap-4 px-4 py-3 sticky top-0 z-10"
        style={{
          borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          background: "var(--semantic-bg-neutral-surface)",
        }}
      >
        <span className="flex shrink-0 items-center gap-2">
          <span
            aria-hidden
            className="flex size-7 items-center justify-center"
            style={{
              background: "var(--semantic-bg-brand-default)",
              color: "var(--semantic-fg-on-brand-default)",
              borderRadius: "var(--semantic-radius-control)",
            }}
          >
            <BookOpen size={14} />
          </span>
          <span style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body)" }}>
            리드미
          </span>
        </span>

        <nav className="flex min-w-0 items-center gap-1 overflow-x-auto">
          {NAV_SCREENS.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={ => onOpen(s.key, "")}
              className="px-3 py-1.5 transition-colors"
              style={{
                borderRadius: "var(--semantic-radius-control)",
                fontSize: "var(--semantic-text-body-sm)",
                color: s.key === screenKey || (screenKey === "reader" && s.key === "list")
                  ? "var(--semantic-fg-brand-default)"
                  : "var(--semantic-fg-neutral-subtle)",
                background: s.key === screenKey || (screenKey === "reader" && s.key === "list")
                  ? "var(--semantic-bg-brand-subtle)"
                  : "transparent",
              }}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <Sheet
          side="top"
          open={searchOpen}
          onOpenChange={setSearchOpen}
          trigger={
            <button
              type="button"
              className="ms-auto flex items-center gap-2 px-3 py-1.5"
              style={{
                color: "var(--semantic-fg-neutral-subtle)",
                fontSize: "var(--semantic-text-body-sm)",
                border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                borderRadius: "var(--semantic-radius-control)",
              }}
            >
              <Search size={14} aria-hidden />
              글 찾기
            </button>
          }
          title="글 찾기"
          description="글이나 컬렉션 이름으로 찾아보세요."
          container={frameRef.current}
        >
          <Command
            placeholder="무엇을 찾을까요?"
            groups={[
              { heading: "글", items: ARTICLES.map((a) => ({ label: a.title, hint: `${a.minutes}분` })) },
              { heading: "컬렉션", items: COLLECTIONS.map((c) => ({ label: c.label })) },
            ]}
          />
        </Sheet>

        {/* 알림 목록 구성, 실제 ARTICLES 데이터 사용 */}
        <Popover
          trigger={
            <button
              type="button"
              className="relative flex size-8 shrink-0 items-center justify-center"
              style={{
                color: "var(--semantic-fg-neutral-subtle)",
                border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                borderRadius: "var(--semantic-radius-control)",
              }}
              aria-label="알림"
            >
              <Bell size={14} aria-hidden />
              <span
                className="absolute -right-1 -top-1 flex size-4 items-center justify-center"
                style={{
                  background: "var(--semantic-bg-danger-default)",
                  color: "var(--semantic-fg-on-danger-default)",
                  borderRadius: "var(--semantic-radius-pill)",
                  fontSize: "0.5625rem",
                }}
              >
                {ARTICLES.length > 9 ? "9+" : ARTICLES.length}
              </span>
            </button>
          }
          title="최근 저장됨"
          side="bottom"
          align="end"
        >
          <div className="flex w-64 flex-col gap-2">
            {ARTICLES.slice(0, 3).map((a) => (
              <div key={a.id} className="flex flex-col gap-0.5">
                <span className="truncate" style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}>
                  {a.title}
                </span>
                <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
                  {a.source} · {a.savedAt}
                </span>
              </div>
            ))}
          </div>
        </Popover>

        {/* 독자 프로필 사진을 네브바에도 표시. 화면 셋이 공유하는 앱 셸이라 반복해서 그릴 필요 없음 */}
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=80&q=60"
          alt=""
          aria-hidden
          className="size-7 shrink-0 object-cover"
          style={{
            borderRadius: "var(--semantic-radius-pill)",
            border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        />
      </header>

      <div className="flex-1 overflow-y-auto p-4 sm:p-5">
        <div className="mb-4 flex flex-col gap-1">
          <h3 style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body)" }}>
            {screen.label}
          </h3>
          <code style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
            {system.name} · {screen.lede}
          </code>
        </div>
        <Screen itemId={itemId} onOpen={onOpen} />
      </div>
    </div>
  );
}
