import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

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

export function PatientsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
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
        </Card>
      </div>
    );
  }

  return (
    <DataTable value={PATIENTS} size="small" stripedRows
      onRowClick={(e) => setSelectedId((e.data as Patient).id)}
    >
      <Column field="name" header="이름" />
      <Column field="age" header="나이" />
      <Column field="condition" header="주요 소견" body={(p: Patient) => <Tag value={p.condition} severity="info" />} />
      <Column field="lastVisit" header="최근 진료" />
    </DataTable>
  );
}
