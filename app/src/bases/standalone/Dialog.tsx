import * as React from "react";
import { cx } from "../cx";

export interface StandaloneDialogProps {
  open: boolean;
  onClose:  => void;
  title: React.ReactNode;
  children?: React.ReactNode;
  // 버튼 그룹 마크업 순서 취소-확인 고정
  actions?: React.ReactNode;
  // 버튼 3개 이상 여부
  stacked?: boolean;
}

export function Dialog({ open, onClose, title, children, actions, stacked }: StandaloneDialogProps) {
  const ref = React.useRef<HTMLDialogElement>(null);

  React.useEffect( => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal;
    if (!open && el.open) el.close;
  }, [open]);

  return (
    <dialog ref={ref} className="ods-dialog-host" onClose={onClose} onCancel={onClose}>
      <div className="ods-dialog">
        <div className="ods-dialog-title">{title}</div>
        {children ? <div className="ods-dialog-body">{children}</div> : null}
        {actions ? (
          <div className={cx("ods-dialog-actions", stacked && "ods-dialog-actions--stacked")}>
            {actions}
          </div>
        ) : null}
      </div>
    </dialog>
  );
}
