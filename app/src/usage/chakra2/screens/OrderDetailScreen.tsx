import * as React from "react";
import {
  Badge, Box, Breadcrumb, Button, Dialog, Field, HStack, Image, Input, DataList,
  NativeSelect, Portal, Steps, Table, Text, Textarea, Timeline, VStack,
} from "@chakra-ui/react";
import { CheckCircle2, Package, PackageCheck, Truck } from "lucide-react";
import type { ScreenProps } from "../screens";
import { DESIGNS, ORDERS, type Order } from "../data";

const STATUS_ORDER: Order["status"][] = ["접수", "인쇄중", "배송중", "완료"];
const STATUS_PALETTE: Record<Order["status"], string> = {
  접수: "gray", 인쇄중: "warning", 배송중: "brand", 완료: "success",
};
const STATUS_ICON: Record<Order["status"], React.ComponentType<{ size?: number }>> = {
  접수: Package, 인쇄중: Package, 배송중: Truck, 완료: PackageCheck,
};

export function OrderDetailScreen({ selectedId, onSelect, onNavigate }: ScreenProps) {
  const order = ORDERS.find((o) => o.id === selectedId) ?? ORDERS[0];
  const [status, setStatus] = React.useState<Order["status"]>(order?.status ?? "접수");
  const [address, setAddress] = React.useState(order?.shippingAddress ?? "");
  const [memo, setMemo] = React.useState("");
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);

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

  const stepIndex = STATUS_ORDER.indexOf(status);
  const unitPrice = Math.round(order.amount / order.quantity);

  const openSaveConfirm =  => setConfirmOpen(true);
  const applySave =  => setConfirmOpen(false);

  return (
    <VStack align="stretch" gap="1rem">
      <Breadcrumb.Root size="sm">
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link onClick={ => onNavigate?.("orders")} cursor="pointer">주문</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>{order.orderNo}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <HStack gap="1rem" align="flex-start">
        {design ? (
          <Box
            position="relative" flexShrink={0} cursor="pointer" onClick={ => setPreviewOpen(true)}
            borderRadius="control" overflow="hidden"
          >
            <Image src={design.image} alt={design.name} boxSize="6rem" objectFit="cover" />
          </Box>
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

      {/* 공정 단계 값. status 변경에 따라 자동 반영되는 파생값이라 읽기 전용임 */}
      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
        <Text fontSize="0.8125rem" fontWeight="600" mb="0.75rem">공정 단계</Text>
        <Steps.Root step={stepIndex} count={STATUS_ORDER.length} size="sm">
          <Steps.List>
            {STATUS_ORDER.map((s, i) => {
              const Icon = STATUS_ICON[s];
              return (
                <Steps.Item key={s} index={i} title={s}>
                  <Steps.Indicator>
                    <Steps.Status incomplete={<Icon size={14} />} complete={<CheckCircle2 size={14} />} />
                  </Steps.Indicator>
                  <Steps.Title fontSize="0.8125rem">{s}</Steps.Title>
                  <Steps.Separator />
                </Steps.Item>
              );
            })}
          </Steps.List>
        </Steps.Root>
      </Box>

      {/* 사양, 결제 정보 표시하는 신규 DataList */}
      <HStack gap="1rem" align="stretch" flexWrap="wrap">
        <Box flex="1" minW="14rem" borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Text fontSize="0.8125rem" fontWeight="600" mb="0.5rem">사양</Text>
          <DataList.Root orientation="horizontal" size="sm">
            <DataList.Item>
              <DataList.ItemLabel>도안</DataList.ItemLabel>
              <DataList.ItemValue>{order.designName}</DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>수량</DataList.ItemLabel>
              <DataList.ItemValue>{order.quantity}개</DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>재질</DataList.ItemLabel>
              <DataList.ItemValue>{order.material}</DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>배송지</DataList.ItemLabel>
              <DataList.ItemValue>{order.shippingAddress}</DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        </Box>
        <Box flex="1" minW="14rem" borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Text fontSize="0.8125rem" fontWeight="600" mb="0.5rem">결제</Text>
          <DataList.Root orientation="horizontal" size="sm">
            <DataList.Item>
              <DataList.ItemLabel>단가</DataList.ItemLabel>
              <DataList.ItemValue>{unitPrice.toLocaleString}원</DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>수량</DataList.ItemLabel>
              <DataList.ItemValue>× {order.quantity}개</DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>결제수단</DataList.ItemLabel>
              <DataList.ItemValue>{order.paymentMethod}</DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>합계</DataList.ItemLabel>
              <DataList.ItemValue fontWeight="600">{order.amount.toLocaleString}원</DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        </Box>
      </HStack>

      {/* 배송 단계 Timeline 렌더링. 현재까지만 진행 표시, 이후 단계는 미확정 유지 */}
      <Box>
        <Text fontSize="0.8125rem" fontWeight="600" mb="0.5rem">배송 조회</Text>
        <Timeline.Root size="sm" maxW="100%">
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator><Package size={12} /></Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title fontSize="0.8125rem">주문 접수</Timeline.Title>
              <Timeline.Description>{order.dateLabel}</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
          {stepIndex >= 1 ? (
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator><Package size={12} /></Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title fontSize="0.8125rem">인쇄 진행</Timeline.Title>
                <Timeline.Description>{order.material} · {order.quantity}개 인쇄중</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          ) : null}
          {stepIndex >= 2 ? (
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator><Truck size={12} /></Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title fontSize="0.8125rem">배송 시작</Timeline.Title>
                <Timeline.Description>{order.shippingAddress} · 송장 {order.orderNo}-D</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          ) : null}
          {stepIndex >= 3 ? (
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Indicator><PackageCheck size={12} /></Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title fontSize="0.8125rem">배송 완료</Timeline.Title>
                <Timeline.Description>고객 수령 확인</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          ) : null}
        </Timeline.Root>
      </Box>

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
          <Button size="sm" colorPalette="brand" onClick={openSaveConfirm}>저장</Button>
        </HStack>
      </Box>

      {/* 메모, 이력 입력란, Textarea */}
      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
        <Text fontSize="0.8125rem" fontWeight="600" mb="0.5rem">내부 메모</Text>
        <Textarea
          size="sm" rows={2} placeholder="예: 고객이 배송 전 색상 확인을 요청했어요."
          value={memo} onChange={(e) => setMemo(e.target.value)}
        />
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

      {/* 시안 원본 보기 다이얼로그 */}
      {design ? (
        <Dialog.Root open={previewOpen} onOpenChange={(e) => setPreviewOpen(e.open)}>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title fontSize="1rem">{design.name}</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                  <Image src={design.image} alt={design.name} w="100%" borderRadius="control" objectFit="cover" />
                  <Text fontSize="0.8125rem" color="fg.subtle" mt="0.5rem">
                    {design.category} · 누적 {design.uses}회 사용
                  </Text>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.ActionTrigger asChild>
                    <Button size="sm" variant="outline">닫기</Button>
                  </Dialog.ActionTrigger>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      ) : null}

      {/* 저장 확인 Dialog */}
      <Dialog.Root open={confirmOpen} onOpenChange={(e) => setConfirmOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title fontSize="1rem">변경 사항을 저장할까요?</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text fontSize="0.8125rem" color="fg.subtle">
                  상태를 「{status}」로, 배송지를 「{address}」로 저장해요.
                </Text>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline" size="sm">취소</Button>
                </Dialog.ActionTrigger>
                <Button size="sm" colorPalette="brand" onClick={applySave}>저장</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </VStack>
  );
}
