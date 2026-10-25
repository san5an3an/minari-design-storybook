"use client";

import * as React from "react";
import { ActionIcon, Box, Divider, Indicator, Popover, Stack, Switch, Text } from "@mantine/core";
import { Bell, Compass, Home } from "lucide-react";
import type { SystemDefinition } from "../../../systems/types";
import { DEFAULT_PASSENGER } from "../data";
import { SCREENS, type ScreenProps } from "../screens";
import { HomeMobile } from "./HomeMobile";
import { AppBarAvatar, MantineMobileShell, SUBTLE, type MobileTab } from "./MantineMobileShell";

// 예약 상세 화면과 들어오는 출발 화면 지정. 상세 화면은 탭이 아님
const DETAIL = "booking";
const DETAIL_FROM = "explore";

// 탭바 아이콘 지정. 데스크탑 사이드바와 같은 Lucide 아이콘 사용함
const TAB_ICON: Record<string, React.ReactNode> = {
  home: <Home size={20} aria-hidden />,
  explore: <Compass size={20} aria-hidden />,
};

// 모바일 전용 화면 연결. 목록에 없는 화면은 데스크탑 화면을 그대로 표시함
const MOBILE_SCREEN: Partial<Record<string, React.ComponentType<ScreenProps>>> = {
  home: HomeMobile,
};

export function MantineMobile({
  system, screenKey, onNavigate, selectedId, onSelect, smartAlerts, onSmartAlertsChange,
}: {
  system: SystemDefinition;
  screenKey: string;
  onNavigate: (key: string) => void;
  selectedId: string | undefined;
  onSelect: (id: string) => void;
  smartAlerts: boolean;
  onSmartAlertsChange: (on: boolean) => void;
}) {
  const detail = screenKey === DETAIL;
  const def = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = MOBILE_SCREEN[def.key] ?? def.Screen;
  const tabs: MobileTab[] = SCREENS.filter((s) => s.key !== DETAIL).map((s) => ({ key: s.key, label: s.label, icon: TAB_ICON[s.key] }));

  return (
    <MantineMobileShell
      title={def.label}
      subtitle={`${system.name} 트래블`}
      onBack={detail ? () => onNavigate(DETAIL_FROM) : undefined}
      trailing={detail ? undefined : (
        <>
          {/* 데스크탑 위 바와 같은 알림 종 표시. 데스크탑에도 누르면 열리는 내용 없음 */}
          <Indicator label="3" size={16} color="danger" offset={8}>
            <ActionIcon size="xl" variant="subtle" color="brand" aria-label="알림 3건" style={{ color: SUBTLE }}>
              <Bell size={20} aria-hidden />
            </ActionIcon>
          </Indicator>
          {/* trapFocus 적용. Mantine Popover 는 초점이 안에 있을 때만 Escape 로 닫힘 */}
          <Popover position="bottom-end" width="16rem" shadow="md" trapFocus>
            <Popover.Target>
              <ActionIcon size="xl" variant="subtle" color="brand" radius="xl" aria-label="계정 · 설정">
                <AppBarAvatar initial="하" />
              </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
              <Stack gap="0.5rem">
                <Box>
                  <Text size="sm" fw={600}>{DEFAULT_PASSENGER.name}</Text>
                  <Text size="xs" style={{ color: SUBTLE }}>{DEFAULT_PASSENGER.email}</Text>
                </Box>
                <Divider />
                <Text size="xs" fw={700} style={{ color: "var(--semantic-fg-neutral-subtlest)", textTransform: "uppercase", letterSpacing: "0.04em" }}>설정</Text>
                <Switch
                  label="스마트 알림"
                  labelPosition="left"
                  color="brand"
                  checked={smartAlerts}
                  onChange={(e) => onSmartAlertsChange(e.currentTarget.checked)}
                  styles={{ body: { justifyContent: "space-between" }, labelWrapper: { flex: 1 } }}
                />
              </Stack>
            </Popover.Dropdown>
          </Popover>
        </>
      )}
      tabs={tabs}
      activeKey={detail ? DETAIL_FROM : def.key}
      onSelect={onNavigate}
      scrollKeys={[screenKey, selectedId]}
    >
      <Box p="1rem">
        <Screen onNavigate={onNavigate} selectedId={selectedId} onSelect={onSelect} />
      </Box>
    </MantineMobileShell>
  );
}
