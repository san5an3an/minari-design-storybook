import * as React from "react";
import AreaChart from "@cloudscape-design/components/area-chart";
import BarChart from "@cloudscape-design/components/bar-chart";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import Popover from "@cloudscape-design/components/popover";
import ProgressBar from "@cloudscape-design/components/progress-bar";
import Select, { type SelectProps } from "@cloudscape-design/components/select";
import SpaceBetween from "@cloudscape-design/components/space-between";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import { ALARMS, STATE_TYPE } from "./AlarmsScreen";
import { INSTANCES, STATUS_LABEL, STATUS_TYPE } from "./InstancesScreen";
import type { Instance } from "./InstancesScreen";

const PERIOD_OPTIONS: SelectProps.Option[] = [
  { label: "최근 24시간", value: "24h" },
  { label: "최근 7일", value: "7d" },
];

// 24시간/7일 고정 데이터 두 벌, Select는 전환만 처리
const TREND: Record<"24h" | "7d", { labels: readonly string[]; cpu: readonly number[]; network: readonly number[] }> = {
  "24h": {
    labels: ["00시", "03시", "06시", "09시", "12시", "15시", "18시", "21시"],
    cpu: [22, 18, 35, 58, 66, 61, 52, 30],
    network: [15, 12, 28, 52, 70, 64, 48, 24],
  },
  "7d": {
    labels: ["9/14", "9/15", "9/16", "9/17", "9/18", "9/19", "9/20"],
    cpu: [40, 44, 38, 52, 60, 47, 55],
    network: [30, 35, 33, 46, 58, 41, 50],
  },
};

function familyOf(type: string): string {
  return type.split(".")[0];
}

function familyCounts(instances: readonly Instance[]): { x: string; y: number }[] {
  const counts = new Map<string, number>;
  for (const i of instances) counts.set(familyOf(i.type), (counts.get(familyOf(i.type)) ?? 0) + 1);
  return Array.from(counts.entries).map(([x, y]) => ({ x, y }));
}

export function OverviewScreen {
  const [period, setPeriod] = React.useState<SelectProps.Option>(PERIOD_OPTIONS[0]);
  const key = (period.value ?? "24h") as "24h" | "7d";
  const trend = TREND[key];

  const running = INSTANCES.filter((i) => i.status === "running").length;
  const stopped = INSTANCES.filter((i) => i.status === "stopped").length;
  const pending = INSTANCES.filter((i) => i.status === "pending").length;

  const inAlarm = ALARMS.filter((a) => a.state === "in-alarm").length;
  const ok = ALARMS.filter((a) => a.state === "ok").length;
  const noData = ALARMS.filter((a) => a.state === "insufficient-data").length;

  return (
    <SpaceBetween size="l">
      <Container header={<Header variant="h2">계정 요약</Header>}>
        <KeyValuePairs
          columns={4}
          items={[
            { label: "실행 중 인스턴스", value: `${running}` },
            {
              label: "이번 달 비용(추정)",
              value: (
                <Popover
                  triggerType="text"
                  header="이번 달 비용(추정)이란?"
                  content="컴퓨팅 + 스토리지 + 데이터 전송 비용의 추정치예요. 실제 청구액과 다를 수 있어요."
                >
                  ₩412,300
                </Popover>
              ),
            },
            { label: "리전", value: "ap-northeast-2" },
            { label: "서비스 상태", value: <StatusIndicator type="success">정상</StatusIndicator> },
          ]}
        />
      </Container>

      <Container header={<Header variant="h2">예산 사용률</Header>}>
        <SpaceBetween size="m">
          <ProgressBar
            value={62}
            label="이번 달 예산"
            description="₩620,000 예산 중 ₩384,400 사용"
            additionalInfo="9월 30일 기준 초과 예상 없음"
          />
          <ProgressBar
            value={91}
            label="스토리지 용량"
            description="1TB 중 910GB 사용"
            status="error"
            additionalInfo="곧 한도에 도달합니다"
          />
        </SpaceBetween>
      </Container>

      <Container
        header={
          <Header
            variant="h2"
            description="계정 전체 인스턴스의 평균 사용률"
            actions={
              <Select
                selectedOption={period}
                onChange={({ detail }) => setPeriod(detail.selectedOption)}
                options={PERIOD_OPTIONS}
                selectedAriaLabel="선택됨"
              />
            }
          >
            CPU·네트워크 사용률 추이
          </Header>
        }
      >
        <AreaChart
          series={[
            { type: "area", title: "CPU 평균 사용률(%)", data: trend.labels.map((x, idx) => ({ x, y: trend.cpu[idx] })), color: "var(--component-chart-series-1)" },
            { type: "area", title: "네트워크 대역폭 사용률(%)", data: trend.labels.map((x, idx) => ({ x, y: trend.network[idx] })), color: "var(--component-chart-series-2)" },
          ]}
          xScaleType="categorical"
          xTitle="시각"
          yTitle="사용률(%)"
          yDomain={[0, 100]}
          height={220}
          hideFilter
          yTickFormatter={(v) => `${v}%`}
          ariaLabel="CPU·네트워크 사용률 추이"
        />
      </Container>

      <Container header={<Header variant="h2" description="인스턴스 패밀리(m6g·t3·c6i·r6g)별 보유 대수">인스턴스 유형군 분포</Header>}>
        <BarChart
          series={[{ type: "bar", title: "인스턴스 수", data: familyCounts(INSTANCES), color: "var(--component-chart-series-3)" }]}
          xScaleType="categorical"
          xTitle="유형군"
          yTitle="대수"
          height={200}
          hideFilter
          hideLegend
          ariaLabel="인스턴스 유형군 분포"
        />
      </Container>

      <Container header={<Header variant="h2">인스턴스 상태</Header>}>
        <KeyValuePairs
          columns={3}
          items={[
            { label: STATUS_LABEL.running, value: <StatusIndicator type={STATUS_TYPE.running}>{running}대</StatusIndicator> },
            { label: STATUS_LABEL.stopped, value: <StatusIndicator type={STATUS_TYPE.stopped}>{stopped}대</StatusIndicator> },
            { label: STATUS_LABEL.pending, value: <StatusIndicator type={STATUS_TYPE.pending}>{pending}대</StatusIndicator> },
          ]}
        />
      </Container>

      <Container header={<Header variant="h2">알람 요약</Header>}>
        <KeyValuePairs
          columns={3}
          items={[
            { label: "경보", value: <StatusIndicator type={STATE_TYPE["in-alarm"]}>{inAlarm}건</StatusIndicator> },
            { label: "정상", value: <StatusIndicator type={STATE_TYPE.ok}>{ok}건</StatusIndicator> },
            { label: "데이터 부족", value: <StatusIndicator type={STATE_TYPE["insufficient-data"]}>{noData}건</StatusIndicator> },
          ]}
        />
      </Container>
    </SpaceBetween>
  );
}
