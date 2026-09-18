import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Panel } from "primereact/panel";
import { Users, UserCheck, AlertTriangle } from "lucide-react";

interface Member {
  id: string;
  name: string;
  plan: "베이직" | "프리미엄" | "PT 10회";
  status: "활성" | "만료 임박";
  sessionsLeft: number;
  sessionsTotal: number;
  joined: string;
}

const MEMBERS: Member[] = [
  { id: "m1", name: "한지우", plan: "프리미엄", status: "활성", sessionsLeft: 8, sessionsTotal: 10, joined: "2026-02-01" },
  { id: "m2", name: "김서연", plan: "PT 10회", status: "만료 임박", sessionsLeft: 1, sessionsTotal: 10, joined: "2026-07-15" },
  { id: "m3", name: "박도윤", plan: "베이직", status: "활성", sessionsLeft: 0, sessionsTotal: 0, joined: "2026-05-20" },
];

export function MembersScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = MEMBERS.find((m) => m.id === selectedId);

  if (selected) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button label="← 목록으로" text onClick={ => setSelectedId(null)} style={{ width: "fit-content", padding: 0 }} />
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBlockEnd: "1rem" }}>
            <Avatar label={selected.name.slice(0, 1)} shape="circle" size="xlarge" style={{ background: "var(--semantic-bg-brand-default)", color: "var(--semantic-fg-on-brand-default)" }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{selected.name}</div>
              <div style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{selected.plan} · {selected.joined} 가입</div>
            </div>
            <Tag value={selected.status} severity={selected.status === "활성" ? "success" : "warning"} style={{ marginInlineStart: "auto" }} />
          </div>
          {selected.sessionsTotal > 0 && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBlockEnd: "0.25rem" }}>
                <span>잔여 PT 세션</span><span>{selected.sessionsLeft} / {selected.sessionsTotal}</span>
              </div>
              <ProgressBar value={(selected.sessionsLeft / selected.sessionsTotal) * 100} showValue={false} />
            </div>
          )}
        </Card>
      </div>
    );
  }

  const stats = [
    { label: "전체 회원", value: MEMBERS.length, icon: Users, tone: "brand" },
    { label: "활성", value: MEMBERS.filter((m) => m.status === "활성").length, icon: UserCheck, tone: "success" },
    { label: "만료 임박", value: MEMBERS.filter((m) => m.status === "만료 임박").length, icon: AlertTriangle, tone: "warning" },
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
      <DataTable value={MEMBERS} size="small" stripedRows
        onRowClick={(e) => setSelectedId((e.data as Member).id)}
      >
        <Column field="name" header="이름" body={(m: Member) => (
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Avatar label={m.name.slice(0, 1)} shape="circle" size="normal" style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }} />
            {m.name}
          </span>
        )} />
        <Column field="plan" header="이용권" />
        <Column field="status" header="상태" body={(m: Member) => <Tag value={m.status} severity={m.status === "활성" ? "success" : "warning"} />} />
      </DataTable>
    </div>
  );
}
