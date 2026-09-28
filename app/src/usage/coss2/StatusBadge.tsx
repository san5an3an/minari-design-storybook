import type { ComponentProps, ReactNode } from "react";
import { Badge } from "../../bases/coss-ui/badge";

export type Tone = "brand" | "danger" | "neutral" | "success" | "warning";

const TONE_STYLE: Record<Tone, { background: string; color: string }> = {
  brand: { background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-on-brand-subtle)" },
  danger: { background: "var(--semantic-bg-danger-subtle)", color: "var(--semantic-fg-on-danger-subtle)" },
  neutral: { background: "var(--semantic-bg-neutral-subtle)", color: "var(--semantic-fg-on-neutral-subtle)" },
  success: { background: "var(--semantic-bg-success-subtle)", color: "var(--semantic-fg-on-success-subtle)" },
  warning: { background: "var(--semantic-bg-warning-subtle)", color: "var(--semantic-fg-on-warning-subtle)" },
};

export function StatusBadge({
  tone,
  children,
  ...props
}: { tone: Tone; children: ReactNode } & Omit<ComponentProps<typeof Badge>, "variant" | "style">) {
  return (
    <Badge variant="outline" style={{ ...TONE_STYLE[tone], borderColor: "transparent" }} {...props}>
      {children}
    </Badge>
  );
}
