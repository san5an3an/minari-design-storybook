import * as React from "react";
import { cx } from "./cx";

export type BubbleVariant = "default" | "secondary" | "muted" | "tinted" | "outline" | "ghost" | "destructive";
export type BubbleAlign = "start" | "end";

export interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  // 레이블이 앞으로 나간 정도
  variant?: BubbleVariant;
  // 붙는 위치
  align?: BubbleAlign;
}

export const Bubble = React.forwardRef<HTMLDivElement, BubbleProps>(
  ({ variant = "default", align = "start", children, className, ...rest }, ref) => (
    <div
      className={cx("ods-bubble", `ods-bubble--${variant}`, `ods-bubble--align-${align}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Bubble.displayName = "Bubble";

// 텍스트 자체
export const BubbleContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-bubble-content", className)} {...rest}>
      {children}
    </div>
  )
);
BubbleContent.displayName = "BubbleContent";

// 말풍선에 겹쳐서 반응 표시
export type BubbleReactionsSide = "top" | "bottom";
export type BubbleReactionsAlign = "start" | "end";
export interface BubbleReactionsProps extends React.HTMLAttributes<HTMLDivElement> {
  // 걸리는 변
  side?: BubbleReactionsSide;
  // 몰리는 방향
  align?: BubbleReactionsAlign;
}
export const BubbleReactions = React.forwardRef<HTMLDivElement, BubbleReactionsProps>(
  ({ side = "bottom", align = "end", className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-bubble-reactions", `ods-bubble-reactions--${side}`, `ods-bubble-reactions--align-${align}`, className)} {...rest}>
      {children}
    </div>
  )
);
BubbleReactions.displayName = "BubbleReactions";

// 같은 화자의 연속 발화 그룹화
export const BubbleGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-bubble-group", className)} {...rest}>
      {children}
    </div>
  )
);
BubbleGroup.displayName = "BubbleGroup";
