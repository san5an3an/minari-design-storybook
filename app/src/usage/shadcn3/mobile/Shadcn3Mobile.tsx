"use client";
import * as React from "react";
import { Bell, ChevronLeft, CirclePlus, HeartPulse, Settings2 } from "lucide-react";
import { Avatar } from "../../../bases/shadcn/Avatar";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { Menu } from "../../../bases/shadcn/Menu";
import { Popover } from "../../../bases/shadcn/Popover";
import type { SystemDefinition } from "../../../systems/types";
import { MobileShell, TOUCH, type MobileTab } from "../../shadcn/mobile/MobileShell";
import type { Transaction } from "../data";
import { SCREENS } from "../screens";
import { AddTransactionSheet } from "./AddTransactionSheet";
import { urgentCategories } from "./derive";

// 아이콘 버튼 최소 크기 지정. 밀도 토큰이 작아도 터치 영역 44px을 확보하기 위함
const ICON_BUTTON = { minWidth: TOUCH, minHeight: TOUCH, padding: 0 } as const;

// 탭바에 표시할 화면 목록 정의. 거래 상세 화면은 탭에서 제외함
const NAV_SCREENS = SCREENS.filter((s) => s.key !== "detail");

// Progress 트랙이 둘일 때 두 번째 트랙 숨김 처리. 어댑터와 shadcn 루트가 트랙을 하나씩 그려 막대가 두 줄로 보이는 문제 있음
const BAR_CSS = `
[data-slot="usage-mobile-shell"] [data-slot="progress"] > [data-slot="progress-track"] ~ [data-slot="progress-track"] {
  display: none;
}
`;

interface User { name: string; email: string; initial: string }

// 앱 바의 알림 벨 표시. 예산 70% 이상 쓴 분류를 배지 수와 Popover 목록으로 보여줌
function AlertBell({ transactions }: { transactions: Transaction[] }) {
  const urgent = urgentCategories(transactions);
  return (
    <Popover
      title="예산 알림"
      side="bottom"
      align="end"
      trigger={
        <Button variant="plain" aria-label={urgent.length > 0 ? `알림 ${urgent.length}건` : "알림"} style={{ ...ICON_BUTTON, position: "relative" }}>
          <Bell size={20} aria-hidden />
          {urgent.length > 0 ? (
            <Badge variant="solid" tone="danger" className="pointer-events-none absolute right-1 top-1 h-4 min-w-4 px-1 text-[0.625rem] tabular-nums">
              {urgent.length}
            </Badge>
          ) : null}
        </Button>
      }
    >
      <div className="flex flex-col gap-(--semantic-space-sm)" style={{ minWidth: "14rem" }}>
        {urgent.length === 0 ? (
          <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>예산 초과·임박 카테고리가 없어요.</span>
        ) : urgent.map((u) => (
          <div key={u.category} className="flex items-center justify-between gap-(--semantic-space-sm)">
            <span style={{ fontSize: "var(--semantic-text-body-sm)" }}>{u.category}</span>
            <span style={{ color: u.pct >= 100 ? "var(--semantic-fg-danger-default)" : "var(--semantic-fg-warning-default)", fontSize: "var(--semantic-text-body-sm)" }}>{u.pct}%</span>
          </div>
        ))}
      </div>
    </Popover>
  );
}

export function Shadcn3Mobile({
  system, screenKey, selectedId, transactions, query, icons, user, heroImage, greeting, statRow,
  onNavigate, onOpen, onBack, onAdd, onQueryChange,
}: {
  system: SystemDefinition;
  screenKey: string;
  // 선택한 거래 지정. 값이 있으면 상세 화면을 표시함
  selectedId: string | null;
  transactions: Transaction[];
  query: string;
  icons: Record<string, React.ReactNode>;
  user: User;
  heroImage: string;
  greeting: string;
  // 지표 격자 제공. 개요 화면에만 표시함
  statRow: React.ReactNode;
  // 탭바 화면 전환 처리. 열려 있던 상세 화면은 해제함
  onNavigate: (key: string) => void;
  // 거래 상세 또는 다른 화면으로 이동 처리
  onOpen: (key: string, id: string) => void;
  // 상세 화면에서 원래 탭으로 복귀 처리
  onBack: () => void;
  onAdd: (t: Transaction) => void;
  onQueryChange: (q: string) => void;
}) {
  const detail = selectedId !== null;
  const def = SCREENS.find((s) => s.key === (detail ? "detail" : screenKey)) ?? SCREENS[0];
  const Screen = def.MobileScreen ?? def.Screen;

  const methods = React.useMemo(() => Array.from(new Set(transactions.map((t) => t.method))), [transactions]);
  const tabs: MobileTab[] = NAV_SCREENS.map((s) => ({ key: s.key, label: s.label, icon: icons[s.key] }));

  return (
    <MobileShell
      title={detail ? "거래 상세" : def.label}
      scrollKey={selectedId ?? ""}
      subtitle={`가계부 · ${system.name}`}
      leading={detail ? (
        <Button variant="plain" aria-label="뒤로 가기" onClick={onBack} style={ICON_BUTTON}>
          <ChevronLeft size={24} aria-hidden />
        </Button>
      ) : undefined}
      trailing={detail ? undefined : (
        <>
          <AddTransactionSheet
            onAdd={onAdd}
            methods={methods}
            trigger={
              <Button variant="solid" tone="brand" aria-label="거래 추가" style={ICON_BUTTON}>
                <CirclePlus size={20} aria-hidden />
              </Button>
            }
          />
          <AlertBell transactions={transactions} />
          <Menu
            side="bottom"
            align="end"
            minWidth="14rem"
            trigger={
              <Button variant="plain" aria-label="계정 메뉴" style={ICON_BUTTON}>
                <Avatar size="sm" fallback={user.initial} />
              </Button>
            }
            items={[
              { heading: <span className="flex flex-col px-(--semantic-space-xs) py-(--semantic-space-xs)"><span style={{ fontSize: "var(--semantic-text-body-sm)" }}>{user.name}</span><span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>{user.email}</span></span> },
              { separator: true },
              { label: <span className="flex items-center gap-(--semantic-space-sm)"><Settings2 size={14} aria-hidden />설정</span> },
              { label: <span className="flex items-center gap-(--semantic-space-sm)"><HeartPulse size={14} aria-hidden />예산 목표 관리</span>, onSelect: () => onNavigate("budget") },
            ]}
          />
        </>
      )}
      tabs={tabs}
      activeKey={screenKey}
      onSelect={onNavigate}
    >
      <div>
        <style>{BAR_CSS}</style>
        <Screen
          itemId={selectedId ?? undefined}
          onOpen={onOpen}
          transactions={transactions}
          onAdd={onAdd}
          query={query}
          heroImage={heroImage}
          greeting={greeting}
          userName={user.name}
          statRow={statRow}
          onQueryChange={onQueryChange}
        />
      </div>
    </MobileShell>
  );
}
