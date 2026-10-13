import * as React from "react";
import {
  Popover as ShadcnPopover, PopoverContent, PopoverDescription,
  PopoverHeader, PopoverTitle, PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { usePopupSafeArea } from "./internal/popupCollision";
import type { PopoverProps } from "../../systems/props";

export function Popover({
  trigger, title, description, side = "bottom", align = "center",
  children, className, open, defaultOpen, onOpenChange,
}: PopoverProps) {
  // 상위에서 받은 safe area 안에서만 Popover가 열리도록 collisionPadding 적용. 값이 없으면 기존 동작 유지함
  const safe = usePopupSafeArea();
  return (
    <ShadcnPopover open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {trigger ? (
        React.isValidElement(trigger)
          ? <PopoverTrigger render={trigger as React.ReactElement} />
          : <PopoverTrigger>{trigger}</PopoverTrigger>
      ) : null}
      <PopoverContent
        side={side}
        align={align}
        collisionPadding={safe?.collisionPadding}
        className={cn("gap-(--component-popover-gap) rounded-(--component-popover-radius) p-(--component-popover-padding)", className)}
      >
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
