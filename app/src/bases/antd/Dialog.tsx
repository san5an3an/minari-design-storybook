import * as React from "react";
import { Modal } from "antd";
import { dialogActionsStyle } from "../dialogActions";

export interface AntDialogProps {
  open: boolean;
  onClose:  => void;
  title: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  stacked?: boolean;
}

export function Dialog({ open, onClose, title, children, actions, stacked }: AntDialogProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      title={
        <span
      // 제목 굵기는 직접 선언값으로 고정. 베이스 기본값을 따르면 MUI 500, Mantine 400으로 값이 달라 일정하지 않음
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--component-dialog-gap)",
            fontWeight: "var(--base-font-weight-semibold)",
          }}
        >
          {title}
        </span>
      }
      // 창 가장자리까지 닿는 띠 렌더링. 모달 여백 때문에 좌우 음수 마진 상쇄가 필수임
      styles={{ container: { paddingBottom: 0 }, footer: { marginTop: 0 } }}
      footer={
        actions ? (
          <div
            style={{
              ...dialogActionsStyle(stacked),
              marginInline: "calc(-1 * var(--component-dialog-padding))",
            }}
          >
            {actions}
          </div>
        ) : null
      }
    >
      {children}
    </Modal>
  );
}
