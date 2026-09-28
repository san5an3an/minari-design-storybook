"use client";

import * as React from "react";
import { Avatar, Tabs } from "@heroui/react";
import { herouiAdapter } from "../../preview/herouiRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function HeroUiUsage({ system, active }: UsageDashboardProps) {
  // CSS는 화면 노출 동안만 .heroui-ref-scope 하위에 적용되는 시간 스코프
  React.useEffect( => herouiAdapter.mountTheme?.(system, active, document), [system, active]);

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);

  return (
    <herouiAdapter.Provider system={system} mode={active}>
      <div
        className="flex flex-col overflow-hidden"
        style={{
          background: "var(--semantic-bg-neutral-surface)",
          border:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
          // 뷰포트에 가두고 내부 스크롤 적용
          height: "max(20rem, calc(100dvh - 9rem))",
        }}
      >
        {/* 상단바에 브랜드와 사용자 정보만 표시 */}
        <div
          className="flex shrink-0 flex-wrap items-center gap-3 px-4 py-3"
          style={{
            borderBottom:
              "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          <span
            aria-hidden
            className="inline-block size-5 rounded"
            style={{ background: "var(--semantic-bg-brand-default)" }}
          />
          <span style={{ fontWeight: 600 }}>루틴</span>
          <span
            className="ms-auto"
            style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.75rem" }}
          >
            {system.baseTitle}
          </span>
          <Avatar className="size-7">
            <Avatar.Fallback className="text-xs">하</Avatar.Fallback>
          </Avatar>
        </div>

        {/* 화면 선택은 Tabs 하나가 사이드바와 바텀 내비를 대신하기 */}
        <Tabs
          className="min-h-0 flex-1"
          onSelectionChange={(key) => setScreenKey(String(key))}
          selectedKey={screenKey}
        >
          <Tabs.ListContainer className="shrink-0 px-4">
            <Tabs.List aria-label="화면 고르기">
              {SCREENS.map((s) => (
                <Tabs.Tab key={s.key} id={s.key}>
                  {s.label}
                  <Tabs.Indicator />
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs.ListContainer>

          {/* Tabs가 hidden 처리하므로 여기서 중복 숨김 처리하지 않음 */}
          {SCREENS.map((s) => (
            <Tabs.Panel className="min-h-0 flex-1 overflow-y-auto p-4" id={s.key} key={s.key}>
              <div className="flex flex-col gap-1 pb-3">
                <h2 style={{ fontSize: "1rem", fontWeight: 600 }}>{s.label}</h2>
                <p style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.8125rem" }}>
                  {s.lede}
                </p>
              </div>
              <s.Screen />
            </Tabs.Panel>
          ))}
        </Tabs>
      </div>
    </herouiAdapter.Provider>
  );
}
