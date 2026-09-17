import * as React from "react";
import {
  Badge, Button, Card, Checkbox, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger,
  ProgressBar, Body1, Caption1, Tooltip,
} from "@fluentui/react-components";
import {
  CalendarLtrRegular, CheckmarkCircleRegular, DeleteRegular, EditRegular, FlagRegular,
  MoreHorizontalRegular,
} from "@fluentui/react-icons";
import { MEETINGS, TASKS, type TaskItem } from "../data";

const PRIORITY_BADGE: Record<TaskItem["priority"], { color: "danger" | "brand" | "subtle"; label: string }> = {
  high: { color: "danger", label: "높음" },
  normal: { color: "brand", label: "보통" },
  low: { color: "subtle", label: "낮음" },
};

function TasksGreeting {
  return <Body1 style={{ fontWeight: 600, fontSize: "18px" }}>좋은 아침이에요, 서준님 👋</Body1>;
}

type StatTone = "brand" | "success" | "warning" | "danger";
interface HubStat {
  label: string; value: string; tone: StatTone;
  icon: React.ComponentType<{ fontSize?: number }>;
}
const HUB_STATS: readonly HubStat[] = [
  { label: "완료한 할 일", value: `${TASKS.filter((t) => t.done).length}/${TASKS.length}`, tone: "brand", icon: CheckmarkCircleRegular },
  { label: "높은 우선순위", value: `${TASKS.filter((t) => t.priority === "high").length}개`, tone: "danger", icon: FlagRegular },
  { label: "오늘 회의", value: `${MEETINGS.length}건`, tone: "warning", icon: CalendarLtrRegular },
];

const TONE_VAR: Record<StatTone, string> = {
  brand: "var(--colorBrandBackground)",
  success: "var(--colorPaletteGreenBackground3)",
  warning: "var(--colorPaletteYellowBackground3)",
  danger: "var(--colorPaletteRedBackground3)",
};

function HubStatCard({ stat }: { stat: HubStat }) {
  const Icon = stat.icon;
  const tone = TONE_VAR[stat.tone];
  return (
    <Card style={{ padding: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
    </Card>
  );
}

// 완료율 진행률 바
function CompletionProgress {
  const total = TASKS.length;
  const done = TASKS.filter((t) => t.done).length;
  const ratio = total === 0 ? 0 : done / total;
  return (
    <Card style={{ padding: "14px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Body1 style={{ fontWeight: 600 }}>오늘 완료율</Body1>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{Math.round(ratio * 100)}%</Caption1>
        </div>
        <ProgressBar value={ratio} thickness="large" />
      </div>
    </Card>
  );
}

// SVG 미니 막대그래프 구현. Fluent에 차트 패키지가 없음
function MiniBarCard({ title, data }: { title: string; data: readonly { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const w = 220;
  const h = 90;
  const barW = w / data.length - 8;
  return (
    <Card style={{ padding: "14px" }}>
      <Body1 style={{ fontWeight: 600, marginBottom: "6px" }}>{title}</Body1>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} aria-hidden>
        {data.map((d, i) => {
          const barH = (d.value / max) * (h - 20);
          const x = i * (w / data.length) + 4;
          return (
            <g key={d.label}>
              <rect
                x={x} y={h - 16 - barH} width={barW} height={barH}
                fill="var(--colorBrandBackground)" rx={3}
              />
              <text x={x + barW / 2} y={h - 4} fontSize="9" textAnchor="middle" fill="var(--colorNeutralForeground3)">
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </Card>
  );
}

function countBy<T extends string>(items: readonly T[]): { label: string; value: number }[] {
  const counts = new Map<string, number>;
  for (const item of items) counts.set(item, (counts.get(item) ?? 0) + 1);
  return [...counts.entries].map(([label, value]) => ({ label, value }));
}

function TaskRow({ task, checked, onToggle }: { task: TaskItem; checked: boolean; onToggle:  => void }) {
  const badge = PRIORITY_BADGE[task.priority];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "8px 4px",
      }}
    >
      <Checkbox checked={checked} onChange={onToggle} aria-label={task.title} />
      <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
        <Body1
          style={{
            textDecorationLine: checked ? "line-through" : "none",
            color: checked ? "var(--colorNeutralForeground3)" : undefined,
          }}
        >
          {task.title}
        </Body1>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{task.dueLabel} 마감</Caption1>
      </div>
      <Tooltip content={`우선순위: ${badge.label}`} relationship="label">
        <Badge color={badge.color} appearance="tint">{badge.label}</Badge>
      </Tooltip>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button
            appearance="subtle"
            icon={<MoreHorizontalRegular />}
            aria-label={`${task.title} 더보기`}
          />
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem icon={<EditRegular />}>수정</MenuItem>
            <MenuItem icon={<DeleteRegular />}>삭제</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  );
}

export function TasksScreen {
  const [done, setDone] = React.useState<Set<string>>(
     => new Set(TASKS.filter((t) => t.done).map((t) => t.id)),
  );

  const toggle = (id: string) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const buckets = Array.from(new Set(TASKS.map((t) => t.bucket)));
  const byPriority = React.useMemo( => countBy(TASKS.map((t) => PRIORITY_BADGE[t.priority].label)), []);
  const byBucket = React.useMemo( => countBy(TASKS.map((t) => t.bucket)), []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TasksGreeting />
      <div
        style={{
          display: "grid",
          gap: "12px",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        }}
      >
        {HUB_STATS.map((s) => (
          <HubStatCard key={s.label} stat={s} />
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gap: "12px",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        <CompletionProgress />
        <MiniBarCard title="우선순위별 할 일" data={byPriority} />
        <MiniBarCard title="버킷별 할 일" data={byBucket} />
      </div>
      {buckets.map((bucket) => (
        <Card key={bucket} style={{ padding: "12px" }}>
          <Body1 style={{ fontWeight: 600, marginBottom: "4px" }}>{bucket}</Body1>
          {TASKS.filter((t) => t.bucket === bucket).map((task) => (
            <TaskRow key={task.id} task={task} checked={done.has(task.id)} onToggle={ => toggle(task.id)} />
          ))}
        </Card>
      ))}
    </div>
  );
}
