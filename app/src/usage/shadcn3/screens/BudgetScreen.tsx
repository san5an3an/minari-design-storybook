import {
  Bus, HeartPulse, PiggyBank, Repeat, Utensils, Wallet,
} from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { Progress } from "../../../bases/shadcn/Progress";
import { CATEGORY_BUDGET, MONTHLY_BUDGET } from "../data";
import type { ScreenProps } from "../screens";

function won(n: number): string {
  return `${n < 0 ? "-" : ""}₩${Math.abs(n).toLocaleString("ko-KR")}`;
}

const CATEGORY_ICON: Record<string, typeof Wallet> = {
  급여: Wallet, 부수입: PiggyBank, 식비: Utensils, 교통: Bus, 구독: Repeat, 의료: HeartPulse,
};

export function BudgetScreen({ transactions, onOpen }: ScreenProps) {
  const totalExpense = transactions.filter((t) => t.kind === "지출").reduce((s, t) => s + t.amount, 0);
  const rows = Object.entries(CATEGORY_BUDGET).map(([category, budget]) => {
    const items = transactions.filter((t) => t.category === category && t.kind === "지출");
    const spent = items.reduce((s, t) => s + t.amount, 0);
    const pct = Math.min(100, Math.round((spent / budget) * 100));
    const over = spent > budget;
    return { category, budget, spent, pct, over, items };
  });

  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex items-center justify-between gap-3"
        style={{
          background: "var(--component-card-bg)",
          borderColor: "var(--component-card-border)",
          borderWidth: "var(--semantic-border-width-default)",
          borderStyle: "solid",
          borderRadius: "var(--component-card-radius)",
          padding: "var(--component-card-padding)",
        }}
      >
        <span style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body)" }}>
          이번 달 전체 예산
        </span>
        <span className="tabular-nums" style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-heading-md)" }}>
          {won(totalExpense)} <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>/ {won(MONTHLY_BUDGET)}</span>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {rows.map((r) => {
          const Icon = CATEGORY_ICON[r.category] ?? Wallet;
          return (
            <div
              key={r.category}
              className="flex flex-col gap-3"
              style={{
                background: "var(--component-card-bg)",
                borderColor: "var(--component-card-border)",
                borderWidth: "var(--semantic-border-width-default)",
                borderStyle: "solid",
                borderRadius: "var(--component-card-radius)",
                padding: "var(--component-card-padding)",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="flex size-7 shrink-0 items-center justify-center"
                    style={{
                      background: `var(--semantic-bg-${r.over ? "danger" : "brand"}-subtle)`,
                      color: `var(--semantic-fg-${r.over ? "danger" : "brand"}-default)`,
                      borderRadius: "var(--semantic-radius-control)",
                    }}
                  >
                    <Icon size={14} />
                  </span>
                  <span style={{ color: "var(--component-card-title-fg)", fontSize: "var(--component-card-title-font-size)" }}>{r.category}</span>
                </span>
                {r.over ? <Badge variant="subtle" tone="danger">초과</Badge> : <Badge variant="subtle" tone="brand">{r.pct}%</Badge>}
              </div>
              <Progress value={r.pct} label={`${won(r.spent)} / ${won(r.budget)}`} showValue={false} />
              <div className="flex flex-col gap-1">
                {r.items.slice(0, 3).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={ => onOpen?.("detail", t.id)}
                    className="flex items-center justify-between rounded-[var(--semantic-radius-control)] px-1.5 py-1 text-start transition-colors hover:bg-[var(--component-card-bg-hover)]"
                  >
                    <span className="truncate" style={{ fontSize: "var(--semantic-text-caption)" }}>{t.title}</span>
                    <span className="shrink-0 tabular-nums" style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>{won(t.amount)}</span>
                  </button>
                ))}
                {r.items.length === 0 ? (
                  <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>이 카테고리 지출이 아직 없어요.</span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
