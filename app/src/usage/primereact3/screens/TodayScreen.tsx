import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { Panel } from "primereact/panel";
import { CalendarClock, CheckCircle2, Stethoscope, Hourglass } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface Appointment {
  time: string;
  patient: string;
  doctor: string;
  status: "대기" | "진료 중" | "완료";
}

const APPOINTMENTS: Appointment[] = [
  { time: "09:00", patient: "윤도경", doctor: "이민호 원장", status: "완료" },
  { time: "09:30", patient: "정하늘", doctor: "이민호 원장", status: "완료" },
  { time: "10:00", patient: "오세준", doctor: "김하나 원장", status: "진료 중" },
  { time: "10:30", patient: "한소미", doctor: "이민호 원장", status: "대기" },
  { time: "11:00", patient: "서지안", doctor: "김하나 원장", status: "대기" },
  { time: "11:30", patient: "장하람", doctor: "이민호 원장", status: "대기" },
  { time: "08:30", patient: "황예린", doctor: "김하나 원장", status: "완료" },
  { time: "13:00", patient: "송민재", doctor: "이민호 원장", status: "대기" },
  { time: "13:30", patient: "김하나", doctor: "김하나 원장", status: "대기" },
  { time: "14:00", patient: "이민호", doctor: "이민호 원장", status: "대기" },
  { time: "14:30", patient: "한소미", doctor: "김하나 원장", status: "대기" },
];

const STATUS_ORDER: readonly Appointment["status"][] = ["완료", "진료 중", "대기"];
// severity 값 제한으로 brand 불가. 매핑 안 된 톤만 style로 처리
const STATUS_SEVERITY: Partial<Record<Appointment["status"], "success" | "warning">> = { 완료: "success", 대기: "warning" };
const BRAND_TAG: React.CSSProperties = { background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" };
const STATUS_FILL: Record<Appointment["status"], string> = {
  완료: "var(--component-chart-series-3)",
  "진료 중": "var(--component-chart-series-1)",
  대기: "var(--component-chart-series-4)",
};

function StatusTag({ status }: { status: Appointment["status"] }) {
  const sev = STATUS_SEVERITY[status];
  return sev ? <Tag value={status} severity={sev} /> : <Tag value={status} style={BRAND_TAG} />;
}

export function TodayScreen {
  const [appointments, setAppointments] = React.useState<Appointment[]>(APPOINTMENTS);
  const [hideDone, setHideDone] = React.useState(false);
  const [doctor, setDoctor] = React.useState("전체");

  const doctors = ["전체", ...Array.from(new Set(APPOINTMENTS.map((a) => a.doctor)))];
  const byDoctor = doctor === "전체" ? appointments : appointments.filter((a) => a.doctor === doctor);
  const shown = hideDone ? byDoctor.filter((a) => a.status !== "완료") : byDoctor;

  const start = (time: string, patient: string) => {
    setAppointments((prev) => prev.map((a) => (a.time === time && a.patient === patient ? { ...a, status: "진료 중" } : a)));
  };

  const counts = STATUS_ORDER.map((s) => ({ status: s, count: appointments.filter((a) => a.status === s).length, fill: STATUS_FILL[s] }));

  const stats = [
    { label: "오늘 전체", value: appointments.length, icon: CalendarClock, tone: "brand" },
    { label: "완료", value: counts[0].count, icon: CheckCircle2, tone: "success" },
    { label: "진료 중", value: counts[1].count, icon: Stethoscope, tone: "brand" },
    { label: "대기", value: counts[2].count, icon: Hourglass, tone: "warning" },
  ] as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div className="pr3-today-stats" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.75rem" }}>
        {/* 4열 카드 최소폭 11rem 유지, 48rem 이상만 4열 적용 */}
        <style>{"@container pr3 (min-width: 48rem) { .pr3-today-stats { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; } }"}</style>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Panel key={s.label} header={s.label}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div aria-hidden style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "2rem", height: "2rem", borderRadius: "var(--semantic-radius-control)", background: `var(--semantic-bg-${s.tone}-subtle)`, color: `var(--semantic-fg-${s.tone}-default)`, flexShrink: 0 }}>
                  <Icon size={16} />
                </div>
                <div style={{ fontSize: "1.3rem", fontWeight: 700 }}>{s.value}</div>
              </div>
            </Panel>
          );
        })}
      </div>

      <Panel header="진행 현황">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ width: "6rem", height: "6rem", flexShrink: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={counts} dataKey="count" nameKey="status" innerRadius="60%" outerRadius="100%" paddingAngle={2} stroke="none" isAnimationActive={false}>
                  {counts.map((c) => <Cell key={c.status} fill={c.fill} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", flex: 1, minWidth: 0 }}>
            {counts.map((c) => (
              <div key={c.status} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", fontSize: "0.8rem" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span aria-hidden style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: c.fill }} />
                  {c.status}
                </span>
                <span style={{ fontWeight: 600 }}>{c.count}건</span>
              </div>
            ))}
          </div>
        </div>
      </Panel>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.6rem" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Checkbox checked={hideDone} onChange={(e) => setHideDone(e.checked ?? false)} />
          <span style={{ fontSize: "0.85rem" }}>완료된 진료 숨기기</span>
        </label>
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>담당의</span>
          <Dropdown value={doctor} onChange={(e) => setDoctor(e.value)} options={doctors} style={{ width: "10rem" }} aria-label="담당의 필터" />
        </span>
      </div>

      <DataTable value={shown} size="small" stripedRows>
        <Column field="time" header="시간" sortable />
        <Column field="patient" header="환자" body={(a: Appointment) => (
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Avatar label={a.patient.slice(0, 1)} shape="circle" size="normal" style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }} />
            {a.patient}
          </span>
        )} />
        <Column field="doctor" header="담당의" sortable />
        <Column field="status" header="상태" sortable body={(a: Appointment) => <StatusTag status={a.status} />} />
        <Column header="" body={(a: Appointment) => (
          <Button label="진료 시작" size="small" text disabled={a.status !== "대기"} onClick={ => start(a.time, a.patient)} />
        )} />
      </DataTable>
    </div>
  );
}
