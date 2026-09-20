import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Stat } from "../../../bases/standalone/Stat";
import { Progress } from "../../../bases/standalone/Progress";
import { Table } from "../../../bases/standalone/Table";
import { Badge } from "../../../bases/standalone/Badge";
import { CheckCircle2, Clock, ListTodo, Users } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=60";

const STATS = [
  { label: "진행 중 프로젝트", value: "6", delta: "+1", direction: "up" as const, icon: ListTodo },
  { label: "이번 주 완료", value: "23", delta: "+9", direction: "up" as const, icon: CheckCircle2 },
  { label: "지연된 작업", value: "3", delta: "-2", direction: "down" as const, icon: Clock },
  { label: "활성 팀원", value: "8", delta: "0", direction: "up" as const, icon: Users },
];

const PROJECTS = [
  { name: "Cobalt 모바일 앱 리뉴얼", pct: 72 },
  { name: "결제 시스템 마이그레이션", pct: 45 },
  { name: "고객 포털 v2", pct: 88 },
  { name: "내부 대시보드 개편", pct: 30 },
];

const DEADLINES = [
  { task: "결제 API 연동 테스트", owner: "김도현", due: "09-19", status: "진행 중" },
  { task: "디자인 QA", owner: "이서아", due: "09-19", status: "대기" },
  { task: "스테이징 배포", owner: "박준서", due: "09-20", status: "진행 중" },
  { task: "고객 포털 접근성 점검", owner: "최유나", due: "09-22", status: "대기" },
];

// 최근 6주 완료 작업 수. DEADLINES/STATS 프로젝트군 합산 고정값
const COMPLETED_TREND = [
  { week: "8/11", count: 14 },
  { week: "8/18", count: 18 },
  { week: "8/25", count: 16 },
  { week: "9/1", count: 20 },
  { week: "9/8", count: 19 },
  { week: "9/15", count: 23 },
];

// 눈금 글자 크기는 인라인 style 로 지정. tick fontSize 속성은 리셋 CSS 에 덮임
const TICK_STYLE = { fontSize: 11 } as const;

export function OverviewScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <style>{`
        .sa1-ov-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
        .sa1-ov-split { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
        @container sa1 (min-width: 40rem) {
          .sa1-ov-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        @container sa1 (min-width: 44rem) {
          .sa1-ov-split { grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr); }
        }
      `}</style>

      <div
        className="flex flex-col justify-end gap-1 px-6 py-4"
        style={{
          minHeight: "8rem",
          borderRadius: "var(--semantic-radius-container)",
          backgroundImage:
            `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
            `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${HERO_IMAGE}")`,
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        <span style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.25 }}>이번 주도 순조로워요</span>
        <span style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.9 }}>완료 23건, 지연 3건. 아래에서 진행률을 확인해요.</span>
      </div>

      <div className="sa1-ov-stats">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              style={{
                border: "1px solid var(--semantic-border-neutral-subtle)",
                borderRadius: "var(--semantic-radius-container)",
                padding: "0.9rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: "1.75rem", height: "1.75rem", borderRadius: "var(--semantic-radius-control)",
                    background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)",
                  }}
                >
                  <Icon size={14} aria-hidden />
                </span>
              </div>
              <Stat label={s.label} value={s.value} delta={s.delta} direction={s.direction} />
            </div>
          );
        })}
      </div>

      <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "0.5rem" }}>
          <span style={{ fontWeight: 600 }}>주간 완료 작업 추이</span>
          <Badge tone="success">최근 6주</Badge>
        </div>
        <div style={{ height: "9rem", minWidth: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={COMPLETED_TREND} margin={{ top: 4, right: 4, bottom: 0, left: -16 }}>
              <CartesianGrid vertical={false} stroke="var(--component-chart-grid)" />
              <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ style: TICK_STYLE, fill: "var(--component-chart-axis-fg)" }} />
              <YAxis tickLine={false} axisLine={false} allowDecimals={false} width={28} tick={{ style: TICK_STYLE, fill: "var(--component-chart-axis-fg)" }} />
              <Tooltip
                cursor={{ fill: "var(--semantic-bg-neutral-subtle)" }}
                contentStyle={{
                  background: "var(--component-chart-tooltip-bg)",
                  border: "var(--semantic-border-width-default) solid var(--component-chart-tooltip-border)",
                  borderRadius: "var(--component-chart-tooltip-radius)",
                  color: "var(--component-chart-tooltip-fg)",
                  fontSize: "var(--component-chart-tooltip-font-size)",
                }}
                formatter={(v: unknown) => [`${String(v)}건`, "완료"] as [string, string]}
              />
              <Bar dataKey="count" fill="var(--component-chart-series-1)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="sa1-ov-split">
        <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
          <div style={{ fontWeight: 600, marginBottom: "0.6rem" }}>프로젝트 진행률</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {PROJECTS.map((p) => (
              <Progress key={p.name} label={p.name} value={p.pct} showValue />
            ))}
          </div>
        </div>

        <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
          <div style={{ fontWeight: 600, marginBottom: "0.6rem" }}>이번 주 마감</div>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>작업</Table.Head>
                <Table.Head>담당자</Table.Head>
                <Table.Head>마감</Table.Head>
                <Table.Head>상태</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {DEADLINES.map((d) => (
                <Table.Row key={d.task}>
                  <Table.Cell>{d.task}</Table.Cell>
                  <Table.Cell>{d.owner}</Table.Cell>
                  <Table.Cell>{d.due}</Table.Cell>
                  <Table.Cell>
                    <Badge tone={d.status === "진행 중" ? "brand" : "neutral"}>{d.status}</Badge>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}
