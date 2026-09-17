import * as React from "react";
import Badge from "@cloudscape-design/components/badge";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import Select from "@cloudscape-design/components/select";
import SpaceBetween from "@cloudscape-design/components/space-between";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Table from "@cloudscape-design/components/table";
import TextFilter from "@cloudscape-design/components/text-filter";
import { KeyRound, ShieldCheck, UserCheck, Users as UsersIcon } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60";

interface IamUser { name: string; group: string; mfa: boolean; lastActivity: string }
interface AttachedPolicy { name: string; type: "AWS 관리형" | "고객 관리형" }

const USERS: IamUser[] = [
  { name: "kim.doohyun", group: "Developers", mfa: true, lastActivity: "2026-09-15" },
  { name: "lee.seoah", group: "Admins", mfa: true, lastActivity: "2026-09-16" },
  { name: "park.junseo", group: "Developers", mfa: false, lastActivity: "2026-08-30" },
  { name: "svc-deploy", group: "ServiceAccounts", mfa: false, lastActivity: "2026-09-16" },
  { name: "choi.jihu", group: "Developers", mfa: true, lastActivity: "2026-09-14" },
  { name: "jung.seojun", group: "ReadOnlyAuditors", mfa: true, lastActivity: "2026-09-01" },
  { name: "han.jiwoo", group: "Contractors", mfa: false, lastActivity: "2026-08-20" },
  { name: "svc-backup", group: "ServiceAccounts", mfa: false, lastActivity: "2026-09-16" },
  { name: "yoon.saebyeol", group: "Admins", mfa: true, lastActivity: "2026-09-16" },
  { name: "song.minjae", group: "Developers", mfa: true, lastActivity: "2026-09-11" },
  { name: "svc-ml-pipeline", group: "ServiceAccounts", mfa: false, lastActivity: "2026-09-15" },
  { name: "oh.yerin", group: "Contractors", mfa: false, lastActivity: "2026-07-30" },
];

const POLICIES: Record<string, AttachedPolicy[]> = {
  "kim.doohyun": [{ name: "AmazonS3ReadOnlyAccess", type: "AWS 관리형" }, { name: "EC2DeveloperAccess", type: "고객 관리형" }],
  "lee.seoah": [{ name: "AdministratorAccess", type: "AWS 관리형" }],
  "park.junseo": [{ name: "AmazonS3ReadOnlyAccess", type: "AWS 관리형" }],
  "svc-deploy": [{ name: "DeployPipelinePolicy", type: "고객 관리형" }],
};

const GROUP_OPTIONS = [
  { label: "전체 그룹", value: "all" },
  { label: "Admins", value: "Admins" },
  { label: "Developers", value: "Developers" },
  { label: "ServiceAccounts", value: "ServiceAccounts" },
  { label: "Contractors", value: "Contractors" },
  { label: "ReadOnlyAuditors", value: "ReadOnlyAuditors" },
];

const STATS = [
  { label: "전체 사용자", value: String(USERS.length), delta: "+2", icon: UsersIcon },
  { label: "MFA 활성", value: String(USERS.filter((u) => u.mfa).length), delta: "+1", icon: ShieldCheck },
  { label: "관리자", value: String(USERS.filter((u) => u.group === "Admins").length), delta: "0", icon: KeyRound },
  { label: "오늘 활동", value: String(USERS.filter((u) => u.lastActivity === "2026-09-16").length), delta: "+3", icon: UserCheck },
] as const;

function Hero {
  return (
    <div
      className="flex flex-col justify-end gap-1 overflow-hidden px-6 py-4"
      style={{
        minHeight: "8rem",
        borderRadius: "8px",
        backgroundImage:
          `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
          `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${HERO_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span style={{ color: "white", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.25 }}>IAM 접근 관리</span>
      <span style={{ color: "white", opacity: 0.9 }}>계정·그룹·역할의 권한 현황을 한눈에 확인해요.</span>
    </div>
  );
}

export function UsersScreen {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const [group, setGroup] = React.useState(GROUP_OPTIONS[0]);

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

  const shown = USERS.filter((u) => (group.value === "all" || u.group === group.value) && u.name.includes(query));

  return (
    <SpaceBetween size="l">
      <Hero />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "8px", padding: "0.9rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "1.75rem", height: "1.75rem", borderRadius: "6px",
                  background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)",
                }}>
                  <Icon size={14} />
                </span>
                <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.75rem" }}>{s.label}</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                <span style={{ fontSize: "1.375rem", fontWeight: 700 }}>{s.value}</span>
                <span style={{ color: s.delta.startsWith("+") ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-subtle)", fontSize: "0.75rem" }}>
                  {s.delta}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <Table<IamUser>
        items={shown}
        variant="container"
        filter={
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <TextFilter
              filteringText={query}
              onChange={({ detail }) => setQuery(detail.filteringText)}
              filteringPlaceholder="사용자 이름으로 찾기"
              countText={`${shown.length}개 일치`}
            />
            <Select selectedOption={group} onChange={({ detail }) => setGroup(detail.selectedOption as typeof GROUP_OPTIONS[number])} options={GROUP_OPTIONS} selectedAriaLabel="선택됨" />
          </div>
        }
        header={<Header counter={`(${USERS.length})`} description="이 계정의 IAM 사용자">사용자</Header>}
        columnDefinitions={[
          { id: "name", header: "사용자 이름", cell: (u) => <Link onFollow={(e) => { e.preventDefault; setSelected(u.name); }}>{u.name}</Link> },
          { id: "group", header: "그룹", cell: (u) => <Badge color="grey">{u.group}</Badge> },
          { id: "mfa", header: "MFA", cell: (u) => <StatusIndicator type={u.mfa ? "success" : "warning"}>{u.mfa ? "활성" : "미설정"}</StatusIndicator> },
          { id: "lastActivity", header: "최근 활동", cell: (u) => u.lastActivity },
        ]}
      />
    </SpaceBetween>
  );
}
