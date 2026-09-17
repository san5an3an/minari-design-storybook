"use client";
import * as React from "react";
import { Button, Card, Chip, Dropdown, Label, Radio, RadioGroup } from "@heroui/react";
import { MoreHorizontal } from "lucide-react";
import { ORDERS, type Order } from "../data";

const STATUS_COLOR: Record<Order["status"], "accent" | "success" | "default"> = {
  배송중: "accent",
  배송완료: "success",
  결제완료: "default",
};

// 상태별 요약을 목록과 함께 표시
export function OrdersScreen {
  const [sort, setSort] = React.useState<"recent" | "amount">("recent");
  const byStatus = (["배송중", "배송완료", "결제완료"] as const).map((s) => ({
    status: s,
    count: ORDERS.filter((o) => o.status === s).length,
  }));

  const parsePrice = (label: string) => Number(label.replace(/[^0-9]/g, ""));
  const sorted = [...ORDERS].sort((a, b) =>
    sort === "amount" ? parsePrice(b.totalLabel) - parsePrice(a.totalLabel) : 0,
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
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
        onChange={(v) => setSort(v as "recent" | "amount")}
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
        {sorted.map((order) => (
          <div key={order.id} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="flex flex-col">
              <span className="text-sm font-medium">{order.itemsLabel}</span>
              <span className="text-sm opacity-70">{order.totalLabel} · {order.dateLabel}</span>
            </div>
            <Chip color={STATUS_COLOR[order.status]}>{order.status}</Chip>
            <Dropdown>
              <Button aria-label="주문 메뉴" variant="tertiary" size="sm" isIconOnly>
                <MoreHorizontal className="size-4" />
              </Button>
              <Dropdown.Popover>
                <Dropdown.Menu>
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
    </div>
  );
}
