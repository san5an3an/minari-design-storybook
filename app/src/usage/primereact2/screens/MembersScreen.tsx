import * as React from "react";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Chip } from "primereact/chip";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Knob } from "primereact/knob";
import { ProgressBar } from "primereact/progressbar";
import { Tag } from "primereact/tag";
import { Activity, CalendarCheck, CreditCard, Users } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=60";

interface Member {
  id: string; name: string; plan: "베이직" | "프리미엄" | "PT 10회";
  status: "활성" | "만료 임박"; sessionsLeft: number; sessionsTotal: number; joined: string;
}

const MEMBERS: Member[] = [
  { id: "m1", name: "한지우", plan: "프리미엄", status: "활성", sessionsLeft: 8, sessionsTotal: 10, joined: "2026-02-01" },
  { id: "m2", name: "김서연", plan: "PT 10회", status: "만료 임박", sessionsLeft: 1, sessionsTotal: 10, joined: "2026-07-15" },
  { id: "m3", name: "박도윤", plan: "베이직", status: "활성", sessionsLeft: 0, sessionsTotal: 0, joined: "2026-05-20" },
  { id: "m4", name: "이하은", plan: "프리미엄", status: "활성", sessionsLeft: 6, sessionsTotal: 10, joined: "2026-03-11" },
  { id: "m5", name: "정서준", plan: "PT 10회", status: "활성", sessionsLeft: 9, sessionsTotal: 10, joined: "2026-08-01" },
  { id: "m6", name: "최지후", plan: "베이직", status: "만료 임박", sessionsLeft: 0, sessionsTotal: 0, joined: "2026-01-05" },
  { id: "m7", name: "오세준", plan: "프리미엄", status: "활성", sessionsLeft: 4, sessionsTotal: 10, joined: "2026-06-22" },
  { id: "m8", name: "윤새별", plan: "PT 10회", status: "만료 임박", sessionsLeft: 2, sessionsTotal: 10, joined: "2026-04-18" },
  { id: "m9", name: "송민재", plan: "베이직", status: "활성", sessionsLeft: 0, sessionsTotal: 0, joined: "2026-07-30" },
  { id: "m10", name: "황예린", plan: "프리미엄", status: "활성", sessionsLeft: 10, sessionsTotal: 10, joined: "2026-09-01" },
  { id: "m11", name: "장하윤", plan: "PT 10회", status: "활성", sessionsLeft: 7, sessionsTotal: 10, joined: "2026-05-10" },
  { id: "m12", name: "임도현", plan: "베이직", status: "만료 임박", sessionsLeft: 0, sessionsTotal: 0, joined: "2025-12-15" },
];

const STATS = [
  { label: "전체 회원", value: String(MEMBERS.length), icon: Users },
  { label: "이번 달 신규", value: "3", icon: Activity },
  { label: "오늘 방문", value: "18", icon: CalendarCheck },
  { label: "이번 달 매출", value: "₩2,140,000", icon: CreditCard },
] as const;

function Hero {
  return (
    <div
      className="flex flex-row items-center justify-between gap-4 px-6 py-4"
      style={{
        minHeight: "8rem",
        borderRadius: "0.5rem",
        backgroundImage:
          `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
          `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${HERO_IMAGE}")`,
        backgroundSize: "cover", backgroundPosition: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <span style={{ color: "white", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.25 }}>회원 현황</span>
        <span style={{ color: "white", opacity: 0.9 }}>오늘도 18명이 방문했어요. 만료 임박 회원 4명 확인해요.</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: "0.5rem", padding: "0.5rem" }}>
        <Knob value={72} readOnly size={70} valueTemplate="{value}%" style={{ filter: "brightness(1.2)" }} />
      </div>
    </div>
  );
}

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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Hero />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBlockEnd: "0.4rem" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "1.75rem", height: "1.75rem", borderRadius: "0.375rem",
                  background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)",
                }}>
                  <Icon size={14} />
                </span>
                <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.75rem" }}>{s.label}</span>
              </div>
              <div style={{ fontSize: "1.375rem", fontWeight: 700 }}>{s.value}</div>
            </Card>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Chip label={`활성 ${MEMBERS.filter((m) => m.status === "활성").length}`} />
        <Chip label={`만료 임박 ${MEMBERS.filter((m) => m.status === "만료 임박").length}`} style={{ background: "var(--semantic-bg-warning-subtle)", color: "var(--semantic-fg-warning-default)" }} />
      </div>

      <DataTable value={MEMBERS} size="small" stripedRows paginator rows={6}
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
        <Column field="joined" header="가입일" />
      </DataTable>
    </div>
  );
}
