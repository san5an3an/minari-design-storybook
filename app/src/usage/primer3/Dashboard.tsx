import * as React from "react";
import { Avatar, CounterLabel, Header, Heading, IconButton, Text, UnderlineNav } from "@primer/react";
import { Bell } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { WORKFLOWS, type WorkflowRun } from "./data";
import { SCREENS } from "./screens";

export function PrimerUsage3({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  // 워크플로 실행 목록 단일 소스, 두 화면 다 이 값 써야 최신 실행 보임
  const [workflows, setWorkflows] = React.useState<WorkflowRun[]>(WORKFLOWS);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const addWorkflow = (run: WorkflowRun) => {
    setWorkflows((prev) => [run, ...prev]);
  };

  return (
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
      <Header style={{ flexShrink: 0 }}>
        <Header.Item>
          <span aria-hidden style={{ display: "inline-block", width: 20, height: 20, marginInlineEnd: 8, borderRadius: 4, background: "var(--bgColor-accent-emphasis)" }} />
          <span style={{ fontWeight: 600 }}>{system.name}/pipelines</span>
        </Header.Item>
        <Header.Item full>
          <input
            type="search"
            placeholder="워크플로 검색"
            aria-label="워크플로 검색"
            style={{ width: "min(220px, 40vw)", borderRadius: "6px", border: "1px solid var(--borderColor-default)", background: "var(--bgColor-default)", color: "var(--fgColor-default)", padding: "5px 10px", fontSize: "14px" }}
          />
        </Header.Item>
        {/* 알림, 헤더 검색/알림/아바타 요소 중 하나 */}
        <Header.Item>
          <div style={{ position: "relative" }}>
            <IconButton
              icon={Bell}
              aria-label="알림 1건"
              variant="invisible"
              size="small"
              style={{ color: "var(--fgColor-onEmphasis)" }}
            />
            <span style={{ position: "absolute", top: -4, right: -4 }}>
              <CounterLabel scheme="primary">1</CounterLabel>
            </span>
          </div>
        </Header.Item>
        <Header.Item>
          <Avatar src="https://avatars.githubusercontent.com/u/9919?s=64" size={28} alt="김하늘" />
        </Header.Item>
      </Header>

      <div style={{ flexShrink: 0, paddingInline: "16px", borderBottom: "1px solid var(--borderColor-muted)" }}>
        <UnderlineNav aria-label="파이프라인 화면">
          {SCREENS.map((s) => (
            <UnderlineNav.Item
              key={s.key}
              aria-current={s.key === screenKey ? "page" : undefined}
              onSelect={(e) => {
                e.preventDefault;
                setScreenKey(s.key);
              }}
              href="#"
            >
              {s.label}
            </UnderlineNav.Item>
          ))}
        </UnderlineNav>
      </div>

      <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
          <Heading as="h2" variant="medium" style={{ color: "var(--fgColor-default)" }}>{screen.label}</Heading>
          <Text as="p" style={{ margin: 0, fontSize: "14px", color: "var(--fgColor-muted)" }}>{screen.lede}</Text>
        </div>
        <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} workflows={workflows} onAddWorkflow={addWorkflow} />
      </div>
    </div>
  );
}
