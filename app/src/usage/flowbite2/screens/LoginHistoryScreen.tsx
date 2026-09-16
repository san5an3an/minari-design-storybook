import { Badge, Card } from "flowbite-react";
import { LOGIN_HISTORY, type LoginEvent } from "../data";

const RESULT_COLOR: Record<LoginEvent["result"], string> = {
  성공: "success",
  실패: "failure",
};

export function LoginHistoryScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {LOGIN_HISTORY.map((e) => (
        <Card key={e.id}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1, minWidth: 0 }}>
              <span style={{ fontWeight: 600 }}>{e.user}</span>
              <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>{e.device} · {e.location} · {e.timeLabel}</span>
            </div>
            <Badge color={RESULT_COLOR[e.result]}>{e.result}</Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}
