import { Folder } from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { ARTICLES, COLLECTIONS } from "../data";

export function CollectionsScreen {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {COLLECTIONS.map((c) => {
        const count = ARTICLES.filter((a) => a.tag === c.tag).length;
        return (
          <div
            key={c.id}
            className="flex items-center gap-3"
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
            <span
              aria-hidden
              className="flex size-9 shrink-0 items-center justify-center"
              style={{
                background: "var(--semantic-bg-brand-subtle)",
                color: "var(--semantic-fg-brand-default)",
                borderRadius: "var(--semantic-radius-control)",
              }}
            >
              <Folder size={16} />
            </span>
            <span
              className="flex-1"
              style={{ color: "var(--component-card-title-fg)", fontSize: "var(--component-card-title-font-size)" }}
            >
              {c.label}
            </span>
            <Badge variant="outline" tone="neutral">{count}개</Badge>
          </div>
        );
      })}
    </div>
  );
}
