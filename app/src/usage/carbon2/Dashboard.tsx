"use client";

import * as React from "react";
import {
  Content, Header, HeaderMenuButton, HeaderMenuItem, HeaderName, HeaderNavigation, HeaderSideNavItems,
  SideNav, SideNavItems, Tag,
} from "@carbon/react";
import { carbonAdapter } from "../../preview/carbonRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const SHELL = "carbon-usage2-shell";

// 화면 틀 높이를 CSS 변수로 넘겨 서랍 높이 계산. 서랍과 가림막이 Header 안에 있어서 100% 로는 높이를 못 잼
const SHELL_HEIGHT = "max(20rem, calc(100dvh - 9rem))";

const SHELL_CSS = `
.${SHELL} { position: relative; }
.${SHELL} .cds--header { position: absolute; }
.${SHELL} .cds--content { overflow-y: auto; }
.${SHELL} .cds--side-nav {
  position: absolute;
  inset-block: 3rem auto;
  block-size: calc(var(--cb2-shell-height) - 3rem);
}
.${SHELL} .cds--side-nav__overlay { position: absolute; }
.${SHELL} .cds--side-nav__overlay-active {
  inline-size: 100%;
  block-size: calc(var(--cb2-shell-height) - 3rem);
}
`;

// Carbon 이 HeaderNavigation 을 숨기는 폭(66rem, 1056px) 지정. 이보다 좁으면 햄버거 버튼과 서랍으로 화면 이동
const WIDE_QUERY = "(min-width: 66rem)";

export function CarbonUsage2({ system, active }: UsageDashboardProps) {
  React.useEffect(
    () => carbonAdapter.mountTheme?.(system, active, document),
    [system, active],
  );

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  // 좁은 폭에서 여는 서랍 상태 관리. 폭이 넓어지면 서랍을 닫아 빈 서랍이 남지 않게 함
  const [navOpen, setNavOpen] = React.useState(false);
  React.useEffect(() => {
    const wide = window.matchMedia(WIDE_QUERY);
    const closeWhenWide = () => { if (wide.matches) setNavOpen(false); };
    wide.addEventListener("change", closeWhenWide);
    return () => wide.removeEventListener("change", closeWhenWide);
  }, []);

  const screenItems = SCREENS.map((s) => (
    <HeaderMenuItem
      key={s.key}
      isActive={s.key === screenKey}
      href="#"
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        setScreenKey(s.key);
        setNavOpen(false);
      }}
    >
      {s.label}
    </HeaderMenuItem>
  ));

  return (
    <carbonAdapter.Provider system={system} mode={active}>
      <div
        className={`${SHELL} overflow-hidden`}
        style={{
          border:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
          height: SHELL_HEIGHT,
          ["--cb2-shell-height" as string]: SHELL_HEIGHT,
        }}
      >
        <style>{SHELL_CSS}</style>

        <Header aria-label="품질관리">
          <HeaderMenuButton
            aria-label={navOpen ? "화면 메뉴 닫기" : "화면 메뉴 열기"}
            aria-expanded={navOpen}
            isActive={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          />
          <HeaderName href="#" prefix="IBM">
            품질관리
          </HeaderName>
          <HeaderNavigation aria-label="화면 고르기">
            {screenItems}
          </HeaderNavigation>
          <div className="flex flex-1 items-center justify-end pe-4">
            <Tag size="sm" type="gray">
              {system.baseTitle}
            </Tag>
          </div>
          <SideNav
            aria-label="화면 고르기"
            expanded={navOpen}
            isPersistent={false}
            onSideNavBlur={() => setNavOpen(false)}
            onOverlayClick={() => setNavOpen(false)}
          >
            <SideNavItems>
              <HeaderSideNavItems>{screenItems}</HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
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
