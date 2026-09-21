import type { ComponentType } from "react";
import { Card } from "../../bases/coss-ui/card";
import type { Tone } from "./StatusBadge";

export function StatTile({
  icon: Icon, tone, label, value,
}: { icon: ComponentType<{ size?: number }>; tone: Tone; label: string; value: string }) {
  return (
    <Card className="flex items-center gap-2.5 p-3">
      <span
        aria-hidden
        className="flex size-8 shrink-0 items-center justify-center rounded-md"
        style={{ background: `var(--semantic-bg-${tone}-subtle)`, color: `var(--semantic-fg-${tone}-default)` }}
      >
        <Icon size={15} />
      </span>
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{label}</span>
        <span className="truncate font-semibold" style={{ fontSize: "var(--semantic-text-heading-sm)" }}>{value}</span>
      </div>
    </Card>
  );
}
