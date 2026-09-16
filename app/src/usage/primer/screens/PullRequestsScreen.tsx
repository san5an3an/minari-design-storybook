import { Avatar, AvatarStack, StateLabel } from "@primer/react";
import { PULL_REQUESTS, type PullRequestItem } from "../data";

const STATE_STATUS: Record<PullRequestItem["state"], "pullOpened" | "pullMerged" | "draft"> = {
  open: "pullOpened",
  merged: "pullMerged",
  draft: "draft",
};

function PullRow({ pr }: { pr: PullRequestItem }) {
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
      <StateLabel status={STATE_STATUS[pr.state]} />
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: 0 }}>
        <span style={{ fontWeight: 600, color: "var(--fgColor-default)" }}>{pr.title}</span>
        <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>
          #{pr.number} · {pr.openedLabel} · {pr.author} · 파일 {pr.changedFiles}개 변경
        </span>
      </div>
      {pr.reviewers.length > 0 ? (
        <AvatarStack>
          {pr.reviewers.map((r) => (
            <Avatar key={r} src={`https://avatars.githubusercontent.com/u/${r.length}?s=32`} alt={r} />
          ))}
        </AvatarStack>
      ) : (
        <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>검토자 없음</span>
      )}
    </div>
  );
}

export function PullRequestsScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {PULL_REQUESTS.map((pr) => (
        <PullRow key={pr.id} pr={pr} />
      ))}
    </div>
  );
}
