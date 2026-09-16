import { Card, Chip } from "@heroui/react";
import { ORDERS, type Order } from "../data";

const STATUS_COLOR: Record<Order["status"], "accent" | "success" | "default"> = {
  배송중: "accent",
  배송완료: "success",
  결제완료: "default",
};

export function OrdersScreen {
  return (
    <Card className="gap-0 divide-y p-0">
      {ORDERS.map((order) => (
        <div key={order.id} className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex flex-col">
            <span className="text-sm font-medium">{order.itemsLabel}</span>
            <span className="text-sm opacity-70">{order.totalLabel} · {order.dateLabel}</span>
          </div>
          <Chip color={STATUS_COLOR[order.status]}>{order.status}</Chip>
        </div>
      ))}
    </Card>
  );
}
