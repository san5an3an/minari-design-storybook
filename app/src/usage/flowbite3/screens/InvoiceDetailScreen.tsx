import { Badge, Breadcrumb, BreadcrumbItem, Button, List, ListItem, Tooltip } from "flowbite-react";
import { INVOICES, type Invoice } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<Invoice["status"], string> = {
  "결제 완료": "success",
  미결제: "warning",
  연체: "failure",
};

const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;

export function InvoiceDetailScreen({ selectedId, onNavigate, onSelect, invoices: invoicesProp }: ScreenProps) {
  // Dashboard 인보이스 목록을 기준으로 사용, 없으면 정적 INVOICES로 대체하기
  const invoices = invoicesProp ?? INVOICES;
  const invoice = invoices.find((i) => i.id === selectedId);

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
        <List unstyled className="divide-y" style={{ borderTop: "1px solid var(--color-gray-200)" }}>
          {invoice.lines.map((l) => (
            <ListItem key={l.label} className="flex items-center justify-between" style={{ padding: "8px 0" }}>
              <span style={{ fontSize: "14px" }}>{l.label}</span>
              <span style={{ fontSize: "14px" }}>{won(l.amount)}</span>
            </ListItem>
          ))}
        </List>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontWeight: 700 }}>
          <span>합계</span>
          <span>{won(invoice.total)}</span>
        </div>
      </div>

      {/* 같은 고객의 다른 인보이스, CustomersScreen 관련 항목 패턴과 동일 */}
      <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
        <span style={{ fontSize: "13px", fontWeight: 600 }}>{invoice.customer}의 다른 인보이스</span>
        {( => {
          const related = invoices.filter((i) => i.customer === invoice.customer && i.id !== invoice.id);
          if (related.length === 0) {
            return <span style={{ fontSize: "13px", color: "var(--color-gray-500)", display: "block", marginTop: "8px" }}>없음</span>;
          }
          return (
            <div className="mt-2 flex flex-col gap-2">
              {related.map((i) => (
                <button
                  key={i.id}
                  type="button"
                  onClick={ => { onSelect?.(i.id); }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px",
                    width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: 0,
                  }}
                >
                  <span style={{ fontSize: "13px", color: "var(--color-primary-600)" }}>{i.number}</span>
                  <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>{i.issuedLabel}</span>
                  <Badge color={STATUS_COLOR[i.status]}>{i.status}</Badge>
                  <span style={{ fontSize: "13px", fontWeight: 600 }}>{won(i.total)}</span>
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
