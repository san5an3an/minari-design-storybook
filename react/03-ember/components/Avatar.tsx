import * as React from "react";
import { cx } from "./cx";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "size"> {
  // 지름
  size?: AvatarSize;
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ size = "md", children, className, ...rest }, ref) => (
    <span
      className={cx("ods-avatar", `ods-avatar--${size}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </span>
  )
);
Avatar.displayName = "Avatar";

// 여러 항목 겹쳐 놓는 위치
export const AvatarStack = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-avatar-stack", className)} {...rest}>
      {children}
    </span>
  )
);
AvatarStack.displayName = "AvatarStack";
