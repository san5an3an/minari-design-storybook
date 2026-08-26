import {
  Tooltip as ShadcnTooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import type { TooltipProps } from "../../systems/props";

export function Tooltip({ children, content, side = "top" }: TooltipProps) {
  return (
    <TooltipProvider>
      <ShadcnTooltip>
        <TooltipTrigger render={<span />}>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          style={{
            background: "var(--component-tooltip-bg)",
            color: "var(--component-tooltip-fg)",
            borderRadius: "var(--component-tooltip-radius)",
            paddingInline: "var(--component-tooltip-padding-inline)",
            paddingBlock: "var(--component-tooltip-padding-block)",
            fontSize: "var(--component-tooltip-font-size)",
            maxWidth: "var(--component-tooltip-max-width)",
            boxShadow: "var(--component-tooltip-shadow)",
            marginBlock: "var(--component-tooltip-offset)",
          }}
        >
          {content}
        </TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  );
}
