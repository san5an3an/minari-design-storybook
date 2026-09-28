import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Panel } from "primereact/panel";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { SelectButton } from "primereact/selectbutton";
import { InputSwitch } from "primereact/inputswitch";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { Users, UserCheck, AlertTriangle, Ban } from "lucide-react";

type Status = "활성" | "만료 임박" | "정지";
interface Member {
  id: string;
  name: string;
  plan: "베이직" | "프리미엄" | "PT 10회";
  status: Status;
  sessionsLeft: number;
  sessionsTotal: number;
  joined: string;
  phone: string;
}

const MEMBERS: Member[] = [
  { id: "m1", name: "한지우", plan: "프리미엄", status: "활성", sessionsLeft: 8, sessionsTotal: 10, joined: "2026-02-01", phone: "010-2231-8845" },
  { id: "m2", name: "김서연", plan: "PT 10회", status: "만료 임박", sessionsLeft: 1, sessionsTotal: 10, joined: "2026-07-15", phone: "010-4471-2290" },
  { id: "m3", name: "박도윤", plan: "베이직", status: "활성", sessionsLeft: 0, sessionsTotal: 0, joined: "2026-05-20", phone: "010-9932-1187" },
  { id: "m4", name: "이하은", plan: "프리미엄", status: "활성", sessionsLeft: 0, sessionsTotal: 0, joined: "2025-11-03", phone: "010-1187-5620" },
  { id: "m5", name: "정서준", plan: "PT 10회", status: "활성", sessionsLeft: 6, sessionsTotal: 10, joined: "2026-06-18", phone: "010-6602-4471" },
  { id: "m6", name: "최지후", plan: "베이직", status: "만료 임박", sessionsLeft: 0, sessionsTotal: 0, joined: "2026-08-01", phone: "010-7744-9931" },
  { id: "m7", name: "오세준", plan: "PT 10회", status: "활성", sessionsLeft: 3, sessionsTotal: 5, joined: "2026-04-22", phone: "010-3321-8804" },
  { id: "m8", name: "윤새별", plan: "프리미엄", status: "활성", sessionsLeft: 0, sessionsTotal: 0, joined: "2026-01-09", phone: "010-8850-1123" },
  { id: "m9", name: "황예린", plan: "베이직", status: "정지", sessionsLeft: 0, sessionsTotal: 0, joined: "2025-09-30", phone: "010-2298-6671" },
  { id: "m10", name: "임도현", plan: "PT 10회", status: "만료 임박", sessionsLeft: 1, sessionsTotal: 10, joined: "2026-08-15", phone: "010-5567-2201" },
  { id: "m11", name: "장하람", plan: "프리미엄", status: "활성", sessionsLeft: 0, sessionsTotal: 0, joined: "2026-03-11", phone: "010-9921-4408" },
];

const STATUS_SEVERITY: Record<Status, "success" | "warning" | "danger"> = { "활성": "success", "만료 임박": "warning", "정지": "danger" };

export function MembersScreen {
  const [members, setMembers] = React.useState<Member[]>(MEMBERS);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [statusFilter, setStatusFilter] = React.useState<"전체" | Status>("전체");
  const [search, setSearch] = React.useState("");
  const [autopay, setAutopay] = React.useState<Record<string, boolean>>(
    Object.fromEntries(MEMBERS.map((m) => [m.id, m.plan !== "베이직"])),
  );
  const toast = React.useRef<Toast>(null);
  const selected = members.find((m) => m.id === selectedId);

  if (selected) {
    const suspend =  => {
      confirmDialog({
        message: `${selected.name}님의 이용을 정지할까요? 정지하면 예약·결제가 모두 제한돼요.`,
        header: "회원 정지",
        icon: "pi pi-exclamation-triangle",
        acceptClassName: "p-button-danger",
        acceptLabel: "정지",
        rejectLabel: "취소",
        accept:  => {
          setMembers((prev) => prev.map((m) => (m.id === selected.id ? { ...m, status: "정지" } : m)));
          toast.current?.show({ severity: "success", summary: "정지했어요", detail: `${selected.name}님을 정지 처리했어요.`, life: 2500 });
        },
      });
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Toast ref={toast} />
        <ConfirmDialog />
        <Button label="← 목록으로" text onClick={ => setSelectedId(null)} style={{ width: "fit-content", padding: 0 }} />
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBlockEnd: "1rem", flexWrap: "wrap" }}>
            <Avatar label={selected.name.slice(0, 1)} shape="circle" size="xlarge" style={{ background: "var(--semantic-bg-brand-default)", color: "var(--semantic-fg-on-brand-default)" }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{selected.name}</div>
              <div style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{selected.plan} · {selected.joined} 가입</div>
            </div>
            <Tag value={selected.status} severity={STATUS_SEVERITY[selected.status]} style={{ marginInlineStart: "auto" }} />
          </div>
          {selected.sessionsTotal > 0 && (
            <div style={{ marginBlockEnd: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBlockEnd: "0.25rem" }}>
                <span>잔여 PT 세션</span><span>{selected.sessionsLeft} / {selected.sessionsTotal}</span>
              </div>
              <ProgressBar value={(selected.sessionsLeft / selected.sessionsTotal) * 100} showValue={false} />
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", rowGap: "0.5rem", columnGap: "1rem", fontSize: "0.85rem", marginBlockEnd: "1rem" }}>
            <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>연락처</span><span>{selected.phone}</span>
            <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>회원 ID</span><span>{selected.id.toUpperCase}</span>
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBlockEnd: "1rem" }}>
            <InputSwitch checked={autopay[selected.id] ?? false} onChange={(e) => setAutopay((prev) => ({ ...prev, [selected.id]: e.value ?? false }))} disabled={selected.status === "정지"} />
            <span style={{ fontSize: "0.85rem" }}>자동 결제</span>
          </label>
          {selected.status !== "정지" ? (
            <Button label="회원 정지" icon="pi pi-ban" size="small" severity="danger" outlined onClick={suspend} />
          ) : (
            <span style={{ fontSize: "0.82rem", color: "var(--semantic-fg-danger-default)" }}>이용이 정지된 회원이에요.</span>
          )}
        </Card>
      </div>
    );
  }

  const STATUS_OPTIONS: readonly { label: string; value: "전체" | Status }[] = [
    { label: `전체 ${members.length}`, value: "전체" },
    { label: `활성 ${members.filter((m) => m.status === "활성").length}`, value: "활성" },
    { label: `만료 임박 ${members.filter((m) => m.status === "만료 임박").length}`, value: "만료 임박" },
    { label: `정지 ${members.filter((m) => m.status === "정지").length}`, value: "정지" },
  ];
  const shown = statusFilter === "전체" ? members : members.filter((m) => m.status === statusFilter);

  const stats = [
    { label: "전체 회원", value: members.length, icon: Users, tone: "brand" },
    { label: "활성", value: members.filter((m) => m.status === "활성").length, icon: UserCheck, tone: "success" },
    { label: "만료 임박", value: members.filter((m) => m.status === "만료 임박").length, icon: AlertTriangle, tone: "warning" },
    { label: "정지", value: members.filter((m) => m.status === "정지").length, icon: Ban, tone: "danger" },
  ] as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Toast ref={toast} />
      <div className="pr2-members-stats" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }}>
        {/* 4열 카드 최소폭 11rem 유지, 48rem 이상만 4열 적용 */}
        <style>{"@container pr2 (min-width: 48rem) { .pr2-members-stats { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; } }"}</style>
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
          <InputText value={search} onChange={(e) => setSearch(e.target.value)} placeholder="이름·이용권 검색" aria-label="회원 검색" style={{ width: "min(14rem, 100%)" }} />
        </IconField>
      </div>

      <DataTable
        value={shown}
        size="small"
        stripedRows
        onRowClick={(e) => setSelectedId((e.data as Member).id)}
        style={{ cursor: "pointer" }}
        paginator
        rows={8}
        globalFilter={search}
        globalFilterFields={["name", "plan", "phone"]}
      >
        <Column field="name" header="이름" sortable body={(m: Member) => (
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Avatar label={m.name.slice(0, 1)} shape="circle" size="normal" style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }} />
            {m.name}
          </span>
        )} />
        <Column field="plan" header="이용권" sortable />
        <Column field="joined" header="가입일" sortable />
        <Column header="세션" body={(m: Member) => m.sessionsTotal > 0 ? (
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <div style={{ width: "4.5rem" }}><ProgressBar value={(m.sessionsLeft / m.sessionsTotal) * 100} showValue={false} style={{ height: "0.35rem" }} /></div>
            <span style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>{m.sessionsLeft}/{m.sessionsTotal}</span>
          </div>
        ) : <span style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtlest)" }}>—</span>} />
        <Column field="status" header="상태" sortable body={(m: Member) => <Tag value={m.status} severity={STATUS_SEVERITY[m.status]} />} />
      </DataTable>
    </div>
  );
}
