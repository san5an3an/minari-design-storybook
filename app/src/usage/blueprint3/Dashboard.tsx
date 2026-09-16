"use client";

import * as React from "react";
import { Menu, MenuItem, Tag } from "@blueprintjs/core";
import { blueprintAdapter } from "../../preview/blueprintRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

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
          <div className="flex items-center gap-2 px-2 py-2">
            <span
              aria-hidden
              className="inline-block size-4 rounded"
              style={{ background: "var(--semantic-bg-brand-default)" }}
            />
            <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>이슈</span>
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
