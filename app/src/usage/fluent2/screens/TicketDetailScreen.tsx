import { Avatar, Badge, Body1, Button, Caption1, Divider } from "@fluentui/react-components";
import { TICKETS, type Ticket } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<Ticket["status"], "danger" | "warning" | "success"> = {
  열림: "danger",
  "진행 중": "warning",
  해결됨: "success",
};

export function TicketDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const ticket = TICKETS.find((t) => t.id === selectedId);

  if (!ticket) {
    return (
      <div style={{ border: "1px dashed var(--colorNeutralStroke2)", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          티켓을 먼저 골라 주세요. "티켓" 탭에서 항목을 눌러 보세요.
        </Caption1>
        <div style={{ marginTop: "12px" }}>
          <Button size="small" onClick={ => onNavigate?.("tickets")}>티켓 목록으로</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Body1 style={{ fontWeight: 600, fontSize: "18px" }}>{ticket.subject}</Body1>
          <Badge color={STATUS_COLOR[ticket.status]} appearance="filled">{ticket.status}</Badge>
        </div>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          {ticket.requester} · {ticket.category} · {ticket.createdLabel}
        </Caption1>
      </div>
      <Divider />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {ticket.messages.map((m, i) => (
          <div key={i} style={{ display: "flex", gap: "8px" }}>
            <Avatar name={m.author} size={24} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <Caption1 style={{ fontWeight: 600 }}>{m.author} · {m.timeLabel}</Caption1>
              <Body1>{m.text}</Body1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
