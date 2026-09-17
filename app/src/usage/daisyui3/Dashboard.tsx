import * as React from "react";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const DARK_SCOPE_CSS = `
.daisyui-dark-scope,
.daisyui-dark-scope * {
  --color-base-100: #14233a;
  --color-base-200: #0f1c30;
  --color-base-300: #223349;
  --color-base-content: #f2f6fb;
  --color-primary: #5b9bff;
  --color-primary-content: #0b1622;
  --color-neutral: #223349;
  --color-neutral-content: #f2f6fb;
  --color-success: #3fd39e;
  --color-success-content: #0b1622;
  --color-warning: #ffb020;
  --color-warning-content: #0b1622;
  --color-error: #ff5c5c;
  --color-error-content: #0b1622;
}
.daisyui-dark-scope {
  color-scheme: dark;
  background: #0b1622;
  color: var(--color-base-content);
}
`;

export function DaisyuiUsage3({ system }: UsageDashboardProps) {
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
      <style>{DARK_SCOPE_CSS}</style>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1.25rem",
          flexShrink: 0,
        }}
      >
        <span style={{ fontWeight: 700 }}>{system.name} 커뮤니티</span>
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
