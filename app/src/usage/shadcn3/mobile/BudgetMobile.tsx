"use client";
import { Badge } from "../../../bases/shadcn/Badge";
import { Card } from "../../../bases/shadcn/Card";
import { Progress } from "../../../bases/shadcn/Progress";
import { CATEGORY_BUDGET, MONTHLY_BUDGET } from "../data";
import { won } from "../screens/OverviewScreen";
import type { MobileScreenProps } from "../screens";
import { totals } from "./derive";
import { CategoryChip, RowList, TxRow } from "./parts";

export function BudgetMobile({ transactions, onOpen }: MobileScreenProps) {
  const { expense } = totals(transactions);
  const totalPct = Math.min(100, Math.round((expense / MONTHLY_BUDGET) * 100));

  const rows = Object.entries(CATEGORY_BUDGET).map(([category, budget]) => {
    const items = transactions.filter((t) => t.category === category && t.kind === "지출");
    const spent = items.reduce((s, t) => s + t.amount, 0);
    return { category, budget, spent, pct: Math.min(100, Math.round((spent / budget) * 100)), over: spent > budget, items };
  });

  return (
    <div className="flex flex-col gap-(--semantic-space-md) p-(--semantic-space-md)">
      <Card title="이번 달 전체 예산">
        <div className="flex flex-col gap-(--semantic-space-sm)">
          <span className="tabular-nums" style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-heading-md)" }}>
            {won(expense)}{" "}
            <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>/ {won(MONTHLY_BUDGET)}</span>
          </span>
          <Progress value={totalPct} label={`전체 소진율 ${totalPct}%`} showValue={false} />
        </div>
      </Card>

      {rows.map((r) => (
        <Card
          key={r.category}
          title={
            <span className="flex items-center gap-(--semantic-space-sm)">
              <CategoryChip category={r.category} />
              {r.category}
            </span>
          }
          action={r.over ? <Badge variant="subtle" tone="danger">초과</Badge> : <Badge variant="subtle" tone="brand">{r.pct}%</Badge>}
        >
          <div className="flex flex-col gap-(--semantic-space-md)">
            <Progress value={r.pct} label={`${won(r.spent)} / ${won(r.budget)}`} showValue={false} />
            {r.items.length === 0 ? (
              <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>이 카테고리 지출이 아직 없어요.</span>
            ) : (
              <RowList>
                {r.items.slice(0, 3).map((t) => (
                  <TxRow key={t.id} t={t} sub={t.date} onOpen={(id) => onOpen?.("detail", id)} />
                ))}
              </RowList>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
