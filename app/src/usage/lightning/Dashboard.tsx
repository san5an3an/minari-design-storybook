"use client";

import * as React from "react";
import { Bell, Search } from "lucide-react";
import { lightningAdapter } from "../../preview/lightningRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const LAYOUT_CSS = `
.lds1-scroll { container-type: inline-size; container-name: lds1; }
.lds1-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
@container lds1 (min-width: 47rem) {
  .lds1-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

export function LightningUsage({ system, active }: UsageDashboardProps) {
  React.useEffect(
     => lightningAdapter.mountTheme?.(system, active, document),
    [system, active],
  );

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <lightningAdapter.Provider system={system} mode={active}>
      <style>{LAYOUT_CSS}</style>
      <div
        className="slds-grid"
        style={{
          background: "var(--semantic-bg-neutral-surface)",
          border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
          height: "max(20rem, calc(100dvh - 9rem))",
          overflow: "hidden",
        }}
      >
        {/* 왼쪽 세로 내비게이션 */}
        <nav
          className="slds-nav-vertical"
          style={{ width: "12rem", flexShrink: 0, borderRight: "1px solid var(--semantic-border-neutral-subtle)", padding: "0.75rem 0", overflowY: "auto" }}
        >
          {/* 그룹 제목과 항목 라벨을 다르게 표시. 같으면 클릭 안 되는 h2가 겹쳐 동작하지 않음 */}
          <div className="slds-nav-vertical__section">
            <h2 id="lightning-usage-nav-title" className="slds-nav-vertical__title slds-text-title_caps">영업 콘솔</h2>
            <ul aria-describedby="lightning-usage-nav-title">
              {SCREENS.map((s) => (
                <li key={s.key} className={"slds-nav-vertical__item" + (s.key === screenKey ? " slds-is-active" : "")}>
                  <a
                    href="#" className="slds-nav-vertical__action"
                    aria-current={s.key === screenKey ? "true" : undefined}
                    onClick={(e) => { e.preventDefault; setScreenKey(s.key); }}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="slds-grid slds-grid_vertical" style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
          {/* 헤더: 검색, 알림, 아바타 */}
          <header
            className="slds-grid slds-grid_align-spread"
            style={{ flexShrink: 0, alignItems: "center", gap: "0.75rem", padding: "0.625rem 1rem", borderBottom: "1px solid var(--semantic-border-neutral-subtle)" }}
          >
            <div className="slds-form-element" style={{ flex: 1, maxWidth: "20rem" }}>
              <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
                <Search className="slds-input__icon slds-input__icon_left" size={14} aria-hidden />
                <input type="text" className="slds-input" placeholder="검색" readOnly />
              </div>
            </div>
            <div className="slds-grid" style={{ alignItems: "center", gap: "0.75rem" }}>
              <button className="slds-button slds-button_icon" title="알림" aria-label="알림">
                <Bell className="slds-button__icon" size={16} aria-hidden />
              </button>
              <span
                className="slds-avatar slds-avatar_circle slds-avatar_small"
                style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }}
              >
                <abbr className="slds-avatar__initials" title="김서연">김</abbr>
              </span>
            </div>
          </header>

          <div className="lds1-scroll" style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "1rem" }}>
            <div style={{ marginBottom: "0.75rem" }}>
              <h2 className="slds-text-heading_small">{screen.label}</h2>
              <p className="slds-text-body_small slds-text-color_weak">{screen.lede}</p>
            </div>
            <Screen />
          </div>
        </div>
      </div>
    </lightningAdapter.Provider>
  );
}
