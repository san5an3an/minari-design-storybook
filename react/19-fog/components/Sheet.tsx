import * as React from "react";
import { cx } from "./cx";

export type SheetSide = "top" | "right" | "bottom" | "left";

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  // 나오는 변
  side?: SheetSide;
}

export const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ side = "right", children, className, ...rest }, ref) => (
    <div role="dialog"
      className={cx("ods-sheet", `ods-sheet--${side}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Sheet.displayName = "Sheet";

// 제목 행
export const SheetHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-sheet-header", className)} {...rest}>
      {children}
    </div>
  )
);
SheetHeader.displayName = "SheetHeader";

// 배치에 담긴 내용
export const SheetTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...rest }, ref) => (
    <h2 ref={ref} className={cx("ods-sheet-title", className)} {...rest}>
      {children}
    </h2>
  )
);
SheetTitle.displayName = "SheetTitle";

// 제목 아래 한 줄
export const SheetDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cx("ods-sheet-description", className)} {...rest}>
      {children}
    </p>
  )
);
SheetDescription.displayName = "SheetDescription";

// 종료 액션 위치
export const SheetFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-sheet-footer", className)} {...rest}>
      {children}
    </div>
  )
);
SheetFooter.displayName = "SheetFooter";
