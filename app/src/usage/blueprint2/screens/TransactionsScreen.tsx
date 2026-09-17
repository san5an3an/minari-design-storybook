"use client";

import * as React from "react";
import { Alert, Breadcrumbs, Button, Card, EntityTitle, HTMLSelect, HTMLTable, InputGroup, Tag } from "@blueprintjs/core";
import type { BreadcrumbProps, Intent } from "@blueprintjs/core";
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

function TransactionDetail({ tx, onBack, onSelect }: { tx: Transaction; onBack:  => void; onSelect: (id: string) => void }) {
  const related = TRANSACTIONS.filter((t) => t.id !== tx.id && t.category === tx.category);
  const [cancelling, setCancelling] = React.useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button icon="arrow-left" onClick={onBack} minimal style={{ alignSelf: "flex-start" }}>
          목록으로
        </Button>
        {/* Breadcrumbs로 드릴다운 위치 표시 */}
        <Breadcrumbs
          items={[{ text: "거래내역" }, { text: tx.merchant, current: true } satisfies BreadcrumbProps]}
        />
        {tx.status !== "취소" ? (
          <Button
            minimal small intent="danger" icon="disable" className="ms-auto"
            onClick={ => setCancelling(true)}
          >
            거래 취소
          </Button>
        ) : null}
      </div>
      <Card>
        <EntityTitle
          title={tx.merchant}
          subtitle={`${tx.dateLabel} · ${tx.category}`}
          tags={<Tag intent={STATUS_INTENT[tx.status]} minimal>{tx.status}</Tag>}
        />
        <span
          style={{
            fontSize: "1.75rem", fontWeight: 700, display: "block", marginBlockStart: "0.5rem",
            color: tx.amount < 0 ? "var(--semantic-fg-danger-default)" : "var(--semantic-fg-success-default)",
          }}
        >
          {fmt(tx.amount)}
        </span>
      </Card>
      <Card>
        <span style={{ fontWeight: 600, fontSize: "0.8125rem" }}>메모</span>
        <p style={{ marginTop: 4 }}>{tx.memo}</p>
      </Card>
      {related.length > 0 ? (
        <Card>
          <span style={{ fontWeight: 600, fontSize: "0.8125rem" }}>같은 카테고리("{tx.category}") 거래</span>
          <div className="flex flex-col gap-2" style={{ marginBlockStart: "0.5rem" }}>
            {related.map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between"
                style={{ cursor: "pointer", padding: "0.375rem 0" }}
                onClick={ => onSelect(r.id)}
              >
                <span style={{ fontSize: "0.8125rem" }}>{r.merchant} · {r.dateLabel}</span>
                <span style={{ fontSize: "0.8125rem", opacity: 0.8 }}>{fmt(r.amount)}</span>
              </div>
            ))}
          </div>
        </Card>
      ) : null}
      {/* 베이스에 없는 Alert로 취소 확인 처리 */}
      <Alert
        isOpen={cancelling}
        intent="danger"
        icon="disable"
        confirmButtonText="취소 처리"
        cancelButtonText="닫기"
        onConfirm={ => setCancelling(false)}
        onCancel={ => setCancelling(false)}
      >
        {tx.merchant} 거래를 취소할까요? 되돌릴 수 없어요.
      </Alert>
    </div>
  );
}

const CATEGORY_OPTIONS = ["전체", ...new Set(TRANSACTIONS.map((t) => t.category))];
const STATUS_OPTIONS = ["전체", "완료", "대기", "취소"];

const PROMO_IMAGE =
  "https://images.unsplash.com/photo-1695326462806-fa4a9556f773?auto=format&fit=crop&w=960&q=60";

// 작은 배너, 히어로 없이 이미지 배너 하나만 표시
function PromoBanner {
  return (
    <div
      className="flex shrink-0 items-center"
      style={{
        blockSize: "7rem",
        borderRadius: "var(--semantic-radius-container)",
        backgroundImage:
          `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
          `color-mix(in oklch, var(--semantic-bg-success-default) 25%, black) 100%), url("${PROMO_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-4 py-3" style={{ color: "white" }}>
        <div style={{ fontSize: "0.75rem", opacity: 0.85 }}>이번 달 마감까지 D-14</div>
        <div style={{ fontSize: "1rem", fontWeight: 700 }}>세금계산서 미발행 1건. 확인이 필요해요</div>
      </div>
    </div>
  );
}

export function TransactionsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState("전체");
  const [status, setStatus] = React.useState("전체");
  const [query, setQuery] = React.useState("");
  const selected = TRANSACTIONS.find((t) => t.id === selectedId) ?? null;

  if (selected) {
    return <TransactionDetail tx={selected} onBack={ => setSelectedId(null)} onSelect={setSelectedId} />;
  }

  const rows = TRANSACTIONS.filter((tx) => {
    if (category !== "전체" && tx.category !== category) return false;
    if (status !== "전체" && tx.status !== status) return false;
    if (query && !tx.merchant.includes(query)) return false;
    return true;
  });

  const income = TRANSACTIONS.filter((t) => t.amount > 0).reduce((s, t) => s + t.amount, 0);
  const expense = TRANSACTIONS.filter((t) => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0);

  return (
    <div className="flex flex-col gap-4">
      <PromoBanner />

      <div className="flex flex-wrap gap-3">
        <Card style={{ flex: "1 1 9rem", minWidth: "9rem" }}>
          <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>총 입금</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--semantic-fg-success-default)" }}>
            {income.toLocaleString}원
          </div>
        </Card>
        <Card style={{ flex: "1 1 9rem", minWidth: "9rem" }}>
          <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>총 출금</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--semantic-fg-danger-default)" }}>
            {expense.toLocaleString}원
          </div>
        </Card>
        <Card style={{ flex: "1 1 9rem", minWidth: "9rem" }}>
          <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>순현금흐름</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{(income - expense).toLocaleString}원</div>
        </Card>
        <Card style={{ flex: "1 1 9rem", minWidth: "9rem" }}>
          <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>전체 거래</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{TRANSACTIONS.length}건</div>
        </Card>
      </div>

      {/* 필터 칩 */}
      <div className="flex flex-wrap items-center gap-3">
        <InputGroup
          leftIcon="search" placeholder="거래처 검색" value={query}
          onChange={(e) => setQuery(e.currentTarget.value)} style={{ minWidth: "10rem" }}
        />
        <HTMLSelect value={category} onChange={(e) => setCategory(e.currentTarget.value)} options={CATEGORY_OPTIONS} />
        <HTMLSelect value={status} onChange={(e) => setStatus(e.currentTarget.value)} options={STATUS_OPTIONS} />
        <Tag minimal className="ms-auto">{rows.length}건</Tag>
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
    </div>
  );
}
