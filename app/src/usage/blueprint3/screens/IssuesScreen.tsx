import * as React from "react";
import { Button, Card, Tag } from "@blueprintjs/core";
import type { Intent } from "@blueprintjs/core";
import { ISSUES, type Issue } from "../data";

const STATUS_INTENT: Record<Issue["status"], Intent> = {
  열림: "success",
  진행중: "primary",
  닫힘: "none",
};

function IssueDetail({ issue, onBack }: { issue: Issue; onBack:  => void }) {
  return (
    <div className="flex flex-col gap-4">
      <Button icon="arrow-left" onClick={onBack} minimal style={{ alignSelf: "flex-start" }}>
        목록으로
      </Button>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <code style={{ opacity: 0.6 }}>{issue.key}</code>
          <Tag intent={STATUS_INTENT[issue.status]} minimal>{issue.status}</Tag>
        </div>
        <span style={{ fontSize: "1.125rem", fontWeight: 600 }}>{issue.title}</span>
        <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>
          담당: {issue.assignee} · {issue.createdLabel} 생성
        </span>
      </div>
      <div className="flex flex-wrap gap-1">
        {issue.labels.map((label) => (
          <Tag key={label} minimal>{label}</Tag>
        ))}
      </div>
      <Card>{issue.body}</Card>
    </div>
  );
}

export function IssuesScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = ISSUES.find((i) => i.id === selectedId) ?? null;

  if (selected) {
    return <IssueDetail issue={selected} onBack={ => setSelectedId(null)} />;
  }

  return (
    <div className="flex flex-col gap-2">
      {ISSUES.map((issue) => (
        <Card
          key={issue.id}
          interactive
          onClick={ => setSelectedId(issue.id)}
          style={{ padding: "0.625rem 0.75rem" }}
        >
          <div className="flex items-center gap-2">
            <code style={{ opacity: 0.6, fontSize: "0.75rem" }}>{issue.key}</code>
            <Tag intent={STATUS_INTENT[issue.status]} minimal>{issue.status}</Tag>
            <span style={{ flex: 1 }}>{issue.title}</span>
            <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{issue.assignee}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
