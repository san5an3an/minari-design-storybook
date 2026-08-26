import { Badge as ShadcnBadge } from "@/components/ui/badge";
import type { BadgeProps } from "../../systems/props";
import { toneVars } from "./tone";

const VARIANT = { solid: "default", subtle: "secondary", outline: "outline" } as const;

export function Badge({
  variant = "solid", tone = "neutral", icon, iconPosition = "inline-start",
  children, className,
}: BadgeProps) {
  return (
    <ShadcnBadge
      variant={VARIANT[variant as keyof typeof VARIANT] ?? "default"}
      className={className}
      // CSS로만 시각 순서 반전, 마크업 순서 유지로 스크린리더 순서 영향 없음
      data-icon={icon === undefined ? undefined : iconPosition}
      style={{
        ...(iconPosition === "inline-end" ? { flexDirection: "row-reverse" as const } : null),
        ...toneVars(tone),
        // outline, subtle 모두 테두리 적용. 고대비 배경대비 1.04:1이라 안 보임
        ...(variant === "outline" || variant === "subtle"
          ? {
              color: `var(--component-badge-${variant}-${tone}-fg)`,
              borderColor: `var(--component-badge-${variant}-${tone}-border)`,
              borderWidth: "var(--semantic-border-width-default)",
            }
          : null),
        borderRadius: "var(--component-badge-radius)",
        gap: "var(--component-badge-gap)",
      }}
    >
      {icon}
      {children}
    </ShadcnBadge>
  );
}
