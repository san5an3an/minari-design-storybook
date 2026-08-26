import * as React from "react";
import { cx } from "./cx";

export type MessagescrollerProps = React.HTMLAttributes<HTMLDivElement>;

export const Messagescroller = React.forwardRef<HTMLDivElement, MessagescrollerProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-messagescroller", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Messagescroller.displayName = "Messagescroller";

// 실제 전환 발생 영역
export const MessageScrollerViewport = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-messagescroller-viewport", className)} {...rest}>
      {children}
    </div>
  )
);
MessageScrollerViewport.displayName = "MessageScrollerViewport";

// 줄 쌓이는 위치, role="log"
export const MessageScrollerContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-messagescroller-content", className)} {...rest}>
      {children}
    </div>
  )
);
MessageScrollerContent.displayName = "MessageScrollerContent";

// 한 행, 앵커로 사용 가능
export const MessageScrollerItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-messagescroller-item", className)} {...rest}>
      {children}
    </div>
  )
);
MessageScrollerItem.displayName = "MessageScrollerItem";

// 끝으로 되돌아가는 버튼, 가로 중앙 배치
export const MessageScrollerButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-messagescroller-button", className)} {...rest}>
      {children}
    </button>
  )
);
MessageScrollerButton.displayName = "MessageScrollerButton";
