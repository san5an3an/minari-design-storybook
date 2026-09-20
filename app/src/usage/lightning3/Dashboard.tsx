"use client";

import * as React from "react";
import { lightningAdapter } from "../../preview/lightningRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

// @media 대신 @container 쿼리 사용. 카드 안쪽 폭 670~890px 측정
const LAYOUT_CSS = `
.lds3-scroll { container-type: inline-size; container-name: lds3; }
.lds3-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
@container lds3 (min-width: 47rem) {
  .lds3-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

export function Lightning3Usage({ system, active }: UsageDashboardProps) {
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
        className="slds-grid slds-grid_vertical"
        style={{
          background: "var(--semantic-bg-neutral-surface)",
          border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
          height: "max(20rem, calc(100dvh - 9rem))",
          overflow: "hidden",
        }}
      >
        <header
          className="slds-grid slds-grid_align-spread"
          style={{ flexShrink: 0, alignItems: "center", gap: "0.75rem", padding: "0.625rem 1rem", borderBottom: "1px solid var(--semantic-border-neutral-subtle)" }}
        >
          <div className="slds-grid" style={{ gap: "1rem", alignItems: "center" }}>
            <p className="slds-text-heading_small" style={{ fontWeight: 600 }}>고객 360</p>
            <nav className="slds-grid" style={{ gap: "0.25rem" }}>
              {SCREENS.map((s) => (
                <a
                  key={s.key}
                  href="#"
                  className={"slds-button slds-button_neutral" + (s.key === screenKey ? " slds-is-selected" : "")}
                  style={s.key === screenKey ? { background: "var(--semantic-bg-brand-subtle)" } : undefined}
                  onClick={(e) => { e.preventDefault; setScreenKey(s.key); }}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="slds-grid" style={{ alignItems: "center", gap: "0.75rem" }}>
            <div className="slds-form-element" style={{ width: "12rem" }}>
              <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
                <svg className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default" aria-hidden="true">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search" />
                </svg>
                <input type="text" className="slds-input" placeholder="거래처 검색" readOnly />
              </div>
            </div>
            <button className="slds-button slds-button_icon" title="알림" aria-label="알림">
              <svg className="slds-button__icon" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#notification" />
              </svg>
            </button>
            <span className="slds-avatar slds-avatar_circle slds-avatar_small">
              <img alt="이하윤" src="/assets/images/avatar3.jpg" title="이하윤" />
            </span>
          </div>
        </header>

        <div className="lds3-scroll" style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "1rem" }}>
          <p className="slds-text-body_small slds-text-color_weak" style={{ marginBottom: "0.75rem" }}>{screen.lede}</p>
          <Screen />
        </div>
      </div>
    </lightningAdapter.Provider>
  );
}
