import * as React from "react";
import {
  Sheet as ShadcnSheet, SheetContent, SheetDescription, SheetFooter,
  SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import type { SheetProps } from "../../systems/props";

export function Sheet({
  trigger, side = "right", title, description, footer, children, className,
  open, defaultOpen, onOpenChange,
}: SheetProps) {
  return (
    <ShadcnSheet open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {trigger ? (
        React.isValidElement(trigger)
          ? <SheetTrigger render={trigger as React.ReactElement} />
          : <SheetTrigger>{trigger}</SheetTrigger>
      ) : null}
      <SheetContent side={side} className={className}>
        {title || description ? (
          <SheetHeader>
            {title ? <SheetTitle>{title}</SheetTitle> : null}
            {description ? <SheetDescription>{description}</SheetDescription> : null}
          </SheetHeader>
        ) : null}
        {children}
        {footer ? <SheetFooter>{footer}</SheetFooter> : null}
      </SheetContent>
    </ShadcnSheet>
  );
}
