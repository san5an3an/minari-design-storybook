import * as React from "react";
import {
  Avatar, FluentProvider, Hamburger, NavDrawer, NavDrawerBody, NavItem, SearchBox,
  Toolbar, Body1, Caption1,
} from "@fluentui/react-components";
import type { Theme } from "@fluentui/react-components";
import { BoxRegular, ClipboardTaskRegular } from "@fluentui/react-icons";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

import { byMode as s01 } from "../../../../generated/01-cobalt/base/fluent/theme";
import { byMode as s02 } from "../../../../generated/02-graphite/base/fluent/theme";
import { byMode as s03 } from "../../../../generated/03-ember/base/fluent/theme";
import { byMode as s04 } from "../../../../generated/04-jade/base/fluent/theme";
import { byMode as s05 } from "../../../../generated/05-plum/base/fluent/theme";
import { byMode as s06 } from "../../../../generated/06-slate/base/fluent/theme";
import { byMode as s07 } from "../../../../generated/07-emerald/base/fluent/theme";
import { byMode as s08 } from "../../../../generated/08-indigo/base/fluent/theme";
import { byMode as s09 } from "../../../../generated/09-sand/base/fluent/theme";
import { byMode as s10 } from "../../../../generated/10-teal/base/fluent/theme";
import { byMode as s11 } from "../../../../generated/11-crimson/base/fluent/theme";
import { byMode as s12 } from "../../../../generated/12-moss/base/fluent/theme";
import { byMode as s13 } from "../../../../generated/13-azure/base/fluent/theme";
import { byMode as s14 } from "../../../../generated/14-violet/base/fluent/theme";
import { byMode as s15 } from "../../../../generated/15-rust/base/fluent/theme";
import { byMode as s16 } from "../../../../generated/16-mint/base/fluent/theme";
import { byMode as s17 } from "../../../../generated/17-navy/base/fluent/theme";
import { byMode as s18 } from "../../../../generated/18-saffron/base/fluent/theme";
import { byMode as s19 } from "../../../../generated/19-fog/base/fluent/theme";
import { byMode as s20 } from "../../../../generated/20-berry/base/fluent/theme";

const THEMES: Record<string, Record<string, Theme>> = {
  "01-cobalt": s01, "02-graphite": s02, "03-ember": s03, "04-jade": s04, "05-plum": s05,
  "06-slate": s06, "07-emerald": s07, "08-indigo": s08, "09-sand": s09, "10-teal": s10,
  "11-crimson": s11, "12-moss": s12, "13-azure": s13, "14-violet": s14, "15-rust": s15,
  "16-mint": s16, "17-navy": s17, "18-saffron": s18, "19-fog": s19, "20-berry": s20,
};

const SCREEN_ICON: Record<string, React.ReactElement> = {
  assets: <BoxRegular />,
  detail: <BoxRegular />,
  requests: <ClipboardTaskRegular />,
};

function useWide: boolean {
  const [wide, setWide] = React.useState(true);
  React.useEffect( => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange =  => setWide(mq.matches);
    onChange;
    mq.addEventListener("change", onChange);
    return  => mq.removeEventListener("change", onChange);
  }, []);
  return wide;
}

export function FluentUsage3({ system, active }: UsageDashboardProps) {
  const theme = THEMES[system.slug]?.[active];
  const wide = useWide;
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  if (!theme) {
    return (
      <p className="doc-note" style={{ marginTop: 0 }}>
        <code>{system.slug}</code> · <code>{active}</code> 의 fluent theme 생성물이 없어요.
      </p>
    );
  }

  return (
    <FluentProvider theme={theme}>
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
        <Toolbar style={{ flexShrink: 0, gap: "8px", padding: "8px 12px" }}>
          {!wide ? <Hamburger onClick={ => setDrawerOpen((v) => !v)} aria-label="메뉴 열고 닫기" /> : null}
          <span aria-hidden style={{ display: "inline-block", width: 20, height: 20, borderRadius: "var(--semantic-radius-selection)", background: "var(--colorBrandBackground)" }} />
          <Body1 style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{system.name} 자산관리</Body1>
          <SearchBox placeholder="자산 검색" aria-label="자산 검색" style={{ marginInlineStart: "auto", minWidth: 0, width: "min(220px, 40vw)" }} />
          <Avatar name="김하늘" size={28} />
        </Toolbar>

        <div style={{ display: "flex", flex: 1, minHeight: 0, position: "relative" }}>
          <NavDrawer
            type={wide ? "inline" : "overlay"}
            open={wide || drawerOpen}
            onOpenChange={(_, data) => setDrawerOpen(data.open)}
            style={{ width: wide ? 200 : 240, flexShrink: 0, borderInlineEnd: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)" }}
          >
            <NavDrawerBody>
              {SCREENS.map((s) => (
                <NavItem
                  key={s.key}
                  value={s.key}
                  icon={SCREEN_ICON[s.key]}
                  onClick={ => {
                    setScreenKey(s.key);
                    if (!wide) setDrawerOpen(false);
                  }}
                  style={{ fontWeight: s.key === screenKey ? 600 : 400 }}
                >
                  {s.label}
                </NavItem>
              ))}
            </NavDrawerBody>
          </NavDrawer>

          <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
              <Body1 as="h2" style={{ fontSize: "20px", fontWeight: 600 }}>{screen.label}</Body1>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{screen.lede}</Caption1>
            </div>
            <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}
