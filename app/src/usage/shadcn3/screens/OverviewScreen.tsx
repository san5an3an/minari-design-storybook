import * as React from "react";
import {
  AlertTriangle, ArrowDownLeft, ArrowUpRight, Bus, CheckCircle2, CirclePlus, HeartPulse,
  Info, PiggyBank, Repeat, Utensils, Wallet,
} from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { Chart } from "../../../bases/shadcn/Chart";
import { Dialog } from "../../../bases/shadcn/Dialog";
import { Field } from "../../../bases/shadcn/Field";
import { Input } from "../../../bases/shadcn/Input";
import { Segmented } from "../../../bases/shadcn/Segmented";
import { Select } from "../../../bases/shadcn/Select";
import { CATEGORY_BUDGET } from "../data";
import type { Transaction } from "../data";
import type { ScreenProps } from "../screens";

function won(n: number): string {
  return `${n < 0 ? "-" : ""}₩${Math.abs(n).toLocaleString("ko-KR")}`;
}

const CATEGORY_STYLE: Record<string, { icon: typeof Wallet; tone: "brand" | "success" | "warning" | "danger" | "neutral" }> = {
  급여: { icon: Wallet, tone: "success" },
  부수입: { icon: PiggyBank, tone: "success" },
  식비: { icon: Utensils, tone: "warning" },
  교통: { icon: Bus, tone: "brand" },
  구독: { icon: Repeat, tone: "danger" },
  의료: { icon: HeartPulse, tone: "neutral" },
};
const DEFAULT_CATEGORY_STYLE = { icon: Wallet, tone: "neutral" as const };
const TONE_CHART_COLOR: Record<string, string> = {
  brand: "var(--component-chart-series-1)",
  success: "var(--component-chart-series-3)",
  warning: "var(--component-chart-series-4)",
  danger: "var(--component-chart-series-2)",
  neutral: "var(--component-chart-series-1)",
};

const PERIOD_ITEMS = { all: "최근 5일 전체", recent3: "최근 3일" } as const;

function Panel({
  title, action, children,
}: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div
      className="flex flex-1 flex-col gap-3"
      style={{
        background: "var(--component-card-bg)",
        borderColor: "var(--component-card-border)",
        borderWidth: "var(--semantic-border-width-default)",
        borderStyle: "solid",
        borderRadius: "var(--component-card-radius)",
        padding: "var(--component-card-padding)",
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <span style={{ color: "var(--component-card-title-fg)", fontSize: "var(--component-card-title-font-size)" }}>
          {title}
        </span>
        {action}
      </div>
      {children}
    </div>
  );
}

function AlertRow({
  tone, icon, title, detail,
}: { tone: "danger" | "warning" | "brand" | "success"; icon: React.ReactNode; title: string; detail: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        aria-hidden
        className="flex size-7 shrink-0 items-center justify-center"
        style={{
          background: `var(--semantic-bg-${tone}-subtle)`,
          color: `var(--semantic-fg-${tone}-default)`,
          borderRadius: "var(--semantic-radius-control)",
        }}
      >
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate" style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}>
          {title}
        </span>
        <span className="truncate" style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>
          {detail}
        </span>
      </span>
    </div>
  );
}

const CATEGORY_OPTIONS = Object.keys(CATEGORY_STYLE);
const KIND_ITEMS = [{ value: "지출", label: "지출" }, { value: "수입", label: "수입" }];

// onAdd 호출로 거래 추가, 상태 실제 반영
function AddTransactionButton({ onAdd, methods }: { onAdd: (t: Transaction) => void; methods: string[] }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState(CATEGORY_OPTIONS[2]);
  const [kind, setKind] = React.useState<"수입" | "지출">("지출");
  const [amount, setAmount] = React.useState("");
  const [method, setMethod] = React.useState(methods[0] ?? "체크카드");

  const reset =  => { setTitle(""); setAmount(""); setKind("지출"); setCategory(CATEGORY_OPTIONS[2]); };
  const valid = title.trim.length > 0 && Number(amount) > 0;

  const submit =  => {
    if (!valid) return;
    const now = new Date;
    const date = `${String(now.getMonth + 1).padStart(2, "0")}-${String(now.getDate).padStart(2, "0")}`;
    onAdd({
      id: `t${Date.now}`,
      title: title.trim,
      category,
      amount: Math.round(Number(amount)),
      kind,
      date,
      method,
      memo: "",
    });
    reset;
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={ => setOpen(false)}
      title="거래 추가"
      trigger={
        <Button variant="solid" tone="brand" size="sm" onClick={ => setOpen(true)}>
          <CirclePlus size={14} aria-hidden />
          거래 추가
        </Button>
      }
      actions={
        <>
          <Button variant="plain" onClick={ => setOpen(false)}>취소</Button>
          <Button variant="solid" tone="brand" onClick={submit} disabled={!valid}>추가</Button>
        </>
      }
      body={
        <div className="flex flex-col gap-3 px-6" style={{ minWidth: "20rem" }}>
          <Field label="제목" htmlFor="new-tx-title">
            <Input id="new-tx-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="예: 저녁 약속" />
          </Field>
          <Segmented
            value={[kind]}
            onValueChange={(v) => { if (v[0]) setKind(v[0] as "수입" | "지출"); }}
            size="sm"
          >
            {KIND_ITEMS.map((k) => <Segmented.Item key={k.value} value={k.value}>{k.label}</Segmented.Item>)}
          </Segmented>
          <div className="flex items-center gap-3">
            <Field label="금액" htmlFor="new-tx-amount">
              <Input id="new-tx-amount" type="number" min={0} value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" />
            </Field>
            <div className="flex flex-col" style={{ gap: "var(--component-input-label-gap)" }}>
              <span style={{ color: "var(--component-input-label-fg)", fontSize: "var(--component-input-label-font-size)" }}>카테고리</span>
              <Select value={category} onValueChange={setCategory} items={Object.fromEntries(CATEGORY_OPTIONS.map((c) => [c, c]))} />
            </div>
          </div>
          <div className="flex flex-col" style={{ gap: "var(--component-input-label-gap)" }}>
            <span style={{ color: "var(--component-input-label-fg)", fontSize: "var(--component-input-label-font-size)" }}>결제 수단</span>
            <Select value={method} onValueChange={setMethod} items={Object.fromEntries(methods.map((m) => [m, m]))} />
          </div>
        </div>
      }
    />
  );
}

export function OverviewScreen({ transactions, onOpen, onAdd, query }: ScreenProps) {
  const [period, setPeriod] = React.useState<keyof typeof PERIOD_ITEMS>("all");

  const expenses = transactions.filter((t) => t.kind === "지출");
  const totalExpense = expenses.reduce((s, t) => s + t.amount, 0);
  const income = transactions.filter((t) => t.kind === "수입").reduce((s, t) => s + t.amount, 0);
  const methods = Array.from(new Set(transactions.map((t) => t.method)));

  const categories = Array.from(new Set(transactions.map((t) => t.category))).map((category) => {
    const items = transactions.filter((t) => t.category === category);
    const expenseTotal = items.filter((t) => t.kind === "지출").reduce((s, t) => s + t.amount, 0);
    const share = totalExpense > 0 ? Math.round((expenseTotal / totalExpense) * 100) : 0;
    return { category, items, expenseTotal, share };
  });
  const categoryTop = categories.filter((c) => c.expenseTotal > 0).sort((a, b) => b.expenseTotal - a.expenseTotal);
  const categoryChartConfig = Object.fromEntries(
    categoryTop.map((c) => [c.category, {
      label: c.category,
      color: TONE_CHART_COLOR[(CATEGORY_STYLE[c.category] ?? DEFAULT_CATEGORY_STYLE).tone],
    }]),
  );

  const allDates = Array.from(new Set(transactions.map((t) => t.date))).sort;
  function dailyRows(dates: readonly string[]) {
    return dates.map((date) => {
      const rows = transactions.filter((t) => t.date === date);
      const dayIncome = rows.filter((t) => t.kind === "수입").reduce((s, t) => s + t.amount, 0);
      const dayExpense = rows.filter((t) => t.kind === "지출").reduce((s, t) => s + t.amount, 0);
      return { date, 순증감: dayIncome - dayExpense, 거래건수: rows.length };
    });
  }

  const dates = period === "recent3" ? allDates.slice(-3) : allDates;
  const rows = dailyRows(dates);
  const feedTransactions = transactions.filter((t) => dates.includes(t.date));
  const periodIncome = feedTransactions.filter((t) => t.kind === "수입").reduce((s, t) => s + t.amount, 0);
  const periodExpense = feedTransactions.filter((t) => t.kind === "지출").reduce((s, t) => s + t.amount, 0);

  const q = (query ?? "").trim.toLowerCase;
  const matches = (t: Transaction) => !q || t.title.toLowerCase.includes(q) || t.category.toLowerCase.includes(q);
  const topTransactions = [...feedTransactions].filter(matches).sort((a, b) => b.amount - a.amount).slice(0, 5);
  const recentTransactions = [...transactions].filter(matches);

  // 예산 알림. 지출 대비 CATEGORY_BUDGET 비교, 수입 달성률, 최대 지출 표시
  const alerts: { tone: "danger" | "warning" | "brand" | "success"; icon: React.ReactNode; title: string; detail: string }[] = [];
  for (const c of categories) {
    const budget = CATEGORY_BUDGET[c.category];
    if (!budget || c.expenseTotal === 0) continue;
    const pct = Math.round((c.expenseTotal / budget) * 100);
    if (pct >= 100) {
      alerts.push({ tone: "danger", icon: <AlertTriangle size={14} aria-hidden />, title: `${c.category} 예산 초과 · ${pct}%`, detail: `${won(c.expenseTotal)} / ${won(budget)}` });
    } else if (pct >= 70) {
      alerts.push({ tone: "warning", icon: <AlertTriangle size={14} aria-hidden />, title: `${c.category} 예산 ${pct}% 도달`, detail: `${won(c.expenseTotal)} / ${won(budget)}` });
    }
  }
  const biggest = [...expenses].sort((a, b) => b.amount - a.amount)[0];
  if (biggest) {
    alerts.push({ tone: "brand", icon: <Info size={14} aria-hidden />, title: `고액 지출 감지 · ${biggest.title}`, detail: `${biggest.date} · ${won(biggest.amount)}` });
  }
  if (income > 0) {
    alerts.push({ tone: "success", icon: <CheckCircle2 size={14} aria-hidden />, title: "이번 달 수입 순항 중", detail: `누적 ${won(income)} · 지출 대비 ${Math.round((income / Math.max(totalExpense, 1)) * 100)}%` });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* 좌측 2/3 실시간 지출 피드 패널 위치 */}
        <Panel
          title="실시간 지출 피드"
          action={
            <div className="flex items-center gap-2">
              <Select
                aria-label="기간"
                value={period}
                onValueChange={(v) => setPeriod(v as keyof typeof PERIOD_ITEMS)}
                items={PERIOD_ITEMS}
                size="sm"
              />
              <AddTransactionButton onAdd={onAdd} methods={methods} />
            </div>
          }
        >
          <div className="flex min-h-0 flex-1 flex-col gap-4 md:flex-row">
            <div className="flex w-full shrink-0 flex-col gap-1.5 md:w-48">
              <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
                주요 거래(금액순)
              </span>
              {topTransactions.length === 0 ? (
                <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>검색 결과 없음</span>
              ) : topTransactions.map((t) => {
                const { icon: CategoryIcon, tone } = CATEGORY_STYLE[t.category] ?? DEFAULT_CATEGORY_STYLE;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={ => onOpen?.("detail", t.id)}
                    className="flex items-center gap-2 rounded-[var(--semantic-radius-control)] px-1.5 py-1 text-start transition-colors hover:bg-[var(--component-card-bg-hover)]"
                  >
                    <span
                      aria-hidden
                      className="flex size-6 shrink-0 items-center justify-center"
                      style={{
                        background: `var(--semantic-bg-${tone}-subtle)`,
                        color: `var(--semantic-fg-${tone}-default)`,
                        borderRadius: "var(--semantic-radius-control)",
                      }}
                    >
                      <CategoryIcon size={12} />
                    </span>
                    <span className="min-w-0 flex-1 truncate" style={{ fontSize: "var(--semantic-text-caption)" }}>
                      {t.title}
                    </span>
                    <span className="shrink-0 tabular-nums" style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>
                      {won(t.amount)}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="flex min-h-0 min-w-0 flex-1 flex-col">
              <Chart config={{ 순증감: { label: "순증감", color: "var(--component-chart-series-1)" } }} className="aspect-auto h-full min-h-40 w-full flex-1">
                <AreaChart data={rows as unknown as Record<string, unknown>[]}>
                  <defs>
                    <linearGradient id="fill-net" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-순증감)" stopOpacity={0.85} />
                      <stop offset="95%" stopColor="var(--color-순증감)" stopOpacity={0.08} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                  <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="dot" />} />
                  <Area dataKey="순증감" type="monotone" fill="url(#fill-net)" stroke="var(--color-순증감)" strokeWidth={2} />
                </AreaChart>
              </Chart>
            </div>
          </div>

          {/* 기간 요약 줄로 패널 하단 여백 채우기 */}
          <div
            className="mt-auto flex items-center justify-around gap-3 pt-2"
            style={{ borderTop: "var(--semantic-border-width-default) solid var(--component-card-border)" }}
          >
            <div className="flex flex-col items-center gap-0.5">
              <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>기간 수입</span>
              <span className="tabular-nums" style={{ color: "var(--semantic-fg-success-default)", fontSize: "var(--semantic-text-body)" }}>{won(periodIncome)}</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>기간 지출</span>
              <span className="tabular-nums" style={{ color: "var(--semantic-fg-danger-default)", fontSize: "var(--semantic-text-body)" }}>{won(periodExpense)}</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>기간 순증감</span>
              <span className="tabular-nums" style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body)" }}>{won(periodIncome - periodExpense)}</span>
            </div>
          </div>
        </Panel>

        {/* 우측 1/3 영역에 예산 알림과 카테고리 TOP 표시 */}
        <div className="flex w-full flex-col gap-4 lg:w-72 lg:shrink-0">
          <Panel title="예산 알림">
            <div className="flex flex-col gap-3">
              {alerts.map((a) => <AlertRow key={a.title} {...a} />)}
            </div>
          </Panel>
          <Panel title="카테고리 지출 TOP">
            <div className="flex flex-col gap-2.5">
              {categoryTop.map((c, i) => {
                const { icon: CategoryIcon, tone } = CATEGORY_STYLE[c.category] ?? DEFAULT_CATEGORY_STYLE;
                const topInCategory = [...c.items].filter((t) => t.kind === "지출").sort((a, b) => b.amount - a.amount)[0];
                return (
                  <button
                    key={c.category}
                    type="button"
                    onClick={ => topInCategory ? onOpen?.("detail", topInCategory.id) : undefined}
                    className="flex items-center gap-2.5 rounded-[var(--semantic-radius-control)] px-1 py-1 text-start transition-colors hover:bg-[var(--component-card-bg-hover)]"
                  >
                    <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)", width: "1rem" }}>
                      {i + 1}
                    </span>
                    <span
                      aria-hidden
                      className="flex size-7 shrink-0 items-center justify-center"
                      style={{
                        background: `var(--semantic-bg-${tone}-subtle)`,
                        color: `var(--semantic-fg-${tone}-default)`,
                        borderRadius: "9999px",
                      }}
                    >
                      <CategoryIcon size={13} />
                    </span>
                    <span className="min-w-0 flex-1 truncate" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
                      {c.category}
                    </span>
                    <Badge variant="subtle" tone={tone}>{c.share}%</Badge>
                  </button>
                );
              })}
            </div>
          </Panel>
        </div>
      </div>

      {/* 하단 3분할: 막대그래프, 라인그래프, 최근 활동 타임라인 */}
      <div className="flex flex-col gap-4 lg:flex-row">
        <Panel title="카테고리별 지출">
          <Chart config={categoryChartConfig} className="aspect-auto h-40 w-full">
            <BarChart data={categoryTop.map((c) => ({ category: c.category, [c.category]: c.expenseTotal })) as unknown as Record<string, unknown>[]}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="category" tickLine={false} axisLine={false} tickMargin={8} />
              <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="dot" />} />
              {categoryTop.map((c) => (
                <Bar key={c.category} dataKey={c.category} fill={`var(--color-${c.category})`} radius={4} />
              ))}
            </BarChart>
          </Chart>
        </Panel>
        <Panel title="일별 거래 건수">
          <Chart config={{ 거래건수: { label: "거래 건수", color: "var(--component-chart-series-2)" } }} className="aspect-auto h-40 w-full">
            <LineChart data={dailyRows(allDates) as unknown as Record<string, unknown>[]}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
              <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="line" />} />
              <Line dataKey="거래건수" type="monotone" stroke="var(--color-거래건수)" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </Chart>
        </Panel>
        <Panel title="최근 활동">
          <div className="flex flex-col gap-2.5">
            {recentTransactions.length === 0 ? (
              <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>검색 결과 없음</span>
            ) : recentTransactions.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={ => onOpen?.("detail", t.id)}
                className="flex items-center gap-2 rounded-[var(--semantic-radius-control)] px-1.5 py-1 text-start transition-colors hover:bg-[var(--component-card-bg-hover)]"
              >
                <span aria-hidden style={{ color: t.kind === "수입" ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-subtle)" }}>
                  {t.kind === "수입" ? <ArrowDownLeft size={13} /> : <ArrowUpRight size={13} />}
                </span>
                <span className="min-w-0 flex-1 truncate" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
                  {t.title}
                </span>
                <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>
                  {t.date}
                </span>
              </button>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
