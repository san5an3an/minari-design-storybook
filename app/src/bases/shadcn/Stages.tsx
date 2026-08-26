import { Check } from "lucide-react";
import type { StagesProps } from "../../systems/props";

export function Stages({ items, current }: StagesProps) {
  return (
    <ol
      className="flex items-center"
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        gap: "var(--component-stages-gap)",
        fontSize: "var(--component-stages-font-size)",
      }}
    >
      {items.map((it, i) => {
        const done = i < current;
        const now = i === current;
        const state = done ? "done" : now ? "current" : "todo";
        return (
          <li
            key={i}
            className="flex items-center"
            aria-current={now ? "step" : undefined}
            style={{ gap: "var(--component-stages-gap)" }}
          >
            <span
              className="inline-flex items-center justify-center shrink-0"
              style={{
                width: "var(--component-stages-mark-size)",
                height: "var(--component-stages-mark-size)",
                borderRadius: "var(--component-stages-mark-radius)",
                background: `var(--component-stages-${state}-bg)`,
                color: `var(--component-stages-${state}-fg)`,
              }}
            >
              {done ? <Check aria-label="끝남" style={{ width: "1em", height: "1em" }} /> : i + 1}
            </span>
            <span style={{ color: now ? "var(--component-stages-current-label)" : undefined }}>
              {it.label}
            </span>
            {i < items.length - 1 ? (
              <span
                aria-hidden
                style={{
                  width: "2rem",
                  height: "0.0625rem",
                  background: "var(--component-stages-line)",
                }}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
