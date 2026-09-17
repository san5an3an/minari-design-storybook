import * as React from "react";
import { Card, NonIdealState, Tag } from "@blueprintjs/core";
import type { Intent } from "@blueprintjs/core";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ISSUES, type Issue } from "../data";

const STATUS_INTENT: Record<Issue["status"], Intent> = {
  열림: "success",
  진행중: "primary",
  닫힘: "none",
};

const ME = "김지수";

export function MineScreen {
  const mine = ISSUES.filter((i) => i.assignee === ME);

  // Rules of Hooks 상 useMemo 는 early return 이전 배치 필수임
  const byAssignee = React.useMemo( => {
    const counts = new Map<string, number>;
    ISSUES.forEach((i) => counts.set(i.assignee, (counts.get(i.assignee) ?? 0) + 1));
    return [...counts.entries].map(([name, value]) => ({ name, value }));
  }, []);

  if (mine.length === 0) {
    return <NonIdealState icon="tick" title="배정된 이슈가 없습니다" />;
  }

  const openCount = mine.filter((i) => i.status !== "닫힘").length;

  return (
    <div className="flex flex-col gap-4">
      {/* 통계카드로 여백 채우기 */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">배정된 이슈</span>
          <span className="text-lg font-semibold">{mine.length}건</span>
        </Card>
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">처리 중</span>
          <span className="text-lg font-semibold">{openCount}건</span>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        {mine.map((issue) => (
          <Card key={issue.id} className="flex items-center gap-2 px-4 py-3" style={{ display: "flex" }}>
            <code style={{ opacity: 0.6, fontSize: "0.75rem" }}>{issue.key}</code>
            <Tag intent={STATUS_INTENT[issue.status]} minimal>{issue.status}</Tag>
            <span className="flex-1">{issue.title}</span>
            <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{issue.createdLabel}</span>
          </Card>
        ))}
      </div>

      {/* 담당자별 배정 현황 */}
      <Card>
        <span className="text-sm font-medium">담당자별 배정 현황</span>
        <div style={{ inlineSize: "100%", blockSize: 120, marginBlockStart: 8 }}>
          <ResponsiveContainer>
            <BarChart data={byAssignee} layout="vertical" margin={{ left: 8 }}>
              <XAxis type="number" hide allowDecimals={false} />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={56} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
