"use client";

import * as React from "react";
import {
  ActionIcon, Avatar, Badge, Button, Card, Checkbox, Group, Menu, Pagination, SegmentedControl, Select, SimpleGrid,
  Stack, Text, TextInput, ThemeIcon,
} from "@mantine/core";
import { CheckCircle2, MoreHorizontal, Search, Send, Trash2, UserCheck, Users } from "lucide-react";
import { SUBTLE } from "../../mantine/mobile/MantineMobileShell";
import { ATTENDEES, EVENTS, type Attendee } from "../data";
import type { ScreenProps } from "../screens";
import { PAGE_SIZE, STATUS_COLOR } from "../screens/AttendeesScreen";

const STATUS_FILTER = ["전체", "확정", "대기", "취소"] as const;

function StatCard({ icon, color, label, value }: { icon: React.ReactNode; color: string; label: string; value: string }) {
  return (
    <Card withBorder radius="md" padding="sm">
      <Stack gap="0.375rem">
        <ThemeIcon variant="light" color={color} size="2rem" radius="md">{icon}</ThemeIcon>
        <Text size="xs" style={{ color: SUBTLE }}>{label}</Text>
        <Text fw={700}>{value}</Text>
      </Stack>
    </Card>
  );
}

export function AttendeesMobile({ selectedId }: ScreenProps) {
  const [eventId, setEventId] = React.useState(selectedId && EVENTS.some((e) => e.id === selectedId) ? selectedId : EVENTS[0].id);
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState<string>("전체");
  const [checkedIn, setCheckedIn] = React.useState<Record<string, boolean>>(
    () => Object.fromEntries(ATTENDEES.map((a) => [a.id, a.checkedIn])),
  );
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(1);

  const event = EVENTS.find((e) => e.id === eventId) ?? EVENTS[0];
  const filtered = ATTENDEES
    .filter((a) => a.eventId === eventId)
    .filter((a) => status === "전체" || a.status === status)
    .filter((a) => query.trim() === "" || a.name.includes(query) || a.email.includes(query));
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const confirmedCount = filtered.filter((a) => a.status === "확정").length;
  const checkedInCount = filtered.filter((a) => checkedIn[a.id]).length;
  const allOnPage = rows.length > 0 && rows.every((r) => selected.includes(r.id));
  const someOnPage = rows.some((r) => selected.includes(r.id));

  return (
    <Stack gap="1rem">
      <SimpleGrid cols={3} spacing="0.5rem">
        <StatCard icon={<Users size={14} />} color="brand" label="전체 참가자" value={`${filtered.length}명`} />
        <StatCard icon={<CheckCircle2 size={14} />} color="success" label="확정" value={`${confirmedCount}명`} />
        <StatCard icon={<UserCheck size={14} />} color="warning" label="체크인 완료" value={`${checkedInCount}명`} />
      </SimpleGrid>

      <Stack gap="0.75rem">
        <Select
          label="이벤트"
          data={EVENTS.map((e) => ({ value: e.id, label: e.title }))}
          value={eventId}
          onChange={(v) => { setEventId(v ?? EVENTS[0].id); setPage(1); }}
        />
        <TextInput
          label="검색"
          placeholder="이름·이메일"
          leftSection={<Search size={14} />}
          value={query}
          onChange={(e) => { setQuery(e.currentTarget.value); setPage(1); }}
        />
        <Stack gap="0.25rem">
          <Text size="sm" fw={500}>상태</Text>
          <SegmentedControl
            fullWidth
            color="brand"
            data={[...STATUS_FILTER]}
            value={status}
            onChange={(v) => { setStatus(v); setPage(1); }}
          />
        </Stack>
      </Stack>

      {selected.length > 0 ? (
        <Group gap="0.5rem" p="0.5rem" wrap="wrap" style={{ background: "var(--semantic-bg-brand-subtlest)", borderRadius: "var(--semantic-radius-control)" }}>
          <Text size="sm" style={{ flex: 1 }}>{selected.length}명 선택됨</Text>
          <Button variant="light" color="brand" leftSection={<Send size={14} />}>메일 보내기</Button>
          <Button variant="light" color="danger" leftSection={<Trash2 size={14} />}>제외하기</Button>
        </Group>
      ) : null}

      <Checkbox
        label={`이 쪽 전체 선택 (${rows.length}명)`}
        checked={allOnPage}
        indeterminate={someOnPage && !allOnPage}
        onChange={(e) => {
          // 체크 값을 먼저 꺼내 보관. 함수형 갱신 안에서 e.currentTarget 을 늦게 읽으면 React 19 에서 오류 발생함
          const v = e.currentTarget.checked;
          setSelected(v ? rows.map((r) => r.id) : []);
        }}
      />

      <Stack gap="0.5rem">
        {rows.map((a: Attendee) => (
          <Card key={a.id} withBorder radius="md" padding="0.5rem">
            <Group wrap="nowrap" gap="0.25rem">
              <Checkbox
                aria-label={`${a.name} 선택`}
                checked={selected.includes(a.id)}
                onChange={(e) => {
                  const v = e.currentTarget.checked;
                  setSelected((prev) => (v ? [...prev, a.id] : prev.filter((id) => id !== a.id)));
                }}
              />
              <Avatar radius="xl" size="2rem" color="brand">{a.name[0]}</Avatar>
              <Stack gap={0} ml="0.25rem" style={{ flex: 1, minWidth: 0 }}>
                <Text size="sm" fw={600} truncate>{a.name}</Text>
                <Text size="xs" truncate style={{ color: SUBTLE }}>{a.email}</Text>
              </Stack>
              <Menu position="bottom-end" withinPortal>
                <Menu.Target>
                  <ActionIcon size="xl" variant="subtle" color="brand" aria-label={`${a.name} 더보기`} style={{ color: SUBTLE }}>
                    <MoreHorizontal size={18} aria-hidden />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item leftSection={<Send size={14} />}>메일 보내기</Menu.Item>
                  <Menu.Item leftSection={<Trash2 size={14} />} color="danger">명단에서 제외</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
            <Group justify="space-between" wrap="nowrap" gap="0.5rem" pl="0.5rem">
              <Group gap="0.375rem" wrap="wrap" style={{ minWidth: 0 }}>
                <Badge variant="light" color="brand" size="sm">{a.ticketType}</Badge>
                <Badge variant="dot" color={STATUS_COLOR[a.status]} size="sm">{a.status}</Badge>
                <Text size="xs" style={{ color: SUBTLE }}>등록 {a.registeredAt}</Text>
              </Group>
              <Checkbox
                label="체크인"
                checked={!!checkedIn[a.id]}
                onChange={(e) => {
                  const v = e.currentTarget.checked;
                  setCheckedIn((prev) => ({ ...prev, [a.id]: v }));
                }}
                aria-label={`${a.name} 체크인`}
              />
            </Group>
          </Card>
        ))}
      </Stack>

      <Stack gap="0.5rem" align="center">
        <Pagination total={pageCount} value={page} onChange={setPage} size="xl" color="brand" />
        <Text size="xs" style={{ color: SUBTLE }}>{event.title} · {filtered.length}명 중 {rows.length}명 표시</Text>
      </Stack>
    </Stack>
  );
}
