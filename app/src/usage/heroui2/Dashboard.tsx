"use client";

import * as React from "react";
import { Avatar } from "@heroui/react";
import { herouiAdapter } from "../../preview/herouiRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function HeroUiUsage2({ system, active }: UsageDashboardProps) {
  React.useEffect( => herouiAdapter.mountTheme?.(system, active, document), [system, active]);

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <herouiAdapter.Provider system={system} mode={active}>
      <div
        className="flex flex-col overflow-hidden"
        style={{
          background: "var(--semantic-bg-neutral-surface)",
          border:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
          height: "max(20rem, calc(100dvh - 9rem))",
        }}
      >
        <div
          className="flex shrink-0 items-center gap-3 px-4 py-3"
          style={{
            borderBottom:
              "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          <span
            aria-hidden
            className="inline-block size-5 rounded"
            style={{ background: "var(--semantic-bg-brand-default)" }}
          />
          <span style={{ fontWeight: 600 }}>마켓</span>
          <span
            className="ms-auto"
            style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.75rem" }}
          >
            {system.baseTitle}
          </span>
          <Avatar className="size-7">
            <Avatar.Fallback className="text-xs">하</Avatar.Fallback>
          </Avatar>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-1 pb-3">
            <h2 style={{ fontSize: "1rem", fontWeight: 600 }}>{screen.label}</h2>
            <p style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.8125rem" }}>
              {screen.lede}
            </p>
          </div>
          <Screen />
        </div>

        {/* 하단 탭 바 적용 */}
        <nav
          className="flex shrink-0 items-stretch"
          aria-label="화면 고르기"
          style={{
            borderTop: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          {SCREENS.map((s) => {
            const active = s.key === screenKey;
            return (
              <button
                key={s.key}
                type="button"
                onClick={ => setScreenKey(s.key)}
                className="flex-1 py-2.5 text-sm"
                style={{
                  color: active
                    ? "var(--semantic-fg-brand-default)"
                    : "var(--semantic-fg-neutral-subtle)",
                  fontWeight: active ? 600 : 400,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {s.label}
              </button>
            );
          })}
        </nav>
      </div>
    </herouiAdapter.Provider>
  );
}
