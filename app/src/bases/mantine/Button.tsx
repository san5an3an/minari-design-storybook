import * as React from "react";
import { Button as MantineButton } from "@mantine/core";

export interface MantineButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size" | "color"> {
  variant?: string;
  tone?: string;
  size?: string;
}

// 구조 용어를 라이브러리 용어로 매핑, subtle 의미 차이 적용
const VARIANT = { solid: "filled", subtle: "light", surface: "default",
                  outline: "outline", plain: "subtle" } as const;
const SIZE = { sm: "xs", md: "sm", lg: "md" } as const;

export const Button = React.forwardRef<HTMLButtonElement, MantineButtonProps>(
  ({ variant = "solid", tone = "neutral", size = "md", children, ...rest }, ref) => (
    <MantineButton
      ref={ref}
      variant={VARIANT[variant as keyof typeof VARIANT] ?? "filled"}
      // neutral은 자체 명칭, 대상 측 무채색 이름으로 연결
      color={tone === "neutral" ? "gray" : tone}
      size={SIZE[size as keyof typeof SIZE] ?? "sm"}
      {...rest}
    >
      {children}
    </MantineButton>
  ),
);
Button.displayName = "Button";
