import * as React from "react";
import { Card, NonIdealState, SegmentedControl, Tag, Tooltip } from "@blueprintjs/core";
import { Bar, BarChart, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";
import { ISSUES, type Issue } from "../data";
import { ASSIGNEE_ROSTER, IssueDetail, STATUS_INTENT, STATUS_ORDER } from "./IssuesScreen";

const ME = "김지수";

const STATUS_FILTER_OPTIONS = [{ label: "전체", value: "전체" }, ...STATUS_ORDER.map((s) => ({ label: s, value: s }))];

export function MineScreen {
  const mine = React.useMemo( => ISSUES.filter((i) => i.assignee === ME), []);
  const [statusFilter, setStatusFilter] = React.useState<Issue["status"] | "전체">("전체");
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  // useMemo 2개, allIssues 전체 검색. return 전 배치 필수임
  const byAssignee = React.useMemo( => {
    const counts = new Map<string, number>;
    ISSUES.forEach((i) => counts.set(i.assignee, (counts.get(i.assignee) ?? 0) + 1));
    return ASSIGNEE_ROSTER.filter((a) => counts.has(a)).map((name) => ({ name, value: counts.get(name)! }));
  }, []);
  const myLabelBreakdown = React.useMemo( => {
    const counts = new Map<string, number>;
    mine.forEach((i) => i.labels.forEach((l) => counts.set(l, (counts.get(l) ?? 0) + 1)));
    return [...counts.entries].map(([name, value]) => ({ name, value }));
  }, [mine]);

  const selected = selectedId ? ISSUES.find((i) => i.id === selectedId) ?? null : null;

  if (mine.length === 0) {
    return <NonIdealState icon="tick" title="배정된 이슈가 없습니다" description="김지수 님에게 배정된 이슈가 아직 없어요." />;
  }

  if (selected) {
    return (
      <IssueDetail
        issue={selected}
        onBack={ => setSelectedId(null)}
        allIssues={ISSUES}
        onSelect={setSelectedId}
      />
    );
  }

  const openCount = mine.filter((i) => i.status !== "닫힘").length;
  const rows = mine.filter((i) => statusFilter === "전체" || i.status === statusFilter);
  const grouped = STATUS_ORDER.map((s) => ({ status: s, items: rows.filter((i) => i.status === s) })).filter(
    (g) => g.items.length > 0,
  );

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

      {/* 상태 필터. SegmentedControl */}
      <SegmentedControl
        value={statusFilter}
        onValueChange={(v) => setStatusFilter(v as Issue["status"] | "전체")}
        options={STATUS_FILTER_OPTIONS}
        intent="primary"
        inline
      />

      {/* 상태별로 그룹화한 카드 리스트. 평면 목록 대신 자연스러운 정보 구조 사용 */}
      {grouped.length === 0 ? (
        <NonIdealState icon="filter" title="조건에 맞는 이슈가 없습니다" layout="horizontal" />
      ) : (
        <div className="flex flex-col gap-3">
          {grouped.map((g) => (
            <div key={g.status} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Tag intent={STATUS_INTENT[g.status]} minimal>{g.status}</Tag>
                <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{g.items.length}건</span>
              </div>
              <div className="flex flex-col gap-2">
                {g.items.map((issue) => (
                  <Card
                    key={issue.id}
                    interactive
                    onClick={ => setSelectedId(issue.id)}
                    className="flex items-center gap-2 px-4 py-3"
                    style={{ display: "flex" }}
                  >
                    <code style={{ opacity: 0.6, fontSize: "0.75rem" }}>{issue.key}</code>
                    {/* Tooltip으로 상태 설명 표시 */}
                    <Tooltip content={issue.status === "닫힘" ? "해결 완료" : issue.status === "진행중" ? "작업 중" : "처리 대기"}>
                      <Tag intent={STATUS_INTENT[issue.status]} minimal>{issue.status}</Tag>
                    </Tooltip>
                    <span className="flex-1">{issue.title}</span>
                    <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{issue.createdLabel}</span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 담당자별 배정 현황과 내 라벨 분포 차트 */}
      <div className="grid gap-3" style={{ gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}>
        <Card>
          <span className="text-sm font-medium">담당자별 배정 현황</span>
          <div style={{ inlineSize: "100%", blockSize: 120, marginBlockStart: 8 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byAssignee} layout="vertical" margin={{ left: 8 }}>
                <XAxis type="number" hide allowDecimals={false} />
                <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={56} tick={{ style: { fontSize: 11 } }} />
                <RechartsTooltip />
                <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <span className="text-sm font-medium">내 라벨 분포</span>
          {myLabelBreakdown.length === 0 ? (
            <div style={{ fontSize: "0.75rem", opacity: 0.6, marginBlockStart: 8 }}>붙은 라벨이 없어요.</div>
          ) : (
            <div style={{ inlineSize: "100%", blockSize: 120, marginBlockStart: 8 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={myLabelBreakdown} layout="vertical" margin={{ left: 8 }}>
                  <XAxis type="number" hide allowDecimals={false} />
                  <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={56} tick={{ style: { fontSize: 11 } }} />
                  <RechartsTooltip />
                  <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} isAnimationActive={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
