import * as React from "react";
import { Avatar, Flex, Text } from "@adobe/react-spectrum";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { ArrowDown, ArrowUp } from "lucide-react";
import { TEAM, type ProjectStatus } from "./data";

export const STATUS_TOKEN: Record<ProjectStatus, { fg: string; bg: string }> = {
  "진행중": { fg: "var(--semantic-fg-brand-default)", bg: "var(--semantic-bg-brand-subtle)" },
  "검토중": { fg: "var(--semantic-fg-warning-default)", bg: "var(--semantic-bg-warning-subtle)" },
  "완료": { fg: "var(--semantic-fg-success-default)", bg: "var(--semantic-bg-success-subtle)" },
};

export function StatusChip({ status }: { status: ProjectStatus }) {
  const t = STATUS_TOKEN[status];
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.3rem", flexShrink: 0,
        padding: "0.1rem 0.45rem", borderRadius: "var(--semantic-radius-pill)",
        background: t.bg, color: t.fg, fontSize: "0.68rem", fontWeight: 600, whiteSpace: "nowrap",
      }}
    >
      <span aria-hidden style={{ width: "0.35rem", height: "0.35rem", borderRadius: "50%", background: t.fg }} />
      {status}
    </span>
  );
}

// 카드 레이아웃, 제목과 우상단 조작 요소로 구성
export function Card({
  title, action, children, pad = "1rem",
}: {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  pad?: string;
}) {
  return (
    <section
      style={{
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        background: "var(--semantic-bg-neutral-surface)",
        boxShadow: "var(--semantic-shadow-raised)",
        padding: pad, minWidth: 0,
        display: "flex", flexDirection: "column", gap: "0.7rem",
      }}
    >
      {title ? (
        <Flex justifyContent="space-between" alignItems="center" gap="size-100" UNSAFE_style={{ minWidth: 0 }}>
          <Text
            UNSAFE_style={{
              fontWeight: 700, fontSize: "0.85rem",
              minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}
          >
            {title}
          </Text>
          {action ? <span style={{ flexShrink: 0 }}>{action}</span> : null}
        </Flex>
      ) : null}
      {children}
    </section>
  );
}

// 카드 우상단 옅은 조작 단서 표시
export function CardAction({ children, onPress }: { children: React.ReactNode; onPress?:  => void }) {
  const style: React.CSSProperties = {
    fontSize: "0.7rem", color: "var(--semantic-fg-brand-default)", fontWeight: 600, whiteSpace: "nowrap",
    background: "none", border: "none", padding: 0, font: "inherit",
  };
  if (!onPress) return <span style={style}>{children}</span>;
  return (
    <button type="button" onClick={onPress} style={{ ...style, cursor: "pointer" }}>
      {children}
    </button>
  );
}

// 기간 필터 칩. 카드 헤더의 최근 30일 위치
export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.25rem",
        padding: "0.15rem 0.5rem", borderRadius: "var(--semantic-radius-pill)",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        background: "var(--semantic-bg-neutral-subtlest)",
        fontSize: "0.68rem", color: "var(--semantic-fg-neutral-subtle)", whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

export interface StatSpec {
  label: string;
  value: string;
  sub: string;
  delta: string;
  up: boolean;
  trend: readonly number[];
  icon: React.ReactNode;
  tone: "brand" | "success" | "warning" | "danger";
}

const TONE_BG: Record<StatSpec["tone"], string> = {
  brand: "var(--semantic-bg-brand-subtle)",
  success: "var(--semantic-bg-success-subtle)",
  warning: "var(--semantic-bg-warning-subtle)",
  danger: "var(--semantic-bg-danger-subtle)",
};
const TONE_FG: Record<StatSpec["tone"], string> = {
  brand: "var(--semantic-fg-brand-default)",
  success: "var(--semantic-fg-success-default)",
  warning: "var(--semantic-fg-warning-default)",
  danger: "var(--semantic-fg-danger-default)",
};

export function StatCard({ s }: { s: StatSpec }) {
  const DeltaIcon = s.up ? ArrowUp : ArrowDown;
  const deltaColor = s.up ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-danger-default)";
  const gradientId = `sp3-spark-${s.label.replace(/[^A-Za-z0-9]/g, "")}`;
  const points = s.trend.map((v, i) => ({ i, v }));
  return (
    <section
      style={{
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        background: "var(--semantic-bg-neutral-surface)",
        boxShadow: "var(--semantic-shadow-raised)",
        padding: "0.7rem 0.75rem", minWidth: 0, overflow: "hidden",
        display: "flex", flexDirection: "column", gap: "0.4rem",
      }}
    >
      {/* 1행에 아이콘, 라벨, 델타 표시 */}
      <Flex justifyContent="space-between" alignItems="center" gap="size-75" UNSAFE_style={{ minWidth: 0 }}>
        <Flex alignItems="center" gap="size-75" UNSAFE_style={{ minWidth: 0 }}>
          <span
            aria-hidden
            style={{
              width: "1.25rem", height: "1.25rem", flexShrink: 0, borderRadius: "var(--semantic-radius-control)",
              background: TONE_BG[s.tone], color: TONE_FG[s.tone],
              display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {s.icon}
          </span>
          {/* nowrap과 말줄임 적용. 폭이 좁으면 한글이 세로로 한 글자씩 쪼개지는 문제가 있음 */}
          <Text
            UNSAFE_style={{
              fontSize: "0.72rem", color: "var(--semantic-fg-neutral-subtle)",
              minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}
          >
            {s.label}
          </Text>
        </Flex>
        <Flex alignItems="center" gap="size-25" UNSAFE_style={{ flexShrink: 0 }}>
          <DeltaIcon size={10} color={deltaColor} />
          <Text UNSAFE_style={{ fontSize: "0.68rem", fontWeight: 600, color: deltaColor }}>{s.delta}</Text>
        </Flex>
      </Flex>

      {/* 2행 구성, 숫자, 부제 왼쪽 스파크라인 오른쪽 배치로 카드 높이 조정 */}
      <Flex justifyContent="space-between" alignItems="end" gap="size-75" UNSAFE_style={{ minWidth: 0 }}>
        <Flex direction="column" gap="size-0" UNSAFE_style={{ minWidth: 0 }}>
          <Text UNSAFE_style={{ fontSize: "1.45rem", fontWeight: 700, lineHeight: 1.15, whiteSpace: "nowrap" }}>{s.value}</Text>
          <Text
            UNSAFE_style={{
              fontSize: "0.65rem", color: "var(--semantic-fg-neutral-subtlest)",
              minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}
          >
            {s.sub}
          </Text>
        </Flex>
        <div style={{ width: "4rem", height: "2rem", flexShrink: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={points} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={TONE_FG[s.tone]} stopOpacity={0.35} />
                  <stop offset="100%" stopColor={TONE_FG[s.tone]} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="v" stroke={TONE_FG[s.tone]} strokeWidth={1.6} fill={`url(#${gradientId})`} isAnimationActive={false} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Flex>
    </section>
  );
}

// 마감 임박. 날짜 타일, 제목, 분류, 상태칩으로 구성
export function DeadlineRow({
  date, title, meta, status,
}: { date: string; title: string; meta: string; status: ProjectStatus }) {
  const [mm, dd] = date.split("-");
  const t = STATUS_TOKEN[status];
  return (
    <Flex alignItems="center" gap="size-100" UNSAFE_style={{ minWidth: 0 }}>
      <Flex
        direction="column"
        alignItems="center"
        UNSAFE_style={{
          width: "2.3rem", flexShrink: 0, padding: "0.25rem 0",
          borderRadius: "var(--semantic-radius-control)",
          background: t.bg, color: t.fg,
        }}
      >
        <Text UNSAFE_style={{ fontSize: "0.85rem", fontWeight: 700, lineHeight: 1, color: "inherit" }}>{dd}</Text>
        <Text UNSAFE_style={{ fontSize: "0.6rem", lineHeight: 1.4, color: "inherit" }}>{mm}월</Text>
      </Flex>
      <Flex direction="column" gap="size-0" UNSAFE_style={{ minWidth: 0, flex: 1 }}>
        <Text UNSAFE_style={{ fontSize: "0.76rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</Text>
        <Text UNSAFE_style={{ fontSize: "0.66rem", color: "var(--semantic-fg-neutral-subtle)" }}>{meta}</Text>
      </Flex>
      <StatusChip status={status} />
    </Flex>
  );
}

// 최근 활동. 아바타와 "누가 무엇을", 상대 시간으로 표시
export function ActivityRow({ memberId, action, target, at }: { memberId: string; action: string; target: string; at: string }) {
  const m = TEAM.find((x) => x.id === memberId);
  return (
    <Flex alignItems="start" gap="size-100" UNSAFE_style={{ minWidth: 0 }}>
      {m ? <Avatar src={`https://i.pravatar.cc/64?u=${m.avatarSeed}`} alt={m.name} size={26} /> : null}
      <Flex direction="column" gap="size-0" UNSAFE_style={{ minWidth: 0, flex: 1 }}>
        <Text UNSAFE_style={{ fontSize: "0.74rem" }}>
          <strong>{m?.name ?? "알 수 없음"}</strong>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}> · {action}</span>
        </Text>
        <Text UNSAFE_style={{ fontSize: "0.68rem", color: "var(--semantic-fg-neutral-subtle)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{target}</Text>
        <Text UNSAFE_style={{ fontSize: "0.63rem", color: "var(--semantic-fg-neutral-subtlest)" }}>{at}</Text>
      </Flex>
    </Flex>
  );
}

// 레일 하단 프로모. 그라디언트, 문구 2라인, 버튼 구성
export function PromoCard({ title, body, cta }: { title: string; body: string; cta: string }) {
  return (
    <div
      style={{
        borderRadius: "var(--semantic-radius-container)",
        background: "linear-gradient(140deg, var(--semantic-bg-brand-strong), var(--semantic-bg-brand-default))",
        color: "var(--semantic-fg-on-brand-default)",
        padding: "1rem", display: "flex", flexDirection: "column", gap: "0.45rem",
      }}
    >
      <Text UNSAFE_style={{ fontSize: "0.85rem", fontWeight: 700, color: "inherit" }}>{title}</Text>
      <Text UNSAFE_style={{ fontSize: "0.7rem", color: "inherit", opacity: 0.9, lineHeight: 1.45 }}>{body}</Text>
      <span
        style={{
          marginTop: "0.2rem", alignSelf: "flex-start",
          padding: "0.3rem 0.7rem", borderRadius: "var(--semantic-radius-control)",
          background: "var(--semantic-bg-neutral-surface)", color: "var(--semantic-fg-brand-default)",
          fontSize: "0.72rem", fontWeight: 700,
        }}
      >
        {cta}
      </span>
    </div>
  );
}

// 아바타 스택, 카드 하단에서 참여자 겹쳐 표시
export function AvatarStack({ memberIds, size = 22 }: { memberIds: readonly string[]; size?: number }) {
  const members = TEAM.filter((m) => memberIds.includes(m.id));
  return (
    <Flex UNSAFE_style={{ marginInlineStart: "0.35rem" }}>
      {members.map((m) => (
        <img
          key={m.id}
          src={`https://i.pravatar.cc/64?u=${m.avatarSeed}`}
          alt={m.name}
          title={`${m.name} · ${m.role}`}
          style={{
            width: `${size / 16}rem`, height: `${size / 16}rem`, borderRadius: "50%",
            border: "2px solid var(--semantic-bg-neutral-surface)",
            marginInlineStart: "-0.35rem", objectFit: "cover",
          }}
        />
      ))}
    </Flex>
  );
}

// 진행률 바, 카드 안에서는 얇은 버전 사용
export function Bar({ pct, tone = "brand" }: { pct: number; tone?: StatSpec["tone"] }) {
  return (
    <div style={{ width: "100%", height: "0.4rem", borderRadius: "var(--semantic-radius-pill)", background: "var(--semantic-bg-neutral-subtle)", overflow: "hidden" }}>
      <div style={{ width: `${Math.max(0, Math.min(100, pct))}%`, height: "100%", background: TONE_FG[tone], borderRadius: "var(--semantic-radius-pill)" }} />
    </div>
  );
}
