import * as React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Panel } from "primereact/panel";
import { ProgressBar } from "primereact/progressbar";
import { SelectButton } from "primereact/selectbutton";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { CalendarClock, Users2, TriangleAlert, UserCog } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip as RTooltip, XAxis } from "recharts";

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

// severity="info" 대체. brand-subtle로 처리
const INFO_TAG: React.CSSProperties = { background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" };

type TimeBlock = "전체" | "오전" | "오후" | "저녁";
function blockOf(time: string): Exclude<TimeBlock, "전체"> {
  const h = Number(time.slice(0, 2));
  if (h < 12) return "오전";
  if (h < 18) return "오후";
  return "저녁";
}

export function TodayClassesScreen {
  const [selected, setSelected] = React.useState<ClassItem | null>(null);
  const [block, setBlock] = React.useState<TimeBlock>("전체");

  const totalEnrolled = CLASSES.reduce((s, c) => s + c.enrolled, 0);
  const totalCapacity = CLASSES.reduce((s, c) => s + c.capacity, 0);
  const nearFull = CLASSES.filter((c) => c.enrolled / c.capacity >= 0.9).length;
  const coaches = new Set(CLASSES.map((c) => c.coach)).size;
  const popular = [...CLASSES].sort((a, b) => b.enrolled - a.enrolled)[0];

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
            <Tag key={name} value={name} style={INFO_TAG} />
          ))}
        </div>
      </div>
    );
  }

  const shown = block === "전체" ? CLASSES : CLASSES.filter((c) => blockOf(c.time) === block);
  const stats = [
    { label: "오늘 수업 수", value: `${CLASSES.length}개`, icon: CalendarClock, tone: "brand" },
    { label: "등록 인원", value: `${totalEnrolled}명`, icon: Users2, tone: "success" },
    { label: "마감 임박(90%+)", value: `${nearFull}개`, icon: TriangleAlert, tone: "warning" },
    { label: "담당 강사", value: `${coaches}명`, icon: UserCog, tone: "brand" },
  ] as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div className="pr2-classes-stats" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }}>
        {/* 4열 카드 최소폭 11rem 유지, 48rem 이상만 4열 적용 */}
        <style>{"@container pr2 (min-width: 48rem) { .pr2-classes-stats { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; } }"}</style>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Panel key={s.label} header={s.label}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div aria-hidden style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "2.25rem", height: "2.25rem", borderRadius: "var(--semantic-radius-control)", background: `var(--semantic-bg-${s.tone}-subtle)`, color: `var(--semantic-fg-${s.tone}-default)`, flexShrink: 0 }}>
                  <Icon size={18} />
                </div>
                <div style={{ fontSize: "1.15rem", fontWeight: 700 }}>{s.value}</div>
              </div>
            </Panel>
          );
        })}
      </div>

      <Panel header="시간대별 등록 인원">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBlockEnd: "0.4rem" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--semantic-fg-neutral-subtle)" }}>가장 인기 있는 수업, {popular.name}({popular.time}) {popular.enrolled}명</span>
        </div>
        <div style={{ width: "100%", height: "8rem" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CLASSES.map((c) => ({ time: c.time, 등록: c.enrolled, 잔여: c.capacity - c.enrolled }))} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <XAxis dataKey="time" tickLine={false} axisLine={false} interval={0} tick={{ style: { fontSize: 10, fill: "var(--semantic-fg-neutral-subtle)" } }} />
              <RTooltip
                cursor={{ fill: "var(--semantic-bg-neutral-subtle)" }}
                contentStyle={{ borderRadius: "var(--semantic-radius-control)", border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)", fontSize: "0.72rem" }}
              />
              <Bar dataKey="등록" stackId="cap" fill="var(--component-chart-series-1)" isAnimationActive={false} radius={[3, 3, 0, 0]} />
              <Bar dataKey="잔여" stackId="cap" fill="var(--semantic-bg-neutral-subtle)" isAnimationActive={false} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Panel>

      <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "0.5rem", padding: "0.9rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBlockEnd: "0.4rem" }}>
          <span style={{ fontWeight: 600 }}>오늘 전체 정원 사용률</span>
          <span>{totalEnrolled} / {totalCapacity}</span>
        </div>
        <ProgressBar value={Math.round((totalEnrolled / totalCapacity) * 100)} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.6rem" }}>
        <div style={{ fontWeight: 600 }}>수업 목록</div>
        <SelectButton value={block} onChange={(e) => { if (e.value) setBlock(e.value); }} options={["전체", "오전", "오후", "저녁"]} />
      </div>

      <DataTable value={shown} size="small" stripedRows selectionMode="single" onRowClick={(e) => setSelected(e.data as ClassItem)} style={{ cursor: "pointer" }}>
        <Column field="time" header="시간" style={{ width: "5rem" }} sortable />
        <Column field="name" header="수업" sortable />
        <Column field="coach" header="강사" sortable />
        <Column header="정원" body={(c: ClassItem) => (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: "5rem" }}>
              <ProgressBar value={(c.enrolled / c.capacity) * 100} showValue={false} style={{ height: "0.35rem" }} />
            </div>
            <Tag value={`${c.enrolled} / ${c.capacity}`} severity={c.enrolled >= c.capacity ? "danger" : undefined} style={c.enrolled >= c.capacity ? undefined : INFO_TAG} />
          </div>
        )} />
      </DataTable>
    </div>
  );
}
