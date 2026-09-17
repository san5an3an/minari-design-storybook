import * as React from "react";
import { ActionIcon, Avatar, Divider, Group, Indicator, NavLink, Stack, Text, TextInput } from "@mantine/core";
import { CalendarDays, IdCard, Search, Settings, Users } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { ATTENDEES, EVENTS } from "./data";
import { SCREENS } from "./screens";

const NAV_ICON: Record<string, React.ReactNode> = {
  events: <CalendarDays size={16} />,
  attendees: <Users size={16} />,
  detail: <IdCard size={16} />,
};

const NAV_COUNT: Partial<Record<string, number>> = {
  events: EVENTS.filter((e) => e.status !== "종료").length,
  attendees: ATTENDEES.filter((a) => a.status !== "취소").length,
};

export function MantineUsage2({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(EVENTS[0].id);

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
          <Text fw={600} truncate>{system.name} 모임판</Text>
        </Group>
        <Group gap="0.625rem" wrap="nowrap" style={{ marginInlineStart: "auto" }}>
          <TextInput size="xs" placeholder="이벤트 검색" aria-label="이벤트 검색" leftSection={<Search size={12} />} style={{ width: "min(11rem, 40vw)" }} visibleFrom="sm" />
          <Indicator label="2" size={14} color="danger" offset={3}>
            <ActionIcon variant="subtle" aria-label="알림 2건" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
              <Settings size={16} />
            </ActionIcon>
          </Indicator>
          <Avatar radius="xl" size="1.75rem" color="brand">하</Avatar>
        </Group>
      </Group>

      <div style={{ flex: 1, minWidth: 0, minHeight: 0, display: "flex", overflow: "hidden" }}>
        <Stack gap="0.25rem" py="0.75rem" px="0.5rem" style={{ width: "10rem", flexShrink: 0, borderInlineEnd: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)", overflowY: "auto" }} visibleFrom="sm">
          <Text size="0.625rem" fw={700} px="0.5rem" style={{ color: "var(--semantic-fg-neutral-subtlest)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            운영
          </Text>
          {SCREENS.filter((s) => s.key !== "detail").map((s) => (
            <NavLink
              key={s.key}
              label={s.label}
              leftSection={NAV_ICON[s.key]}
              rightSection={NAV_COUNT[s.key] !== undefined ? <Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{NAV_COUNT[s.key]}</Text> : undefined}
              active={s.key === screenKey}
              color="brand"
              variant="light"
              onClick={ => setScreenKey(s.key)}
              style={{ borderRadius: "var(--semantic-radius-control)" }}
            />
          ))}
          <Divider my="0.5rem" />
          <Text size="0.625rem" fw={700} px="0.5rem" style={{ color: "var(--semantic-fg-neutral-subtlest)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            구성
          </Text>
          {SCREENS.filter((s) => s.key === "detail").map((s) => (
            <NavLink
              key={s.key}
              label={s.label}
              leftSection={NAV_ICON[s.key]}
              active={s.key === screenKey}
              color="brand"
              variant="light"
              onClick={ => setScreenKey(s.key)}
              style={{ borderRadius: "var(--semantic-radius-control)" }}
            />
          ))}
        </Stack>

        <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "1.25rem" }}>
          {screenKey !== "events" ? (
            <Stack gap="0.125rem" mb="1rem">
              <Text fw={600} size="lg">{screen.label}</Text>
              <Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{screen.lede}</Text>
            </Stack>
          ) : null}
          <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
        </div>
      </div>
    </div>
  );
}
