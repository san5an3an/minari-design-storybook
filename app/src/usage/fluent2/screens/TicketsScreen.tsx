import * as React from "react";
import { Badge, Body1, Caption1, Card, Dropdown, Option, Persona, Tooltip } from "@fluentui/react-components";
import {
  AlertRegular, CheckmarkCircleRegular, ClockRegular, TicketDiagonalRegular,
} from "@fluentui/react-icons";
import { TICKETS, type Ticket } from "../data";
import type { ScreenProps } from "../screens";

const PRIORITY_COLOR: Record<Ticket["priority"], "danger" | "warning" | "informative"> = {
  긴급: "danger",
  보통: "warning",
  낮음: "informative",
};
const STATUS_COLOR: Record<Ticket["status"], "danger" | "warning" | "success"> = {
  열림: "danger",
  "진행 중": "warning",
  해결됨: "success",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60";

// 티켓 목록 상단 인사 배너. --colorBrandBackground 계열 색 토큰 사용
function TicketsHero {
  const open = TICKETS.filter((t) => t.status !== "해결됨").length;
  return (
    <div
      style={{
        alignItems: "flex-start",
        backgroundImage:
          `linear-gradient(120deg, color-mix(in oklch, var(--colorBrandBackground) 88%, black) 0%, `
          + `color-mix(in oklch, var(--colorBrandBackground) 70%, black) 70%), url("${HERO_IMAGE}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        justifyContent: "flex-end",
        minHeight: "144px",
        padding: "20px",
      }}
    >
      <Body1 style={{ color: "white", fontWeight: 600, fontSize: "18px" }}>
        IT팀입니다 👋 오늘도 문의를 하나씩 풀어볼까요
      </Body1>
      <Caption1 style={{ color: "white", opacity: 0.85 }}>
        지금 열려 있는 티켓이 {open}건 있어요.
      </Caption1>
    </div>
  );
}

function Sparkline({ data, color }: { data: readonly number[]; color: string }) {
  const w = 72;
  const h = 28;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / span) * h}`)
    .join(" ");
  return (
    <svg width={w} height={h} aria-hidden style={{ display: "block" }}>
      <polyline points={points} fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type StatTone = "brand" | "success" | "warning" | "danger";
interface DeskStat {
  label: string; value: string; delta: string; up: boolean; tone: StatTone;
  icon: React.ComponentType<{ fontSize?: number }>; trend: readonly number[];
}
const DESK_STATS: readonly DeskStat[] = [
  { label: "열린 티켓", value: `${TICKETS.filter((t) => t.status !== "해결됨").length}건`, delta: "-1건", up: true, tone: "brand", icon: TicketDiagonalRegular, trend: [5, 5, 4, 4, 3, 3, 3] },
  { label: "긴급 티켓", value: `${TICKETS.filter((t) => t.priority === "긴급").length}건`, delta: "+1건", up: false, tone: "danger", icon: AlertRegular, trend: [0, 0, 1, 1, 1, 1, 1] },
  { label: "평균 응답시간", value: "42분", delta: "-8분", up: true, tone: "warning", icon: ClockRegular, trend: [56, 52, 50, 48, 45, 44, 42] },
  { label: "이번 주 해결", value: "12건", delta: "+3건", up: true, tone: "success", icon: CheckmarkCircleRegular, trend: [6, 7, 8, 9, 10, 11, 12] },
];

const TONE_VAR: Record<StatTone, string> = {
  brand: "var(--colorBrandBackground)",
  success: "var(--colorPaletteGreenBackground3)",
  warning: "var(--colorPaletteYellowBackground3)",
  danger: "var(--colorPaletteRedBackground3)",
};

function DeskStatCard({ stat }: { stat: DeskStat }) {
  const Icon = stat.icon;
  const tone = TONE_VAR[stat.tone];
  return (
    <Card style={{ padding: "14px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span
            aria-hidden
            style={{
              alignItems: "center", background: tone, borderRadius: "50%",
              color: "white", display: "flex", height: "28px", justifyContent: "center", width: "28px",
            }}
          >
            <Icon fontSize={14} />
          </span>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{stat.label}</Caption1>
          <Body1 style={{ fontSize: "18px", fontWeight: 600 }}>{stat.value}</Body1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
          <Badge color={stat.up ? "success" : "danger"} appearance="tint">
            {stat.delta}
          </Badge>
          <Sparkline data={stat.trend} color={stat.up ? "var(--colorPaletteGreenForeground2)" : "var(--colorPaletteRedForeground2)"} />
        </div>
      </div>
    </Card>
  );
}

export function TicketsScreen({ onNavigate, onSelect }: ScreenProps) {
  const [category, setCategory] = React.useState("전체");

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const categories = ["전체", ...new Set(TICKETS.map((t) => t.category))];
  const rows = category === "전체" ? TICKETS : TICKETS.filter((t) => t.category === category);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TicketsHero />
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        {DESK_STATS.map((s) => (
          <DeskStatCard key={s.label} stat={s} />
        ))}
      </div>
      <Dropdown
        value={category}
        selectedOptions={[category]}
        onOptionSelect={(_, data) => setCategory(data.optionValue ?? "전체")}
        style={{ minWidth: "160px" }}
        aria-label="분류 거르기"
      >
        {categories.map((c) => (
          <Option key={c} value={c}>{c}</Option>
        ))}
      </Dropdown>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {rows.map((t) => (
        <Card
          key={t.id}
          onClick={ => open(t.id)}
          style={{ cursor: "pointer", padding: "12px 14px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Persona
              name={t.requester}
              secondaryText={t.category}
              avatar={{ color: "colorful" }}
              size="medium"
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1, minWidth: 0 }}>
              <Body1 style={{ fontWeight: 600 }}>{t.subject}</Body1>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{t.createdLabel}</Caption1>
            </div>
            <Tooltip content={`우선순위: ${t.priority}`} relationship="label">
              <Badge color={PRIORITY_COLOR[t.priority]} appearance="tint">{t.priority}</Badge>
            </Tooltip>
            <Badge color={STATUS_COLOR[t.status]} appearance="filled">{t.status}</Badge>
          </div>
        </Card>
      ))}
      </div>
    </div>
  );
}
