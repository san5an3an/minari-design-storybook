import * as React from "react";
import { Button, Card, HTMLTable, Tag } from "@blueprintjs/core";
import type { Intent } from "@blueprintjs/core";
import { TRANSACTIONS, type Transaction } from "../data";

const STATUS_INTENT: Record<Transaction["status"], Intent> = {
  완료: "success",
  대기: "warning",
  취소: "none",
};

function fmt(amount: number) {
  const sign = amount < 0 ? "-" : "+";
  return `${sign}${Math.abs(amount).toLocaleString}원`;
}

function TransactionDetail({ tx, onBack }: { tx: Transaction; onBack:  => void }) {
  return (
    <div className="flex flex-col gap-4">
      <Button icon="arrow-left" onClick={onBack} minimal style={{ alignSelf: "flex-start" }}>
        목록으로
      </Button>
      <Card>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span style={{ fontSize: "1rem", fontWeight: 600 }}>{tx.merchant}</span>
            <Tag intent={STATUS_INTENT[tx.status]} minimal>{tx.status}</Tag>
          </div>
          <span style={{ fontSize: "1.5rem", fontWeight: 600 }}>{fmt(tx.amount)}</span>
          <span style={{ opacity: 0.7, fontSize: "0.8125rem" }}>{tx.dateLabel} · {tx.category}</span>
        </div>
      </Card>
      <Card>
        <span style={{ fontWeight: 600, fontSize: "0.8125rem" }}>메모</span>
        <p style={{ marginTop: 4 }}>{tx.memo}</p>
      </Card>
    </div>
  );
}

export function TransactionsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = TRANSACTIONS.find((t) => t.id === selectedId) ?? null;

  if (selected) {
    return <TransactionDetail tx={selected} onBack={ => setSelectedId(null)} />;
  }

  const income = TRANSACTIONS.filter((t) => t.amount > 0 && t.status !== "취소").reduce((s, t) => s + t.amount, 0);
  const expense = TRANSACTIONS.filter((t) => t.amount < 0 && t.status !== "취소").reduce((s, t) => s + Math.abs(t.amount), 0);
  const pending = TRANSACTIONS.filter((t) => t.status === "대기").length;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4" style={{ flexWrap: "wrap" }}>
        <Card style={{ flex: "1 1 10rem" }}>
          <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>이번달 매출</span>
          <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--semantic-fg-success-default)" }}>{fmt(income)}</div>
        </Card>
        <Card style={{ flex: "1 1 10rem" }}>
          <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>이번달 지출</span>
          <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--semantic-fg-danger-default)" }}>{fmt(-expense)}</div>
        </Card>
        <Card style={{ flex: "1 1 10rem" }}>
          <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>세금계산서 대기</span>
          <div style={{ fontSize: "1.5rem", fontWeight: 600 }}>{pending}건</div>
        </Card>
      </div>
      <HTMLTable bordered compact interactive style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>날짜</th>
          <th>거래처</th>
          <th>카테고리</th>
          <th>금액</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {TRANSACTIONS.map((tx) => (
          <tr key={tx.id} onClick={ => setSelectedId(tx.id)} style={{ cursor: "pointer" }}>
            <td>{tx.dateLabel}</td>
            <td>{tx.merchant}</td>
            <td>{tx.category}</td>
            <td style={{ color: tx.amount < 0 ? "var(--semantic-fg-danger-default)" : "var(--semantic-fg-success-default)" }}>
              {fmt(tx.amount)}
            </td>
            <td>
              <Tag intent={STATUS_INTENT[tx.status]} minimal>{tx.status}</Tag>
            </td>
          </tr>
        ))}
      </tbody>
      </HTMLTable>
    </div>
  );
}
