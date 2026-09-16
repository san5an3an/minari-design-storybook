import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Header from "@cloudscape-design/components/header";

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
    <Cards<Alarm>
      items={ALARMS}
      cardDefinition={{
        header: (a) => a.name,
        sections: [
          {
            id: "state",
            content: (a) => <StatusIndicator type={STATE_TYPE[a.state]}>{STATE_LABEL[a.state]}</StatusIndicator>,
          },
          { id: "metric", header: "지표", content: (a) => a.metric },
          { id: "threshold", header: "임계값", content: (a) => a.threshold },
        ],
      }}
      cardsPerRow={[{ cards: 1 }, { minWidth: 480, cards: 2 }]}
      header={
        <Header counter={`(${ALARMS.length})`} description="지금 이 계정에 걸려 있는 경보">
          알람
        </Header>
      }
    />
  );
}
