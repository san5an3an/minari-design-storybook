import * as React from "react";
import { cx } from "./cx";

export type ToastLayout = "fit" | "fixed";
export type ToastTone = "success" | "danger" | "warning" | "info";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  // 내용 크기 또는 컨테이너 전체 채움 여부
  layout?: ToastLayout;
  // 알림 종류, 시스템 팔레트 한정, info는 전용 색 없이 neutral 사용
  tone?: ToastTone;
  // 나가는 중 상태 표시, 삭제 전 부착하고 애니메이션 종료 후 제거
  leaving?: boolean;
  // 퇴장하며 위치 접기, 항목 빠지면 나머지 위치 이동. leaving과 함께 적용
  collapsing?: boolean;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ layout = "fit", tone, leaving = false, collapsing = false, children, className, ...rest }, ref) => (
    <div
      className={cx("ods-toast", `ods-toast--${layout}`, tone && `ods-toast--${tone}`, leaving && "ods-toast--leaving", collapsing && "ods-toast--collapsing", className)}
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

export type ToastRegionPosition = "top-start" | "top-center" | "top-end" | "bottom-start" | "bottom-center" | "bottom-end";
export interface ToastRegionProps extends React.HTMLAttributes<HTMLDivElement> {
  // 알림 표시 위치, 기본값 오른쪽 아래
  position?: ToastRegionPosition;
}
export const ToastRegion = React.forwardRef<HTMLDivElement, ToastRegionProps>(
  ({ position = "bottom-end", className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-toast-region", `ods-toast-region--${position}`, className)} {...rest}>
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

// 제목, 본문 세로 배치 영역
export const ToastContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-toast-content", className)} {...rest}>
      {children}
    </div>
  )
);
ToastContent.displayName = "ToastContent";

// 상황 요약 한 줄, 본문보다 크고 굵게 표시. 굵기만 다르면 위계 구분 안 되는 문제 있음
export const ToastTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-toast-title", className)} {...rest}>
      {children}
    </div>
  )
);
ToastTitle.displayName = "ToastTitle";

// 행 설명, 제목만으로 부족할 때만 사용. 없으면 제목이 메시지 역할
export const ToastBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-toast-body", className)} {...rest}>
      {children}
    </div>
  )
);
ToastBody.displayName = "ToastBody";

// 즉시 닫기 버튼
export const ToastClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-toast-close", className)} {...rest}>
      {children}
    </button>
  )
);
ToastClose.displayName = "ToastClose";

// 남은 시간 표시 띠, 소멸 임박 알림용
export const ToastProgress = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-toast-progress", className)} {...rest}>
      {children}
    </div>
  )
);
ToastProgress.displayName = "ToastProgress";
