import { Badge, Body1, Button, Caption1, Divider } from "@fluentui/react-components";
import { ASSETS, type Asset } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<Asset["status"], "success" | "informative" | "warning"> = {
  "사용 중": "success",
  "창고 대기": "informative",
  "수리 중": "warning",
};

export function AssetDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const asset = ASSETS.find((a) => a.id === selectedId);

  if (!asset) {
    return (
      <div style={{ border: "1px dashed var(--colorNeutralStroke2)", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          자산을 먼저 골라 주세요. "자산" 탭에서 항목을 눌러 보세요.
        </Caption1>
        <div style={{ marginTop: "12px" }}>
          <Button size="small" onClick={ => onNavigate?.("assets")}>자산 목록으로</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Body1 style={{ fontWeight: 600, fontSize: "18px" }}>{asset.name}</Body1>
          <Badge color={STATUS_COLOR[asset.status]} appearance="filled">{asset.status}</Badge>
        </div>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          {asset.serial} · {asset.category} · 현재 보유자 {asset.currentHolder ?? "없음"}
        </Caption1>
      </div>
      <Divider />
      <div>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "6px" }}>할당 이력</Caption1>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {asset.history.map((h, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
              <Body1>{h.assignee}</Body1>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{h.fromLabel} ~ {h.toLabel}</Caption1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
