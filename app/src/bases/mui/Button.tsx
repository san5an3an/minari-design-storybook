import * as React from "react";
import MuiButton from "@mui/material/Button";

export interface MuiButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size" | "color"> {
  variant?: string;
  tone?: string;
  size?: string;
}

// 자체 용어를 MUI 어휘로 변환
const VARIANT = { solid: "contained", surface: "outlined", subtle: "text", plain: "text" } as const;
const TONE = { neutral: "inherit", brand: "primary", danger: "error",
               success: "success", warning: "warning", accent: "secondary", info: "info" } as const;
const SIZE = { sm: "small", md: "medium", lg: "large" } as const;

export const Button = React.forwardRef<HTMLButtonElement, MuiButtonProps>(
  ({ variant = "solid", tone = "neutral", size = "md", children, ...rest }, ref) => (
    <MuiButton
      ref={ref}
      variant={VARIANT[variant as keyof typeof VARIANT] ?? "contained"}
      color={TONE[tone as keyof typeof TONE] ?? "inherit"}
      size={SIZE[size as keyof typeof SIZE] ?? "medium"}
      {...rest}
    >
      {children}
    </MuiButton>
  ),
);
Button.displayName = "Button";
