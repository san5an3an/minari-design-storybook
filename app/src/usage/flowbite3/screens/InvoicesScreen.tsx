import * as React from "react";
import { Badge, Select, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
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
function invoiceStats: readonly InvoiceStat[] {
  const paid = INVOICES.filter((i) => i.status === "결제 완료");
  const overdue = INVOICES.filter((i) => i.status === "연체");
  const unpaid = INVOICES.filter((i) => i.status === "미결제");
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
      <Badge color="info">구독 중</Badge>
    </div>
  );
}

const STATUSES: readonly Invoice["status"][] = ["결제 완료", "미결제", "연체"];

export function InvoicesScreen({ onNavigate, onSelect }: ScreenProps) {
  const [status, setStatus] = React.useState<Invoice["status"] | "전체">("전체");

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const [sort, setSort] = React.useState<"issued" | "amount">("issued");

  const rows = (status === "전체" ? INVOICES : INVOICES.filter((i) => i.status === status))
    .slice
    .sort((a, b) => (sort === "amount" ? b.total - a.total : b.issuedLabel.localeCompare(a.issuedLabel)));

  return (
    <div className="flex flex-col gap-4">
      <CurrentPlanBanner />
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}>
        {invoiceStats.map((s) => (
          <InvoiceStatCard key={s.label} stat={s} />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {(["전체", ...STATUSES] as const).map((s) => {
          const count = s === "전체" ? INVOICES.length : INVOICES.filter((i) => i.status === s).length;
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

      <Select value={sort} onChange={(e) => setSort(e.target.value as "issued" | "amount")} className="max-w-xs">
        <option value="issued">발행일 순</option>
        <option value="amount">금액 순</option>
      </Select>

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
    </div>
  );
}
