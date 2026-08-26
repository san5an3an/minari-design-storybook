import * as React from "react";
import { cx } from "./cx";

export type DialogProps = React.HTMLAttributes<HTMLDivElement>;

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ children, className, ...rest }, ref) => (
    <div role="dialog" aria-modal="true"
      className={cx("ods-dialog", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Dialog.displayName = "Dialog";

// 뒤를 덮는 배경 오버레이
export const DialogScrim = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-dialog-scrim", className)} {...rest}>
      {children}
    </div>
  )
);
DialogScrim.displayName = "DialogScrim";

// 제목
export const DialogTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-dialog-title", className)} {...rest}>
      {children}
    </div>
  )
);
DialogTitle.displayName = "DialogTitle";

// 본문
export const DialogBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-dialog-body", className)} {...rest}>
      {children}
    </div>
  )
);
DialogBody.displayName = "DialogBody";

// 버튼 그룹 항상 하단 고정 배치
export interface DialogActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  // 버튼 3개 이상이면 세로 배치로 전환
  stacked?: boolean;
}
export const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>(
  ({ stacked = false, className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-dialog-actions", stacked && "ods-dialog-actions--stacked", className)} {...rest}>
      {children}
    </div>
  )
);
DialogActions.displayName = "DialogActions";
