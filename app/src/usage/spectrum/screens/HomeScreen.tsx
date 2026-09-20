import * as React from "react";
import {
  Badge, Content, Flex, Heading, StatusLight, TableView, TableBody, TableHeader, Cell, Column, Row, Text, View,
} from "@adobe/react-spectrum";
import { ArrowUp, ArrowDown, Clock } from "lucide-react";
import { ASSETS, REVIEWERS, STATUS_DISTRIBUTION, WEEKLY_LABELS, WEEKLY_REVIEWS, type AssetStatus } from "../data";

function Sparkline({ data }: { data: readonly number[] }) {
  const w = 64;
  const h = 22;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const points = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / span) * h}`).join(" ");
  return (
    <svg width={w} height={h} aria-hidden style={{ display: "block" }}>
      <polyline points={points} fill="none" stroke="var(--semantic-fg-brand-default)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface Stat { label: string; value: string; delta: string; up: boolean; trend: readonly number[] }
const STATS: readonly Stat[] = [
  { label: "이번주 처리", value: "34건", delta: "+21%", up: true, trend: WEEKLY_REVIEWS.slice(-6) },
  { label: "검토 대기", value: `${ASSETS.filter((a) => a.status === "검토 대기").length}건`, delta: "+2건", up: false, trend: [3, 4, 3, 5, 4, ASSETS.filter((a) => a.status === "검토 대기").length] },
  { label: "평균 처리 시간", value: "6.2시간", delta: "-14%", up: true, trend: [9, 8.5, 8, 7.3, 6.8, 6.2] },
  { label: "이번주 반려율", value: "11%", delta: "-3%p", up: true, trend: [16, 15, 14, 13, 12, 11] },
];

function Hero {
  return (
    <View
      borderRadius="large"
      padding="size-300"
      UNSAFE_style={{
        background: "linear-gradient(120deg, var(--semantic-bg-brand-subtle), var(--semantic-bg-neutral-subtlest))",
        display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", flexWrap: "wrap",
      }}
    >
      <Flex direction="column" gap="size-50">
        <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>좋은 아침이에요 👋</Text>
        <Heading level={3} margin={0}>오늘 검토할 자산이 {ASSETS.filter((a) => a.status === "검토 대기").length}건 있어요</Heading>
        <Text UNSAFE_style={{ fontSize: "0.85rem", color: "var(--semantic-fg-neutral-subtle)" }}>마감 임박 자산부터 확인해 주세요.</Text>
      </Flex>
      <svg width="140" height="48" viewBox="0 0 140 48" aria-hidden>
        <polyline
          points={WEEKLY_REVIEWS.map((v, i) => `${(i / (WEEKLY_REVIEWS.length - 1)) * 140},${48 - (v / Math.max(...WEEKLY_REVIEWS)) * 44}`).join(" ")}
          fill="none" stroke="var(--semantic-fg-brand-default)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </View>
  );
}

function StatCard({ s }: { s: Stat }) {
  const DeltaIcon = s.up ? ArrowUp : ArrowDown;
  return (
    // 폭은 .sp1-g4 grid가 결정. flex 쓰면 670px서 카드 3+1로 넘치는 문제임
    <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200" UNSAFE_style={{ minWidth: 0 }}>
      <Flex justifyContent="space-between" alignItems="start">
        <Flex direction="column" gap="size-50">
          <Text UNSAFE_style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>{s.label}</Text>
          <Text UNSAFE_style={{ fontSize: "1.4rem", fontWeight: 700 }}>{s.value}</Text>
          <Flex alignItems="center" gap="size-50">
            <DeltaIcon size={11} color={s.up ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-danger-default)"} />
            <Text UNSAFE_style={{ fontSize: "0.75rem", color: s.up ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-danger-default)" }}>{s.delta}</Text>
          </Flex>
        </Flex>
        <Sparkline data={s.trend} />
      </Flex>
    </View>
  );
}

function LineChartCard {
  const w = 100;
  const h = 60;
  const max = Math.max(...WEEKLY_REVIEWS);
  const points = WEEKLY_REVIEWS.map((v, i) => `${(i / (WEEKLY_REVIEWS.length - 1)) * w},${h - (v / max) * h}`).join(" ");
  const area = `0,${h} ${points} ${w},${h}`;
  return (
    <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200" UNSAFE_style={{ flex: "1 1 16rem" }}>
      <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "0.5rem" }}>주간 리뷰 처리량</Text>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="6.5rem" preserveAspectRatio="none" aria-hidden>
        <polygon points={area} fill="var(--semantic-bg-brand-subtle)" />
        <polyline points={points} fill="none" stroke="var(--semantic-fg-brand-default)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <Flex justifyContent="space-between" marginTop="size-50">
        {WEEKLY_LABELS.filter((_, i) => i % 2 === 0).map((l) => (
          <Text key={l} UNSAFE_style={{ fontSize: "0.65rem", color: "var(--semantic-fg-neutral-subtlest)" }}>{l}</Text>
        ))}
      </Flex>
    </View>
  );
}

function DonutChartCard {
  const total = STATUS_DISTRIBUTION.reduce((s, d) => s + d.count, 0);
  let acc = 0;
  const r = 15.9155;
  const circumference = 2 * Math.PI * r;
  return (
    <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200" UNSAFE_style={{ flex: "1 1 12rem" }}>
      <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "0.5rem" }}>상태 분포</Text>
      <Flex alignItems="center" gap="size-200">
        <svg width="72" height="72" viewBox="0 0 42 42" aria-hidden>
          <circle cx="21" cy="21" r={r} fill="transparent" stroke="var(--semantic-bg-neutral-subtle)" strokeWidth="6" />
          {STATUS_DISTRIBUTION.map((d) => {
            const frac = d.count / total;
            const dash = `${frac * circumference} ${circumference}`;
            const offset = -acc * circumference;
            acc += frac;
            return <circle key={d.status} cx="21" cy="21" r={r} fill="transparent" stroke={d.color} strokeWidth="6" strokeDasharray={dash} strokeDashoffset={offset} transform="rotate(-90 21 21)" />;
          })}
        </svg>
        <Flex direction="column" gap="size-50">
          {STATUS_DISTRIBUTION.map((d) => (
            <Flex key={d.status} alignItems="center" gap="size-75">
              <span aria-hidden style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: d.color, display: "inline-block" }} />
              <Text UNSAFE_style={{ fontSize: "0.7rem" }}>{d.status} {d.count}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </View>
  );
}

function DeadlineList {
  const soon = [...ASSETS].filter((a) => a.status === "검토 대기").sort((a, b) => a.dueDate.localeCompare(b.dueDate)).slice(0, 4);
  return (
    <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200" UNSAFE_style={{ flex: "1 1 14rem" }}>
      <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "0.5rem" }}>마감 임박</Text>
      <Flex direction="column" gap="size-100">
        {soon.map((a) => (
          <Flex key={a.id} alignItems="center" gap="size-75" justifyContent="space-between">
            <Flex alignItems="center" gap="size-75" UNSAFE_style={{ minWidth: 0 }}>
              <Clock size={12} color="var(--semantic-fg-warning-default)" />
              <Text UNSAFE_style={{ fontSize: "0.75rem" }}>{a.name}</Text>
            </Flex>
            <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)", flexShrink: 0 }}>{a.dueDate}</Text>
          </Flex>
        ))}
      </Flex>
    </View>
  );
}

const STATUS_VARIANT: Record<AssetStatus, "info" | "positive" | "negative"> = {
  "검토 대기": "info",
  "승인": "positive",
  "반려": "negative",
};

function RecentTable {
  const recent = [...ASSETS].sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt)).slice(0, 6);
  return (
    <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200">
      <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "0.5rem" }}>최근 업로드</Text>
      <TableView aria-label="최근 업로드 자산" density="compact" height="size-3000">
        <TableHeader>
          <Column>자산</Column>
          <Column>유형</Column>
          <Column>담당</Column>
          <Column>업로드</Column>
          <Column>상태</Column>
        </TableHeader>
        <TableBody>
          {recent.map((a) => (
            <Row key={a.id}>
              <Cell>{a.name}</Cell>
              <Cell>{a.type}</Cell>
              <Cell>{a.reviewer}</Cell>
              <Cell>{a.uploadedAt}</Cell>
              <Cell><StatusLight variant={STATUS_VARIANT[a.status]}>{a.status}</StatusLight></Cell>
            </Row>
          ))}
        </TableBody>
      </TableView>
    </View>
  );
}

export function HomeScreen {
  const busiest = [...REVIEWERS].sort((a, b) => b.completedThisWeek - a.completedThisWeek)[0];
  return (
    <Flex direction="column" gap="size-200">
      <Hero />
      <div className="sp1-g4">
        {STATS.map((s) => <StatCard key={s.label} s={s} />)}
      </div>
      <Flex gap="size-150" wrap>
        <LineChartCard />
        <DonutChartCard />
        <DeadlineList />
      </Flex>
      <RecentTable />
      <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200">
        <Content>
          <Flex alignItems="center" gap="size-100">
            <Badge variant="seafoam">TIP</Badge>
            <Text UNSAFE_style={{ fontSize: "0.8rem" }}>
              이번주 최다 처리자는 <strong>{busiest.name}</strong>님({busiest.completedThisWeek}건)이에요. 팀 화면에서 부담을 나눠보세요.
            </Text>
          </Flex>
        </Content>
      </View>
    </Flex>
  );
}
