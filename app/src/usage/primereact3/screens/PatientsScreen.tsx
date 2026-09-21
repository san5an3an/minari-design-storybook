import * as React from "react";
import { Tag } from "primereact/tag";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Divider } from "primereact/divider";
import { RadioButton } from "primereact/radiobutton";
import { Chip } from "primereact/chip";
import { Timeline } from "primereact/timeline";
import { CalendarClock, ClipboardList, Stethoscope, Users } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=60";

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
  { id: "p4", name: "윤도경", age: 45, lastVisit: "2026-09-15", condition: "고혈압" },
  { id: "p5", name: "서지안", age: 29, lastVisit: "2026-09-12", condition: "알레르기" },
  { id: "p6", name: "장하람", age: 52, lastVisit: "2026-09-05", condition: "당뇨" },
];

const RECORDS: Record<string, VisitRecord[]> = {
  p1: [{ date: "2026-09-10", diagnosis: "고혈압 경과 관찰, 약 처방 유지", doctor: "이민호 원장" }, { date: "2026-06-02", diagnosis: "정기 검진", doctor: "이민호 원장" }],
  p2: [{ date: "2026-09-14", diagnosis: "급성 상기도 감염, 항생제 처방", doctor: "김하나 원장" }],
  p3: [{ date: "2026-08-28", diagnosis: "당뇨 수치 안정적, 다음 검진 3개월 후", doctor: "이민호 원장" }],
  p4: [{ date: "2026-09-15", diagnosis: "혈압약 용량 조정", doctor: "이민호 원장" }],
  p5: [{ date: "2026-09-12", diagnosis: "계절성 알레르기, 항히스타민제 처방", doctor: "김하나 원장" }],
  p6: [{ date: "2026-09-05", diagnosis: "당뇨 수치 재검, 식이요법 상담", doctor: "이민호 원장" }],
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

  const STATS = [
    { label: "오늘 예약", value: "3", icon: CalendarClock },
    { label: "등록 환자", value: String(PATIENTS.length), icon: Users },
    { label: "이번 달 진료", value: "42", icon: Stethoscope },
    { label: "대기 처방전", value: "1", icon: ClipboardList },
  ] as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div
        className="flex flex-col justify-end gap-1 px-6 py-4"
        style={{
          minHeight: "8rem",
          borderRadius: "0.5rem",
          backgroundImage:
            `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
            `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${HERO_IMAGE}")`,
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        <span style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.25 }}>이민호 원장님, 안녕하세요</span>
        <span style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.9 }}>오늘도 좋은 진료 되세요. 예약 3건이 대기 중이에요.</span>
      </div>

      {/* lg:grid-cols-4는 630~890px엔 안 걸림. @container로 변경 */}
      <div className="pr3-patients-stats" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.75rem" }}>
        {/* 카드 최소폭 11rem 유지, 통계 4열 48rem부터, 환자 3열 36rem부터 적용 */}
        <style>
          {"@container pr3 (min-width: 48rem) { .pr3-patients-stats { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; } } "
            + "@container pr3 (min-width: 36rem) { .pr3-patients-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; } }"}
        </style>
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
      {/* minmax(0,1fr) 트랙 격자로 폭 항상 꽉 채우기 */}
      <div className="pr3-patients-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }}>
        {shown.map((p) => (
          <Card key={p.id} style={{ cursor: "pointer" }} onClick={ => setSelectedId(p.id)}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBlockEnd: "0.5rem" }}>
              <Avatar label={p.name.slice(0, 1)} shape="circle" size="large" style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }} />
              <div>
                <div style={{ fontWeight: 700 }}>{p.name}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{p.age}세</div>
              </div>
            </div>
            {/* severity="info" 대체. brand-subtle 배경과 글자 색 조합 사용 */}
            <Tag value={p.condition} style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }} />
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
          pt={{ opposite: { style: { display: "none", flex: 0, padding: 0 } } }}
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
