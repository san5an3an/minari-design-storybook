import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import StatusIndicator from "@cloudscape-design/components/status-indicator";

interface IamUser {
  name: string;
  group: string;
  mfa: boolean;
  lastActivity: string;
}

interface AttachedPolicy {
  name: string;
  type: "AWS 관리형" | "고객 관리형";
}

const USERS: IamUser[] = [
  { name: "kim.doohyun", group: "Developers", mfa: true, lastActivity: "2026-09-15" },
  { name: "lee.seoah", group: "Admins", mfa: true, lastActivity: "2026-09-16" },
  { name: "park.junseo", group: "Developers", mfa: false, lastActivity: "2026-08-30" },
  { name: "svc-deploy", group: "ServiceAccounts", mfa: false, lastActivity: "2026-09-16" },
];

const POLICIES: Record<string, AttachedPolicy[]> = {
  "kim.doohyun": [{ name: "AmazonS3ReadOnlyAccess", type: "AWS 관리형" }, { name: "EC2DeveloperAccess", type: "고객 관리형" }],
  "lee.seoah": [{ name: "AdministratorAccess", type: "AWS 관리형" }],
  "park.junseo": [{ name: "AmazonS3ReadOnlyAccess", type: "AWS 관리형" }],
  "svc-deploy": [{ name: "DeployPipelinePolicy", type: "고객 관리형" }],
};

export function UsersScreen {
  const [selected, setSelected] = React.useState<string | null>(null);

  if (selected) {
    return (
      <SpaceBetween size="m">
        <Button iconName="angle-left" variant="link" onClick={ => setSelected(null)}>사용자 목록으로</Button>
        <Table<AttachedPolicy>
          items={POLICIES[selected] ?? []}
          variant="container"
          header={<Header counter={`(${(POLICIES[selected] ?? []).length})`} description={`${selected} 에 연결된 정책`}>{selected}</Header>}
          columnDefinitions={[
            { id: "name", header: "정책 이름", cell: (p) => <Box variant="samp">{p.name}</Box> },
            { id: "type", header: "유형", cell: (p) => p.type },
          ]}
        />
      </SpaceBetween>
    );
  }

  return (
    <Table<IamUser>
      items={USERS}
      variant="container"
      header={<Header counter={`(${USERS.length})`} description="이 계정의 IAM 사용자">사용자</Header>}
      columnDefinitions={[
        { id: "name", header: "사용자 이름", cell: (u) => <Link onFollow={(e) => { e.preventDefault; setSelected(u.name); }}>{u.name}</Link> },
        { id: "group", header: "그룹", cell: (u) => u.group },
        { id: "mfa", header: "MFA", cell: (u) => <StatusIndicator type={u.mfa ? "success" : "warning"}>{u.mfa ? "활성" : "미설정"}</StatusIndicator> },
        { id: "lastActivity", header: "최근 활동", cell: (u) => u.lastActivity },
      ]}
    />
  );
}
