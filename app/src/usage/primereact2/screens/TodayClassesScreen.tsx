import * as React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { ProgressBar } from "primereact/progressbar";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";

interface ClassItem { time: string; name: string; coach: string; enrolled: number; capacity: number; roster: string[] }

const CLASSES: ClassItem[] = [
  { time: "07:00", name: "모닝 요가", coach: "이하은", enrolled: 12, capacity: 15, roster: ["김서연", "박도윤", "최지후", "정서준", "한지우", "오세준", "윤새별", "김도현", "이서아", "박준서", "최유나", "정하은"] },
  { time: "08:30", name: "크로스핏 기초", coach: "박도윤", enrolled: 6, capacity: 12, roster: ["한지우", "오세준", "김도현", "박준서", "임도현", "장하람"] },
  { time: "10:00", name: "필라테스 리포머", coach: "정서준", enrolled: 8, capacity: 8, roster: ["김서연", "이서아", "최유나", "정하은", "윤새별", "서지안", "김하나", "한소미"] },
  { time: "12:30", name: "런치 필라테스", coach: "정서준", enrolled: 8, capacity: 10, roster: ["김서연", "이하은", "최지후", "한지우", "오세준", "윤새별", "김도현", "이서아"] },
  { time: "15:00", name: "시니어 스트레칭", coach: "이하은", enrolled: 5, capacity: 10, roster: ["윤도경", "송민재", "김하나", "이민호", "한소미"] },
  { time: "17:30", name: "복싱 기초", coach: "최지후", enrolled: 9, capacity: 10, roster: ["박도윤", "정서준", "오세준", "박준서", "임도현", "장하람", "이민호", "김도현", "서지안"] },
  { time: "19:00", name: "스피닝", coach: "최지후", enrolled: 20, capacity: 20, roster: ["김서연", "박도윤", "이하은", "정서준", "한지우", "오세준", "윤새별", "김도현", "이서아", "박준서", "최유나", "정하은", "송민재", "임도현", "장하람", "서지안", "윤도경", "김하나", "이민호", "한소미"] },
  { time: "20:30", name: "저녁 요가", coach: "이하은", enrolled: 11, capacity: 15, roster: ["김서연", "최지후", "한지우", "윤새별", "이서아", "최유나", "정하은", "송민재", "서지안", "김하나", "한소미"] },
];

export function TodayClassesScreen {
  const [selected, setSelected] = React.useState<ClassItem | null>(null);
  const totalEnrolled = CLASSES.reduce((s, c) => s + c.enrolled, 0);
  const totalCapacity = CLASSES.reduce((s, c) => s + c.capacity, 0);

  if (selected) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <Button label="← 목록으로" text size="small" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setSelected(null)} />
        <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{selected.time} · {selected.name}</div>
        <span style={{ fontSize: "0.85rem", color: "var(--semantic-fg-neutral-subtle)" }}>
          강사 {selected.coach} · 정원 {selected.enrolled}/{selected.capacity}
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
          {selected.roster.map((name) => (
            <Tag key={name} value={name} severity="info" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "0.5rem", padding: "0.9rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBlockEnd: "0.4rem" }}>
          <span style={{ fontWeight: 600 }}>오늘 전체 정원 사용률</span>
          <span>{totalEnrolled} / {totalCapacity}</span>
        </div>
        <ProgressBar value={Math.round((totalEnrolled / totalCapacity) * 100)} />
      </div>

      <DataTable value={CLASSES} size="small" stripedRows selectionMode="single" onRowClick={(e) => setSelected(e.data as ClassItem)} style={{ cursor: "pointer" }}>
        <Column field="time" header="시간" style={{ width: "5rem" }} />
        <Column field="name" header="수업" />
        <Column field="coach" header="강사" />
        <Column header="정원" body={(c: ClassItem) => (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: "5rem" }}>
              <ProgressBar value={(c.enrolled / c.capacity) * 100} showValue={false} style={{ height: "0.35rem" }} />
            </div>
            <Tag value={`${c.enrolled} / ${c.capacity}`} severity={c.enrolled >= c.capacity ? "danger" : "info"} />
          </div>
        )} />
      </DataTable>
    </div>
  );
}
