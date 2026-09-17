import * as React from "react";
import { Avatar } from "primereact/avatar";
import { Chip } from "primereact/chip";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Paginator } from "primereact/paginator";
import { Tag } from "primereact/tag";

interface Ticket {
  id: string; subject: string; customer: string; agent: string;
  status: "열림" | "대기" | "닫힘"; priority: "긴급" | "보통" | "낮음";
}

const TICKETS: Ticket[] = [
  { id: "#4821", subject: "결제 승인 후 주문 미반영", customer: "(주)한빛물산", agent: "김도현", status: "열림", priority: "긴급" },
  { id: "#4820", subject: "로그인 2단계 인증 오류", customer: "김도현", agent: "이서아", status: "대기", priority: "보통" },
  { id: "#4818", subject: "환불 처리 지연 문의", customer: "이서아", agent: "김도현", status: "열림", priority: "보통" },
  { id: "#4815", subject: "API 요청 한도 상향", customer: "그린테크", agent: "박준서", status: "닫힘", priority: "낮음" },
  { id: "#4812", subject: "청구서 항목 오류", customer: "박준서", agent: "최유나", status: "닫힘", priority: "낮음" },
  { id: "#4809", subject: "정기결제 카드 만료 안내 요청", customer: "(주)델타상사", agent: "이서아", status: "열림", priority: "보통" },
  { id: "#4806", subject: "대량 주문 CSV 업로드 실패", customer: "그린테크", agent: "박준서", status: "대기", priority: "긴급" },
  { id: "#4803", subject: "쿠폰 중복 적용 문의", customer: "최유나", agent: "김도현", status: "닫힘", priority: "낮음" },
  { id: "#4801", subject: "배송지 변경 요청", customer: "(주)한빛물산", agent: "최유나", status: "열림", priority: "보통" },
  { id: "#4798", subject: "세금계산서 재발행", customer: "(주)델타상사", agent: "박준서", status: "닫힘", priority: "낮음" },
  { id: "#4795", subject: "API 키 재발급 요청", customer: "그린테크", agent: "이서아", status: "대기", priority: "보통" },
  { id: "#4790", subject: "환불 계좌 정보 오류", customer: "박준서", agent: "김도현", status: "열림", priority: "긴급" },
];

const STATUS_COLOR: Record<Ticket["status"], string> = {
  열림: "var(--semantic-fg-danger-default)",
  대기: "var(--semantic-fg-warning-default)",
  닫힘: "var(--semantic-fg-neutral-subtle)",
};
const PRIORITY_COLOR: Record<Ticket["priority"], string> = {
  긴급: "var(--semantic-bg-danger-default)",
  보통: "var(--semantic-bg-brand-default)",
  낮음: "var(--semantic-bg-neutral-default)",
};

const STATUS_FILTERS = ["전체", "열림", "대기", "닫힘"] as const;

export function TicketsScreen {
  const [statusFilter, setStatusFilter] = React.useState<(typeof STATUS_FILTERS)[number]>("전체");
  const [first, setFirst] = React.useState(0);
  const rows = 6;

  const filtered = TICKETS.filter((t) => statusFilter === "전체" || t.status === statusFilter);
  const page = filtered.slice(first, first + rows);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {STATUS_FILTERS.map((s) => (
          <Chip
            key={s}
            label={`${s} ${s === "전체" ? TICKETS.length : TICKETS.filter((t) => t.status === s).length}`}
            className={statusFilter === s ? "p-chip-active" : undefined}
            onClick={ => { setStatusFilter(s); setFirst(0); }}
            style={{
              cursor: "pointer",
              background: statusFilter === s ? "var(--semantic-bg-brand-default)" : undefined,
              color: statusFilter === s ? "var(--semantic-fg-on-brand-default)" : undefined,
            }}
          />
        ))}
      </div>

      <DataTable value={page} size="small" stripedRows>
        <Column field="id" header="티켓" style={{ width: "5rem" }} />
        <Column field="subject" header="제목" />
        <Column field="customer" header="고객" />
        <Column
          field="agent" header="담당자"
          body={(t: Ticket) => (
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Avatar label={t.agent.slice(0, 1)} shape="circle" size="normal" style={{ width: "1.5rem", height: "1.5rem", fontSize: "0.7rem", background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }} />
              <span style={{ fontSize: "0.8125rem" }}>{t.agent}</span>
            </div>
          )}
        />
        <Column field="status" header="상태" body={(t: Ticket) => <span style={{ color: STATUS_COLOR[t.status] }}>{t.status}</span>} />
        <Column field="priority" header="우선순위" body={(t: Ticket) => <Tag value={t.priority} style={{ background: PRIORITY_COLOR[t.priority], color: "#fff" }} />} />
      </DataTable>

      <Paginator first={first} rows={rows} totalRecords={filtered.length} onPageChange={(e) => setFirst(e.first)} />
    </div>
  );
}
