import { cx } from "../cx";
import type { BadgeProps } from "../../systems/props";

export function Badge({
  variant = "solid",
  tone = "neutral",
  icon,
  iconPosition = "inline-start",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cx("ods-badge", `ods-badge--${variant}`, `ods-badge--${tone}`, className)}
      // 표시가 없으면 속성 자체를 생략. 빈 값이 있으면 CSS가 지정값으로 읽음
      data-icon={icon === undefined ? undefined : iconPosition}
    >
      {icon}
      {children}
    </span>
  );
}
