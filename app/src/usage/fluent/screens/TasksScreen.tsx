import * as React from "react";
import { Badge, Checkbox, Divider, Body1, Caption1 } from "@fluentui/react-components";
import { TASKS, type TaskItem } from "../data";

const PRIORITY_BADGE: Record<TaskItem["priority"], { color: "danger" | "brand" | "subtle"; label: string }> = {
  high: { color: "danger", label: "높음" },
  normal: { color: "brand", label: "보통" },
  low: { color: "subtle", label: "낮음" },
};

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
      <Badge color={badge.color} appearance="tint">{badge.label}</Badge>
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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {buckets.map((bucket) => (
        <div key={bucket} style={{ display: "flex", flexDirection: "column" }}>
          <Body1 style={{ fontWeight: 600, marginBottom: "4px" }}>{bucket}</Body1>
          <Divider />
          {TASKS.filter((t) => t.bucket === bucket).map((task) => (
            <TaskRow key={task.id} task={task} checked={done.has(task.id)} onToggle={ => toggle(task.id)} />
          ))}
        </div>
      ))}
    </div>
  );
}
