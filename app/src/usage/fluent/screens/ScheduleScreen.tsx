import * as React from "react";
import {
  Avatar, AvatarGroup, AvatarGroupItem, Body1, Card, Caption1, Popover, PopoverSurface,
  PopoverTrigger, ProgressBar, Skeleton, SkeletonItem, Switch,
} from "@fluentui/react-components";
import { CalendarLtrRegular, ClockRegular, InfoRegular, PeopleRegular } from "@fluentui/react-icons";
import { MEETINGS, type MeetingItem } from "../data";
import { MiniBarChart } from "../miniBarChart";

const COLOR_VAR: Record<MeetingItem["color"], string> = {
  brand: "var(--colorBrandBackground)",
  success: "var(--colorStatusSuccessBackground3)",
  warning: "var(--colorStatusWarningBackground3)",
  info: "var(--colorNeutralForeground3)",
};

type StatTone = "brand" | "success" | "warning";
interface ScheduleStat {
  label: string; value: string; tone: StatTone; ratio: number;
  icon: React.ComponentType<{ fontSize?: number }>;
}

const TONE_VAR: Record<StatTone, string> = {
  brand: "var(--colorBrandBackground)",
  success: "var(--colorPaletteGreenBackground3)",
  warning: "var(--colorPaletteYellowBackground3)",
};

const PROGRESS_COLOR: Record<StatTone, "brand" | "success" | "warning"> = {
  brand: "brand", success: "success", warning: "warning",
};

// 통계 카드 4요소: 아이콘 배지, 라벨, 숫자, 진행바
function ScheduleStatCard({ stat }: { stat: ScheduleStat }) {
  const Icon = stat.icon;
  const tone = TONE_VAR[stat.tone];
  return (
    <Card style={{ padding: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
        <span
          aria-hidden
          style={{
            alignItems: "center", background: tone, borderRadius: "8px",
            color: "white", display: "flex", flexShrink: 0, height: "28px", justifyContent: "center", width: "28px",
          }}
        >
          <Icon fontSize={14} />
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{stat.label}</Caption1>
          <Body1 style={{ fontSize: "16px", fontWeight: 600 }}>{stat.value}</Body1>
        </div>
      </div>
      <ProgressBar value={stat.ratio} thickness="medium" color={PROGRESS_COLOR[stat.tone]} />
    </Card>
  );
}

function RoomBarChart {
  const counts = new Map<string, number>;
  for (const m of MEETINGS) counts.set(m.room, (counts.get(m.room) ?? 0) + 1);
  const data = [...counts.entries].map(([label, value]) => ({ label, value }));
  return (
    <Card style={{ padding: "14px" }}>
      <Body1 style={{ fontWeight: 600, marginBottom: "6px" }}>회의실별 사용 횟수</Body1>
      <MiniBarChart title="회의실별 사용 횟수" data={data} width={260} height={104} />
    </Card>
  );
}

const COLOR_LABEL: Record<MeetingItem["color"], string> = {
  brand: "브랜드 중요",
  warning: "외부 협력사",
  success: "1:1 면담",
  info: "정기 스탠드업",
};

// 회의 유형별 색상 분포 도넛차트 렌더링, 아래 Popover 범례와 동일한 색상 사용
function MeetingTypeDonutChart {
  const counts: Record<MeetingItem["color"], number> = { brand: 0, warning: 0, success: 0, info: 0 };
  for (const m of MEETINGS) counts[m.color] += 1;
  const total = MEETINGS.length;
  const order: MeetingItem["color"][] = ["brand", "warning", "success", "info"];
  const r = 34;
  const c = 2 * Math.PI * r;
  let offset = 0;
  const segments = order.map((color) => {
    const ratio = total === 0 ? 0 : counts[color] / total;
    const seg = { color, dash: ratio * c, offset };
    offset += ratio * c;
    return seg;
  });
  return (
    <Card style={{ padding: "14px" }}>
      <Body1 style={{ fontWeight: 600, marginBottom: "6px" }}>회의 유형 분포</Body1>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden>
          <g transform="translate(44,44) rotate(-90)">
            <circle r={r} fill="none" stroke="var(--colorNeutralStroke2)" strokeWidth={12} />
            {segments.map((s) => (
              <circle
                key={s.color} r={r} fill="none" stroke={COLOR_VAR[s.color]} strokeWidth={12}
                strokeDasharray={`${s.dash} ${c - s.dash}`} strokeDashoffset={-s.offset}
              />
            ))}
          </g>
          <text x="44" y="48" textAnchor="middle" fontSize="16" fontWeight={700} fill="var(--colorNeutralForeground1)">{total}</text>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {order.map((color) => (
            <div key={color} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: COLOR_VAR[color], display: "inline-block" }} />
              <Caption1>{COLOR_LABEL[color]} {counts[color]}</Caption1>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function MeetingRow({ meeting }: { meeting: MeetingItem }) {
  const names = Array.from({ length: meeting.attendees }, (_, i) => `참석자 ${i + 1}`);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "12px 14px",
        borderRadius: "var(--borderRadiusMedium)",
        borderInlineStart: `3px solid ${COLOR_VAR[meeting.color]}`,
        background: "var(--colorNeutralBackground2)",
        opacity: meeting.done ? 0.6 : 1,
      }}
    >
      <Caption1 style={{ width: "48px", flexShrink: 0, color: "var(--colorNeutralForeground3)" }}>
        {meeting.time}
      </Caption1>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
        <Body1 style={{ fontWeight: 600, textDecorationLine: meeting.done ? "line-through" : "none" }}>
          {meeting.title}
        </Body1>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          {meeting.room} · {meeting.attendees}명{meeting.done ? " · 완료" : ""}
        </Caption1>
      </div>
      <AvatarGroup size={24}>
        {names.slice(0, 3).map((n) => (
          <AvatarGroupItem key={n} name={n} />
        ))}
        {meeting.attendees > 3 ? (
          <Avatar name={`+${meeting.attendees - 3}`} size={24} color="colorful" />
        ) : null}
      </AvatarGroup>
    </div>
  );
}

export function ScheduleScreen {
  const [hideDone, setHideDone] = React.useState(false);
  // Skeleton으로 일정 로딩 상태 짧게 표시
  const [loading, setLoading] = React.useState(true);
  React.useEffect( => {
    const t = setTimeout( => setLoading(false), 400);
    return  => clearTimeout(t);
  }, []);
  const rows = hideDone ? MEETINGS.filter((m) => !m.done) : MEETINGS;
  const totalAttendees = MEETINGS.reduce((sum, m) => sum + m.attendees, 0);
  const onlineCount = MEETINGS.filter((m) => m.room === "온라인").length;

  const doneCount = MEETINGS.filter((m) => m.done).length;
  const stats: readonly ScheduleStat[] = [
    { label: "오늘 회의", value: `${MEETINGS.length}건`, tone: "brand", ratio: doneCount / MEETINGS.length, icon: CalendarLtrRegular },
    { label: "온라인 회의", value: `${onlineCount}건`, tone: "success", ratio: onlineCount / MEETINGS.length, icon: ClockRegular },
    { label: "총 참석 인원", value: `${totalAttendees}명`, tone: "warning", ratio: Math.min(totalAttendees / (MEETINGS.length * 8), 1), icon: PeopleRegular },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        {stats.map((s) => (
          <ScheduleStatCard key={s.label} stat={s} />
        ))}
      </div>
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <RoomBarChart />
        <MeetingTypeDonutChart />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Switch checked={hideDone} onChange={(_, data) => setHideDone(Boolean(data.checked))} label="완료된 회의 숨기기" />
        {/* Popover로 색 범례 설명 표시 */}
        <Popover>
          <PopoverTrigger disableButtonEnhancement>
            <button
              aria-label="회의 색상 범례 보기"
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--colorNeutralForeground3)", display: "flex", alignItems: "center", gap: "4px" }}
            >
              <InfoRegular fontSize={16} />
              <Caption1>색상 안내</Caption1>
            </button>
          </PopoverTrigger>
          <PopoverSurface>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Caption1><span style={{ color: "var(--colorBrandBackground)" }}>■</span> 브랜드 중요 회의</Caption1>
              <Caption1><span style={{ color: "var(--colorStatusWarningBackground3)" }}>■</span> 외부 협력사</Caption1>
              <Caption1><span style={{ color: "var(--colorStatusSuccessBackground3)" }}>■</span> 1:1 면담</Caption1>
              <Caption1><span style={{ color: "var(--colorNeutralForeground3)" }}>■</span> 정기 스탠드업</Caption1>
            </div>
          </PopoverSurface>
        </Popover>
      </div>
      <Card style={{ padding: "12px" }}>
        {loading ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[0, 1, 2].map((i) => (
              <Skeleton key={i}>
                <SkeletonItem style={{ height: "44px", borderRadius: "8px" }} />
              </Skeleton>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {rows.map((m) => (
              <MeetingRow key={m.id} meeting={m} />
            ))}
            {rows.length === 0 ? (
              <Caption1 style={{ color: "var(--colorNeutralForeground3)", padding: "8px" }}>
                오늘 남은 회의가 없어요.
              </Caption1>
            ) : null}
          </div>
        )}
      </Card>
    </div>
  );
}
