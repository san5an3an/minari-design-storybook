import * as React from "react";
import { Tag } from "primereact/tag";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Divider } from "primereact/divider";
import { RadioButton } from "primereact/radiobutton";
import { Chip } from "primereact/chip";
import { Timeline } from "primereact/timeline";

interface Patient {
  id: string;
  name: string;
  age: number;
  lastVisit: string;
  condition: string;
}

interface VisitRecord {
  date: string;
  diagnosis: string;
  doctor: string;
}

const PATIENTS: Patient[] = [
  { id: "p1", name: "정하늘", age: 34, lastVisit: "2026-09-10", condition: "고혈압" },
  { id: "p2", name: "오세준", age: 8, lastVisit: "2026-09-14", condition: "감기" },
  { id: "p3", name: "한소미", age: 67, lastVisit: "2026-08-28", condition: "당뇨" },
];

const RECORDS: Record<string, VisitRecord[]> = {
  p1: [{ date: "2026-09-10", diagnosis: "고혈압 경과 관찰, 약 처방 유지", doctor: "이민호 원장" }, { date: "2026-06-02", diagnosis: "정기 검진", doctor: "이민호 원장" }],
  p2: [{ date: "2026-09-14", diagnosis: "급성 상기도 감염, 항생제 처방", doctor: "김하나 원장" }],
  p3: [{ date: "2026-08-28", diagnosis: "당뇨 수치 안정적, 다음 검진 3개월 후", doctor: "이민호 원장" }],
};

type SortKey = "recent" | "name";

export function PatientsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [sortKey, setSortKey] = React.useState<SortKey>("recent");
  const selected = PATIENTS.find((p) => p.id === selectedId);

  if (selected) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button label="← 목록으로" text onClick={ => setSelectedId(null)} style={{ width: "fit-content", padding: 0 }} />
        <Card title={`${selected.name} (${selected.age}세)`} subTitle={`주요 소견: ${selected.condition}`}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {(RECORDS[selected.id] ?? []).map((r, i) => (
              <div key={i} style={{ borderBlockStart: i > 0 ? "1px solid var(--semantic-border-neutral-subtle)" : undefined, paddingBlockStart: i > 0 ? "0.75rem" : 0 }}>
                <div style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{r.date} · {r.doctor}</div>
                <div>{r.diagnosis}</div>
              </div>
            ))}
          </div>
          <Divider />
          <Button label="처방전 발급" icon="pi pi-file" size="small" />
        </Card>
      </div>
    );
  }

  const shown = [...PATIENTS].sort((a, b) =>
    sortKey === "name" ? a.name.localeCompare(b.name) : b.lastVisit.localeCompare(a.lastVisit),
  );

  const timeline = Object.entries(RECORDS)
    .flatMap(([pid, records]) => records.map((r) => ({ ...r, patient: PATIENTS.find((p) => p.id === pid)!.name })))
    .sort((a, b) => b.date.localeCompare(a.date));

  const byCondition = Array.from(new Set(PATIENTS.map((p) => p.condition))).map((c) => ({
    condition: c,
    count: PATIENTS.filter((p) => p.condition === c).length,
  }));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ fontSize: "1.1rem" }}>Hello, 이민호 원장님! 오늘도 좋은 진료 되세요.</div>
      <div style={{ display: "flex", gap: "1.25rem" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <RadioButton name="sort" value="recent" checked={sortKey === "recent"} onChange={(e) => setSortKey(e.value)} />
          <span style={{ fontSize: "0.85rem" }}>최근 진료순</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <RadioButton name="sort" value="name" checked={sortKey === "name"} onChange={(e) => setSortKey(e.value)} />
          <span style={{ fontSize: "0.85rem" }}>이름순</span>
        </label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {shown.map((p) => (
          <Card key={p.id} style={{ width: "14rem", cursor: "pointer" }} onClick={ => setSelectedId(p.id)}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBlockEnd: "0.5rem" }}>
              <Avatar label={p.name.slice(0, 1)} shape="circle" size="large" style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }} />
              <div>
                <div style={{ fontWeight: 700 }}>{p.name}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{p.age}세</div>
              </div>
            </div>
            <Tag value={p.condition} severity="info" />
            <div style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)", marginTop: "0.5rem" }}>최근 진료 {p.lastVisit}</div>
          </Card>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {byCondition.map((c) => (
          <Chip key={c.condition} label={`${c.condition} ${c.count}명`} />
        ))}
      </div>

      <Card title="최근 진료 기록">
        <Timeline
          value={timeline}
          content={(r) => (
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ fontWeight: 700 }}>{r.patient}</div>
              <div style={{ fontSize: "0.85rem" }}>{r.diagnosis}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>{r.date} · {r.doctor}</div>
            </div>
          )}
        />
      </Card>
    </div>
  );
}
