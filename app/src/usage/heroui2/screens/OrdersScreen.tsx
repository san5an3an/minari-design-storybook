"use client";
import * as React from "react";
import {
  AlertDialog, Button, Card, Chip, Dropdown, Label, Pagination, Radio, RadioGroup, toast,
} from "@heroui/react";
import { MoreHorizontal } from "lucide-react";
import { ORDERS, type Order } from "../data";

const STATUS_COLOR: Record<Order["status"], "accent" | "success" | "default" | "danger"> = {
  배송중: "accent",
  배송완료: "success",
  결제완료: "default",
  취소됨: "danger",
};

const PAGE_SIZE = 5;

export function OrdersScreen {
  const [orders, setOrders] = React.useState<Order[]>(ORDERS);
  const [sort, setSort] = React.useState<"recent" | "amount">("recent");
  const [page, setPage] = React.useState(1);
  const [cancelId, setCancelId] = React.useState<string | null>(null);

  const byStatus = (["배송중", "배송완료", "결제완료", "취소됨"] as const).map((s) => ({
    status: s,
    count: orders.filter((o) => o.status === s).length,
  }));

  const parsePrice = (label: string) => Number(label.replace(/[^0-9]/g, ""));
  const sorted = [...orders].sort((a, b) =>
    sort === "amount" ? parsePrice(b.totalLabel) - parsePrice(a.totalLabel) : 0,
  );

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageRows = sorted.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const cancelOrder = (id: string) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: "취소됨" } : o)));
    toast.danger("주문을 취소했어요");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {byStatus.map((s) => (
          <Card key={s.status} className="items-center gap-1 p-3 text-center">
            <span className="text-xs opacity-70">{s.status}</span>
            <span className="text-lg font-semibold">{s.count}건</span>
          </Card>
        ))}
      </div>

      <RadioGroup
        orientation="horizontal"
        value={sort}
        onChange={(v) => { setSort(v as "recent" | "amount"); setPage(1); }}
      >
        <Radio value="recent">
          <Radio.Content>
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            최신순
          </Radio.Content>
        </Radio>
        <Radio value="amount">
          <Radio.Content>
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            금액순
          </Radio.Content>
        </Radio>
      </RadioGroup>

      <Card className="gap-0 divide-y p-0">
        {pageRows.map((order) => (
          <div key={order.id} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="flex flex-col">
              <span className="text-sm font-medium">{order.itemsLabel}</span>
              <span className="text-sm opacity-70">{order.totalLabel} · {order.dateLabel}</span>
            </div>
            <Chip color={STATUS_COLOR[order.status]}>{order.status}</Chip>
            <Dropdown>
              <Button aria-label="주문 메뉴" variant="tertiary" size="sm" isIconOnly isDisabled={order.status === "취소됨"}>
                <MoreHorizontal className="size-4" />
              </Button>
              <Dropdown.Popover>
                <Dropdown.Menu
                  onAction={(key) => {
                    if (key === "track") toast.info("배송 조회 페이지로 이동해요");
                    else if (key === "reorder") toast.success("같은 상품으로 재주문을 담았어요");
                    else if (key === "cancel") setCancelId(order.id);
                  }}
                >
                  <Dropdown.Item id="track" textValue="배송 조회">
                    <Label>배송 조회</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="reorder" textValue="재주문">
                    <Label>재주문</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="cancel" textValue="주문 취소" variant="danger">
                    <Label>주문 취소</Label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>
        ))}
      </Card>

      {totalPages > 1 ? (
        <Pagination className="justify-end">
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous isDisabled={safePage === 1} onPress={ => setPage((p) => p - 1)}>
                <Pagination.PreviousIcon />
              </Pagination.Previous>
            </Pagination.Item>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Pagination.Item key={p}>
                <Pagination.Link isActive={p === safePage} onPress={ => setPage(p)}>
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next isDisabled={safePage === totalPages} onPress={ => setPage((p) => p + 1)}>
                <Pagination.NextIcon />
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      ) : null}

      <AlertDialog.Backdrop isOpen={cancelId !== null} onOpenChange={(open) => !open && setCancelId(null)}>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>이 주문을 취소할까요?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>취소하면 되돌릴 수 없어요. 이미 배송이 시작된 상품은 취소가 어려울 수 있어요.</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">돌아가기</Button>
              <Button
                slot="close"
                variant="secondary"
                onPress={ => {
                  if (cancelId) cancelOrder(cancelId);
                }}
              >
                주문 취소
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </div>
  );
}
