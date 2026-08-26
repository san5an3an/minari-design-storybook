import * as React from "react";
import { Button as AntButton } from "antd";

export interface AntButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size" | "color" | "type"> {
  variant?: string;
  tone?: string;
  size?: string;
}

const VARIANT = { solid: "primary", surface: "default", outline: "default",
                  subtle: "text", plain: "link" } as const;
const SIZE = { sm: "small", md: "middle", lg: "large" } as const;

export const Button = React.forwardRef<HTMLButtonElement, AntButtonProps>(
  ({ variant = "solid", tone = "neutral", size = "md", children, ...rest }, ref) => (
    <AntButton
      ref={ref}
      type={VARIANT[variant as keyof typeof VARIANT] ?? "primary"}
      // 색상을 type 대신 danger 플래그로 수신, tone 값 연결
      danger={tone === "danger"}
      size={SIZE[size as keyof typeof SIZE] ?? "middle"}
      {...rest}
    >
      {children}
    </AntButton>
  ),
);
Button.displayName = "Button";
