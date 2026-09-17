import * as React from "react";
import { Breadcrumbs, Label, LabelGroup, Link, ProgressBar, Radio, RadioGroup, TextInput, Token } from "@primer/react";
import { Blankslate, Card } from "@primer/react/experimental";
import { GitBranch, PackageSearch, Tags, Trophy, type LucideIcon } from "lucide-react";
import { DOWNLOAD_STATS, PACKAGES } from "../data";
import type { ScreenProps } from "../screens";

type Manager = "npm" | "yarn" | "pnpm";
const INSTALL_CMD: Record<Manager, string> = {
  npm: "install", yarn: "add", pnpm: "add",
};

const DAY_LABELS = ["월", "화", "수", "목", "금", "토", "일"];

// 이 화면 안에서 스탯카드 4요소 세트 독립 생성
const TONES = {
  success: { fg: "var(--fgColor-success)", bg: "var(--bgColor-success-muted)", path: "success.emphasis" },
  accent: { fg: "var(--fgColor-accent)", bg: "var(--bgColor-accent-muted)", path: "accent.emphasis" },
  neutral: { fg: "var(--fgColor-neutral)", bg: "var(--bgColor-neutral-muted)", path: "neutral.emphasis" },
} as const;
type Tone = keyof typeof TONES;
type Meter = { kind: "progress"; percent: number } | { kind: "trend"; percent: number };

function StatCard({ icon: Icon, label, value, tone, meter }: { icon: LucideIcon; label: string; value: string; tone: Tone; meter: Meter }) {
  const t = TONES[tone];
  return (
    <Card padding="condensed">
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <span aria-hidden style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: "6px", background: t.bg, color: t.fg, flexShrink: 0 }}>
          <Icon size={14} />
        </span>
        <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{label}</span>
      </div>
      <div style={{ fontSize: "22px", fontWeight: 600, color: t.fg, marginBottom: meter.kind === "progress" ? "6px" : "2px" }}>{value}</div>
      {meter.kind === "progress" ? (
        <ProgressBar progress={meter.percent} bg={t.path} barSize="small" aria-label={`${label} 비율 ${meter.percent}%`} />
      ) : (
        <span style={{ fontSize: "12px", color: meter.percent >= 0 ? "var(--fgColor-success)" : "var(--fgColor-danger)" }}>
          {meter.percent >= 0 ? "▲" : "▼"} {Math.abs(meter.percent)}% 지난주 대비
        </span>
      )}
    </Card>
  );
}

export function PackageDetailScreen({ selectedId, packages: packagesProp, onSelect, onNavigate }: ScreenProps) {
  const packages = packagesProp ?? PACKAGES;
  const pkg = packages.find((p) => p.id === selectedId);
  const [manager, setManager] = React.useState<Manager>("npm");

  // 파생 리스트. 프레임 유지, 데이터에서 값 추출하기
  const others = pkg ? packages.filter((p) => p.id !== pkg.id) : [];

  if (!pkg) {
    return (
      // Blankslate 실험 컴포넌트 사용. 손으로 만든 빈 상태 div 대신 사용
      <Blankslate>
        <Blankslate.Visual><PackageSearch size={32} /></Blankslate.Visual>
        <Blankslate.Heading>패키지를 먼저 골라 주세요</Blankslate.Heading>
        <Blankslate.Description>"패키지" 탭에서 항목을 눌러 보세요.</Blankslate.Description>
        <Blankslate.PrimaryAction onClick={ => onNavigate?.("packages")}>패키지 목록으로</Blankslate.PrimaryAction>
      </Blankslate>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Breadcrumbs로 드릴다운 위치 표시. 루트는 목록으로 돌아가는 네비게이션 */}
      <Breadcrumbs>
        <Breadcrumbs.Item href="#" onClick={(e: React.MouseEvent) => { e.preventDefault; onNavigate?.("packages"); }}>
          패키지
        </Breadcrumbs.Item>
        <Breadcrumbs.Item href="#" selected>{pkg.name}</Breadcrumbs.Item>
      </Breadcrumbs>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontWeight: 600, fontSize: "18px", color: "var(--fgColor-default)" }}>{pkg.name}</span>
          <Label>{pkg.latestVersion}</Label>
        </div>
        <span style={{ fontSize: "14px", color: "var(--fgColor-muted)" }}>{pkg.description}</span>
      </div>

      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        <StatCard icon={Tags} label="버전 수" value={String(pkg.versions.length)} tone="neutral" meter={{ kind: "trend", percent: 20 }} />
        <StatCard icon={GitBranch} label="의존성 수" value={String(pkg.dependencies.length)} tone="accent" meter={{ kind: "progress", percent: Math.min(100, pkg.dependencies.length * 25) }} />
        <StatCard
          icon={Trophy}
          label="다운로드 순위"
          value={`${[...packages].sort((a, b) => b.weeklyDownloads - a.weeklyDownloads).findIndex((p) => p.id === pkg.id) + 1}위`}
          tone="success"
          meter={{ kind: "trend", percent: 5 }}
        />
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

      {/* 다운로드 추이. 목록 화면과 동일한 weeklyDownloads 값을 이 패키지 기준으로 표시 */}
      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)", marginBottom: "6px" }}>다운로드 추이</div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <span style={{ fontSize: "14px", color: "var(--fgColor-default)" }}>주간 {pkg.weeklyDownloads.toLocaleString("ko-KR")}회</span>
          {( => {
            const trend = DOWNLOAD_STATS.find((d) => d.packageName === pkg.name)?.trendPercent;
            if (trend === undefined) return null;
            return (
              <span style={{ fontSize: "12px", color: trend >= 0 ? "var(--fgColor-success)" : "var(--fgColor-danger)" }}>
                {trend >= 0 ? "▲" : "▼"} {Math.abs(trend)}%
              </span>
            );
          })}
        </div>
        <ProgressBar
          progress={(pkg.weeklyDownloads / Math.max(...packages.map((p) => p.weeklyDownloads))) * 100}
          bg="accent.emphasis"
          barSize="large"
          aria-label="전체 패키지 중 다운로드 비중"
        />
        {/* 일별 다운로드를 미니 바 차트로 표시, DOWNLOAD_STATS 데이터 있는 패키지만 대상 */}
        {( => {
          const daily = DOWNLOAD_STATS.find((d) => d.packageName === pkg.name)?.dailyDownloads;
          if (!daily) return null;
          const max = Math.max(...daily);
          return (
            <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "56px", marginTop: "12px" }}>
              {daily.map((d, i) => (
                <div key={DAY_LABELS[i]} title={`${DAY_LABELS[i]}요일 ${d.toLocaleString("ko-KR")}회`} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: 1 }}>
                  <div aria-hidden style={{ width: "100%", height: `${Math.max(6, (d / max) * 36)}px`, borderRadius: "3px 3px 0 0", background: "var(--bgColor-accent-emphasis)" }} />
                  <span style={{ fontSize: "10px", color: "var(--fgColor-muted)" }}>{DAY_LABELS[i]}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)", marginBottom: "6px" }}>의존성</div>
        {pkg.dependencies.length === 0 ? (
          <span style={{ fontSize: "14px", color: "var(--fgColor-muted)" }}>의존성 없음</span>
        ) : (
          // Label 대신 제거 가능한 Token 칩 사용, LabelGroup으로 오버플로 관리
          <LabelGroup visibleChildCount="auto">
            {pkg.dependencies.map((d) => <Token key={d} text={d} />)}
          </LabelGroup>
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
              <div key={p.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {/* Link로 정식 링크 렌더링 */}
                <Link
                  href="#"
                  onClick={(e: React.MouseEvent) => { e.preventDefault; onSelect?.(p.id); onNavigate?.("detail"); }}
                  style={{ fontSize: "14px" }}
                >
                  {p.name}
                </Link>
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
