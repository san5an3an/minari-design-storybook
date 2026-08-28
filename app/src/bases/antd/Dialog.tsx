import * as React from "react";
import { Modal } from "antd";

export interface AntDialogProps {
  open: boolean;
  onClose:  => void;
  title: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  stacked?: boolean;
}

export function Dialog({ open, onClose, title, children, actions }: AntDialogProps) {
  return (
    <Modal open={open} onCancel={onClose} title={title} footer={actions ?? null}>
      {children}
    </Modal>
  );
}
