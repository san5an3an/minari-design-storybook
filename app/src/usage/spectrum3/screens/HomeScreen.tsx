import * as React from "react";
import { Badge, Flex, ProgressBar, StatusLight, Text, View } from "@adobe/react-spectrum";
import { PROJECTS, TASKS_COMPLETED_BY_WEEK, TEAM, type Project, type ProjectStatus } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_VARIANT: Record<ProjectStatus, "info" | "positive" | "notice"> = {
  "진행중": "info",
  "검토중": "notice",
  "완료": "positive",
};

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <Flex direction="column" gap="size-25">
      <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>{label}</Text>
      <Text UNSAFE_style={{ fontSize: "1.1rem", fontWeight: 700 }}>{value}</Text>
    </Flex>
  );
}

function ProjectCard({ project, onSelect }: { project: Project; onSelect:  => void }) {
  const members = TEAM.filter((m) => project.memberIds.includes(m.id));
  return (
    <div
      onClick={onSelect}
      style={{
        width: "14rem", cursor: "pointer", padding: "1rem",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        display: "flex", flexDirection: "column", gap: "0.6rem",
      }}
    >
      <Flex justifyContent="space-between" alignItems="start">
        <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.9rem" }}>{project.name}</Text>
        <StatusLight variant={STATUS_VARIANT[project.status]}>{project.status}</StatusLight>
      </Flex>
      <Text UNSAFE_style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>{project.description}</Text>
      <ProgressBar aria-label="진행률" value={project.progressPct} width="100%" />
      <Flex justifyContent="space-between" alignItems="center">
        <Flex UNSAFE_style={{ marginInlineStart: "-0.15rem" }}>
          {members.map((m) => (
            <img
              key={m.id}
              src={`https://i.pravatar.cc/64?u=${m.avatarSeed}`}
              alt={m.name}
              style={{ width: "1.4rem", height: "1.4rem", borderRadius: "50%", border: "2px solid white", marginInlineStart: "-0.4rem", objectFit: "cover" }}
            />
          ))}
        </Flex>
        <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>{project.tasksDone}/{project.tasksTotal} · {project.dueDate}</Text>
      </Flex>
    </div>
  );
}

function WeeklyBarChart {
  const max = Math.max(...TASKS_COMPLETED_BY_WEEK.map((d) => d.value));
  return (
    <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200" UNSAFE_style={{ flex: "1 1 12rem" }}>
      <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.8rem", display: "block", marginBottom: "0.6rem" }}>이번달 완료 작업</Text>
      <Flex alignItems="end" gap="size-100" UNSAFE_style={{ height: "4.5rem" }}>
        {TASKS_COMPLETED_BY_WEEK.map((d) => (
          <Flex key={d.label} direction="column" alignItems="center" gap="size-50" UNSAFE_style={{ flex: 1 }}>
            <div style={{ width: "100%", height: `${(d.value / max) * 100}%`, background: "var(--semantic-bg-brand-default)", borderRadius: "0.25rem 0.25rem 0 0", minHeight: "0.25rem" }} />
            <Text UNSAFE_style={{ fontSize: "0.65rem", color: "var(--semantic-fg-neutral-subtle)" }}>{d.label}</Text>
          </Flex>
        ))}
      </Flex>
    </View>
  );
}

function StatusBarChart {
  const counts = (["진행중", "검토중", "완료"] as const).map((s) => ({ status: s, count: PROJECTS.filter((p) => p.status === s).length }));
  const max = Math.max(...counts.map((c) => c.count));
  return (
    <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200" UNSAFE_style={{ flex: "1 1 12rem" }}>
      <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.8rem", display: "block", marginBottom: "0.6rem" }}>상태별 프로젝트 수</Text>
      <Flex direction="column" gap="size-100">
        {counts.map((c) => (
          <Flex key={c.status} alignItems="center" gap="size-100">
            <Text UNSAFE_style={{ fontSize: "0.7rem", width: "3rem", flexShrink: 0 }}>{c.status}</Text>
            <div style={{ flex: 1, height: "0.5rem", background: "var(--semantic-bg-neutral-subtle)", borderRadius: "0.25rem", overflow: "hidden" }}>
              <div style={{ width: `${(c.count / max) * 100}%`, height: "100%", background: "var(--semantic-bg-brand-default)" }} />
            </div>
            <Text UNSAFE_style={{ fontSize: "0.7rem", width: "1rem", textAlign: "right" }}>{c.count}</Text>
          </Flex>
        ))}
      </Flex>
    </View>
  );
}

export function HomeScreen({ onSelect }: ScreenProps) {
  const active = PROJECTS.filter((p) => p.status !== "완료").length;
  const overdue = PROJECTS.filter((p) => p.status !== "완료" && p.dueDate <= "09-22").length;
  return (
    <Flex direction="column" gap="size-200">
      <Text UNSAFE_style={{ fontSize: "1.1rem" }}>안녕하세요, 한지우님! 오늘도 좋은 하루예요.</Text>

      <Flex gap="size-300">
        <MiniStat label="진행 중" value={`${active}개`} />
        <MiniStat label="이번주 마감" value={`${overdue}개`} />
        <MiniStat label="팀원" value={`${TEAM.length}명`} />
        <MiniStat label="완료율" value={`${Math.round((PROJECTS.filter((p) => p.status === "완료").length / PROJECTS.length) * 100)}%`} />
      </Flex>

      <Flex gap="size-200" wrap>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} onSelect={ => onSelect?.(p.id)} />
        ))}
      </Flex>

      <Flex gap="size-200" wrap>
        <WeeklyBarChart />
        <StatusBarChart />
      </Flex>

      <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200">
        <Flex alignItems="center" gap="size-100">
          <Badge variant="info">알림</Badge>
          <Text UNSAFE_style={{ fontSize: "0.8rem" }}>브랜드 가이드 2.0이 검토중이에요. 오늘 중 확인해 주세요.</Text>
        </Flex>
      </View>
    </Flex>
  );
}
