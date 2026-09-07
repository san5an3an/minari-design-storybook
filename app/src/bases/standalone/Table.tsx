import type { ReactNode } from "react";
import { cx } from "../cx";
import type { TableImpl, TableProps } from "../../systems/props";

type Part = { className?: string; children?: ReactNode };

function TableRoot({ className, children }: TableProps) {
  return <table className={cx("ods-table", className)}>{children}</table>;
}

function Header({ className, children }: Part) {
  return <thead className={className}>{children}</thead>;
}

function Body({ className, children }: Part) {
  return <tbody className={className}>{children}</tbody>;
}

// 합계처럼 행에 나열해도 다른 항목과 섞이면 안 되는 값 위치
function Footer({ className, children }: Part) {
  return <tfoot className={className}>{children}</tfoot>;
}

function Row({ className, children }: Part) {
  return <tr className={className}>{children}</tr>;
}

// 열 이름 필드는 th 요소 사용, th라야 스크린리더가 이름도 함께 전달되는 구조임
function Head({ className, children }: Part) {
  return <th className={className}>{children}</th>;
}

function Cell({ className, children }: Part) {
  return <td className={className}>{children}</td>;
}

function Caption({ className, children }: Part) {
  return <caption className={className}>{children}</caption>;
}

export const Table = Object.assign(TableRoot, {
  Header,
  Body,
  Footer,
  Row,
  Head,
  Cell,
  Caption,
}) as TableImpl;
