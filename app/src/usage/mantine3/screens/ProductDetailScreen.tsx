import * as React from "react";
import {
  Avatar, Badge, Button, Card, Group, NumberInput, RingProgress, Select, SimpleGrid, Slider, Stack, Table,
  Tabs, Text, Textarea, ThemeIcon, Timeline, Title,
} from "@mantine/core";
import { Box, History, Package, Phone, PlusCircle, Truck } from "lucide-react";
import { MOVEMENTS, PRODUCTS } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<string, string> = { 재고충분: "success", 재고부족: "warning", 품절: "danger" };
const SUPPLIERS = ["대한전자", "뷰텍코리아", "키클릭", "파워랩", "웜라인", "베이직코", "런핏", "빈스로드", "고향식품", "청량음료", "우드마루", "시트콤"];

export function ProductDetailScreen({ selectedId }: ScreenProps) {
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
        <Group justify="space-between" wrap="wrap" gap="1rem">
          <Group gap="0.75rem" wrap="nowrap">
            <Avatar src={product.image} radius="md" size="3.5rem" />
            <Stack gap="0.125rem">
              <Title order={4}>{product.name}</Title>
              <Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{product.sku} · {product.warehouse}</Text>
              <Group gap="0.375rem">
                <Badge variant="light" color="brand" size="sm">{product.category}</Badge>
                <Badge variant="dot" color={STATUS_COLOR[product.status]} size="sm">{product.status}</Badge>
              </Group>
            </Stack>
          </Group>
          <RingProgress
            size={80}
            thickness={8}
            label={<Text size="0.7rem" ta="center" fw={700}>{levelPct}%</Text>}
            sections={[{ value: levelPct, color: levelPct < 30 ? "danger" : levelPct < 60 ? "warning" : "success" }]}
          />
        </Group>
      </Card>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="1rem">
        <Card withBorder radius="md" padding="md">
          <Text fw={600} size="sm" mb="0.75rem">재고 조정</Text>
          <Stack gap="0.75rem">
            <Stack gap="0.25rem">
              <Text size="sm" fw={500}>재발주 임계값 ({threshold}개)</Text>
              <Slider value={threshold} onChange={setThreshold} min={0} max={product.maxStock} step={10} color="warning" />
            </Stack>
            <NumberInput
              label="수량 조정 (+입고 / -출고)"
              value={adjustQty}
              onChange={(v) => setAdjustQty(Number(v) || 0)}
              leftSection={<PlusCircle size={13} />}
            />
            <Select label="공급업체" data={SUPPLIERS} value={supplier} onChange={(v) => setSupplier(v ?? supplier)} />
            <Textarea label="메모" placeholder="재고 조정 사유를 남겨주세요" minRows={2} value={note} onChange={(e) => setNote(e.currentTarget.value)} />
            <Group gap="0.5rem">
              <Button color="brand" leftSection={<Package size={14} />}>조정 반영</Button>
              <Button variant="light" color="brand" leftSection={<Truck size={14} />}>발주하기</Button>
            </Group>
          </Stack>
        </Card>

        <Card withBorder radius="md" padding="md" style={{ display: "flex", flexDirection: "column" }}>
          <Text fw={600} size="sm" mb="0.625rem">최근 상태 변화</Text>
          {history.length > 0 ? (
            <Timeline active={history.length} bulletSize={18} lineWidth={2} color="brand">
              {history.slice(0, 4).map((m) => (
                <Timeline.Item key={m.id} bullet={m.type === "입고" ? <PlusCircle size={10} /> : <Box size={10} />} title={`${m.type} ${m.quantity}개`}>
                  <Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{m.datetime} · {m.staff} · {m.note}</Text>
                </Timeline.Item>
              ))}
            </Timeline>
          ) : (
            <Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>아직 입출고 이력이 없어요.</Text>
          )}
          <Card withBorder radius="md" padding="0.625rem" mt="auto" style={{ marginTop: "1rem", background: "var(--semantic-bg-neutral-subtlest)" }}>
            <Group justify="space-between">
              <Group gap="0.5rem">
                <ThemeIcon variant="light" color="brand" size="1.75rem" radius="md"><Truck size={13} /></ThemeIcon>
                <Text size="sm">이번 이력 {history.length}건 · {product.supplier}</Text>
              </Group>
              <Badge variant="light" color={product.status === "품절" ? "danger" : "brand"} size="sm">
                {product.status === "품절" ? "긴급 발주 필요" : "정기 발주 대상"}
              </Badge>
            </Group>
          </Card>
        </Card>
      </SimpleGrid>

      <Tabs defaultValue="history" color="brand">
        <Tabs.List>
          <Tabs.Tab value="history" leftSection={<History size={13} />}>입출고 이력</Tabs.Tab>
          <Tabs.Tab value="supplier" leftSection={<Truck size={13} />}>공급업체</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="history" pt="0.75rem">
          <Table.ScrollContainer minWidth={480}>
            <Table highlightOnHover verticalSpacing="0.5rem">
              <Table.Thead>
                <Table.Tr><Table.Th>유형</Table.Th><Table.Th>수량</Table.Th><Table.Th>담당자</Table.Th><Table.Th>일시</Table.Th><Table.Th>비고</Table.Th></Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {history.map((m) => (
                  <Table.Tr key={m.id}>
                    <Table.Td><Badge variant="light" color={m.type === "입고" ? "success" : "danger"} size="sm">{m.type}</Badge></Table.Td>
                    <Table.Td><Text size="sm">{m.type === "입고" ? "+" : "-"}{m.quantity}</Text></Table.Td>
                    <Table.Td><Text size="sm">{m.staff}</Text></Table.Td>
                    <Table.Td><Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{m.datetime}</Text></Table.Td>
                    <Table.Td><Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{m.note}</Text></Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Tabs.Panel>
        <Tabs.Panel value="supplier" pt="0.75rem">
          <Card withBorder radius="md" padding="md">
            <Group gap="0.75rem" wrap="nowrap">
              <ThemeIcon size="2.5rem" radius="md" variant="light" color="brand"><Truck size={18} /></ThemeIcon>
              <Stack gap="0.125rem">
                <Text fw={600}>{product.supplier}</Text>
                <Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
                  <Phone size={12} style={{ verticalAlign: "-0.1rem", marginRight: "0.25rem" }} />{product.supplierContact}
                </Text>
              </Stack>
            </Group>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}
