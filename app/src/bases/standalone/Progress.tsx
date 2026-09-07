import { cx } from "../cx";
import type { ProgressProps } from "../../systems/props";

export function Progress({
  value = 0,
  lg,
  indeterminate,
  label,
  showValue,
}: ProgressProps) {
  // 값이 0~100 벗어나면 막대가 track 밖으로 그려짐. 자르지 않고 그대로 표시
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div className={cx("ods-progress", lg && "ods-progress--lg", indeterminate && "ods-progress--indeterminate")}>
      {(label !== undefined || showValue) && (
        <div className="ods-progress-head">
          {label !== undefined && <span>{label}</span>}
          {/* 완료 시점 불명 시 수치 표시 생략 */}
          {showValue && !indeterminate && <span>{pct}%</span>}
        </div>
      )}

      <div
        className="ods-progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={indeterminate ? undefined : pct}
        aria-label={typeof label === "string" ? label : undefined}
      >
        {/* 무한 막대 길이는 CSS가 결정. 폭 지정 시 애니메이션이 깨지는 문제가 있음 */}
        <div className="ods-progress-bar" style={indeterminate ? undefined : { width: `${pct}%` }} />
      </div>
    </div>
  );
}
