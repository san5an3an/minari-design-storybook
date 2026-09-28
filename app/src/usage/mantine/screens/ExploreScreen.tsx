import * as React from "react";
import {
  Badge, Card, Chip, Group, Image, Rating, SegmentedControl, SimpleGrid, Stack, Text, TextInput, ThemeIcon,
} from "@mantine/core";
import { MapPin, Search, Star, Users } from "lucide-react";
import { DESTINATIONS, type Destination } from "../data";
import type { ScreenProps } from "../screens";

const CATEGORIES = ["전체", "해변", "도시", "산악", "문화유산"] as const;

function DestinationCard({ d, onOpen }: { d: Destination; onOpen:  => void }) {
  return (
    <Card
      withBorder
      radius="md"
      padding="0"
      component="button"
      onClick={onOpen}
      style={{ textAlign: "left", cursor: "pointer", overflow: "hidden", display: "flex", flexDirection: "column" }}
    >
      <div style={{ position: "relative" }}>
        <Image src={d.image} alt={d.name} h="6.5rem" fit="cover" />
        {d.tag ? (
          <Badge color="warning" variant="filled" size="sm" style={{ position: "absolute", insetBlockStart: "0.5rem", insetInlineStart: "0.5rem" }}>
            {d.tag}
          </Badge>
        ) : null}
      </div>
      <Stack gap="0.375rem" p="0.75rem">
        <Group justify="space-between" wrap="nowrap">
          <Text fw={600} size="sm" truncate>{d.name}</Text>
          <Group gap="0.125rem" wrap="nowrap">
            <Star size={12} fill="var(--semantic-fg-warning-default)" color="var(--semantic-fg-warning-default)" />
            <Text size="xs">{d.rating}</Text>
          </Group>
        </Group>
        <Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
          <MapPin size={11} style={{ verticalAlign: "-0.1rem", marginRight: "0.2rem" }} />
          {d.country} · {d.nights}박
        </Text>
        <Group justify="space-between">
          <Text fw={700} size="sm">{d.nightlyPrice.toLocaleString("ko-KR")}원 / 박</Text>
          <Badge variant="light" color="brand" size="sm">{d.category}</Badge>
        </Group>
      </Stack>
    </Card>
  );
}

export function ExploreScreen({ onNavigate, onSelect }: ScreenProps) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<(typeof CATEGORIES)[number]>("전체");
  const [sort, setSort] = React.useState<string[]>(["추천순"]);

  const filtered = DESTINATIONS
    .filter((d) => category === "전체" || d.category === category)
    .filter((d) => query.trim === "" || d.name.includes(query) || d.country.includes(query))
    .sort((a, b) => (sort[0] === "가격 낮은순" ? a.nightlyPrice - b.nightlyPrice : b.bookings - a.bookings));

  const avgPrice = Math.round(filtered.reduce((s, d) => s + d.nightlyPrice, 0) / (filtered.length || 1));
  const avgRating = (filtered.reduce((s, d) => s + d.rating, 0) / (filtered.length || 1)).toFixed(1);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("booking");
  };

  return (
    <Stack gap="1rem">
      <Group justify="space-between" wrap="wrap" gap="0.75rem">
        <TextInput
          placeholder="여행지·국가 검색"
          aria-label="여행지 검색"
          leftSection={<Search size={14} />}
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          style={{ minWidth: "10rem", flex: 1 }}
        />
        <SegmentedControl
          value={sort[0]}
          onChange={(v) => setSort([v])}
          data={["추천순", "가격 낮은순"]}
        />
      </Group>

      <Chip.Group multiple={false} value={category} onChange={(v) => setCategory(v as (typeof CATEGORIES)[number])}>
        <Group gap="0.5rem" wrap="wrap">
          {CATEGORIES.map((c) => (
            <Chip key={c} value={c} variant="filled" color="brand" size="sm">
              {c} {c !== "전체" ? `(${DESTINATIONS.filter((d) => d.category === c).length})` : `(${DESTINATIONS.length})`}
            </Chip>
          ))}
        </Group>
      </Chip.Group>

      <Group gap="1.25rem">
        <Group gap="0.375rem">
          <ThemeIcon variant="light" color="brand" size="1.5rem" radius="xl"><Users size={12} /></ThemeIcon>
          <Text size="sm">검색 결과 <b>{filtered.length}</b>곳</Text>
        </Group>
        <Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>평균 {avgPrice.toLocaleString("ko-KR")}원/박</Text>
        <Group gap="0.25rem">
          <Rating value={Number(avgRating)} readOnly size="0.75rem" />
          <Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{avgRating}</Text>
        </Group>
      </Group>

      <SimpleGrid cols={{ base: 2, sm: 3, lg: 4 }} spacing="0.75rem">
        {filtered.map((d) => (
          <DestinationCard key={d.id} d={d} onOpen={ => open(d.id)} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
