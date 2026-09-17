import * as React from "react";
import {
  Avatar, Badge, Card, Group, Pagination, Select, SimpleGrid, Stack, Table, Text, TextInput, ThemeIcon,
} from "@mantine/core";
import { ArrowDownCircle, ArrowUpCircle, RefreshCcw, Search } from "lucide-react";
import { MOVEMENTS, NET_MOVEMENT_BY_DAY, PRODUCTS, WAREHOUSES } from "../data";

const PAGE_SIZE = 8;

function NetMovementChart {
  const max = Math.max(...NET_MOVEMENT_BY_DAY.map((d) => Math.abs(d.value))) || 1;
  return (
    <Card withBorder radius="md" padding="md" style={{ flex: 1, minWidth: 0 }}>
      <Text fw={600} size="sm" mb="0.625rem">요일별 순 입출고</Text>
      <Group align="center" gap="0.5rem" style={{ height: "5rem" }}>
        {NET_MOVEMENT_BY_DAY.map((d) => (
          <Stack key={d.label} gap="0.25rem" align="center" justify="flex-end" style={{ flex: 1, height: "100%" }}>
            <div
              aria-hidden
              style={{
                width: "100%",
                maxWidth: "1.25rem",
                height: `${Math.max(4, (Math.abs(d.value) / max) * 40)}px`,
                borderRadius: d.value >= 0 ? "0.2rem 0.2rem 0 0" : "0 0 0.2rem 0.2rem",
                background: d.value >= 0 ? "var(--semantic-bg-success-default)" : "var(--semantic-bg-danger-default)",
                alignSelf: d.value >= 0 ? "flex-end" : "flex-start",
              }}
            />
            <Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{d.label}</Text>
          </Stack>
        ))}
      </Group>
    </Card>
  );
}

export function MovementsScreen {
  const [warehouse, setWarehouse] = React.useState<string>("전체");
  const [type, setType] = React.useState<string>("전체");
  const [from, setFrom] = React.useState("2026-09-10");
  const [to, setTo] = React.useState("2026-09-17");
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);

  const productById = (id: string) => PRODUCTS.find((p) => p.id === id);

  const filtered = MOVEMENTS
    .filter((m) => warehouse === "전체" || productById(m.productId)?.warehouse === warehouse)
    .filter((m) => type === "전체" || m.type === type)
    .filter((m) => query.trim === "" || productById(m.productId)?.name.includes(query));

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const totalIn = MOVEMENTS.filter((m) => m.type === "입고").reduce((s, m) => s + m.quantity, 0);
  const totalOut = MOVEMENTS.filter((m) => m.type === "출고").reduce((s, m) => s + m.quantity, 0);
  const net = totalIn - totalOut;
  const inPct = Math.round((totalIn / (totalIn + totalOut)) * 100);

  return (
    <Stack gap="1rem">
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="0.75rem">
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="success" size="2rem" radius="md"><ArrowDownCircle size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>이번 주 총 입고</Text><Text fw={700}>{totalIn.toLocaleString("ko-KR")}개</Text></Stack>
          </Group>
        </Card>
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="danger" size="2rem" radius="md"><ArrowUpCircle size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>이번 주 총 출고</Text><Text fw={700}>{totalOut.toLocaleString("ko-KR")}개</Text></Stack>
          </Group>
        </Card>
        <Card withBorder radius="md" padding="sm">
          <Group justify="space-between" wrap="nowrap">
            <Group gap="0.5rem" wrap="nowrap">
              <ThemeIcon variant="light" color="brand" size="2rem" radius="md"><RefreshCcw size={14} /></ThemeIcon>
              <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>순증감</Text><Text fw={700}>{net >= 0 ? "+" : ""}{net.toLocaleString("ko-KR")}개</Text></Stack>
            </Group>
          </Group>
        </Card>
      </SimpleGrid>

      <NetMovementChart />

      <Group gap="0.625rem" wrap="wrap" align="flex-end">
        <Select label="창고" data={[...WAREHOUSES]} value={warehouse} onChange={(v) => { setWarehouse(v ?? "전체"); setPage(1); }} />
        <Select label="유형" data={["전체", "입고", "출고"]} value={type} onChange={(v) => { setType(v ?? "전체"); setPage(1); }} />
        <TextInput label="시작일" type="date" value={from} onChange={(e) => setFrom(e.currentTarget.value)} />
        <TextInput label="종료일" type="date" value={to} onChange={(e) => setTo(e.currentTarget.value)} />
        <TextInput label="검색" placeholder="제품명" leftSection={<Search size={13} />} value={query} onChange={(e) => { setQuery(e.currentTarget.value); setPage(1); }} />
      </Group>

      <Table.ScrollContainer minWidth={680}>
        <Table highlightOnHover verticalSpacing="0.5rem">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>제품</Table.Th>
              <Table.Th>유형</Table.Th>
              <Table.Th>수량</Table.Th>
              <Table.Th>담당자</Table.Th>
              <Table.Th>일시</Table.Th>
              <Table.Th>비고</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.map((m) => {
              const p = productById(m.productId);
              return (
                <Table.Tr key={m.id}>
                  <Table.Td><Text size="sm" fw={500}>{p?.name ?? "-"}</Text></Table.Td>
                  <Table.Td><Badge variant="light" color={m.type === "입고" ? "success" : "danger"} size="sm">{m.type}</Badge></Table.Td>
                  <Table.Td><Text size="sm" fw={600}>{m.type === "입고" ? "+" : "-"}{m.quantity.toLocaleString("ko-KR")}</Text></Table.Td>
                  <Table.Td>
                    <Group gap="0.375rem" wrap="nowrap">
                      <Avatar radius="xl" size="1.5rem" color="brand">{m.staff[0]}</Avatar>
                      <Text size="sm">{m.staff}</Text>
                    </Group>
                  </Table.Td>
                  <Table.Td><Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{m.datetime}</Text></Table.Td>
                  <Table.Td><Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{m.note}</Text></Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <Group justify="space-between">
        <Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{filtered.length}건 중 {rows.length}건 표시 · 입고 비중 {inPct}%</Text>
        <Pagination total={pageCount} value={page} onChange={setPage} size="sm" color="brand" />
      </Group>
    </Stack>
  );
}
