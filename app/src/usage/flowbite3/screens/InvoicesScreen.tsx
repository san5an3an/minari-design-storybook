import * as React from "react";
import {
  Badge, Button, Kbd, Label, Modal, ModalBody, ModalFooter, ModalHeader, Select, Table, TableBody, TableCell,
  TableHead, TableHeadCell, TableRow, TextInput,
} from "flowbite-react";
import { INVOICES, PLANS, type Invoice } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<Invoice["status"], string> = {
  "결제 완료": "success",
  미결제: "warning",
  연체: "failure",
};

const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;

// 지표 카드 4개. gray, green, primary, red, yellow 다섯 색만 사용
type StatTone = "primary" | "green" | "yellow" | "red";
interface InvoiceStat { label: string; value: string; tone: StatTone }
function invoiceStats(invoices: readonly Invoice[]): readonly InvoiceStat[] {
  const paid = invoices.filter((i) => i.status === "결제 완료");
  const overdue = invoices.filter((i) => i.status === "연체");
  const unpaid = invoices.filter((i) => i.status === "미결제");
  return [
    { label: "이번 달 매출", value: won(paid.reduce((s, i) => s + i.total, 0)), tone: "primary" },
    { label: "결제 완료", value: `${paid.length}건`, tone: "green" },
    { label: "미결제", value: `${unpaid.length}건`, tone: "yellow" },
    { label: "연체", value: `${overdue.length}건`, tone: "red" },
  ];
}
const TONE_HEX: Record<StatTone, string> = {
  primary: "var(--color-primary-600)",
  green: "var(--color-green-600)",
  yellow: "var(--color-yellow-600)",
  red: "var(--color-red-600)",
};

function InvoiceStatCard({ stat }: { stat: InvoiceStat }) {
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
      <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>{stat.label}</span>
      <div style={{ fontSize: "18px", fontWeight: 600, color: TONE_HEX[stat.tone] }}>{stat.value}</div>
    </div>
  );
}

function CurrentPlanBanner {
  const current = PLANS.find((p) => p.current);
  if (!current) return null;
  return (
    <div
      style={{
        alignItems: "center",
        background: "var(--color-primary-50)",
        border: "1px solid var(--color-primary-200)",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        padding: "14px 18px",
      }}
    >
      <span style={{ fontWeight: 600, fontSize: "15px" }}>
        현재 플랜, {current.name} · {won(current.monthlyPrice)}/월
      </span>
      <span
        style={{
          fontSize: "12px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px",
          background: "var(--color-primary-600)", color: "white",
        }}
      >
        구독 중
      </span>
    </div>
  );
}

// 상태별 금액 비중 도넛 차트로 표시, MonthlyRevenueBar 막대와 함께 차트 종류 2개
function StatusAmountDonut({ invoices }: { invoices: readonly Invoice[] }) {
  const slices: { label: Invoice["status"]; total: number; color: string }[] = STATUSES.map((s) => ({
    label: s,
    total: invoices.filter((i) => i.status === s).reduce((sum, i) => sum + i.total, 0),
    color: s === "결제 완료" ? "var(--color-green-500)" : s === "미결제" ? "var(--color-yellow-500)" : "var(--color-red-500)",
  }));
  const grandTotal = slices.reduce((s, x) => s + x.total, 0) || 1;
  const r = 28;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "16px", flex: 1, minWidth: 0 }}>
      <span style={{ fontSize: "13px", fontWeight: 600, marginBottom: "10px", display: "block" }}>상태별 금액 비중</span>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <svg width="72" height="72" viewBox="0 0 72 72" role="img" aria-label="상태별 금액 비중 도넛 차트">
          <circle cx="36" cy="36" r={r} fill="none" stroke="var(--color-gray-100)" strokeWidth="10" />
          {slices.map((s) => {
            const frac = s.total / grandTotal;
            const dash = frac * circumference;
            const seg = (
              <circle
                key={s.label}
                cx="36"
                cy="36"
                r={r}
                fill="none"
                stroke={s.color}
                strokeWidth="10"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 36 36)"
              >
                <title>{`${s.label} ${won(s.total)}`}</title>
              </circle>
            );
            offset += dash;
            return seg;
          })}
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {slices.map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
              <span aria-hidden style={{ width: "8px", height: "8px", borderRadius: "50%", background: s.color, flexShrink: 0 }} />
              <span style={{ color: "var(--color-gray-600)", flex: 1 }}>{s.label}</span>
              <span style={{ fontWeight: 600 }}>{Math.round((s.total / grandTotal) * 100)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 월별 청구 금액 미니 막대그래프 표시
function MonthlyRevenueBar({ invoices }: { invoices: readonly Invoice[] }) {
  const byMonth = new Map<string, number>;
  for (const inv of invoices) {
    const month = inv.issuedLabel.slice(0, 7);
    byMonth.set(month, (byMonth.get(month) ?? 0) + inv.total);
  }
  const months = Array.from(byMonth.keys).sort;
  const max = Math.max(...Array.from(byMonth.values), 1);
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "16px", flex: 1, minWidth: 0 }}>
      <span style={{ fontSize: "13px", fontWeight: 600, marginBottom: "10px", display: "block" }}>월별 청구 금액</span>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "14px", height: "64px" }}>
        {months.map((m) => {
          const amount = byMonth.get(m) ?? 0;
          return (
            <div key={m} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: 1 }}>
              <span style={{ fontSize: "10px", color: "var(--color-gray-500)" }}>{Math.round(amount / 10000).toLocaleString("ko-KR")}만</span>
              <div style={{ width: "100%", height: `${Math.max((amount / max) * 44, 4)}px`, background: "var(--color-primary-400)", borderRadius: "3px" }} />
              <span style={{ fontSize: "10px", color: "var(--color-gray-500)" }}>{m.slice(5)}월</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const STATUSES: readonly Invoice["status"][] = ["결제 완료", "미결제", "연체"];

const EMPTY_NEW_INVOICE = { customer: "", item: "", amount: "" };

export function InvoicesScreen({ onNavigate, onSelect, invoices: invoicesProp, onIssueInvoice }: ScreenProps) {
  // Dashboard가 기준 목록 제공하기
  const invoices = invoicesProp ?? INVOICES;
  const [status, setStatus] = React.useState<Invoice["status"] | "전체">("전체");
  const [issueOpen, setIssueOpen] = React.useState(false);
  const [draft, setDraft] = React.useState(EMPTY_NEW_INVOICE);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const [sort, setSort] = React.useState<"issued" | "amount">("issued");

  const rows = (status === "전체" ? invoices : invoices.filter((i) => i.status === status))
    .slice
    .sort((a, b) => (sort === "amount" ? b.total - a.total : b.issuedLabel.localeCompare(a.issuedLabel)));

  const issueInvoice =  => {
    const amount = Number(draft.amount);
    if (!draft.customer.trim || !draft.item.trim || !Number.isFinite(amount) || amount <= 0) return;
    const today = new Date.toISOString.slice(0, 10);
    const next: Invoice = {
      id: `in${Date.now}`,
      number: `INV-${today.replace(/-/g, "").slice(0, 6)}-${String(invoices.length + 1).padStart(4, "0")}`,
      customer: draft.customer.trim,
      total: amount,
      status: "미결제",
      issuedLabel: today,
      lines: [{ label: draft.item.trim, amount }],
    };
    onIssueInvoice?.(next);
    setDraft(EMPTY_NEW_INVOICE);
    setIssueOpen(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <CurrentPlanBanner />
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}>
        {invoiceStats(invoices).map((s) => (
          <InvoiceStatCard key={s.label} stat={s} />
        ))}
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <StatusAmountDonut invoices={invoices} />
        <MonthlyRevenueBar invoices={invoices} />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          {(["전체", ...STATUSES] as const).map((s) => {
            const count = s === "전체" ? invoices.length : invoices.filter((i) => i.status === s).length;
            return (
              <button
                key={s}
                type="button"
                onClick={ => setStatus(s)}
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: status === s ? "var(--color-primary-600)" : "var(--color-gray-100)",
                  color: status === s ? "white" : "var(--color-gray-700)",
                }}
              >
                {s} {count}
              </button>
            );
          })}
        </div>
        {/* 인보이스 발행 기능 추가 */}
        <Button size="sm" onClick={ => setIssueOpen(true)}>+ 새 인보이스 발행</Button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Select value={sort} onChange={(e) => setSort(e.target.value as "issued" | "amount")} className="max-w-xs">
          <option value="issued">발행일 순</option>
          <option value="amount">금액 순</option>
        </Select>
        {/* Kbd로 검색 단축키 힌트 표시 */}
        <span style={{ fontSize: "12px", color: "var(--color-gray-500)", display: "flex", alignItems: "center", gap: "4px" }}>
          <Kbd>⌘</Kbd><Kbd>K</Kbd> 로 인보이스 번호 검색
        </span>
      </div>

      <div className="overflow-x-auto">
      <Table style={{ minWidth: "560px" }}>
        <TableHead>
          <TableRow>
            <TableHeadCell>번호</TableHeadCell>
            <TableHeadCell>고객</TableHeadCell>
            <TableHeadCell>금액</TableHeadCell>
            <TableHeadCell>상태</TableHeadCell>
            <TableHeadCell>발행일</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {rows.map((inv) => (
            <TableRow key={inv.id} onClick={ => open(inv.id)} style={{ cursor: "pointer" }}>
              <TableCell className="font-medium">{inv.number}</TableCell>
              <TableCell>{inv.customer}</TableCell>
              <TableCell>{won(inv.total)}</TableCell>
              <TableCell><Badge color={STATUS_COLOR[inv.status]}>{inv.status}</Badge></TableCell>
              <TableCell>{inv.issuedLabel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>

      <Modal show={issueOpen} onClose={ => setIssueOpen(false)} size="sm">
        <ModalHeader>새 인보이스 발행</ModalHeader>
        <ModalBody>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <Label htmlFor="new-invoice-customer">고객</Label>
              <TextInput
                id="new-invoice-customer"
                value={draft.customer}
                onChange={(e) => setDraft((d) => ({ ...d, customer: e.target.value }))}
                placeholder="예: 마포상사"
              />
            </div>
            <div>
              <Label htmlFor="new-invoice-item">청구 항목</Label>
              <TextInput
                id="new-invoice-item"
                value={draft.item}
                onChange={(e) => setDraft((d) => ({ ...d, item: e.target.value }))}
                placeholder="예: Growth 플랜 (10월)"
              />
            </div>
            <div>
              <Label htmlFor="new-invoice-amount">금액(원)</Label>
              <TextInput
                id="new-invoice-amount"
                type="number"
                min="0"
                value={draft.amount}
                onChange={(e) => setDraft((d) => ({ ...d, amount: e.target.value }))}
                placeholder="예: 980000"
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={issueInvoice}
            disabled={!draft.customer.trim || !draft.item.trim || !(Number(draft.amount) > 0)}
          >
            발행
          </Button>
          <Button color="light" onClick={ => setIssueOpen(false)}>취소</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
