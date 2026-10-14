"use client";

import * as React from "react";
import { Avatar, Badge, Card, Group, Pagination, Select, SimpleGrid, Stack, Text, TextInput, ThemeIcon } from "@mantine/core";
import { ArrowDownCircle, ArrowUpCircle, RefreshCcw, Search } from "lucide-react";
import { BORDER, SUBTLE } from "../../mantine/mobile/MantineMobileShell";
import { MOVEMENTS, PRODUCTS, WAREHOUSES } from "../data";
import { NetMovementChart, PAGE_SIZE } from "../screens/MovementsScreen";

function StatCard({ icon, color, label, value }: { icon: React.ReactNode; color: string; label: string; value: string }) {
  return (
    <Card withBorder radius="md" padding="sm">
      <Stack gap="0.375rem">
        <ThemeIcon variant="light" color={color} size="2rem" radius="md">{icon}</ThemeIcon>
        <Text size="xs" style={{ color: SUBTLE }}>{label}</Text>
        <Text fw={700} size="sm">{value}</Text>
      </Stack>
    </Card>
  );
}

export function MovementsMobile() {
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
    .filter((m) => query.trim() === "" || productById(m.productId)?.name.includes(query));

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const totalIn = MOVEMENTS.filter((m) => m.type === "입고").reduce((s, m) => s + m.quantity, 0);
  const totalOut = MOVEMENTS.filter((m) => m.type === "출고").reduce((s, m) => s + m.quantity, 0);
  const net = totalIn - totalOut;
  const inPct = Math.round((totalIn / (totalIn + totalOut)) * 100);

  return (
    <Stack gap="1rem">
      <SimpleGrid cols={3} spacing="0.5rem">
        <StatCard icon={<ArrowDownCircle size={14} />} color="success" label="이번 주 총 입고" value={`${totalIn.toLocaleString("ko-KR")}개`} />
        <StatCard icon={<ArrowUpCircle size={14} />} color="danger" label="이번 주 총 출고" value={`${totalOut.toLocaleString("ko-KR")}개`} />
        <StatCard icon={<RefreshCcw size={14} />} color="brand" label="순증감" value={`${net >= 0 ? "+" : ""}${net.toLocaleString("ko-KR")}개`} />
      </SimpleGrid>

      <NetMovementChart />

      <Stack gap="0.75rem">
        <Group grow gap="0.75rem" align="flex-end">
          <Select label="창고" data={[...WAREHOUSES]} value={warehouse} onChange={(v) => { setWarehouse(v ?? "전체"); setPage(1); }} />
          <Select label="유형" data={["전체", "입고", "출고"]} value={type} onChange={(v) => { setType(v ?? "전체"); setPage(1); }} />
        </Group>
        <Group grow gap="0.75rem" align="flex-end">
          <TextInput label="시작일" type="date" value={from} onChange={(e) => setFrom(e.currentTarget.value)} />
          <TextInput label="종료일" type="date" value={to} onChange={(e) => setTo(e.currentTarget.value)} />
        </Group>
        <TextInput label="검색" placeholder="제품명" leftSection={<Search size={14} />} value={query} onChange={(e) => { setQuery(e.currentTarget.value); setPage(1); }} />
      </Stack>

      <Card withBorder radius="md" padding={0}>
        {rows.length === 0 ? (
          <Text size="sm" p="1rem" style={{ color: SUBTLE }}>조건에 맞는 입출고가 없어요.</Text>
        ) : rows.map((m, i) => {
          const p = productById(m.productId);
          const incoming = m.type === "입고";
          return (
            <Stack key={m.id} gap="0.375rem" p="0.75rem" style={{ borderTop: i ? BORDER : undefined }}>
              <Group justify="space-between" wrap="nowrap" gap="0.5rem">
                <Group gap="0.5rem" wrap="nowrap" style={{ minWidth: 0 }}>
                  <Badge variant="light" color={incoming ? "success" : "danger"} size="sm">{m.type}</Badge>
                  <Text size="sm" fw={600} truncate>{p?.name ?? "-"}</Text>
                </Group>
                <Text size="sm" fw={700} style={{ flexShrink: 0 }}>{incoming ? "+" : "-"}{m.quantity.toLocaleString("ko-KR")}</Text>
              </Group>
              <Group gap="0.375rem" wrap="nowrap">
                <Avatar radius="xl" size="1.5rem" color="brand">{m.staff[0]}</Avatar>
                <Text size="xs" truncate style={{ color: SUBTLE }}>{m.staff} · {m.datetime} · {m.note}</Text>
              </Group>
            </Stack>
          );
        })}
      </Card>

      <Stack gap="0.5rem" align="center">
        <Pagination total={pageCount} value={page} onChange={setPage} size="xl" color="brand" />
        <Text size="xs" style={{ color: SUBTLE }}>{filtered.length}건 중 {rows.length}건 표시 · 입고 비중 {inPct}%</Text>
      </Stack>
    </Stack>
  );
}
