import * as React from "react";
import {
  Breadcrumbs, Button, Card, CardList, Checkbox, HTMLSelect, InputGroup, Section, SectionCard, Tag, TagInput,
} from "@blueprintjs/core";
import type { BreadcrumbProps } from "@blueprintjs/core";
import type { Intent } from "@blueprintjs/core";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ISSUES, type Issue } from "../data";

// 담당자 필터 HTMLSelect와 열린 이슈만 보기 Checkbox 추가

const STATUS_INTENT: Record<Issue["status"], Intent> = {
  열림: "success",
  진행중: "primary",
  닫힘: "none",
};

// 비주얼 업그레이드로 기존 이슈 카드 리스트 위에 통계카드, 미니 막대그래프 추가
const STATUS_ORDER: Issue["status"][] = ["열림", "진행중", "닫힘"];

const ASSIGNEE_ROSTER = ["미배정", "김지수", "박준호", "이서연", "오태윤"];

// 상태 변경, 담당자 재지정 컨트롤, 활동 타임라인, 관련 이슈를 상세 화면에 표시
function IssueDetail({
  issue, onBack, allIssues, onSelect,
}: {
  issue: Issue;
  onBack:  => void;
  allIssues: Issue[];
  onSelect: (id: string) => void;
}) {
  const [status, setStatus] = React.useState<Issue["status"]>(issue.status);
  const [assignee, setAssignee] = React.useState(issue.assignee);
  const [labels, setLabels] = React.useState<string[]>(issue.labels);
  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState<{ text: string; at: string }[]>([]);

  const submitComment =  => {
    if (!comment.trim) return;
    setComments((prev) => [...prev, { text: comment.trim, at: "방금" }]);
    setComment("");
  };

  const related = allIssues.filter(
    (i) => i.id !== issue.id && i.labels.some((l) => issue.labels.includes(l)),
  );

  const activity = [
    { label: "이슈 생성", who: issue.assignee === "미배정" ? "시스템" : issue.assignee, at: issue.createdLabel },
    ...issue.labels.map((l) => ({ label: `라벨 "${l}" 추가`, who: issue.assignee, at: issue.createdLabel })),
    ...(issue.status !== "열림" ? [{ label: `상태를 "${issue.status}"(으)로 변경`, who: issue.assignee, at: "최근" }] : []),
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button icon="arrow-left" onClick={onBack} minimal style={{ alignSelf: "flex-start" }}>
          목록으로
        </Button>
        {/* Breadcrumbs로 드릴다운 위치 표시 */}
        <Breadcrumbs
          items={[{ text: "이슈" }, { text: issue.key, current: true } satisfies BreadcrumbProps]}
        />
      </div>
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
      {/* 라벨 칩 편집. 여백 완전 제거 */}
      <TagInput
        addOnBlur
        placeholder="라벨을 입력하고 Enter (지우려면 태그의 x)"
        values={labels}
        onChange={(v) => setLabels(v as string[])}
      />
      <Card>{issue.body}</Card>

      {/* 상태 변경과 담당자 재지정 */}
      <div className="flex items-center gap-3" style={{ flexWrap: "wrap" }}>
        <label className="flex items-center gap-2" style={{ fontSize: "0.8125rem" }}>
          상태
          <HTMLSelect
            value={status}
            options={STATUS_ORDER}
            onChange={(e) => setStatus(e.currentTarget.value as Issue["status"])}
          />
        </label>
        <label className="flex items-center gap-2" style={{ fontSize: "0.8125rem" }}>
          담당자
          <HTMLSelect
            value={assignee}
            options={ASSIGNEE_ROSTER}
            onChange={(e) => setAssignee(e.currentTarget.value)}
          />
        </label>
      </div>

      <Section title="활동">
        <SectionCard padded={false}>
          <CardList bordered={false}>
            {activity.map((a, i) => (
              <Card key={i} style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{a.label}</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{a.who} · {a.at}</span>
              </Card>
            ))}
          </CardList>
        </SectionCard>
      </Section>

      {related.length > 0 ? (
        <Section title="관련 이슈">
          <SectionCard padded={false}>
            <CardList bordered={false}>
              {related.map((r) => (
                <Card key={r.id} interactive onClick={ => onSelect(r.id)}>
                  <div className="flex items-center gap-2">
                    <code style={{ opacity: 0.6, fontSize: "0.75rem" }}>{r.key}</code>
                    <Tag intent={STATUS_INTENT[r.status]} minimal>{r.status}</Tag>
                    <span style={{ flex: 1 }}>{r.title}</span>
                  </div>
                </Card>
              ))}
            </CardList>
          </SectionCard>
        </Section>
      ) : null}

      <Section title="댓글">
        <SectionCard>
          <InputGroup
            placeholder="댓글을 입력하세요"
            value={comment}
            onChange={(e) => setComment(e.currentTarget.value)}
            onKeyDown={(e) => { if (e.key === "Enter") submitComment; }}
            rightElement={<Button icon="send-message" minimal onClick={submitComment} aria-label="댓글 등록" />}
          />
        </SectionCard>
        {comments.length > 0 ? (
          <SectionCard padded={false}>
            <CardList bordered={false}>
              {comments.map((c, i) => (
                <Card key={i} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{c.text}</span>
                  <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{c.at}</span>
                </Card>
              ))}
            </CardList>
          </SectionCard>
        ) : null}
      </Section>
    </div>
  );
}

export function IssuesScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = ISSUES.find((i) => i.id === selectedId) ?? null;

  if (selected) {
    return (
      <IssueDetail
        issue={selected} onBack={ => setSelectedId(null)}
        allIssues={ISSUES} onSelect={setSelectedId}
      />
    );
  }

  const byStatus = STATUS_ORDER.map((s) => ({ name: s, value: ISSUES.filter((i) => i.status === s).length }));
  const byAssignee = Object.entries(
    ISSUES.reduce<Record<string, number>>((acc, i) => {
      acc[i.assignee] = (acc[i.assignee] ?? 0) + 1;
      return acc;
    }, {}),
  ).map(([name, value]) => ({ name, value }));
  const byLabel = Object.entries(
    ISSUES.reduce<Record<string, number>>((acc, i) => {
      i.labels.forEach((l) => { acc[l] = (acc[l] ?? 0) + 1; });
      return acc;
    }, {}),
  ).map(([name, value]) => ({ name, value }));

  return <IssuesBody byStatus={byStatus} byAssignee={byAssignee} byLabel={byLabel} onSelect={setSelectedId} />;
}

function IssuesBody({
  byStatus, byAssignee, byLabel, onSelect,
}: {
  byStatus: { name: string; value: number }[];
  byAssignee: { name: string; value: number }[];
  byLabel: { name: string; value: number }[];
  onSelect: (id: string) => void;
}) {
  const [assignee, setAssignee] = React.useState("전체");
  const [openOnly, setOpenOnly] = React.useState(false);
  const assignees = ["전체", ...new Set(ISSUES.map((i) => i.assignee))];
  const rows = ISSUES.filter(
    (i) => (assignee === "전체" || i.assignee === assignee) && (!openOnly || i.status !== "닫힘"),
  );

  return (
    <div className="flex flex-col gap-4">
      {/* 담당자 필터와 열린 이슈만 보기 옵션 */}
      <div className="flex items-center gap-3" style={{ flexWrap: "wrap" }}>
        <HTMLSelect value={assignee} onChange={(e) => setAssignee(e.currentTarget.value)} options={assignees} />
        <Checkbox
          checked={openOnly} label="열린 이슈만" style={{ marginBottom: 0 }}
          onChange={(e) => setOpenOnly(e.currentTarget.checked)}
        />
      </div>

      {/* 작은 통계카드 */}
      <div className="flex flex-wrap gap-3">
        <Card style={{ flex: "1 1 8rem", minWidth: "8rem" }}>
          <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>전체</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{ISSUES.length}</div>
        </Card>
        {STATUS_ORDER.map((s) => (
          <Card key={s} style={{ flex: "1 1 8rem", minWidth: "8rem" }}>
            <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>{s}</div>
            <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{ISSUES.filter((i) => i.status === s).length}</div>
          </Card>
        ))}
      </div>

      {/* 미니 막대그래프 둘 */}
      <div className="flex flex-wrap gap-3">
        <Card style={{ flex: "1 1 14rem", minWidth: "14rem" }}>
          <div style={{ fontSize: "0.75rem", opacity: 0.7, marginBlockEnd: "0.5rem" }}>상태별</div>
          <div style={{ inlineSize: "100%", blockSize: 100 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byStatus} layout="vertical" margin={{ left: 8 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={40} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card style={{ flex: "1 1 14rem", minWidth: "14rem" }}>
          <div style={{ fontSize: "0.75rem", opacity: 0.7, marginBlockEnd: "0.5rem" }}>담당자별</div>
          <div style={{ inlineSize: "100%", blockSize: 100 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byAssignee} layout="vertical" margin={{ left: 8 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={56} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="value" fill="var(--component-chart-series-2)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

    <div className="flex flex-col gap-2">
      {rows.map((issue) => (
        <Card
          key={issue.id}
          interactive
          onClick={ => onSelect(issue.id)}
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

      {/* 라벨별 분포. 여백 완전 제거 */}
      <Card>
        <div style={{ fontSize: "0.75rem", opacity: 0.7, marginBlockEnd: "0.5rem" }}>라벨별 분포</div>
        <div style={{ inlineSize: "100%", blockSize: 120 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={byLabel} layout="vertical" margin={{ left: 8 }}>
              <XAxis type="number" hide allowDecimals={false} />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={72} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="value" fill="var(--component-chart-series-3)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
