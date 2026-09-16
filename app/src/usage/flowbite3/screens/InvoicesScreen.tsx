import { Badge, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { INVOICES, type Invoice } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<Invoice["status"], string> = {
  "결제 완료": "success",
  미결제: "warning",
  연체: "failure",
};

const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;

export function InvoicesScreen({ onNavigate, onSelect }: ScreenProps) {
  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
    <div className="overflow-x-auto">
      <Table style={{ minWidth: "560px" }}>
        <TableHead>
          <TableRow>
            <TableHeadCell>번호</TableHeadCell>
            <TableHeadCell>고객</TableHeadCell>
            <TableHeadCell>금액</TableHeadCell>
            <TableHeadCell>상태</TableHeadCell>
            <TableHeadCell>발행일</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {INVOICES.map((inv) => (
            <TableRow key={inv.id} onClick={ => open(inv.id)} style={{ cursor: "pointer" }}>
              <TableCell className="font-medium">{inv.number}</TableCell>
              <TableCell>{inv.customer}</TableCell>
              <TableCell>{won(inv.total)}</TableCell>
              <TableCell><Badge color={STATUS_COLOR[inv.status]}>{inv.status}</Badge></TableCell>
              <TableCell>{inv.issuedLabel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
