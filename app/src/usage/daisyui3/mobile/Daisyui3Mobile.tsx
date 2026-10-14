"use client";

import * as React from "react";
import { Flame, History, Newspaper } from "lucide-react";
import type { SystemDefinition } from "../../../systems/types";
import { DaisyuiMobileShell, type DockTab } from "../../daisyui/mobile/DaisyuiMobileShell";
import { SCREENS } from "../screens";
import { ActivityMobile } from "./ActivityMobile";
import { PostsMobile } from "./PostsMobile";
import { TrendingMobile } from "./TrendingMobile";

const TAB_ICON: Record<string, React.ReactNode> = {
  posts: <Newspaper size={20} aria-hidden />,
  trending: <Flame size={20} aria-hidden />,
  activity: <History size={20} aria-hidden />,
};

const MOBILE_SCREEN: Record<string, React.ComponentType> = {
  posts: PostsMobile,
  trending: TrendingMobile,
  activity: ActivityMobile,
};

// 화면 키는 Dashboard 상태를 props 로 받아 사용. Dashboard.tsx 를 import 하면 순환 import 가 생기므로 금지
export function Daisyui3Mobile({ system, screenKey, onNavigate }: {
  system: SystemDefinition;
  screenKey: string;
  onNavigate: (key: string) => void;
}) {
  const def = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = MOBILE_SCREEN[def.key] ?? def.Screen;
  const tabs: DockTab[] = SCREENS.map((s) => ({ key: s.key, label: s.label, icon: TAB_ICON[s.key] }));

  return (
    <DaisyuiMobileShell title={def.label} subtitle={`${system.name} 커뮤니티`} tabs={tabs} activeKey={def.key} onSelect={onNavigate}>
      {/* 본문 바탕 base-200, 카드 바탕 base-100 지정. 껍데기와 카드 바탕이 같으면 다크 모드에서 카드 가장자리가 안 보이는 문제 있음 */}
      <div className="flex min-h-full flex-col gap-4 bg-base-200 p-4">
        <p className="text-sm opacity-60">{def.lede}</p>
        <Screen />
      </div>
    </DaisyuiMobileShell>
  );
}
