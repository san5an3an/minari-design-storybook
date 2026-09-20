import * as React from "react";
import {
  ActionButton, Avatar, Checkbox, Content, DropZone, FileTrigger, Flex, IllustratedMessage, Text,
} from "@adobe/react-spectrum";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AlertCircle, CalendarClock, CheckCircle2, Percent } from "lucide-react";
import { PROGRESS_WEEK_LABELS, PROJECTS, PROJECT_TASKS, TEAM, type TaskPriority } from "../data";
import {
  AvatarStack, Bar as MiniBar, Card, CardAction, Chip, PromoCard, StatCard, StatusChip, type StatSpec,
} from "../parts";
import type { ScreenProps } from "../screens";

const PRIORITY_TOKEN: Record<TaskPriority, { fg: string; bg: string }> = {
  "높음": { fg: "var(--semantic-fg-danger-default)", bg: "var(--semantic-bg-danger-subtle)" },
  "보통": { fg: "var(--semantic-fg-warning-default)", bg: "var(--semantic-bg-warning-subtle)" },
  "낮음": { fg: "var(--semantic-fg-neutral-subtle)", bg: "var(--semantic-bg-neutral-subtle)" },
};

function PriorityChip({ p }: { p: TaskPriority }) {
  const t = PRIORITY_TOKEN[p];
  return (
    <span
      style={{
        padding: "0.05rem 0.4rem", borderRadius: "var(--semantic-radius-pill)",
        background: t.bg, color: t.fg, fontSize: "0.64rem", fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0,
      }}
    >
      {p}
    </span>
  );
}

export function ProjectDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const project = PROJECTS.find((p) => p.id === selectedId) ?? PROJECTS[0];
  const initialTasks = PROJECT_TASKS[project.id] ?? [];
  const [done, setDone] = React.useState<Record<string, boolean>>(
     => Object.fromEntries(initialTasks.map((t) => [t.id, t.done])),
  );
  const [dropped, setDropped] = React.useState(false);

  // 선택 변경 시 해당 프로젝트 체크 상태로 동기화
  React.useEffect( => {
    setDone(Object.fromEntries((PROJECT_TASKS[project.id] ?? []).map((t) => [t.id, t.done])));
    setDropped(false);
  }, [project.id]);

  const members = TEAM.filter((m) => project.memberIds.includes(m.id));
  const lead = TEAM.find((m) => m.id === project.leadId);
  const completedCount = Object.values(done).filter(Boolean).length;
  const pct = initialTasks.length ? Math.round((completedCount / initialTasks.length) * 100) : project.progressPct;
  const remaining = initialTasks.length - completedCount;

  const trend = project.weeklyProgress.map((v, i) => ({ label: PROGRESS_WEEK_LABELS[i] ?? `${i + 1}주`, v }));

  const stats: readonly StatSpec[] = [
    { label: "진행률", value: `${pct}%`, sub: `목표 100%`, delta: "+13%p", up: true, trend: project.weeklyProgress, icon: <Percent size={15} />, tone: "brand" },
    { label: "완료 작업", value: `${completedCount}건`, sub: `전체 ${initialTasks.length || project.tasksTotal}건`, delta: "+2", up: true, trend: [1, 1, 2, 2, 3, completedCount || 1], icon: <CheckCircle2 size={15} />, tone: "success" },
    { label: "열린 이슈", value: `${project.openIssues}건`, sub: "담당 배정 완료", delta: "-1", up: true, trend: [8, 7, 7, 6, 6, project.openIssues || 1], icon: <AlertCircle size={15} />, tone: "danger" },
    { label: "마감까지", value: project.daysLeft < 0 ? "완료" : `D-${project.daysLeft}`, sub: `${project.dueDate} 마감`, delta: project.daysLeft <= 3 ? "임박" : "여유", up: project.daysLeft > 3, trend: [30, 26, 22, 18, 14, Math.max(project.daysLeft, 1)], icon: <CalendarClock size={15} />, tone: "warning" },
  ];

  return (
    <div className="sp3-split">
      <div className="sp3-col">
        <Card pad="1rem">
          <Flex justifyContent="space-between" alignItems="start" gap="size-150" wrap>
            <Flex direction="column" gap="size-75" UNSAFE_style={{ minWidth: 0 }}>
              <Flex alignItems="center" gap="size-100" wrap>
                <Text UNSAFE_style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--semantic-fg-neutral-subtlest)" }}>{project.code}</Text>
                <StatusChip status={project.status} />
                <Chip>{project.category}</Chip>
                <Chip>{project.sprint}</Chip>
              </Flex>
              <Text UNSAFE_style={{ fontSize: "1.2rem", fontWeight: 700, lineHeight: 1.25 }}>{project.name}</Text>
              <Text UNSAFE_style={{ fontSize: "0.78rem", color: "var(--semantic-fg-neutral-subtle)" }}>
                {project.description} · {lead?.name} 담당 · {project.updatedAt} 갱신
              </Text>
            </Flex>
            <Flex alignItems="center" gap="size-100" UNSAFE_style={{ flexShrink: 0 }}>
              <AvatarStack memberIds={project.memberIds} size={26} />
              <ActionButton isQuiet onPress={ => onNavigate?.("home")}>← 보드</ActionButton>
            </Flex>
          </Flex>

          <Flex direction="column" gap="size-50">
            <Flex justifyContent="space-between">
              <Text UNSAFE_style={{ fontSize: "0.72rem", color: "var(--semantic-fg-neutral-subtle)" }}>
                {completedCount}/{initialTasks.length || project.tasksTotal} 작업 완료 · 남은 {Math.max(remaining, 0)}건
              </Text>
              <Text UNSAFE_style={{ fontSize: "0.72rem", fontWeight: 700 }}>{pct}%</Text>
            </Flex>
            <MiniBar pct={pct} tone={pct === 100 ? "success" : "brand"} />
          </Flex>
        </Card>

        <div className="sp3-g4">
          {stats.map((s) => <StatCard key={s.label} s={s} />)}
        </div>

        <Card title="진행 추이" action={<Chip>최근 6주</Chip>}>
          <div style={{ width: "100%", height: "10rem", minWidth: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trend} margin={{ top: 6, right: 6, bottom: 0, left: -16 }}>
                <defs>
                  <linearGradient id="sp3-detail" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--component-chart-series-1)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--component-chart-series-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--semantic-border-neutral-subtle)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--semantic-fg-neutral-subtle)" }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--semantic-fg-neutral-subtle)" }} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    borderRadius: "var(--semantic-radius-control)",
                    border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                    fontSize: "0.72rem",
                  }}
                  formatter={(v: unknown) => [`${String(v)}%`, "진행률"] as [string, string]}
                />
                <Area type="monotone" dataKey="v" stroke="var(--component-chart-series-1)" strokeWidth={2} fill="url(#sp3-detail)" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title={`작업 목록 ${initialTasks.length}`} action={<CardAction>이슈 추가 +</CardAction>}>
          {initialTasks.length === 0 ? (
            <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>
              등록된 세부 작업이 없어요. 전체 진행률만 표시돼요.
            </Text>
          ) : (
            <Flex direction="column" gap="size-0">
              {initialTasks.map((t, i) => {
                const assignee = TEAM.find((m) => m.id === t.assigneeId);
                const checked = !!done[t.id];
                const overdue = !checked && t.due < "09-20";
                return (
                  <Flex
                    key={t.id}
                    alignItems="center"
                    gap="size-100"
                    justifyContent="space-between"
                    UNSAFE_style={{
                      padding: "0.5rem 0.15rem",
                      borderTop: i === 0 ? undefined : "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                      minWidth: 0,
                    }}
                  >
                    <Flex alignItems="center" gap="size-100" UNSAFE_style={{ minWidth: 0, flex: 1 }}>
                      <Checkbox
                        isSelected={checked}
                        onChange={(v) => setDone((prev) => ({ ...prev, [t.id]: v }))}
                        aria-label={`${t.code} ${t.title}`}
                      />
                      <Text UNSAFE_style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--semantic-fg-neutral-subtlest)", flexShrink: 0 }}>{t.code}</Text>
                      <Text
                        UNSAFE_style={{
                          fontSize: "0.8rem", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                          textDecoration: checked ? "line-through" : undefined,
                          color: checked ? "var(--semantic-fg-neutral-subtle)" : undefined,
                        }}
                      >
                        {t.title}
                      </Text>
                    </Flex>
                    <Flex alignItems="center" gap="size-100" UNSAFE_style={{ flexShrink: 0 }}>
                      <PriorityChip p={t.priority} />
                      <Text
                        UNSAFE_style={{
                          fontSize: "0.68rem", width: "3.2rem", textAlign: "right",
                          color: overdue ? "var(--semantic-fg-danger-default)" : "var(--semantic-fg-neutral-subtle)",
                          fontWeight: overdue ? 700 : 400,
                        }}
                      >
                        {t.due}
                      </Text>
                      {assignee ? <Avatar src={`https://i.pravatar.cc/64?u=${assignee.avatarSeed}`} alt={assignee.name} size={22} /> : null}
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          )}
        </Card>
      </div>

      <div className="sp3-col">
        <Card title={`참여자 ${members.length}`} action={<CardAction>초대 +</CardAction>}>
          <Flex direction="column" gap="size-150">
            {members.map((m) => (
              <Flex key={m.id} alignItems="center" gap="size-100" UNSAFE_style={{ minWidth: 0 }}>
                <Avatar src={`https://i.pravatar.cc/64?u=${m.avatarSeed}`} alt={m.name} size={28} />
                <Flex direction="column" gap="size-0" UNSAFE_style={{ minWidth: 0, flex: 1 }}>
                  <Text UNSAFE_style={{ fontSize: "0.76rem", fontWeight: 600 }}>
                    {m.name}
                    {m.id === project.leadId ? <span style={{ color: "var(--semantic-fg-brand-default)", fontWeight: 700 }}> · 리드</span> : null}
                  </Text>
                  <Text UNSAFE_style={{ fontSize: "0.66rem", color: "var(--semantic-fg-neutral-subtle)" }}>{m.role} · 부하 {m.workloadPct}%</Text>
                  <div style={{ marginTop: "0.2rem" }}>
                    <MiniBar pct={m.workloadPct} tone={m.workloadPct >= 90 ? "danger" : m.workloadPct >= 70 ? "warning" : "success"} />
                  </div>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Card>

        <Card title="파일 첨부" action={<Chip>{dropped ? "3개" : "2개"}</Chip>}>
          <DropZone aria-label="파일을 여기로 드롭하세요" onDrop={ => setDropped(true)} UNSAFE_style={{ minHeight: "5rem" }}>
            <IllustratedMessage>
              <Content>
                <Text UNSAFE_style={{ fontSize: "0.72rem" }}>
                  {dropped ? "spec-v3.pdf 가 추가됐어요." : "여기로 드래그하거나 아래에서 고르세요."}
                </Text>
              </Content>
            </IllustratedMessage>
          </DropZone>
          <FileTrigger onSelect={ => setDropped(true)}>
            <ActionButton UNSAFE_style={{ width: "100%" }}>파일 선택</ActionButton>
          </FileTrigger>
          <Flex direction="column" gap="size-75">
            {["온보딩-플로우.fig · 2.4MB", "결제-API-스펙.md · 18KB"].map((f) => (
              <Text key={f} UNSAFE_style={{ fontSize: "0.68rem", color: "var(--semantic-fg-neutral-subtle)" }}>{f}</Text>
            ))}
          </Flex>
        </Card>

        <PromoCard
          title="이 프로젝트 자동 점검"
          body="마감 3일 전과 이슈가 5건을 넘을 때 담당자에게 먼저 알려드려요."
          cta="알림 규칙 만들기"
        />
      </div>
    </div>
  );
}
