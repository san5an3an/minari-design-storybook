import { ArrowLeft, Clock } from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { ARTICLES } from "../data";
import type { ScreenProps } from "../screens";

export function ReaderScreen({ itemId, onOpen }: ScreenProps) {
  const article = ARTICLES.find((a) => a.id === itemId) ?? ARTICLES[0];

  return (
    <div className="flex flex-col gap-5" style={{ maxWidth: "42rem" }}>
      <Button variant="plain" onClick={ => onOpen?.("list", "")}>
        <ArrowLeft size={14} aria-hidden />
        목록으로
      </Button>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="subtle" tone="neutral">{article.tag}</Badge>
          <span
            className="flex items-center gap-1"
            style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}
          >
            <Clock size={12} aria-hidden />
            {article.minutes}분 · {article.source}
          </span>
        </div>
        <h2
          style={{
            color: "var(--semantic-fg-neutral-default)",
            fontSize: "var(--semantic-text-heading-lg)",
            letterSpacing: "var(--semantic-tracking-heading-lg)",
            lineHeight: "var(--semantic-line-height-tight)",
          }}
        >
          {article.title}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {article.body.map((p, i) => (
          <p
            key={i}
            style={{
              color: "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-body)",
              lineHeight: "var(--semantic-line-height-relaxed)",
            }}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
