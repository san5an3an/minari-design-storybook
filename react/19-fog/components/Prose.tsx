import * as React from "react";
import { cx } from "./cx";

export type ProseProps = React.HTMLAttributes<HTMLDivElement>;

export const Prose = React.forwardRef<HTMLDivElement, ProseProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-prose", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Prose.displayName = "Prose";
