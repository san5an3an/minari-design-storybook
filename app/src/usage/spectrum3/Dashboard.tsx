import * as React from "react";
import { ActionButton, Avatar, defaultTheme, Flex, Provider, SearchField, Text } from "@adobe/react-spectrum";
import Home from "@spectrum-icons/workflow/Home";
import Folder from "@spectrum-icons/workflow/Folder";
import UserGroup from "@spectrum-icons/workflow/UserGroup";
import { Bell } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { PROJECTS, TEAM } from "./data";
import { SCREENS } from "./screens";

const SCREEN_ICON: Record<string, React.ReactNode> = {
  home: <Home size="S" />,
  project: <Folder size="S" />,
  team: <UserGroup size="S" />,
};

// 내비 항목 옆 건수 배지 표시
const SCREEN_COUNT: Record<string, number> = {
  home: PROJECTS.filter((p) => p.status !== "완료").length,
  project: PROJECTS.reduce((sum, p) => sum + p.openIssues, 0),
  team: TEAM.length,
};

const LAYOUT_CSS = `
.sp3-scroll { container-type: inline-size; container-name: sp3; }

.sp3-split { display: grid; grid-template-columns: minmax(0, 1fr) 14rem; gap: 1rem; align-items: start; }
.sp3-col { display: grid; gap: 1rem; min-width: 0; align-content: start; }
.sp3-g2 { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
.sp3-g22 { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
.sp3-g3 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.sp3-g4 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }

// 본문이 2열 최소치(368px) 미만 폭일 때만 레일 아래 배치
@container sp3 (max-width: 38rem) {
  .sp3-split { grid-template-columns: minmax(0, 1fr); }
}
@container sp3 (max-width: 26rem) {
  .sp3-g3, .sp3-g4 { grid-template-columns: minmax(0, 1fr); }
}

// 화면 확장 시 카드 3열, 차트 나란히, 통계 4열 순으로 적용
@container sp3 (min-width: 50rem) {
  .sp3-g3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@container sp3 (min-width: 56rem) {
  .sp3-g2, .sp3-g22 { grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); }
}
@container sp3 (min-width: 62rem) {
  .sp3-g4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

export function Spectrum3Usage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);

  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <Provider theme={defaultTheme} colorScheme="light">
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
        <Flex
          alignItems="center"
          gap="size-150"
          wrap
          UNSAFE_style={{
            padding: "0.6rem 1rem", flexShrink: 0,
            borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
            background: "var(--semantic-bg-neutral-surface)",
          }}
        >
          <Flex
            alignItems="center"
            gap="size-100"
            UNSAFE_style={{
              flex: "0 0 auto",
              paddingInlineEnd: "1rem", marginInlineEnd: "0.25rem",
              borderInlineEnd: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
            }}
          >
            <span aria-hidden style={{ width: "1.25rem", height: "1.25rem", borderRadius: "0.25rem", background: "var(--semantic-bg-brand-default)", display: "inline-block" }} />
            <Text UNSAFE_style={{ fontWeight: 700, fontSize: "0.85rem", whiteSpace: "nowrap" }}>{system.name} 보드</Text>
          </Flex>

          {/* 탭이 넘치면 라벨을 자르지 않고 가로 스크롤 처리. wrap 대신 overflow-x 사용 */}
          <div
            style={{
              display: "flex", alignItems: "center", gap: "0.25rem",
              flex: "1 1 auto", minWidth: 0,
              overflowX: "auto", flexWrap: "nowrap", scrollbarWidth: "thin",
            }}
          >
            {SCREENS.map((s) => {
              const active = s.key === screenKey;
              return (
                <ActionButton
                  key={s.key}
                  isQuiet={!active}
                  onPress={ => setScreenKey(s.key)}
                  UNSAFE_style={{
                    background: active ? "var(--semantic-bg-brand-subtle)" : undefined,
                    color: active ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-default)",
                    borderRadius: "var(--semantic-radius-pill)",
                  }}
                >
                  {SCREEN_ICON[s.key]}
                  <Text UNSAFE_style={{ flex: "0 1 auto", whiteSpace: "nowrap" }}>{s.label}</Text>
                  {/* Spectrum Text 금지, 버튼 내 여백 다 차지해 배지가 회색 막대로 보임 */}
                  <span
                    style={{
                      flex: "0 0 auto", width: "fit-content", textAlign: "center",
                      marginInlineStart: "0.35rem",
                      fontSize: "0.65rem", fontWeight: 700, lineHeight: 1.6,
                      padding: "0 0.35rem",
                      borderRadius: "var(--semantic-radius-pill)",
                      background: active ? "var(--semantic-bg-brand-default)" : "var(--semantic-bg-neutral-subtle)",
                      color: active ? "var(--semantic-fg-on-brand-default)" : "var(--semantic-fg-neutral-subtle)",
                    }}
                  >
                    {SCREEN_COUNT[s.key]}
                  </span>
                </ActionButton>
              );
            })}
          </div>

          <Flex alignItems="center" gap="size-100" UNSAFE_style={{ flexShrink: 0 }}>
            <SearchField aria-label="프로젝트·이슈 검색" placeholder="검색" width="size-1700" />
            <div style={{ position: "relative", display: "inline-flex" }}>
              <ActionButton isQuiet aria-label="알림 3건">
                <Bell size={16} />
              </ActionButton>
              <span
                aria-hidden
                style={{
                  position: "absolute", top: "0.15rem", insetInlineEnd: "0.15rem",
                  minWidth: "0.9rem", height: "0.9rem", padding: "0 0.2rem",
                  borderRadius: "var(--semantic-radius-pill)",
                  background: "var(--semantic-bg-danger-default)", color: "var(--semantic-fg-on-danger-default)",
                  fontSize: "0.6rem", fontWeight: 700, lineHeight: "0.9rem", textAlign: "center",
                }}
              >
                3
              </span>
            </div>
            <Flex alignItems="center" gap="size-75">
              <Avatar src="https://i.pravatar.cc/64?img=12" alt="내 프로필" size={28} />
              <Flex direction="column" gap="size-0" UNSAFE_style={{ minWidth: 0 }}>
                <Text UNSAFE_style={{ fontSize: "0.72rem", fontWeight: 600, whiteSpace: "nowrap" }}>한지우</Text>
                <Text UNSAFE_style={{ fontSize: "0.62rem", color: "var(--semantic-fg-neutral-subtle)", whiteSpace: "nowrap" }}>PM</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap="size-150"
          wrap
          UNSAFE_style={{
            padding: "0.55rem 1rem", flexShrink: 0,
            borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
            background: "var(--semantic-bg-neutral-surface)",
          }}
        >
          <Flex direction="column" gap="size-0" UNSAFE_style={{ minWidth: 0 }}>
            <Text UNSAFE_style={{ fontWeight: 700, fontSize: "0.92rem" }}>{screen.label}</Text>
            <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>{screen.lede}</Text>
          </Flex>
          {/* 히어로와 중복되는 Sprint 칩 제외, 기간만 표시 */}
          <Text UNSAFE_style={{ fontSize: "0.68rem", color: "var(--semantic-fg-neutral-subtle)", whiteSpace: "nowrap", flexShrink: 0 }}>
            Sprint 25 · 09-16 → 09-29
          </Text>
        </Flex>

        {/* sp3-scroll 컨테이너 쿼리 기준점. div 폭이 측정 기준폭 */}
        <div
          className="sp3-scroll"
          style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "1rem", background: "var(--semantic-bg-neutral-subtlest)" }}
        >
          <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
        </div>
      </div>
    </Provider>
  );
}
