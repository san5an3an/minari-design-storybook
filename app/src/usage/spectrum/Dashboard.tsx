import * as React from "react";
import {
  ActionButton, Avatar, Badge, defaultTheme, Divider, Flex, Provider, SearchField, Text, View,
} from "@adobe/react-spectrum";
import Bell from "@spectrum-icons/workflow/Bell";
import Home from "@spectrum-icons/workflow/Home";
import Image from "@spectrum-icons/workflow/Image";
import AssetCheck from "@spectrum-icons/workflow/AssetCheck";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const SCREEN_ICON: Record<string, React.ReactNode> = {
  home: <Home size="S" />,
  assets: <Image size="S" />,
  reviews: <AssetCheck size="S" />,
};

const LAYOUT_CSS = `
.sp1-scroll { container-type: inline-size; container-name: sp1; }
.sp1-g4 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
@container sp1 (min-width: 47rem) {
  .sp1-g4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

export function SpectrumUsage({ system }: UsageDashboardProps) {
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
          height: "max(20rem, calc(100dvh - 9rem))",
          overflow: "hidden",
          border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
        }}
      >
        <Flex
          direction="column"
          gap="size-100"
          UNSAFE_style={{
            width: "11rem", flexShrink: 0, padding: "0.75rem 0.5rem",
            borderInlineEnd: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
            overflowY: "auto",
          }}
        >
          <Flex alignItems="center" gap="size-100" UNSAFE_style={{ padding: "0.375rem 0.5rem 0.75rem" }}>
            <span aria-hidden style={{ width: "1.25rem", height: "1.25rem", borderRadius: "0.25rem", background: "var(--semantic-bg-brand-default)", display: "inline-block" }} />
            <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.875rem" }}>{system.name} 스튜디오</Text>
          </Flex>
          {SCREENS.map((s) => (
            <ActionButton
              key={s.key}
              isQuiet={s.key !== screenKey}
              staticColor={undefined}
              onPress={ => setScreenKey(s.key)}
              UNSAFE_style={{
                justifyContent: "flex-start",
                background: s.key === screenKey ? "var(--semantic-bg-brand-subtle)" : undefined,
                color: s.key === screenKey ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-default)",
              }}
            >
              {SCREEN_ICON[s.key]}
              <Text>{s.label}</Text>
            </ActionButton>
          ))}
          <View flexGrow={1} />
          <View
            backgroundColor="gray-50"
            borderRadius="medium"
            padding="size-150"
            UNSAFE_style={{ backgroundImage: "linear-gradient(135deg, color-mix(in oklch, var(--semantic-bg-brand-strong) 85%, black), var(--semantic-bg-brand-default))", color: "white" }}
          >
            <Text UNSAFE_style={{ fontSize: "0.75rem", fontWeight: 600, display: "block", marginBottom: "0.25rem" }}>더 빠른 리뷰가 필요하신가요?</Text>
            <Text UNSAFE_style={{ fontSize: "0.7rem", opacity: 0.85, display: "block", marginBottom: "0.5rem" }}>자동 태깅 플러그인을 켜보세요.</Text>
            <ActionButton staticColor="white" UNSAFE_style={{ width: "100%" }}>자세히 보기</ActionButton>
          </View>
          <Divider size="S" />
          <Flex alignItems="center" gap="size-100" UNSAFE_style={{ padding: "0.375rem 0.5rem" }}>
            <Avatar src="https://i.pravatar.cc/64?img=47" alt="내 프로필" size={28} />
            <Flex direction="column">
              <Text UNSAFE_style={{ fontSize: "0.8rem", fontWeight: 600 }}>한지우</Text>
              <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>리뷰어</Text>
            </Flex>
          </Flex>
        </Flex>

        <div style={{ flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            UNSAFE_style={{ padding: "0.625rem 1rem", flexShrink: 0, borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)" }}
          >
            <Flex direction="column" gap="size-25">
              <Text UNSAFE_style={{ fontWeight: 600 }}>{screen.label}</Text>
              <Text UNSAFE_style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>{screen.lede}</Text>
            </Flex>
            <Flex alignItems="center" gap="size-150">
              <SearchField aria-label="자산 검색" placeholder="자산 검색" width="size-2400" />
              <Badge variant="negative">3</Badge>
              <ActionButton isQuiet aria-label="알림"><Bell /></ActionButton>
            </Flex>
          </Flex>
          {/* sp1-scroll 컨테이너 쿼리 기준점. div 폭이 측정 기준폭 */}
          <div className="sp1-scroll" style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "1.25rem" }}>
            <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
          </div>
        </div>
      </div>
    </Provider>
  );
}
