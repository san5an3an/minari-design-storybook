import * as React from "react";
import {
  Popover as ShadcnPopover, PopoverContent, PopoverDescription,
  PopoverHeader, PopoverTitle, PopoverTrigger,
} from "@/components/ui/popover";
import type { PopoverProps } from "../../systems/props";

export function Popover({
  trigger, title, description, side = "bottom", align = "center",
  children, className, open, defaultOpen, onOpenChange,
}: PopoverProps) {
  return (
    <ShadcnPopover open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {trigger ? (
        React.isValidElement(trigger)
          ? <PopoverTrigger render={trigger as React.ReactElement} />
          : <PopoverTrigger>{trigger}</PopoverTrigger>
      ) : null}
      <PopoverContent side={side} align={align} className={className}>
        {title || description ? (
          <PopoverHeader>
            {title ? <PopoverTitle>{title}</PopoverTitle> : null}
            {description ? <PopoverDescription>{description}</PopoverDescription> : null}
          </PopoverHeader>
        ) : null}
        {children}
      </PopoverContent>
    </ShadcnPopover>
  );
}
