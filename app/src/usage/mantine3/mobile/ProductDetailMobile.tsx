"use client";

import * as React from "react";
import {
  Avatar, Badge, Button, Card, Group, NumberInput, RingProgress, Select, Slider, Stack, Tabs, Text, Textarea,
  ThemeIcon, Timeline, Title,
} from "@mantine/core";
import { Box, History, Package, Phone, PlusCircle, Truck } from "lucide-react";
import { BORDER, SUBTLE } from "../../mantine/mobile/MantineMobileShell";
import { MOVEMENTS, PRODUCTS } from "../data";
import type { ScreenProps } from "../screens";
import { SUPPLIERS } from "../screens/ProductDetailScreen";
import { STATUS_COLOR } from "../screens/StockScreen";

export function ProductDetailMobile({ selectedId }: ScreenProps) {
  const product = PRODUCTS.find((p) => p.id === selectedId) ?? PRODUCTS[0];
  const [threshold, setThreshold] = React.useState(product.reorderThreshold);
  const [adjustQty, setAdjustQty] = React.useState(0);
  const [note, setNote] = React.useState("");
  const [supplier, setSupplier] = React.useState(product.supplier);

  const history = MOVEMENTS.filter((m) => m.productId === product.id);
  const levelPct = Math.round((product.quantity / product.maxStock) * 100);

  return (
    <Stack gap="1rem">
      <Card withBorder radius="md" padding="md">
        <Group justify="space-between" wrap="nowrap" gap="0.75rem" align="center">
          <Group gap="0.75rem" wrap="nowrap" style={{ minWidth: 0 }}>
            <Avatar src={product.image} radius="md" size="3.5rem" />
            <Stack gap="0.125rem" style={{ minWidth: 0 }}>
              <Title order={5}>{product.name}</Title>
              <Text size="xs" style={{ color: SUBTLE }}>{product.sku} · {product.warehouse}</Text>
              <Group gap="0.375rem">
                <Badge variant="light" color="brand" size="sm">{product.category}</Badge>
                <Badge variant="dot" color={STATUS_COLOR[product.status]} size="sm">{product.status}</Badge>
              </Group>
            </Stack>
          </Group>
          <RingProgress
            size={72}
            thickness={7}
            label={<Text size="0.7rem" ta="center" fw={700}>{levelPct}%</Text>}
            sections={[{ value: levelPct, color: levelPct < 30 ? "danger" : levelPct < 60 ? "warning" : "success" }]}
          />
        </Group>
      </Card>

      <Card withBorder radius="md" padding="md">
        <Text fw={600} size="sm" mb="0.75rem">재고 조정</Text>
        <Stack gap="0.75rem">
          <Stack gap="0.5rem">
            <Text size="sm" fw={500}>재발주 임계값 ({threshold}개)</Text>
            <Slider value={threshold} onChange={setThreshold} min={0} max={product.maxStock} step={10} color="warning" size="lg" aria-label="재발주 임계값" />
          </Stack>
          <NumberInput
            label="수량 조정 (+입고 / -출고)"
            value={adjustQty}
            onChange={(v) => setAdjustQty(Number(v) || 0)}
            leftSection={<PlusCircle size={14} />}
          />
          <Select label="공급업체" data={SUPPLIERS} value={supplier} onChange={(v) => setSupplier(v ?? supplier)} />
          <Textarea label="메모" placeholder="재고 조정 사유를 남겨주세요" minRows={2} autosize value={note} onChange={(e) => setNote(e.currentTarget.value)} />
          <Group grow gap="0.5rem">
            <Button color="brand" leftSection={<Package size={16} />}>조정 반영</Button>
            <Button variant="light" color="brand" leftSection={<Truck size={16} />}>발주하기</Button>
          </Group>
        </Stack>
      </Card>

      <Card withBorder radius="md" padding="md">
        <Text fw={600} size="sm" mb="0.625rem">최근 상태 변화</Text>
        {history.length > 0 ? (
          <Timeline active={history.length} bulletSize={18} lineWidth={2} color="brand">
            {history.slice(0, 4).map((m) => (
              <Timeline.Item key={m.id} bullet={m.type === "입고" ? <PlusCircle size={10} /> : <Box size={10} />} title={`${m.type} ${m.quantity}개`}>
                <Text size="xs" style={{ color: SUBTLE }}>{m.datetime} · {m.staff} · {m.note}</Text>
              </Timeline.Item>
            ))}
          </Timeline>
        ) : (
          <Text size="sm" style={{ color: SUBTLE }}>아직 입출고 이력이 없어요.</Text>
        )}
        <Card withBorder radius="md" padding="0.625rem" mt="1rem" style={{ background: "var(--semantic-bg-neutral-subtlest)" }}>
          <Group justify="space-between" gap="0.5rem">
            <Group gap="0.5rem" wrap="nowrap">
              <ThemeIcon variant="light" color="brand" size="1.75rem" radius="md"><Truck size={13} /></ThemeIcon>
              <Text size="sm">이번 이력 {history.length}건 · {product.supplier}</Text>
            </Group>
            <Badge variant="light" color={product.status === "품절" ? "danger" : "brand"} size="sm">
              {product.status === "품절" ? "긴급 발주 필요" : "정기 발주 대상"}
            </Badge>
          </Group>
        </Card>
      </Card>

      <Tabs defaultValue="history" color="brand">
        <Tabs.List grow>
          <Tabs.Tab value="history" leftSection={<History size={14} />}>입출고 이력</Tabs.Tab>
          <Tabs.Tab value="supplier" leftSection={<Truck size={14} />}>공급업체</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="history" pt="0.75rem">
          <Card withBorder radius="md" padding={0}>
            {history.length === 0 ? (
              <Text size="sm" p="1rem" style={{ color: SUBTLE }}>아직 입출고 이력이 없어요.</Text>
            ) : history.map((m, i) => (
              <Group key={m.id} justify="space-between" wrap="nowrap" gap="0.5rem" p="0.75rem" style={{ borderTop: i ? BORDER : undefined }}>
                <Stack gap="0.125rem" style={{ minWidth: 0 }}>
                  <Group gap="0.5rem" wrap="nowrap">
                    <Badge variant="light" color={m.type === "입고" ? "success" : "danger"} size="sm">{m.type}</Badge>
                    <Text size="sm">{m.staff}</Text>
                  </Group>
                  <Text size="xs" truncate style={{ color: SUBTLE }}>{m.datetime} · {m.note}</Text>
                </Stack>
                <Text size="sm" fw={700} style={{ flexShrink: 0 }}>{m.type === "입고" ? "+" : "-"}{m.quantity}</Text>
              </Group>
            ))}
          </Card>
        </Tabs.Panel>
        <Tabs.Panel value="supplier" pt="0.75rem">
          <Card withBorder radius="md" padding="md">
            <Group gap="0.75rem" wrap="nowrap">
              <ThemeIcon size="2.5rem" radius="md" variant="light" color="brand"><Truck size={18} /></ThemeIcon>
              <Stack gap="0.125rem">
                <Text fw={600}>{product.supplier}</Text>
                <Text size="sm" style={{ color: SUBTLE }}>
                  <Phone size={12} style={{ verticalAlign: "-0.1rem", marginRight: "0.25rem", display: "inline" }} />{product.supplierContact}
                </Text>
              </Stack>
            </Group>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}
