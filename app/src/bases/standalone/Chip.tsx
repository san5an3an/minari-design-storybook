import { X } from "lucide-react";
import { cx } from "../cx";
import type { ChipProps } from "../../systems/props";

export function Chip(props: ChipProps) {
  const { className, children, disabled } = props;

  if (props.onRemove) {
    return (
      <span className={cx("ods-chip", className)}>
        {children}
        <button
          type="button"
          className="ods-chip-remove"
          aria-label={props.removeLabel}
          onClick={props.onRemove}
          disabled={disabled}
        >
          {/* 계약 표본 _X와 동일한 구조. 크기, 색은 CSS로 제어 */}
          <X aria-hidden="true" />
        </button>
      </span>
    );
  }

  return (
    <button
      type="button"
      className={cx("ods-chip", className)}
      aria-pressed={props.pressed ?? false}
      onClick={props.onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
