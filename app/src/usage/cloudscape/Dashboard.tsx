import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const FONT_OVERRIDE_CSS = `
.cloudscape-usage-root {
  --font-family-base-c9u5cr: var(--base-font-family-sans, Pretendard, system-ui, sans-serif);
  --font-family-display-vybf2o: var(--base-font-family-sans, Pretendard, system-ui, sans-serif);
  --font-family-heading-f20kh9: var(--base-font-family-sans, Pretendard, system-ui, sans-serif);
}

.cloudscape-dark-scope {
  --color-text-body-default-gtm97i: #f2f6fb;
  --color-text-body-secondary-y6dr4d: #b7c4d6;
  --color-text-counter-q4zq3v: #8fa3bf;
  --color-text-empty-68xc4n: #8fa3bf;
  --color-text-expandable-section-default-aqjbq3: #f2f6fb;
  --color-text-expandable-section-navigation-icon-default-wh1lig: #8fa3bf;
  --color-text-form-label-84uan1: #f2f6fb;
  --color-text-group-label-0wronh: #8fa3bf;
  --color-text-heading-default-pn83b8: #f2f6fb;
  --color-text-heading-secondary-su1acg: #b7c4d6;
  --color-text-interactive-active-fedaa8: #f2f6fb;
  --color-text-interactive-default-1o1pl2: #b7c4d6;
  --color-text-interactive-hover-j5y3wx: #ffffff;
  --color-text-key-value-pairs-value-xmrgpn: #f2f6fb;
  --color-text-label-tv95tq: #f2f6fb;
  --color-text-pagination-page-number-default-jqmmw0: #b7c4d6;
  --color-text-small-vk4o1c: #8fa3bf;
  --color-text-status-inactive-tg9r8q: #8fa3bf;
  --color-text-column-header-wyzs6v: #b7c4d6;
  --color-text-column-sorting-icon-iazyfo: #b7c4d6;
  // 배경색 #14233a 변경
  --color-background-item-card-aw1yv6: #14233a;
  --color-background-table-header-unjmda: #14233a;
  --color-background-layout-main-7z8vaj: #14233a;
  --color-background-input-default-bz9w07: #14233a;
  --color-background-dropdown-item-default-lzrka9: #1a2c47;
  --color-background-container-content-78ljyf: #14233a;
  --color-background-container-header-ydavso: #14233a;
}
`;

export function CloudscapeUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <div
      className="overflow-hidden cloudscape-usage-root"
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
        <Header variant="h3">{system.name} Console</Header>
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
            header={{ text: `${system.name} 리소스`, href: "#overview" }}
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
