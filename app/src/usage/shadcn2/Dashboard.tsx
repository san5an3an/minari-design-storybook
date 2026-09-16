import * as React from "react";
import { BookOpen, Search } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const SHELL_HEIGHT = "max(20rem, calc(100dvh - 9rem))";

const NAV_SCREENS = SCREENS.filter((s) => s.key !== "reader");

export function ShadcnUsage2({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [itemId, setItemId] = React.useState<string>("");
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const onOpen = (nextKey: string, nextItemId: string) => {
    setScreenKey(nextKey);
    setItemId(nextItemId);
  };

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{
        height: SHELL_HEIGHT,
        minHeight: 0,
        background: "var(--semantic-bg-neutral-surface)",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
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

        <nav className="flex items-center gap-1">
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

        <span
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
        </span>
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
