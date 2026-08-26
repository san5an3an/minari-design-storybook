import * as React from "react";
import { cx } from "./cx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // 카드 전체가 하나의 링크일 때
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ interactive = false, children, className, ...rest }, ref) => (
    <div
      className={cx("ods-card", interactive && "ods-card--interactive", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

// 제목
export const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-card-title", className)} {...rest}>
      {children}
    </div>
  )
);
CardTitle.displayName = "CardTitle";

// 본문
export const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-card-body", className)} {...rest}>
      {children}
    </div>
  )
);
CardBody.displayName = "CardBody";
