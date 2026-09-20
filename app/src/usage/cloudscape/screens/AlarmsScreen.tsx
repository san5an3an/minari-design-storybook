import * as React from "react";
import Box from "@cloudscape-design/components/box";
import Cards from "@cloudscape-design/components/cards";
import Container from "@cloudscape-design/components/container";
import ExpandableSection from "@cloudscape-design/components/expandable-section";
import Header from "@cloudscape-design/components/header";
import PieChart from "@cloudscape-design/components/pie-chart";
import SpaceBetween from "@cloudscape-design/components/space-between";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Table from "@cloudscape-design/components/table";
import Toggle from "@cloudscape-design/components/toggle";

export interface Alarm {
  name: string;
  metric: string;
  state: "in-alarm" | "ok" | "insufficient-data";
  threshold: string;
}

export const ALARMS: readonly Alarm[] = [
  { name: "API 5xx 비율", metric: "5xx-rate", state: "in-alarm", threshold: "> 2% (5분)" },
  { name: "DB 연결 수", metric: "db-connections", state: "ok", threshold: "> 80 (10분)" },
  { name: "큐 적체", metric: "queue-depth", state: "ok", threshold: "> 1000" },
  { name: "디스크 사용률", metric: "disk-used-pct", state: "insufficient-data", threshold: "> 85%" },
];

interface HistoryRow { time: string; alarm: string; state: Alarm["state"] }

const HISTORY: readonly HistoryRow[] = [
  { time: "13:42:01", alarm: "API 5xx 비율", state: "in-alarm" },
  { time: "13:38:14", alarm: "디스크 사용률", state: "insufficient-data" },
  { time: "12:55:30", alarm: "DB 연결 수", state: "ok" },
  { time: "12:40:09", alarm: "큐 적체", state: "ok" },
  { time: "11:20:44", alarm: "API 5xx 비율", state: "ok" },
  { time: "10:58:12", alarm: "DB 연결 수", state: "in-alarm" },
  { time: "10:12:03", alarm: "큐 적체", state: "in-alarm" },
  { time: "09:40:51", alarm: "디스크 사용률", state: "ok" },
  { time: "08:55:20", alarm: "API 5xx 비율", state: "ok" },
  { time: "08:10:18", alarm: "DB 연결 수", state: "ok" },
  { time: "07:44:39", alarm: "큐 적체", state: "ok" },
];

export const STATE_TYPE: Record<Alarm["state"], "error" | "success" | "pending"> = {
  "in-alarm": "error",
  ok: "success",
  "insufficient-data": "pending",
};

const STATE_LABEL: Record<Alarm["state"], string> = {
  "in-alarm": "경보",
  ok: "정상",
  "insufficient-data": "데이터 부족",
};

// 컨테이너 임계값 56rem(896px), 카드 2열과 도넛 셀 최소폭 기준. 좁으면 도넛 먼저 배치
const LAYOUT_CSS = `
.cs1-alarms { container-type: inline-size; container-name: cs1alarms; }
.cs1-alarms-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
.cs1-alarms-summary { order: -1; }
@container cs1alarms (min-width: 56rem) {
  .cs1-alarms-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 22rem); align-items: start; }
  .cs1-alarms-summary { order: 0; }
}
`;

const CHANNELS = [
  { key: "slack", label: "Slack #ops-alerts" },
  { key: "email", label: "이메일 팀 배포판" },
  { key: "pagerduty", label: "PagerDuty 에스컬레이션" },
] as const;

export function AlarmsScreen {
  const [enabled, setEnabled] = React.useState<Record<string, boolean>>({ slack: true, email: true, pagerduty: false });
  const activeCount = Object.values(enabled).filter(Boolean).length;

  return (
    <SpaceBetween size="l">
      <div className="cs1-alarms">
        <style>{LAYOUT_CSS}</style>
        <div className="cs1-alarms-grid">
          <Cards<Alarm>
            items={ALARMS}
            cardDefinition={{
              header: (a) => a.name,
              sections: [
                { id: "state", content: (a) => <StatusIndicator type={STATE_TYPE[a.state]}>{STATE_LABEL[a.state]}</StatusIndicator> },
                { id: "metric", header: "지표", content: (a) => <Box variant="samp">{a.metric}</Box> },
                { id: "threshold", header: "임계값", content: (a) => a.threshold },
              ],
            }}
            cardsPerRow={[{ cards: 1 }, { minWidth: 480, cards: 2 }]}
            header={<Header counter={`(${ALARMS.length})`} description="지금 이 계정에 걸려 있는 경보">알람</Header>}
          />
          <Container header={<Header variant="h3">상태 분포</Header>} className="cs1-alarms-summary">
            <PieChart
              variant="donut"
              innerMetricValue={String(ALARMS.length)}
              innerMetricDescription="알람"
              data={[
                { title: "정상", value: ALARMS.filter((a) => a.state === "ok").length, color: "var(--semantic-bg-success-default)" },
                { title: "경보", value: ALARMS.filter((a) => a.state === "in-alarm").length, color: "var(--semantic-bg-danger-default)" },
                { title: "데이터 부족", value: ALARMS.filter((a) => a.state === "insufficient-data").length, color: "var(--semantic-bg-warning-default)" },
              ]}
              size="medium"
              hideFilter
              ariaLabel="알람 상태 분포"
            />
          </Container>
        </div>
      </div>

      <Table<HistoryRow>
        items={HISTORY}
        variant="container"
        header={<Header counter={`(${HISTORY.length})`} description="최근 상태 변화 이력">알람 이력</Header>}
        columnDefinitions={[
          { id: "time", header: "시각", cell: (h) => <Box variant="samp">{h.time}</Box> },
          { id: "alarm", header: "알람", cell: (h) => h.alarm },
          { id: "state", header: "상태", cell: (h) => <StatusIndicator type={STATE_TYPE[h.state]}>{STATE_LABEL[h.state]}</StatusIndicator> },
        ]}
      />

      <ExpandableSection headerText="알림 채널 설정" headerCounter={`(${activeCount}/${CHANNELS.length})`} variant="container" defaultExpanded>
        <SpaceBetween size="s">
          {CHANNELS.map((c) => (
            <Toggle key={c.key} checked={enabled[c.key]} onChange={({ detail }) => setEnabled((prev) => ({ ...prev, [c.key]: detail.checked }))}>
              {c.label}
            </Toggle>
          ))}
        </SpaceBetween>
      </ExpandableSection>
    </SpaceBetween>
  );
}
