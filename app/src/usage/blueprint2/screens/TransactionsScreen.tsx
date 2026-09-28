import * as React from "react";
import { Button, ButtonGroup, Card, Drawer, HTMLSelect, HTMLTable, InputGroup, NonIdealState, Tag } from "@blueprintjs/core";
import type { Intent } from "@blueprintjs/core";
import { TRANSACTIONS, type Transaction } from "../data";

const STATUS_INTENT: Record<Transaction["status"], Intent> = {
  완료: "success",
  대기: "warning",
  취소: "none",
};

const LAYOUT_CSS = `
.bp2-tx { container-type: inline-size; container-name: bp2tx; }
.bp2-tx-stats { display: grid; gap: 0.75rem; grid-template-columns: repeat(2, minmax(0, 1fr)); }
@container bp2tx (min-width: 34rem) {
  .bp2-tx-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

function fmt(amount: number) {
  const sign = amount < 0 ? "-" : "+";
  return `${sign}${Math.abs(amount).toLocaleString}원`;
}

function periodOf(dateLabel: string): "9월" | "8월" | "기타" {
  if (dateLabel.startsWith("9월")) return "9월";
  if (dateLabel.startsWith("8월")) return "8월";
  return "기타";
}

function TransactionDrawer({ tx, onClose }: { tx: Transaction | null; onClose:  => void }) {
  const related = tx ? TRANSACTIONS.filter((t) => t.merchant === tx.merchant && t.id !== tx.id) : [];
  return (
    <Drawer isOpen={tx != null} onClose={onClose} title={tx?.merchant ?? ""} icon="credit-card" size="24rem">
      {tx ? (
        <div className="flex flex-col gap-4 p-4">
          <Card>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: "1rem", fontWeight: 600 }}>{tx.merchant}</span>
                <Tag intent={STATUS_INTENT[tx.status]} minimal>{tx.status}</Tag>
              </div>
              <span
                style={{ fontSize: "1.5rem", fontWeight: 600, color: tx.amount < 0 ? "var(--semantic-fg-danger-default)" : "var(--semantic-fg-success-default)" }}
              >
                {fmt(tx.amount)}
              </span>
              <span style={{ opacity: 0.7, fontSize: "0.8125rem" }}>{tx.dateLabel} · {tx.category}</span>
            </div>
          </Card>
          <Card>
            <span style={{ fontWeight: 600, fontSize: "0.8125rem" }}>메모</span>
            <p style={{ marginTop: 4 }}>{tx.memo}</p>
          </Card>
          <div className="flex flex-col gap-2">
            <span style={{ fontWeight: 600, fontSize: "0.8125rem" }}>{tx.merchant}의 다른 거래</span>
            {related.length === 0 ? (
              <span style={{ fontSize: "0.8125rem", opacity: 0.6 }}>다른 거래 기록이 없어요.</span>
            ) : (
              <div className="flex flex-col gap-2">
                {related.map((r) => (
                  <Card key={r.id} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.8125rem" }}>{r.dateLabel}</span>
                    <span style={{ fontSize: "0.8125rem", color: r.amount < 0 ? "var(--semantic-fg-danger-default)" : "var(--semantic-fg-success-default)" }}>
                      {fmt(r.amount)}
                    </span>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </Drawer>
  );
}

export function TransactionsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("전체");
  const [period, setPeriod] = React.useState<"전체" | "9월" | "8월">("전체");

  const categories = ["전체", ...new Set(TRANSACTIONS.map((t) => t.category))];
  const selected = TRANSACTIONS.find((t) => t.id === selectedId) ?? null;

  const q = query.trim;
  const rows = TRANSACTIONS.filter((t) => {
    if (category !== "전체" && t.category !== category) return false;
    if (period !== "전체" && periodOf(t.dateLabel) !== period) return false;
    if (q && !t.merchant.includes(q) && !t.memo.includes(q)) return false;
    return true;
  });

  // 이번 달 9월 고정 지표, 필터와 무관하게 의미 유지
  const septTx = TRANSACTIONS.filter((t) => periodOf(t.dateLabel) === "9월");
  const income = septTx.filter((t) => t.amount > 0 && t.status !== "취소").reduce((s, t) => s + t.amount, 0);
  const expense = septTx.filter((t) => t.amount < 0 && t.status !== "취소").reduce((s, t) => s + Math.abs(t.amount), 0);
  const pending = septTx.filter((t) => t.status === "대기").length;

  return (
    <div className="bp2-tx flex flex-col gap-4">
      <style>{LAYOUT_CSS}</style>

      <div className="flex items-center gap-3" style={{ flexWrap: "wrap" }}>
        <InputGroup
          leftIcon="search"
          placeholder="거래처·메모 검색"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          style={{ minWidth: "12rem" }}
        />
        <HTMLSelect value={category} onChange={(e) => setCategory(e.currentTarget.value)} options={categories} />
        {/* 기간 선택 ButtonGroup, 카탈로그 보강용 */}
        <ButtonGroup>
          {(["전체", "9월", "8월"] as const).map((p) => (
            <Button key={p} text={p} active={period === p} onClick={ => setPeriod(p)} />
          ))}
        </ButtonGroup>
        <Tag minimal className="ms-auto">{rows.length}건</Tag>
      </div>

      <div className="bp2-tx-stats">
        <Card style={{ minWidth: 0 }}>
          <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>이번달 매출</span>
          <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--semantic-fg-success-default)" }}>{fmt(income)}</div>
        </Card>
        <Card style={{ minWidth: 0 }}>
          <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>이번달 지출</span>
          <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--semantic-fg-danger-default)" }}>{fmt(-expense)}</div>
        </Card>
        <Card style={{ minWidth: 0 }}>
          <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>세금계산서 대기</span>
          <div style={{ fontSize: "1.5rem", fontWeight: 600 }}>{pending}건</div>
        </Card>
        <Card style={{ minWidth: 0 }}>
          <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>선택 기간 거래</span>
          <div style={{ fontSize: "1.5rem", fontWeight: 600 }}>{rows.length}건</div>
        </Card>
      </div>

      {rows.length === 0 ? (
        <NonIdealState icon="search" title="조건에 맞는 거래가 없습니다" description="검색어나 필터를 바꿔보세요." />
      ) : (
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
          {rows.map((tx) => (
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
      )}

      <TransactionDrawer tx={selected} onClose={ => setSelectedId(null)} />
    </div>
  );
}
