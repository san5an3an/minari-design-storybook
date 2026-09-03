import * as React from "react";
import { cx } from "./cx";

export type ToastLayout = "fit" | "fixed";
export type ToastTone = "success" | "danger" | "warning";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  // 내용 크기 또는 컨테이너 전체 채움 여부
  layout?: ToastLayout;
  // 알림 종류, 시스템 팔레트로 한정
  tone?: ToastTone;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ layout = "fit", tone, children, className, ...rest }, ref) => (
    <div
      className={cx("ods-toast", `ods-toast--${layout}`, tone && `ods-toast--${tone}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Toast.displayName = "Toast";

// 종류 유무로 표시 여부 지정
export const ToastIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  ({ className, children, ...rest }, ref) => (
    <svg ref={ref} className={cx("ods-toast-icon", className)} {...rest}>
      {children}
    </svg>
  )
);
ToastIcon.displayName = "ToastIcon";

// 떠 있는 위치에 role="status" 지정
export const ToastRegion = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-toast-region", className)} {...rest}>
      {children}
    </div>
  )
);
ToastRegion.displayName = "ToastRegion";

// 되돌리기 같은 동작. 하나까지
export const ToastAction = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-toast-action", className)} {...rest}>
      {children}
    </button>
  )
);
ToastAction.displayName = "ToastAction";
