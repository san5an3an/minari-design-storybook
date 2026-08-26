import * as React from "react";
import { cx } from "./cx";

export type StepperProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Stepper = React.forwardRef<HTMLInputElement, StepperProps>(
  ({ className, ...rest }, ref) => (
    <div
      className={cx("ods-stepper", className)}
    >
      <button type="button" aria-label="줄이기">
        −
      </button>
      <input type="number" aria-label="수량" ref={ref} {...rest} />
      <button type="button" aria-label="늘리기">
        +
      </button>
    </div>
  )
);
Stepper.displayName = "Stepper";
