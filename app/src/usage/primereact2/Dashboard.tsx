import * as React from "react";
import { Menubar } from "primereact/menubar";
import type { MenuItem } from "primereact/menuitem";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const FONT_OVERRIDE_CSS = `
.primereact-usage2-root {
  --font-family: var(--base-font-family-sans, Pretendard, system-ui, sans-serif);
}
`;

export function PrimereactUsage2({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const items: MenuItem[] = SCREENS.map((s) => ({
    label: s.label,
    className: s.key === screenKey ? "p-focus" : undefined,
    command:  => setScreenKey(s.key),
  }));

  return (
    <div
      className="primereact-usage2-root"
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
      <style>{FONT_OVERRIDE_CSS}</style>
      <Menubar
        start={<span style={{ fontWeight: 700, marginInlineEnd: "1rem" }}>{system.name} 피트니스</span>}
        model={items}
        end={
          <span style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>
            PrimeReact
          </span>
        }
        style={{ borderRadius: 0, borderInline: "none", borderBlockStart: "none", flexShrink: 0 }}
      />
      {/* pr2 화면들, 컨테이너 폭을 @container로 측정 */}
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "1.25rem", containerType: "inline-size", containerName: "pr2" }}>
        <div style={{ marginBlockEnd: "1rem" }}>
          <h2 style={{ margin: 0, fontSize: "1.1rem" }}>{screen.label}</h2>
          <p style={{ margin: "0.25rem 0 0", color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.9rem" }}>
            {screen.lede}
          </p>
        </div>
        <Screen />
      </div>
    </div>
  );
}
