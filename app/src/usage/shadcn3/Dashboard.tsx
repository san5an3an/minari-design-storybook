import * as React from "react";
import {
  Bell, ChevronDown, HeartPulse, LayoutDashboard, ListOrdered, PiggyBank, Search,
  Settings2, TrendingDown, TrendingUp, Wallet,
} from "lucide-react";
import { Avatar } from "../../bases/shadcn/Avatar";
import { Input } from "../../bases/shadcn/Input";
import { Menu } from "../../bases/shadcn/Menu";
import { Popover } from "../../bases/shadcn/Popover";
import { Sidebar } from "../../bases/shadcn/Sidebar";
import type { UsageDashboardProps } from "../registry";
import { useIsWide } from "../shadcn/useIsWide";
import { CATEGORY_BUDGET, MONTHLY_BUDGET, TRANSACTIONS } from "./data";
import type { Transaction } from "./data";
import { Shadcn3Mobile } from "./mobile/Shadcn3Mobile";
import { SCREENS } from "./screens";
import { TransactionDetailScreen } from "./screens/TransactionDetailScreen";

const NAV_SCREENS = SCREENS.filter((s) => s.key !== "detail");
const NAV_ICON: Record<string, React.ReactNode> = {
  overview: <LayoutDashboard size={16} />,
  list: <ListOrdered size={16} />,
  budget: <PiggyBank size={16} />,
};
const USER = { name: "박서연", email: "seoyeon.park@example.com", initial: "박" } as const;

// Unsplash CDN 직링크. SIDEBAR_PROMO_IMAGE 계열, 상업 라이선스
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=70";
const SIDEBAR_PROMO_IMAGE =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=480&q=60";

function SidebarPromo() {
  return (
    <div
      aria-hidden
      className="group-data-[collapsible=icon]:hidden flex flex-col justify-end gap-(--semantic-space-xs) overflow-hidden p-(--semantic-space-sm)"
      style={{
        borderRadius: "var(--semantic-radius-container)",
        minHeight: "6.5rem",
        backgroundImage:
          `linear-gradient(180deg, color-mix(in oklch, var(--semantic-bg-brand-default) 20%, transparent) 0%, ` +
          `color-mix(in oklch, var(--semantic-bg-brand-default) 78%, black) 100%), url("${SIDEBAR_PROMO_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "var(--semantic-text-body-sm)", lineHeight: "var(--semantic-line-height-tight)" }}>
        작은 기록이 쌓여
        <br />
        큰 습관이 돼요.
      </span>
    </div>
  );
}

// usage1의 사이드바 토큰 연결부, 프레임 CSS 그대로 사용
const SIDEBAR_TOKEN_BRIDGE = {
  "--sidebar": "var(--component-sidebar-bg)",
  "--sidebar-foreground": "var(--component-sidebar-fg)",
  "--sidebar-border": "var(--component-sidebar-border)",
  "--sidebar-accent": "var(--component-sidebar-item-bg-hover)",
  "--sidebar-accent-foreground": "var(--component-sidebar-item-fg-active)",
  "--sidebar-primary": "var(--semantic-bg-brand-default)",
  "--sidebar-primary-foreground": "var(--semantic-fg-on-brand-default)",
  "--sidebar-ring": "var(--semantic-border-focus-default)",
  "--sidebar-width": "var(--component-sidebar-width)",
} as React.CSSProperties;

const SHELL = "ods-usage3-shell";
const SHELL_HEIGHT = "max(20rem, calc(100dvh - 9rem))";
const SHELL_CSS = `
.${SHELL} {
  height: ${SHELL_HEIGHT};
}
.${SHELL} [data-slot="sidebar-wrapper"] {
  min-height: 0;
  height: 100%;
}
.${SHELL} [data-slot="sidebar-gap"] { display: none; }
.${SHELL} [data-slot="sidebar"] {
  height: 100%;
  align-self: stretch;
}
.${SHELL} [data-slot="sidebar-container"] {
  position: relative;
  height: 100%;
  border-inline-end: var(--semantic-border-width-default) solid var(--component-sidebar-border);
}
.${SHELL} [data-slot="sidebar-rail"] { z-index: 20; }
.${SHELL} [data-slot="sidebar-inset"] {
  min-height: 0;
  overflow-y: auto;
  container-type: inline-size;
  container-name: sc3;
}

.${SHELL} .sc3-split { display: flex; flex-direction: column; gap: 1rem; }
.${SHELL} .sc3-rail { display: flex; flex-direction: column; gap: 1rem; width: 100%; }
@container sc3 (min-width: 48rem) {
  .${SHELL} .sc3-split { flex-direction: row; }
  .${SHELL} .sc3-rail { width: 18rem; flex: 0 0 auto; }
}

.${SHELL} .sc3-panel { container-type: inline-size; container-name: sc3panel; }
.${SHELL} .sc3-feed { display: flex; flex-direction: column; gap: 1rem; min-height: 0; }
.${SHELL} .sc3-feed-list { width: 100%; flex: 0 0 auto; }
// 세로 배치 시 차트 셀 높이 고정. flex:1 1 0%+min-height:0이면 누출
.${SHELL} .sc3-feed-chart { display: flex; flex-direction: column; min-width: 0; height: 12rem; }
@container sc3panel (min-width: 30rem) {
  .${SHELL} .sc3-feed { flex-direction: row; }
  .${SHELL} .sc3-feed-list { width: 12rem; }
  .${SHELL} .sc3-feed-chart { flex: 1 1 0%; height: auto; min-height: 10rem; }
}
`;

interface StatSpec {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  note: string;
  tone: "brand" | "success" | "warning" | "danger";
  icon: React.ComponentType<{ size?: number }>;
}

function won(n: number): string {
  return `${n < 0 ? "-" : ""}₩${Math.abs(n).toLocaleString("ko-KR")}`;
}

function StatRow({ transactions }: { transactions: Transaction[] }) {
  const income = transactions.filter((t) => t.kind === "수입").reduce((s, t) => s + t.amount, 0);
  const expense = transactions.filter((t) => t.kind === "지출").reduce((s, t) => s + t.amount, 0);
  const balance = income - expense;
  const budgetUsedPct = Math.round((expense / MONTHLY_BUDGET) * 100);
  const budgetLeftPct = Math.max(0, 100 - budgetUsedPct);

  const STATS: readonly StatSpec[] = [
    { label: "이번 달 수입", value: won(income), delta: `${transactions.filter((t) => t.kind === "수입").length}건`, up: true, note: "급여 + 부수입 합계", tone: "success", icon: TrendingUp },
    { label: "이번 달 지출", value: won(expense), delta: `${budgetUsedPct}%`, up: false, note: `예산 ${won(MONTHLY_BUDGET)} 중 사용`, tone: "danger", icon: TrendingDown },
    { label: "잔액", value: won(balance), delta: balance >= 0 ? "흑자" : "적자", up: balance >= 0, note: "수입 − 지출", tone: "brand", icon: Wallet },
    { label: "예산 잔여", value: `${budgetLeftPct}%`, delta: won(Math.max(0, MONTHLY_BUDGET - expense)), up: budgetLeftPct >= 30, note: "이번 달 남은 예산 비율", tone: budgetLeftPct >= 30 ? "success" : "warning", icon: PiggyBank },
  ];

  return (
    <div
      className="relative z-10 grid grid-cols-2 gap-(--semantic-space-sm) px-(--semantic-space-md) lg:grid-cols-4 lg:px-(--semantic-space-md)"
      style={{ marginTop: "calc(var(--semantic-space-xl) * -1)" }}
    >
      {STATS.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className="flex flex-col gap-(--semantic-space-xs)"
            style={{
              background: "color-mix(in oklch, var(--component-card-bg) 88%, transparent)",
              backdropFilter: "blur(0.5rem)",
              borderColor: "var(--component-card-border)",
              borderWidth: "var(--semantic-border-width-default)",
              borderStyle: "solid",
              borderRadius: "var(--component-card-radius)",
              boxShadow: "var(--component-card-shadow)",
              padding: "var(--semantic-space-md)",
            }}
          >
            <div className="flex items-center justify-between">
              <span
                aria-hidden
                className="flex size-7 shrink-0 items-center justify-center"
                style={{ background: `var(--semantic-bg-${s.tone}-subtle)`, color: `var(--semantic-fg-${s.tone}-default)`, borderRadius: "var(--semantic-radius-control)" }}
              >
                <Icon size={14} />
              </span>
              <span style={{ color: `var(--semantic-fg-${s.up ? "success" : "danger"}-default)`, fontSize: "var(--semantic-text-caption)" }}>
                {s.delta}
              </span>
            </div>
            <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>{s.label}</span>
            <span className="tabular-nums" style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-heading-md)" }}>
              {s.value}
            </span>
            <span className="truncate" style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>{s.note}</span>
          </div>
        );
      })}
    </div>
  );
}

// 알림 벨 뱃지 수와 팝오버 목록 구성. 예산 초과, 임박 카테고리 값 별도 계산
function HeroBell({ transactions }: { transactions: Transaction[] }) {
  const urgent = Object.entries(CATEGORY_BUDGET)
    .map(([category, budget]) => {
      const spent = transactions.filter((t) => t.category === category && t.kind === "지출").reduce((s, t) => s + t.amount, 0);
      return { category, pct: Math.round((spent / budget) * 100) };
    })
    .filter((c) => c.pct >= 70);

  return (
    <Popover
      title="예산 알림"
      trigger={
        <button
          type="button"
          aria-label="알림"
          className="relative flex size-9 shrink-0 items-center justify-center"
          style={{ background: "color-mix(in oklch, var(--semantic-bg-neutral-surface) 70%, transparent)", borderRadius: "var(--semantic-radius-control)", color: "var(--semantic-fg-neutral-default)", boxShadow: "var(--component-card-shadow)" }}
        >
          <Bell size={16} aria-hidden />
          {urgent.length > 0 ? (
            <span
              aria-hidden
              className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center px-(--semantic-space-xs) tabular-nums"
              style={{ background: "var(--semantic-bg-danger-default)", color: "var(--semantic-fg-on-danger-default)", borderRadius: "9999px", fontSize: "0.625rem" }}
            >
              {urgent.length}
            </span>
          ) : null}
        </button>
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

export function ShadcnUsage3({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [transactions, setTransactions] = React.useState<Transaction[]>(() => [...TRANSACTIONS]);
  const [query, setQuery] = React.useState("");
  const wide = useIsWide();
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const addTransaction = (t: Transaction) => setTransactions((prev) => [t, ...prev]);

  const openDetail = (key: string, id: string) => {
    if (key === "detail") setSelectedId(id);
    else setScreenKey(key);
  };
  // 대시보드 버튼 클릭 시 이동 처리
  const backFromDetail = (key: string) => {
    setSelectedId(null);
    if (key && key !== "detail") setScreenKey(key);
  };

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "좋은 아침이에요" : hour < 18 ? "좋은 오후예요" : "좋은 저녁이에요";

  // 뷰포트 768 미만이면 앱 바와 하단 Tab bar 를 갖춘 모바일 판 표시. Dashboard.tsx 의 값은 순환 import 를 피하려고 props 로 넘김
  if (!wide) {
    return (
      <Shadcn3Mobile
        system={system}
        screenKey={screenKey}
        selectedId={selectedId}
        transactions={transactions}
        query={query}
        icons={NAV_ICON}
        user={USER}
        heroImage={HERO_IMAGE}
        greeting={greeting}
        statRow={<StatRow transactions={transactions} />}
        onNavigate={(key) => { setScreenKey(key); setSelectedId(null); }}
        onOpen={openDetail}
        onBack={() => setSelectedId(null)}
        onAdd={addTransaction}
        onQueryChange={setQuery}
      />
    );
  }

  const body = (
    <>
      {/* 상세 화면에서도 히어로, 통계카드 유지해 화면별 상단 영역 유무 차이 제거 */}
      {/* 히어로 구성: 배경 스크림, 좌측 인사말, 우측 검색/알림/아바타 */}
      <div
        className="relative flex flex-wrap items-start justify-between gap-(--semantic-space-md) px-(--semantic-space-md) pb-(--semantic-space-xl) pt-(--semantic-space-md) lg:px-(--semantic-space-md)"
        style={{
          minHeight: "11rem",
          backgroundImage:
            `linear-gradient(180deg, color-mix(in oklch, var(--semantic-bg-neutral-surface) 28%, transparent) 0%, ` +
            `color-mix(in oklch, var(--semantic-bg-neutral-surface) 50%, transparent) 55%, ` +
            `color-mix(in oklch, var(--semantic-bg-neutral-surface) 88%, transparent) 85%, ` +
            `var(--semantic-bg-neutral-surface) 100%), url("${HERO_IMAGE}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex min-w-0 flex-1 items-start gap-(--semantic-space-sm)">
          {/* span에 mt-1 shrink-0 적용해 여백 추가. 타입 제약으로 props 못 받음 */}
          <span className="mt-(--semantic-space-xs) shrink-0">
            <Sidebar.Trigger />
          </span>
          {/* 텍스트 전용 유리 배경. 스크림에만 의존해 대비가 사진 밝기에 흔들리는 문제가 있음 */}
          <div
            className="flex min-w-0 flex-col gap-(--semantic-space-xs) rounded-[var(--semantic-radius-container)] px-(--semantic-space-sm) py-(--semantic-space-sm)"
            style={{ background: "color-mix(in oklch, var(--semantic-bg-neutral-surface) 62%, transparent)", backdropFilter: "blur(0.375rem)" }}
          >
            <span className="flex items-center gap-(--semantic-space-sm)" style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-heading-md)" }}>
              {greeting}, {USER.name}님
            </span>
            <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>
              이번 달 지출 현황을 확인해보세요.
            </span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-(--semantic-space-sm)">
          <span className="relative flex items-center">
            <Search
              size={14}
              aria-hidden
              className="pointer-events-none absolute left-2.5"
              style={{ color: "var(--semantic-fg-neutral-subtle)" }}
            />
            <Input
              aria-label="거래 검색"
              placeholder="거래·카테고리 검색…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ width: "12rem", paddingLeft: "var(--semantic-space-lg)", background: "color-mix(in oklch, var(--semantic-bg-neutral-surface) 70%, transparent)" }}
            />
          </span>
          <HeroBell transactions={transactions} />
          <Menu
            side="bottom"
            align="end"
            minWidth="12rem"
            trigger={
              <button
                type="button"
                className="flex items-center gap-(--semantic-space-xs) rounded-[var(--semantic-radius-control)] p-(--semantic-space-xs)"
                style={{ background: "color-mix(in oklch, var(--semantic-bg-neutral-surface) 70%, transparent)", boxShadow: "var(--component-card-shadow)" }}
              >
                <Avatar size="sm" fallback={USER.initial} />
                <ChevronDown size={14} aria-hidden style={{ color: "var(--semantic-fg-neutral-subtle)" }} />
              </button>
            }
            items={[
              { heading: <span className="flex flex-col px-(--semantic-space-xs) py-(--semantic-space-xs)"><span style={{ fontSize: "var(--semantic-text-body-sm)" }}>{USER.name}</span><span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>{USER.email}</span></span> },
              { separator: true },
              { label: <span className="flex items-center gap-(--semantic-space-sm)"><Settings2 size={14} aria-hidden />설정</span> },
              { label: <span className="flex items-center gap-(--semantic-space-sm)"><HeartPulse size={14} aria-hidden />예산 목표 관리</span>, onSelect: () => setScreenKey("budget") },
            ]}
          />
        </div>
      </div>

      <StatRow transactions={transactions} />

      <div className="flex-1 p-(--semantic-space-md) sm:p-(--semantic-space-md)">
        {selectedId !== null ? (
          <TransactionDetailScreen
            itemId={selectedId}
            onOpen={backFromDetail}
            transactions={transactions}
            onAdd={addTransaction}
          />
        ) : (
          <Screen onOpen={openDetail} transactions={transactions} onAdd={addTransaction} query={query} />
        )}
      </div>
    </>
  );

  const frameStyle: React.CSSProperties = {
    background: "var(--semantic-bg-neutral-surface)",
    border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
    borderRadius: "var(--semantic-radius-container)",
    boxShadow: "var(--semantic-shadow-raised)",
  };

  return (
    <div className={`overflow-hidden ${SHELL}`} style={{ ...frameStyle, ...SIDEBAR_TOKEN_BRIDGE }}>
      <style>{SHELL_CSS}</style>
      <Sidebar
        className="min-h-0"
        collapsible="icon"
        showTrigger={false}
        groups={[
          {
            items: NAV_SCREENS.map((s) => ({
              label: s.label,
              icon: NAV_ICON[s.key] ?? <Wallet size={16} />,
              active: s.key === screenKey && selectedId === null,
              onSelect: () => { setScreenKey(s.key); setSelectedId(null); },
            })),
          },
        ]}
        header={
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size="lg">
                <span
                  aria-hidden
                  className="flex aspect-square size-8 shrink-0 items-center justify-center"
                  style={{ background: "var(--semantic-bg-brand-default)", color: "var(--semantic-fg-on-brand-default)", borderRadius: "var(--semantic-radius-control)" }}
                >
                  <Wallet size={16} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col text-start">
                  <span className="truncate" style={{ fontSize: "var(--semantic-text-body)" }}>가계부</span>
                  <span className="truncate" style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
                    {system.name}
                  </span>
                </span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        }
        footer={<SidebarPromo />}
      >
        {body}
      </Sidebar>
    </div>
  );
}
