import * as React from "react";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function DaisyuiUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "max(20rem, calc(100dvh - 9rem))",
        overflow: "hidden",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1.25rem",
          flexShrink: 0,
        }}
      >
        <span style={{ fontWeight: 700 }}>{system.name} 설정</span>
        <span className="d-badge d-badge-ghost">daisyUI</span>
      </div>

      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "0 1.25rem 1.25rem" }}>
        <div role="tablist" className="d-tabs d-tabs-lift" style={{ marginBottom: "1rem" }}>
          {SCREENS.map((s) => (
            <a
              key={s.key}
              role="tab"
              className={`d-tab ${s.key === screenKey ? "d-tab-active" : ""}`}
              onClick={ => setScreenKey(s.key)}
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-sm opacity-60" style={{ marginBottom: "1rem" }}>{screen.lede}</p>
        <Screen />
      </div>
    </div>
  );
}
