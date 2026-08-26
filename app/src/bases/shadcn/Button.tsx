import * as React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { sizeVars, toneVars } from "./tone";

export interface ShadcnButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size" | "color"> {
  variant?: string;
  tone?: string;
  size?: string;
}

// variant 매핑, tone 은 슬롯으로 전달
const VARIANT = { solid: "default", surface: "outline", outline: "outline",
                  subtle: "secondary", plain: "ghost" } as const;

export const Button = React.forwardRef<HTMLButtonElement, ShadcnButtonProps>(
  ({ variant = "solid", tone = "neutral", size = "md", style, children, ...rest }, ref) => (
    <ShadcnButton
      ref={ref}
      variant={VARIANT[variant as keyof typeof VARIANT] ?? "default"}
      // size prop 전달 금지. px 고정 3단계라 밀도 구분이 안 되는 문제임
      size="default"
      // plain(ghost)은 글자색 상속. tone 노출 위해 색상 직접 지정
      style={{
        ...toneVars(tone),
        // 버튼 줄 높이 tight 지정. normal 쓰면 위아래 여백 생기는 문제 있음
        ...sizeVars("button", size, "tight"),
        gap: "var(--component-button-gap)",
        // subtle,surface,outline 선 표시. 고대비서 1.04:1로 버튼 소실 방지
        ...(variant === "solid" || variant === "plain"
          ? null
          : { borderColor: `var(--component-button-${variant}-${tone}-border)`,
              borderWidth: "var(--semantic-border-width-default)" }),
        borderRadius: "var(--component-button-radius)",
        ...(variant === "plain" ? { color: `var(--semantic-fg-on-${tone}-subtle)` } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </ShadcnButton>
  ),
);
Button.displayName = "Button";
