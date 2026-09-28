import * as React from "react";
import {
  Cell as TCell, Column, Flex, Row, TableBody, TableHeader, TableView, Text,
} from "@adobe/react-spectrum";
import {
  Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis,
} from "recharts";
import { Clock, FolderKanban, TrendingUp, Users } from "lucide-react";
import {
  PROJECTS, RECENT_ACTIVITY, STAT_TRENDS, TASKS_COMPLETED_BY_WEEK, TEAM,
  type ProjectStatus,
} from "../data";
import {
  ActivityRow, AvatarStack, Bar as MiniBar, Card, CardAction, Chip, DeadlineRow, PromoCard,
  StatCard, StatusChip, type StatSpec,
} from "../parts";
import type { ScreenProps } from "../screens";

const STATUS_ORDER: readonly ProjectStatus[] = ["진행중", "검토중", "완료"];
const STATUS_FILL: Record<ProjectStatus, string> = {
  "진행중": "var(--component-chart-series-1)",
  "검토중": "var(--component-chart-series-2)",
  "완료": "var(--component-chart-series-3)",
};

function Hero {
  const active = PROJECTS.filter((p) => p.status !== "완료").length;
  const dueSoon = PROJECTS.filter((p) => p.status !== "완료" && p.daysLeft <= 14).length;
  const trend = PROJECTS[0].weeklyProgress.map((v, i) => ({ i, v }));
  return (
    <div
      style={{
        borderRadius: "var(--semantic-radius-container)",
        background: "linear-gradient(120deg, var(--semantic-bg-brand-subtle), var(--semantic-bg-neutral-subtlest))",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        padding: "1.15rem 1.25rem",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap",
      }}
    >
      <Flex direction="column" gap="size-75" UNSAFE_style={{ minWidth: "14rem" }}>
        <Flex alignItems="center" gap="size-100">
          <Text UNSAFE_style={{ fontSize: "0.78rem", color: "var(--semantic-fg-neutral-subtle)" }}>안녕하세요, 한지우님 👋</Text>
          <Chip>Sprint 25 · D-9</Chip>
        </Flex>
        <Text UNSAFE_style={{ fontSize: "1.35rem", fontWeight: 700, lineHeight: 1.25 }}>
          진행 중인 프로젝트 {active}개, 2주 안 마감 {dueSoon}건이에요
        </Text>
        <Text UNSAFE_style={{ fontSize: "0.78rem", color: "var(--semantic-fg-neutral-subtle)" }}>
          PRJ-098 브랜드 가이드가 D-2 예요. 검토부터 끝내는 게 좋아요.
        </Text>
      </Flex>
      <Flex direction="column" gap="size-50" UNSAFE_style={{ minWidth: "11rem", flex: "0 1 14rem" }}>
        <Flex justifyContent="space-between">
          <Text UNSAFE_style={{ fontSize: "0.68rem", color: "var(--semantic-fg-neutral-subtle)" }}>PRJ-114 진행 추이</Text>
          <Text UNSAFE_style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--semantic-fg-brand-default)" }}>68%</Text>
        </Flex>
        <div style={{ width: "100%", height: "3.2rem" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trend} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="sp3-hero" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--semantic-fg-brand-default)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--semantic-fg-brand-default)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="v" stroke="var(--semantic-fg-brand-default)" strokeWidth={2} fill="url(#sp3-hero)" isAnimationActive={false} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Flex>
    </div>
  );
}

function StatsRow {
  const active = PROJECTS.filter((p) => p.status !== "완료").length;
  const dueSoon = PROJECTS.filter((p) => p.status !== "완료" && p.daysLeft <= 14).length;
  const done = PROJECTS.filter((p) => p.status === "완료").length;
  const completion = Math.round((done / PROJECTS.length) * 100);
  const stats: readonly StatSpec[] = [
    { label: "진행 중", value: `${active}개`, sub: `총 ${PROJECTS.length}개 중`, delta: "+1", up: true, trend: STAT_TRENDS.active, icon: <FolderKanban size={15} />, tone: "brand" },
    { label: "2주 내 마감", value: `${dueSoon}건`, sub: "가장 급한 건 D-2", delta: "-1", up: true, trend: STAT_TRENDS.due, icon: <Clock size={15} />, tone: "warning" },
    { label: "팀원", value: `${TEAM.length}명`, sub: `가용 ${TEAM.filter((m) => m.available).length}명`, delta: "0", up: true, trend: STAT_TRENDS.members, icon: <Users size={15} />, tone: "success" },
    { label: "완료율", value: `${completion}%`, sub: `${done}/${PROJECTS.length} 프로젝트`, delta: "+3%p", up: true, trend: STAT_TRENDS.completion, icon: <TrendingUp size={15} />, tone: "brand" },
  ];
  return (
    <div className="sp3-g4">
      {stats.map((s) => <StatCard key={s.label} s={s} />)}
    </div>
  );
}

function WeeklyTasksCard {
  const total = TASKS_COMPLETED_BY_WEEK.reduce((sum, d) => sum + d.value, 0);
  return (
    <Card title="이번달 완료 작업" action={<Chip>최근 4주</Chip>}>
      <Flex alignItems="baseline" gap="size-100">
        <Text UNSAFE_style={{ fontSize: "1.5rem", fontWeight: 700 }}>{total}건</Text>
        <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-success-default)", fontWeight: 600 }}>▲ 지난달 대비 +18%</Text>
      </Flex>
      <div style={{ width: "100%", height: "9rem", minWidth: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[...TASKS_COMPLETED_BY_WEEK]} margin={{ top: 4, right: 4, bottom: 0, left: 4 }}>
            <defs>
              <linearGradient id="sp3-bar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--component-chart-series-1)" stopOpacity={1} />
                <stop offset="100%" stopColor="var(--component-chart-series-1)" stopOpacity={0.45} />
              </linearGradient>
            </defs>
            <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--semantic-fg-neutral-subtle)" }} />
            <Tooltip
              cursor={{ fill: "var(--semantic-bg-neutral-subtle)" }}
              contentStyle={{
                borderRadius: "var(--semantic-radius-control)",
                border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                fontSize: "0.72rem",
              }}
              formatter={(v: unknown) => [`${String(v)}건`, "완료"] as [string, string]}
            />
            <Bar dataKey="value" fill="url(#sp3-bar)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

function StatusDonutCard {
  const counts = STATUS_ORDER.map((s) => ({ status: s, count: PROJECTS.filter((p) => p.status === s).length }));
  const total = counts.reduce((sum, c) => sum + c.count, 0);
  return (
    <Card title="상태 분포" action={<CardAction>전체 보기 →</CardAction>}>
      <Flex alignItems="center" gap="size-150" UNSAFE_style={{ minWidth: 0 }}>
        <div style={{ width: "7.5rem", height: "7.5rem", position: "relative", flexShrink: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={counts} dataKey="count" nameKey="status" innerRadius="66%" outerRadius="100%" paddingAngle={2} stroke="none" isAnimationActive={false}>
                {counts.map((c) => <Cell key={c.status} fill={STATUS_FILL[c.status]} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <Text UNSAFE_style={{ fontSize: "1.3rem", fontWeight: 700, lineHeight: 1 }}>{total}</Text>
            <Text UNSAFE_style={{ fontSize: "0.62rem", color: "var(--semantic-fg-neutral-subtle)" }}>프로젝트</Text>
          </div>
        </div>
        <Flex direction="column" gap="size-100" UNSAFE_style={{ flex: 1, minWidth: 0 }}>
          {counts.map((c) => (
            <Flex key={c.status} alignItems="center" justifyContent="space-between" gap="size-75">
              <Flex alignItems="center" gap="size-75" UNSAFE_style={{ minWidth: 0 }}>
                <span aria-hidden style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: STATUS_FILL[c.status], flexShrink: 0 }} />
                <Text UNSAFE_style={{ fontSize: "0.74rem" }}>{c.status}</Text>
              </Flex>
              <Text UNSAFE_style={{ fontSize: "0.74rem", fontWeight: 600, flexShrink: 0 }}>
                {c.count}건 <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontWeight: 400 }}>{Math.round((c.count / total) * 100)}%</span>
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}

function ProjectCard({ id, onSelect }: { id: string; onSelect:  => void }) {
  const p = PROJECTS.find((x) => x.id === id)!;
  const lead = TEAM.find((m) => m.id === p.leadId);
  const overdueTone = p.daysLeft < 0 ? "success" : p.daysLeft <= 3 ? "danger" : "brand";
  return (
    <div
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect; }}
      style={{
        cursor: "pointer", minWidth: 0, padding: "0.9rem",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        background: "var(--semantic-bg-neutral-surface)",
        boxShadow: "var(--semantic-shadow-raised)",
        display: "flex", flexDirection: "column", gap: "0.55rem",
      }}
    >
      <Flex justifyContent="space-between" alignItems="center" gap="size-75">
        <Text UNSAFE_style={{ fontSize: "0.66rem", fontWeight: 700, color: "var(--semantic-fg-neutral-subtlest)", letterSpacing: "0.02em" }}>{p.code}</Text>
        <StatusChip status={p.status} />
      </Flex>
      <Flex direction="column" gap="size-25">
        <Text UNSAFE_style={{ fontWeight: 700, fontSize: "0.88rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</Text>
        <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.description}</Text>
      </Flex>

      <Flex alignItems="center" gap="size-75">
        <Chip>{p.category}</Chip>
        <Chip>{p.sprint}</Chip>
      </Flex>

      <Flex direction="column" gap="size-50">
        <Flex justifyContent="space-between">
          <Text UNSAFE_style={{ fontSize: "0.68rem", color: "var(--semantic-fg-neutral-subtle)" }}>{p.tasksDone}/{p.tasksTotal} 작업 · 이슈 {p.openIssues}</Text>
          <Text UNSAFE_style={{ fontSize: "0.68rem", fontWeight: 700 }}>{p.progressPct}%</Text>
        </Flex>
        <MiniBar pct={p.progressPct} tone={p.status === "완료" ? "success" : "brand"} />
      </Flex>

      <Flex justifyContent="space-between" alignItems="center" gap="size-75">
        <Flex alignItems="center" gap="size-75" UNSAFE_style={{ minWidth: 0 }}>
          <AvatarStack memberIds={p.memberIds} />
          <Text UNSAFE_style={{ fontSize: "0.66rem", color: "var(--semantic-fg-neutral-subtle)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead?.name} 담당</Text>
        </Flex>
        <Text
          UNSAFE_style={{
            fontSize: "0.66rem", fontWeight: 600, flexShrink: 0,
            color: overdueTone === "danger" ? "var(--semantic-fg-danger-default)" : "var(--semantic-fg-neutral-subtle)",
          }}
        >
          {p.daysLeft < 0 ? `${p.dueDate} 완료` : `D-${p.daysLeft} · ${p.dueDate}`}
        </Text>
      </Flex>
    </div>
  );
}

function OpenIssuesTable({ onNavigate }: { onNavigate?: (key: string) => void }) {
  const rows = PROJECTS.filter((p) => p.openIssues > 0)
    .map((p) => ({ p, lead: TEAM.find((m) => m.id === p.leadId) }))
    .sort((a, b) => b.p.openIssues - a.p.openIssues);
  return (
    <Card title="열린 이슈" action={<CardAction>{`프로젝트 상세 →`}</CardAction>}>
      <TableView
        aria-label="프로젝트별 열린 이슈"
        density="compact"
        height="size-2400"
        onAction={ => onNavigate?.("project")}
      >
        <TableHeader>
          <Column key="code" width={100}>코드</Column>
          <Column key="name">프로젝트</Column>
          <Column key="lead" width={90}>담당</Column>
          <Column key="issues" width={70}>이슈</Column>
          <Column key="due" width={100}>마감</Column>
        </TableHeader>
        <TableBody>
          {rows.map(({ p, lead }) => (
            <Row key={p.id}>
              <TCell>{p.code}</TCell>
              <TCell>{p.name}</TCell>
              <TCell>{lead?.name ?? "—"}</TCell>
              <TCell>{`${p.openIssues}건`}</TCell>
              <TCell>{p.daysLeft < 0 ? "완료" : `D-${p.daysLeft}`}</TCell>
            </Row>
          ))}
        </TableBody>
      </TableView>
    </Card>
  );
}

export function HomeScreen({ onNavigate, onSelect }: ScreenProps) {
  const soon = [...PROJECTS]
    .filter((p) => p.status !== "완료")
    .sort((a, b) => a.daysLeft - b.daysLeft)
    .slice(0, 4);

  return (
    <div className="sp3-split">
      <div className="sp3-col">
        <Hero />
        <StatsRow />

        <div className="sp3-g22">
          <WeeklyTasksCard />
          <StatusDonutCard />
        </div>

        <Card title={`진행 중인 프로젝트 ${PROJECTS.length}`} action={<CardAction>전체 보기 →</CardAction>} pad="0.9rem">
          <div className="sp3-g3">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} id={p.id} onSelect={ => { onSelect?.(p.id); onNavigate?.("project"); }} />
            ))}
          </div>
        </Card>

        <OpenIssuesTable onNavigate={onNavigate} />
      </div>

      <div className="sp3-col">
        <Card title="마감 임박" action={<Chip>D-30 이내</Chip>}>
          <Flex direction="column" gap="size-150">
            {soon.map((p) => (
              <DeadlineRow key={p.id} date={p.dueDate} title={p.name} meta={`${p.code} · ${p.category} · D-${p.daysLeft}`} status={p.status} />
            ))}
          </Flex>
        </Card>

        <Card title="최근 활동" action={<CardAction>전체 보기 →</CardAction>}>
          <Flex direction="column" gap="size-150">
            {RECENT_ACTIVITY.map((a) => (
              <ActivityRow key={a.id} memberId={a.memberId} action={a.action} target={a.target} at={a.at} />
            ))}
          </Flex>
        </Card>

        <PromoCard
          title="스프린트 리포트 자동화"
          body="주간 완료 작업과 이슈 추이를 매주 월요일 아침에 팀 채널로 보내드려요."
          cta="리포트 켜기"
        />
      </div>
    </div>
  );
}
