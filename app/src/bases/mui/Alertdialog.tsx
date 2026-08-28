import * as React from "react";
import Box from "@mui/material/Box";
import MuiDialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export interface MuiAlertdialogProps {
  trigger?: React.ReactNode;
  variant?: "default" | "destructive";
  size?: "default" | "sm";
  title?: React.ReactNode;
  description?: React.ReactNode;
  media?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  actionLabel?: React.ReactNode;
  onAction?:  => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Alertdialog({
  trigger, variant = "default", size = "default", title, description, media,
  cancelLabel = "취소", actionLabel = "확인", onAction,
  open, defaultOpen, onOpenChange, className,
}: MuiAlertdialogProps) {
  const [own, setOwn] = React.useState(defaultOpen ?? false);
  const isOpen = open ?? own;
  const set = (v: boolean) => {
    if (open === undefined) setOwn(v);
    onOpenChange?.(v);
  };

  return (
    <>
      {trigger ? (
        <Box component="span" onClick={ => set(true)} sx={{ display: "inline-flex" }}>
          {trigger}
        </Box>
      ) : null}
      <MuiDialog
        className={className}
        open={isOpen}
        maxWidth={size === "sm" ? "xs" : "sm"}
        role="alertdialog"
        // 바깥 클릭으로 닫기 제외, ESC 유지. 접근성상 필요한 탈출 경로임
        onClose={(_e, reason) => {
          if (reason !== "backdropClick") set(false);
        }}
      >
        {media ? <Box sx={{ px: "1.5rem", pt: "1.5rem" }}>{media}</Box> : null}
        {title ? <DialogTitle>{title}</DialogTitle> : null}
        {description ? (
          <DialogContent>
            <DialogContentText>{description}</DialogContentText>
          </DialogContent>
        ) : null}
        {/* data-cancel, data-confirm은 검사용, 순서 바뀌면 반대를 누를 수 있음 */}
        <DialogActions>
          <Button data-cancel="true" onClick={ => set(false)} color="inherit">
            {cancelLabel}
          </Button>
          <Button
            data-confirm="true"
            data-destructive={variant === "destructive" ? "true" : undefined}
            onClick={ => { onAction?.; set(false); }}
            color={variant === "destructive" ? "error" : "primary"}
            variant="contained"
            autoFocus
          >
            {actionLabel}
          </Button>
        </DialogActions>
      </MuiDialog>
    </>
  );
}
