import * as React from "react";
import { Drawer } from "antd";
import type { SheetProps } from "../../systems/props";

export function Sheet({
  trigger, side = "right", title, footer, open, defaultOpen, onOpenChange, children, className,
}: SheetProps) {
  const [own, setOwn] = React.useState(defaultOpen ?? false);
  const isOpen = open ?? own;
  const set = (v: boolean) => {
    if (open === undefined) setOwn(v);
    onOpenChange?.(v);
  };

  return (
    <>
      {/* 공식 데모처럼 onClick을 트리거 자체에 지정 */}
      {React.isValidElement(trigger)
        ? React.cloneElement(trigger as React.ReactElement<{ onClick?:  => void }>,
                             { onClick:  => set(true) })
        : trigger}
      <Drawer
        className={className}
        placement={side}
        open={isOpen}
        onClose={ => set(false)}
        title={title}
        footer={footer}
      >
        {children}
      </Drawer>
    </>
  );
}
