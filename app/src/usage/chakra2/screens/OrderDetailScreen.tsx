import * as React from "react";
import {
  Badge, Box, Button, Field, HStack, Image, Input, NativeSelect, Table, Text, VStack,
} from "@chakra-ui/react";
import type { ScreenProps } from "../screens";
import { DESIGNS, ORDERS, type Order } from "../data";

const STATUS_ORDER: Order["status"][] = ["접수", "인쇄중", "배송중", "완료"];
const STATUS_PALETTE: Record<Order["status"], string> = {
  접수: "gray", 인쇄중: "warning", 배송중: "brand", 완료: "success",
};

export function OrderDetailScreen({ selectedId, onSelect, onNavigate }: ScreenProps) {
  const order = ORDERS.find((o) => o.id === selectedId);
  const [status, setStatus] = React.useState<Order["status"]>(order?.status ?? "접수");
  const [address, setAddress] = React.useState(order?.shippingAddress ?? "");

  // 파생 리스트. 프레임 유지, 데이터에서 값 추출. 같은 고객의 다른 주문
  const sameCustomer = order ? ORDERS.filter((o) => o.id !== order.id && o.customer === order.customer) : [];
  const design = order ? DESIGNS.find((d) => d.name === order.designName) : undefined;

  if (!order) {
    return (
      <Box borderWidth="1px" borderStyle="dashed" borderColor="border" borderRadius="control" p="2rem" textAlign="center">
        <Text color="fg.subtle" mb="0.5rem">주문을 먼저 골라 주세요. "주문" 탭에서 행을 눌러 보세요.</Text>
        <Button size="sm" variant="outline" onClick={ => onNavigate?.("orders")}>주문 목록으로</Button>
      </Box>
    );
  }

  return (
    <VStack align="stretch" gap="1rem">
      <HStack gap="1rem" align="flex-start">
        {design ? (
          <Image src={design.image} alt={design.name} borderRadius="control" boxSize="6rem" objectFit="cover" flexShrink={0} />
        ) : null}
        <VStack align="start" gap="0.25rem">
          <HStack gap="0.5rem">
            <Text fontWeight="600" fontSize="1.125rem">{order.orderNo}</Text>
            <Badge colorPalette={STATUS_PALETTE[order.status]} size="sm">{order.status}</Badge>
          </HStack>
          <Text fontSize="0.875rem">{order.designName} · {order.quantity}개 · {order.material}</Text>
          <Text fontSize="0.8125rem" color="fg.subtle">
            {order.customer} · {order.amount.toLocaleString}원 · {order.dateLabel}
          </Text>
        </VStack>
      </HStack>

      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
        <Text fontSize="0.8125rem" fontWeight="600" mb="0.75rem">진행 관리</Text>
        <HStack gap="0.75rem" flexWrap="wrap" align="flex-end">
          <Field.Root maxW="10rem">
            <Field.Label fontSize="0.75rem">상태</Field.Label>
            <NativeSelect.Root size="sm">
              <NativeSelect.Field value={status} onChange={(e) => setStatus(e.target.value as Order["status"])}>
                {STATUS_ORDER.map((s) => <option key={s} value={s}>{s}</option>)}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Field.Root>
          <Field.Root maxW="16rem">
            <Field.Label fontSize="0.75rem">배송지</Field.Label>
            <Input size="sm" value={address} onChange={(e) => setAddress(e.target.value)} />
          </Field.Root>
          <Button size="sm" colorPalette="brand">저장</Button>
        </HStack>
      </Box>

      {sameCustomer.length > 0 ? (
        <Box>
          <Text fontSize="0.8125rem" fontWeight="600" mb="0.5rem">{order.customer}님의 다른 주문</Text>
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>주문번호</Table.ColumnHeader>
                <Table.ColumnHeader>도안</Table.ColumnHeader>
                <Table.ColumnHeader>상태</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {sameCustomer.map((o) => (
                <Table.Row key={o.id} cursor="pointer" onClick={ => { onSelect?.(o.id); onNavigate?.("detail"); }}>
                  <Table.Cell fontSize="0.8125rem"><Text as="code">{o.orderNo}</Text></Table.Cell>
                  <Table.Cell fontSize="0.8125rem">{o.designName}</Table.Cell>
                  <Table.Cell><Badge colorPalette={STATUS_PALETTE[o.status]} size="sm">{o.status}</Badge></Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      ) : null}
    </VStack>
  );
}
