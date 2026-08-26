import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LinkProps } from "../../systems/props";

export function Link({ href = "#", external, children, className }: LinkProps) {
  return (
    <a
      href={href}
      className={cn("inline-flex items-center underline", className)}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      style={{
        color: "var(--component-link-fg)",
        gap: "var(--component-link-gap)",
        textUnderlineOffset: "var(--component-link-underline-offset)",
      }}
    >
      {children}
      {external ? <ArrowUpRight aria-hidden style={{ width: "1em", height: "1em" }} /> : null}
    </a>
  );
}
