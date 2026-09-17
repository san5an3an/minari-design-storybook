import * as React from "react";
import { Knob } from "primereact/knob";
import { Panel } from "primereact/panel";
import { ProgressBar } from "primereact/progressbar";
import { Inbox, CheckCircle2, Timer } from "lucide-react";

const STATS = [
  { label: "오늘 접수", value: "34", icon: Inbox, tone: "brand" },
  { label: "오늘 해결", value: "27", icon: CheckCircle2, tone: "success" },
  { label: "평균 첫 응답", value: "12분", icon: Timer, tone: "warning" },
] as const;

export function ReportsScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <Panel key={s.label} header={s.label} style={{ flex: "1 1 10rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  aria-hidden
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "var(--semantic-radius-control)",
                    background: `var(--semantic-bg-${s.tone}-subtle)`,
                    color: `var(--semantic-fg-${s.tone}-default)`,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{s.value}</div>
              </div>
            </Panel>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Panel header="SLA 준수율" style={{ flex: "2 1 18rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBlockEnd: "0.25rem" }}>
                <span>긴급 (목표 15분)</span><span>91%</span>
              </div>
              <ProgressBar value={91} showValue={false} />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBlockEnd: "0.25rem" }}>
                <span>보통 (목표 4시간)</span><span>78%</span>
              </div>
              <ProgressBar value={78} showValue={false} />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBlockEnd: "0.25rem" }}>
                <span>낮음 (목표 24시간)</span><span>96%</span>
              </div>
              <ProgressBar value={96} showValue={false} />
            </div>
          </div>
        </Panel>
        <Panel header="고객 만족도" style={{ flex: "1 1 10rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Knob value={87} readOnly size={100} valueTemplate="{value}%" />
          <div style={{ fontSize: "0.8125rem", color: "var(--semantic-fg-neutral-subtle)", marginBlockStart: "0.4rem" }}>이번 달 CSAT</div>
        </Panel>
      </div>
    </div>
  );
}
