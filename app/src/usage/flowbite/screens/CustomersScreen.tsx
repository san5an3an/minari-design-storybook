import { Badge, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { CUSTOMERS, type CustomerItem } from "../data";

const STATUS_BADGE: Record<CustomerItem["status"], { color: string; label: string }> = {
  active: { color: "success", label: "활성" },
  trial: { color: "info", label: "체험" },
  churned: { color: "gray", label: "해지" },
};

const won = (n: number) => (n === 0 ? "-" : `${n.toLocaleString("ko-KR")}원`);

export function CustomersScreen {
  return (
    <div className="overflow-x-auto">
      <Table style={{ minWidth: "560px" }}>
        <TableHead>
          <TableRow>
            <TableHeadCell>고객</TableHeadCell>
            <TableHeadCell>회사</TableHeadCell>
            <TableHeadCell>요금제</TableHeadCell>
            <TableHeadCell>월 매출</TableHeadCell>
            <TableHeadCell>상태</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {CUSTOMERS.map((c) => {
            const badge = STATUS_BADGE[c.status];
            return (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.name}</TableCell>
                <TableCell>{c.company}</TableCell>
                <TableCell>{c.plan}</TableCell>
                <TableCell>{won(c.mrr)}</TableCell>
                <TableCell>
                  <Badge color={badge.color}>{badge.label}</Badge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
