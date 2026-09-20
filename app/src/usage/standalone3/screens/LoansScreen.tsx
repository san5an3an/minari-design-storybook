import * as React from "react";
import { Table } from "../../../bases/standalone/Table";
import { Badge } from "../../../bases/standalone/Badge";
import { Pagination } from "../../../bases/standalone/Pagination";

interface Loan {
  id: string;
  book: string;
  borrower: string;
  due: string;
  status: "정상" | "연체";
}

const LOANS: Loan[] = [
  { id: "l1", book: "타입스크립트 핸드북", borrower: "김도현", due: "09-20", status: "정상" },
  { id: "l2", book: "아침의 문", borrower: "이서아", due: "09-15", status: "연체" },
  { id: "l3", book: "행동경제학 강의", borrower: "박준서", due: "09-14", status: "연체" },
  { id: "l4", book: "코드가 만드는 세계", borrower: "최유나", due: "09-22", status: "정상" },
  { id: "l5", book: "고요한 지구", borrower: "정하은", due: "09-19", status: "정상" },
  { id: "l6", book: "디자인 시스템 만들기", borrower: "한지우", due: "09-25", status: "정상" },
  { id: "l7", book: "통계로 세상 읽기", borrower: "오세준", due: "09-13", status: "연체" },
  { id: "l8", book: "밤의 도서관", borrower: "윤새별", due: "09-24", status: "정상" },
];

const PAGE_SIZE = 5;

export function LoansScreen {
  const [page, setPage] = React.useState(1);
  const overdue = LOANS.filter((l) => l.status === "연체").length;
  const shown = LOANS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pages = Math.ceil(LOANS.length / PAGE_SIZE);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <span className="text-sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
          전체 <b style={{ color: "var(--semantic-fg-neutral-default)" }}>{LOANS.length}</b>건
        </span>
        <span className="text-sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
          연체 <b style={{ color: "var(--semantic-fg-danger-default)" }}>{overdue}</b>건
        </span>
      </div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>도서명</Table.Head>
            <Table.Head>대출자</Table.Head>
            <Table.Head>반납 예정일</Table.Head>
            <Table.Head>상태</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {shown.map((l) => (
            <Table.Row key={l.id}>
              <Table.Cell>{l.book}</Table.Cell>
              <Table.Cell>{l.borrower}</Table.Cell>
              <Table.Cell>{l.due}</Table.Cell>
              <Table.Cell>
                <Badge tone={l.status === "연체" ? "danger" : "success"}>{l.status}</Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination page={page} total={pages} onPage={setPage} />
    </div>
  );
}
