import { Tooltip as AntTooltip } from "antd";
import type { TooltipProps } from "../../systems/props";

export function Tooltip({ children, content, side = "top" }: TooltipProps) {
  return (
    <AntTooltip title={content} placement={side}>
      {children}
    </AntTooltip>
  );
}
