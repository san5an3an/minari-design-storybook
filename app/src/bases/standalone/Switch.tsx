import { cx } from "../cx";
import type { SwitchImpl, SwitchProps } from "../../systems/props";

function SwitchRoot({
  id,
  size = "md",
  checked,
  defaultChecked,
  disabled,
  onCheckedChange,
  description,
  children,
  className,
  "aria-label": ariaLabel,
  "aria-invalid": ariaInvalid,
}: SwitchProps) {
  return (
    <label className={cx("ods-switch", `ods-switch--${size}`, className)}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-invalid={ariaInvalid}
        onChange={onCheckedChange ? (e) => onCheckedChange(e.target.checked) : undefined}
      />
      <span className="ods-switch-track" />
      {(children !== undefined || description !== undefined) && (
        // 클래스 미지정 위치. 계약에 해당 레이어가 없어 라벨과 설명을 세로로만 배치해 놓음
        <span>
          {children}
          {description !== undefined && (
            <span className="ods-switch-description">{description}</span>
          )}
        </span>
      )}
    </label>
  );
}

// 카드 전체 클릭 영역 지정
function Card({
  title,
  description,
  className,
  children,
  ...rest
}: SwitchProps & { title?: React.ReactNode; description?: React.ReactNode }) {
  return (
    <label className={cx("ods-switch-card", className)}>
      <span>
        {title}
        {description !== undefined && (
          <span className="ods-switch-description">{description}</span>
        )}
      </span>
      {/* 스위치를 그대로 삽입. 겹치면 래퍼가 사라져 위치 어긋나는 문제 있음 */}
      <SwitchRoot {...rest}>{children}</SwitchRoot>
    </label>
  );
}

export const Switch = Object.assign(SwitchRoot, { Card }) as SwitchImpl;
