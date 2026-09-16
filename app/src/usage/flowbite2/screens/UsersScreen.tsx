import { Badge, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { USERS, type User } from "../data";
import type { ScreenProps } from "../screens";

const ROLE_COLOR: Record<User["role"], string> = {
  관리자: "purple",
  편집자: "info",
  뷰어: "gray",
};
const STATUS_COLOR: Record<User["status"], string> = {
  활성: "success",
  정지: "failure",
};

export function UsersScreen({ onNavigate, onSelect }: ScreenProps) {
  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
    <div className="overflow-x-auto">
      <Table style={{ minWidth: "560px" }}>
        <TableHead>
          <TableRow>
            <TableHeadCell>이름</TableHeadCell>
            <TableHeadCell>이메일</TableHeadCell>
            <TableHeadCell>역할</TableHeadCell>
            <TableHeadCell>상태</TableHeadCell>
            <TableHeadCell>마지막 로그인</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {USERS.map((u) => (
            <TableRow key={u.id} onClick={ => open(u.id)} style={{ cursor: "pointer" }}>
              <TableCell className="font-medium">{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell><Badge color={ROLE_COLOR[u.role]}>{u.role}</Badge></TableCell>
              <TableCell><Badge color={STATUS_COLOR[u.status]}>{u.status}</Badge></TableCell>
              <TableCell>{u.lastLoginLabel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
