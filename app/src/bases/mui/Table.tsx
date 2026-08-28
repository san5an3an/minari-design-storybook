import * as React from "react";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type Kid = { children?: React.ReactNode; className?: string };

function TableRoot({ children, className }: Kid) {
  // TableContainer 사용. 넓은 표는 안에서 가로 스크롤돼야 바깥이 밀리지 않음
  return (
    <TableContainer className={className}>
      <MuiTable size="small">{children}</MuiTable>
    </TableContainer>
  );
}

// 머리 그룹, thead
const Header = ({ children, className }: Kid) => (
  <TableHead className={className}>{children}</TableHead>
);
// tbody 그룹
const Body = ({ children, className }: Kid) => (
  <TableBody className={className}>{children}</TableBody>
);
// 테이블 바닥 그룹, tfoot 태그
const Footer = ({ children, className }: Kid) => (
  <TableFooter className={className}>{children}</TableFooter>
);
// 한 행, tr 요소
const Row = ({ children, className }: Kid) => (
  <TableRow className={className}>{children}</TableRow>
);
// 머리 셀, th
const Head = ({ children, className }: Kid) => (
  <TableCell className={className} component="th" scope="col">
    {children}
  </TableCell>
);
// 일반 셀 <td>
const Cell = ({ children, className }: Kid) => (
  <TableCell className={className}>{children}</TableCell>
);
// 표 caption 텍스트
const Caption = ({ children, className }: Kid) => (
  <caption className={className}>{children}</caption>
);

export const Table = Object.assign(TableRoot, {
  Header, Body, Footer, Row, Head, Cell, Caption,
});
