import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Panel } from "primereact/panel";
import { Inbox, Flame, CheckCircle2 } from "lucide-react";

interface Message { author: string; text: string; time: string }

interface Ticket {
  id: string;
  subject: string;
  customer: string;
  status: "열림" | "대기" | "닫힘";
  priority: "긴급" | "보통" | "낮음";
  thread: Message[];
}

const TICKETS: Ticket[] = [
  {
    id: "#4821", subject: "결제 승인 후 주문 미반영", customer: "(주)한빛물산", status: "열림", priority: "긴급",
    thread: [
      { author: "(주)한빛물산", text: "카드 승인은 났는데 주문 목록에 안 떠요.", time: "09:12" },
      { author: "상담원", text: "결제 ID 확인 중입니다, 잠시만요.", time: "09:20" },
    ],
  },
  {
    id: "#4820", subject: "로그인 2단계 인증 오류", customer: "김도현", status: "대기", priority: "보통",
    thread: [{ author: "김도현", text: "인증번호가 계속 안 와요.", time: "어제" }],
  },
  {
    id: "#4818", subject: "환불 처리 지연 문의", customer: "이서아", status: "열림", priority: "보통",
    thread: [{ author: "이서아", text: "환불 신청한 지 5일째인데 아직이에요.", time: "2일 전" }],
  },
  {
    id: "#4815", subject: "API 요청 한도 상향", customer: "그린테크", status: "닫힘", priority: "낮음",
    thread: [
      { author: "그린테크", text: "요청 한도를 올릴 수 있을까요?", time: "지난주" },
      { author: "상담원", text: "엔터프라이즈 플랜으로 안내드렸고 반영 완료했습니다.", time: "지난주" },
    ],
  },
  {
    id: "#4812", subject: "청구서 항목 오류", customer: "박준서", status: "닫힘", priority: "낮음",
    thread: [{ author: "상담원", text: "중복 청구 확인 후 정정했습니다.", time: "3일 전" }],
  },
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
  const [tickets, setTickets] = React.useState<Ticket[]>(TICKETS);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [reply, setReply] = React.useState("");
  const selected = tickets.find((t) => t.id === selectedId);

  if (selected) {
    const submit =  => {
      if (!reply.trim) return;
      setTickets((prev) =>
        prev.map((t) =>
          t.id === selected.id
            ? { ...t, status: t.status === "열림" ? "대기" : t.status, thread: [...t.thread, { author: "상담원", text: reply.trim, time: "방금" }] }
            : t,
        ),
      );
      setReply("");
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <Button label="← 목록으로" text size="small" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setSelectedId(null)} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{selected.subject}</div>
            <span style={{ fontSize: "0.85rem", color: "var(--semantic-fg-neutral-subtle)" }}>{selected.id} · {selected.customer}</span>
          </div>
          <Tag value={selected.priority} style={{ background: PRIORITY_COLOR[selected.priority], color: "#fff" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", borderTop: "1px solid var(--semantic-border-neutral-subtle)", paddingTop: "0.6rem" }}>
          {selected.thread.map((m, i) => (
            <div key={i} style={{ fontSize: "0.85rem" }}>
              <span style={{ fontWeight: 600 }}>{m.author}</span>{" "}
              <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>· {m.time}</span>
              <div>{m.text}</div>
            </div>
          ))}
        </div>
        <InputTextarea value={reply} onChange={(e) => setReply(e.target.value)} rows={3} placeholder="답장을 입력해요" style={{ width: "100%" }} />
        <Button label="답장 보내기" size="small" style={{ width: "fit-content" }} disabled={!reply.trim} onClick={submit} />
      </div>
    );
  }

  const stats = [
    { label: "열림", value: tickets.filter((t) => t.status === "열림").length, icon: Inbox, tone: "brand" },
    { label: "긴급", value: tickets.filter((t) => t.priority === "긴급").length, icon: Flame, tone: "danger" },
    { label: "닫힘", value: tickets.filter((t) => t.status === "닫힘").length, icon: CheckCircle2, tone: "success" },
  ] as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Panel key={s.label} header={s.label} style={{ flex: "1 1 10rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  aria-hidden
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "var(--semantic-radius-control)",
                    background: `var(--semantic-bg-${s.tone}-subtle)`,
                    color: `var(--semantic-fg-${s.tone}-default)`,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{s.value}</div>
              </div>
            </Panel>
          );
        })}
      </div>
      <DataTable value={tickets} size="small" stripedRows selectionMode="single" onRowClick={(e) => setSelectedId((e.data as Ticket).id)} style={{ cursor: "pointer" }}>
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
    </div>
  );
}
