import * as React from "react";
import { Select, StateLabel } from "@primer/react";
import { SECRETS, WORKFLOWS, type WorkflowRun } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_STATUS: Record<WorkflowRun["status"], "issueClosed" | "issueOpened" | "pullOpened"> = {
  성공: "issueClosed",
  실패: "issueOpened",
  "실행 중": "pullOpened",
};

function WorkflowStats {
  const succeeded = WORKFLOWS.filter((w) => w.status === "성공").length;
  const failed = WORKFLOWS.filter((w) => w.status === "실패").length;
  const running = WORKFLOWS.filter((w) => w.status === "실행 중").length;
  const stats = [
    { label: "성공", value: String(succeeded), tone: "var(--fgColor-success)" },
    { label: "실패", value: String(failed), tone: "var(--fgColor-danger)" },
    { label: "실행 중", value: String(running), tone: "var(--fgColor-accent)" },
    { label: "등록된 시크릿", value: String(SECRETS.length), tone: "var(--fgColor-default)" },
  ];
  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        marginBottom: "16px",
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{ border: "1px solid var(--borderColor-default)", borderRadius: "6px", padding: "12px 14px" }}
        >
          <div style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{s.label}</div>
          <div style={{ fontSize: "22px", fontWeight: 600, color: s.tone }}>{s.value}</div>
        </div>
      ))}
    </div>
  );
}

export function WorkflowsScreen({ onNavigate, onSelect }: ScreenProps) {
  const [status, setStatus] = React.useState<WorkflowRun["status"] | "all">("all");

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const rows = WORKFLOWS.filter((w) => status === "all" || w.status === status);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <WorkflowStats />
      <div style={{ marginBottom: "12px" }}>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value as WorkflowRun["status"] | "all")}
          size="small"
          aria-label="상태 거르기"
        >
          <Select.Option value="all">전체 상태</Select.Option>
          <Select.Option value="성공">성공</Select.Option>
          <Select.Option value="실패">실패</Select.Option>
          <Select.Option value="실행 중">실행 중</Select.Option>
        </Select>
      </div>
      {rows.map((w) => (
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
