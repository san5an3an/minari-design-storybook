import * as React from "react";
import { Button as AntButton, ConfigProvider, theme as antdTheme } from "antd";
import type { ButtonColorType, ButtonVariantType } from "antd/es/button/buttonHelpers";

export interface AntButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size" | "color" | "type"> {
  variant?: string;
  tone?: string;
  size?: string;
}

const VARIANT: Record<string, ButtonVariantType> = {
  solid: "solid",
  surface: "filled",
  outline: "outlined",
  subtle: "filled",
  plain: "text",
};
const COLOR: Record<string, ButtonColorType> = {
  neutral: "default",
  brand: "primary",
  danger: "danger",
};
const SEED: Record<
  string,
  { base: "colorSuccess" | "colorWarning"; bg: "colorSuccessBg" | "colorWarningBg";
    border: "colorSuccessBorder" | "colorWarningBorder" }
> = {
  success: { base: "colorSuccess", bg: "colorSuccessBg", border: "colorSuccessBorder" },
  warning: { base: "colorWarning", bg: "colorWarningBg", border: "colorWarningBorder" },
};
const SIZE = { sm: "small", md: "middle", lg: "large" } as const;

function ToneScope({
  tone,
  seed,
  children,
}: {
  tone: string;
  seed: (typeof SEED)[string];
  children: React.ReactNode;
}) {
  const { token } = antdTheme.useToken;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: token[seed.base],
          // 부모가 brand로 고정한 값
          colorPrimaryBg: token[seed.bg],
          colorPrimaryBorder: token[seed.border],
          colorTextLightSolid: `var(--semantic-fg-on-${tone}-default)`,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export const Button = React.forwardRef<HTMLButtonElement, AntButtonProps>(
  ({ variant = "solid", tone = "neutral", size = "md", children, ...rest }, ref) => {
    const seed = SEED[tone];
    const button = (
      <AntButton
        ref={ref}
        variant={VARIANT[variant] ?? "solid"}
        // seed 있는 tone의 해당 위치 primary는 지정 색상
        color={seed ? "primary" : (COLOR[tone] ?? "default")}
        size={SIZE[size as keyof typeof SIZE] ?? "middle"}
        {...rest}
      >
        {children}
      </AntButton>
    );
    return seed ? (
      <ToneScope tone={tone} seed={seed}>
        {button}
      </ToneScope>
    ) : (
      button
    );
  },
);
Button.displayName = "Button";
