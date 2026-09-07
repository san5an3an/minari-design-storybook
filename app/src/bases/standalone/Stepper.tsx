import type { ChangeEvent } from "react";
import type { StepperProps } from "../../systems/props";

export function Stepper({
  value,
  min,
  max,
  onValueChange,
  "aria-label": ariaLabel,
}: StepperProps) {
  const atMin = min !== undefined && value <= min;
  const atMax = max !== undefined && value >= max;

  // 한계값 초과 호출 막기. 버튼 비활성화, 입력 필드는 직접 입력 가능
  const clamp = (n: number) =>
    Math.min(max ?? Number.POSITIVE_INFINITY, Math.max(min ?? Number.NEGATIVE_INFINITY, n));

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    const n = Number(e.target.value);
    // 빈 필드나 문자는 값 대신 그대로 통과
    if (Number.isFinite(n)) onValueChange?.(clamp(n));
  };

  return (
    <div className="ods-stepper">
      <button
        type="button"
        aria-label="줄이기"
        disabled={atMin}
        onClick={ => onValueChange?.(clamp(value - 1))}
      >
        −
      </button>
      <input
        type="number"
        aria-label={ariaLabel ?? "수량"}
        value={value}
        min={min}
        max={max}
        onChange={onInput}
      />
      <button
        type="button"
        aria-label="늘리기"
        disabled={atMax}
        onClick={ => onValueChange?.(clamp(value + 1))}
      >
        +
      </button>
    </div>
  );
}
