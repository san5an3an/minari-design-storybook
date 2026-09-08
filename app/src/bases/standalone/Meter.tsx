import type { CSSProperties } from "react";
import { cx } from "../cx";
import type { MeterProps } from "../../systems/props";

// 저, 중, 고 비율. 합계 100, 기본 표본과 동일
const DEFAULT_BANDS = [50, 30, 20] as const;

export function Meter({
  label,
  value,
  at,
  bands = DEFAULT_BANDS,
  className,
  style,
}: MeterProps & { className?: string; style?: CSSProperties }) {
  const [low, mid, high] = bands;

  // style prop 수신. 컨테이너가 폭을 정해야 구간 비율이 보임
  return (
    <div className={cx("ods-meter", className)} style={style}>
      {/* 이름과 값이 모두 없을 때만 구분선 제외 */}
      {(label !== undefined || value !== undefined) && (
        <div className="ods-meter-head">
          {label !== undefined && <span className="ods-meter-label">{label}</span>}
          {value !== undefined && <span className="ods-meter-value">{value}</span>}
        </div>
      )}

      <div
        className="ods-meter-track"
        role="meter"
        aria-valuenow={at}
        aria-valuemin={0}
        aria-valuemax={100}
        // 문자열일 때만 전달. ReactNode 그대로 넣으면 [object Object]로 표시
        aria-label={typeof label === "string" ? label : undefined}
        // 단위 표기 유지. 숫자만으로는 뜻이 안 서기 때문임
        aria-valuetext={typeof value === "string" ? value : undefined}
      >
        <span className="ods-meter-band ods-meter-band--low" style={{ width: `${low}%` }} />
        <span className="ods-meter-band ods-meter-band--mid" style={{ width: `${mid}%` }} />
        <span className="ods-meter-band ods-meter-band--high" style={{ width: `${high}%` }} />
        {/* 위치는 인라인 left 값 사용. 값이 인스턴스마다 달라 CSS 고정값으로 적을 수 없음 */}
        <span className="ods-meter-marker" style={{ left: `${at}%` }} />
      </div>
    </div>
  );
}
