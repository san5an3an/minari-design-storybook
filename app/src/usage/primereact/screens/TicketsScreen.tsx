import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface Ticket {
  id: string;
  subject: string;
  customer: string;
  status: "열림" | "대기" | "닫힘";
  priority: "긴급" | "보통" | "낮음";
}

const TICKETS: Ticket[] = [
  { id: "#4821", subject: "결제 승인 후 주문 미반영", customer: "(주)한빛물산", status: "열림", priority: "긴급" },
  { id: "#4820", subject: "로그인 2단계 인증 오류", customer: "김도현", status: "대기", priority: "보통" },
  { id: "#4818", subject: "환불 처리 지연 문의", customer: "이서아", status: "열림", priority: "보통" },
  { id: "#4815", subject: "API 요청 한도 상향", customer: "그린테크", status: "닫힘", priority: "낮음" },
  { id: "#4812", subject: "청구서 항목 오류", customer: "박준서", status: "닫힘", priority: "낮음" },
];

const STATUS_COLOR: Record<Ticket["status"], string> = {
  열림: "var(--semantic-fg-danger-default)",
  대기: "var(--semantic-fg-warning-default)",
  닫힘: "var(--semantic-fg-neutral-subtle)",
};
const PRIORITY_COLOR: Record<Ticket["priority"], string> = {
  긴급: "var(--semantic-bg-danger-default)",
  보통: "var(--semantic-bg-brand-default)",
  낮음: "var(--semantic-bg-neutral-subtle)",
};

export function TicketsScreen {
  return (
    <DataTable value={TICKETS} size="small" stripedRows>
      <Column field="id" header="티켓" style={{ width: "6rem" }} />
      <Column field="subject" header="제목" />
      <Column field="customer" header="고객" />
      <Column
        field="status"
        header="상태"
        body={(t: Ticket) => <span style={{ color: STATUS_COLOR[t.status] }}>{t.status}</span>}
      />
      <Column
        field="priority"
        header="우선순위"
        body={(t: Ticket) => (
          <Tag
            value={t.priority}
            style={{ background: PRIORITY_COLOR[t.priority], color: "#fff" }}
          />
        )}
      />
    </DataTable>
  );
}
