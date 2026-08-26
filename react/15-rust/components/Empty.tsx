import * as React from "react";
import { cx } from "./cx";

export type EmptyProps = React.HTMLAttributes<HTMLDivElement>;

export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ children, className, ...rest }, ref) => (
    <div role="status"
      className={cx("ods-empty", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Empty.displayName = "Empty";

// 표시. 선택 사항임
export const EmptyIcon = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-empty-icon", className)} {...rest}>
      {children}
    </span>
  )
);
EmptyIcon.displayName = "EmptyIcon";

// 빈 상태 이유 한 줄
export const EmptyTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cx("ods-empty-title", className)} {...rest}>
      {children}
    </p>
  )
);
EmptyTitle.displayName = "EmptyTitle";

// 다음 동작
export const EmptyBody = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cx("ods-empty-body", className)} {...rest}>
      {children}
    </p>
  )
);
EmptyBody.displayName = "EmptyBody";

// 다음 동작 위치
export const EmptyActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-empty-actions", className)} {...rest}>
      {children}
    </div>
  )
);
EmptyActions.displayName = "EmptyActions";
