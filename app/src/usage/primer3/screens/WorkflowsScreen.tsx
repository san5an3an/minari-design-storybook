import { StateLabel } from "@primer/react";
import { WORKFLOWS, type WorkflowRun } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_STATUS: Record<WorkflowRun["status"], "issueClosed" | "issueOpened" | "pullOpened"> = {
  성공: "issueClosed",
  실패: "issueOpened",
  "실행 중": "pullOpened",
};

export function WorkflowsScreen({ onNavigate, onSelect }: ScreenProps) {
  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {WORKFLOWS.map((w) => (
        <div
          key={w.id}
          onClick={ => open(w.id)}
          role="button"
          tabIndex={0}
          style={{
            display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 4px",
            borderBottom: "1px solid var(--borderColor-muted)", cursor: "pointer",
          }}
        >
          <StateLabel status={STATUS_STATUS[w.status]} />
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: 0 }}>
            <span style={{ fontWeight: 600, color: "var(--fgColor-default)" }}>{w.name}</span>
            <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>
              {w.trigger} · {w.branch} · {w.timeLabel}
            </span>
          </div>
          <span style={{ fontSize: "12px", color: "var(--fgColor-muted)", whiteSpace: "nowrap" }}>{w.durationLabel}</span>
        </div>
      ))}
    </div>
  );
}
