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
        {/* Header 아래 여백(pb-0)과 Footer 위 여백(pt-0)은 원본 유지하고 나머지 여백만 연결. drawer-gap, drawer-radius 는 받을 요소가 분명하지 않아 제외함 */}
        {title || description ? (
          <DrawerHeader className="px-(--component-drawer-padding) pt-(--component-drawer-padding)">
            {title ? <DrawerTitle>{title}</DrawerTitle> : null}
            {description ? <DrawerDescription>{description}</DrawerDescription> : null}
          </DrawerHeader>
        ) : null}
        {children}
        {footer ? (
          <DrawerFooter className="px-(--component-drawer-padding) pb-(--component-drawer-padding)">{footer}</DrawerFooter>
        ) : null}
      </DrawerContent>
    </ShadcnDrawer>
  );
}
