import * as React from "react";
import { Badge } from "../../../bases/standalone/Badge";
import { Meter } from "../../../bases/standalone/Meter";
import { Stepper } from "../../../bases/standalone/Stepper";

interface Member {
  name: string;
  role: string;
  load: number;
}

const INITIAL: Member[] = [
  { name: "김도현", role: "프론트엔드", load: 72 },
  { name: "이서아", role: "디자이너", load: 45 },
  { name: "박준서", role: "백엔드", load: 88 },
  { name: "최유나", role: "QA", load: 30 },
  { name: "정하은", role: "백엔드", load: 55 },
  { name: "한지우", role: "프론트엔드", load: 62 },
];

export function TeamScreen {
  const [assigned, setAssigned] = React.useState<Record<string, number>>(
    Object.fromEntries(INITIAL.map((m) => [m.name, Math.round(m.load / 10)])),
  );

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {INITIAL.map((m) => (
        <div
          key={m.name}
          style={{
            border: "1px solid var(--semantic-border-neutral-subtle)",
            borderRadius: "var(--semantic-radius-container)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "2.5rem", height: "2.5rem", borderRadius: "50%",
                background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)",
                display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0,
              }}
            >
              {m.name.slice(0, 1)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>{m.name}</div>
              <Badge tone="neutral" variant="outline">{m.role}</Badge>
            </div>
          </div>

          <Meter label="작업 부하" value={`${m.load}%`} at={m.load} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span className="text-sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>배정 작업 수</span>
            <Stepper
              value={assigned[m.name] ?? 0}
              min={0}
              max={12}
              aria-label={`${m.name} 배정 작업 수`}
              onValueChange={(n) => setAssigned((prev) => ({ ...prev, [m.name]: n }))}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
