import * as React from "react";
import { ArrowLeft } from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { Field } from "../../../bases/shadcn/Field";
import { Input } from "../../../bases/shadcn/Input";
import { Select } from "../../../bases/shadcn/Select";
import { TRANSACTIONS } from "../data";
import type { ScreenProps } from "../screens";

function won(n: number): string {
  return `₩${n.toLocaleString("ko-KR")}`;
}

// 실제 자료 분류만 선택 가능, 임의 분류 제외
const CATEGORIES = Object.fromEntries(
  Array.from(new Set(TRANSACTIONS.map((t) => t.category))).map((c) => [c, c]),
);

const FIELD: { label: string; get: (t: (typeof TRANSACTIONS)[number]) => string }[] = [
  { label: "날짜", get: (t) => `2026-${t.date}` },
  { label: "결제 수단", get: (t) => t.method },
];

export function TransactionDetailScreen({ itemId, onOpen }: ScreenProps) {
  const t = TRANSACTIONS.find((x) => x.id === itemId) ?? TRANSACTIONS[0];
  const [category, setCategory] = React.useState(t.category);
  const [memo, setMemo] = React.useState(t.memo);
  // itemId 변경 시 편집 상태 조정. 안 하면 이전 값이 새 거래에 남음
  React.useEffect( => {
    setCategory(t.category);
    setMemo(t.memo);
  }, [t.id]);

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

        <div className="flex flex-col gap-3" style={{ borderTop: "var(--semantic-border-width-default) solid var(--component-card-border)", paddingTop: "0.75rem" }}>
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
          <div className="flex items-center justify-between gap-3">
            <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>
              분류
            </span>
            <Select items={CATEGORIES} value={category} onValueChange={setCategory} size="sm" />
          </div>
          <Field label="메모" htmlFor="memo-input">
            <Input id="memo-input" value={memo} onChange={(e) => setMemo(e.target.value)} />
          </Field>
        </div>
      </div>
    </div>
  );
}
