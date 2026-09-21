import * as React from "react";
import { Avatar, Card, Flex, Statistic, Tag, Tooltip, Typography, theme } from "antd";
import {
  memberOf,
  type EventKind, type Priority, type ProjectStatus, type TaskStatus,
} from "./data";

export type Tone = "brand" | "success" | "danger" | "warning" | "neutral";

export interface ToneStyle {
  // 옅은 바탕 위 글자
  fg: string;
  // 옅은 바탕
  bg: string;
  border: string;
  // 막대, 점 등 진한 면
  solid: string;
}

export function useTones: Record<Tone, ToneStyle> {
  const { token } = theme.useToken;
  return React.useMemo(
     => ({
      brand: {
        fg: "var(--semantic-fg-on-brand-subtle)",
        bg: token.colorPrimaryBg,
        border: token.colorPrimaryBorder,
        solid: token.colorPrimary,
      },
      success: {
        fg: token.colorSuccessText,
        bg: token.colorSuccessBg,
        border: token.colorSuccessBorder,
        solid: token.colorSuccess,
      },
      danger: {
        fg: token.colorErrorText,
        bg: token.colorErrorBg,
        border: token.colorErrorBorder,
        solid: token.colorError,
      },
      warning: {
        fg: token.colorWarningText,
        bg: token.colorWarningBg,
        border: token.colorWarningBorder,
        solid: token.colorWarning,
      },
      neutral: {
        fg: token.colorTextSecondary,
        bg: token.colorBgLayout,
        border: token.colorBorderSecondary,
        solid: token.colorTextSecondary,
      },
    }),
    [token],
  );
}

export const PROJECT_TONE: Record<ProjectStatus, Tone> = { 진행중: "brand", 지연: "danger", 완료: "success" };
export const TASK_TONE: Record<TaskStatus, Tone> = { "할 일": "neutral", 진행중: "brand", 검토: "warning", 완료: "success" };
export const PRIORITY_TONE: Record<Priority, Tone> = { 높음: "danger", 보통: "warning", 낮음: "neutral" };
export const EVENT_TONE: Record<EventKind, Tone> = {
  완료: "success", 배포: "success", 승인: "brand", 착수: "brand", 지연: "danger", 코멘트: "neutral",
};

export function ToneTag({ tone, icon, children }: { tone: Tone; icon?: React.ReactNode; children: React.ReactNode }) {
  const t = useTones[tone];
  return (
    <Tag
      icon={icon}
      style={{ color: t.fg, background: t.bg, borderColor: t.border, marginInlineEnd: 0, flex: "0 0 auto" }}
    >
      {children}
    </Tag>
  );
}

export function MemberAvatar({ id, size = "small" }: { id: string; size?: "small" | "default" | number }) {
  const m = memberOf(id);
  return (
    <Tooltip title={`${m.name} · ${m.role}`}>
      <Avatar size={size}>{m.name.slice(0, 1)}</Avatar>
    </Tooltip>
  );
}

// 겹친 아바타 목록. 넘치는 인원은 antd가 +N으로 접고 클릭 시 나머지 표시
export function MemberStack({ ids, max = 3 }: { ids: readonly string[]; max?: number }) {
  return (
    <Avatar.Group size="small" max={{ count: max }}>
      {ids.map((id) => (
        <MemberAvatar key={id} id={id} />
      ))}
    </Avatar.Group>
  );
}

// 아바타와 이름, 역할 한 줄 표시
export function MemberLine({ id, withRole = false }: { id: string; withRole?: boolean }) {
  const m = memberOf(id);
  return (
    <Flex align="center" gap={8} style={{ minWidth: 0 }}>
      <Avatar size="small" style={{ flex: "0 0 auto" }}>{m.name.slice(0, 1)}</Avatar>
      <Typography.Text ellipsis style={{ minWidth: 0 }}>
        {m.name}
        {withRole && <Typography.Text type="secondary"> · {m.role}</Typography.Text>}
      </Typography.Text>
    </Flex>
  );
}

export interface StatTileProps {
  tone: Tone;
  icon: React.ReactNode;
  label: string;
  value: number | string;
  suffix?: string;
  // 숫자 아래 한 줄로 출처 표시
  note?: React.ReactNode;
  // 맨 아래 셀, 얇은 진행 막대 형태
  footer?: React.ReactNode;
}

export function StatTile({ tone, icon, label, value, suffix, note, footer }: StatTileProps) {
  const { token } = theme.useToken;
  const t = useTones[tone];
  return (
    <Card size="small" styles={{ body: { display: "flex", flexDirection: "column", gap: 8, height: "100%" } }} style={{ height: "100%" }}>
      <Flex align="center" gap={12} style={{ minWidth: 0 }}>
        <span
          aria-hidden
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "0 0 auto",
            inlineSize: 36,
            blockSize: 36,
            borderRadius: token.borderRadius,
            background: t.bg,
            color: t.fg,
            fontSize: 18,
          }}
        >
          {icon}
        </span>
        <Statistic
          title={label}
          value={value}
          suffix={suffix}
          style={{ minWidth: 0 }}
          styles={{
            title: { fontSize: token.fontSizeSM, marginBlockEnd: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
            content: { fontSize: token.fontSizeHeading3, fontWeight: 700, lineHeight: 1.25, color: tone === "danger" ? t.fg : undefined },
            suffix: { fontSize: token.fontSize, fontWeight: 400 },
          }}
        />
      </Flex>
      {note && (
        <Typography.Text type="secondary" ellipsis style={{ fontSize: token.fontSizeSM }}>
          {note}
        </Typography.Text>
      )}
      {footer}
    </Card>
  );
}

export const SERIES = {
  first: "var(--component-chart-series-1)",
  second: "var(--component-chart-series-2)",
  third: "var(--component-chart-series-3)",
  fourth: "var(--component-chart-series-4)",
  // 계열색에 중립이 없어 미선택 상태는 중립 면 토큰으로 표시
  idle: "var(--semantic-bg-neutral-default)",
} as const;

export const CHART = {
  grid: "var(--component-chart-grid)",
  cursor: { fill: "var(--component-chart-grid)", fillOpacity: 0.35 },
  // 크기는 fontSize 대신 style로 지정. 표현 속성은 CSS 리셋에 밀릴 수 있음
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
    letterSpacing: "var(--component-chart-tooltip-letter-spacing)",
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
      <Typography.Text
        ellipsis
        style={{
          minWidth: 0,
          color: "var(--component-chart-legend-fg)",
          fontSize: "var(--component-chart-legend-font-size)",
          letterSpacing: "var(--component-chart-legend-letter-spacing)",
        }}
      >
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
