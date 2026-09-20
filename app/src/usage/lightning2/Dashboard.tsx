"use client";

import * as React from "react";
import { Bell, Search } from "lucide-react";
import { lightningAdapter } from "../../preview/lightningRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

// @media 대신 @container 쿼리 사용. 카드 안쪽 폭 670~890px 측정
const LAYOUT_CSS = `
.lds2-scroll { container-type: inline-size; container-name: lds2; }
.lds2-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
@container lds2 (min-width: 47rem) {
  .lds2-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

export function Lightning2Usage({ system, active }: UsageDashboardProps) {
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
          <p className="slds-text-heading_small" style={{ fontWeight: 600 }}>승인 요청함</p>
          <div className="slds-form-element" style={{ flex: 1, maxWidth: "18rem" }}>
            <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
              <Search className="slds-input__icon slds-input__icon_left" size={14} aria-hidden />
              <input type="text" className="slds-input" placeholder="요청 검색" readOnly />
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
              <abbr className="slds-avatar__initials" title="박도윤">박</abbr>
            </span>
          </div>
        </header>

        <div className="slds-tabs_default" style={{ flexShrink: 0, padding: "0 1rem" }}>
          <ul className="slds-tabs_default__nav" role="tablist">
            {SCREENS.map((s) => (
              <li
                key={s.key}
                className={"slds-tabs_default__item" + (s.key === screenKey ? " slds-is-active" : "")}
                title={s.label}
                role="presentation"
              >
                <a
                  className="slds-tabs_default__link" href="#" role="tab"
                  onClick={(e) => { e.preventDefault; setScreenKey(s.key); }}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lds2-scroll" style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "1rem" }}>
          <p className="slds-text-body_small slds-text-color_weak" style={{ marginBottom: "0.75rem" }}>{screen.lede}</p>
          <Screen />
        </div>
      </div>
    </lightningAdapter.Provider>
  );
}
