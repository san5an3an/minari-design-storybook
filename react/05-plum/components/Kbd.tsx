import * as React from "react";
import { cx } from "./cx";

export type KbdProps = React.HTMLAttributes<HTMLElement>;

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ children, className, ...rest }, ref) => (
    <kbd
      className={cx("ods-kbd", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </kbd>
  )
);
Kbd.displayName = "Kbd";

// 조합키 그룹 위치, 키마다 kbd 하나씩 배치하기
export const KbdGroup = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-kbd-group", className)} {...rest}>
      {children}
    </span>
  )
);
KbdGroup.displayName = "KbdGroup";
