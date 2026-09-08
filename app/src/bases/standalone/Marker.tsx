import * as React from "react";
import { cx } from "../cx";
import type { MarkerImpl, MarkerProps } from "../../systems/props";

function MarkerRoot({ variant = "default", role, className, children }: MarkerProps) {
  return (
    <div className={cx("ods-marker", `ods-marker--${variant}`, className)} role={role}>
      {children}
    </div>
  );
}

// 표시. 장식용, 스크린리더가 읽지 않음. 같은 의미가 Content에도 있어야 하는 제약임
function Icon({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <span className={cx("ods-marker-icon", className)} aria-hidden="true">
      {children}
    </span>
  );
}

// 한 행 텍스트, 의미를 결정하는 값
function Content({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <span className={cx("ods-marker-content", className)}>{children}</span>;
}

export const Marker = Object.assign(MarkerRoot, { Icon, Content }) as MarkerImpl;
