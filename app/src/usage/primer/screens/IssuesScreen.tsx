import * as React from "react";
import { Avatar, Checkbox, FormControl, Label, StateLabel, TextInput } from "@primer/react";
import { Search } from "lucide-react";
import { ACTIVITY, ISSUES, PULL_REQUESTS, type IssueItem } from "../data";

function IssueStats {
  const openIssues = ISSUES.filter((i) => i.state === "open").length;
  const openPulls = PULL_REQUESTS.filter((p) => p.state === "open").length;
  const contributors = new Set(ACTIVITY.map((a) => a.actor)).size;
  const closedThisWeek = ISSUES.filter((i) => i.state === "closed").length;
  // 실제 존재하는 토큰만 사용
  const stats = [
    { label: "열린 이슈", value: String(openIssues), tone: "var(--fgColor-success)" },
    { label: "열린 PR", value: String(openPulls), tone: "var(--fgColor-accent)" },
    { label: "기여자", value: String(contributors), tone: "var(--fgColor-default)" },
    { label: "이번 주 닫힘", value: String(closedThisWeek), tone: "var(--fgColor-neutral)" },
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
          style={{
            border: "1px solid var(--borderColor-default)",
            borderRadius: "6px",
            padding: "12px 14px",
          }}
        >
          <div style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{s.label}</div>
          <div style={{ fontSize: "22px", fontWeight: 600, color: s.tone }}>{s.value}</div>
        </div>
      ))}
    </div>
  );
}

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
  const [query, setQuery] = React.useState("");
  const [showClosed, setShowClosed] = React.useState(true);

  const rows = ISSUES.filter(
    (i) => (showClosed || i.state === "open") && (query.trim === "" || i.title.includes(query)),
  );

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <IssueStats />
      {/* 검색창에 TextInput, Checkbox 배치 */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
        <TextInput
          leadingVisual={Search}
          placeholder="이슈 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="small"
        />
        <FormControl>
          <Checkbox checked={showClosed} onChange={(e) => setShowClosed(e.target.checked)} />
          <FormControl.Label>닫힌 이슈도 보기</FormControl.Label>
        </FormControl>
      </div>
      {rows.map((issue) => (
        <IssueRow key={issue.id} issue={issue} />
      ))}
    </div>
  );
}
