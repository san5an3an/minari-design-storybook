import * as React from "react";
import {
  Badge, Button, Checkbox, Popover, Progress, Select, Spinner, Timeline, TimelineBody, TimelineContent,
  TimelineItem, TimelinePoint, TimelineTime, TimelineTitle,
} from "flowbite-react";
import { Info, RefreshCw } from "lucide-react";
import { DEAL_ACTIVITY, type DealActivityItem } from "../data";

const STAGES = ["첫 연락", "체험", "협상", "계약", "계약 완료", "해지"] as const;

function stageCounts {
  const counts = new Map<string, number>;
  for (const s of STAGES) counts.set(s, 0);
  for (const item of DEAL_ACTIVITY) {
    counts.set(item.toStage, (counts.get(item.toStage) ?? 0) + 1);
  }
  return counts;
}

// 파이프라인 요약 통계 카드
function PipelineStats {
  const churned = DEAL_ACTIVITY.filter((d) => d.toStage === "해지").length;
  const won = DEAL_ACTIVITY.filter((d) => d.toStage === "계약 완료").length;
  const items = [
    { label: "이번 주 이동", value: `${DEAL_ACTIVITY.length}건` },
    { label: "계약 완료", value: `${won}건` },
    { label: "해지", value: `${churned}건` },
    { label: "활동 참여 인원", value: `${new Set(DEAL_ACTIVITY.map((d) => d.actor)).size}명` },
  ];
  return (
    <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}>
      {items.map((it) => (
        <div key={it.label} style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
          <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>{it.label}</span>
          <div style={{ fontSize: "18px", fontWeight: 600 }}>{it.value}</div>
        </div>
      ))}
    </div>
  );
}

// 단계별 비중. Progress 막대로 표시
function PipelineBreakdown {
  const counts = stageCounts;
  const max = Math.max(...Array.from(counts.values), 1);
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
        <span style={{ fontSize: "13px", fontWeight: 600 }}>단계별 이동 비중</span>
        {/* Tooltip보다 긴 설명용 오버레이 */}
        <Popover
          trigger="hover"
          content={(
            <div style={{ padding: "10px", maxWidth: "220px", fontSize: "12px" }}>
              이번 주 딜이 이동한 <strong>도착 단계</strong> 기준 집계예요. 같은 딜이 여러 번
              이동했다면 각 이동마다 한 번씩 셉니다.
            </div>
          )}
        >
          <span tabIndex={0} role="button" aria-label="단계별 이동 비중 설명" style={{ display: "inline-flex", cursor: "pointer" }}>
            <Info size={13} color="var(--color-gray-400)" />
          </span>
        </Popover>
      </div>
      {STAGES.map((stage) => {
        const count = counts.get(stage) ?? 0;
        return (
          <div key={stage} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "12px", width: "64px", flexShrink: 0, color: "var(--color-gray-600)" }}>{stage}</span>
            <Progress progress={(count / max) * 100} color={stage === "해지" ? "red" : "default"} size="sm" className="flex-1" />
            <span style={{ fontSize: "12px", width: "20px", textAlign: "right", flexShrink: 0, color: "var(--color-gray-500)" }}>{count}</span>
          </div>
        );
      })}
    </div>
  );
}

// 이동 결과 비중을 도넛 차트로 표시
function OutcomeDonut {
  const won = DEAL_ACTIVITY.filter((d) => d.toStage === "계약 완료").length;
  const churned = DEAL_ACTIVITY.filter((d) => d.toStage === "해지").length;
  const ongoing = DEAL_ACTIVITY.length - won - churned;
  const slices = [
    { label: "계약 완료", count: won, color: "var(--color-green-500)" },
    { label: "진행 중", count: ongoing, color: "var(--color-primary-500)" },
    { label: "해지", count: churned, color: "var(--color-red-500)" },
  ];
  const total = DEAL_ACTIVITY.length || 1;
  const r = 26;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "16px", flex: 1, minWidth: 0 }}>
      <span style={{ fontSize: "13px", fontWeight: 600, marginBottom: "10px", display: "block" }}>이동 결과 비중</span>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <svg width="68" height="68" viewBox="0 0 68 68" role="img" aria-label="이동 결과 비중 도넛 차트">
          <circle cx="34" cy="34" r={r} fill="none" stroke="var(--color-gray-100)" strokeWidth="9" />
          {slices.map((s) => {
            const frac = s.count / total;
            const dash = frac * circumference;
            const seg = (
              <circle
                key={s.label}
                cx="34"
                cy="34"
                r={r}
                fill="none"
                stroke={s.color}
                strokeWidth="9"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 34 34)"
              >
                <title>{`${s.label} ${s.count}건`}</title>
              </circle>
            );
            offset += dash;
            return seg;
          })}
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {slices.map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
              <span aria-hidden style={{ width: "8px", height: "8px", borderRadius: "50%", background: s.color, flexShrink: 0 }} />
              <span style={{ color: "var(--color-gray-600)" }}>{s.label}</span>
              <span style={{ fontWeight: 600 }}>{s.count}건</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ActivityScreen {
  const [stageFilter, setStageFilter] = React.useState<string>("전체");
  const [churnOnly, setChurnOnly] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const refresh =  => {
    setRefreshing(true);
    window.setTimeout( => setRefreshing(false), 900);
  };

  const rows: DealActivityItem[] = DEAL_ACTIVITY.filter((item) => {
    if (churnOnly) return item.toStage === "해지";
    if (stageFilter === "전체") return true;
    return item.toStage === stageFilter;
  });

  return (
    <div className="flex flex-col gap-4">
      <PipelineStats />
      <div className="flex flex-col gap-3 md:flex-row">
        <div style={{ flex: 1, minWidth: 0 }}>
          <PipelineBreakdown />
        </div>
        <OutcomeDonut />
        <div style={{ flex: 1, minWidth: 0, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "16px" }}>
          <span style={{ fontSize: "13px", fontWeight: 600, marginBottom: "10px", display: "block" }}>필터</span>
          <div className="flex flex-col gap-3">
            <Select value={stageFilter} onChange={(e) => setStageFilter(e.target.value)} sizing="sm" disabled={churnOnly}>
              <option value="전체">이동한 단계 전체</option>
              {STAGES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Select>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox checked={churnOnly} onChange={(e) => setChurnOnly(e.target.checked)} />
              해지 건만 보기
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span style={{ fontSize: "13px", fontWeight: 600 }}>타임라인</span>
        {/* 새로고침 로딩 상태 Spinner로 표시 */}
        <Button size="xs" color="light" onClick={refresh} disabled={refreshing}>
          {refreshing ? <Spinner size="sm" className="mr-2" /> : <RefreshCw size={13} className="mr-2" />}
          {refreshing ? "새로고침 중" : "새로고침"}
        </Button>
      </div>
      <Timeline>
        {rows.map((item) => (
          <TimelineItem key={item.id}>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>{item.timeLabel}</TimelineTime>
              <TimelineTitle>{item.customer}</TimelineTitle>
              <TimelineBody>
                <span style={{ color: "var(--color-gray-500)" }}>{item.actor}</span>
                {", "}
                <Badge color="gray" className="inline-flex">{item.fromStage}</Badge>
                {" → "}
                <Badge color={item.toStage === "해지" ? "failure" : "success"} className="inline-flex">{item.toStage}</Badge>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        ))}
        {rows.length === 0 && (
          <span style={{ fontSize: "13px", color: "var(--color-gray-500)" }}>조건에 맞는 활동이 없어요.</span>
        )}
      </Timeline>
    </div>
  );
}
