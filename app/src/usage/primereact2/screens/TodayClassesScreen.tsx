import * as React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { ProgressBar } from "primereact/progressbar";
import { Tag } from "primereact/tag";

interface ClassItem { time: string; name: string; coach: string; enrolled: number; capacity: number }

const CLASSES: ClassItem[] = [
  { time: "07:00", name: "모닝 요가", coach: "이하은", enrolled: 12, capacity: 15 },
  { time: "08:30", name: "크로스핏 기초", coach: "박도윤", enrolled: 6, capacity: 12 },
  { time: "10:00", name: "필라테스 리포머", coach: "정서준", enrolled: 8, capacity: 8 },
  { time: "12:30", name: "런치 필라테스", coach: "정서준", enrolled: 8, capacity: 10 },
  { time: "15:00", name: "시니어 스트레칭", coach: "이하은", enrolled: 5, capacity: 10 },
  { time: "17:30", name: "복싱 기초", coach: "최지후", enrolled: 9, capacity: 10 },
  { time: "19:00", name: "스피닝", coach: "최지후", enrolled: 20, capacity: 20 },
  { time: "20:30", name: "저녁 요가", coach: "이하은", enrolled: 11, capacity: 15 },
];

export function TodayClassesScreen {
  const totalEnrolled = CLASSES.reduce((s, c) => s + c.enrolled, 0);
  const totalCapacity = CLASSES.reduce((s, c) => s + c.capacity, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "0.5rem", padding: "0.9rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBlockEnd: "0.4rem" }}>
          <span style={{ fontWeight: 600 }}>오늘 전체 정원 사용률</span>
          <span>{totalEnrolled} / {totalCapacity}</span>
        </div>
        <ProgressBar value={Math.round((totalEnrolled / totalCapacity) * 100)} />
      </div>

      <DataTable value={CLASSES} size="small" stripedRows>
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
