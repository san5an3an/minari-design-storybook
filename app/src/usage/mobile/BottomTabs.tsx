"use client";

import * as React from "react";
import { SAFE_BOTTOM, SHELL, TAB_MIN_HEIGHT, TOUCH } from "./contract";

export interface MobileTab {
  key: string;
  label: string;
  icon: React.ReactNode;
}

// 탭 칸에서 누르는 요소에 펼칠 속성 정의
export interface TabItemProps {
  "aria-current": "page" | undefined;
  onClick: () => void;
  [SHELL.tab]: string;
}

export interface BottomTabsProps {
  tabs: readonly MobileTab[];
  activeKey: string;
  onSelect: (key: string) => void;
  // 탭 칸 하나 렌더링. 라이브러리 부품을 돌려주고 itemProps 를 누르는 요소에 펼쳐야 함
  renderTab?: (tab: MobileTab, active: boolean, itemProps: TabItemProps) => React.ReactNode;
  // 탭바 배경색 지정. 기본값은 --semantic-bg-neutral-surface
  background?: string;
}

function DrawnTab({ tab, active, itemProps }: { tab: MobileTab; active: boolean; itemProps: TabItemProps }) {
  return (
    <button
      type="button"
      {...itemProps}
      {...{ [SHELL.tabDrawn]: "" }}
      className="flex size-full flex-col items-center justify-center gap-(--semantic-space-xs) px-(--semantic-space-xs)"
      style={{
        minHeight: TAB_MIN_HEIGHT,
        minWidth: TOUCH,
        border: 0,
        background: "transparent",
        cursor: "pointer",
        fontSize: "var(--semantic-text-caption)",
        fontWeight: active ? 600 : 400,
        color: active ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-subtle)",
      }}
    >
      <span aria-hidden className="flex items-center justify-center">{tab.icon}</span>
      <span className="max-w-full truncate">{tab.label}</span>
    </button>
  );
}

export function BottomTabs({ tabs, activeKey, onSelect, renderTab, background }: BottomTabsProps) {
  if (!tabs.length) return null;
  return (
    <nav
      aria-label={SHELL.tabsLabel}
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
        // 홈 인디케이터가 덮는 아래 safe area 만큼 탭바 아래 여백 확보
        paddingBottom: SAFE_BOTTOM,
        background: background ?? "var(--semantic-bg-neutral-surface)",
        borderTop: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
      }}
    >
      {tabs.map((tab) => {
        const active = tab.key === activeKey;
        const itemProps: TabItemProps = {
          "aria-current": active ? "page" : undefined,
          onClick: () => onSelect(tab.key),
          [SHELL.tab]: tab.key,
        };
        return (
          <div key={tab.key} className="flex min-w-0 items-stretch justify-center">
            {renderTab ? renderTab(tab, active, itemProps) : <DrawnTab tab={tab} active={active} itemProps={itemProps} />}
          </div>
        );
      })}
    </nav>
  );
}
