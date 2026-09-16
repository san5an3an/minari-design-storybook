import { Avatar, Label, StateLabel } from "@primer/react";
import { ISSUES, type IssueItem } from "../data";

function IssueRow({ issue }: { issue: IssueItem }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        padding: "12px 4px",
        borderBottom: "1px solid var(--borderColor-muted)",
      }}
    >
      <StateLabel status={issue.state === "open" ? "issueOpened" : "issueClosed"} />
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span style={{ fontWeight: 600, color: "var(--fgColor-default)" }}>{issue.title}</span>
          {issue.labels.map((l) => (
            <Label key={l.text} style={{ backgroundColor: l.color, color: "#fff", borderColor: "transparent" }}>
              {l.text}
            </Label>
          ))}
        </div>
        <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>
          #{issue.number} · {issue.openedLabel} · {issue.author}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--fgColor-muted)", fontSize: "12px" }}>
        <Avatar src={`https://avatars.githubusercontent.com/u/${issue.number}?s=32`} size={16} alt={issue.author} />
        {issue.comments}
      </div>
    </div>
  );
}

export function IssuesScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {ISSUES.map((issue) => (
        <IssueRow key={issue.id} issue={issue} />
      ))}
    </div>
  );
}
