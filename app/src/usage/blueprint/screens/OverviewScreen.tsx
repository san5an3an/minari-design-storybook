import { Callout, Card, Icon } from "@blueprintjs/core";
import type { IconName, Intent } from "@blueprintjs/core";

interface Stat {
  label: string;
  value: string;
  icon: IconName;
  intent: Intent;
}

const STATS: Stat[] = [
  { label: "지난 1시간 요청", value: "48,204", icon: "pulse", intent: "primary" },
  { label: "에러율", value: "0.42%", icon: "warning-sign", intent: "warning" },
  { label: "활성 알림", value: "2", icon: "notifications", intent: "danger" },
];

function StatTile({ stat }: { stat: Stat }) {
  return (
    <Card style={{ flex: "1 1 10rem", minWidth: "10rem", overflow: "hidden", position: "relative" }}>
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="flex items-center justify-center"
          style={{
            inlineSize: "1.75rem",
            blockSize: "1.75rem",
            borderRadius: "var(--semantic-radius-control)",
            background: `var(--semantic-bg-${stat.intent === "primary" ? "brand" : stat.intent}-subtle)`,
            color: `var(--semantic-fg-${stat.intent === "primary" ? "brand" : stat.intent}-default)`,
          }}
        >
          <Icon icon={stat.icon} size={14} />
        </span>
        <span style={{ color: "var(--bp-content-fg-muted, inherit)", fontSize: "0.8125rem" }}>
          {stat.label}
        </span>
      </div>
      <div style={{ fontSize: "1.5rem", fontWeight: 600, marginBlockStart: "0.5rem" }}>
        {stat.value}
      </div>
      {/* 카드별 구석 워터마크 표시, 숫자와 안 겹치게 낮은 불투명도 적용 */}
      <Icon
        aria-hidden
        icon={stat.icon}
        size={64}
        style={{
          position: "absolute",
          insetInlineEnd: "-0.75rem",
          insetBlockEnd: "-0.75rem",
          color: `var(--semantic-fg-${stat.intent === "primary" ? "brand" : stat.intent}-default)`,
          opacity: 0.08,
        }}
      />
    </Card>
  );
}

export function OverviewScreen {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        {STATS.map((s) => (
          <StatTile key={s.label} stat={s} />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <Callout intent="danger" title="결제 서비스 5xx 급증">
          지난 5분간 오류율이 12%로 올랐다. 임계치 5% 초과.
        </Callout>
        <Callout intent="warning" title="재고 동기화 지연">
          평균 지연이 40초로, 목표치(10초)를 넘어섰다.
        </Callout>
      </div>
    </div>
  );
}
