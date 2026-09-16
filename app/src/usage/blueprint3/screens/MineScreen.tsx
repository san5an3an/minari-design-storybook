import { NonIdealState, Tag } from "@blueprintjs/core";
import type { Intent } from "@blueprintjs/core";
import { ISSUES, type Issue } from "../data";

const STATUS_INTENT: Record<Issue["status"], Intent> = {
  열림: "success",
  진행중: "primary",
  닫힘: "none",
};

const ME = "김지수";

export function MineScreen {
  const mine = ISSUES.filter((i) => i.assignee === ME);

  if (mine.length === 0) {
    return <NonIdealState icon="tick" title="배정된 이슈가 없습니다" />;
  }

  return (
    <div className="flex flex-col gap-2">
      {mine.map((issue) => (
        <div key={issue.id} className="flex items-center gap-2 px-1 py-2">
          <code style={{ opacity: 0.6, fontSize: "0.75rem" }}>{issue.key}</code>
          <Tag intent={STATUS_INTENT[issue.status]} minimal>{issue.status}</Tag>
          <span>{issue.title}</span>
        </div>
      ))}
    </div>
  );
}
