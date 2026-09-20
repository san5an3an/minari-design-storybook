"use client";

import * as React from "react";
import {
  Content, Header, HeaderName, SideNav, SideNavItems, SideNavLink, Tag,
} from "@carbon/react";
import { carbonAdapter } from "../../preview/carbonRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const SHELL = "carbon-usage-shell";

// 비주얼 업그레이드용 히어로, 그라디언트 위쪽 유지, 아래 40%만 어둡게 처리
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=60";

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
.${SHELL} .cb1-scope { container-type: inline-size; container-name: cb1; }
.${SHELL} .cb1-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
@container cb1 (min-width: 47rem) {
  .${SHELL} .cb1-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
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
          {/* 히어로: 사진과 상태칩, 하단 40% 어둡게 처리 */}
          <div
            className="flex flex-col justify-end gap-2 rounded p-4"
            style={{
              backgroundImage:
                "linear-gradient(180deg, transparent 0%, transparent 40%, " +
                "color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), " +
                `url("${HERO_IMAGE}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              blockSize: "8rem",
              marginBlockEnd: "1rem",
            }}
          >
            <span style={{ color: "var(--semantic-fg-on-brand-default)", fontWeight: 600, fontSize: "1.0625rem" }}>
              오늘도 30대 전부 실시간으로 지켜보고 있어요
            </span>
            <div className="flex gap-2">
              <Tag size="sm" type="green">온라인 27대</Tag>
              <Tag size="sm" type="magenta">경고 2대</Tag>
              <Tag size="sm" type="gray">오프라인 1대</Tag>
            </div>
          </div>

          <div className="cb1-scope">
            <div className="flex flex-col gap-1 pb-4">
              <h2 style={{ fontSize: "1rem", fontWeight: 600 }}>{screen.label}</h2>
              <p style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.8125rem" }}>
                {screen.lede}
              </p>
            </div>
            <Screen />
          </div>
        </Content>
      </div>
    </carbonAdapter.Provider>
  );
}
