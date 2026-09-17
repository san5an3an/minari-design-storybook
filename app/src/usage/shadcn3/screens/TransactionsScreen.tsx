import { ArrowDownLeft, ArrowUpRight, Wallet } from "lucide-react";
import { Accordion } from "../../../bases/shadcn/Accordion";
import { Badge } from "../../../bases/shadcn/Badge";
import { Progress } from "../../../bases/shadcn/Progress";
import { TRANSACTIONS } from "../data";
import type { ScreenProps } from "../screens";

function won(n: number): string {
  return `${n < 0 ? "-" : ""}₩${Math.abs(n).toLocaleString("ko-KR")}`;
}

const EXPENSES = TRANSACTIONS.filter((t) => t.kind === "지출");
const TOTAL_EXPENSE = EXPENSES.reduce((s, t) => s + t.amount, 0);

const CATEGORIES = Array.from(new Set(TRANSACTIONS.map((t) => t.category))).map((category) => {
  const items = TRANSACTIONS.filter((t) => t.category === category);
  const expenseTotal = items.filter((t) => t.kind === "지출").reduce((s, t) => s + t.amount, 0);
  const share = TOTAL_EXPENSE > 0 ? Math.round((expenseTotal / TOTAL_EXPENSE) * 100) : 0;
  return { category, items, expenseTotal, share };
});

// 결제 수단별 지출 합계. 미니 막대그래프용
const BY_METHOD = Array.from(new Set(EXPENSES.map((t) => t.method))).map((method) => ({
  method,
  total: EXPENSES.filter((t) => t.method === method).reduce((s, t) => s + t.amount, 0),
}));
const MAX_CATEGORY_EXPENSE = Math.max(...CATEGORIES.map((c) => c.expenseTotal), 1);
const MAX_METHOD_EXPENSE = Math.max(...BY_METHOD.map((m) => m.total), 1);

function MiniBarList({ title, rows, max }: { title: string; rows: { label: string; value: number }[]; max: number }) {
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
      <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
        {title}
      </span>
      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-2">
            <span className="w-16 shrink-0 truncate" style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-default)" }}>
              {r.label}
            </span>
            <div className="h-2 flex-1 overflow-hidden" style={{ background: "var(--semantic-bg-neutral-subtle)", borderRadius: "var(--semantic-radius-control)" }}>
              <div
                className="h-full"
                style={{
                  width: `${Math.round((r.value / max) * 100)}%`,
                  background: "var(--semantic-bg-brand-default)",
                  borderRadius: "var(--semantic-radius-control)",
                }}
              />
            </div>
            <span className="shrink-0 tabular-nums" style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>
              {won(r.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TransactionsScreen({ onOpen }: ScreenProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Wallet size={18} style={{ color: "var(--semantic-fg-brand-default)" }} />
        <span style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-heading-md)" }}>
          이번 달 가계부를 확인해보세요
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CATEGORIES.map((c) => (
          <div
            key={c.category}
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
              <span style={{ color: "var(--component-card-title-fg)", fontSize: "var(--component-card-title-font-size)" }}>
                {c.category}
              </span>
              <span className="tabular-nums" style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
                {c.items.length}건
              </span>
            </div>
            {c.expenseTotal > 0 ? (
              <Progress value={c.share} label="지출 비중" showValue />
            ) : (
              <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
                지출 없음 · 수입 항목만 있어요.
              </span>
            )}
            <Accordion
              items={[
                {
                  value: c.category,
                  title: "내역 보기",
                  body: (
                    <div className="flex flex-col gap-1">
                      {c.items.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={ => onOpen?.("detail", t.id)}
                          className="flex items-center gap-2 rounded-[var(--semantic-radius-control)] px-2 py-1.5 text-start transition-colors hover:bg-[var(--component-card-bg-hover)]"
                        >
                          <span aria-hidden style={{ color: t.kind === "수입" ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-subtle)" }}>
                            {t.kind === "수입" ? <ArrowDownLeft size={13} /> : <ArrowUpRight size={13} />}
                          </span>
                          <span className="min-w-0 flex-1 truncate" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
                            {t.title}
                          </span>
                          <Badge variant="subtle" tone={t.kind === "수입" ? "success" : "neutral"}>{t.date}</Badge>
                          <span className="tabular-nums" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
                            {t.kind === "수입" ? "+" : "-"}{won(t.amount)}
                          </span>
                        </button>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <MiniBarList
          title="카테고리별 지출"
          rows={CATEGORIES.filter((c) => c.expenseTotal > 0).map((c) => ({ label: c.category, value: c.expenseTotal }))}
          max={MAX_CATEGORY_EXPENSE}
        />
        <MiniBarList
          title="결제 수단별 지출"
          rows={BY_METHOD.map((m) => ({ label: m.method, value: m.total }))}
          max={MAX_METHOD_EXPENSE}
        />
      </div>
    </div>
  );
}
