"use client";
import * as React from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { Card } from "../../../bases/shadcn/Card";
import { Chart } from "../../../bases/shadcn/Chart";
import { Listrow } from "../../../bases/shadcn/Listrow";
import { Select } from "../../../bases/shadcn/Select";
import { Tabs } from "../../../bases/shadcn/Tabs";
import { TOUCH } from "../../shadcn/mobile/MobileShell";
import type { Transaction } from "../data";
import {
  AlertRow, CATEGORY_STYLE, DEFAULT_CATEGORY_STYLE, PERIOD_ITEMS, TONE_CHART_COLOR, won,
} from "../screens/OverviewScreen";
import type { MobileScreenProps } from "../screens";
import { buildAlerts, categoryRows } from "./derive";
import { CategoryChip, Direction, RowList, TappableRow, TxRow } from "./parts";

// 히어로 영역 표시. 사진 위에 테마 스크림과 인사말 칩을 올리고 아래 경계는 배경색과 이어지게 함
// 인사말 유리 칩 불투명도(%) 지정. 뒤로 비치는 사진이 글자 대비를 떨어뜨리지 않게 하기 위함
const GLASS_OPACITY = 92;

function Hero({ image, greeting, userName }: { image: string; greeting: string; userName: string }) {
  return (
    <div
      className="flex flex-col justify-start px-(--semantic-space-md) pb-(--semantic-space-xl) pt-(--semantic-space-md)"
      style={{
        minHeight: "9.5rem",
        backgroundImage:
          `linear-gradient(180deg, color-mix(in oklch, var(--semantic-bg-neutral-surface) 28%, transparent) 0%, ` +
          `color-mix(in oklch, var(--semantic-bg-neutral-surface) 50%, transparent) 55%, ` +
          `color-mix(in oklch, var(--semantic-bg-neutral-surface) 88%, transparent) 85%, ` +
          `var(--semantic-bg-neutral-surface) 100%), url("${image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 글자 뒤 반투명 유리 배경 적용. 사진 밝기와 관계없이 글자 대비를 유지하기 위함 */}
      <div
        className="flex min-w-0 flex-col gap-(--semantic-space-xs) self-start rounded-[var(--semantic-radius-container)] px-(--semantic-space-sm) py-(--semantic-space-sm)"
        style={{ background: `color-mix(in oklch, var(--semantic-bg-neutral-surface) ${GLASS_OPACITY}%, transparent)`, backdropFilter: "blur(0.375rem)" }}
      >
        <span style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-heading-md)", lineHeight: "var(--semantic-line-height-tight)" }}>
          {greeting}, {userName}님
        </span>
        <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>
          이번 달 지출 현황을 확인해보세요.
        </span>
      </div>
    </div>
  );
}

const CAPTION = { color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" } as const;

function SummaryCell({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-(--semantic-space-xs)">
      <span style={CAPTION}>{label}</span>
      <span className="max-w-full truncate tabular-nums" style={{ color, fontSize: "var(--semantic-text-body)" }}>{won(value)}</span>
    </div>
  );
}

export function OverviewMobile({ transactions, onOpen, heroImage, greeting, userName, statRow }: MobileScreenProps) {
  const [period, setPeriod] = React.useState<keyof typeof PERIOD_ITEMS>("all");
  const open = (id: string) => onOpen?.("detail", id);

  const categories = categoryRows(transactions);
  const categoryTop = categories.filter((c) => c.expenseTotal > 0).sort((a, b) => b.expenseTotal - a.expenseTotal);
  const categoryChartConfig = Object.fromEntries(
    categoryTop.map((c) => [c.category, {
      label: c.category,
      color: TONE_CHART_COLOR[(CATEGORY_STYLE[c.category] ?? DEFAULT_CATEGORY_STYLE).tone],
    }]),
  );

  const allDates = Array.from(new Set(transactions.map((t) => t.date))).sort();
  const dailyRows = (dates: readonly string[]) => dates.map((date) => {
    const day = transactions.filter((t) => t.date === date);
    const dayIncome = day.filter((t) => t.kind === "수입").reduce((s, t) => s + t.amount, 0);
    const dayExpense = day.filter((t) => t.kind === "지출").reduce((s, t) => s + t.amount, 0);
    return { date, 순증감: dayIncome - dayExpense, 거래건수: day.length };
  });

  const dates = period === "recent3" ? allDates.slice(-3) : allDates;
  const feed = transactions.filter((t) => dates.includes(t.date));
  const periodIncome = feed.filter((t) => t.kind === "수입").reduce((s, t) => s + t.amount, 0);
  const periodExpense = feed.filter((t) => t.kind === "지출").reduce((s, t) => s + t.amount, 0);
  const topTransactions = [...feed].sort((a, b) => b.amount - a.amount).slice(0, 5);
  const recent = transactions.slice(0, 5);
  const alerts = buildAlerts(transactions);

  return (
    <div className="flex flex-col">
      <Hero image={heroImage} greeting={greeting} userName={userName} />
      {statRow}

      <div className="flex flex-col gap-(--semantic-space-md) p-(--semantic-space-md)">
        <Card title="실시간 지출 피드" action={
          <Select
            aria-label="기간"
            value={period}
            onValueChange={(v) => setPeriod(v as keyof typeof PERIOD_ITEMS)}
            items={PERIOD_ITEMS}
            size="sm"
          />
        }>
          <div className="flex flex-col gap-(--semantic-space-md)">
            <Chart config={{ 순증감: { label: "순증감", color: "var(--component-chart-series-1)" } }} className="aspect-auto h-40 w-full">
              <AreaChart data={dailyRows(dates) as unknown as Record<string, unknown>[]}>
                <defs>
                  <linearGradient id="fill-net-m" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-순증감)" stopOpacity={0.85} />
                    <stop offset="95%" stopColor="var(--color-순증감)" stopOpacity={0.08} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="dot" />} />
                <Area dataKey="순증감" type="monotone" fill="url(#fill-net-m)" stroke="var(--color-순증감)" strokeWidth={2} />
              </AreaChart>
            </Chart>

            {/* 기간 요약 표시. 기간 Select와 연동됨 */}
            <div
              className="grid grid-cols-3 gap-(--semantic-space-sm) py-(--semantic-space-sm)"
              style={{
                borderTop: "var(--semantic-border-width-default) solid var(--component-card-border)",
                borderBottom: "var(--semantic-border-width-default) solid var(--component-card-border)",
              }}
            >
              <SummaryCell label="기간 수입" value={periodIncome} color="var(--semantic-fg-success-default)" />
              <SummaryCell label="기간 지출" value={periodExpense} color="var(--semantic-fg-danger-default)" />
              <SummaryCell label="기간 순증감" value={periodIncome - periodExpense} color="var(--semantic-fg-neutral-default)" />
            </div>

            <div className="flex flex-col gap-(--semantic-space-xs)">
              <span style={CAPTION}>주요 거래(금액순)</span>
              <RowList>
                {topTransactions.map((t) => <TxRow key={t.id} t={t} sub={`${t.category} · ${t.date}`} onOpen={open} />)}
              </RowList>
            </div>
          </div>
        </Card>

        <Card title="예산 알림">
          <div className="flex flex-col gap-(--semantic-space-sm)">
            {alerts.map((a) => <AlertRow key={a.title} {...a} />)}
          </div>
        </Card>

        <Card title="카테고리 지출 TOP">
          <RowList>
            {categoryTop.map((c, i) => {
              const { tone } = CATEGORY_STYLE[c.category] ?? DEFAULT_CATEGORY_STYLE;
              const biggest = [...c.items].filter((t) => t.kind === "지출").sort((a, b) => b.amount - a.amount)[0];
              return (
                <TappableRow key={c.category} onClick={() => biggest && open(biggest.id)}>
                  <Listrow
                    lead={
                      <span className="flex items-center gap-(--semantic-space-sm)">
                        <span className="tabular-nums" style={{ ...CAPTION, width: "1rem", textAlign: "center" }}>{i + 1}</span>
                        <CategoryChip category={c.category} round />
                      </span>
                    }
                    title={c.category}
                    sub={`지출 ${won(c.expenseTotal)}`}
                    trail={<Badge variant="subtle" tone={tone}>{c.share}%</Badge>}
                  />
                </TappableRow>
              );
            })}
          </RowList>
        </Card>

        <Card title="지출 분석">
          <Tabs
            defaultValue="category"
            items={[
              {
                value: "category",
                label: "카테고리별",
                content: (
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
                ),
              },
              {
                value: "daily",
                label: "일별 거래 건수",
                content: (
                  <Chart config={{ 거래건수: { label: "거래 건수", color: "var(--component-chart-series-2)" } }} className="aspect-auto h-40 w-full">
                    <LineChart data={dailyRows(allDates) as unknown as Record<string, unknown>[]}>
                      <CartesianGrid vertical={false} />
                      <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                      <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="line" />} />
                      <Line dataKey="거래건수" type="monotone" stroke="var(--color-거래건수)" strokeWidth={2} dot={{ r: 3 }} />
                    </LineChart>
                  </Chart>
                ),
              },
            ]}
          />
        </Card>

        <Card title="최근 활동">
          <div className="flex flex-col gap-(--semantic-space-sm)">
            <RowList>
              {recent.map((t: Transaction) => (
                <TappableRow key={t.id} onClick={() => open(t.id)}>
                  <Listrow
                    lead={<Direction kind={t.kind} />}
                    title={t.title}
                    trail={<span style={CAPTION}>{t.date}</span>}
                  />
                </TappableRow>
              ))}
            </RowList>
            <Button variant="outline" onClick={() => onOpen?.("list", "")} style={{ minHeight: TOUCH, width: "100%" }}>
              거래 내역 전체 보기
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
