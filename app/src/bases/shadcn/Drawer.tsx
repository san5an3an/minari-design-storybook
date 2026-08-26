import * as React from "react";
import {
  Drawer as ShadcnDrawer, DrawerContent, DrawerDescription, DrawerFooter,
  DrawerHeader, DrawerSwipeHandle, DrawerTitle, DrawerTrigger,
} from "@/components/ui/drawer";
import type { DrawerProps } from "../../systems/props";

export function Drawer({
  trigger, title, description, footer, children, className,
  open, defaultOpen, onOpenChange,
}: DrawerProps) {
  return (
    <ShadcnDrawer open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {trigger ? (
        React.isValidElement(trigger)
          ? <DrawerTrigger render={trigger as React.ReactElement} />
          : <DrawerTrigger>{trigger}</DrawerTrigger>
      ) : null}
      <DrawerContent className={className}>
        <DrawerSwipeHandle />
        {title || description ? (
          <DrawerHeader>
            {title ? <DrawerTitle>{title}</DrawerTitle> : null}
            {description ? <DrawerDescription>{description}</DrawerDescription> : null}
          </DrawerHeader>
        ) : null}
        {children}
        {footer ? <DrawerFooter>{footer}</DrawerFooter> : null}
      </DrawerContent>
    </ShadcnDrawer>
  );
}
