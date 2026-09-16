import { Button, Label } from "@primer/react";
import { PACKAGES } from "../data";
import type { ScreenProps } from "../screens";

export function PackageDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const pkg = PACKAGES.find((p) => p.id === selectedId);

  if (!pkg) {
    return (
      <div style={{ border: "1px dashed var(--borderColor-muted)", borderRadius: "6px", padding: "32px", textAlign: "center" }}>
        <span style={{ color: "var(--fgColor-muted)", fontSize: "14px" }}>
          패키지를 먼저 골라 주세요. "패키지" 탭에서 항목을 눌러 보세요.
        </span>
        <div style={{ marginTop: "12px" }}>
          <Button size="small" onClick={ => onNavigate?.("packages")}>패키지 목록으로</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontWeight: 600, fontSize: "18px", color: "var(--fgColor-default)" }}>{pkg.name}</span>
          <Label>{pkg.latestVersion}</Label>
        </div>
        <span style={{ fontSize: "14px", color: "var(--fgColor-muted)" }}>{pkg.description}</span>
      </div>

      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)", marginBottom: "6px" }}>버전 이력</div>
        {pkg.versions.map((v) => (
          <div key={v.version} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid var(--borderColor-muted)" }}>
            <span style={{ fontSize: "14px" }}>{v.version}</span>
            <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{v.publishedLabel}</span>
          </div>
        ))}
      </div>

      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)", marginBottom: "6px" }}>의존성</div>
        {pkg.dependencies.length === 0 ? (
          <span style={{ fontSize: "14px", color: "var(--fgColor-muted)" }}>의존성 없음</span>
        ) : (
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {pkg.dependencies.map((d) => <Label key={d} variant="secondary">{d}</Label>)}
          </div>
        )}
      </div>
    </div>
  );
}
