import * as React from "react";
import Box from "@cloudscape-design/components/box";
import Cards from "@cloudscape-design/components/cards";
import ExpandableSection from "@cloudscape-design/components/expandable-section";
import Header from "@cloudscape-design/components/header";
import PieChart from "@cloudscape-design/components/pie-chart";
import SpaceBetween from "@cloudscape-design/components/space-between";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Table from "@cloudscape-design/components/table";

interface Alarm {
  name: string;
  metric: string;
  state: "in-alarm" | "ok" | "insufficient-data";
  threshold: string;
}

const ALARMS: Alarm[] = [
  { name: "API 5xx 비율", metric: "5xx-rate", state: "in-alarm", threshold: "> 2% (5분)" },
  { name: "DB 연결 수", metric: "db-connections", state: "ok", threshold: "> 80 (10분)" },
  { name: "큐 적체", metric: "queue-depth", state: "ok", threshold: "> 1000" },
  { name: "디스크 사용률", metric: "disk-used-pct", state: "insufficient-data", threshold: "> 85%" },
];

interface HistoryRow { time: string; alarm: string; state: Alarm["state"] }

const HISTORY: HistoryRow[] = [
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

const STATE_TYPE: Record<Alarm["state"], "error" | "success" | "pending"> = {
  "in-alarm": "error",
  ok: "success",
  "insufficient-data": "pending",
};

const STATE_LABEL: Record<Alarm["state"], string> = {
  "in-alarm": "경보",
  ok: "정상",
  "insufficient-data": "데이터 부족",
};

export function AlarmsScreen {
  return (
    <div className="cloudscape-dark-scope" style={{ colorScheme: "dark", background: "#0b1622", borderRadius: "8px", padding: "1.25rem" }}>
      <SpaceBetween size="l">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1fr]">
          <div style={{ background: "#14233a", border: "1px solid #223349", borderRadius: "8px", padding: "0.9rem" }}>
            <Cards<Alarm>
              items={ALARMS}
              cardDefinition={{
                header: (a) => a.name,
                sections: [
                  { id: "state", content: (a) => <StatusIndicator type={STATE_TYPE[a.state]}>{STATE_LABEL[a.state]}</StatusIndicator> },
                  { id: "metric", header: "지표", content: (a) => a.metric },
                  { id: "threshold", header: "임계값", content: (a) => a.threshold },
                ],
              }}
              cardsPerRow={[{ cards: 1 }, { minWidth: 480, cards: 2 }]}
              header={<Header counter={`(${ALARMS.length})`} description="지금 이 계정에 걸려 있는 경보">알람</Header>}
            />
          </div>
          <div style={{ background: "#14233a", border: "1px solid #223349", borderRadius: "8px", padding: "0.9rem" }}>
            <Box color="text-status-info" fontSize="body-s" fontWeight="bold" margin={{ bottom: "s" }}>상태 분포</Box>
            <PieChart
              data={[
                { title: "정상", value: ALARMS.filter((a) => a.state === "ok").length, color: "#3fd39e" },
                { title: "경보", value: ALARMS.filter((a) => a.state === "in-alarm").length, color: "#ff5c5c" },
                { title: "데이터 부족", value: ALARMS.filter((a) => a.state === "insufficient-data").length, color: "#ffb020" },
              ]}
              size="medium"
              hideFilter
            />
          </div>
        </div>

        <div style={{ background: "#14233a", border: "1px solid #223349", borderRadius: "8px", padding: "0.9rem" }}>
          <Table<HistoryRow>
            items={HISTORY}
            variant="embedded"
            header={<Header counter={`(${HISTORY.length})`} description="최근 상태 변화 이력">알람 이력</Header>}
            columnDefinitions={[
              { id: "time", header: "시각", cell: (h) => <Box variant="samp">{h.time}</Box> },
              { id: "alarm", header: "알람", cell: (h) => h.alarm },
              { id: "state", header: "상태", cell: (h) => <StatusIndicator type={STATE_TYPE[h.state]}>{STATE_LABEL[h.state]}</StatusIndicator> },
            ]}
          />
        </div>

        <ExpandableSection headerText="알림 채널 설정" variant="container">
          <Box color="text-status-inactive" fontSize="body-s">
            현재 3개 채널(Slack #ops-alerts · 이메일 팀 배포판 · PagerDuty 에스컬레이션)로 알람이 전달돼요.
          </Box>
        </ExpandableSection>
      </SpaceBetween>
    </div>
  );
}
