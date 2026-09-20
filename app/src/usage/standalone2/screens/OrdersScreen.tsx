import * as React from "react";
import { Table } from "../../../bases/standalone/Table";
import { Badge } from "../../../bases/standalone/Badge";
import { Pagination } from "../../../bases/standalone/Pagination";

interface Order {
  id: string;
  item: string;
  qty: number;
  supplier: string;
  date: string;
  status: "입고 예정" | "입고 완료" | "지연";
}

const ORDERS: Order[] = [
  { id: "#PO-3301", item: "27인치 모니터", qty: 10, supplier: "대한전자유통", date: "09-16", status: "입고 완료" },
  { id: "#PO-3302", item: "기계식 키보드", qty: 30, supplier: "코리아IT유통", date: "09-17", status: "입고 완료" },
  { id: "#PO-3303", item: "A4 복사용지 500매", qty: 100, supplier: "오피스마트", date: "09-18", status: "입고 예정" },
  { id: "#PO-3304", item: "사무용 의자", qty: 5, supplier: "퍼니처웍스", date: "09-15", status: "지연" },
  { id: "#PO-3305", item: "웹캠 1080p", qty: 15, supplier: "대한전자유통", date: "09-19", status: "입고 예정" },
  { id: "#PO-3306", item: "모니터 스탠드", qty: 20, supplier: "퍼니처웍스", date: "09-14", status: "입고 완료" },
  { id: "#PO-3307", item: "화이트보드 마커", qty: 50, supplier: "오피스마트", date: "09-20", status: "입고 예정" },
  { id: "#PO-3308", item: "포스트잇 세트", qty: 80, supplier: "오피스마트", date: "09-13", status: "입고 완료" },
  { id: "#PO-3309", item: "무선 마우스", qty: 40, supplier: "코리아IT유통", date: "09-21", status: "입고 예정" },
  { id: "#PO-3310", item: "스테이플러", qty: 25, supplier: "오피스마트", date: "09-12", status: "입고 완료" },
];

const STATUS_TONE: Record<Order["status"], string> = {
  "입고 예정": "neutral",
  "입고 완료": "success",
  지연: "danger",
};

const PAGE_SIZE = 6;

export function OrdersScreen {
  const [page, setPage] = React.useState(1);
  const shown = ORDERS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pages = Math.ceil(ORDERS.length / PAGE_SIZE);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>발주번호</Table.Head>
            <Table.Head>품목</Table.Head>
            <Table.Head>수량</Table.Head>
            <Table.Head>공급처</Table.Head>
            <Table.Head>일자</Table.Head>
            <Table.Head>상태</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {shown.map((o) => (
            <Table.Row key={o.id}>
              <Table.Cell>{o.id}</Table.Cell>
              <Table.Cell>{o.item}</Table.Cell>
              <Table.Cell>{o.qty}개</Table.Cell>
              <Table.Cell>{o.supplier}</Table.Cell>
              <Table.Cell>{o.date}</Table.Cell>
              <Table.Cell>
                <Badge tone={STATUS_TONE[o.status]}>{o.status}</Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination page={page} total={pages} onPage={setPage} />
    </div>
  );
}
