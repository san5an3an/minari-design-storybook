import { cx } from "../cx";
import type { LabelProps } from "../../systems/props";

export function Label({
  required,
  disabled,
  hint,
  htmlFor,
  children,
  className,
  "aria-invalid": ariaInvalid,
}: LabelProps) {
  return (
    <label
      className={cx(
        "ods-label",
        required && "ods-label--required",
        disabled && "ods-label--disabled",
        className,
      )}
      htmlFor={htmlFor}
      // 속성 제외. aria-invalid=false 상시 부착 시 판단 여부가 구별되지 않음
      aria-invalid={ariaInvalid}
    >
      {children}
      {hint !== undefined && <span className="ods-label-hint">{hint}</span>}
    </label>
  );
}
