import { BookOpen, Clock } from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { ARTICLES } from "../data";
import type { ScreenProps } from "../screens";

export function ListScreen({ onOpen }: ScreenProps) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex items-center justify-between"
        style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-subtle)" }}
      >
        <span>{ARTICLES.length}개 저장됨</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {ARTICLES.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={ => onOpen?.("reader", a.id)}
            className="flex flex-col gap-3 text-start transition-colors hover:bg-[var(--component-card-bg-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--semantic-border-focus-default)]"
            style={{
              background: "var(--component-card-bg)",
              borderColor: "var(--component-card-border)",
              borderWidth: "var(--semantic-border-width-default)",
              borderStyle: "solid",
              borderRadius: "var(--component-card-radius)",
              boxShadow: "var(--component-card-shadow)",
              padding: "var(--component-card-padding)",
            }}
          >
            <div className="flex min-w-0 items-center gap-2">
              <span
                aria-hidden
                className="flex size-7 shrink-0 items-center justify-center"
                style={{
                  background: "var(--semantic-bg-brand-subtle)",
                  color: "var(--semantic-fg-brand-default)",
                  borderRadius: "var(--semantic-radius-control)",
                }}
              >
                <BookOpen size={14} />
              </span>
              <span
                className="truncate flex-1"
                style={{ color: "var(--component-card-title-fg)", fontSize: "var(--component-card-title-font-size)" }}
              >
                {a.title}
              </span>
              <Badge variant="subtle" tone="neutral">{a.tag}</Badge>
            </div>
            <p style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}>
              {a.excerpt}
            </p>
            <div
              className="flex items-center gap-3"
              style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}
            >
              <span className="flex items-center gap-1">
                <Clock size={12} aria-hidden />
                {a.minutes}분
              </span>
              <span>{a.source}</span>
              <span className="ms-auto">{a.savedAt}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
