import { ArrowLeft } from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { TRANSACTIONS } from "../data";
import type { ScreenProps } from "../screens";

function won(n: number): string {
  return `₩${n.toLocaleString("ko-KR")}`;
}

const FIELD: { label: string; get: (t: (typeof TRANSACTIONS)[number]) => string }[] = [
  { label: "날짜", get: (t) => `2026-${t.date}` },
  { label: "분류", get: (t) => t.category },
  { label: "결제 수단", get: (t) => t.method },
  { label: "메모", get: (t) => t.memo },
];

export function TransactionDetailScreen({ itemId, onOpen }: ScreenProps) {
  const t = TRANSACTIONS.find((x) => x.id === itemId) ?? TRANSACTIONS[0];

  return (
    <div className="flex flex-col gap-5" style={{ maxWidth: "32rem" }}>
      <Button variant="plain" onClick={ => onOpen?.("transactions", "")}>
        <ArrowLeft size={14} aria-hidden />
        내역으로
      </Button>

      <div
        className="flex flex-col gap-3"
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
        <div className="flex items-center justify-between">
          <span style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body)" }}>
            {t.title}
          </span>
          <Badge variant="subtle" tone={t.kind === "수입" ? "success" : "neutral"}>{t.kind}</Badge>
        </div>
        <span
          className="tabular-nums"
          style={{
            color: t.kind === "수입" ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-default)",
            fontSize: "var(--semantic-text-heading-lg)",
            letterSpacing: "var(--semantic-tracking-heading-lg)",
          }}
        >
          {t.kind === "수입" ? "+" : "-"}{won(t.amount)}
        </span>

        <div className="flex flex-col gap-2" style={{ borderTop: "var(--semantic-border-width-default) solid var(--component-card-border)", paddingTop: "0.75rem" }}>
          {FIELD.map((f) => (
            <div key={f.label} className="flex items-center justify-between">
              <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>
                {f.label}
              </span>
              <span style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}>
                {f.get(t)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
