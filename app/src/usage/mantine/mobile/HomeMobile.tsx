"use client";

import * as React from "react";
import { Alert, Badge, Group, Progress, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { Plane, Sparkles } from "lucide-react";
import { CURRENT_TRIP, DESTINATIONS } from "../data";
import { HomeStatCard, LiveMapPanel, PopularRankingList, STATS, SpendTrendChart } from "../screens/HomeScreen";

// 히어로 끝 색을 글자색 명도를 뒤집은 색과 섞어 대비 확보. 섞기는 in srgb 사용함. in oklch 면 색상값 0(빨강)이 끼어들어 브랜드색이 물드는 문제 있음
const HERO_SCRIM = "oklch(from var(--semantic-fg-on-brand-default) calc(1 - l) 0 0)";
const HERO_END = "color-mix(in srgb, var(--semantic-bg-brand-default) 55%, " + HERO_SCRIM + ")";
const ON_BRAND = "var(--semantic-fg-on-brand-default)";

function TripHeroMobile() {
  const trip = DESTINATIONS.find((d) => d.id === CURRENT_TRIP.destinationId) ?? DESTINATIONS[0];
  return (
    <div
      style={{
        minHeight: "9rem",
        borderRadius: "var(--semantic-radius-container)",
        overflow: "hidden",
        boxShadow: "var(--semantic-shadow-raised)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: "0.5rem",
        padding: "1rem",
        color: ON_BRAND,
        // 그라디언트 끝 색을 40% 지점에 고정. 글자가 바닥에 있어 75% 면 제목 뒤가 사진 그대로라 어두운 시스템에서 대비가 3:1 까지 낮아지는 문제 있음
        backgroundImage:
          `linear-gradient(180deg, color-mix(in srgb, var(--semantic-bg-brand-default) 15%, transparent) 0%, ${HERO_END} 40%), url("${trip.image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Group gap="0.5rem" wrap="wrap">
        <Badge color="warning" variant="filled" leftSection={<Plane size={11} />}>{CURRENT_TRIP.status}</Badge>
        <Text size="xs" style={{ color: ON_BRAND, opacity: 0.9 }}>{CURRENT_TRIP.flight} · {CURRENT_TRIP.etaLabel}</Text>
      </Group>
      <Title order={4} style={{ color: ON_BRAND }}>지금 {trip.name}로 이동 중이에요 ✈️</Title>
      <Stack gap="0.25rem">
        <Text size="xs" style={{ color: ON_BRAND, opacity: 0.9 }}>도착까지 여정 진행률 {CURRENT_TRIP.progressPct}%</Text>
        <Progress value={CURRENT_TRIP.progressPct} color="warning" size="md" radius="xl" striped animated aria-label="여정 진행률" />
      </Stack>
    </div>
  );
}

export function HomeMobile() {
  return (
    <Stack gap="1rem">
      <TripHeroMobile />
      <SimpleGrid cols={2} spacing="0.75rem">
        {STATS.map((s) => <HomeStatCard key={s.label} stat={s} />)}
      </SimpleGrid>
      <SpendTrendChart />
      <LiveMapPanel />
      <PopularRankingList />
      <Alert color="warning" icon={<Sparkles size={16} />} title="Quick Insight">
        다음 주 방콕행 항공권이 평균가보다 18% 저렴해요. 즐겨찾기한 여행지 중 지금이 가장 좋은 타이밍이에요.
      </Alert>
    </Stack>
  );
}
