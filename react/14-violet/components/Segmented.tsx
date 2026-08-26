import * as React from "react";
import { cx } from "./cx";

export type SegmentedProps = React.HTMLAttributes<HTMLDivElement>;

export const Segmented = React.forwardRef<HTMLDivElement, SegmentedProps>(
  ({ children, className, ...rest }, ref) => (
    <div role="radiogroup"
      className={cx("ods-segmented", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Segmented.displayName = "Segmented";

export const SegmentedItem = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-segmented-item", className)} {...rest}>
      {children}
    </button>
  )
);
SegmentedItem.displayName = "SegmentedItem";
