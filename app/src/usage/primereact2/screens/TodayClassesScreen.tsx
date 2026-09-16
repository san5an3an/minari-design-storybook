import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface ClassItem {
  time: string;
  name: string;
  coach: string;
  enrolled: number;
  capacity: number;
}

const CLASSES: ClassItem[] = [
  { time: "07:00", name: "모닝 요가", coach: "이하은", enrolled: 12, capacity: 15 },
  { time: "12:30", name: "런치 필라테스", coach: "정서준", enrolled: 8, capacity: 10 },
  { time: "19:00", name: "스피닝", coach: "최지후", enrolled: 20, capacity: 20 },
];

export function TodayClassesScreen {
  return (
    <DataTable value={CLASSES} size="small" stripedRows>
      <Column field="time" header="시간" />
      <Column field="name" header="수업" />
      <Column field="coach" header="강사" />
      <Column header="정원" body={(c: ClassItem) => (
        <Tag value={`${c.enrolled} / ${c.capacity}`} severity={c.enrolled >= c.capacity ? "danger" : "info"} />
      )} />
    </DataTable>
  );
}
