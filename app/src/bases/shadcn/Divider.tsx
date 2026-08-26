import { Separator } from "@/components/ui/separator";
import type { DividerProps } from "../../systems/props";

export function Divider({ strong, inset, vertical, label }: DividerProps) {
  const color = strong ? "var(--component-divider-color-strong)" : "var(--component-divider-color)";
  const line = (
    <Separator
      orientation={vertical ? "vertical" : "horizontal"}
      style={{
        background: color,
        marginBlock: vertical ? undefined : "var(--component-divider-space)",
        marginInline: vertical
          ? "var(--component-divider-space)"
          : inset
            ? "var(--component-divider-inset)"
            : undefined,
        alignSelf: vertical ? "stretch" : undefined,
      }}
    />
  );
  if (label === undefined) return line;

  return (
    <div
      className="flex items-center"
      style={{
        gap: "var(--component-divider-label-gap)",
        marginBlock: "var(--component-divider-space)",
      }}
    >
      <Separator style={{ background: color, flex: 1 }} />
      <span
        style={{
          color: "var(--component-divider-label-fg)",
          fontSize: "var(--component-divider-label-font-size)",
        }}
      >
        {label}
      </span>
      <Separator style={{ background: color, flex: 1 }} />
    </div>
  );
}
