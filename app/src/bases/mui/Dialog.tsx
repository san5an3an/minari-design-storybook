import * as React from "react";
import MuiDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { dialogActionsStyle } from "../dialogActions";

export interface MuiDialogProps {
  open: boolean;
  onClose:  => void;
  title: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  stacked?: boolean;
}

export function Dialog({ open, onClose, title, children, actions, stacked }: MuiDialogProps) {
  return (
    <MuiDialog open={open} onClose={onClose}>
      <DialogTitle
      // 제목 굵기는 직접 선언값으로 고정. 베이스 기본값을 따르면 MUI 500, Mantine 400으로 값이 달라 일정하지 않음
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "var(--component-dialog-gap)",
          fontWeight: "var(--base-font-weight-semibold)",
        }}
      >
        {title}
      </DialogTitle>
      {children ? <DialogContent>{children}</DialogContent> : null}
      {actions ? (
        // 세로 배치에도 마크업 순서 유지, column-reverse로 확인이 위 취소가 아래 위치
        <DialogActions sx={dialogActionsStyle(stacked)}>
          {actions}
        </DialogActions>
      ) : null}
    </MuiDialog>
  );
}
