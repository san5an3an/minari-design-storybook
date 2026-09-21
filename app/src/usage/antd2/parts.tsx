import * as React from "react";
import { Avatar, Card, Flex, Statistic, Tag, theme, Typography } from "antd";

export const HR_LAYOUT_CSS = `
.hr-scroll { container-type: inline-size; container-name: hr; }
.hr-stats { display: grid; gap: 0.75rem; grid-template-columns: repeat(2, minmax(0, 1fr)); }
.hr-pair, .hr-split { display: grid; gap: 1rem; grid-template-columns: minmax(0, 1fr); align-items: start; }
.hr-toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem 0.75rem; }
.hr-toolbar-group { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; min-width: 0; }
@container hr (min-width: 48rem) {
  .hr-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .hr-pair { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .hr-split { grid-template-columns: minmax(0, 1fr) 20rem; }
}
`;

export type Tone = "brand" | "success" | "warning" | "danger" | "neutral";

// 톤은 옅은 바탕에 글자 조합. ConfigProvider가 시맨틱에서 옮긴 antd 토큰임
export function useToneColors: Record<Tone, { bg: string; fg: string }> {
  const { token } = theme.useToken;
  return {
    brand: { bg: token.colorPrimaryBg, fg: token.colorPrimary },
    success: { bg: token.colorSuccessBg, fg: token.colorSuccessText },
    warning: { bg: token.colorWarningBg, fg: token.colorWarningText },
    danger: { bg: token.colorErrorBg, fg: token.colorErrorText },
    neutral: { bg: "var(--semantic-bg-neutral-subtle)", fg: token.colorTextSecondary },
  };
}

export function StatusTag({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  const t = useToneColors[tone];
  return (
    <Tag style={{ background: t.bg, color: t.fg, border: "none", marginInlineEnd: 0 }}>
      {children}
    </Tag>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  tone: Tone;
  label: string;
  value: number | string;
  suffix?: string;
  // 숫자 아래 한 줄로 파생 근거 표시
  note: React.ReactNode;
}

export function StatCard({ icon, tone, label, value, suffix, note }: StatCardProps) {
  const { token } = theme.useToken;
  const colors = useToneColors[tone];
  return (
    <Card size="small" styles={{ body: { padding: 14 } }}>
      <Flex gap={12} align="flex-start">
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
            background: colors.bg,
            color: colors.fg,
            fontSize: token.fontSizeLG,
          }}
        >
          {icon}
        </span>
        <div style={{ minWidth: 0 }}>
          <Statistic title={label} value={value} suffix={suffix} />
          <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }} ellipsis>
            {note}
          </Typography.Text>
        </div>
      </Flex>
    </Card>
  );
}

// 표, 목록의 사람 정보 셀. 아바타, 이름, 보조 텍스트 한 줄
export function PersonCell({ name, sub, size = 32 }: { name: string; sub?: React.ReactNode; size?: number }) {
  const { token } = theme.useToken;
  return (
    <Flex gap={10} align="center" style={{ minWidth: 0 }}>
      <Avatar size={size} style={{ flex: "0 0 auto" }}>{name.slice(0, 1)}</Avatar>
      <div style={{ minWidth: 0, lineHeight: 1.35 }}>
        <Typography.Text strong ellipsis style={{ display: "block" }}>{name}</Typography.Text>
        {sub ? (
          <Typography.Text type="secondary" ellipsis style={{ display: "block", fontSize: token.fontSizeSM }}>
            {sub}
          </Typography.Text>
        ) : null}
      </div>
    </Flex>
  );
}
