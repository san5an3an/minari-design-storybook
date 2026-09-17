import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import Badge from "@cloudscape-design/components/badge";
import TextFilter from "@cloudscape-design/components/text-filter";
import Select from "@cloudscape-design/components/select";

interface Role {
  name: string;
  trustedEntity: string;
  lastUsed: string;
}

const ROLES: Role[] = [
  { name: "lambda-execution-role", trustedEntity: "lambda.amazonaws.com", lastUsed: "2026-09-16" },
  { name: "ecs-task-role", trustedEntity: "ecs-tasks.amazonaws.com", lastUsed: "2026-09-15" },
  { name: "cross-account-readonly", trustedEntity: "다른 AWS 계정", lastUsed: "2026-09-01" },
  { name: "cloudwatch-alarm-role", trustedEntity: "monitoring.amazonaws.com", lastUsed: "2026-09-14" },
  { name: "codebuild-service-role", trustedEntity: "codebuild.amazonaws.com", lastUsed: "2026-09-10" },
];

const SORT_OPTIONS = [
  { label: "이름순", value: "name" },
  { label: "최근 사용순", value: "lastUsed" },
];

export function RolesScreen {
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState(SORT_OPTIONS[0]);
  const shown = ROLES.filter((r) => r.name.includes(query))
    .slice
    .sort((a, b) => (sort.value === "name" ? a.name.localeCompare(b.name) : b.lastUsed.localeCompare(a.lastUsed)));

  return (
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
          actions={
            <Select
              selectedOption={sort}
              onChange={({ detail }) => setSort(detail.selectedOption as typeof SORT_OPTIONS[number])}
              options={SORT_OPTIONS}
              selectedAriaLabel="선택됨"
            />
          }
        >
          역할
        </Header>
      }
      columnDefinitions={[
        { id: "name", header: "역할 이름", cell: (r) => <Box variant="samp">{r.name}</Box> },
        {
          id: "trustedEntity",
          header: "신뢰 대상",
          cell: (r) => <Badge color={r.trustedEntity === "다른 AWS 계정" ? "severity-medium" : "grey"}>{r.trustedEntity}</Badge>,
        },
        { id: "lastUsed", header: "최근 사용", cell: (r) => r.lastUsed },
      ]}
    />
  );
}
