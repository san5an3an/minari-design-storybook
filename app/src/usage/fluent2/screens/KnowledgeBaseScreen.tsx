import { Badge, Body1, Card, Caption1 } from "@fluentui/react-components";
import { KB_ARTICLES } from "../data";

export function KnowledgeBaseScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {KB_ARTICLES.map((a) => (
        <Card key={a.id} style={{ padding: "12px 14px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Body1 style={{ fontWeight: 600 }}>{a.title}</Body1>
              <Badge appearance="tint" color="informative">{a.category}</Badge>
            </div>
            <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{a.summary}</Caption1>
          </div>
        </Card>
      ))}
    </div>
  );
}
