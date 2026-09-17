import * as React from "react";
import { ArrowLeft, Bookmark, Clock } from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { Slider } from "../../../bases/shadcn/Slider";
import { Toggle } from "../../../bases/shadcn/Toggle";
import { Tooltip } from "../../../bases/shadcn/Tooltip";
import { ARTICLES } from "../data";
import type { ScreenProps } from "../screens";

export function ReaderScreen({ itemId, onOpen }: ScreenProps) {
  const article = ARTICLES.find((a) => a.id === itemId) ?? ARTICLES[0];
  const [fontScale, setFontScale] = React.useState(1);
  const [bookmarked, setBookmarked] = React.useState(true);

  return (
    <div className="flex flex-col gap-5" style={{ maxWidth: "42rem" }}>
      <div className="flex items-center justify-between gap-3">
        <Tooltip content="목록으로 돌아가기">
          <Button variant="plain" onClick={ => onOpen?.("list", "")}>
            <ArrowLeft size={14} aria-hidden />
            목록으로
          </Button>
        </Tooltip>
        <Toggle pressed={bookmarked} onPressedChange={setBookmarked} aria-label="북마크">
          <Bookmark size={14} fill={bookmarked ? "currentColor" : "none"} />
        </Toggle>
      </div>

      <div className="flex items-center gap-3">
        <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
          글자 크기
        </span>
        <Slider
          value={[fontScale]}
          onValueChange={(v) => setFontScale(Array.isArray(v) ? v[0] : v)}
          min={0.85}
          max={1.3}
          step={0.05}
          className="max-w-40"
        />
      </div>

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
              fontSize: `calc(var(--semantic-text-body) * ${fontScale})`,
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
