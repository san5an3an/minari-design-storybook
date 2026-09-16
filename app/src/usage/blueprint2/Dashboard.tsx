"use client";

import * as React from "react";
import { Tab, Tabs, Tag } from "@blueprintjs/core";
import { blueprintAdapter } from "../../preview/blueprintRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function BlueprintUsage2({ system, active }: UsageDashboardProps) {
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
          <span style={{ fontWeight: 600 }}>재무</span>
          <Tag minimal>{system.baseTitle}</Tag>
        </div>

        <div className="shrink-0 px-4 pt-2">
          {/* animate 끔. 첫 마운트에서 밑줄 위치 측정이 어긋나 표 영역까지 내려오는 문제가 있음 */}
          <Tabs id="blueprint-usage2-tabs" selectedTabId={screenKey} onChange={(id) => setScreenKey(String(id))} animate={false}>
            {SCREENS.map((s) => (
              <Tab key={s.key} id={s.key} title={s.label} />
            ))}
          </Tabs>
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
      </div>
    </blueprintAdapter.Provider>
  );
}
