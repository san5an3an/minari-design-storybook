import * as React from "react";
import { Pageheader } from "../../bases/standalone/Pageheader";
import { Segmented } from "../../bases/standalone/Segmented";
import { Toast } from "../../bases/standalone/Toast";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function StandaloneUsage({ system }: UsageDashboardProps) {
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
        contain: "layout",
        position: "relative",
      }}
    >
      <div style={{ padding: "1rem 1.25rem 0", flexShrink: 0 }}>
        <Pageheader
          title={`${system.name} 프로젝트`}
          lede={screen.lede}
          actions={
            <Segmented value={[screenKey]} onValueChange={(v) => v[0] && setScreenKey(v[0])}>
              {SCREENS.map((s) => (
                <Segmented.Item key={s.key} value={s.key}>
                  {s.label}
                </Segmented.Item>
              ))}
            </Segmented>
          }
        />
      </div>

      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          padding: "0 1.25rem 1.25rem",
          containerType: "inline-size",
          containerName: "sa1",
        } as React.CSSProperties}
      >
        <Screen />
      </div>
      <Toast.Region position="bottom-end" />
    </div>
  );
}
