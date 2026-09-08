import { useEffect, useRef } from "react";
import { Check, Minus } from "lucide-react";
import { cx } from "../cx";
import type { CheckboxImpl, CheckboxProps } from "../../systems/props";

function CheckboxRoot({
  id,
  checked,
  defaultChecked,
  indeterminate,
  disabled,
  onCheckedChange,
  description,
  children,
  className,
  "aria-invalid": ariaInvalid,
}: CheckboxProps) {
  const ref = useRef<HTMLInputElement>(null);

  // React가 관리 안 하는 속성. 매 렌더마다 지정 필요, 안 하면 접근성 문제 있음
  useEffect( => {
    if (ref.current) ref.current.indeterminate = indeterminate === true;
  }, [indeterminate]);

  return (
    <label className={cx("ods-checkbox", className)}>
      <input
        ref={ref}
        type="checkbox"
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        // 값 없으면 속성 제외. false 를 항상 붙이면 부분선택과 미판단이 구별되지 않음
        data-indeterminate={indeterminate ? "true" : undefined}
        aria-invalid={ariaInvalid}
        onChange={onCheckedChange ? (e) => onCheckedChange(e.target.checked) : undefined}
      />
      <span className="ods-checkbox-box">
        {/* 계약 표본과 동일한 svg 두 개 구조. 표시 여부 CSS 제어 */}
        <Check className="ods-checkbox-check" aria-hidden="true" />
        <Minus className="ods-checkbox-dash" aria-hidden="true" />
      </span>
      <span>
        {children}
        {description !== undefined && (
          <span className="ods-checkbox-description">{description}</span>
        )}
      </span>
    </label>
  );
}

// 여러 항목 그룹 위치, 간격은 계약이 지정
function Group({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <div className={cx("ods-checkbox-group", className)}>{children}</div>;
}

export const Checkbox = Object.assign(CheckboxRoot, { Group }) as CheckboxImpl;
