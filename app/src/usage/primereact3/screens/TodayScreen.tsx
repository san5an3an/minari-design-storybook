import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";

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
  const [hideDone, setHideDone] = React.useState(false);
  const shown = hideDone ? APPOINTMENTS.filter((a) => a.status !== "완료") : APPOINTMENTS;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Checkbox checked={hideDone} onChange={(e) => setHideDone(e.checked ?? false)} />
        <span style={{ fontSize: "0.85rem" }}>완료된 진료 숨기기</span>
      </label>
    <DataTable value={shown} size="small" stripedRows>
      <Column field="time" header="시간" />
      <Column field="patient" header="환자" body={(a: Appointment) => (
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Avatar label={a.patient.slice(0, 1)} shape="circle" size="normal" style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }} />
          {a.patient}
        </span>
      )} />
      <Column field="doctor" header="담당의" />
      <Column field="status" header="상태" body={(a: Appointment) => <Tag value={a.status} severity={SEVERITY[a.status]} />} />
      <Column header="" body={(a: Appointment) => (
        <Button label="진료 시작" size="small" text disabled={a.status !== "대기"} />
      )} />
    </DataTable>
    </div>
  );
}
