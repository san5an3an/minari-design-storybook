import * as React from "react";
import { cx } from "./cx";

export type MessageAlign = "start" | "end";

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  // 대화 내 메시지 좌우 위치
  align?: MessageAlign;
}

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ align = "start", children, className, ...rest }, ref) => (
    <div
      className={cx("ods-message", `ods-message--${align}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Message.displayName = "Message";

// 같은 화자의 연속 발화 그룹화
export const MessageGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-message-group", className)} {...rest}>
      {children}
    </div>
  )
);
MessageGroup.displayName = "MessageGroup";

// 아바타 위치. self-end로 아래쪽에 정렬
export const MessageAvatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-message-avatar", className)} {...rest}>
      {children}
    </div>
  )
);
MessageAvatar.displayName = "MessageAvatar";

// 머리, 말풍선, 바닥 래퍼
export const MessageContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-message-content", className)} {...rest}>
      {children}
    </div>
  )
);
MessageContent.displayName = "MessageContent";

// 이름, 시각에 말풍선과 동일한 좌우 여백 적용
export const MessageHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-message-header", className)} {...rest}>
      {children}
    </div>
  )
);
MessageHeader.displayName = "MessageHeader";

// 상태, 동작. align=end 시 끝쪽으로 정렬
export const MessageFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-message-footer", className)} {...rest}>
      {children}
    </div>
  )
);
MessageFooter.displayName = "MessageFooter";
