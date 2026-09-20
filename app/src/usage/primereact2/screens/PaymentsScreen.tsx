import * as React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Divider } from "primereact/divider";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";

interface Payment { member: string; item: string; amountNum: number; amount: string; date: string; status: "결제 완료" | "환불"; method: string; orderId: string; refundReason?: string }

const PAYMENTS: Payment[] = [
  { member: "한지우", item: "프리미엄 3개월", amountNum: 270000, amount: "270,000원", date: "09-01", status: "결제 완료", method: "카드 국민 •••• 4821", orderId: "#OD-9931" },
  { member: "김서연", item: "PT 10회권", amountNum: 800000, amount: "800,000원", date: "07-15", status: "결제 완료", method: "카드 신한 •••• 1190", orderId: "#OD-9902" },
  { member: "박도윤", item: "베이직 1개월", amountNum: 60000, amount: "60,000원", date: "09-10", status: "환불", method: "카드 국민 •••• 4821", orderId: "#OD-9928", refundReason: "회원 단순 변심" },
  { member: "이하은", item: "프리미엄 6개월", amountNum: 480000, amount: "480,000원", date: "03-11", status: "결제 완료", method: "카드 하나 •••• 3370", orderId: "#OD-9814" },
  { member: "정서준", item: "PT 10회권", amountNum: 800000, amount: "800,000원", date: "08-01", status: "결제 완료", method: "카드 삼성 •••• 2045", orderId: "#OD-9917" },
  { member: "최지후", item: "베이직 1개월", amountNum: 60000, amount: "60,000원", date: "01-05", status: "환불", method: "카드 신한 •••• 7712", orderId: "#OD-9756", refundReason: "이용 전 결제 취소" },
  { member: "오세준", item: "프리미엄 3개월", amountNum: 270000, amount: "270,000원", date: "06-22", status: "결제 완료", method: "카드 국민 •••• 5508", orderId: "#OD-9873" },
  { member: "윤새별", item: "PT 5회권", amountNum: 420000, amount: "420,000원", date: "04-18", status: "결제 완료", method: "카드 하나 •••• 6629", orderId: "#OD-9838" },
  { member: "황예린", item: "프리미엄 1개월", amountNum: 90000, amount: "90,000원", date: "09-01", status: "결제 완료", method: "카드 삼성 •••• 9134", orderId: "#OD-9930" },
  { member: "임도현", item: "베이직 1개월", amountNum: 60000, amount: "60,000원", date: "08-15", status: "환불", method: "카드 국민 •••• 4460", orderId: "#OD-9920", refundReason: "장기 출장으로 이용 불가" },
];

export function PaymentsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = PAYMENTS.find((p) => p.orderId === selectedId);
  const total = PAYMENTS.filter((p) => p.status === "결제 완료").reduce((s, p) => s + p.amountNum, 0);
  const refunded = PAYMENTS.filter((p) => p.status === "환불").reduce((s, p) => s + p.amountNum, 0);

  if (selected) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <Button label="← 목록으로" text size="small" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setSelectedId(null)} />
        <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{selected.item}</div>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", rowGap: "0.4rem", columnGap: "1rem", fontSize: "0.85rem" }}>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>주문번호</span><span>{selected.orderId}</span>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>회원</span><span>{selected.member}</span>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>결제수단</span><span>{selected.method}</span>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>금액</span><span>{selected.amount}</span>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>결제일</span><span>{selected.date}</span>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>상태</span>
          <span><Tag value={selected.status} severity={selected.status === "환불" ? "warning" : "success"} /></span>
          {selected.refundReason ? (
            <>
              <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>환불 사유</span><span>{selected.refundReason}</span>
            </>
          ) : null}
        </div>
      </div>
    );
  }

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

      <DataTable value={PAYMENTS} size="small" stripedRows paginator rows={6} selectionMode="single" onRowClick={(e) => setSelectedId((e.data as Payment).orderId)} style={{ cursor: "pointer" }}>
        <Column field="member" header="회원" />
        <Column field="item" header="상품" />
        <Column field="amount" header="금액" />
        <Column field="date" header="일자" />
        <Column field="status" header="상태" body={(p: Payment) => <Tag value={p.status} severity={p.status === "환불" ? "warning" : "success"} />} />
      </DataTable>
    </div>
  );
}
