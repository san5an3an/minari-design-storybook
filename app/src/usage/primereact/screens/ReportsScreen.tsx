import * as React from "react";
import { Knob } from "primereact/knob";
import { Message } from "primereact/message";
import { Panel } from "primereact/panel";
import { ProgressBar } from "primereact/progressbar";
import { SelectButton } from "primereact/selectbutton";
import { Inbox, CheckCircle2, Timer, Smile } from "lucide-react";
import {
  Area, AreaChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip as RTooltip, XAxis,
} from "recharts";
import { AGENTS, DAILY_VOLUME, TICKETS, WEEKLY_VOLUME } from "../data";

const SLA = [
  { label: "긴급 (목표 95%)", pct: 91, target: 95 },
  { label: "보통 (목표 80%)", pct: 78, target: 80 },
  { label: "낮음 (목표 90%)", pct: 96, target: 90 },
] as const;

// 만족도 5/4/3점 이하 구간별 고정 분포, 합계 100
const CSAT_BREAKDOWN = [
  { tier: "5점", pct: 64 },
  { tier: "4점", pct: 27 },
  { tier: "3점 이하", pct: 9 },
] as const;

// 결제, 계정, 기타 3버킷 통합. 차트 색상 종류가 4개뿐이라 5개 카테고리를 못 담음
function categoryBuckets {
  const counts = { 결제: 0, 계정: 0, 기타: 0 };
  for (const t of TICKETS) {
    if (t.category === "결제") counts.결제 += 1;
    else if (t.category === "계정") counts.계정 += 1;
    else counts.기타 += 1;
  }
  return [
    { name: "결제", value: counts.결제, fill: "var(--component-chart-series-1)" },
    { name: "계정", value: counts.계정, fill: "var(--component-chart-series-2)" },
    { name: "기타(로그인·API·일반)", value: counts.기타, fill: "var(--component-chart-series-3)" },
  ];
}

export function ReportsScreen {
  const [period, setPeriod] = React.useState<"최근 7일" | "최근 4주">("최근 7일");
  const volume = period === "최근 7일" ? DAILY_VOLUME : WEEKLY_VOLUME;
  const today = DAILY_VOLUME[DAILY_VOLUME.length - 1];
  const csatAvg = AGENTS.reduce((s, a) => s + a.csat, 0) / AGENTS.length;
  const csatPct = Math.round((csatAvg / 5) * 100);
  const buckets = categoryBuckets;
  const bucketTotal = buckets.reduce((s, b) => s + b.value, 0);
  const topAgents = [...AGENTS].sort((a, b) => b.resolvedToday - a.resolvedToday).slice(0, 3);

  const STATS = [
    { label: "오늘 접수", value: `${today.received}`, icon: Inbox, tone: "brand" },
    { label: "오늘 해결", value: `${today.resolved}`, icon: CheckCircle2, tone: "success" },
    { label: "평균 첫 응답", value: "12분", icon: Timer, tone: "warning" },
    { label: "고객 만족도", value: `${csatPct}%`, icon: Smile, tone: "brand" },
  ] as const;

  const worstSla = [...SLA].sort((a, b) => (a.pct - a.target) - (b.pct - b.target))[0];
  const slaOk = SLA.every((s) => s.pct >= s.target);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* 통계카드는 48rem 이상, 패널 2행은 40rem 이상에서 가로 정렬 */}
      <style>
        {"@container pr1 (min-width: 48rem) { .pr1-reports-stats { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; } } "
          + "@container pr1 (min-width: 40rem) { .pr1-reports-row2 { grid-template-columns: 2fr 1fr !important; } .pr1-reports-row3 { grid-template-columns: 1fr 1fr !important; } }"}
      </style>

      <Message
        severity={slaOk ? "success" : "warn"}
        text={slaOk
          ? "모든 SLA 구간이 목표를 만족하고 있어요."
          : `${worstSla.label.split(" ")[0]} SLA가 목표(${worstSla.target}%)보다 ${worstSla.target - worstSla.pct}%p 낮아요. 최근 접수량이 몰렸어요.`}
        style={{ width: "100%", justifyContent: "flex-start" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <div style={{ fontWeight: 600 }}>접수·해결 추이</div>
        <SelectButton value={period} onChange={(e) => { if (e.value) setPeriod(e.value); }} options={["최근 7일", "최근 4주"]} />
      </div>

      <div className="pr1-reports-stats" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }}>
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <Panel key={s.label} header={s.label}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  aria-hidden
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "2.25rem", height: "2.25rem", borderRadius: "var(--semantic-radius-control)",
                    background: `var(--semantic-bg-${s.tone}-subtle)`, color: `var(--semantic-fg-${s.tone}-default)`,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{s.value}</div>
              </div>
            </Panel>
          );
        })}
      </div>

      <Panel header={`접수 vs 해결 (${period})`}>
        <div style={{ width: "100%", height: "11rem" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={[...volume]} margin={{ top: 6, right: 8, bottom: 0, left: -18 }}>
              <defs>
                <linearGradient id="pr1-received" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--component-chart-series-1)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--component-chart-series-1)" stopOpacity={0.03} />
                </linearGradient>
                <linearGradient id="pr1-resolved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--component-chart-series-3)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--component-chart-series-3)" stopOpacity={0.03} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ style: { fontSize: 11, fill: "var(--semantic-fg-neutral-subtle)" } }} />
              <RTooltip
                cursor={{ stroke: "var(--semantic-border-neutral-subtle)" }}
                contentStyle={{ borderRadius: "var(--semantic-radius-control)", border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)", fontSize: "0.75rem" }}
              />
              <Area type="monotone" dataKey="received" name="접수" stroke="var(--component-chart-series-1)" strokeWidth={2} fill="url(#pr1-received)" isAnimationActive={false} dot={false} />
              <Area type="monotone" dataKey="resolved" name="해결" stroke="var(--component-chart-series-3)" strokeWidth={2} fill="url(#pr1-resolved)" isAnimationActive={false} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Panel>

      <div className="pr1-reports-row2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", alignItems: "stretch" }}>
        <Panel header="SLA 준수율">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {SLA.map((s) => (
              <div key={s.label}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBlockEnd: "0.25rem" }}>
                  <span>{s.label}</span><span>{s.pct}%</span>
                </div>
                <ProgressBar value={s.pct} showValue={false} />
              </div>
            ))}
          </div>
        </Panel>
        <Panel header="고객 만족도">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
            <Knob value={csatPct} readOnly size={100} valueTemplate="{value}%" />
            <span style={{ fontSize: "0.8125rem", color: "var(--semantic-fg-neutral-subtle)" }}>이번 달 CSAT</span>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {CSAT_BREAKDOWN.map((c) => (
                <div key={c.tier} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.72rem", width: "3.2rem", flexShrink: 0, color: "var(--semantic-fg-neutral-subtle)" }}>{c.tier}</span>
                  <div style={{ flex: 1, height: "0.35rem", borderRadius: "var(--semantic-radius-pill)", background: "var(--semantic-bg-neutral-subtle)", overflow: "hidden" }}>
                    <div style={{ width: `${c.pct}%`, height: "100%", background: "var(--semantic-bg-brand-default)" }} />
                  </div>
                  <span style={{ fontSize: "0.72rem", width: "2rem", textAlign: "right" }}>{c.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </div>

      <div className="pr1-reports-row3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", alignItems: "stretch" }}>
        <Panel header="문의 유형별 비중">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "7rem", height: "7rem", flexShrink: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={buckets} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="100%" paddingAngle={2} stroke="none" isAnimationActive={false}>
                    {buckets.map((b) => <Cell key={b.name} fill={b.fill} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", flex: 1, minWidth: 0 }}>
              {buckets.map((b) => (
                <div key={b.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", minWidth: 0, fontSize: "0.78rem" }}>
                    <span aria-hidden style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: b.fill, flexShrink: 0 }} />
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.name}</span>
                  </span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, flexShrink: 0 }}>
                    {b.value}건 <span style={{ fontWeight: 400, color: "var(--semantic-fg-neutral-subtle)" }}>{Math.round((b.value / bucketTotal) * 100)}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Panel>
        <Panel header="오늘 상담원 Top 3">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {topAgents.map((a, i) => (
              <div key={a.name} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ width: "1.25rem", fontSize: "0.78rem", fontWeight: 700, color: "var(--semantic-fg-neutral-subtle)" }}>{i + 1}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.name} · {a.team}</span>
                    <span style={{ fontWeight: 600, flexShrink: 0 }}>{a.resolvedToday}건</span>
                  </div>
                  <div style={{ height: "0.3rem", borderRadius: "var(--semantic-radius-pill)", background: "var(--semantic-bg-neutral-subtle)", overflow: "hidden", marginTop: "0.2rem" }}>
                    <div style={{ width: `${Math.min(100, (a.resolvedToday / 9) * 100)}%`, height: "100%", background: "var(--semantic-bg-brand-default)" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
