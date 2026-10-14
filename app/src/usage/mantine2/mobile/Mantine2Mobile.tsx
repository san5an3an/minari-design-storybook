"use client";

import * as React from "react";
import { ActionIcon, Box, Indicator } from "@mantine/core";
import { Bell, CalendarDays, IdCard, Users } from "lucide-react";
import type { SystemDefinition } from "../../../systems/types";
import { AppBarAvatar, MantineMobileShell, SUBTLE, type MobileTab } from "../../mantine/mobile/MantineMobileShell";
import { SCREENS, type ScreenProps } from "../screens";
import { AttendeesMobile } from "./AttendeesMobile";

// 탭바 아이콘 지정. 데스크탑 사이드바와 같은 Lucide 아이콘 사용함
const TAB_ICON: Record<string, React.ReactNode> = {
  events: <CalendarDays size={20} aria-hidden />,
  attendees: <Users size={20} aria-hidden />,
  detail: <IdCard size={20} aria-hidden />,
};

// 모바일 전용 화면 연결. 목록에 없는 화면은 데스크탑 화면을 그대로 표시함
const MOBILE_SCREEN: Partial<Record<string, React.ComponentType<ScreenProps>>> = {
  attendees: AttendeesMobile,
};

export function Mantine2Mobile({
  system, screenKey, onNavigate, selectedId, onSelect,
}: {
  system: SystemDefinition;
  screenKey: string;
  onNavigate: (key: string) => void;
  selectedId: string | undefined;
  onSelect: (id: string) => void;
}) {
  const def = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = MOBILE_SCREEN[def.key] ?? def.Screen;
  const tabs: MobileTab[] = SCREENS.map((s) => ({ key: s.key, label: s.label, icon: TAB_ICON[s.key] }));

  return (
    <MantineMobileShell
      title={def.label}
      subtitle={`${system.name} 모임판`}
      trailing={(
        <>
          {/* 데스크탑 위 바와 같은 알림 아이콘 표시. 데스크탑에도 누르면 열리는 내용 없음 */}
          <Indicator label="2" size={16} color="danger" offset={8}>
            <ActionIcon size="xl" variant="subtle" color="brand" aria-label="알림 2건" style={{ color: SUBTLE }}>
              <Bell size={20} aria-hidden />
            </ActionIcon>
          </Indicator>
          <AppBarAvatar initial="하" mx="0.375rem" />
        </>
      )}
      tabs={tabs}
      activeKey={def.key}
      onSelect={onNavigate}
      scrollKeys={[screenKey, selectedId]}
    >
      <Box p="1rem">
        <Screen onNavigate={onNavigate} selectedId={selectedId} onSelect={onSelect} />
      </Box>
    </MantineMobileShell>
  );
}
