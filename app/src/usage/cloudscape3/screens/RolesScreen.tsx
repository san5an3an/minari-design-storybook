import * as React from "react";
import Badge from "@cloudscape-design/components/badge";
import BarChart from "@cloudscape-design/components/bar-chart";
import Box from "@cloudscape-design/components/box";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import RadioGroup from "@cloudscape-design/components/radio-group";
import Select from "@cloudscape-design/components/select";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Table from "@cloudscape-design/components/table";
import TextFilter from "@cloudscape-design/components/text-filter";

export interface Role {
  name: string;
  trustedEntity: string;
  category: "컴퓨트" | "빌드/배포" | "오케스트레이션" | "데이터" | "스토리지" | "모니터링" | "교차 계정";
  lastUsed: string;
}

export const ROLES: readonly Role[] = [
  { name: "lambda-execution-role", trustedEntity: "lambda.amazonaws.com", category: "컴퓨트", lastUsed: "2026-09-16" },
  { name: "ecs-task-role", trustedEntity: "ecs-tasks.amazonaws.com", category: "컴퓨트", lastUsed: "2026-09-15" },
  { name: "cross-account-readonly", trustedEntity: "다른 AWS 계정", category: "교차 계정", lastUsed: "2026-09-01" },
  { name: "cloudwatch-alarm-role", trustedEntity: "monitoring.amazonaws.com", category: "모니터링", lastUsed: "2026-09-14" },
  { name: "codebuild-service-role", trustedEntity: "codebuild.amazonaws.com", category: "빌드/배포", lastUsed: "2026-09-10" },
  { name: "eks-node-role", trustedEntity: "eks.amazonaws.com", category: "컴퓨트", lastUsed: "2026-09-16" },
  { name: "s3-replication-role", trustedEntity: "s3.amazonaws.com", category: "스토리지", lastUsed: "2026-09-08" },
  { name: "sso-federated-admin", trustedEntity: "다른 AWS 계정", category: "교차 계정", lastUsed: "2026-09-16" },
  { name: "step-functions-role", trustedEntity: "states.amazonaws.com", category: "오케스트레이션", lastUsed: "2026-08-25" },
  { name: "glue-etl-role", trustedEntity: "glue.amazonaws.com", category: "데이터", lastUsed: "2026-09-05" },
  { name: "sagemaker-notebook-role", trustedEntity: "sagemaker.amazonaws.com", category: "데이터", lastUsed: "2026-09-12" },
];

const SORT_OPTIONS = [
  { label: "이름순", value: "name" },
  { label: "최근 사용순", value: "lastUsed" },
];

function categoryCounts(roles: readonly Role[]): { x: string; y: number }[] {
  const counts = new Map<string, number>;
  for (const r of roles) counts.set(r.category, (counts.get(r.category) ?? 0) + 1);
  return Array.from(counts.entries).map(([x, y]) => ({ x, y }));
}

export function RolesScreen {
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState(SORT_OPTIONS[0]);
  const [direction, setDirection] = React.useState<"asc" | "desc">("asc");
  const crossAccount = ROLES.filter((r) => r.category === "교차 계정").length;
  const dir = direction === "asc" ? 1 : -1;
  const shown = ROLES.filter((r) => r.name.includes(query))
    .slice
    .sort((a, b) => dir * (sort.value === "name" ? a.name.localeCompare(b.name) : a.lastUsed.localeCompare(b.lastUsed)));

  return (
    <SpaceBetween size="l">
      <KeyValuePairs
        columns={3}
        items={[
          { label: "전체 역할", value: `${ROLES.length}개` },
          { label: "교차 계정 신뢰", value: `${crossAccount}개` },
          { label: "24시간 내 사용", value: `${ROLES.filter((r) => r.lastUsed >= "2026-09-15").length}개` },
        ]}
      />

      <Container header={<Header variant="h2" description="어떤 서비스가 이 역할을 위임받는지">신뢰 대상 유형별 역할 수</Header>}>
        <BarChart
          series={[{ type: "bar", title: "역할 수", data: categoryCounts(ROLES), color: "var(--component-chart-series-4)" }]}
          xScaleType="categorical"
          xTitle="유형"
          yTitle="역할 수"
          height={200}
          hideFilter
          hideLegend
          ariaLabel="신뢰 대상 유형별 역할 수"
        />
      </Container>

      <Table<Role>
        items={shown}
        variant="container"
        filter={
          <SpaceBetween direction="horizontal" size="s">
            <TextFilter
              filteringText={query}
              onChange={({ detail }) => setQuery(detail.filteringText)}
              filteringPlaceholder="역할 이름으로 찾기"
              countText={`${shown.length}개 일치`}
            />
            <RadioGroup
              value={direction}
              onChange={({ detail }) => setDirection(detail.value as "asc" | "desc")}
              items={[
                { value: "asc", label: "오름차순" },
                { value: "desc", label: "내림차순" },
              ]}
            />
          </SpaceBetween>
        }
        header={
          <Header
            counter={`(${ROLES.length})`}
            actions={<Select selectedOption={sort} onChange={({ detail }) => setSort(detail.selectedOption as typeof SORT_OPTIONS[number])} options={SORT_OPTIONS} selectedAriaLabel="선택됨" />}
          >
            역할
          </Header>
        }
        columnDefinitions={[
          { id: "name", header: "역할 이름", cell: (r) => <Box variant="samp">{r.name}</Box> },
          { id: "trustedEntity", header: "신뢰 대상", cell: (r) => <Badge color={r.category === "교차 계정" ? "severity-medium" : "grey"}>{r.trustedEntity}</Badge> },
          { id: "category", header: "유형", cell: (r) => r.category },
          { id: "lastUsed", header: "최근 사용", cell: (r) => r.lastUsed },
        ]}
      />
    </SpaceBetween>
  );
}
