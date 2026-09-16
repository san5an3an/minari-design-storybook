import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface Appointment {
  time: string;
  patient: string;
  doctor: string;
  status: "대기" | "진료 중" | "완료";
}

const APPOINTMENTS: Appointment[] = [
  { time: "09:30", patient: "정하늘", doctor: "이민호 원장", status: "완료" },
  { time: "10:00", patient: "오세준", doctor: "김하나 원장", status: "진료 중" },
  { time: "10:30", patient: "한소미", doctor: "이민호 원장", status: "대기" },
];

const SEVERITY: Record<Appointment["status"], "success" | "info" | "warning"> = {
  완료: "success",
  "진료 중": "info",
  대기: "warning",
};

export function TodayScreen {
  return (
    <DataTable value={APPOINTMENTS} size="small" stripedRows>
      <Column field="time" header="시간" />
      <Column field="patient" header="환자" />
      <Column field="doctor" header="담당의" />
      <Column field="status" header="상태" body={(a: Appointment) => <Tag value={a.status} severity={SEVERITY[a.status]} />} />
    </DataTable>
  );
}
