import * as React from "react";
import { Button, Label, Radio, RadioGroup, TextInput } from "@primer/react";
import { PACKAGES } from "../data";
import type { ScreenProps } from "../screens";

type Manager = "npm" | "yarn" | "pnpm";
const INSTALL_CMD: Record<Manager, string> = {
  npm: "install", yarn: "add", pnpm: "add",
};

export function PackageDetailScreen({ selectedId, onSelect, onNavigate }: ScreenProps) {
  const pkg = PACKAGES.find((p) => p.id === selectedId);
  const [manager, setManager] = React.useState<Manager>("npm");

  // 파생 리스트. 프레임 유지, 데이터에서 값 추출하기
  const others = pkg ? PACKAGES.filter((p) => p.id !== pkg.id) : [];

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

      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)", marginBottom: "6px" }}>설치 방법</div>
        <RadioGroup name="pkg-manager" onChange={(v) => setManager(v as Manager)}>
          <div style={{ display: "flex", gap: "16px" }}>
            {(["npm", "yarn", "pnpm"] as const).map((m) => (
              <label key={m} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px" }}>
                <Radio name="pkg-manager" value={m} checked={manager === m} onChange={ => setManager(m)} />
                {m}
              </label>
            ))}
          </div>
        </RadioGroup>
        <TextInput
          readOnly
          value={`${manager} ${INSTALL_CMD[manager]} ${pkg.name}`}
          style={{ fontFamily: "monospace", marginTop: "8px", maxWidth: "360px" }}
        />
      </div>

      {others.length > 0 ? (
        <div>
          <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)", marginBottom: "6px" }}>
            이 스코프의 다른 패키지
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {others.map((p) => (
              <div
                key={p.id}
                style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
                onClick={ => { onSelect?.(p.id); onNavigate?.("detail"); }}
              >
                <span style={{ fontSize: "14px", color: "var(--fgColor-accent)" }}>{p.name}</span>
                <Label>{p.latestVersion}</Label>
                <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{p.description}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
