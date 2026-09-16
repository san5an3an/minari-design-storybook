import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { TRANSACTIONS } from "../data";
import type { ScreenProps } from "../screens";

function won(n: number): string {
  return `${n < 0 ? "-" : ""}₩${Math.abs(n).toLocaleString("ko-KR")}`;
}

export function TransactionsScreen({ onOpen }: ScreenProps) {
  return (
    <div className="flex flex-col" style={{ borderRadius: "var(--semantic-radius-container)", overflow: "hidden" }}>
      {TRANSACTIONS.map((t, i) => (
        <button
          key={t.id}
          type="button"
          onClick={ => onOpen?.("detail", t.id)}
          className="flex items-center gap-3 px-4 py-3 text-start transition-colors hover:bg-[var(--component-card-bg-hover)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--semantic-border-focus-default)]"
          style={{
            background: "var(--component-card-bg)",
            borderTop: i === 0 ? "var(--semantic-border-width-default) solid var(--component-card-border)" : "none",
            borderBottom: "var(--semantic-border-width-default) solid var(--component-card-border)",
            borderInline: "var(--semantic-border-width-default) solid var(--component-card-border)",
          }}
        >
          <span
            aria-hidden
            className="flex size-8 shrink-0 items-center justify-center"
            style={{
              background: t.kind === "수입" ? "var(--semantic-bg-success-subtle)" : "var(--semantic-bg-neutral-subtle)",
              color: t.kind === "수입" ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-subtle)",
              borderRadius: "var(--semantic-radius-control)",
            }}
          >
            {t.kind === "수입" ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}
          </span>
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="truncate" style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}>
              {t.title}
            </span>
            <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
              {t.category} · {t.date}
            </span>
          </span>
          <span
            className="tabular-nums"
            style={{
              color: t.kind === "수입" ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-body-sm)",
            }}
          >
            {t.kind === "수입" ? "+" : "-"}{won(t.amount)}
          </span>
        </button>
      ))}
    </div>
  );
}
