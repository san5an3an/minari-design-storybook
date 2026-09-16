"use client";

import * as React from "react";
import { Navbar, Tag, Tree } from "@blueprintjs/core";
import type { TreeNodeInfo } from "@blueprintjs/core";
import { blueprintAdapter } from "../../preview/blueprintRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function BlueprintUsage({ system, active }: UsageDashboardProps) {
  React.useEffect(
     => blueprintAdapter.mountTheme?.(system, active, document),
    [system, active],
  );

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const contents: TreeNodeInfo[] = SCREENS.map((s) => ({
    id: s.key,
    label: s.label,
    isSelected: s.key === screenKey,
    hasCaret: false,
  }));

  return (
    <blueprintAdapter.Provider system={system} mode={active}>
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
        <Navbar style={{ boxShadow: "none", flexShrink: 0 }}>
          <Navbar.Group>
            <Navbar.Heading>관제</Navbar.Heading>
            <Navbar.Divider />
            <Tag minimal>{system.baseTitle}</Tag>
          </Navbar.Group>
        </Navbar>

        <div className="flex min-h-0 flex-1">
          {/* 왼쪽은 Tree 하나로 사이드바 메뉴 처리 */}
          <div
            className="w-44 shrink-0 overflow-y-auto p-2"
            style={{
              borderInlineEnd:
                "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
            }}
          >
            <Tree
              contents={contents}
              onNodeClick={(node) => setScreenKey(String(node.id))}
            />
          </div>

          {/* 본문 영역만 스크롤 적용 */}
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-1 pb-3">
              <h2 style={{ fontSize: "1rem", fontWeight: 600 }}>{screen.label}</h2>
              <p style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.8125rem" }}>
                {screen.lede}
              </p>
            </div>
            <Screen />
          </div>
        </div>
      </div>
    </blueprintAdapter.Provider>
  );
}
