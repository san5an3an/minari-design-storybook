import * as React from "react";
import { Avatar, Flex, Switch, Text } from "@adobe/react-spectrum";
import {
  Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { Activity, CircleUser, Gauge, Users } from "lucide-react";
import { PROJECTS, TEAM } from "../data";
import {
  Bar as MiniBar, Card, CardAction, Chip, PromoCard, StatCard, type StatSpec,
} from "../parts";
import type { ScreenProps } from "../screens";

const ROLE_FILL: readonly string[] = [
  "var(--component-chart-series-1)",
  "var(--component-chart-series-2)",
  "var(--component-chart-series-3)",
  "var(--component-chart-series-4)",
];

function loadTone(pct: number): StatSpec["tone"] {
  return pct >= 90 ? "danger" : pct >= 70 ? "warning" : "success";
}

export function TeamScreen({ onNavigate }: ScreenProps) {
  const [available, setAvailable] = React.useState<Record<string, boolean>>(
     => Object.fromEntries(TEAM.map((m) => [m.id, m.available])),
  );

  const availableCount = TEAM.filter((m) => available[m.id]).length;
  const avgLoad = Math.round(TEAM.reduce((s, m) => s + m.workloadPct, 0) / TEAM.length);
  const totalAssignments = TEAM.reduce((s, m) => s + m.projectCount, 0);
  const overloaded = TEAM.filter((m) => m.workloadPct >= 90).length;

  const stats: readonly StatSpec[] = [
    { label: "팀원", value: `${TEAM.length}명`, sub: `역할 ${new Set(TEAM.map((m) => m.role)).size}종`, delta: "+1", up: true, trend: [4, 4, 4, 5, 5, 5], icon: <Users size={15} />, tone: "brand" },
    { label: "평균 부하", value: `${avgLoad}%`, sub: `과부하 ${overloaded}명`, delta: "+6%p", up: false, trend: [58, 62, 65, 69, 71, avgLoad], icon: <Gauge size={15} />, tone: loadTone(avgLoad) },
    { label: "지금 가능", value: `${availableCount}명`, sub: `전체 ${TEAM.length}명 중`, delta: availableCount >= 3 ? "여유" : "부족", up: availableCount >= 3, trend: [2, 3, 3, 4, 4, availableCount || 1], icon: <CircleUser size={15} />, tone: "success" },
    { label: "배정 프로젝트", value: `${totalAssignments}건`, sub: `1인 평균 ${(totalAssignments / TEAM.length).toFixed(1)}건`, delta: "+2", up: true, trend: [9, 10, 11, 12, 13, totalAssignments], icon: <Activity size={15} />, tone: "warning" },
  ];

  const loadData = TEAM.map((m) => ({ name: m.name, load: m.workloadPct }));

  const roles = Array.from(new Set(TEAM.map((m) => m.role))).map((role) => ({
    role,
    count: TEAM.filter((m) => m.role === role).length,
  }));

  return (
    <div className="sp3-split">
      <div className="sp3-col">
        <div className="sp3-g4">
          {stats.map((s) => <StatCard key={s.label} s={s} />)}
        </div>

        <Card title="팀원별 이번주 부하" action={<Chip>Sprint 25</Chip>}>
          <div style={{ width: "100%", height: "10rem", minWidth: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={loadData} layout="vertical" margin={{ top: 4, right: 12, bottom: 0, left: 8 }}>
                <XAxis type="number" domain={[0, 100]} tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--semantic-fg-neutral-subtle)" }} />
                <YAxis type="category" dataKey="name" width={54} tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--semantic-fg-neutral-default)" }} />
                <Tooltip
                  cursor={{ fill: "var(--semantic-bg-neutral-subtle)" }}
                  contentStyle={{
                    borderRadius: "var(--semantic-radius-control)",
                    border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                    fontSize: "0.72rem",
                  }}
                  formatter={(v: unknown) => [`${String(v)}%`, "부하"] as [string, string]}
                />
                <Bar dataKey="load" radius={[0, 4, 4, 0]} isAnimationActive={false} barSize={14}>
                  {loadData.map((d) => (
                    <Cell
                      key={d.name}
                      fill={d.load >= 90 ? "var(--semantic-fg-danger-default)" : d.load >= 70 ? "var(--semantic-fg-warning-default)" : "var(--component-chart-series-1)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title={`팀원 ${TEAM.length}`} action={<CardAction>초대 +</CardAction>} pad="0.9rem">
          <div className="sp3-g3">
            {TEAM.map((m) => {
              const projects = PROJECTS.filter((p) => p.memberIds.includes(m.id) && p.status !== "완료");
              const tone = loadTone(m.workloadPct);
              return (
                <div
                  key={m.id}
                  style={{
                    minWidth: 0, padding: "0.9rem",
                    border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                    borderRadius: "var(--semantic-radius-container)",
                    background: "var(--semantic-bg-neutral-surface)",
                    boxShadow: "var(--semantic-shadow-raised)",
                    display: "flex", flexDirection: "column", gap: "0.6rem",
                  }}
                >
                  <Flex alignItems="center" gap="size-100" UNSAFE_style={{ minWidth: 0 }}>
                    <Avatar src={`https://i.pravatar.cc/64?u=${m.avatarSeed}`} alt={m.name} size={34} />
                    <Flex direction="column" gap="size-0" UNSAFE_style={{ minWidth: 0, flex: 1 }}>
                      <Text UNSAFE_style={{ fontWeight: 700, fontSize: "0.85rem" }}>{m.name}</Text>
                      <Text UNSAFE_style={{ fontSize: "0.68rem", color: "var(--semantic-fg-neutral-subtle)" }}>{m.role} · 배정 {m.projectCount}건</Text>
                    </Flex>
                    <span
                      aria-hidden
                      style={{
                        width: "0.45rem", height: "0.45rem", borderRadius: "50%", flexShrink: 0,
                        background: available[m.id] ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-subtlest)",
                      }}
                    />
                  </Flex>

                  <Flex direction="column" gap="size-50">
                    <Flex justifyContent="space-between">
                      <Text UNSAFE_style={{ fontSize: "0.68rem", color: "var(--semantic-fg-neutral-subtle)" }}>이번주 부하</Text>
                      <Text UNSAFE_style={{ fontSize: "0.68rem", fontWeight: 700 }}>{m.workloadPct}%</Text>
                    </Flex>
                    <MiniBar pct={m.workloadPct} tone={tone} />
                  </Flex>

                  <Flex gap="size-50" wrap>
                    {projects.length === 0
                      ? <Chip>배정된 진행 프로젝트 없음</Chip>
                      : projects.slice(0, 2).map((p) => <Chip key={p.id}>{p.code}</Chip>)}
                    {projects.length > 2 ? <Chip>+{projects.length - 2}</Chip> : null}
                  </Flex>

                  <Flex justifyContent="space-between" alignItems="center" UNSAFE_style={{ paddingTop: "0.1rem" }}>
                    <Text UNSAFE_style={{ fontSize: "0.72rem" }}>지금 가능</Text>
                    <Switch
                      isSelected={available[m.id]}
                      onChange={(v) => setAvailable((prev) => ({ ...prev, [m.id]: v }))}
                      isEmphasized
                      aria-label={`${m.name} 가용 상태`}
                      margin={0}
                    />
                  </Flex>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <div className="sp3-col">
        <Card title={`지금 가능 ${availableCount}`} action={<CardAction>배정 →</CardAction>}>
          <Flex direction="column" gap="size-150">
            {TEAM.filter((m) => available[m.id]).map((m) => (
              <Flex key={m.id} alignItems="center" gap="size-100" UNSAFE_style={{ minWidth: 0 }}>
                <Avatar src={`https://i.pravatar.cc/64?u=${m.avatarSeed}`} alt={m.name} size={26} />
                <Flex direction="column" gap="size-0" UNSAFE_style={{ minWidth: 0, flex: 1 }}>
                  <Text UNSAFE_style={{ fontSize: "0.76rem", fontWeight: 600 }}>{m.name}</Text>
                  <Text UNSAFE_style={{ fontSize: "0.66rem", color: "var(--semantic-fg-neutral-subtle)" }}>{m.role} · 부하 {m.workloadPct}%</Text>
                </Flex>
                <Text UNSAFE_style={{ fontSize: "0.66rem", fontWeight: 700, color: "var(--semantic-fg-success-default)", flexShrink: 0 }}>가능</Text>
              </Flex>
            ))}
            {availableCount === 0 ? (
              <Text UNSAFE_style={{ fontSize: "0.76rem", color: "var(--semantic-fg-neutral-subtle)" }}>지금 가능한 팀원이 없어요.</Text>
            ) : null}
          </Flex>
        </Card>

        <Card title="역할 분포" action={<Chip>전체 {TEAM.length}명</Chip>}>
          {/* 도넛과 범례를 나란히 배치. 레일 폭이 좁아 범례 글자가 줄바꿈되는 문제임 */}
          <Flex direction="column" alignItems="center" gap="size-150" UNSAFE_style={{ minWidth: 0 }}>
            <div style={{ width: "6.5rem", height: "6.5rem", position: "relative", flexShrink: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={roles} dataKey="count" nameKey="role" innerRadius="64%" outerRadius="100%" paddingAngle={2} stroke="none" isAnimationActive={false}>
                    {roles.map((r, i) => <Cell key={r.role} fill={ROLE_FILL[i % ROLE_FILL.length]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                <Text UNSAFE_style={{ fontSize: "1.1rem", fontWeight: 700, lineHeight: 1 }}>{TEAM.length}</Text>
                <Text UNSAFE_style={{ fontSize: "0.6rem", color: "var(--semantic-fg-neutral-subtle)" }}>명</Text>
              </div>
            </div>
            <Flex direction="column" gap="size-75" UNSAFE_style={{ width: "100%", minWidth: 0 }}>
              {roles.map((r, i) => (
                <Flex key={r.role} alignItems="center" justifyContent="space-between" gap="size-75">
                  <Flex alignItems="center" gap="size-75" UNSAFE_style={{ minWidth: 0 }}>
                    <span aria-hidden style={{ width: "0.45rem", height: "0.45rem", borderRadius: "50%", background: ROLE_FILL[i % ROLE_FILL.length], flexShrink: 0 }} />
                    <Text UNSAFE_style={{ fontSize: "0.72rem" }}>{r.role}</Text>
                  </Flex>
                  <Text UNSAFE_style={{ fontSize: "0.72rem", fontWeight: 600, flexShrink: 0 }}>{r.count}명</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Card>

        <Card title="과부하 경보" action={<CardAction onPress={ => onNavigate?.("home")}>보드 →</CardAction>}>
          <Flex direction="column" gap="size-100">
            {TEAM.filter((m) => m.workloadPct >= 70).map((m) => (
              <Flex key={m.id} alignItems="center" justifyContent="space-between" gap="size-75">
                <Text UNSAFE_style={{ fontSize: "0.74rem" }}>{m.name}</Text>
                <Text
                  UNSAFE_style={{
                    fontSize: "0.72rem", fontWeight: 700,
                    color: m.workloadPct >= 90 ? "var(--semantic-fg-danger-default)" : "var(--semantic-fg-warning-default)",
                  }}
                >
                  {m.workloadPct}%
                </Text>
              </Flex>
            ))}
          </Flex>
        </Card>

        <PromoCard
          title="부하 자동 분산"
          body="한 명이 90%를 넘으면 여유 있는 팀원에게 작업을 옮기자고 제안해 드려요."
          cta="분산 규칙 보기"
        />
      </div>
    </div>
  );
}
