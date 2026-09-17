import * as React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Divider } from "primereact/divider";
import { Tag } from "primereact/tag";

interface Payment { member: string; item: string; amountNum: number; amount: string; date: string; status: "결제 완료" | "환불" }

const PAYMENTS: Payment[] = [
  { member: "한지우", item: "프리미엄 3개월", amountNum: 270000, amount: "270,000원", date: "09-01", status: "결제 완료" },
  { member: "김서연", item: "PT 10회권", amountNum: 800000, amount: "800,000원", date: "07-15", status: "결제 완료" },
  { member: "박도윤", item: "베이직 1개월", amountNum: 60000, amount: "60,000원", date: "09-10", status: "환불" },
  { member: "이하은", item: "프리미엄 6개월", amountNum: 480000, amount: "480,000원", date: "03-11", status: "결제 완료" },
  { member: "정서준", item: "PT 10회권", amountNum: 800000, amount: "800,000원", date: "08-01", status: "결제 완료" },
  { member: "최지후", item: "베이직 1개월", amountNum: 60000, amount: "60,000원", date: "01-05", status: "환불" },
  { member: "오세준", item: "프리미엄 3개월", amountNum: 270000, amount: "270,000원", date: "06-22", status: "결제 완료" },
  { member: "윤새별", item: "PT 5회권", amountNum: 420000, amount: "420,000원", date: "04-18", status: "결제 완료" },
  { member: "황예린", item: "프리미엄 1개월", amountNum: 90000, amount: "90,000원", date: "09-01", status: "결제 완료" },
  { member: "임도현", item: "베이직 1개월", amountNum: 60000, amount: "60,000원", date: "08-15", status: "환불" },
];

export function PaymentsScreen {
  const total = PAYMENTS.filter((p) => p.status === "결제 완료").reduce((s, p) => s + p.amountNum, 0);
  const refunded = PAYMENTS.filter((p) => p.status === "환불").reduce((s, p) => s + p.amountNum, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>총 결제액</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 700 }}>{total.toLocaleString}원</div>
        </div>
        <Divider layout="vertical" />
        <div>
          <div style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>환불액</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--semantic-fg-warning-default)" }}>{refunded.toLocaleString}원</div>
        </div>
        <Divider layout="vertical" />
        <div>
          <div style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>거래 건수</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 700 }}>{PAYMENTS.length}건</div>
        </div>
      </div>

      <DataTable value={PAYMENTS} size="small" stripedRows paginator rows={6}>
        <Column field="member" header="회원" />
        <Column field="item" header="상품" />
        <Column field="amount" header="금액" />
        <Column field="date" header="일자" />
        <Column field="status" header="상태" body={(p: Payment) => <Tag value={p.status} severity={p.status === "환불" ? "warning" : "success"} />} />
      </DataTable>
    </div>
  );
}
