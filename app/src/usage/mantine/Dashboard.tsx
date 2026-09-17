import * as React from "react";
import { ActionIcon, Avatar, Divider, Group, Indicator, NavLink, Stack, Switch, Text, TextInput } from "@mantine/core";
import { Bell, Compass, Home, PlaneTakeoff, Search } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const SCREEN_ICON: Record<string, React.ReactNode> = {
  home: <Home size={16} />,
  explore: <Compass size={16} />,
  booking: <PlaneTakeoff size={16} />,
};

export function MantineUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  const [smartAlerts, setSmartAlerts] = React.useState(true);

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
          <Text fw={600} truncate>{system.name} 트래블</Text>
        </Group>
        <Group gap="0.625rem" wrap="nowrap" style={{ marginInlineStart: "auto" }}>
          <TextInput
            size="xs"
            placeholder="목적지 검색"
            aria-label="목적지 검색"
            leftSection={<Search size={12} />}
            style={{ width: "min(11rem, 40vw)" }}
            visibleFrom="sm"
          />
          <Indicator label="3" size={14} color="danger" offset={3}>
            <ActionIcon variant="subtle" aria-label="알림 3건" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
              <Bell size={16} />
            </ActionIcon>
          </Indicator>
          <Avatar radius="xl" size="1.75rem" color="brand">하</Avatar>
        </Group>
      </Group>

      <div style={{ flex: 1, minWidth: 0, minHeight: 0, display: "flex", overflow: "hidden" }}>
        <Stack gap="0.25rem" py="0.75rem" px="0.5rem" style={{ width: "10.5rem", flexShrink: 0, borderInlineEnd: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)", overflowY: "auto" }} visibleFrom="sm">
          <Text size="0.625rem" fw={700} px="0.5rem" style={{ color: "var(--semantic-fg-neutral-subtlest)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            메뉴
          </Text>
          {SCREENS.map((s) => (
            <NavLink
              key={s.key}
              label={s.label}
              leftSection={SCREEN_ICON[s.key]}
              active={s.key === screenKey}
              color="brand"
              variant="light"
              onClick={ => setScreenKey(s.key)}
              style={{ borderRadius: "var(--semantic-radius-control)" }}
            />
          ))}
          <Divider my="0.5rem" />
          {/* SETTINGS 섹션 구분 표시. 가짜 버튼이 아니라 실제 값 변경 스위치임 */}
          <Text size="0.625rem" fw={700} px="0.5rem" style={{ color: "var(--semantic-fg-neutral-subtlest)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            설정
          </Text>
          <Group justify="space-between" px="0.5rem" wrap="nowrap">
            <Text size="xs">스마트 알림</Text>
            <Switch size="xs" checked={smartAlerts} onChange={(e) => setSmartAlerts(e.currentTarget.checked)} color="brand" />
          </Group>
        </Stack>

        {/* 내부 스크롤 영역, 다른 베이스와 동일 원칙 */}
        <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "1.25rem" }}>
          <Stack gap="0.125rem" mb="1rem">
            <Text fw={600} size="lg">{screen.label}</Text>
            <Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{screen.lede}</Text>
          </Stack>
          <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
        </div>
      </div>
    </div>
  );
}
