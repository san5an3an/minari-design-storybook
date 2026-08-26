import * as React from "react";
import { cx } from "./cx";

export interface AlertdialogProps extends React.HTMLAttributes<HTMLDivElement> {
  // 창 크기. sm은 한 가지만 묻는 짧은 창임
  size?: "default" | "sm";
  // 되돌릴 수 없는 작업 여부. destructive면 확인 버튼과 배지가 danger 색임
  variant?: "default" | "destructive";
}

export const Alertdialog = React.forwardRef<HTMLDivElement, AlertdialogProps>(
  ({ size = "default", variant = "default", children, className, ...rest }, ref) => (
    <div role="alertdialog"
      className={cx("ods-alertdialog", className)}
      data-size={size}
      data-variant={variant}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Alertdialog.displayName = "Alertdialog";

// 성격 표시 배지. 색보다 모양으로 먼저 전달
export const AlertDialogMedia = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-alertdialog-media", className)} {...rest}>
      {children}
    </span>
  )
);
AlertDialogMedia.displayName = "AlertDialogMedia";

// 발생 이벤트 요약 표시
export const AlertDialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...rest }, ref) => (
    <h2 ref={ref} className={cx("ods-alertdialog-title", className)} {...rest}>
      {children}
    </h2>
  )
);
AlertDialogTitle.displayName = "AlertDialogTitle";

// 되돌릴 수 없다는 사실을 여기 적음
export const AlertDialogDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cx("ods-alertdialog-description", className)} {...rest}>
      {children}
    </p>
  )
);
AlertDialogDescription.displayName = "AlertDialogDescription";

// 두 버튼이 놓이는 위치
export const AlertDialogFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-alertdialog-footer", className)} {...rest}>
      {children}
    </div>
  )
);
AlertDialogFooter.displayName = "AlertDialogFooter";
