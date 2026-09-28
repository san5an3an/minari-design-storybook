import * as React from "react";
import { cx } from "../cx";
import type { KbdImpl, KbdProps } from "../../systems/props";

function KbdRoot({ className, children }: KbdProps) {
  return <kbd className={cx("ods-kbd", className)}>{children}</kbd>;
}

// 조합키 그룹, keys 지정 시 키마다 kbd 하나씩 생성
function Group({
  keys,
  className,
  children,
}: {
  keys?: string[];
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span className={cx("ods-kbd-group", className)}>
      {keys ? keys.map((k) => <kbd key={k} className="ods-kbd">{k}</kbd>) : children}
    </span>
  );
}

// Object.assign으로 결합해 Kbd.Group과 동일한 모양 유지
export const Kbd = Object.assign(KbdRoot, { Group }) as KbdImpl;
