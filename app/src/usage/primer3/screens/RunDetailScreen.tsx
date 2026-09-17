import * as React from "react";
import { Button, Checkbox, FormControl, StateLabel, TextInput } from "@primer/react";
import { WORKFLOWS, type WorkflowRun } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_STATUS: Record<WorkflowRun["status"], "issueClosed" | "issueOpened" | "pullOpened"> = {
  성공: "issueClosed",
  실패: "issueOpened",
  "실행 중": "pullOpened",
};

export function RunDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const run = WORKFLOWS.find((w) => w.id === selectedId);
  const [branch, setBranch] = React.useState(run?.branch ?? "");
  const [debugLogging, setDebugLogging] = React.useState(false);

  if (!run) {
    return (
      <div style={{ border: "1px dashed var(--borderColor-muted)", borderRadius: "6px", padding: "32px", textAlign: "center" }}>
        <span style={{ color: "var(--fgColor-muted)", fontSize: "14px" }}>
          실행을 먼저 골라 주세요. "워크플로 실행" 탭에서 항목을 눌러 보세요.
        </span>
        <div style={{ marginTop: "12px" }}>
          <Button size="small" onClick={ => onNavigate?.("workflows")}>워크플로 목록으로</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StateLabel status={STATUS_STATUS[run.status]} />
        <span style={{ fontWeight: 600, fontSize: "16px", color: "var(--fgColor-default)" }}>{run.name}</span>
      </div>
      <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>
        {run.branch} · {run.trigger} · {run.timeLabel} · {run.durationLabel}
      </span>
      <pre
        style={{
          background: "var(--bgColor-emphasis)", color: "var(--fgColor-onEmphasis)",
          borderRadius: "6px", padding: "14px", fontSize: "13px", lineHeight: 1.6,
          overflowX: "auto", margin: 0,
        }}
      >
        {run.log.join("\n")}
      </pre>

      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)", marginBottom: "6px" }}>재실행 옵션</div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "12px" }}>
          <FormControl>
            <FormControl.Label>브랜치</FormControl.Label>
            <TextInput value={branch} onChange={(e) => setBranch(e.target.value)} size="small" />
          </FormControl>
          <FormControl>
            <Checkbox checked={debugLogging} onChange={(e) => setDebugLogging(e.target.checked)} />
            <FormControl.Label>디버그 로깅 활성화</FormControl.Label>
          </FormControl>
          <Button variant="primary" size="small">재실행</Button>
        </div>
      </div>
    </div>
  );
}
