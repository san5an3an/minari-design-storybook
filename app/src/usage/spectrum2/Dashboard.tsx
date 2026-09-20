import * as React from "react";
import { ActionButton, Flex, Provider, SearchField, Text, defaultTheme } from "@adobe/react-spectrum";
import { Bell, Download } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { COLOR_TOKENS, OPEN_ISSUES, WCAG_AA_NORMAL } from "./data";
import { SCREENS } from "./screens";
import { Pill, Spectrum2Styles } from "./ui";

export function Spectrum2Usage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  const [query, setQuery] = React.useState("");

  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const failing = COLOR_TOKENS.filter((t) => t.contrastOnWhite < WCAG_AA_NORMAL).length;
  const TAB_COUNT: Record<string, { n: number; tone: "brand" | "danger" | "neutral" }> = {
    palette: { n: COLOR_TOKENS.length, tone: "brand" },
    detail: { n: 0, tone: "neutral" },
    accessibility: { n: failing, tone: "danger" },
  };

  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "max(20rem, calc(100dvh - 9rem))",
          overflow: "hidden",
          border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
          background: "var(--semantic-bg-neutral-subtlest)",
        }}
      >
        {/* 앱 헤더, 브랜드마크, 검색, 알림, 사용자로 구성 */}
        <Flex
          alignItems="center"
          gap="size-150"
          UNSAFE_style={{
            padding: "0.6rem 1rem",
            flexShrink: 0,
            background: "var(--semantic-bg-neutral-surface)",
            borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          <Flex alignItems="center" gap="size-100" UNSAFE_style={{ minWidth: 0 }}>
            <span
              aria-hidden
              style={{
                width: "1.5rem", height: "1.5rem", borderRadius: "0.45rem", flexShrink: 0,
                background: "var(--semantic-bg-brand-default)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                color: "var(--semantic-fg-on-brand-default)", fontSize: "0.7rem", fontWeight: 700,
              }}
            >
              {system.name.slice(0, 1)}
            </span>
            <Text UNSAFE_style={{ fontWeight: 700, fontSize: "0.9rem", whiteSpace: "nowrap" }}>{system.name} 컬러 시스템</Text>
            <Pill tone="neutral">v2.4.1</Pill>
          </Flex>

          <div style={{ flex: 1, minWidth: 0, display: "flex", justifyContent: "center" }}>
            <SearchField
              aria-label="토큰 검색"
              placeholder="토큰명·해시·담당자로 검색"
              value={query}
              onChange={setQuery}
              width="100%"
              maxWidth="size-3600"
            />
          </div>

          <Flex alignItems="center" gap="size-150" UNSAFE_style={{ flexShrink: 0 }}>
            <span style={{ position: "relative", display: "inline-flex", color: "var(--semantic-fg-neutral-subtle)" }}>
              <Bell size={17} aria-hidden />
              <span
                aria-label={`읽지 않은 알림 ${OPEN_ISSUES.length}건`}
                style={{
                  position: "absolute", top: "-0.3rem", insetInlineEnd: "-0.4rem",
                  minWidth: "0.95rem", height: "0.95rem", padding: "0 0.2rem",
                  borderRadius: "var(--semantic-radius-pill)",
                  background: "var(--semantic-bg-danger-default)", color: "var(--semantic-fg-on-danger-default)",
                  fontSize: "0.6rem", fontWeight: 700,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}
              >
                {OPEN_ISSUES.length}
              </span>
            </span>
            <Flex alignItems="center" gap="size-100">
              <img
                src="https://i.pravatar.cc/64?u=jiwoo"
                alt=""
                style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%", objectFit: "cover" }}
              />
              <Flex direction="column" UNSAFE_style={{ lineHeight: 1.15 }}>
                <Text UNSAFE_style={{ fontSize: "0.75rem", fontWeight: 600 }}>한지우</Text>
                <Text UNSAFE_style={{ fontSize: "0.65rem", color: "var(--semantic-fg-neutral-subtle)" }}>디자인 시스템 리드</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* 탭 행: 건수 배지, 마지막 동기화, 내보내기 */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          wrap
          gap="size-150"
          UNSAFE_style={{
            padding: "0.5rem 1rem",
            flexShrink: 0,
            background: "var(--semantic-bg-neutral-surface)",
            borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          <Flex gap="size-75" wrap>
            {SCREENS.map((s) => {
              const isActive = s.key === screenKey;
              const count = TAB_COUNT[s.key];
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={ => setScreenKey(s.key)}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    padding: "0.3rem 0.7rem",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "var(--semantic-radius-pill)",
                    background: isActive ? "var(--semantic-bg-brand-subtle)" : "transparent",
                    color: isActive ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-subtle)",
                    fontSize: "0.8rem",
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: "inherit",
                  }}
                >
                  {s.label}
                  {count && count.n > 0 ? (
                    <span
                      style={{
                        minWidth: "1.1rem", padding: "0 0.3rem",
                        borderRadius: "var(--semantic-radius-pill)",
                        fontSize: "0.65rem", fontWeight: 700,
                        background: count.tone === "danger" ? "var(--semantic-bg-danger-subtle)" : "var(--semantic-bg-neutral-subtle)",
                        color: count.tone === "danger" ? "var(--semantic-fg-danger-default)" : "var(--semantic-fg-neutral-subtle)",
                      }}
                    >
                      {count.n}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </Flex>
          <Flex alignItems="center" gap="size-150" wrap>
            <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>마지막 동기화 08:41 · main@a7f31c9</Text>
            <ActionButton isQuiet>
              <Download size={14} aria-hidden style={{ marginInlineEnd: "0.3rem" }} />
              <Text>내보내기</Text>
            </ActionButton>
          </Flex>
        </Flex>

        {/* container-type: inline-size 지정. 뷰포트 대신 프레임 폭이 접힘 기준임 */}
        <div
          style={{
            flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "0.875rem",
            containerType: "inline-size", containerName: "s2",
          }}
        >
          <Spectrum2Styles />
          <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} query={query} />
        </div>
      </div>
    </Provider>
  );
}
