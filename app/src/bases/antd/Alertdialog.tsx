import * as React from "react";
import { Modal } from "antd";
import type { AlertdialogProps } from "../../systems/props";

export function Alertdialog({
  trigger, variant, title, description, cancelLabel, actionLabel, onAction,
  open, defaultOpen, onOpenChange, children, className,
}: AlertdialogProps) {
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
      <Modal
        className={className}
        open={isOpen}
        title={title}
        onCancel={ => set(false)}
        onOk={ => { onAction?.; set(false); }}
        okText={actionLabel}
        cancelText={cancelLabel}
        okButtonProps={{ danger: variant === "destructive" }}
        // Dialog와 구분되는 부분
        mask={{ closable: false }}
        keyboard={false}
      >
        {description ?? children}
      </Modal>
    </>
  );
}
