import * as React from "react";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Checkbox from "@cloudscape-design/components/checkbox";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import Link from "@cloudscape-design/components/link";
import PieChart from "@cloudscape-design/components/pie-chart";
import SpaceBetween from "@cloudscape-design/components/space-between";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Table from "@cloudscape-design/components/table";
import Tabs from "@cloudscape-design/components/tabs";

export interface IamUser {
  name: string;
  group: string;
  mfa: boolean;
  lastActivity: string;
}

interface AttachedPolicy {
  name: string;
  type: "AWS 관리형" | "고객 관리형";
}

export const USERS: readonly IamUser[] = [
  { name: "kim.doohyun", group: "Developers", mfa: true, lastActivity: "2026-09-15" },
  { name: "lee.seoah", group: "Admins", mfa: true, lastActivity: "2026-09-16" },
  { name: "park.junseo", group: "Developers", mfa: false, lastActivity: "2026-08-30" },
  { name: "svc-deploy", group: "ServiceAccounts", mfa: false, lastActivity: "2026-09-16" },
  { name: "choi.minji", group: "ReadOnlyAuditors", mfa: true, lastActivity: "2026-09-11" },
  { name: "jung.woojin", group: "Contractors", mfa: false, lastActivity: "2026-08-19" },
  { name: "han.soyul", group: "Developers", mfa: true, lastActivity: "2026-09-08" },
  { name: "yoon.jiho", group: "Admins", mfa: true, lastActivity: "2026-09-16" },
  { name: "svc-backup", group: "ServiceAccounts", mfa: false, lastActivity: "2026-09-05" },
  { name: "lim.chaewon", group: "Contractors", mfa: true, lastActivity: "2026-09-02" },
];

const POLICIES: Record<string, AttachedPolicy[]> = {
  "kim.doohyun": [{ name: "AmazonS3ReadOnlyAccess", type: "AWS 관리형" }, { name: "EC2DeveloperAccess", type: "고객 관리형" }],
  "lee.seoah": [{ name: "AdministratorAccess", type: "AWS 관리형" }],
  "park.junseo": [{ name: "AmazonS3ReadOnlyAccess", type: "AWS 관리형" }],
  "svc-deploy": [{ name: "DeployPipelinePolicy", type: "고객 관리형" }],
  "choi.minji": [{ name: "ReadOnlyAccess", type: "AWS 관리형" }],
  "jung.woojin": [{ name: "ContractorLimitedAccess", type: "고객 관리형" }],
  "han.soyul": [{ name: "AmazonS3ReadOnlyAccess", type: "AWS 관리형" }, { name: "CloudWatchReadOnlyAccess", type: "AWS 관리형" }],
  "yoon.jiho": [{ name: "AdministratorAccess", type: "AWS 관리형" }],
  "svc-backup": [{ name: "BackupPipelinePolicy", type: "고객 관리형" }],
  "lim.chaewon": [{ name: "ContractorLimitedAccess", type: "고객 관리형" }],
};

export function UsersScreen {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [mfaOnly, setMfaOnly] = React.useState(false);

  if (selected) {
    const user = USERS.find((u) => u.name === selected);
    return (
      <SpaceBetween size="m">
        <Button iconName="angle-left" variant="link" onClick={ => setSelected(null)}>사용자 목록으로</Button>
        <Container header={<Header variant="h2">{selected}</Header>}>
          <KeyValuePairs
            columns={3}
            items={[
              { label: "그룹", value: user?.group ?? "-" },
              { label: "MFA", value: <StatusIndicator type={user?.mfa ? "success" : "warning"}>{user?.mfa ? "활성" : "미설정"}</StatusIndicator> },
              { label: "최근 활동", value: user?.lastActivity ?? "-" },
            ]}
          />
        </Container>
        <Tabs
          tabs={[
            {
              id: "policies",
              label: "연결된 정책",
              content: (
                <Table<AttachedPolicy>
                  items={POLICIES[selected] ?? []}
                  variant="container"
                  empty={<Box textAlign="center" color="inherit">연결된 정책이 없어요.</Box>}
                  header={<Header counter={`(${(POLICIES[selected] ?? []).length})`}>정책</Header>}
                  columnDefinitions={[
                    { id: "name", header: "정책 이름", cell: (p) => <Box variant="samp">{p.name}</Box> },
                    { id: "type", header: "유형", cell: (p) => p.type },
                  ]}
                />
              ),
            },
            {
              id: "group",
              label: "소속 그룹",
              content: (
                <Container>
                  <KeyValuePairs columns={2} items={[{ label: "그룹", value: <Link href="#">{user?.group ?? "-"}</Link> }, { label: "역할", value: user?.group === "Admins" ? "관리자" : user?.group === "ServiceAccounts" ? "서비스 계정" : "일반 사용자" }]} />
                </Container>
              ),
            },
          ]}
        />
      </SpaceBetween>
    );
  }

  const mfaCount = USERS.filter((u) => u.mfa).length;
  const noMfaCount = USERS.length - mfaCount;
  const groupCount = new Set(USERS.map((u) => u.group)).size;
  const shown = mfaOnly ? USERS.filter((u) => !u.mfa) : USERS;

  return (
    <SpaceBetween size="l">
      <Container header={<Header variant="h2">사용자 요약</Header>}>
        <KeyValuePairs
          columns={3}
          items={[
            { label: "전체 사용자", value: `${USERS.length}명` },
            { label: "MFA 활성", value: <StatusIndicator type={mfaCount === USERS.length ? "success" : "warning"}>{`${mfaCount}/${USERS.length}명`}</StatusIndicator> },
            { label: "그룹 수", value: `${groupCount}개` },
          ]}
        />
      </Container>

      <div className="cs3-users">
        <style>{`
          .cs3-users { container-type: inline-size; container-name: cs3users; }
          .cs3-users-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
          .cs3-users-summary { order: -1; }
          @container cs3users (min-width: 56rem) {
            .cs3-users-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 20rem); align-items: start; }
            .cs3-users-summary { order: 0; }
          }
        `}</style>
        <div className="cs3-users-grid">
          <Table<IamUser>
            items={shown}
            variant="container"
            filter={
              <Checkbox checked={mfaOnly} onChange={({ detail }) => setMfaOnly(detail.checked)}>
                MFA 미설정만 보기
              </Checkbox>
            }
            header={<Header counter={`(${shown.length})`} description="이 계정의 IAM 사용자. 이름을 누르면 상세로 들어가요.">사용자</Header>}
            empty={<Box textAlign="center" color="inherit">조건에 맞는 사용자가 없어요.</Box>}
            columnDefinitions={[
              { id: "name", header: "사용자 이름", cell: (u) => <Link onFollow={(e) => { e.preventDefault; setSelected(u.name); }}>{u.name}</Link> },
              { id: "group", header: "그룹", cell: (u) => u.group },
              { id: "mfa", header: "MFA", cell: (u) => <StatusIndicator type={u.mfa ? "success" : "warning"}>{u.mfa ? "활성" : "미설정"}</StatusIndicator> },
              { id: "lastActivity", header: "최근 활동", cell: (u) => u.lastActivity },
            ]}
          />
          <Container header={<Header variant="h3">MFA 상태</Header>} className="cs3-users-summary">
            <PieChart
              variant="donut"
              innerMetricValue={String(USERS.length)}
              innerMetricDescription="사용자"
              data={[
                { title: "활성", value: mfaCount, color: "var(--semantic-bg-success-default)" },
                { title: "미설정", value: noMfaCount, color: "var(--semantic-bg-warning-default)" },
              ]}
              size="medium"
              hideFilter
              ariaLabel="MFA 상태 분포"
            />
          </Container>
        </div>
      </div>
    </SpaceBetween>
  );
}
