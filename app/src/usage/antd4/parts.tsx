import * as React from "react";
import { Card, Flex, Tooltip, Typography } from "antd";

export const REPORT_LAYOUT_CSS = `
.rp-scroll { container-type: inline-size; container-name: rp; }
.rp-axes { display: grid; gap: 2rem 1.5rem; grid-template-columns: minmax(0, 1fr); align-items: stretch; }
.rp-axis { container-type: inline-size; container-name: ax; display: flex; flex-direction: column; min-width: 0; }
.rp-bento { display: grid; gap: 0.75rem; grid-template-columns: repeat(12, minmax(0, 1fr)); flex: 1; align-content: start; }
.rp-bento > * { min-width: 0; }
.rp-c12 { grid-column: span 12; }
.rp-c6  { grid-column: span 12; }
.rp-c4  { grid-column: span 6; }
.rp-c3  { grid-column: span 6; }
// 표와 차트 나란히 두는 래퍼. grid 트랙 auto라 내용만큼 늘어나는 구조임
.rp-pair { display: grid; gap: 1rem; grid-template-columns: minmax(0, 1fr); align-items: center; }
.rp-scrollx { min-width: 0; overflow-x: auto; }
// 축 폭 42rem 초과 시 KPI 4셀, 표/차트 좌우 정렬
@container ax (min-width: 42rem) {
  .rp-c3 { grid-column: span 3; }
  .rp-c4 { grid-column: span 4; }
  .rp-c6 { grid-column: span 6; }
}
@container ax (min-width: 56rem) {
  .rp-pair { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
}
// 너비 62rem 초과 시 좌우 배치, 미만이면 세로 쌓기
@container rp (min-width: 62rem) {
  .rp-axes { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
}
`;

// 수치 필드. Statistic 미사용, suffix/prefix가 숫자처럼 붙어 보임
export function StatTile({
  label, value, unit, sub, tone,
}: {
  label: string;
  value: React.ReactNode;
  unit?: string;
  sub?: string;
  tone?: "up" | "down";
}) {
  return (
    <Card size="small" style={{ blockSize: "100%" }} styles={{ body: { padding: "0.875rem 1rem" } }}>
      <Typography.Text type="secondary" style={{ fontSize: 12, letterSpacing: "0.02em" }}>
        {label}
      </Typography.Text>
      <div
        style={{
          marginBlockStart: 6,
          fontSize: 24,
          fontWeight: 700,
          lineHeight: 1.1,
          fontVariantNumeric: "tabular-nums",
          color:
            tone === "up" ? "var(--semantic-fg-success-default)"
            : tone === "down" ? "var(--semantic-fg-danger-default)"
            : undefined,
        }}
      >
        {value}
        {unit && (
          <span style={{ marginInlineStart: 4, fontSize: 13, fontWeight: 400, color: "var(--semantic-fg-neutral-subtle)" }}>
            {unit}
          </span>
        )}
      </div>
      {sub && (
        <Typography.Paragraph type="secondary" style={{ marginBlockEnd: 0, marginBlockStart: 6, fontSize: 12, lineHeight: 1.5 }}>
          {sub}
        </Typography.Paragraph>
      )}
    </Card>
  );
}

export function Figure({
  title, caption, source, action, className, children,
}: {
  title: string;
  caption?: string;
  source?: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Card
      className={className}
      size="small"
      style={{ blockSize: "100%", display: "flex", flexDirection: "column" }}
      styles={{ body: { padding: 0, flex: 1, display: "flex", flexDirection: "column", minBlockSize: 0 } }}
    >
      <div style={{ padding: "0.75rem 1rem", borderBlockEnd: "1px solid var(--semantic-border-neutral-subtle)" }}>
        <Flex align="center" justify="space-between" gap={8} wrap style={{ minWidth: 0 }}>
          <Typography.Text strong style={{ minWidth: 0, fontSize: 14 }}>{title}</Typography.Text>
          {action}
        </Flex>
        {caption && (
          <Typography.Paragraph type="secondary" style={{ marginBlockEnd: 0, marginBlockStart: 4, fontSize: 12.5, lineHeight: 1.6 }}>
            {caption}
          </Typography.Paragraph>
        )}
      </div>
      <div style={{ padding: "1rem", flex: 1, minBlockSize: 0 }}>{children}</div>
      {source && (
        <div
          style={{
            marginBlockStart: "auto",
            padding: "0.5rem 1rem",
            borderBlockStart: "1px solid var(--semantic-border-neutral-subtle)",
            fontSize: 11,
            fontFamily: "var(--base-font-family-mono)",
            color: "var(--semantic-fg-neutral-subtle)",
          }}
        >
          {source}
        </div>
      )}
    </Card>
  );
}

// Callout 블록. antd Alert의 제목+본문 구조 그대로 사용
export function Note({ tone, title, children }: { tone: "info" | "warn" | "stop"; title: string; children: React.ReactNode }) {
  const mark = tone === "stop" ? "" : tone === "warn" ? "" : "";
  const border =
    tone === "stop" ? "var(--semantic-border-danger-default)"
    : tone === "warn" ? "var(--semantic-border-warning-default)"
    : "var(--semantic-border-neutral-subtle)";
  const bg =
    tone === "stop" ? "var(--semantic-bg-danger-subtlest)"
    : tone === "warn" ? "var(--semantic-bg-warning-subtlest)"
    : "var(--semantic-bg-neutral-subtlest)";
  return (
    <div style={{ border: `1px solid ${border}`, background: bg, borderRadius: 8, padding: "0.75rem 0.875rem" }}>
      <Flex gap={10} align="flex-start">
        <span aria-hidden style={{ flex: "0 0 auto", fontSize: 13, lineHeight: "1.5rem" }}>{mark}</span>
        <div style={{ minWidth: 0 }}>
          <Typography.Text strong style={{ fontSize: 13 }}>{title}</Typography.Text>
          <Typography.Paragraph style={{ marginBlockEnd: 0, marginBlockStart: 4, fontSize: 12.5, lineHeight: 1.65 }} type="secondary">
            {children}
          </Typography.Paragraph>
        </div>
      </Flex>
    </div>
  );
}

export const HEAT_STEPS = [
  { bg: "var(--semantic-bg-neutral-subtlest)", fg: "var(--semantic-fg-neutral-subtle)" },
  { bg: "var(--semantic-bg-brand-subtlest)", fg: "var(--semantic-fg-neutral-default)" },
  { bg: "var(--semantic-bg-brand-subtle)", fg: "var(--semantic-fg-neutral-default)" },
  { bg: "var(--semantic-bg-brand-default)", fg: "var(--semantic-fg-on-brand-default)" },
  { bg: "var(--semantic-bg-brand-strong)", fg: "var(--semantic-fg-on-neutral-default)" },
] as const;

// 0~1 비율을 5단계 중 하나로 매핑. 경계 >= 적용해 만점을 마지막 단계로 지정
export function heatStep(ratio: number): number {
  const r = Math.max(0, Math.min(1, ratio));
  if (r >= 0.8) return 4;
  if (r >= 0.6) return 3;
  if (r >= 0.4) return 2;
  if (r >= 0.2) return 1;
  return 0;
}

export function HeatCell({ value, max, title }: { value: number; max: number; title?: string }) {
  const step = HEAT_STEPS[heatStep(value / max)];
  const cell = (
    <div
      style={{
        background: step.bg,
        color: step.fg,
        borderRadius: 6,
        paddingBlock: 6,
        textAlign: "center",
        fontSize: 12.5,
        fontWeight: 600,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {value}
    </div>
  );
  return title ? <Tooltip title={title}>{cell}</Tooltip> : cell;
}

// 범례 순서로 방향 지정. 0단계부터 4단계까지 나열하면 모든 모드에 적용
export function HeatLegend({ max }: { max: number }) {
  return (
    <Flex align="center" gap={8} wrap>
      <Typography.Text type="secondary" style={{ fontSize: 11 }}>0점</Typography.Text>
      <Flex gap={3}>
        {HEAT_STEPS.map((s, i) => (
          <span
            key={i}
            aria-hidden
            style={{ inlineSize: 22, blockSize: 12, borderRadius: 3, background: s.bg, border: "1px solid var(--semantic-border-neutral-subtle)" }}
          />
        ))}
      </Flex>
      <Typography.Text type="secondary" style={{ fontSize: 11 }}>{max}점(만점)</Typography.Text>
    </Flex>
  );
}

export const SERIES = {
  first: "var(--component-chart-series-1)",
  second: "var(--component-chart-series-2)",
  third: "var(--component-chart-series-3)",
  fourth: "var(--component-chart-series-4)",
  idle: "var(--semantic-bg-neutral-default)",
} as const;

export const CHART = {
  grid: "var(--component-chart-grid)",
  cursor: { fill: "var(--component-chart-grid)", fillOpacity: 0.35 },
  tick: {
    fill: "var(--component-chart-axis-fg)",
    style: {
      fontSize: "var(--component-chart-axis-font-size)",
      letterSpacing: "var(--component-chart-axis-letter-spacing)",
    },
  },
  tooltip: {
    background: "var(--component-chart-tooltip-bg)",
    border: "var(--semantic-border-width-default) solid var(--component-chart-tooltip-border)",
    borderRadius: "var(--component-chart-tooltip-radius)",
    color: "var(--component-chart-tooltip-fg)",
    fontSize: "var(--component-chart-tooltip-font-size)",
    padding: "var(--component-chart-tooltip-padding-block) var(--component-chart-tooltip-padding-inline)",
  } satisfies React.CSSProperties,
  tooltipItem: { color: "var(--component-chart-tooltip-fg)", padding: 0 } satisfies React.CSSProperties,
  tooltipLabel: { color: "var(--component-chart-tooltip-fg)", fontWeight: 600 } satisfies React.CSSProperties,
} as const;

// 범례 항목 렌더링. recharts Legend가 색 견본 크기와 글자 토큰 미지원임
export function LegendItem({ color, label, value }: { color: string; label: string; value?: React.ReactNode }) {
  return (
    <Flex align="center" gap={6} style={{ minWidth: 0 }}>
      <span
        aria-hidden
        style={{
          flex: "0 0 auto",
          inlineSize: "var(--component-chart-swatch-size)",
          blockSize: "var(--component-chart-swatch-size)",
          borderRadius: "var(--component-chart-swatch-radius)",
          background: color,
        }}
      />
      <Typography.Text ellipsis style={{ minWidth: 0, fontSize: "var(--component-chart-legend-font-size)", color: "var(--component-chart-legend-fg)" }}>
        {label}
      </Typography.Text>
      {value !== undefined && (
        <Typography.Text strong style={{ marginInlineStart: "auto", fontSize: "var(--component-chart-legend-font-size)" }}>
          {value}
        </Typography.Text>
      )}
    </Flex>
  );
}

export const fmt = (n: number) => n.toLocaleString("ko-KR");

// 백분율 소수 한 자리 고정
export const pct1 = (n: number) => n.toFixed(1);
