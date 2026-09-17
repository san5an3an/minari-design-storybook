"use client";

import * as React from "react";
import { herouiAdapter } from "../../preview/herouiRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=640&q=70";

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
            className="relative flex shrink-0 flex-col justify-end p-4"
            style={{
              minBlockSize: "7.5rem",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage:
                "linear-gradient(180deg, transparent 0%, transparent 40%, " +
                "color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), " +
                `url("${HERO_IMAGE}")`,
              borderBottom:
                "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
            }}
          >
            <span className="text-xs text-white/85">{system.baseTitle}</span>
            <span className="text-lg font-semibold text-white">안녕하세요, 김모임님</span>
            <span className="text-sm text-white/85">이번 주 모임 2건이 기다리고 있어요</span>
          </div>
          <div className="flex shrink-0 items-center gap-3 px-4 py-2">
            <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>{screen.label}</span>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-4 pt-0">
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
