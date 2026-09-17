import * as React from "react";
import {
  Avatar, Badge, Box, Button, Grid, HStack, Input, Stat, Table, Text, VStack,
} from "@chakra-ui/react";
import type { ScreenProps } from "../screens";
import { ORDERS, type Order } from "../data";

const STATUS_ORDER: Order["status"][] = ["접수", "인쇄중", "배송중", "완료"];
const STATUS_PALETTE: Record<Order["status"], string> = {
  접수: "gray",
  인쇄중: "warning",
  배송중: "brand",
  완료: "success",
};
const PAGE_SIZE = 5;

export function OrdersScreen({ onNavigate, onSelect }: ScreenProps) {
  const [status, setStatus] = React.useState<Order["status"] | "전체">("전체");
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const counts = {
    전체: ORDERS.length,
    ...Object.fromEntries(STATUS_ORDER.map((s) => [s, ORDERS.filter((o) => o.status === s).length])),
  } as Record<Order["status"] | "전체", number>;

  const totalAmount = ORDERS.reduce((sum, o) => sum + o.amount, 0);

  const filtered = ORDERS.filter(
    (o) =>
      (status === "전체" || o.status === status) &&
      (query.trim === "" || o.orderNo.includes(query) || o.customer.includes(query) || o.designName.includes(query)),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const clampedPage = Math.min(page, totalPages);
  const pageRows = filtered.slice((clampedPage - 1) * PAGE_SIZE, clampedPage * PAGE_SIZE);

  return (
    <VStack align="stretch" gap="1rem">
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

      <Grid templateColumns="repeat(auto-fit, minmax(9rem, 1fr))" gap="1rem">
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Stat.Label color="fg.muted">전체 주문</Stat.Label>
          <Stat.ValueText fontSize="1.25rem" fontWeight="600">{ORDERS.length}건</Stat.ValueText>
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
      </Grid>

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
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>

        {/* 페이지네이션. "Showing N out of M" 문구 그대로 사용 */}
        <HStack justify="space-between" px="1rem" py="0.75rem" borderTop="1px solid var(--chakra-colors-border)">
          <Text fontSize="0.75rem" color="fg.subtle">
            Showing {pageRows.length} out of {filtered.length}
          </Text>
          <HStack gap="0.5rem">
            <Button size="xs" variant="outline" disabled={clampedPage <= 1} onClick={ => setPage((p) => p - 1)}>
              이전
            </Button>
            <Text fontSize="0.75rem" color="fg.subtle">{clampedPage} / {totalPages}</Text>
            <Button size="xs" variant="outline" disabled={clampedPage >= totalPages} onClick={ => setPage((p) => p + 1)}>
              다음
            </Button>
          </HStack>
        </HStack>
      </Box>
    </VStack>
  );
}
