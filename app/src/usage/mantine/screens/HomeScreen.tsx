import * as React from "react";
import {
  Alert, Avatar, Badge, Card, Group, Progress, Rating, SimpleGrid, Stack, Text, ThemeIcon, Title, Tooltip,
} from "@mantine/core";
import { CloudSun, MapPin, Plane, Sparkles, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { CURRENT_TRIP, DESTINATIONS, SPEND_TREND, SPEND_TREND_LABELS } from "../data";

function Sparkline({ data, up }: { data: readonly number[]; up: boolean }) {
  const w = 64;
  const h = 24;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const points = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / span) * h}`).join(" ");
  const color = up ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-danger-default)";
  return (
    <svg width={w} height={h} aria-hidden style={{ display: "block" }}>
      <polyline points={points} fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface HomeStat {
  label: string; value: string; delta: string; up: boolean; icon: typeof Wallet; trend: readonly number[];
}
const STATS: readonly HomeStat[] = [
  { label: "총 예약 여정", value: `${DESTINATIONS.length + 8}건`, delta: "+3건", up: true, icon: Plane, trend: [4, 5, 5, 6, 7, 7, 8] },
  { label: "이번달 지출", value: `${SPEND_TREND[SPEND_TREND.length - 1]}만원`, delta: "-10%", up: false, icon: Wallet, trend: [...SPEND_TREND] },
  { label: "마일리지", value: "42,300", delta: "+1,200", up: true, icon: Sparkles, trend: [30, 33, 36, 38, 40, 41, 42] },
  { label: "평균 평점", value: "4.8", delta: "+0.1", up: true, icon: CloudSun, trend: [4.5, 4.6, 4.6, 4.7, 4.7, 4.8, 4.8] },
];

function HomeStatCard({ stat }: { stat: HomeStat }) {
  const Icon = stat.icon;
  const DeltaIcon = stat.up ? TrendingUp : TrendingDown;
  return (
    <Card withBorder radius="md" padding="md">
      <Group justify="space-between" align="flex-start" wrap="nowrap">
        <Stack gap="0.5rem">
          <ThemeIcon color="brand" variant="light" radius="xl" size="2rem">
            <Icon size={16} />
          </ThemeIcon>
          <Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{stat.label}</Text>
          <Text fw={700} size="lg">{stat.value}</Text>
        </Stack>
        <Stack gap="0.375rem" align="flex-end">
          <Badge
            size="sm"
            variant="light"
            color={stat.up ? "success" : "danger"}
            leftSection={<DeltaIcon size={11} />}
          >
            {stat.delta}
          </Badge>
          <Sparkline data={stat.trend} up={stat.up} />
        </Stack>
      </Group>
    </Card>
  );
}

// 현재 여정 히어로 영역, 사진과 상태 칩으로 구성
function TripHero {
  const trip = DESTINATIONS.find((d) => d.id === CURRENT_TRIP.destinationId) ?? DESTINATIONS[0];
  return (
    <div
      style={{
        position: "relative",
        minHeight: "9rem",
        borderRadius: "var(--semantic-radius-container)",
        overflow: "hidden",
        boxShadow: "var(--semantic-shadow-raised)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "1.25rem",
        color: "var(--semantic-fg-on-brand-default)",
        backgroundImage:
          `linear-gradient(120deg, color-mix(in oklch, var(--semantic-bg-brand-strong) 88%, black) 0%, `
          + `color-mix(in oklch, var(--semantic-bg-brand-default) 55%, transparent) 75%), url("${trip.image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Group justify="space-between" align="flex-end" wrap="wrap">
        <Stack gap="0.25rem">
          <Group gap="0.5rem">
            <Badge color="warning" variant="filled" leftSection={<Plane size={11} />}>
              {CURRENT_TRIP.status}
            </Badge>
            <Text size="sm" style={{ opacity: 0.85 }}>{CURRENT_TRIP.flight} · {CURRENT_TRIP.etaLabel}</Text>
          </Group>
          <Title order={3} c="white">지금 {trip.name}로 이동 중이에요 ✈️</Title>
          <Text size="sm" style={{ opacity: 0.85 }}>도착까지 여정 진행률 {CURRENT_TRIP.progressPct}%</Text>
        </Stack>
        <div style={{ minWidth: "9rem" }}>
          <Progress value={CURRENT_TRIP.progressPct} color="warning" size="lg" radius="xl" striped animated />
        </div>
      </Group>
    </div>
  );
}

// 3단 왼쪽 지출 추이 라인차트
function SpendTrendChart {
  const w = 100;
  const h = 56;
  const min = Math.min(...SPEND_TREND);
  const max = Math.max(...SPEND_TREND);
  const span = max - min || 1;
  const points = SPEND_TREND.map((v, i) => `${(i / (SPEND_TREND.length - 1)) * w},${h - ((v - min) / span) * h}`).join(" ");
  const area = `0,${h} ${points} ${w},${h}`;
  return (
    <Card withBorder radius="md" padding="md" style={{ flex: 1, minWidth: 0 }}>
      <Group justify="space-between" mb="0.5rem">
        <Text fw={600} size="sm">이번 6개월 여행 지출 추이</Text>
        <Badge color="danger" variant="light">-10%</Badge>
      </Group>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="6rem" preserveAspectRatio="none" aria-hidden>
        <polygon points={area} fill="var(--semantic-bg-brand-subtle)" />
        <polyline points={points} fill="none" stroke="var(--semantic-fg-brand-default)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <Group justify="space-between" mt="0.25rem">
        {SPEND_TREND_LABELS.map((l) => (
          <Text key={l} size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtlest)" }}>{l}</Text>
        ))}
      </Group>
    </Card>
  );
}

// 3단 가운데 실시간 지도 패널. 위경도 대신 상대 좌표(mapX/mapY)로 점 배치 구현, 지도 SDK 미사용
function LiveMapPanel {
  const trip = DESTINATIONS.find((d) => d.id === CURRENT_TRIP.destinationId) ?? DESTINATIONS[0];
  return (
    <Card withBorder radius="md" padding="md" style={{ flex: 1, minWidth: 0 }}>
      <Group justify="space-between" mb="0.5rem">
        <Text fw={600} size="sm">실시간 여정 지도</Text>
        <Badge color="success" variant="dot">추적 중</Badge>
      </Group>
      <div
        style={{
          position: "relative",
          height: "8rem",
          borderRadius: "var(--semantic-radius-control)",
          background: "var(--semantic-bg-neutral-subtlest)",
          overflow: "hidden",
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
          {[20, 40, 60, 80].map((x) => (
            <line key={`v${x}`} x1={x} y1={0} x2={x} y2={100} stroke="var(--semantic-border-neutral-subtle)" strokeWidth={0.4} />
          ))}
          {[25, 50, 75].map((y) => (
            <line key={`h${y}`} x1={0} y1={y} x2={100} y2={y} stroke="var(--semantic-border-neutral-subtle)" strokeWidth={0.4} />
          ))}
        </svg>
        {DESTINATIONS.slice(0, 8).map((d) => (
          <Tooltip key={d.id} label={`${d.name} · 예약 ${d.bookings}건`}>
            <span
              aria-hidden
              style={{
                position: "absolute", left: `${d.mapX}%`, top: `${d.mapY}%`, width: "0.4rem", height: "0.4rem",
                borderRadius: "50%", background: "var(--semantic-fg-neutral-subtle)", transform: "translate(-50%,-50%)",
              }}
            />
          </Tooltip>
        ))}
        <span
          aria-hidden
          style={{
            position: "absolute", left: `${trip.mapX}%`, top: `${trip.mapY}%`, width: "0.9rem", height: "0.9rem",
            borderRadius: "50%", background: "var(--semantic-bg-warning-default)",
            border: "0.125rem solid white", boxShadow: "var(--semantic-shadow-raised)",
            transform: "translate(-50%,-50%)", display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <Plane size={9} color="white" />
        </span>
      </div>
      <Text size="xs" mt="0.5rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
        <MapPin size={11} style={{ verticalAlign: "-0.1rem", marginRight: "0.25rem" }} />
        현재 {trip.name} 인근 상공 · 예약 지점 {DESTINATIONS.length}곳 표시 중
      </Text>
    </Card>
  );
}

// 3단 오른쪽 인기 목적지 랭킹
function PopularRankingList {
  const top = [...DESTINATIONS].sort((a, b) => b.bookings - a.bookings).slice(0, 5);
  return (
    <Card withBorder radius="md" padding="md" style={{ flex: 1, minWidth: 0 }}>
      <Text fw={600} size="sm" mb="0.5rem">인기 목적지 TOP 5</Text>
      <Stack gap="0.625rem">
        {top.map((d, i) => (
          <Group key={d.id} gap="0.5rem" wrap="nowrap">
            <Text size="xs" fw={700} style={{ width: "1rem", color: "var(--semantic-fg-neutral-subtlest)" }}>{i + 1}</Text>
            <Avatar src={d.image} radius="sm" size="1.75rem" />
            <Stack gap={0} style={{ minWidth: 0, flex: 1 }}>
              <Text size="xs" fw={600} truncate>{d.name}</Text>
              <Rating value={d.rating} fractions={2} readOnly size="0.6rem" />
            </Stack>
            <Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{d.bookings}건</Text>
          </Group>
        ))}
      </Stack>
    </Card>
  );
}

export function HomeScreen {
  return (
    <Stack gap="1rem">
      <TripHero />
      <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="0.75rem">
        {STATS.map((s) => (
          <HomeStatCard key={s.label} stat={s} />
        ))}
      </SimpleGrid>
      <Group gap="0.75rem" align="stretch" wrap="wrap">
        <SpendTrendChart />
        <LiveMapPanel />
        <PopularRankingList />
      </Group>
      <Alert color="warning" icon={<Sparkles size={16} />} title="Quick Insight">
        다음 주 방콕행 항공권이 평균가보다 18% 저렴해요. 즐겨찾기한 여행지 중 지금이 가장 좋은 타이밍이에요.
      </Alert>
    </Stack>
  );
}
