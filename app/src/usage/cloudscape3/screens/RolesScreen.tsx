import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";

interface Role {
  name: string;
  trustedEntity: string;
  lastUsed: string;
}

const ROLES: Role[] = [
  { name: "lambda-execution-role", trustedEntity: "lambda.amazonaws.com", lastUsed: "2026-09-16" },
  { name: "ecs-task-role", trustedEntity: "ecs-tasks.amazonaws.com", lastUsed: "2026-09-15" },
  { name: "cross-account-readonly", trustedEntity: "다른 AWS 계정", lastUsed: "2026-09-01" },
];

export function RolesScreen {
  return (
    <Table<Role>
      items={ROLES}
      variant="container"
      header={<Header counter={`(${ROLES.length})`}>역할</Header>}
      columnDefinitions={[
        { id: "name", header: "역할 이름", cell: (r) => <Box variant="samp">{r.name}</Box> },
        { id: "trustedEntity", header: "신뢰 대상", cell: (r) => r.trustedEntity },
        { id: "lastUsed", header: "최근 사용", cell: (r) => r.lastUsed },
      ]}
    />
  );
}
