import { Popover as AntPopover } from "antd";
import type { PopoverProps } from "../../systems/props";

export function Popover({
  trigger, title, description, side = "bottom", align = "center",
  open, defaultOpen, onOpenChange, children, className,
}: PopoverProps) {
  // 가로 변에서 start/end는 왼쪽, 오른쪽. 세로 변은 위, 아래 의미
  const lateral = side === "top" || side === "bottom";
  const tail = align === "center" ? "" : lateral
    ? (align === "start" ? "Left" : "Right")
    : (align === "start" ? "Top" : "Bottom");

  return (
    <AntPopover
      className={className}
      placement={`${side}${tail}` as never}
      title={title}
      content={description ?? children}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      {trigger}
    </AntPopover>
  );
}
