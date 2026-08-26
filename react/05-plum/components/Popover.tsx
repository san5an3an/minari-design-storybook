import * as React from "react";
import { cx } from "./cx";

export type PopoverProps = React.HTMLAttributes<HTMLDivElement>;

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, className, ...rest }, ref) => (
    <div role="dialog"
      className={cx("ods-popover", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Popover.displayName = "Popover";

// 제목 행
export const PopoverHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-popover-header", className)} {...rest}>
      {children}
    </div>
  )
);
PopoverHeader.displayName = "PopoverHeader";

// 창 대상 표시
export const PopoverTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...rest }, ref) => (
    <h3 ref={ref} className={cx("ods-popover-title", className)} {...rest}>
      {children}
    </h3>
  )
);
PopoverTitle.displayName = "PopoverTitle";

// 제목 아래 한 줄
export const PopoverDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cx("ods-popover-description", className)} {...rest}>
      {children}
    </p>
  )
);
PopoverDescription.displayName = "PopoverDescription";
