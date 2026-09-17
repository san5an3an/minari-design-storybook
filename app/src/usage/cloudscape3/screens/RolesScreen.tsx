import * as React from "react";
import Badge from "@cloudscape-design/components/badge";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import Select from "@cloudscape-design/components/select";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Table from "@cloudscape-design/components/table";
import TextFilter from "@cloudscape-design/components/text-filter";

interface Role { name: string; trustedEntity: string; lastUsed: string }

const ROLES: Role[] = [
  { name: "lambda-execution-role", trustedEntity: "lambda.amazonaws.com", lastUsed: "2026-09-16" },
  { name: "ecs-task-role", trustedEntity: "ecs-tasks.amazonaws.com", lastUsed: "2026-09-15" },
  { name: "cross-account-readonly", trustedEntity: "다른 AWS 계정", lastUsed: "2026-09-01" },
  { name: "cloudwatch-alarm-role", trustedEntity: "monitoring.amazonaws.com", lastUsed: "2026-09-14" },
  { name: "codebuild-service-role", trustedEntity: "codebuild.amazonaws.com", lastUsed: "2026-09-10" },
  { name: "eks-node-role", trustedEntity: "eks.amazonaws.com", lastUsed: "2026-09-16" },
  { name: "s3-replication-role", trustedEntity: "s3.amazonaws.com", lastUsed: "2026-09-08" },
  { name: "sso-federated-admin", trustedEntity: "다른 AWS 계정", lastUsed: "2026-09-16" },
  { name: "step-functions-role", trustedEntity: "states.amazonaws.com", lastUsed: "2026-08-25" },
  { name: "glue-etl-role", trustedEntity: "glue.amazonaws.com", lastUsed: "2026-09-05" },
  { name: "sagemaker-notebook-role", trustedEntity: "sagemaker.amazonaws.com", lastUsed: "2026-09-12" },
];

const SORT_OPTIONS = [
  { label: "이름순", value: "name" },
  { label: "최근 사용순", value: "lastUsed" },
];

export function RolesScreen {
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState(SORT_OPTIONS[0]);
  const crossAccount = ROLES.filter((r) => r.trustedEntity === "다른 AWS 계정").length;
  const shown = ROLES.filter((r) => r.name.includes(query))
    .slice
    .sort((a, b) => (sort.value === "name" ? a.name.localeCompare(b.name) : b.lastUsed.localeCompare(a.lastUsed)));

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
      <Table<Role>
        items={shown}
        variant="container"
        filter={
          <TextFilter
            filteringText={query}
            onChange={({ detail }) => setQuery(detail.filteringText)}
            filteringPlaceholder="역할 이름으로 찾기"
            countText={`${shown.length}개 일치`}
          />
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
          { id: "trustedEntity", header: "신뢰 대상", cell: (r) => <Badge color={r.trustedEntity === "다른 AWS 계정" ? "severity-medium" : "grey"}>{r.trustedEntity}</Badge> },
          { id: "lastUsed", header: "최근 사용", cell: (r) => r.lastUsed },
        ]}
      />
    </SpaceBetween>
  );
}
