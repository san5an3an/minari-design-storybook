import { Badge, Body1, Card, Caption1 } from "@fluentui/react-components";
import { REQUESTS, type AssetRequest } from "../data";

const STATUS_COLOR: Record<AssetRequest["status"], "warning" | "success" | "danger"> = {
  대기: "warning",
  승인: "success",
  반려: "danger",
};

export function RequestsScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {REQUESTS.map((r) => (
        <Card key={r.id} style={{ padding: "12px 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1, minWidth: 0 }}>
              <Body1 style={{ fontWeight: 600 }}>{r.requester} · {r.assetCategory}</Body1>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{r.reason} · {r.requestedLabel}</Caption1>
            </div>
            <Badge color={STATUS_COLOR[r.status]} appearance="filled">{r.status}</Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}
