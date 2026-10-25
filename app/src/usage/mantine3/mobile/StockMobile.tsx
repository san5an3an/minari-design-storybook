"use client";

import * as React from "react";
import {
  Avatar, Badge, Card, Chip, Group, NativeSelect, NavLink, Pagination, SimpleGrid, Stack, Switch, Text, TextInput,
  ThemeIcon,
} from "@mantine/core";
import { AlertTriangle, Boxes, ChevronRight, PackageCheck, PackageX, Search, Warehouse } from "lucide-react";
import { BORDER, SUBTLE } from "../../mantine/mobile/MantineMobileShell";
import { PRODUCTS, WAREHOUSES } from "../data";
import type { ScreenProps } from "../screens";
import { CATEGORIES, PAGE_SIZE, STATUS_COLOR } from "../screens/StockScreen";

function StatCard({ icon, color, label, value }: { icon: React.ReactNode; color: string; label: string; value: string }) {
  return (
    <Card withBorder radius="md" padding="sm">
      <Group gap="0.5rem" wrap="nowrap">
        <ThemeIcon variant="light" color={color} size="2rem" radius="md">{icon}</ThemeIcon>
        <Stack gap={0}><Text size="xs" style={{ color: SUBTLE }}>{label}</Text><Text fw={700}>{value}</Text></Stack>
      </Group>
    </Card>
  );
}

export function StockMobile({ onNavigate, onSelect }: ScreenProps) {
  const [category, setCategory] = React.useState<(typeof CATEGORIES)[number]>("전체");
  const [warehouse, setWarehouse] = React.useState<(typeof WAREHOUSES)[number]>("전체");
  const [query, setQuery] = React.useState("");
  const [lowOnly, setLowOnly] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const filtered = PRODUCTS
    .filter((p) => category === "전체" || p.category === category)
    .filter((p) => warehouse === "전체" || p.warehouse === warehouse)
    .filter((p) => !lowOnly || p.status !== "재고충분")
    .filter((p) => query.trim() === "" || p.name.includes(query) || p.sku.includes(query));

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
            <Chip key={c} value={c} variant="filled" color="brand">
              {c} ({c === "전체" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c).length})
            </Chip>
          ))}
        </Group>
      </Chip.Group>

      <SimpleGrid cols={2} spacing="0.75rem">
        <StatCard icon={<Boxes size={14} />} color="brand" label="총 SKU" value={`${PRODUCTS.length}종`} />
        <StatCard icon={<AlertTriangle size={14} />} color="warning" label="재고부족" value={`${lowCount}종`} />
        <StatCard icon={<PackageX size={14} />} color="danger" label="품절" value={`${outCount}종`} />
        <StatCard icon={<PackageCheck size={14} />} color="success" label="재고 가치" value={`${Math.round(totalValue / 10000).toLocaleString("ko-KR")}만원`} />
      </SimpleGrid>

      <Stack gap="0.75rem">
        <TextInput
          aria-label="제품 검색"
          placeholder="제품명·SKU 검색"
          leftSection={<Search size={14} />}
          value={query}
          onChange={(e) => { setQuery(e.currentTarget.value); setPage(1); }}
        />
        <Group gap="0.75rem" wrap="nowrap" justify="space-between">
          <NativeSelect
            aria-label="창고"
            leftSection={<Warehouse size={14} />}
            data={[...WAREHOUSES]}
            value={warehouse}
            onChange={(e) => { setWarehouse(e.currentTarget.value as (typeof WAREHOUSES)[number]); setPage(1); }}
            style={{ flex: 1, minWidth: 0 }}
          />
          <Switch label="재고부족만" checked={lowOnly} onChange={(e) => { setLowOnly(e.currentTarget.checked); setPage(1); }} color="warning" />
        </Group>
      </Stack>

      <Card withBorder radius="md" padding={0}>
        {rows.length === 0 ? (
          <Text size="sm" p="1rem" style={{ color: SUBTLE }}>조건에 맞는 제품이 없어요.</Text>
        ) : rows.map((p, i) => (
          <NavLink
            key={p.id}
            component="button"
            onClick={() => open(p.id)}
            leftSection={<Avatar src={p.image} radius="sm" size="2.5rem" />}
            label={<Text component="span" size="sm" fw={600} truncate display="block">{p.name}</Text>}
            description={(
              <>
                <Text component="span" size="xs" truncate display="block" style={{ color: SUBTLE }}>{p.sku} · {p.category} · {p.warehouse}</Text>
                <Text component="span" size="xs" display="block" style={{ color: "var(--semantic-fg-neutral-subtlest)" }}>업데이트 {p.lastUpdated}</Text>
              </>
            )}
            rightSection={(
              <Group gap="0.25rem" wrap="nowrap">
                <Stack gap="0.25rem" align="flex-end">
                  <Text size="sm" fw={700}>{p.quantity.toLocaleString("ko-KR")}</Text>
                  <Badge variant="dot" color={STATUS_COLOR[p.status]} size="sm">{p.status}</Badge>
                </Stack>
                <ChevronRight size={16} aria-hidden style={{ color: SUBTLE }} />
              </Group>
            )}
            style={{ borderTop: i ? BORDER : undefined }}
          />
        ))}
      </Card>

      <Stack gap="0.5rem" align="center">
        <Pagination total={pageCount} value={page} onChange={setPage} size="xl" color="brand" />
        <Text size="xs" style={{ color: SUBTLE }}>{filtered.length}종 중 {rows.length}종 표시</Text>
      </Stack>
    </Stack>
  );
}
