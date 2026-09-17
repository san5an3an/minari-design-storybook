"use client";

import * as React from "react";
import {
  Content, Header, HeaderName, SideNav, SideNavItems, SideNavLink, Tag,
} from "@carbon/react";
import { carbonAdapter } from "../../preview/carbonRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const SHELL = "carbon-usage-shell";

// 문자열 안 백틱 제외
const SHELL_CSS = `
.${SHELL} { position: relative; }
.${SHELL} .cds--header { position: absolute; }
.${SHELL} .cds--side-nav {
  position: absolute;
  inset-block-start: 3rem;
  inset-block-end: 0;
}
.${SHELL} .cds--content { overflow-y: auto; }
`;

export function CarbonUsage({ system, active }: UsageDashboardProps) {
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
          // 뷰포트 내부에 고정
          height: "max(20rem, calc(100dvh - 9rem))",
        }}
      >
        <style>{SHELL_CSS}</style>

        <Header aria-label="플릿">
          <HeaderName href="#" prefix="IBM">
            플릿
          </HeaderName>
          <div className="flex flex-1 items-center justify-end pe-4">
            <Tag size="sm" type="gray">
              {system.baseTitle}
            </Tag>
          </div>
        </Header>

        <SideNav aria-label="화면 고르기" expanded isFixedNav isPersistent={false}>
          <SideNavItems>
            {SCREENS.map((s) => (
              <SideNavLink
                isActive={s.key === screenKey}
                key={s.key}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault;
                  setScreenKey(s.key);
                }}
                href="#"
              >
                {s.label}
              </SideNavLink>
            ))}
          </SideNavItems>
        </SideNav>

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
