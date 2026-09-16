"use client";

import * as React from "react";
import { herouiAdapter } from "../../preview/herouiRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function HeroUiUsage3({ system, active }: UsageDashboardProps) {
  React.useEffect( => herouiAdapter.mountTheme?.(system, active, document), [system, active]);

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <herouiAdapter.Provider system={system} mode={active}>
      <div
        className="flex overflow-hidden"
        style={{
          background: "var(--semantic-bg-neutral-surface)",
          border:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
          height: "max(20rem, calc(100dvh - 9rem))",
        }}
      >
        <nav
          className="flex w-36 shrink-0 flex-col gap-0.5 p-2"
          aria-label="화면 고르기"
          style={{
            borderInlineEnd:
              "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          <div className="flex items-center gap-2 px-2 py-2">
            <span
              aria-hidden
              className="inline-block size-4 rounded"
              style={{ background: "var(--semantic-bg-brand-default)" }}
            />
            <span className="text-sm font-semibold">모임</span>
          </div>
          {SCREENS.map((s) => {
            const isActive = s.key === screenKey;
            return (
              <button
                key={s.key}
                type="button"
                onClick={ => setScreenKey(s.key)}
                className="rounded-md px-3 py-2 text-left text-sm"
                style={{
                  background: isActive ? "var(--semantic-bg-brand-subtle)" : "transparent",
                  color: isActive ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-default)",
                  fontWeight: isActive ? 600 : 400,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {s.label}
              </button>
            );
          })}
        </nav>

        <div className="flex min-w-0 flex-1 flex-col">
          <div
            className="flex shrink-0 items-center gap-3 px-4 py-3"
            style={{
              borderBottom:
                "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
            }}
          >
            <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>{screen.label}</span>
            <span
              className="ms-auto"
              style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.75rem" }}
            >
              {system.baseTitle}
            </span>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <p className="pb-3 text-sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
              {screen.lede}
            </p>
            <Screen />
          </div>
        </div>
      </div>
    </herouiAdapter.Provider>
  );
}
