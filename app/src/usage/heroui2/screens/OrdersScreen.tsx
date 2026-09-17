import { Card, Chip } from "@heroui/react";
import { ORDERS, type Order } from "../data";

const STATUS_COLOR: Record<Order["status"], "accent" | "success" | "default"> = {
  배송중: "accent",
  배송완료: "success",
  결제완료: "default",
};

// 상태별 요약을 목록과 함께 표시
export function OrdersScreen {
  const byStatus = (["배송중", "배송완료", "결제완료"] as const).map((s) => ({
    status: s,
    count: ORDERS.filter((o) => o.status === s).length,
  }));

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
    </div>
  );
}
