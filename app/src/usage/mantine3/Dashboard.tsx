import * as React from "react";
import { ActionIcon, Avatar, Box, Group, Indicator, Tabs, Text, TextInput } from "@mantine/core";
import { Boxes, History, Info, Search } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const SCREEN_ICON: Record<string, React.ReactNode> = {
  stock: <Boxes size={14} />,
  movements: <History size={14} />,
  detail: <Info size={14} />,
};

export function MantineUsage3({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);

  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

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
      {/* 상단바를 검색, 알림, 아바타와 유저 블록으로 구성 */}
      <Group
        justify="space-between"
        wrap="nowrap"
        gap="0.75rem"
        px="1rem"
        py="0.625rem"
        style={{ flexShrink: 0, borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)" }}
      >
        <Group gap="0.625rem" wrap="nowrap">
          <span aria-hidden style={{ width: "1.25rem", height: "1.25rem", borderRadius: "0.25rem", background: "var(--semantic-bg-brand-default)", display: "inline-block" }} />
          <Text fw={600} truncate>{system.name} 창고지기</Text>
        </Group>
        <Group gap="0.625rem" wrap="nowrap" style={{ marginInlineStart: "auto" }}>
          <TextInput size="xs" placeholder="제품·SKU 검색" aria-label="제품 검색" leftSection={<Search size={12} />} style={{ width: "min(11rem, 40vw)" }} visibleFrom="sm" />
          <Indicator label="4" size={14} color="warning" offset={3}>
            <ActionIcon variant="subtle" aria-label="알림 4건" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
              <Boxes size={16} />
            </ActionIcon>
          </Indicator>
          <Group gap="0.5rem" wrap="nowrap" pl="0.5rem" style={{ borderInlineStart: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)" }}>
            <Avatar radius="xl" size="1.75rem" color="brand">하</Avatar>
            <Box visibleFrom="sm" style={{ lineHeight: 1.2 }}>
              <Text size="xs" fw={600}>하늘 매니저</Text>
              <Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>물류팀</Text>
            </Box>
          </Group>
        </Group>
      </Group>

      <div style={{ flexShrink: 0, paddingInline: "1rem", paddingTop: "0.625rem" }}>
        <Tabs value={screenKey} onChange={(v) => setScreenKey(v ?? SCREENS[0].key)} color="brand">
          <Tabs.List>
            {SCREENS.map((s) => (
              <Tabs.Tab key={s.key} value={s.key} leftSection={SCREEN_ICON[s.key]}>{s.label}</Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </div>

      <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "1.25rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <Text fw={600} size="lg">{screen.label}</Text>
          <Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{screen.lede}</Text>
        </div>
        <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
      </div>
    </div>
  );
}
