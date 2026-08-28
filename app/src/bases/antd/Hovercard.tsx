import { Popover as AntPopover } from "antd";
import type { HovercardProps } from "../../systems/props";

export function Hovercard({
  trigger, side = "bottom", align = "center", children, className,
}: HovercardProps) {
  const lateral = side === "top" || side === "bottom";
  const tail = align === "center" ? "" : lateral
    ? (align === "start" ? "Left" : "Right")
    : (align === "start" ? "Top" : "Bottom");

  return (
    <AntPopover
      className={className}
      // 마우스 오버 시 표시. Popover와 구분되는 유일한 차이점
      trigger="hover"
      placement={`${side}${tail}` as never}
      content={children}
    >
      {trigger}
    </AntPopover>
  );
}
