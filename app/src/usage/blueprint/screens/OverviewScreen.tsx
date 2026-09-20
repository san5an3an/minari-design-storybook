import * as React from "react";
import { Callout, Card, Divider, Icon, Popover, SegmentedControl, Tooltip as BpTooltip } from "@blueprintjs/core";
import type { IconName, Intent } from "@blueprintjs/core";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface Stat {
  label: string;
  value: string;
  icon: IconName;
  intent: Intent;
  // 지표별 산출 기준 Tooltip으로 표시
  hint: string;
}

const STATS: Stat[] = [
  { label: "지난 1시간 요청", value: "48,204", icon: "pulse", intent: "primary", hint: "전 서비스 합산 요청 수(성공+실패)." },
  { label: "에러율", value: "0.42%", icon: "warning-sign", intent: "warning", hint: "5xx 응답 ÷ 전체 요청. 임계치 5%." },
  { label: "활성 알림", value: "2", icon: "notifications", intent: "danger", hint: "꺼지지 않은 알림 규칙이 지금 울리고 있는 수." },
  { label: "평균 응답 시간", value: "182ms", icon: "time", intent: "success", hint: "전 서비스 p50 응답 시간." },
];

// 요청량 추이 라인 차트 위치, 기간은 SegmentedControl로 전환 가능하게 조정
const TRAFFIC_1H = [
  { t: "13:00", value: 3820 }, { t: "13:10", value: 4110 }, { t: "13:20", value: 3950 },
  { t: "13:30", value: 4580 }, { t: "13:40", value: 5240 }, { t: "13:50", value: 4890 },
  { t: "14:00", value: 5620 }, { t: "14:10", value: 6104 },
];
const TRAFFIC_24H = [
  { t: "00시", value: 1240 }, { t: "03시", value: 810 }, { t: "06시", value: 1560 },
  { t: "09시", value: 4320 }, { t: "12시", value: 5890 }, { t: "15시", value: 6210 },
  { t: "18시", value: 5480 }, { t: "21시", value: 3170 },
];
const TRAFFIC_7D = [
  { t: "9/14", value: 68200 }, { t: "9/15", value: 71400 }, { t: "9/16", value: 69800 },
  { t: "9/17", value: 74100 }, { t: "9/18", value: 80300 }, { t: "9/19", value: 52600 },
  { t: "9/20", value: 48900 },
];
const TRAFFIC_RANGE_OPTIONS = [
  { label: "1시간", value: "1h" as const },
  { label: "24시간", value: "24h" as const },
  { label: "7일", value: "7d" as const },
];
const TRAFFIC_BY_RANGE: Record<(typeof TRAFFIC_RANGE_OPTIONS)[number]["value"], typeof TRAFFIC_1H> = {
  "1h": TRAFFIC_1H,
  "24h": TRAFFIC_24H,
  "7d": TRAFFIC_7D,
};

// 서비스별 에러 랭킹 리스트 위치
interface ServiceRank { service: string; errors: number; share: number }
const SERVICE_RANK: ServiceRank[] = [
  { service: "payments", errors: 214, share: 0.42 },
  { service: "inventory-sync", errors: 96, share: 0.19 },
  { service: "notify", errors: 58, share: 0.11 },
  { service: "checkout", errors: 41, share: 0.08 },
  { service: "search", errors: 12, share: 0.02 },
];

const LAYOUT_CSS = `
.bp1-ov { container-type: inline-size; container-name: bp1ov; }
.bp1-ov-stats { display: grid; gap: 1rem; grid-template-columns: repeat(2, minmax(0, 1fr)); }
@container bp1ov (min-width: 46rem) {
  .bp1-ov-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

function StatTile({ stat }: { stat: Stat }) {
  return (
    // 숫자 산출 기준을 카드 전체 hover 시 Tooltip으로 표시
    <BpTooltip content={stat.hint} placement="top">
      <Card style={{ minWidth: 0, overflow: "hidden", position: "relative", cursor: "help" }}>
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="flex items-center justify-center"
            style={{
              inlineSize: "1.75rem",
              blockSize: "1.75rem",
              borderRadius: "var(--semantic-radius-control)",
              background: `var(--semantic-bg-${stat.intent === "primary" ? "brand" : stat.intent}-subtle)`,
              color: `var(--semantic-fg-${stat.intent === "primary" ? "brand" : stat.intent}-default)`,
            }}
          >
            <Icon icon={stat.icon} size={14} />
          </span>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.8125rem" }}>
            {stat.label}
          </span>
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: 600, marginBlockStart: "0.5rem" }}>
          {stat.value}
        </div>
        {/* 카드별 구석 워터마크 표시, 숫자와 안 겹치게 낮은 불투명도 적용 */}
        <Icon
          aria-hidden
          icon={stat.icon}
          size={64}
          style={{
            position: "absolute",
            insetInlineEnd: "-0.75rem",
            insetBlockEnd: "-0.75rem",
            color: `var(--semantic-fg-${stat.intent === "primary" ? "brand" : stat.intent}-default)`,
            opacity: 0.08,
          }}
        />
      </Card>
    </BpTooltip>
  );
}

export function OverviewScreen {
  const [range, setRange] = React.useState<(typeof TRAFFIC_RANGE_OPTIONS)[number]["value"]>("1h");
  const traffic = TRAFFIC_BY_RANGE[range];

  return (
    <div className="bp1-ov flex flex-col gap-4">
      <style>{LAYOUT_CSS}</style>
      <div className="bp1-ov-stats">
        {STATS.map((s) => (
          <StatTile key={s.label} stat={s} />
        ))}
      </div>

      {/* 라인 에어리어 차트와 랭킹 리스트 2단 구성 */}
      <div className="grid gap-4" style={{ gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)" }}>
        <Card>
          <div className="flex items-center justify-between" style={{ marginBlockEnd: "0.5rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>요청량 추이</span>
            {/* 고정 Tag를 SegmentedControl로 변경 */}
            <SegmentedControl
              value={range}
              onValueChange={(v) => setRange(v as (typeof TRAFFIC_RANGE_OPTIONS)[number]["value"])}
              options={TRAFFIC_RANGE_OPTIONS}
              intent="primary"
              size="small"
            />
          </div>
          <div style={{ inlineSize: "100%", blockSize: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={traffic}>
                <XAxis dataKey="t" tickLine={false} axisLine={false} tick={{ style: { fontSize: 11 } }} />
                <YAxis hide />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="var(--component-chart-series-1)"
                  fill="var(--component-chart-series-1)"
                  fillOpacity={0.18}
                  strokeWidth={2}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>서비스별 에러 랭킹</span>
          <div className="flex flex-col gap-2" style={{ marginBlockStart: "0.75rem" }}>
            {SERVICE_RANK.map((r, i) => (
              <div key={r.service} className="flex items-center gap-2">
                <span
                  className="flex items-center justify-center"
                  style={{
                    inlineSize: "1.25rem", blockSize: "1.25rem", borderRadius: "50%",
                    background: "var(--semantic-bg-neutral-subtle)", fontSize: "0.6875rem", fontWeight: 600,
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ flex: 1, fontSize: "0.8125rem" }}>{r.service}</span>
                {/* Popover로 점유율 상세 표시 */}
                <Popover
                  content={<div className="p-2" style={{ fontSize: "0.75rem" }}>전체 오류 중 {Math.round(r.share * 100)}%</div>}
                  placement="left"
                >
                  <span style={{ fontSize: "0.75rem", opacity: 0.7, cursor: "pointer" }}>{r.errors}건</span>
                </Popover>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Divider로 지표 구간 구분 */}
      <Divider />

      <div className="flex flex-col gap-3">
        <Callout intent="danger" title="결제 서비스 5xx 급증">
          지난 5분간 오류율이 12%로 올랐다. 임계치 5% 초과.
        </Callout>
        <Callout intent="warning" title="재고 동기화 지연">
          평균 지연이 40초로, 목표치(10초)를 넘어섰다.
        </Callout>
      </div>
    </div>
  );
}
