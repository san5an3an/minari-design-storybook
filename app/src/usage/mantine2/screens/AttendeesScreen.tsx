import * as React from "react";
import {
  Avatar, Badge, Button, Card, Checkbox, Group, Menu, Pagination, Select, SimpleGrid, Stack, Table, Text,
  TextInput, ThemeIcon, VisuallyHidden,
} from "@mantine/core";
import { CheckCircle2, MoreHorizontal, Search, Send, Trash2, UserCheck, Users } from "lucide-react";
import { ATTENDEES, EVENTS, type Attendee } from "../data";
import type { ScreenProps } from "../screens";

const PAGE_SIZE = 6;
const STATUS_COLOR: Record<Attendee["status"], string> = { 확정: "success", 대기: "warning", 취소: "danger" };

export function AttendeesScreen({ selectedId }: ScreenProps) {
  const [eventId, setEventId] = React.useState(selectedId && EVENTS.some((e) => e.id === selectedId) ? selectedId : EVENTS[0].id);
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState("전체");
  const [checkedIn, setCheckedIn] = React.useState<Record<string, boolean>>(
     => Object.fromEntries(ATTENDEES.map((a) => [a.id, a.checkedIn])),
  );
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(1);

  const event = EVENTS.find((e) => e.id === eventId) ?? EVENTS[0];
  const filtered = ATTENDEES
    .filter((a) => a.eventId === eventId)
    .filter((a) => status === "전체" || a.status === status)
    .filter((a) => query.trim === "" || a.name.includes(query) || a.email.includes(query));
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const confirmedCount = filtered.filter((a) => a.status === "확정").length;
  const checkedInCount = filtered.filter((a) => checkedIn[a.id]).length;

  const toggleAll = (checked: boolean) => setSelected(checked ? rows.map((r) => r.id) : []);

  return (
    <Stack gap="1rem">
      <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="0.75rem">
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="brand" size="2rem" radius="md"><Users size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>전체 참가자</Text><Text fw={700}>{filtered.length}명</Text></Stack>
          </Group>
        </Card>
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="success" size="2rem" radius="md"><CheckCircle2 size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>확정</Text><Text fw={700}>{confirmedCount}명</Text></Stack>
          </Group>
        </Card>
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="warning" size="2rem" radius="md"><UserCheck size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>체크인 완료</Text><Text fw={700}>{checkedInCount}명</Text></Stack>
          </Group>
        </Card>
      </SimpleGrid>

      <Group gap="0.625rem" wrap="wrap">
        <Select
          label="이벤트"
          data={EVENTS.map((e) => ({ value: e.id, label: e.title }))}
          value={eventId}
          onChange={(v) => { setEventId(v ?? EVENTS[0].id); setPage(1); }}
          style={{ minWidth: "12rem" }}
        />
        <TextInput
          label="검색"
          placeholder="이름·이메일"
          leftSection={<Search size={13} />}
          value={query}
          onChange={(e) => { setQuery(e.currentTarget.value); setPage(1); }}
          style={{ minWidth: "9rem" }}
        />
        <Stack gap="0.25rem">
          <Text size="sm" fw={500}>상태</Text>
          <Group gap="0.25rem">
            {(["전체", "확정", "대기", "취소"] as const).map((s) => (
              <Badge
                key={s}
                variant={status === s ? "filled" : "light"}
                color={s === "전체" ? "brand" : STATUS_COLOR[s as Attendee["status"]]}
                style={{ cursor: "pointer" }}
                onClick={ => { setStatus(s); setPage(1); }}
              >
                {s}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Group>

      {selected.length > 0 ? (
        <Group gap="0.5rem" p="0.5rem" style={{ background: "var(--semantic-bg-brand-subtlest)", borderRadius: "var(--semantic-radius-control)" }}>
          <Text size="sm">{selected.length}명 선택됨</Text>
          <Button size="xs" variant="light" color="brand" leftSection={<Send size={12} />}>메일 보내기</Button>
          <Button size="xs" variant="light" color="danger" leftSection={<Trash2 size={12} />}>제외하기</Button>
        </Group>
      ) : null}

      <Table.ScrollContainer minWidth={640}>
        <Table highlightOnHover verticalSpacing="0.5rem">
          <Table.Thead>
            <Table.Tr>
              <Table.Th w="2rem">
                <Checkbox
                  size="xs"
                  checked={rows.length > 0 && selected.length === rows.length}
                  indeterminate={selected.length > 0 && selected.length < rows.length}
                  onChange={(e) => toggleAll(e.currentTarget.checked)}
                  aria-label="전체 선택"
                />
              </Table.Th>
              <Table.Th>참가자</Table.Th>
              <Table.Th>티켓</Table.Th>
              <Table.Th>상태</Table.Th>
              <Table.Th>등록일</Table.Th>
              <Table.Th>체크인</Table.Th>
              <Table.Th w="2rem"><VisuallyHidden>동작</VisuallyHidden></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.map((a) => (
              <Table.Tr key={a.id}>
                <Table.Td>
                  <Checkbox
                    size="xs"
                    checked={selected.includes(a.id)}
                    onChange={(e) => setSelected((prev) => (e.currentTarget.checked ? [...prev, a.id] : prev.filter((id) => id !== a.id)))}
                    aria-label={`${a.name} 선택`}
                  />
                </Table.Td>
                <Table.Td>
                  <Group gap="0.5rem" wrap="nowrap">
                    <Avatar radius="xl" size="1.75rem" color="brand">{a.name[0]}</Avatar>
                    <Stack gap={0}><Text size="sm" fw={500}>{a.name}</Text><Text size="0.6875rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{a.email}</Text></Stack>
                  </Group>
                </Table.Td>
                <Table.Td><Badge variant="light" color="brand" size="sm">{a.ticketType}</Badge></Table.Td>
                <Table.Td><Badge variant="dot" color={STATUS_COLOR[a.status]} size="sm">{a.status}</Badge></Table.Td>
                <Table.Td><Text size="sm">{a.registeredAt}</Text></Table.Td>
                <Table.Td>
                  <Checkbox
                    size="sm"
                    checked={!!checkedIn[a.id]}
                    onChange={(e) => {
                      const v = e.currentTarget.checked;
                      setCheckedIn((prev) => ({ ...prev, [a.id]: v }));
                    }}
                    aria-label={`${a.name} 체크인`}
                  />
                </Table.Td>
                <Table.Td>
                  <Menu withinPortal position="bottom-end">
                    <Menu.Target>
                      <Button size="xs" variant="subtle" p="0.25rem" aria-label={`${a.name} 더보기`}><MoreHorizontal size={14} /></Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item leftSection={<Send size={12} />}>메일 보내기</Menu.Item>
                      <Menu.Item leftSection={<Trash2 size={12} />} color="danger">명단에서 제외</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <Group justify="space-between">
        <Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{event.title} · {filtered.length}명 중 {rows.length}명 표시</Text>
        <Pagination total={pageCount} value={page} onChange={setPage} size="sm" color="brand" />
      </Group>
    </Stack>
  );
}
