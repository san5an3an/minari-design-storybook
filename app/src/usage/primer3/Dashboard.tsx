import * as React from "react";
import { Avatar, Header, UnderlineNav } from "@primer/react";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function PrimerUsage3({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
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
      <Header style={{ flexShrink: 0 }}>
        <Header.Item>
          <span aria-hidden style={{ display: "inline-block", width: 20, height: 20, marginInlineEnd: 8, borderRadius: 4, background: "var(--bgColor-accent-emphasis)" }} />
          <span style={{ fontWeight: 600 }}>{system.name}/pipelines</span>
        </Header.Item>
        <Header.Item full>
          <input
            type="search"
            placeholder="워크플로 검색"
            aria-label="워크플로 검색"
            style={{ width: "min(220px, 40vw)", borderRadius: "6px", border: "1px solid var(--borderColor-default)", background: "var(--bgColor-default)", color: "var(--fgColor-default)", padding: "5px 10px", fontSize: "14px" }}
          />
        </Header.Item>
        <Header.Item>
          <Avatar src="https://avatars.githubusercontent.com/u/9919?s=64" size={28} alt="김하늘" />
        </Header.Item>
      </Header>

      <div style={{ flexShrink: 0, paddingInline: "16px", borderBottom: "1px solid var(--borderColor-muted)" }}>
        <UnderlineNav aria-label="파이프라인 화면">
          {SCREENS.map((s) => (
            <UnderlineNav.Item
              key={s.key}
              aria-current={s.key === screenKey ? "page" : undefined}
              onSelect={(e) => {
                e.preventDefault;
                setScreenKey(s.key);
              }}
              href="#"
            >
              {s.label}
            </UnderlineNav.Item>
          ))}
        </UnderlineNav>
      </div>

      <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
          <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 600, color: "var(--fgColor-default)" }}>{screen.label}</h2>
          <p style={{ margin: 0, fontSize: "14px", color: "var(--fgColor-muted)" }}>{screen.lede}</p>
        </div>
        <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
      </div>
    </div>
  );
}
