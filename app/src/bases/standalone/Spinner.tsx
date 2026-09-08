import { cx } from "../cx";
import type { SpinnerProps } from "../../systems/props";

export function Spinner({ onFill, label }: SpinnerProps) {
  const circle = (
    <span className={cx("ods-spinner", onFill && "ods-spinner--on-fill")} aria-hidden="true" />
  );

  // 텍스트 없으면 감쌀 필요 없음. 빈 status는 소리 공간만 차지하는 낭비임
  if (label === undefined) return circle;

  return (
    <span className="ods-spinner-block" role="status">
      {circle}
      {label}
    </span>
  );
}
