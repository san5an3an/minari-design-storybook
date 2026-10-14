"use client";

import * as React from "react";
import { ActionIcon, Box, Indicator } from "@mantine/core";
import { Bell, Boxes, History } from "lucide-react";
import type { SystemDefinition } from "../../../systems/types";
import { AppBarAvatar, MantineMobileShell, SUBTLE, type MobileTab } from "../../mantine/mobile/MantineMobileShell";
import { SCREENS, type ScreenProps } from "../screens";
import { MovementsMobile } from "./MovementsMobile";
import { ProductDetailMobile } from "./ProductDetailMobile";
import { StockMobile } from "./StockMobile";

// 제품 상세 화면과 들어오는 출발 화면 지정. 상세 화면은 탭이 아님
const DETAIL = "detail";
const DETAIL_FROM = "stock";

// 탭바 아이콘 지정. 데스크탑 탭과 같은 Lucide 아이콘 사용함
const TAB_ICON: Record<string, React.ReactNode> = {
  stock: <Boxes size={20} aria-hidden />,
  movements: <History size={20} aria-hidden />,
};

// 화면마다 모바일 전용 화면 연결. 세 화면 모두 표가 있어 전부 따로 만듦
const MOBILE_SCREEN: Partial<Record<string, React.ComponentType<ScreenProps>>> = {
  stock: StockMobile,
  movements: MovementsMobile,
  detail: ProductDetailMobile,
};

export function Mantine3Mobile({
  system, screenKey, onNavigate, selectedId, onSelect,
}: {
  system: SystemDefinition;
  screenKey: string;
  onNavigate: (key: string) => void;
  selectedId: string | undefined;
  onSelect: (id: string) => void;
}) {
  const detail = screenKey === DETAIL;
  const def = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = MOBILE_SCREEN[def.key] ?? def.Screen;
  const tabs: MobileTab[] = SCREENS.filter((s) => s.key !== DETAIL).map((s) => ({ key: s.key, label: s.label, icon: TAB_ICON[s.key] }));

  return (
    <MantineMobileShell
      title={def.label}
      subtitle={`${system.name} 창고지기`}
      onBack={detail ? () => onNavigate(DETAIL_FROM) : undefined}
      trailing={detail ? undefined : (
        <>
          {/* 데스크탑 위 바와 같은 알림 아이콘 표시. 데스크탑에도 누르면 열리는 내용 없음 */}
          <Indicator label="4" size={16} color="warning" offset={8}>
            <ActionIcon size="xl" variant="subtle" color="brand" aria-label="알림 4건" style={{ color: SUBTLE }}>
              <Bell size={20} aria-hidden />
            </ActionIcon>
          </Indicator>
          <AppBarAvatar initial="하" mx="0.375rem" />
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
