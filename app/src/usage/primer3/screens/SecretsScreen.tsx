import { Label } from "@primer/react";
import { SECRETS } from "../data";

export function SecretsScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {SECRETS.map((s) => (
        <div key={s.id} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 4px", borderBottom: "1px solid var(--borderColor-muted)" }}>
          <Label variant="secondary">●●●●●●●●</Label>
          <span style={{ fontWeight: 600, fontFamily: "ui-monospace, monospace", flex: 1 }}>{s.name}</span>
          <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{s.updatedLabel} 갱신</span>
        </div>
      ))}
    </div>
  );
}
