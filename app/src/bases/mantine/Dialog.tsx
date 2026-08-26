import * as React from "react";
import { Group, Modal } from "@mantine/core";
import { dialogActionsStyle } from "../dialogActions";

export interface MantineDialogProps {
  open: boolean;
  onClose:  => void;
  title: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  stacked?: boolean;
}

export function Dialog({ open, onClose, title, children, actions, stacked }: MantineDialogProps) {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      centered
      // 제목 굵기는 직접 선언값으로 고정. 베이스 기본값을 따르면 MUI 500, 이 계열은 400으로 값이 달라 일정하지 않음
      styles={{ title: { fontWeight: "var(--base-font-weight-semibold)" } }}
      // title은 값이라 표시를 제목 옆에 배치
      title={
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--component-dialog-gap)",
          }}
        >
          {title}
        </span>
      }
    >
      {children}
      {actions ? (
        // 마크업 순서는 항상 취소, 확인. column-reverse라 확인이 위 순서임
        <Group mt="md" style={dialogActionsStyle(stacked)}>
          {actions}
        </Group>
      ) : null}
    </Modal>
  );
}
