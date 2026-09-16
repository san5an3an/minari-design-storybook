import * as React from "react";

interface Order {
  id: string;
  item: string;
  amount: string;
  status: "배송 준비" | "배송 중" | "배송 완료";
}

const ORDERS: Order[] = [
  { id: "#8821", item: "무선 이어버드 Pro", amount: "129,000원", status: "배송 준비" },
  { id: "#8820", item: "캔버스 백팩", amount: "58,000원", status: "배송 중" },
  { id: "#8815", item: "세라믹 머그컵 세트", amount: "24,000원", status: "배송 완료" },
];

const BADGE: Record<Order["status"], string> = {
  "배송 준비": "d-badge-warning",
  "배송 중": "d-badge-info",
  "배송 완료": "d-badge-success",
};

export function OrdersScreen {
  return (
    <div className="overflow-x-auto">
      <table className="d-table">
        <thead>
          <tr>
            <th>주문번호</th>
            <th>상품</th>
            <th>금액</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {ORDERS.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.item}</td>
              <td>{o.amount}</td>
              <td><span className={`d-badge d-badge-sm ${BADGE[o.status]}`}>{o.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
