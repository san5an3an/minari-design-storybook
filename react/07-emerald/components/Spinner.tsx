import * as React from "react";
import { cx } from "./cx";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  // 채워진 배경 위 배치 여부
  onFill?: boolean;
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ onFill = false, className, ...rest }, ref) => (
    <span aria-hidden="true"
      className={cx("ods-spinner", onFill && "ods-spinner--on-fill", className)}
      ref={ref}
      {...rest}
    />
  )
);
Spinner.displayName = "Spinner";

// 스피너 아이콘과 텍스트 래퍼, role=status 부여 위치
export const SpinnerBlock = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-spinner-block", className)} {...rest}>
      {children}
    </span>
  )
);
SpinnerBlock.displayName = "SpinnerBlock";
