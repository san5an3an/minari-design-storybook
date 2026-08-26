import * as React from "react";
import { cx } from "./cx";

export type StagesProps = React.HTMLAttributes<HTMLOListElement>;

export const Stages = React.forwardRef<HTMLOListElement, StagesProps>(
  ({ children, className, ...rest }, ref) => (
    <ol
      className={cx("ods-stages", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </ol>
  )
);
Stages.displayName = "Stages";

export type StagesItemState = "done" | "current" | "todo";
export interface StagesItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  // 지남, 지금, 아직
  state?: StagesItemState;
}
export const StagesItem = React.forwardRef<HTMLLIElement, StagesItemProps>(
  ({ state = "todo", className, children, ...rest }, ref) => (
    <li ref={ref} className={cx("ods-stages-item", `ods-stages-item--${state}`, className)} {...rest}>
      {children}
    </li>
  )
);
StagesItem.displayName = "StagesItem";

// 번호 또는 완료 표시
export const StagesMark = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-stages-mark", className)} {...rest}>
      {children}
    </span>
  )
);
StagesMark.displayName = "StagesMark";

// 단계 이름
export const StagesLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-stages-label", className)} {...rest}>
      {children}
    </span>
  )
);
StagesLabel.displayName = "StagesLabel";
