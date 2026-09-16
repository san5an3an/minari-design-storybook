import { PiggyBank, TrendingDown, TrendingUp } from "lucide-react";
import { TRANSACTIONS } from "../data";

function won(n: number): string {
  return `${n < 0 ? "-" : ""}₩${Math.abs(n).toLocaleString("ko-KR")}`;
}

const income = TRANSACTIONS.filter((t) => t.kind === "수입").reduce((s, t) => s + t.amount, 0);
const expense = TRANSACTIONS.filter((t) => t.kind === "지출").reduce((s, t) => s + t.amount, 0);

const STATS = [
  { label: "이번 달 수입", value: won(income), tone: "success", icon: TrendingUp },
  { label: "이번 달 지출", value: won(expense), tone: "danger", icon: TrendingDown },
  { label: "잔액", value: won(income - expense), tone: "brand", icon: PiggyBank },
] as const;

export function SummaryScreen {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {STATS.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className="relative flex flex-col gap-2 overflow-hidden"
            style={{
              background: "var(--component-card-bg)",
              borderColor: "var(--component-card-border)",
              borderWidth: "var(--semantic-border-width-default)",
              borderStyle: "solid",
              borderRadius: "var(--component-card-radius)",
              boxShadow: "var(--component-card-shadow)",
              padding: "var(--component-card-padding)",
            }}
          >
            <span
              aria-hidden
              className="flex size-7 shrink-0 items-center justify-center"
              style={{
                background: `var(--semantic-bg-${s.tone}-subtle)`,
                color: `var(--semantic-fg-${s.tone}-default)`,
                borderRadius: "var(--semantic-radius-control)",
              }}
            >
              <Icon size={14} />
            </span>
            <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>
              {s.label}
            </span>
            <span
              className="tabular-nums"
              style={{
                color: "var(--semantic-fg-neutral-default)",
                fontSize: "var(--semantic-text-heading-lg)",
                letterSpacing: "var(--semantic-tracking-heading-lg)",
              }}
            >
              {s.value}
            </span>
            <Icon
              aria-hidden
              size={64}
              style={{
                position: "absolute",
                right: "-0.75rem",
                bottom: "-0.75rem",
                color: `var(--semantic-fg-${s.tone}-default)`,
                opacity: 0.08,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
