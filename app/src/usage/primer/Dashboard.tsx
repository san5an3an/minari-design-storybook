import * as React from "react";
import { Avatar, CounterLabel, Header, Heading, IconButton, Text, UnderlineNav } from "@primer/react";
import { Bell } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { ISSUES, type IssueItem } from "./data";
import { SCREENS } from "./screens";

const LAYOUT_CSS = `
.pr-scroll { container-type: inline-size; container-name: pr; }
.pr-stats { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-bottom: 16px; }
@container pr (min-width: 30rem) {
  .pr-stats { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@container pr (min-width: 60rem) {
  .pr-stats { grid-template-columns: repeat(6, minmax(0, 1fr)); }
}
`;

export function PrimerUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  const [issues, setIssues] = React.useState<IssueItem[]>(ISSUES);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const addIssue = (issue: IssueItem) => {
    setIssues((prev) => [issue, ...prev]);
  };

  return (
    <>
    <style>{LAYOUT_CSS}</style>
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
          {/* 브랜드색이 보이는 위치. Header, 이슈 상태색은 고정색이라 테마 미반영임 */}
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              marginInlineEnd: 8,
              borderRadius: 4,
              background: "var(--bgColor-accent-emphasis)",
            }}
          />
          <span style={{ fontWeight: 600 }}>{system.name}/product</span>
        </Header.Item>
        <Header.Item full>
          <input
            type="search"
            placeholder="저장소 검색"
            aria-label="저장소 검색"
            style={{
              width: "min(220px, 40vw)",
              borderRadius: "6px",
              border: "1px solid var(--borderColor-default)",
              background: "var(--bgColor-default)",
              color: "var(--fgColor-default)",
              padding: "5px 10px",
              fontSize: "14px",
            }}
          />
        </Header.Item>
        {/* 알림, 뱃지에 CounterLabel 겹쳐 안 읽은 개수 표시 */}
        <Header.Item>
          <div style={{ position: "relative" }}>
            <IconButton
              icon={Bell}
              aria-label="알림 3건"
              variant="invisible"
              size="small"
              style={{ color: "var(--fgColor-onEmphasis)" }}
            />
            <span style={{ position: "absolute", top: -4, right: -4 }}>
              <CounterLabel scheme="primary">3</CounterLabel>
            </span>
          </div>
        </Header.Item>
        <Header.Item>
          <Avatar src="https://avatars.githubusercontent.com/u/9919?s=64" size={28} alt="김하늘" />
        </Header.Item>
      </Header>

      <div style={{ flexShrink: 0, paddingInline: "16px", borderBottom: "1px solid var(--borderColor-muted)" }}>
        <UnderlineNav aria-label="저장소 화면">
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

      {/* 내부 스크롤 영역, 다른 네 베이스와 동일 원칙. .pr-scroll은 컨테이너 쿼리 기준점 */}
      <div className="pr-scroll" style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "20px" }}>
        {/* Heading, Text로 Primer 타이포그래피 적용 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
          <Heading as="h2" variant="medium" style={{ color: "var(--fgColor-default)" }}>
            {screen.label}
          </Heading>
          <Text as="p" style={{ margin: 0, fontSize: "14px", color: "var(--fgColor-muted)" }}>{screen.lede}</Text>
        </div>
        <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} issues={issues} onAddIssue={addIssue} />
      </div>
    </div>
    </>
  );
}
