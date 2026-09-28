import { ChevronDown, ChevronUp } from "lucide-react";
import { cx } from "../cx";
import type { StatProps } from "../../systems/props";

export function Stat({
  label,
  value,
  delta,
  direction = "up",
  className,
}: StatProps & { className?: string }) {
  // 계약 표본 _UP, _DOWN과 동일한 아이콘 path 사용. 크기, 굵기는 CSS로 제어
  const Arrow = direction === "up" ? ChevronUp : ChevronDown;

  return (
    <div className={cx("ods-stat", className)}>
      {label !== undefined && <span className="ods-stat-label">{label}</span>}
      {value !== undefined && <span className="ods-stat-value">{value}</span>}
      {/* 증감 없는 지표는 줄 제외. 빈 span은 gap 때문에 안 맞음 */}
      {delta !== undefined && (
        <span className={cx("ods-stat-delta", `ods-stat-delta--${direction}`)}>
          <Arrow aria-hidden="true" />
          {delta}
        </span>
      )}
    </div>
  );
}
