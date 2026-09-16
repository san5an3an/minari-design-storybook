import { Badge, Body1, Caption1, Card } from "@fluentui/react-components";
import { ASSETS, type Asset } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<Asset["status"], "success" | "informative" | "warning"> = {
  "사용 중": "success",
  "창고 대기": "informative",
  "수리 중": "warning",
};

export function AssetsScreen({ onNavigate, onSelect }: ScreenProps) {
  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {ASSETS.map((a) => (
        <Card key={a.id} onClick={ => open(a.id)} style={{ cursor: "pointer", padding: "12px 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1, minWidth: 0 }}>
              <Body1 style={{ fontWeight: 600 }}>{a.name}</Body1>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
                {a.serial} · {a.category} · {a.currentHolder ?? "미배정"}
              </Caption1>
            </div>
            <Badge color={STATUS_COLOR[a.status]} appearance="filled">{a.status}</Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}
