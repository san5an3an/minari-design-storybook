"use client";
import * as React from "react";
import { CirclePlus } from "lucide-react";
import { Button } from "../../../bases/shadcn/Button";
import { Menu } from "../../../bases/shadcn/Menu";
import type { SystemDefinition } from "../../../systems/types";
import { SCREENS } from "../screens";
import { MobileShell, TOUCH, type MobileTab } from "./MobileShell";

// 아이콘 버튼 크기 지정. 밀도 토큰이 작아도 누름 영역 44px 을 확보하기 위함
const ICON_BUTTON = { minWidth: TOUCH, minHeight: TOUCH, padding: 0 } as const;

// 탭 바에 표시할 화면 필터링. 데스크탑 사이드바처럼 fullBleed 화면은 제외함
const NAV_SCREENS = SCREENS.filter((s) => !s.fullBleed);

export function ShadcnMobile({ system, screenKey, onNavigate, icons, avatar, accountItems }: {
  system: SystemDefinition;
  screenKey: string;
  onNavigate: (key: string) => void;
  icons: Record<string, React.ReactNode>;
  // 계정 메뉴를 여는 버튼 안에 넣을 아바타 지정
  avatar: React.ReactNode;
  accountItems: React.ComponentProps<typeof Menu>["items"];
}) {
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.MobileScreen ?? screen.Screen;

  // 로그인 화면은 앱 바, 탭 바 없이 표시. 돌아갈 길은 화면 안의 로그인 버튼뿐임
  if (screen.fullBleed) {
    return (
      <MobileShell bare>
        <Screen onNavigate={onNavigate} brand={system.name} />
      </MobileShell>
    );
  }

  const tabs: MobileTab[] = NAV_SCREENS.map((s) => ({ key: s.key, label: s.label, icon: icons[s.key] }));

  return (
    <MobileShell
      title={screen.label}
      subtitle={`shadcn-ui/ui · ${screen.source}`}
      tabs={tabs}
      activeKey={screenKey}
      onSelect={onNavigate}
      trailing={
        <>
          <Button variant="solid" tone="brand" aria-label="빠른 만들기" style={ICON_BUTTON}>
            <CirclePlus size={18} aria-hidden />
          </Button>
          <Menu
            side="bottom"
            align="end"
            minWidth="14rem"
            trigger={
              <Button variant="plain" aria-label="계정 메뉴" style={ICON_BUTTON}>
                {avatar}
              </Button>
            }
            items={accountItems}
          />
        </>
      }
    >
      {/* 데스크탑 본문과 같은 Padding 적용 */}
      <div className="p-(--semantic-space-md)">
        <Screen onNavigate={onNavigate} brand={system.name} />
      </div>
    </MobileShell>
  );
}
