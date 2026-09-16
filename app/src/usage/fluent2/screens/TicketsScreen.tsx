import { Badge, Body1, Caption1, Card } from "@fluentui/react-components";
import { TICKETS, type Ticket } from "../data";
import type { ScreenProps } from "../screens";

const PRIORITY_COLOR: Record<Ticket["priority"], "danger" | "warning" | "informative"> = {
  긴급: "danger",
  보통: "warning",
  낮음: "informative",
};
const STATUS_COLOR: Record<Ticket["status"], "danger" | "warning" | "success"> = {
  열림: "danger",
  "진행 중": "warning",
  해결됨: "success",
};

export function TicketsScreen({ onNavigate, onSelect }: ScreenProps) {
  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {TICKETS.map((t) => (
        <Card
          key={t.id}
          onClick={ => open(t.id)}
          style={{ cursor: "pointer", padding: "12px 14px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1, minWidth: 0 }}>
              <Body1 style={{ fontWeight: 600 }}>{t.subject}</Body1>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
                {t.requester} · {t.category} · {t.createdLabel}
              </Caption1>
            </div>
            <Badge color={PRIORITY_COLOR[t.priority]} appearance="tint">{t.priority}</Badge>
            <Badge color={STATUS_COLOR[t.status]} appearance="filled">{t.status}</Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}
