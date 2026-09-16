import { Label } from "@primer/react";
import { PACKAGES } from "../data";
import type { ScreenProps } from "../screens";

export function PackagesScreen({ onNavigate, onSelect }: ScreenProps) {
  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {PACKAGES.map((p) => (
        <div
          key={p.id}
          onClick={ => open(p.id)}
          role="button"
          tabIndex={0}
          style={{
            display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 4px",
            borderBottom: "1px solid var(--borderColor-muted)", cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontWeight: 600, color: "var(--fgColor-accent)" }}>{p.name}</span>
              <Label>{p.latestVersion}</Label>
              <Label variant="secondary">{p.license}</Label>
            </div>
            <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{p.description}</span>
          </div>
          <span style={{ fontSize: "12px", color: "var(--fgColor-muted)", whiteSpace: "nowrap" }}>
            주간 {p.weeklyDownloads.toLocaleString("ko-KR")}회
          </span>
        </div>
      ))}
    </div>
  );
}
