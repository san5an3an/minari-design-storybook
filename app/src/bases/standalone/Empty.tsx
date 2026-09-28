import * as React from "react";
import { cx } from "../cx";
import type { EmptyImpl, EmptyProps } from "../../systems/props";

type Part = { className?: string; children?: React.ReactNode };

function EmptyRoot({ className, children }: EmptyProps) {
  return (
    <div className={cx("ods-empty", className)} role="status">
      {children}
    </div>
  );
}

// 계약에 없는 레이어. 자식을 ods-empty 직계 자식으로 전달
function Header({ children }: Part) {
  return <>{children}</>;
}

// 표시 위치. 텍스트 대체 아님. 부재 사유 설명이 표시보다 우선임
function Media({ className, children }: Part & { variant?: string }) {
  return <span className={cx("ods-empty-icon", className)}>{children}</span>;
}

function Title({ className, children }: Part) {
  return <p className={cx("ods-empty-title", className)}>{children}</p>;
}

function Description({ className, children }: Part) {
  return <p className={cx("ods-empty-body", className)}>{children}</p>;
}

// 다음 동작 위치
function Content({ className, children }: Part) {
  return <div className={cx("ods-empty-actions", className)}>{children}</div>;
}

export const Empty = Object.assign(EmptyRoot, {
  Header,
  Media,
  Title,
  Description,
  Content,
}) as EmptyImpl;
