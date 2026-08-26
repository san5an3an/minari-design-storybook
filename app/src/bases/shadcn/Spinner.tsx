import { Spinner as ShadcnSpinner } from "@/components/ui/spinner";
import type { SpinnerProps } from "../../systems/props";

export function Spinner({ onFill, label }: SpinnerProps) {
  const mark = (
    <ShadcnSpinner
      aria-label={label === undefined ? "불러오는 중" : undefined}
      style={{
        width: "var(--component-spinner-size)",
        height: "var(--component-spinner-size)",
        color: onFill
          ? "var(--component-spinner-indicator-on-fill)"
          : "var(--component-spinner-indicator)",
      }}
    />
  );
  if (label === undefined) return mark;

  return (
    <span
      className="inline-flex items-center"
      style={{
        gap: "var(--component-spinner-gap)",
        color: "var(--component-spinner-label-fg)",
        fontSize: "var(--component-spinner-label-font-size)",
      }}
    >
      {mark}
      {label}
    </span>
  );
}
