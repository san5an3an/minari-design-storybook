import * as React from "react";
import { Banner, CounterLabel, Details, Popover, ProgressBar, SegmentedControl } from "@primer/react";
import { Card } from "@primer/react/experimental";
import { CircleHelp, Download, Package, TrendingUp, type LucideIcon } from "lucide-react";
import { DOWNLOAD_STATS } from "../data";

const STAT_TONES = {
  success: { fg: "var(--fgColor-success)", bg: "var(--bgColor-success-muted)", path: "success.emphasis" },
  accent: { fg: "var(--fgColor-accent)", bg: "var(--bgColor-accent-muted)", path: "accent.emphasis" },
  neutral: { fg: "var(--fgColor-neutral)", bg: "var(--bgColor-neutral-muted)", path: "neutral.emphasis" },
} as const;
type Tone = keyof typeof STAT_TONES;
type Meter = { kind: "progress"; percent: number } | { kind: "trend"; percent: number };

function StatCard({ icon: Icon, label, value, tone, meter }: { icon: LucideIcon; label: string; value: string; tone: Tone; meter: Meter }) {
  const t = STAT_TONES[tone];
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

function DownloadStatCards {
  const total = DOWNLOAD_STATS.reduce((sum, s) => sum + s.weeklyDownloads, 0);
  const avgTrend = Math.round(DOWNLOAD_STATS.reduce((sum, s) => sum + s.trendPercent, 0) / DOWNLOAD_STATS.length);
  const topPackage = [...DOWNLOAD_STATS].sort((a, b) => b.weeklyDownloads - a.weeklyDownloads)[0];
  return (
    <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
      <StatCard icon={Download} label="총 주간 다운로드" value={total.toLocaleString("ko-KR")} tone="accent" meter={{ kind: "trend", percent: avgTrend }} />
      <StatCard icon={Package} label="추적 패키지" value={String(DOWNLOAD_STATS.length)} tone="neutral" meter={{ kind: "trend", percent: 40 }} />
      <StatCard icon={TrendingUp} label="1위 패키지 점유율" value={`${Math.round((topPackage.weeklyDownloads / total) * 100)}%`} tone="success" meter={{ kind: "progress", percent: Math.round((topPackage.weeklyDownloads / total) * 100) }} />
    </div>
  );
}

const RANGES = [
  { key: "7d", label: "7일", multiplier: 1 },
  { key: "30d", label: "30일", multiplier: 4.2 },
  { key: "90d", label: "90일", multiplier: 12.8 },
] as const;

const TONE_PATHS = ["accent.emphasis", "success.emphasis", "attention.emphasis"];
const TONES = ["var(--bgColor-accent-emphasis)", "var(--bgColor-success-emphasis)", "var(--bgColor-attention-emphasis)"];
const DAY_LABELS = ["월", "화", "수", "목", "금", "토", "일"];

export function DownloadsScreen {
  const [rangeIdx, setRangeIdx] = React.useState(0);
  const [helpOpen, setHelpOpen] = React.useState(false);
  const range = RANGES[rangeIdx];
  const total = DOWNLOAD_STATS.reduce((sum, s) => sum + s.weeklyDownloads, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <DownloadStatCards />
      <Banner
        variant="info"
        title="집계 기준"
        description="선택한 기간 동안의 누적 다운로드 수를 보여줍니다. 값은 지난 7일 측정치에 기간 배수를 곱한 추정치입니다."
        hideTitle
      />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
        <SegmentedControl aria-label="집계 기간" onChange={setRangeIdx}>
          {RANGES.map((r, i) => (
            <SegmentedControl.Button key={r.key} selected={rangeIdx === i}>
              {r.label}
            </SegmentedControl.Button>
          ))}
        </SegmentedControl>
        <span style={{ fontSize: "13px", color: "var(--fgColor-muted)" }}>
          총 <CounterLabel>{Math.round(total * range.multiplier).toLocaleString("ko-KR")}</CounterLabel> 회
        </span>
      </div>

      {/* 점유율 막대. 패키지별 다운로드 비중을 ProgressBar로 표시 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", position: "relative" }}>
          <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)" }}>패키지별 비중</div>
          {/* Popover는 계산 방식 설명용 정보 패널. 필요할 때만 열려 Banner와 역할 겹치지 않음 */}
          <button
            type="button"
            aria-label="비중 계산 방식 설명"
            onClick={ => setHelpOpen((v) => !v)}
            style={{ display: "flex", background: "none", border: "none", padding: 0, cursor: "pointer", color: "var(--fgColor-muted)" }}
          >
            <CircleHelp size={14} />
          </button>
          {helpOpen && (
            <Popover relative open caret="top-left" style={{ position: "absolute", top: "20px", left: "0", zIndex: 10 }}>
              <Popover.Content width="small" onClickOutside={ => setHelpOpen(false)}>
                <span style={{ fontSize: "12px", color: "var(--fgColor-default)" }}>
                  각 패키지의 7일 다운로드 수를 전체 합으로 나눈 비중입니다.
                </span>
              </Popover.Content>
            </Popover>
          )}
        </div>
        <ProgressBar barSize="large" aria-label="패키지별 다운로드 비중">
          {DOWNLOAD_STATS.map((s, idx) => (
            <ProgressBar.Item
              key={s.packageName}
              progress={(s.weeklyDownloads / total) * 100}
              bg={TONE_PATHS[idx % TONE_PATHS.length]}
              aria-label={s.packageName}
            />
          ))}
        </ProgressBar>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          {DOWNLOAD_STATS.map((s, idx) => (
            <div key={s.packageName} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--fgColor-muted)" }}>
              <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: TONES[idx % TONES.length] }} />
              {s.packageName}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {DOWNLOAD_STATS.map((s) => {
          const scaled = Math.round(s.weeklyDownloads * range.multiplier);
          const maxDay = Math.max(...s.dailyDownloads);
          return (
            <Details key={s.packageName} style={{ borderBottom: "1px solid var(--borderColor-muted)", padding: "12px 4px" }}>
              <Details.Summary style={{ cursor: "pointer", listStyle: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, color: "var(--fgColor-default)" }}>{s.packageName}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "14px" }}>{scaled.toLocaleString("ko-KR")}회/{range.label}</span>
                    <span style={{ fontSize: "13px", color: s.trendPercent >= 0 ? "var(--fgColor-success)" : "var(--fgColor-danger)" }}>
                      {s.trendPercent >= 0 ? "▲" : "▼"} {Math.abs(s.trendPercent)}%
                    </span>
                  </div>
                </div>
              </Details.Summary>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "64px", marginTop: "12px", paddingInline: "2px" }}>
                {s.dailyDownloads.map((d, i) => (
                  <div key={DAY_LABELS[i]} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: 1 }}>
                    <div
                      aria-hidden
                      style={{
                        width: "100%",
                        height: `${Math.max(6, (d / maxDay) * 44)}px`,
                        borderRadius: "3px 3px 0 0",
                        background: "var(--bgColor-accent-emphasis)",
                      }}
                    />
                    <span style={{ fontSize: "11px", color: "var(--fgColor-muted)" }}>{DAY_LABELS[i]}</span>
                  </div>
                ))}
              </div>
            </Details>
          );
        })}
      </div>
    </div>
  );
}
