import * as React from "react";
import {
  Badge, Button, Card, Group, NumberInput, Progress, Select, SimpleGrid, Stack, Text, TextInput, ThemeIcon,
} from "@mantine/core";
import {
  CalendarDays, GripVertical, MapPin, Plus, Smile, Ticket, TicketPercent, Users,
} from "lucide-react";
import { EVENTS, ORGANIZER, REGISTRATIONS_BY_DAY, REGISTRATIONS_BY_TICKET, type EventItem } from "../data";
import type { ScreenProps } from "../screens";

const NEW_EVENT_CATEGORIES: readonly EventItem["category"][] = ["컨퍼런스", "밋업", "워크숍", "네트워킹"];

interface EventDraft {
  title: string;
  category: EventItem["category"];
  venue: string;
  dateLabel: string;
  capacity: number;
  ticketPrice: number;
}

const EMPTY_DRAFT: EventDraft = { title: "", category: "밋업", venue: "", dateLabel: "", capacity: 50, ticketPrice: 0 };

function NewEventForm({ onCancel, onSubmit }: { onCancel:  => void; onSubmit: (draft: EventDraft) => void }) {
  const [draft, setDraft] = React.useState<EventDraft>(EMPTY_DRAFT);
  const canSubmit = draft.title.trim !== "" && draft.venue.trim !== "" && draft.dateLabel.trim !== "";

  return (
    <Card withBorder radius="md" padding="md">
      <Text fw={600} size="sm" mb="0.75rem">새 이벤트 만들기</Text>
      <Stack gap="0.75rem">
        <TextInput
          label="이벤트명"
          placeholder="예: 프런트엔드 서밋 2026"
          value={draft.title}
          onChange={(e) => {
            const v = e.currentTarget.value;
            setDraft((d) => ({ ...d, title: v }));
          }}
        />
        <Group grow>
          <Select
            label="카테고리"
            data={[...NEW_EVENT_CATEGORIES]}
            value={draft.category}
            onChange={(v) => setDraft((d) => ({ ...d, category: (v as EventItem["category"]) ?? d.category }))}
          />
          <TextInput
            label="일시"
            placeholder="예: 12월 23일 (수)"
            value={draft.dateLabel}
            onChange={(e) => {
              const v = e.currentTarget.value;
              setDraft((d) => ({ ...d, dateLabel: v }));
            }}
          />
        </Group>
        <TextInput
          label="장소"
          leftSection={<MapPin size={13} />}
          placeholder="예: 코엑스 그랜드볼룸"
          value={draft.venue}
          onChange={(e) => {
            const v = e.currentTarget.value;
            setDraft((d) => ({ ...d, venue: v }));
          }}
        />
        <Group grow>
          <NumberInput
            label="정원"
            min={1}
            leftSection={<Users size={13} />}
            value={draft.capacity}
            onChange={(v) => setDraft((d) => ({ ...d, capacity: Number(v) || 1 }))}
          />
          <NumberInput
            label="티켓 가격 (원)"
            min={0}
            step={1000}
            leftSection={<TicketPercent size={13} />}
            value={draft.ticketPrice}
            onChange={(v) => setDraft((d) => ({ ...d, ticketPrice: Number(v) || 0 }))}
          />
        </Group>
        <Group justify="flex-end" gap="0.5rem">
          <Button variant="default" onClick={onCancel}>취소</Button>
          <Button color="brand" disabled={!canSubmit} onClick={ => onSubmit(draft)}>이벤트 만들기</Button>
        </Group>
      </Stack>
    </Card>
  );
}

const STATUS_COLOR: Record<EventItem["status"], string> = { 모집중: "success", 마감임박: "warning", 종료: "brand" };

function MiniBarChart({ title, data }: { title: string; data: readonly { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value)) || 1;
  return (
    <Card withBorder radius="md" padding="md" style={{ flex: 1, minWidth: 0 }}>
      <Text fw={600} size="sm" mb="0.625rem">{title}</Text>
      <Group align="flex-end" gap="0.5rem" style={{ height: "5rem" }}>
        {data.map((d) => (
          <Stack key={d.label} gap="0.25rem" align="center" style={{ flex: 1 }}>
            <div
              aria-hidden
              style={{
                width: "100%",
                maxWidth: "1.25rem",
                height: `${Math.max(6, (d.value / max) * 64)}px`,
                borderRadius: "0.2rem 0.2rem 0 0",
                background: "var(--semantic-bg-brand-default)",
              }}
            />
            <Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{d.label}</Text>
          </Stack>
        ))}
      </Group>
    </Card>
  );
}

function EventCard({ e, onOpen }: { e: EventItem; onOpen:  => void }) {
  const pct = Math.round((e.registered / e.capacity) * 100);
  return (
    <Card
      withBorder
      radius="md"
      padding="md"
      component="button"
      onClick={onOpen}
      style={{ textAlign: "left", cursor: "grab" }}
    >
      <Group justify="space-between" align="flex-start" wrap="nowrap">
        <Group gap="0.625rem" wrap="nowrap" style={{ minWidth: 0 }}>
          <ThemeIcon variant="light" color="brand" radius="md" size="2.25rem">
            <CalendarDays size={16} />
          </ThemeIcon>
          <Stack gap="0.125rem" style={{ minWidth: 0 }}>
            <Text fw={600} size="sm" truncate>{e.title}</Text>
            <Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{e.dateLabel}</Text>
          </Stack>
        </Group>
        <GripVertical size={14} aria-hidden style={{ color: "var(--semantic-fg-neutral-subtlest)", flexShrink: 0 }} />
      </Group>
      <Text size="xs" mt="0.5rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
        <MapPin size={11} style={{ verticalAlign: "-0.1rem", marginRight: "0.25rem" }} />{e.venue}
      </Text>
      <Group justify="space-between" mt="0.625rem" mb="0.25rem">
        <Text size="xs">등록 {e.registered}/{e.capacity}</Text>
        <Text size="xs" fw={600}>{pct}%</Text>
      </Group>
      <Progress value={pct} color={pct >= 90 ? "warning" : "brand"} size="sm" radius="xl" />
      <Group justify="space-between" mt="0.625rem">
        <Badge variant="light" color="brand" size="sm">{e.category}</Badge>
        <Badge variant="dot" color={STATUS_COLOR[e.status]} size="sm">{e.status}</Badge>
      </Group>
    </Card>
  );
}

export function EventsScreen({ onNavigate, onSelect }: ScreenProps) {
  const [events, setEvents] = React.useState<readonly EventItem[]>(EVENTS);
  const [composing, setComposing] = React.useState(false);

  const active = events.filter((e) => e.status !== "종료").length;
  const totalAttendees = events.reduce((s, e) => s + e.registered, 0);
  const avgFill = Math.round(events.reduce((s, e) => s + e.registered / e.capacity, 0) / events.length * 100);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("attendees");
  };

  const submitDraft = (draft: EventDraft) => {
    const next: EventItem = {
      id: `e-new-${Date.now}`,
      title: draft.title.trim,
      category: draft.category,
      dateLabel: draft.dateLabel.trim,
      venue: draft.venue.trim,
      capacity: draft.capacity,
      registered: 0,
      ticketPrice: draft.ticketPrice,
      status: "모집중",
    };
    setEvents((prev) => [next, ...prev]);
    setComposing(false);
  };

  return (
    <Stack gap="1rem">
      <Group justify="space-between" wrap="wrap" gap="0.75rem">
        <Text size="lg" fw={600}>안녕하세요, {ORGANIZER.name}님! 👋</Text>
        {!composing ? (
          <Button size="sm" color="brand" leftSection={<Plus size={14} />} onClick={ => setComposing(true)}>
            새 이벤트 만들기
          </Button>
        ) : null}
      </Group>

      {composing ? <NewEventForm onCancel={ => setComposing(false)} onSubmit={submitDraft} /> : null}

      <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="0.75rem">
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="brand" size="2rem" radius="md"><CalendarDays size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>진행 중 이벤트</Text><Text fw={700}>{active}건</Text></Stack>
          </Group>
        </Card>
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="success" size="2rem" radius="md"><Users size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>총 참가자</Text><Text fw={700}>{totalAttendees}명</Text></Stack>
          </Group>
        </Card>
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="warning" size="2rem" radius="md"><TicketPercent size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>평균 등록률</Text><Text fw={700}>{avgFill}%</Text></Stack>
          </Group>
        </Card>
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="brand" size="2rem" radius="md"><Smile size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>평균 만족도</Text><Text fw={700}>4.6/5</Text></Stack>
          </Group>
        </Card>
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="0.75rem">
        {events.map((e) => (
          <EventCard key={e.id} e={e} onOpen={ => open(e.id)} />
        ))}
      </SimpleGrid>

      <Group gap="0.75rem" align="stretch" wrap="wrap">
        <MiniBarChart title="요일별 등록 수" data={REGISTRATIONS_BY_DAY} />
        <MiniBarChart title="티켓 유형별 등록 수" data={REGISTRATIONS_BY_TICKET} />
      </Group>

      <Group gap="0.375rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
        <Ticket size={12} />
        <Text size="xs">카드를 누르면 그 행사의 참가자 명단으로 이동해요.</Text>
      </Group>
    </Stack>
  );
}
