"use client";

import * as React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs, Tag } from "@carbon/react";
import { carbonAdapter } from "../../preview/carbonRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function CarbonUsage3({ system, active }: UsageDashboardProps) {
  React.useEffect(
     => carbonAdapter.mountTheme?.(system, active, document),
    [system, active],
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <carbonAdapter.Provider system={system} mode={active}>
      <div
        className="flex flex-col overflow-hidden"
        style={{
          background: "var(--semantic-bg-neutral-surface)",
          border:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
          height: "max(20rem, calc(100dvh - 9rem))",
        }}
      >
        <div
          className="flex shrink-0 items-center gap-3 px-4 py-3"
          style={{
            borderBottom:
              "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          <span style={{ fontWeight: 600 }}>발주</span>
          <Tag size="sm" type="gray">{system.baseTitle}</Tag>
        </div>

        <Tabs selectedIndex={selectedIndex} onChange={({ selectedIndex: i }) => setSelectedIndex(i)}>
          <TabList aria-label="화면 고르기" className="shrink-0 px-2">
            {SCREENS.map((s) => (
              <Tab key={s.key}>{s.label}</Tab>
            ))}
          </TabList>
          {/* TabPanels는 children만 받음. 스크롤 영역은 감싸는 div 담당임 */}
          <div className="min-h-0 flex-1 overflow-y-auto">
            <TabPanels>
              {SCREENS.map((s) => (
                <TabPanel key={s.key} className="p-4">
                  <div className="flex flex-col gap-1 pb-3">
                    <h2 style={{ fontSize: "1rem", fontWeight: 600 }}>{s.label}</h2>
                    <p style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.8125rem" }}>
                      {s.lede}
                    </p>
                  </div>
                  <s.Screen />
                </TabPanel>
              ))}
            </TabPanels>
          </div>
        </Tabs>
      </div>
    </carbonAdapter.Provider>
  );
}
