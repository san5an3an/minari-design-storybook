import * as React from "react";
import type { ReactNode } from "react";
import { Text } from "@adobe/react-spectrum";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

export type Tone = "brand" | "success" | "warning" | "danger" | "neutral";

export const TONE_FG: Record<Tone, string> = {
  brand: "var(--semantic-fg-brand-default)",
  success: "var(--semantic-fg-success-default)",
  warning: "var(--semantic-fg-warning-default)",
  danger: "var(--semantic-fg-danger-default)",
  neutral: "var(--semantic-fg-neutral-subtle)",
};

export const TONE_BG: Record<Tone, string> = {
  brand: "var(--semantic-bg-brand-subtle)",
  success: "var(--semantic-bg-success-subtle)",
  warning: "var(--semantic-bg-warning-subtle)",
  danger: "var(--semantic-bg-danger-subtle)",
  neutral: "var(--semantic-bg-neutral-subtle)",
};

// 카드 한 장, 제목줄과 본문에 같은 여백 규칙 적용
export function Card({
  title, action, children, padding = "0.875rem", style,
}: {
  title?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  padding?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section
      style={{
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        background: "var(--semantic-bg-neutral-surface)",
        boxShadow: "var(--semantic-shadow-raised)",
        padding,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: "0.625rem",
        ...style,
      }}
    >
      {title ? (
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
          <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--semantic-fg-neutral-default)" }}>{title}</Text>
          {action}
        </header>
      ) : null}
      {children}
    </section>
  );
}

// 알약 모양 라벨, 상태나 분류 같은 짧은 값에 사용
export function Pill({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.25rem",
        padding: "0.125rem 0.5rem",
        borderRadius: "var(--semantic-radius-pill)",
        background: TONE_BG[tone],
        color: TONE_FG[tone],
        fontSize: "0.7rem",
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

// 아이콘 타일. 통계 카드 상단의 둥근 사각형
export function IconTile({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "2rem",
        height: "2rem",
        flexShrink: 0,
        borderRadius: "0.625rem",
        background: TONE_BG[tone],
        color: TONE_FG[tone],
      }}
    >
      {children}
    </span>
  );
}

// 미니 스파크라인. 축, 그리드 없이 추세만 표시. 높이는 부모가 지정
export function Sparkline({ data, tone = "brand" }: { data: readonly number[]; tone?: Tone }) {
  const id = React.useId.replace(/:/g, "");
  const points = data.map((v, i) => ({ i, v }));
  return (
    <div style={{ height: "2.5rem", width: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={points} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={`spark-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={TONE_FG[tone]} stopOpacity={0.28} />
              <stop offset="100%" stopColor={TONE_FG[tone]} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="v"
            stroke={TONE_FG[tone]}
            strokeWidth={1.75}
            fill={`url(#spark-${id})`}
            isAnimationActive={false}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// 통계 카드: 아이콘 타일, 라벨, 큰 수, 델타 칩, 스파크라인
export function StatCard({
  icon, tone, label, value, delta, deltaTone, spark,
}: {
  icon: ReactNode;
  tone: Tone;
  label: string;
  value: string;
  delta: string;
  deltaTone: Tone;
  spark: readonly number[];
}) {
  return (
    <Card style={{ flex: "1 1 0", gap: "0.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <IconTile tone={tone}>{icon}</IconTile>
        <Text UNSAFE_style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>{label}</Text>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap" }}>
        <Text UNSAFE_style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1.1 }}>{value}</Text>
        <Pill tone={deltaTone}>{delta}</Pill>
      </div>
      <Sparkline data={spark} tone={tone} />
    </Card>
  );
}

// 표 내 비율 값 막대
export function BarMeter({ pct, tone = "brand" }: { pct: number; tone?: Tone }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", minWidth: 0 }}>
      <span
        aria-hidden
        style={{
          flex: 1,
          minWidth: "2.5rem",
          height: "0.375rem",
          borderRadius: "var(--semantic-radius-pill)",
          background: "var(--semantic-bg-neutral-subtle)",
          overflow: "hidden",
        }}
      >
        <span style={{ display: "block", width: `${Math.max(2, Math.min(100, pct))}%`, height: "100%", background: TONE_FG[tone] }} />
      </span>
    </span>
  );
}

// 사람 1명, 아바타와 이름 정보
export function Person({ name, seed, size = "1.5rem" }: { name: string; seed: string; size?: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", minWidth: 0 }}>
      <img
        src={`https://i.pravatar.cc/64?u=${seed}`}
        alt=""
        style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
      />
      <Text UNSAFE_style={{ fontSize: "0.75rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</Text>
    </span>
  );
}

// 본문 옆 우측 레일
export function Rail({ children }: { children: ReactNode }) {
  return <aside style={{ display: "flex", flexDirection: "column", gap: "0.875rem", minWidth: 0 }}>{children}</aside>;
}

export function Spectrum2Styles {
  return (
    <style>{`
      .s2-stats { display: grid; gap: 0.875rem; grid-template-columns: repeat(2, minmax(0, 1fr)); }
      @container s2 (min-width: 56rem) {
        .s2-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      }
    `}</style>
  );
}

// 통계 카드 2열 또는 4열 배치, Spectrum2Styles 담당
export function StatGrid({ children }: { children: ReactNode }) {
  return <div className="s2-stats">{children}</div>;
}

// 필터 칩 목록. 활성 항목만 강조, 나머지는 중립 톤 처리
export function FilterChips<T extends string>({
  options, selected, onToggle,
}: {
  options: readonly T[];
  selected: ReadonlySet<T>;
  onToggle: (value: T) => void;
}) {
  return (
    <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
      {options.map((o) => {
        const on = selected.has(o);
        return (
          <button
            key={o}
            type="button"
            aria-pressed={on}
            onClick={ => onToggle(o)}
            style={{
              padding: "0.2rem 0.6rem",
              borderRadius: "var(--semantic-radius-pill)",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "0.72rem",
              fontWeight: on ? 700 : 500,
              whiteSpace: "nowrap",
              border: `var(--semantic-border-width-default) solid ${on ? "var(--semantic-border-brand-default)" : "var(--semantic-border-neutral-subtle)"}`,
              background: on ? "var(--semantic-bg-brand-subtle)" : "transparent",
              color: on ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-subtle)",
            }}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

// 본문+레일 2단 구성. 좁아지면 flex-wrap으로 레일이 본문 아래로 이동
export function TwoColumn({ main, rail }: { main: ReactNode; rail: ReactNode }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", alignItems: "flex-start" }}>
      <div style={{ flex: "3 1 26rem", display: "flex", flexDirection: "column", gap: "0.875rem", minWidth: 0 }}>{main}</div>
      <div style={{ flex: "1 1 15.5rem", minWidth: 0 }}>{rail}</div>
    </div>
  );
}

export function PromoCard({
  icon, title, body, cta,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <div
      style={{
        borderRadius: "var(--semantic-radius-container)",
        padding: "1rem",
        background: "linear-gradient(140deg, var(--semantic-bg-brand-default), var(--semantic-bg-brand-strong))",
        color: "var(--semantic-fg-on-brand-default)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.55rem",
        // 고정 높이 유지
        flexShrink: 0,
      }}
    >
      <span aria-hidden style={{ display: "inline-flex" }}>{icon}</span>
      {/* on-brand 약한 단계가 아닌 bg-brand-subtle용 전경색 */}
      <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 700, color: "var(--semantic-fg-on-brand-default)" }}>{title}</p>
      <p
        style={{
          margin: 0, fontSize: "0.7rem", lineHeight: 1.5,
          color: "var(--semantic-fg-on-brand-default)", opacity: 0.88,
          whiteSpace: "normal", overflow: "visible", textOverflow: "clip",
        }}
      >
        {body}
      </p>
      <button
        type="button"
        style={{
          marginTop: "0.1rem", border: "none", cursor: "pointer", fontFamily: "inherit",
          padding: "0.4rem 0.75rem", borderRadius: "var(--semantic-radius-control)",
          background: "var(--semantic-bg-neutral-surface)", color: "var(--semantic-fg-brand-default)",
          fontSize: "0.72rem", fontWeight: 700, flexShrink: 0,
        }}
      >
        {cta}
      </button>
    </div>
  );
}

// 화면 상단 헤더, 제목, 설명, 우측 액션, 은은한 브랜드 그라디언트 적용
export function PageBand({
  eyebrow, title, description, actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "1rem",
        flexWrap: "wrap",
        padding: "1rem 1.125rem",
        borderRadius: "var(--semantic-radius-container)",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        background: "linear-gradient(120deg, var(--semantic-bg-brand-subtle), var(--semantic-bg-neutral-subtlest) 70%)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem", minWidth: 0 }}>
        <Text UNSAFE_style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--semantic-fg-brand-default)", letterSpacing: "0.02em" }}>{eyebrow}</Text>
        <Text UNSAFE_style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.25 }}>{title}</Text>
        <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{description}</Text>
      </div>
      {actions ? <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>{actions}</div> : null}
    </div>
  );
}
