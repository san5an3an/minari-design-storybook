import * as React from "react";
import { Panel } from "primereact/panel";

const WAITLIST = [
  { name: "윤도경", reason: "정기 검진", requested: "09-15" },
  { name: "서지안", reason: "예방접종", requested: "09-16" },
];

export function WaitlistScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {WAITLIST.map((w) => (
        <Panel key={w.name} header={`${w.name} · ${w.reason}`}>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--semantic-fg-neutral-subtle)" }}>
            9월 {w.requested.split("-")[1]}일 신청
          </p>
        </Panel>
      ))}
    </div>
  );
}
