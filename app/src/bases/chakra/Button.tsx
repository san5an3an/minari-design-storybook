import * as React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

export interface ChakraButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size" | "color"> {
  variant?: string;
  tone?: string;
  size?: string;
}

const VARIANT = { solid: "solid", subtle: "subtle", surface: "surface",
                  outline: "outline", plain: "plain" } as const;
const SIZE = { sm: "sm", md: "md", lg: "lg" } as const;

export const Button = React.forwardRef<HTMLButtonElement, ChakraButtonProps>(
  ({ variant = "solid", tone = "neutral", size = "md", children, ...rest }, ref) => (
    <ChakraButton
      ref={ref}
      variant={VARIANT[variant as keyof typeof VARIANT] ?? "solid"}
      // neutral은 자체 명칭, 대상 측 무채색 팔레트로 연결
      colorPalette={tone === "neutral" ? "gray" : tone}
      size={SIZE[size as keyof typeof SIZE] ?? "md"}
      {...rest}
    >
      {children}
    </ChakraButton>
  ),
);
Button.displayName = "Button";
