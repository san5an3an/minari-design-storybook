import * as React from "react";
import {
  Avatar, Badge, Box, Button, Dialog, Field, HStack, IconButton, Input, Menu, NativeSelect,
  NumberInput, Pagination, Portal, Stat, Table, Text, Textarea, VStack,
} from "@chakra-ui/react";
import { EllipsisVertical, Plus } from "lucide-react";
import type { ScreenProps } from "../screens";
import { DESIGNS, ORDERS, type Order } from "../data";

const STATUS_ORDER: Order["status"][] = ["접수", "인쇄중", "배송중", "완료"];
const STATUS_PALETTE: Record<Order["status"], string> = {
  접수: "gray",
  인쇄중: "warning",
  배송중: "brand",
  완료: "success",
};
const MATERIALS = ["면 100%", "폴리 혼방", "린넨"] as const;
const PAGE_SIZE = 5;

// 통계카드 2 또는 4열로 고정. 3열이면 카드 하나가 홀로 남음
const ORDER_STAT_GRID_CSS = `
.chk2-ord-stat-cq { container-type: inline-size; container-name: chk2ordstats; }
.chk2-ord-stat-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
@container chk2ordstats (min-width: 47rem) {
  .chk2-ord-stat-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

function nextOrderNo(orders: Order[]): string {
  const max = orders.reduce((m, o) => {
    const n = Number.parseInt(o.orderNo.split("-")[1] ?? "0", 10);
    return Number.isFinite(n) ? Math.max(m, n) : m;
  }, 0);
  return `PS-${max + 1}`;
}

export function OrdersScreen({ onNavigate, onSelect }: ScreenProps) {
  const [orders, setOrders] = React.useState<Order[]>( => [...ORDERS]);
  const [status, setStatus] = React.useState<Order["status"] | "전체">("전체");
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [newOpen, setNewOpen] = React.useState(false);
  const [newCustomer, setNewCustomer] = React.useState("");
  const [newDesign, setNewDesign] = React.useState(DESIGNS[0].name);
  const [newQuantity, setNewQuantity] = React.useState("1");
  const [newMaterial, setNewMaterial] = React.useState<typeof MATERIALS[number]>(MATERIALS[0]);
  const [newAddress, setNewAddress] = React.useState("");

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const counts = {
    전체: orders.length,
    ...Object.fromEntries(STATUS_ORDER.map((s) => [s, orders.filter((o) => o.status === s).length])),
  } as Record<Order["status"] | "전체", number>;

  const totalAmount = orders.reduce((sum, o) => sum + o.amount, 0);

  const filtered = orders.filter(
    (o) =>
      (status === "전체" || o.status === status) &&
      (query.trim === "" || o.orderNo.includes(query) || o.customer.includes(query) || o.designName.includes(query)),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const clampedPage = Math.min(page, totalPages);
  const pageRows = filtered.slice((clampedPage - 1) * PAGE_SIZE, clampedPage * PAGE_SIZE);

  const resetNewOrderForm =  => {
    setNewCustomer("");
    setNewDesign(DESIGNS[0].name);
    setNewQuantity("1");
    setNewMaterial(MATERIALS[0]);
    setNewAddress("");
  };

  const submitNewOrder =  => {
    if (newCustomer.trim === "" || newAddress.trim === "") return;
    const design = DESIGNS.find((d) => d.name === newDesign) ?? DESIGNS[0];
    const quantity = Math.max(1, Number.parseInt(newQuantity, 10) || 1);
    const order: Order = {
      id: `o-new-${Date.now}`,
      orderNo: nextOrderNo(orders),
      customer: newCustomer.trim,
      designName: design.name,
      status: "접수",
      amount: design.price * quantity,
      dateLabel: "방금 생성",
      quantity,
      material: newMaterial,
      shippingAddress: newAddress.trim,
      paymentMethod: "카드",
    };
    setOrders((prev) => [order, ...prev]);
    setNewOpen(false);
    resetNewOrderForm;
    setStatus("전체");
    setPage(1);
  };

  return (
    <VStack align="stretch" gap="1rem">
      {/* 제목행, 주 액션 버튼 */}
      <HStack justify="space-between">
        <Text fontSize="0.9375rem" fontWeight="600">전체 주문</Text>
        <Button size="sm" colorPalette="brand" onClick={ => setNewOpen(true)}>
          <Plus size={14} />
          새 주문
        </Button>
      </HStack>

      {/* 필터 칩 개수 배지 */}
      <HStack gap="0.5rem" flexWrap="wrap">
        {(["전체", ...STATUS_ORDER] as const).map((s) => (
          <Button
            key={s}
            size="sm"
            variant={status === s ? "solid" : "outline"}
            colorPalette={status === s ? "brand" : "gray"}
            onClick={ => { setStatus(s); setPage(1); }}
          >
            {s} ({counts[s]})
          </Button>
        ))}
      </HStack>

      <style>{ORDER_STAT_GRID_CSS}</style>
      <Box className="chk2-ord-stat-cq">
        <Box className="chk2-ord-stat-grid">
          <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
            <Stat.Label color="fg.muted">전체 주문</Stat.Label>
            <Stat.ValueText fontSize="1.25rem" fontWeight="600">{orders.length}건</Stat.ValueText>
          </Stat.Root>
          <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
            <Stat.Label color="fg.muted">총 매출</Stat.Label>
            <Stat.ValueText fontSize="1.25rem" fontWeight="600">{totalAmount.toLocaleString}원</Stat.ValueText>
          </Stat.Root>
          <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
            <Stat.Label color="fg.muted">인쇄중</Stat.Label>
            <Stat.ValueText fontSize="1.25rem" fontWeight="600">{counts["인쇄중"]}건</Stat.ValueText>
          </Stat.Root>
          <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
            <Stat.Label color="fg.muted">배송중</Stat.Label>
            <Stat.ValueText fontSize="1.25rem" fontWeight="600">{counts["배송중"]}건</Stat.ValueText>
          </Stat.Root>
        </Box>
      </Box>

      <Input
        placeholder="주문번호·고객·도안명으로 검색"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setPage(1); }}
        maxW="18rem"
        size="sm"
      />

      {/* 아바타와 상태 pill 포함 대형 데이터 테이블 */}
      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="0" bg="bg.panel" overflow="hidden">
        <Table.ScrollArea>
          <Table.Root size="sm" striped>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>주문번호</Table.ColumnHeader>
                <Table.ColumnHeader>고객</Table.ColumnHeader>
                <Table.ColumnHeader>도안</Table.ColumnHeader>
                <Table.ColumnHeader>금액</Table.ColumnHeader>
                <Table.ColumnHeader>날짜</Table.ColumnHeader>
                <Table.ColumnHeader>상태</Table.ColumnHeader>
                <Table.ColumnHeader w="2.5rem" />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {pageRows.map((o) => (
                <Table.Row key={o.id} cursor="pointer" onClick={ => open(o.id)}>
                  <Table.Cell fontSize="0.8125rem"><Text as="code">{o.orderNo}</Text></Table.Cell>
                  <Table.Cell>
                    <HStack gap="0.5rem">
                      <Avatar.Root size="xs">
                        <Avatar.Fallback>{o.customer.slice(0, 1)}</Avatar.Fallback>
                      </Avatar.Root>
                      <Text fontSize="0.8125rem">{o.customer}</Text>
                    </HStack>
                  </Table.Cell>
                  <Table.Cell fontSize="0.8125rem">{o.designName} · {o.quantity}개</Table.Cell>
                  <Table.Cell fontSize="0.8125rem">{o.amount.toLocaleString}원</Table.Cell>
                  <Table.Cell fontSize="0.8125rem" color="fg.subtle">{o.dateLabel}</Table.Cell>
                  <Table.Cell>
                    <Badge colorPalette={STATUS_PALETTE[o.status]} size="sm">{o.status}</Badge>
                  </Table.Cell>
                  <Table.Cell onClick={(e) => e.stopPropagation}>
                    {/* 행 액션, Menu 오버레이 사용. 선택은 개별 Item 아닌 Menu.Root의 onSelect 처리 */}
                    <Menu.Root onSelect={(d) => { if (d.value === "detail") open(o.id); else onNavigate?.("designs"); }}>
                      <Menu.Trigger asChild>
                        <IconButton aria-label="더보기" size="xs" variant="ghost">
                          <EllipsisVertical size={14} />
                        </IconButton>
                      </Menu.Trigger>
                      <Portal>
                        <Menu.Positioner>
                          <Menu.Content>
                            <Menu.Item value="detail">상세 보기</Menu.Item>
                            <Menu.Item value="design">도안 보기</Menu.Item>
                          </Menu.Content>
                        </Menu.Positioner>
                      </Portal>
                    </Menu.Root>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>

        {/* 페이지네이션. 개수 문구는 원문 그대로, 나머지는 Pagination 컴포넌트 사용 */}
        <Pagination.Root
          count={filtered.length} pageSize={PAGE_SIZE} page={clampedPage}
          onPageChange={(e) => setPage(e.page)}
        >
          <HStack justify="space-between" px="1rem" py="0.75rem" borderTop="1px solid var(--chakra-colors-border)" flexWrap="wrap" gap="0.5rem">
            <Text fontSize="0.75rem" color="fg.subtle">
              Showing {pageRows.length} out of {filtered.length}
            </Text>
            <HStack gap="0.25rem">
              <Pagination.PrevTrigger asChild>
                <IconButton size="xs" variant="outline" aria-label="이전 페이지">‹</IconButton>
              </Pagination.PrevTrigger>
              <Pagination.Items
                render={(p) => (
                  <IconButton size="xs" variant={{ base: "outline", _selected: "solid" }} colorPalette="brand">
                    {p.value}
                  </IconButton>
                )}
              />
              <Pagination.NextTrigger asChild>
                <IconButton size="xs" variant="outline" aria-label="다음 페이지">›</IconButton>
              </Pagination.NextTrigger>
            </HStack>
          </HStack>
        </Pagination.Root>
      </Box>

      {/* 새 주문. Dialog + Field/NativeSelect/NumberInput/Textarea 조합 */}
      <Dialog.Root open={newOpen} onOpenChange={(e) => { setNewOpen(e.open); if (!e.open) resetNewOrderForm; }}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title fontSize="1rem">새 주문 등록</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <VStack align="stretch" gap="0.75rem">
                  <Field.Root required>
                    <Field.Label fontSize="0.75rem">고객명</Field.Label>
                    <Input size="sm" value={newCustomer} onChange={(e) => setNewCustomer(e.target.value)} placeholder="예: 김도윤" />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label fontSize="0.75rem">도안</Field.Label>
                    <NativeSelect.Root size="sm">
                      <NativeSelect.Field value={newDesign} onChange={(e) => setNewDesign(e.target.value)}>
                        {DESIGNS.map((d) => (
                          <option key={d.id} value={d.name}>{d.name} · {d.price.toLocaleString}원</option>
                        ))}
                      </NativeSelect.Field>
                      <NativeSelect.Indicator />
                    </NativeSelect.Root>
                  </Field.Root>
                  <HStack gap="0.75rem" align="flex-end">
                    <Field.Root maxW="8rem">
                      <Field.Label fontSize="0.75rem">수량</Field.Label>
                      <NumberInput.Root size="sm" min={1} max={99} value={newQuantity} onValueChange={(e) => setNewQuantity(e.value)}>
                        <NumberInput.Control />
                        <NumberInput.Input />
                      </NumberInput.Root>
                    </Field.Root>
                    <Field.Root>
                      <Field.Label fontSize="0.75rem">재질</Field.Label>
                      <NativeSelect.Root size="sm">
                        <NativeSelect.Field value={newMaterial} onChange={(e) => setNewMaterial(e.target.value as typeof MATERIALS[number])}>
                          {MATERIALS.map((m) => <option key={m} value={m}>{m}</option>)}
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                      </NativeSelect.Root>
                    </Field.Root>
                  </HStack>
                  <Field.Root required>
                    <Field.Label fontSize="0.75rem">배송지</Field.Label>
                    <Textarea size="sm" rows={2} value={newAddress} onChange={(e) => setNewAddress(e.target.value)} placeholder="예: 서울시 마포구 합정동" />
                  </Field.Root>
                </VStack>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline" size="sm">취소</Button>
                </Dialog.ActionTrigger>
                <Button size="sm" colorPalette="brand" onClick={submitNewOrder} disabled={newCustomer.trim === "" || newAddress.trim === ""}>
                  등록
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </VStack>
  );
}
