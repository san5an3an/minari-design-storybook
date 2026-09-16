import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface Payment {
  member: string;
  item: string;
  amount: string;
  date: string;
  status: "결제 완료" | "환불";
}

const PAYMENTS: Payment[] = [
  { member: "한지우", item: "프리미엄 3개월", amount: "270,000원", date: "09-01", status: "결제 완료" },
  { member: "김서연", item: "PT 10회권", amount: "800,000원", date: "07-15", status: "결제 완료" },
  { member: "박도윤", item: "베이직 1개월", amount: "60,000원", date: "09-10", status: "환불" },
];

export function PaymentsScreen {
  return (
    <DataTable value={PAYMENTS} size="small" stripedRows>
      <Column field="member" header="회원" />
      <Column field="item" header="상품" />
      <Column field="amount" header="금액" />
      <Column field="status" header="상태" body={(p: Payment) => <Tag value={p.status} severity={p.status === "환불" ? "warning" : "success"} />} />
    </DataTable>
  );
}
