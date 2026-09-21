"use client";

import * as React from "react";
import { Menu, MenuItem, Tag } from "@blueprintjs/core";
import { blueprintAdapter } from "../../preview/blueprintRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const BRAND_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=480&q=60";

export function BlueprintUsage3({ system, active }: UsageDashboardProps) {
  React.useEffect(
     => blueprintAdapter.mountTheme?.(system, active, document),
    [system, active],
  );

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <blueprintAdapter.Provider system={system} mode={active}>
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
        <div
          className="flex w-40 shrink-0 flex-col overflow-y-auto p-2"
          style={{
            borderInlineEnd:
              "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          {/* 사이드바 상단에 얇은 브랜드 이미지 카드 하나 배치 */}
          <div
            className="mb-2 flex flex-col justify-end"
            style={{
              blockSize: "5rem",
              borderRadius: "var(--semantic-radius-control)",
              backgroundImage:
                `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
                `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${BRAND_IMAGE}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span style={{ color: "var(--semantic-fg-on-brand-default)", fontWeight: 600, fontSize: "0.8125rem", padding: "0.375rem 0.5rem" }}>
              이슈 트래커
            </span>
          </div>
          <Menu>
            {SCREENS.map((s) => (
              <MenuItem
                key={s.key}
                text={s.label}
                active={s.key === screenKey}
                onClick={ => setScreenKey(s.key)}
              />
            ))}
          </Menu>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div
            className="flex shrink-0 items-center gap-3 px-4 py-3"
            style={{
              borderBottom:
                "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
            }}
          >
            <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>{screen.label}</span>
            <Tag minimal className="ms-auto">{system.baseTitle}</Tag>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <p className="pb-3" style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.8125rem" }}>
              {screen.lede}
            </p>
            <Screen />
          </div>
        </div>
      </div>
    </blueprintAdapter.Provider>
  );
}
