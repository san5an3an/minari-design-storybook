import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const FONT_OVERRIDE_CSS = `
.cloudscape-usage3-root {
  --font-family-base-c9u5cr: var(--base-font-family-sans, Pretendard, system-ui, sans-serif);
  --font-family-display-vybf2o: var(--base-font-family-sans, Pretendard, system-ui, sans-serif);
  --font-family-heading-f20kh9: var(--base-font-family-sans, Pretendard, system-ui, sans-serif);
}
`;

export function CloudscapeUsage3({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <div
      className="overflow-hidden cloudscape-usage3-root"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "max(20rem, calc(100dvh - 9rem))",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
      }}
    >
      <style>{FONT_OVERRIDE_CSS}</style>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1rem",
          borderBottom: "1px solid var(--semantic-border-neutral-subtle)",
          flexShrink: 0,
        }}
      >
        <Header variant="h3">{system.name} IAM</Header>
        <Box color="text-status-inactive" fontSize="body-s">Cloudscape</Box>
      </div>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        <div
          style={{
            width: "220px",
            flexShrink: 0,
            overflowY: "auto",
            borderRight: "1px solid var(--semantic-border-neutral-subtle)",
          }}
        >
          <SideNavigation
            activeHref={`#${screenKey}`}
            header={{ text: `${system.name} 접근 관리`, href: "#users" }}
            items={SCREENS.map((s) => ({ type: "link", text: s.label, href: `#${s.key}` }))}
            onFollow={(e) => {
              e.preventDefault;
              setScreenKey(e.detail.href.replace("#", ""));
            }}
          />
        </div>

        <div style={{ flex: 1, minWidth: 0, overflowY: "auto", padding: "1.25rem" }}>
          <div style={{ marginBlockEnd: "1rem" }}>
            <Header variant="h2" description={screen.lede}>{screen.label}</Header>
          </div>
          <Screen />
        </div>
      </div>
    </div>
  );
}
