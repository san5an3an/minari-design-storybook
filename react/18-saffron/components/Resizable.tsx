import * as React from "react";
import { cx } from "./cx";

export type ResizableOrientation = "horizontal" | "vertical";

export interface ResizableProps extends React.HTMLAttributes<HTMLDivElement> {
  // 가로 배치인지 세로 배치인지 여부
  orientation?: ResizableOrientation;
}

export const Resizable = React.forwardRef<HTMLDivElement, ResizableProps>(
  ({ orientation = "horizontal", children, className, ...rest }, ref) => (
    <div
      className={cx("ods-resizable", `ods-resizable--${orientation}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Resizable.displayName = "Resizable";

// 크기 변경 위치. 초기 크기는 각자 따로 지정
export const ResizablePanel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-resizable-panel", className)} {...rest}>
      {children}
    </div>
  )
);
ResizablePanel.displayName = "ResizablePanel";

// 경계 이동 위치
export interface ResizableHandleProps extends React.HTMLAttributes<HTMLDivElement> {
  // 잡는 눈금 표시
  withHandle?: boolean;
}
export const ResizableHandle = React.forwardRef<HTMLDivElement, ResizableHandleProps>(
  ({ withHandle = false, className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-resizable-handle", withHandle && "ods-resizable-handle--grip", className)} {...rest}>
      {children}
    </div>
  )
);
ResizableHandle.displayName = "ResizableHandle";
