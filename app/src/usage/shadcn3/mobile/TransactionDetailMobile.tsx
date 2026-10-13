"use client";
import * as React from "react";
import { Badge } from "../../../bases/shadcn/Badge";
import { Card } from "../../../bases/shadcn/Card";
import { Input } from "../../../bases/shadcn/Input";
import { Select } from "../../../bases/shadcn/Select";
import { won } from "../screens/OverviewScreen";
import type { MobileScreenProps } from "../screens";
import { CategoryChip } from "./parts";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-(--semantic-space-sm)">
      <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>{label}</span>
      <span className="min-w-0 truncate" style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}>{value}</span>
    </div>
  );
}

export function TransactionDetailMobile({ itemId, transactions }: MobileScreenProps) {
  const t = transactions.find((x) => x.id === itemId) ?? transactions[0];
  // 실제 거래에 있는 분류만 선택지로 제공. 없는 분류를 지어내지 않기 위함
  const categories = Object.fromEntries(
    Array.from(new Set(transactions.map((x) => x.category))).map((c) => [c, c]),
  );
  const [category, setCategory] = React.useState(t.category);
  const [memo, setMemo] = React.useState(t.memo);
  React.useEffect(() => {
    setCategory(t.category);
    setMemo(t.memo);
  }, [t.id]);

  const income = t.kind === "수입";

  return (
    <div className="flex flex-col gap-(--semantic-space-md) p-(--semantic-space-md)">
      <Card>
        <div className="flex flex-col items-center gap-(--semantic-space-sm) text-center">
          <CategoryChip category={t.category} size="3rem" round />
          <span style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body)" }}>{t.title}</span>
          <span
            className="tabular-nums"
            style={{
              color: income ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-heading-lg)",
              letterSpacing: "var(--semantic-tracking-heading-lg)",
            }}
          >
            {income ? "+" : "-"}{won(t.amount)}
          </span>
          <div className="flex items-center gap-(--semantic-space-sm)">
            <Badge variant="subtle" tone={income ? "success" : "neutral"}>{t.kind}</Badge>
            <Badge variant="outline" tone="neutral">{t.category}</Badge>
          </div>
        </div>
      </Card>

      <Card title="거래 정보">
        <div className="flex flex-col gap-(--semantic-space-md)">
          <div className="flex flex-col gap-(--semantic-space-sm)">
            <InfoRow label="날짜" value={`2026-${t.date}`} />
            <InfoRow label="결제 수단" value={t.method} />
          </div>
          {/* 감싸는 div 에서 Select 트리거 폭을 가득 채움 지정. 어댑터 Select 에 className 이 없음 */}
          <div className="flex flex-col [&_[data-slot=select-trigger]]:w-full">
            <Select label="분류" items={categories} value={category} onValueChange={setCategory} />
          </div>
          <Input label="메모" id="memo-input-m" value={memo} onChange={(e) => setMemo(e.target.value)} />
        </div>
      </Card>
    </div>
  );
}
