import * as React from "react";
import {
  Badge, Button, Card, Checkbox, Input, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger,
  ProgressBar, Body1, Caption1, Tooltip,
} from "@fluentui/react-components";
import {
  CalendarLtrRegular, CheckmarkCircleRegular, CheckmarkRegular, DeleteRegular, DismissRegular,
  EditRegular, FlagRegular, MoreHorizontalRegular,
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
  label: string; value: string; tone: StatTone; ratio: number;
  icon: React.ComponentType<{ fontSize?: number }>;
}
const HUB_STATS: readonly HubStat[] = [
  {
    label: "완료한 할 일", value: `${TASKS.filter((t) => t.done).length}/${TASKS.length}`, tone: "brand",
    ratio: TASKS.filter((t) => t.done).length / TASKS.length, icon: CheckmarkCircleRegular,
  },
  {
    label: "높은 우선순위", value: `${TASKS.filter((t) => t.priority === "high").length}개`, tone: "danger",
    ratio: TASKS.filter((t) => t.priority === "high").length / TASKS.length, icon: FlagRegular,
  },
  {
    label: "오늘 회의", value: `${MEETINGS.length}건`, tone: "warning",
    ratio: MEETINGS.filter((m) => m.done).length / MEETINGS.length, icon: CalendarLtrRegular,
  },
];

const TONE_VAR: Record<StatTone, string> = {
  brand: "var(--colorBrandBackground)",
  success: "var(--colorPaletteGreenBackground3)",
  warning: "var(--colorPaletteYellowBackground3)",
  danger: "var(--colorPaletteRedBackground3)",
};

// color엔 error 값 사용. StatTone과 어휘가 달라 값을 바꾼 것임
const PROGRESS_COLOR: Record<StatTone, "brand" | "success" | "warning" | "error"> = {
  brand: "brand", success: "success", warning: "warning", danger: "error",
};

// 통계 카드 4요소: 아이콘 배지, 라벨, 숫자, 진행바. ratio는 실제 값 기반 계산
function HubStatCard({ stat }: { stat: HubStat }) {
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

const PRIORITY_DONUT_COLOR: Record<TaskItem["priority"], string> = {
  high: "var(--colorPaletteRedForeground2)",
  normal: "var(--colorBrandBackground)",
  low: "var(--colorNeutralForeground3)",
};

// 우선순위 분포 도넛 차트와 범례 렌더링
function PriorityDonutChart {
  const counts: Record<TaskItem["priority"], number> = { high: 0, normal: 0, low: 0 };
  for (const t of TASKS) counts[t.priority] += 1;
  const total = TASKS.length;
  const r = 34;
  const c = 2 * Math.PI * r;
  let offset = 0;
  const order: TaskItem["priority"][] = ["high", "normal", "low"];
  const segments = order.map((p) => {
    const ratio = total === 0 ? 0 : counts[p] / total;
    const seg = { p, dash: ratio * c, offset };
    offset += ratio * c;
    return seg;
  });
  return (
    <Card style={{ padding: "14px" }}>
      <Body1 style={{ fontWeight: 600, marginBottom: "6px" }}>우선순위 분포</Body1>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden>
          <g transform="translate(44,44) rotate(-90)">
            <circle r={r} fill="none" stroke="var(--colorNeutralStroke2)" strokeWidth={12} />
            {segments.map((s) => (
              <circle
                key={s.p} r={r} fill="none" stroke={PRIORITY_DONUT_COLOR[s.p]} strokeWidth={12}
                strokeDasharray={`${s.dash} ${c - s.dash}`} strokeDashoffset={-s.offset}
              />
            ))}
          </g>
          <text x="44" y="48" textAnchor="middle" fontSize="16" fontWeight={700} fill="var(--colorNeutralForeground1)">{total}</text>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {order.map((p) => (
            <div key={p} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: PRIORITY_DONUT_COLOR[p], display: "inline-block" }} />
              <Caption1>{PRIORITY_BADGE[p].label} {counts[p]}</Caption1>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

interface TaskRowProps {
  task: TaskItem;
  checked: boolean;
  onToggle:  => void;
  editing: boolean;
  editValue: string;
  onEditValueChange: (value: string) => void;
  onStartEdit:  => void;
  onSaveEdit:  => void;
  onCancelEdit:  => void;
  onDelete:  => void;
}

function TaskRow({
  task, checked, onToggle, editing, editValue, onEditValueChange, onStartEdit, onSaveEdit,
  onCancelEdit, onDelete,
}: TaskRowProps) {
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
      <Checkbox checked={checked} onChange={onToggle} aria-label={task.title} disabled={editing} />
      {editing ? (
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flex: 1, minWidth: 0 }}>
          <Input
            value={editValue}
            onChange={(_, data) => onEditValueChange(data.value)}
            aria-label={`${task.title} 제목 수정`}
            style={{ flex: 1 }}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") onSaveEdit;
              if (e.key === "Escape") onCancelEdit;
            }}
          />
          <Button
            size="small"
            appearance="primary"
            icon={<CheckmarkRegular />}
            aria-label="저장"
            disabled={!editValue.trim}
            onClick={onSaveEdit}
          />
          <Button size="small" appearance="subtle" icon={<DismissRegular />} aria-label="취소" onClick={onCancelEdit} />
        </div>
      ) : (
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
      )}
      {!editing ? (
        <>
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
                <MenuItem icon={<EditRegular />} onClick={onStartEdit}>수정</MenuItem>
                <MenuItem icon={<DeleteRegular />} onClick={onDelete}>삭제</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </>
      ) : null}
    </div>
  );
}

export function TasksScreen {
  const [tasks, setTasks] = React.useState<TaskItem[]>(TASKS);
  const [done, setDone] = React.useState<Set<string>>(
     => new Set(TASKS.filter((t) => t.done).map((t) => t.id)),
  );
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editValue, setEditValue] = React.useState("");

  const toggle = (id: string) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const startEdit = (task: TaskItem) => {
    setEditingId(task.id);
    setEditValue(task.title);
  };
  const cancelEdit =  => {
    setEditingId(null);
    setEditValue("");
  };
  const saveEdit =  => {
    if (!editValue.trim || !editingId) return;
    const id = editingId;
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, title: editValue.trim } : t)));
    cancelEdit;
  };
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setDone((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    if (editingId === id) cancelEdit;
  };

  const buckets = Array.from(new Set(tasks.map((t) => t.bucket)));
  const byBucket = React.useMemo( => countBy(tasks.map((t) => t.bucket)), [tasks]);

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
        <PriorityDonutChart />
        <MiniBarCard title="버킷별 할 일" data={byBucket} />
      </div>
      {buckets.map((bucket) => (
        <Card key={bucket} style={{ padding: "12px" }}>
          <Body1 style={{ fontWeight: 600, marginBottom: "4px" }}>{bucket}</Body1>
          {tasks.filter((t) => t.bucket === bucket).map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              checked={done.has(task.id)}
              onToggle={ => toggle(task.id)}
              editing={editingId === task.id}
              editValue={editValue}
              onEditValueChange={setEditValue}
              onStartEdit={ => startEdit(task)}
              onSaveEdit={saveEdit}
              onCancelEdit={cancelEdit}
              onDelete={ => deleteTask(task.id)}
            />
          ))}
        </Card>
      ))}
    </div>
  );
}
