import * as React from "react";
import {
  Avatar, Badge, Card, Chip, Group, NativeSelect, Pagination, SimpleGrid, Stack, Switch, Table, Text,
  TextInput, ThemeIcon,
} from "@mantine/core";
import { AlertTriangle, Boxes, PackageCheck, PackageX, Search, Warehouse } from "lucide-react";
import { PRODUCTS, WAREHOUSES, type Product } from "../data";
import type { ScreenProps } from "../screens";

const PAGE_SIZE = 8;
const STATUS_COLOR: Record<Product["status"], string> = { 재고충분: "success", 재고부족: "warning", 품절: "danger" };
const CATEGORIES = ["전체", "전자제품", "의류", "식품", "가구"] as const;

export function StockScreen({ onNavigate, onSelect }: ScreenProps) {
  const [category, setCategory] = React.useState<(typeof CATEGORIES)[number]>("전체");
  const [warehouse, setWarehouse] = React.useState<(typeof WAREHOUSES)[number]>("전체");
  const [query, setQuery] = React.useState("");
  const [lowOnly, setLowOnly] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const filtered = PRODUCTS
    .filter((p) => category === "전체" || p.category === category)
    .filter((p) => warehouse === "전체" || p.warehouse === warehouse)
    .filter((p) => !lowOnly || p.status !== "재고충분")
    .filter((p) => query.trim === "" || p.name.includes(query) || p.sku.includes(query));

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const totalValue = PRODUCTS.reduce((s, p) => s + p.quantity * p.unitPrice, 0);
  const lowCount = PRODUCTS.filter((p) => p.status === "재고부족").length;
  const outCount = PRODUCTS.filter((p) => p.status === "품절").length;

  const open = (id: string) => { onSelect?.(id); onNavigate?.("detail"); };

  return (
    <Stack gap="1rem">
      <Chip.Group multiple={false} value={category} onChange={(v) => { setCategory(v as (typeof CATEGORIES)[number]); setPage(1); }}>
        <Group gap="0.5rem" wrap="wrap">
          {CATEGORIES.map((c) => (
            <Chip key={c} value={c} variant="filled" color="brand" size="sm">
              {c} ({c === "전체" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c).length})
            </Chip>
          ))}
        </Group>
      </Chip.Group>

      <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="0.75rem">
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="brand" size="2rem" radius="md"><Boxes size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>총 SKU</Text><Text fw={700}>{PRODUCTS.length}종</Text></Stack>
          </Group>
        </Card>
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="warning" size="2rem" radius="md"><AlertTriangle size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>재고부족</Text><Text fw={700}>{lowCount}종</Text></Stack>
          </Group>
        </Card>
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="danger" size="2rem" radius="md"><PackageX size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>품절</Text><Text fw={700}>{outCount}종</Text></Stack>
          </Group>
        </Card>
        <Card withBorder radius="md" padding="sm">
          <Group gap="0.5rem" wrap="nowrap">
            <ThemeIcon variant="light" color="success" size="2rem" radius="md"><PackageCheck size={14} /></ThemeIcon>
            <Stack gap={0}><Text size="0.625rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>재고 가치</Text><Text fw={700}>{Math.round(totalValue / 10000).toLocaleString("ko-KR")}만원</Text></Stack>
          </Group>
        </Card>
      </SimpleGrid>

      {/* 필터 행 세로 중앙 정렬. NativeSelect는 label 위치가 달라 높이가 다른 구조임 */}
      <Group gap="0.625rem" wrap="wrap" align="center">
        <TextInput
          placeholder="제품명·SKU 검색"
          leftSection={<Search size={13} />}
          value={query}
          onChange={(e) => { setQuery(e.currentTarget.value); setPage(1); }}
          style={{ minWidth: "10rem", flex: 1 }}
        />
        <NativeSelect
          aria-label="창고"
          leftSection={<Warehouse size={13} />}
          data={[...WAREHOUSES]}
          value={warehouse}
          onChange={(e) => { setWarehouse(e.currentTarget.value as (typeof WAREHOUSES)[number]); setPage(1); }}
        />
        <Switch label="재고부족만 보기" checked={lowOnly} onChange={(e) => { setLowOnly(e.currentTarget.checked); setPage(1); }} color="warning" />
      </Group>

      <Table.ScrollContainer minWidth={720}>
        <Table highlightOnHover verticalSpacing="0.5rem">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>제품</Table.Th>
              <Table.Th>SKU</Table.Th>
              <Table.Th>카테고리</Table.Th>
              <Table.Th>창고</Table.Th>
              <Table.Th>수량</Table.Th>
              <Table.Th>상태</Table.Th>
              <Table.Th>최근 업데이트</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.map((p) => (
              <Table.Tr key={p.id} onClick={ => open(p.id)} style={{ cursor: "pointer" }}>
                <Table.Td>
                  <Group gap="0.5rem" wrap="nowrap">
                    <Avatar src={p.image} radius="sm" size="1.75rem" />
                    <Text size="sm" fw={500}>{p.name}</Text>
                  </Group>
                </Table.Td>
                <Table.Td><Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{p.sku}</Text></Table.Td>
                <Table.Td><Badge variant="light" color="brand" size="sm">{p.category}</Badge></Table.Td>
                <Table.Td><Text size="sm">{p.warehouse}</Text></Table.Td>
                <Table.Td><Text size="sm" fw={600}>{p.quantity.toLocaleString("ko-KR")}</Text></Table.Td>
                <Table.Td><Badge variant="dot" color={STATUS_COLOR[p.status]} size="sm">{p.status}</Badge></Table.Td>
                <Table.Td><Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{p.lastUpdated}</Text></Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <Group justify="space-between">
        <Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{filtered.length}종 중 {rows.length}종 표시</Text>
        <Pagination total={pageCount} value={page} onChange={setPage} size="sm" color="brand" />
      </Group>
    </Stack>
  );
}
