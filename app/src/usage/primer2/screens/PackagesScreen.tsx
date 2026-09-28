import * as React from "react";
import { Button, ButtonGroup, Dialog, FormControl, Label, ProgressBar, Select, Textarea, TextInput, Truncate } from "@primer/react";
import { Card } from "@primer/react/experimental";
import { Boxes, Download, Package, Plus, Scale, Search, type LucideIcon } from "lucide-react";
import { DOWNLOAD_STATS, PACKAGES, type PackageItem } from "../data";
import type { ScreenProps } from "../screens";

// 이 화면 안에서 스탯카드 4요소 세트 독립 생성
const TONES = {
  success: { fg: "var(--fgColor-success)", bg: "var(--bgColor-success-muted)", path: "success.emphasis" },
  accent: { fg: "var(--fgColor-accent)", bg: "var(--bgColor-accent-muted)", path: "accent.emphasis" },
  neutral: { fg: "var(--fgColor-neutral)", bg: "var(--bgColor-neutral-muted)", path: "neutral.emphasis" },
  attention: { fg: "var(--fgColor-attention)", bg: "var(--bgColor-attention-muted)", path: "attention.emphasis" },
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

function PackageStats({ packages }: { packages: PackageItem[] }) {
  const totalDownloads = packages.reduce((sum, p) => sum + p.weeklyDownloads, 0);
  const licenses = new Set(packages.map((p) => p.license)).size;
  const topTrend = Math.max(...DOWNLOAD_STATS.map((d) => d.trendPercent));
  const mitCount = packages.filter((p) => p.license === "MIT").length;
  return (
    <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", marginBottom: "16px" }}>
      <StatCard icon={Package} label="전체 패키지" value={String(packages.length)} tone="neutral" meter={{ kind: "trend", percent: 25 }} />
      <StatCard icon={Download} label="총 주간 다운로드" value={totalDownloads.toLocaleString("ko-KR")} tone="accent" meter={{ kind: "trend", percent: 6 }} />
      <StatCard icon={Boxes} label="최고 증감" value={`+${topTrend}%`} tone="success" meter={{ kind: "progress", percent: Math.min(100, topTrend * 4) }} />
      <StatCard icon={Scale} label="라이선스 종류" value={String(licenses)} tone="attention" meter={{ kind: "trend", percent: 0 }} />
      <StatCard icon={Scale} label="MIT 라이선스" value={String(mitCount)} tone="accent" meter={{ kind: "progress", percent: Math.round((mitCount / packages.length) * 100) }} />
    </div>
  );
}

type SortKey = "downloads" | "name";
type License = "MIT" | "Apache-2.0";

// 패키지 배포 진입점. e.target.value 전달, 늦은 읽기 시 크래시 위험 있음
function PublishPackageDialog({ onClose, onPublish }: { onClose:  => void; onPublish: (name: string, description: string, license: License) => void }) {
  const [scope, setScope] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [license, setLicense] = React.useState<License>("MIT");
  const name = scope.trim === "" ? "" : `@minari/${scope.trim}`;

  return (
    <Dialog title="새 패키지 배포" subtitle="이 스코프에 새 패키지를 게시합니다." onClose={onClose} width="medium">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px" }}>
        <FormControl required>
          <FormControl.Label>패키지 이름</FormControl.Label>
          <TextInput
            leadingVisual={ => <span style={{ color: "var(--fgColor-muted)" }}>@minari/</span>}
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            placeholder="예: date-utils"
            block
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>설명</FormControl.Label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} block resize="vertical" />
        </FormControl>
        <FormControl>
          <FormControl.Label>라이선스</FormControl.Label>
          <Select value={license} onChange={(e) => setLicense(e.target.value as License)} block>
            <Select.Option value="MIT">MIT</Select.Option>
            <Select.Option value="Apache-2.0">Apache-2.0</Select.Option>
          </Select>
        </FormControl>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4px" }}>
          <ButtonGroup>
            <Button onClick={onClose}>취소</Button>
            <Button
              variant="primary"
              disabled={scope.trim === ""}
              onClick={ => { onPublish(name, description.trim || "설명이 없습니다.", license); onClose; }}
            >
              배포
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Dialog>
  );
}

export function PackagesScreen({ packages: packagesProp, onAddPackage, onNavigate, onSelect }: ScreenProps) {
  const packages = packagesProp ?? PACKAGES;
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState<SortKey>("downloads");
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const publish = (name: string, description: string, license: License) => {
    onAddPackage?.({
      id: `pk-${Date.now}`,
      name,
      description,
      latestVersion: "0.1.0",
      weeklyDownloads: 0,
      license,
      versions: [{ version: "0.1.0", publishedLabel: "방금" }],
      dependencies: [],
    });
  };

  const rows = packages
    .filter((p) => query.trim === "" || p.name.includes(query))
    .sort((a, b) => (sort === "downloads" ? b.weeklyDownloads - a.weeklyDownloads : a.name.localeCompare(b.name)));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PackageStats packages={packages} />
      {/* 우측에 CTA 버튼 추가 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <TextInput
            leadingVisual={Search}
            placeholder="패키지 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            size="small"
          />
          <Select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            size="small"
            aria-label="정렬"
          >
            <Select.Option value="downloads">다운로드 순</Select.Option>
            <Select.Option value="name">이름 순</Select.Option>
          </Select>
        </div>
        <Button leadingVisual={Plus} variant="primary" size="small" onClick={ => setDialogOpen(true)}>새 패키지 배포</Button>
      </div>
      {rows.map((p) => (
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
            {/* 긴 설명 말줄임표 처리 */}
            <Truncate title={p.description} style={{ fontSize: "12px", color: "var(--fgColor-muted)" }} maxWidth={420}>
              {p.description}
            </Truncate>
          </div>
          <span style={{ fontSize: "12px", color: "var(--fgColor-muted)", whiteSpace: "nowrap" }}>
            주간 {p.weeklyDownloads.toLocaleString("ko-KR")}회
          </span>
        </div>
      ))}
      {/* 총량 텍스트, "Showing N out of M" 패턴 */}
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--fgColor-muted)", textAlign: "center" }}>
        {rows.length} out of {packages.length} showing
      </div>
      {dialogOpen && <PublishPackageDialog onClose={ => setDialogOpen(false)} onPublish={publish} />}
    </div>
  );
}
