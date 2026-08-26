import * as React from "react";
import { cx } from "../cx";

export interface StandaloneButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  variant?: string;
  tone?: string;
  size?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, StandaloneButtonProps>(
  ({ variant = "solid", tone = "neutral", size = "md", className, ...rest }, ref) => (
    <button
      ref={ref}
      className={cx("ods-btn", `ods-btn--${variant}`, `ods-btn--${tone}`, `ods-btn--${size}`, className)}
      {...rest}
    />
  ),
);
Button.displayName = "Button";
