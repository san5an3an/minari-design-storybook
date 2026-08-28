import * as React from "react";
import { Drawer as AntDrawer } from "antd";
import type { DrawerProps } from "../../systems/props";

export function Drawer({
  trigger, title, footer, open, defaultOpen, onOpenChange, children, className,
}: DrawerProps) {
  const [own, setOwn] = React.useState(defaultOpen ?? false);
  const isOpen = open ?? own;
  const set = (v: boolean) => {
    if (open === undefined) setOwn(v);
    onOpenChange?.(v);
  };

  return (
    <>
      {/* 감싸는 요소 없이 트리거에 onClick 직접 연결 */}
      {React.isValidElement(trigger)
        ? React.cloneElement(trigger as React.ReactElement<{ onClick?:  => void }>,
                             { onClick:  => set(true) })
        : trigger}
      <AntDrawer
        className={className}
        open={isOpen}
        onClose={ => set(false)}
        title={title}
        footer={footer}
      >
        {children}
      </AntDrawer>
    </>
  );
}
