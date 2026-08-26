import MuiTooltip from "@mui/material/Tooltip";
import type { TooltipProps } from "../../systems/props";

export function Tooltip({ children, content, side = "top" }: TooltipProps) {
  return (
    <MuiTooltip
      title={content}
      // side 값을 MUI placement 로 변환
      placement={side}
      slotProps={{
        tooltip: {
          sx: {
            background: "var(--component-tooltip-bg)",
            color: "var(--component-tooltip-fg)",
            borderRadius: "var(--component-tooltip-radius)",
            paddingInline: "var(--component-tooltip-padding-inline)",
            paddingBlock: "var(--component-tooltip-padding-block)",
            fontSize: "var(--component-tooltip-font-size)",
            maxWidth: "var(--component-tooltip-max-width)",
            boxShadow: "var(--component-tooltip-shadow)",
            // tooltipPlacement* 값 전체 재정의. 한쪽만 덮으면 위아래와 좌우 안 맞음
            "&.MuiTooltip-tooltip": { margin: "var(--component-tooltip-offset)" },
          },
        },
      }}
    >
      <span style={{ display: "inline-flex" }}>{children}</span>
    </MuiTooltip>
  );
}
