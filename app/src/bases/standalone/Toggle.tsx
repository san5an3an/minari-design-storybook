import * as React from "react";
import { cx } from "../cx";
import type { ToggleProps } from "../../systems/props";

export function Toggle({
  variant = "plain",
  size = "md",
  pressed,
  defaultPressed = false,
  onPressedChange,
  disabled,
  children,
  className,
}: ToggleProps) {
  const [inner, setInner] = React.useState(defaultPressed);
  const isControlled = pressed !== undefined;
  const on = isControlled ? pressed : inner;

  return (
    <button
      type="button"
      className={cx("ods-toggle", `ods-toggle--${variant}`, `ods-toggle--${size}`, className)}
      aria-pressed={on}
      disabled={disabled}
      onClick={ => {
        const next = !on;
        // 제어 컴포넌트면 값을 여기서 변경하지 않음. 변경하면 호출 측 값과 상태가 두 벌이 되어 다음 렌더링에서 되돌아가며 깜빡임
        if (!isControlled) setInner(next);
        onPressedChange?.(next);
      }}
    >
      {children}
    </button>
  );
}
