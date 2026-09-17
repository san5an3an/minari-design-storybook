"use client";

import * as React from "react";
import {
  Content, Header, HeaderMenuItem, HeaderName, HeaderNavigation, Tag,
} from "@carbon/react";
import { carbonAdapter } from "../../preview/carbonRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const SHELL = "carbon-usage2-shell";

const SHELL_CSS = `
.${SHELL} { position: relative; }
.${SHELL} .cds--header { position: absolute; }
.${SHELL} .cds--content { overflow-y: auto; }
`;

export function CarbonUsage2({ system, active }: UsageDashboardProps) {
  React.useEffect(
     => carbonAdapter.mountTheme?.(system, active, document),
    [system, active],
  );

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <carbonAdapter.Provider system={system} mode={active}>
      <div
        className={`${SHELL} overflow-hidden`}
        style={{
          border:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
          height: "max(20rem, calc(100dvh - 9rem))",
        }}
      >
        <style>{SHELL_CSS}</style>

        <Header aria-label="품질관리">
          <HeaderName href="#" prefix="IBM">
            품질관리
          </HeaderName>
          <HeaderNavigation aria-label="화면 고르기">
            {SCREENS.map((s) => (
              <HeaderMenuItem
                key={s.key}
                isActive={s.key === screenKey}
                href="#"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault;
                  setScreenKey(s.key);
                }}
              >
                {s.label}
              </HeaderMenuItem>
            ))}
          </HeaderNavigation>
          <div className="flex flex-1 items-center justify-end pe-4">
            <Tag size="sm" type="gray">
              {system.baseTitle}
            </Tag>
          </div>
        </Header>

        <Content>
          <div className="flex flex-col gap-1 pb-4">
            <h2 style={{ fontSize: "1rem", fontWeight: 600 }}>{screen.label}</h2>
            <p style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.8125rem" }}>
              {screen.lede}
            </p>
          </div>
          <Screen />
        </Content>
      </div>
    </carbonAdapter.Provider>
  );
}
