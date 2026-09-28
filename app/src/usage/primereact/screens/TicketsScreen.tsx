import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { SelectButton } from "primereact/selectbutton";
import { Dropdown } from "primereact/dropdown";
import { Avatar } from "primereact/avatar";
import { Panel } from "primereact/panel";
import { Toast } from "primereact/toast";
import { Inbox, Flame, CheckCircle2, Layers } from "lucide-react";
import { AGENTS, TICKETS, type Ticket, type TicketCategory, type TicketPriority, type TicketStatus } from "../data";

const STATUS_COLOR: Record<Ticket["status"], string> = {
  열림: "var(--semantic-fg-danger-default)",
  대기: "var(--semantic-fg-warning-default)",
  닫힘: "var(--semantic-fg-neutral-subtle)",
};
// 배경색과 글자색은 쌍으로 지정. 흰 글자 고정 시 옅은 배경에서 안 보이는 문제가 있음
const PRIORITY_COLOR: Record<Ticket["priority"], React.CSSProperties> = {
  긴급: { background: "var(--semantic-bg-danger-default)", color: "var(--semantic-fg-on-danger-default)" },
  보통: { background: "var(--semantic-bg-brand-default)", color: "var(--semantic-fg-on-brand-default)" },
  낮음: { background: "var(--semantic-bg-neutral-subtle)", color: "var(--semantic-fg-on-neutral-subtle)" },
};

const CATEGORIES: readonly TicketCategory[] = ["결제", "계정", "로그인", "API", "일반"];
const PRIORITIES: readonly TicketPriority[] = ["긴급", "보통", "낮음"];

interface Draft {
  subject: string;
  customer: string;
  category: TicketCategory;
  priority: TicketPriority;
}
const EMPTY_DRAFT: Draft = { subject: "", customer: "", category: "일반", priority: "보통" };

export function TicketsScreen {
  const [tickets, setTickets] = React.useState<Ticket[]>(TICKETS);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [reply, setReply] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<"전체" | TicketStatus>("전체");
  const [search, setSearch] = React.useState("");
  const [composing, setComposing] = React.useState(false);
  const [draft, setDraft] = React.useState<Draft>(EMPTY_DRAFT);
  const toast = React.useRef<Toast>(null);

  const selected = tickets.find((t) => t.id === selectedId);

  if (selected) {
    const submitReply =  => {
      if (!reply.trim) return;
      setTickets((prev) =>
        prev.map((t) =>
          t.id === selected.id
            ? { ...t, status: t.status === "열림" ? "대기" : t.status, updatedAt: "방금", thread: [...t.thread, { author: "상담원", text: reply.trim, time: "방금" }] }
            : t,
        ),
      );
      setReply("");
      toast.current?.show({ severity: "success", summary: "답장을 보냈어요", detail: `${selected.id} 티켓에 답장이 등록됐어요.`, life: 2500 });
    };
    const reassign = (name: string) => {
      setTickets((prev) => prev.map((t) => (t.id === selected.id ? { ...t, assignee: name } : t)));
      toast.current?.show({ severity: "success", summary: "담당자를 바꿨어요", detail: `${selected.id} → ${name}`, life: 2000 });
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <Toast ref={toast} />
        <Button label="← 목록으로" text size="small" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setSelectedId(null)} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{selected.subject}</div>
            <span style={{ fontSize: "0.85rem", color: "var(--semantic-fg-neutral-subtle)" }}>
              {selected.id} · {selected.customer} · 접수 {selected.createdAt}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Tag value={selected.category} style={{ background: "var(--semantic-bg-neutral-subtlest)", color: "var(--semantic-fg-neutral-default)" }} />
            <Tag value={selected.priority} style={PRIORITY_COLOR[selected.priority]} />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>담당자</span>
          <Dropdown
            value={selected.assignee}
            onChange={(e) => reassign(e.value)}
            options={AGENTS.map((a) => ({ label: `${a.name} · ${a.team}`, value: a.name }))}
            optionLabel="label"
            optionValue="value"
            style={{ width: "14rem" }}
          />
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
        <Button label="답장 보내기" size="small" style={{ width: "fit-content" }} disabled={!reply.trim} onClick={submitReply} />
      </div>
    );
  }

  const STATUS_OPTIONS: readonly { label: string; value: "전체" | TicketStatus }[] = [
    { label: `전체 ${tickets.length}`, value: "전체" },
    { label: `열림 ${tickets.filter((t) => t.status === "열림").length}`, value: "열림" },
    { label: `대기 ${tickets.filter((t) => t.status === "대기").length}`, value: "대기" },
    { label: `닫힘 ${tickets.filter((t) => t.status === "닫힘").length}`, value: "닫힘" },
  ];
  const shown = statusFilter === "전체" ? tickets : tickets.filter((t) => t.status === statusFilter);

  const stats = [
    { label: "전체", value: tickets.length, icon: Layers, tone: "neutral" },
    { label: "열림", value: tickets.filter((t) => t.status === "열림").length, icon: Inbox, tone: "brand" },
    { label: "긴급", value: tickets.filter((t) => t.priority === "긴급").length, icon: Flame, tone: "danger" },
    { label: "닫힘", value: tickets.filter((t) => t.status === "닫힘").length, icon: CheckCircle2, tone: "success" },
  ] as const;

  const submitDraft =  => {
    if (!draft.subject.trim || !draft.customer.trim) return;
    const next: Ticket = {
      id: `#${4828 + tickets.length}`,
      subject: draft.subject.trim,
      customer: draft.customer.trim,
      category: draft.category,
      status: "열림",
      priority: draft.priority,
      assignee: AGENTS[0].name,
      createdAt: "방금", updatedAt: "방금",
      thread: [{ author: draft.customer.trim, text: "(상담원이 직접 등록한 문의)", time: "방금" }],
    };
    setTickets((prev) => [next, ...prev]);
    setDraft(EMPTY_DRAFT);
    setComposing(false);
    toast.current?.show({ severity: "success", summary: "티켓을 등록했어요", detail: `${next.id} · ${next.subject}`, life: 2500 });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Toast ref={toast} />

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {!composing ? (
          <Button label="새 티켓 등록" icon="pi pi-plus" size="small" onClick={ => setComposing(true)} />
        ) : null}
      </div>

      {composing ? (
        <Panel header="새 티켓 등록">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              <span style={{ flex: "1 1 12rem" }}>
                <label style={{ display: "block", fontSize: "0.75rem", marginBlockEnd: "0.25rem", color: "var(--semantic-fg-neutral-subtle)" }}>제목</label>
                <InputText value={draft.subject} onChange={(e) => { const v = e.target.value; setDraft((d) => ({ ...d, subject: v })); }} style={{ width: "100%" }} placeholder="예: 결제 오류 문의" />
              </span>
              <span style={{ flex: "1 1 10rem" }}>
                <label style={{ display: "block", fontSize: "0.75rem", marginBlockEnd: "0.25rem", color: "var(--semantic-fg-neutral-subtle)" }}>고객명</label>
                <InputText value={draft.customer} onChange={(e) => { const v = e.target.value; setDraft((d) => ({ ...d, customer: v })); }} style={{ width: "100%" }} placeholder="예: 김민수" />
              </span>
            </div>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              <span style={{ flex: "1 1 10rem" }}>
                <label style={{ display: "block", fontSize: "0.75rem", marginBlockEnd: "0.25rem", color: "var(--semantic-fg-neutral-subtle)" }}>분류</label>
                <Dropdown value={draft.category} onChange={(e) => setDraft((d) => ({ ...d, category: e.value }))} options={[...CATEGORIES]} style={{ width: "100%" }} />
              </span>
              <span style={{ flex: "1 1 10rem" }}>
                <label style={{ display: "block", fontSize: "0.75rem", marginBlockEnd: "0.25rem", color: "var(--semantic-fg-neutral-subtle)" }}>우선순위</label>
                <Dropdown value={draft.priority} onChange={(e) => setDraft((d) => ({ ...d, priority: e.value }))} options={[...PRIORITIES]} style={{ width: "100%" }} />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
              <Button label="취소" text size="small" onClick={ => { setComposing(false); setDraft(EMPTY_DRAFT); }} />
              <Button label="등록" size="small" disabled={!draft.subject.trim || !draft.customer.trim} onClick={submitDraft} />
            </div>
          </div>
        </Panel>
      ) : null}

      <div className="pr1-tickets-stats" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }}>
        {/* 4열 카드 최소폭 11rem 유지, 48rem 이상 4열, 미만 2열 */}
        <style>{"@container pr1 (min-width: 48rem) { .pr1-tickets-stats { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; } }"}</style>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Panel key={s.label} header={s.label}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  aria-hidden
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "2.25rem", height: "2.25rem", borderRadius: "var(--semantic-radius-control)",
                    background: `var(--semantic-bg-${s.tone}-subtle)`, color: `var(--semantic-fg-${s.tone}-default)`,
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

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.6rem" }}>
        <SelectButton value={statusFilter} onChange={(e) => { if (e.value !== null) setStatusFilter(e.value); }} options={[...STATUS_OPTIONS]} />
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText value={search} onChange={(e) => setSearch(e.target.value)} placeholder="제목·고객·담당자 검색" aria-label="티켓 검색" style={{ width: "min(14rem, 100%)" }} />
        </IconField>
      </div>

      <DataTable
        value={shown}
        size="small"
        stripedRows
        selectionMode="single"
        onRowClick={(e) => setSelectedId((e.data as Ticket).id)}
        style={{ cursor: "pointer" }}
        paginator
        rows={8}
        rowsPerPageOptions={[8, 11]}
        globalFilter={search}
        globalFilterFields={["subject", "customer", "assignee", "id"]}
      >
        <Column field="id" header="티켓" style={{ width: "5.5rem" }} sortable />
        <Column field="subject" header="제목" />
        <Column field="customer" header="고객" />
        <Column
          field="assignee"
          header="담당자"
          body={(t: Ticket) => (
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Avatar label={t.assignee.slice(0, 1)} shape="circle" size="normal" style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)", width: "1.6rem", height: "1.6rem", fontSize: "0.7rem" }} />
              {t.assignee}
            </span>
          )}
        />
        <Column
          field="status"
          header="상태"
          sortable
          body={(t: Ticket) => <span style={{ color: STATUS_COLOR[t.status] }}>{t.status}</span>}
        />
        <Column
          field="priority"
          header="우선순위"
          sortable
          body={(t: Ticket) => <Tag value={t.priority} style={PRIORITY_COLOR[t.priority]} />}
        />
        <Column field="updatedAt" header="갱신" sortable body={(t: Ticket) => <span style={{ fontSize: "0.78rem", color: "var(--semantic-fg-neutral-subtle)" }}>{t.updatedAt}</span>} />
      </DataTable>
    </div>
  );
}
