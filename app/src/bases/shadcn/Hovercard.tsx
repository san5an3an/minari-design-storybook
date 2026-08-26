import * as React from "react";
import {
  HoverCard as ShadcnHoverCard, HoverCardContent, HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { HovercardProps } from "../../systems/props";

export function Hovercard({
  trigger, side = "bottom", align = "center", children, className,
}: HovercardProps) {
  return (
    <ShadcnHoverCard>
      {trigger ? (
        React.isValidElement(trigger)
          ? <HoverCardTrigger render={trigger as React.ReactElement} />
          : <HoverCardTrigger>{trigger}</HoverCardTrigger>
      ) : null}
      <HoverCardContent side={side} align={align} className={className}>
        {children}
      </HoverCardContent>
    </ShadcnHoverCard>
  );
}
