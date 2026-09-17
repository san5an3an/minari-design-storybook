import { Badge, Breadcrumb, BreadcrumbItem, Button, Tooltip } from "flowbite-react";
import { INVOICES, type Invoice } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<Invoice["status"], string> = {
  "결제 완료": "success",
  미결제: "warning",
  연체: "failure",
};

const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;

export function InvoiceDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const invoice = INVOICES.find((i) => i.id === selectedId);

  if (!invoice) {
    return (
      <div style={{ border: "1px dashed var(--color-gray-300)", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
        <span style={{ color: "var(--color-gray-500)", fontSize: "14px" }}>
          인보이스를 먼저 골라 주세요. "인보이스" 탭에서 행을 눌러 보세요.
        </span>
        <div style={{ marginTop: "12px" }}>
          <Button size="sm" onClick={ => onNavigate?.("invoices")}>인보이스 목록으로</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Breadcrumb>
        <BreadcrumbItem onClick={ => onNavigate?.("invoices")} className="cursor-pointer">인보이스</BreadcrumbItem>
        <BreadcrumbItem>{invoice.number}</BreadcrumbItem>
      </Breadcrumb>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontWeight: 600, fontSize: "18px" }}>{invoice.number}</span>
          <Tooltip content={`상태: ${invoice.status}`}>
            <Badge color={STATUS_COLOR[invoice.status]}>{invoice.status}</Badge>
          </Tooltip>
        </div>
        <span style={{ fontSize: "14px", color: "var(--color-gray-500)" }}>{invoice.customer} · {invoice.issuedLabel}</span>
      </div>
      <div>
        {invoice.lines.map((l) => (
          <div key={l.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--color-gray-200)" }}>
            <span style={{ fontSize: "14px" }}>{l.label}</span>
            <span style={{ fontSize: "14px" }}>{won(l.amount)}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontWeight: 700 }}>
          <span>합계</span>
          <span>{won(invoice.total)}</span>
        </div>
      </div>
    </div>
  );
}
