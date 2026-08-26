import * as React from "react";
import { cx } from "./cx";

export interface CollapsibleProps extends React.HTMLAttributes<HTMLElement> {
  // 초기 펼쳐진 상태
  open?: boolean;
}

export const Collapsible = React.forwardRef<HTMLElement, CollapsibleProps>(
  ({ open, children, className, ...rest }, ref) => (
    <details
      className={cx("ods-collapsible", className)}
      open={open}
      ref={ref}
      {...rest}
    >
      <summary className="ods-collapsible-trigger">
        {children}
      </summary>
    </details>
  )
);
Collapsible.displayName = "Collapsible";

// 여는 글자
export const CollapsibleTrigger = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...rest }, ref) => (
    <summary ref={ref} className={cx("ods-collapsible-trigger", className)} {...rest}>
      {children}
    </summary>
  )
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";

// 펼쳐지는 내용
export const CollapsibleContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-collapsible-content", className)} {...rest}>
      {children}
    </div>
  )
);
CollapsibleContent.displayName = "CollapsibleContent";
