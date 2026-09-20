import * as React from "react";
import {
  AriaStatus, Avatar, Button, ButtonGroup, Checkbox, Dialog, FormControl, Label, LabelGroup,
  ProgressBar, SelectPanel, StateLabel, Textarea, TextInput,
} from "@primer/react";
import type { SelectPanelItemInput as ItemInput } from "@primer/react";
// Card는 @primer/react 메인에 없음, experimental 전용임
import { Card } from "@primer/react/experimental";
import { CircleDot, GitPullRequest, MessageSquare, Plus, Search, Tags, Users, type LucideIcon } from "lucide-react";
import { ACTIVITY, ISSUES, ISSUE_TREND_7D, PULL_REQUESTS, type IssueItem } from "../data";
import type { ScreenProps } from "../screens";

// 스탯카드 4요소: 아이콘 배지, 라벨, 큰 숫자, 진행바 또는 증감%
const TONES = {
  success: { fg: "var(--fgColor-success)", bg: "var(--bgColor-success-muted)", path: "success.emphasis" },
  accent: { fg: "var(--fgColor-accent)", bg: "var(--bgColor-accent-muted)", path: "accent.emphasis" },
  neutral: { fg: "var(--fgColor-neutral)", bg: "var(--bgColor-neutral-muted)", path: "neutral.emphasis" },
  attention: { fg: "var(--fgColor-attention)", bg: "var(--bgColor-attention-muted)", path: "attention.emphasis" },
  danger: { fg: "var(--fgColor-danger)", bg: "var(--bgColor-danger-muted)", path: "danger.emphasis" },
} as const;

type Tone = keyof typeof TONES;
type Meter = { kind: "progress"; percent: number } | { kind: "trend"; percent: number };

export function StatCard({ icon: Icon, label, value, tone, meter }: { icon: LucideIcon; label: string; value: string; tone: Tone; meter: Meter }) {
  const t = TONES[tone];
  return (
    <Card padding="condensed">
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <span aria-hidden style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: "6px", background: t.bg, color: t.fg, flexShrink: 0 }}>
          <Icon size={14} />
        </span>
        <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{label}</span>
      </div>
      <div style={{ fontSize: "22px", fontWeight: 600, color: t.fg, marginBottom: meter.kind === "progress" ? "6px" : "2px" }}>{value}</div>
      {meter.kind === "progress" ? (
        <ProgressBar progress={meter.percent} bg={t.path} barSize="small" aria-label={`${label} 비율 ${meter.percent}%`} />
      ) : (
        <span style={{ fontSize: "12px", color: meter.percent >= 0 ? "var(--fgColor-success)" : "var(--fgColor-danger)" }}>
          {meter.percent >= 0 ? "▲" : "▼"} {Math.abs(meter.percent)}% 지난주 대비
        </span>
      )}
    </Card>
  );
}

function IssueStats({ issues }: { issues: IssueItem[] }) {
  const openIssues = issues.filter((i) => i.state === "open").length;
  const openPulls = PULL_REQUESTS.filter((p) => p.state === "open").length;
  const contributors = new Set(ACTIVITY.map((a) => a.actor)).size;
  const closedThisWeek = issues.filter((i) => i.state === "closed").length;
  const avgComments = Math.round((issues.reduce((sum, i) => sum + i.comments, 0) / issues.length) * 10) / 10;
  const labelCount = new Set(issues.flatMap((i) => i.labels.map((l) => l.text))).size;
  return (
    // 열 수는 .pr-stats가 지정. auto-fit 시 라벨 종류가 밀리는 문제 있음
    <div className="pr-stats">
      <StatCard icon={CircleDot} label="열린 이슈" value={String(openIssues)} tone="success" meter={{ kind: "progress", percent: Math.round((openIssues / issues.length) * 100) }} />
      <StatCard icon={GitPullRequest} label="열린 PR" value={String(openPulls)} tone="accent" meter={{ kind: "trend", percent: 8 }} />
      <StatCard icon={Users} label="기여자" value={String(contributors)} tone="neutral" meter={{ kind: "trend", percent: 0 }} />
      <StatCard icon={CircleDot} label="이번 주 닫힘" value={String(closedThisWeek)} tone="danger" meter={{ kind: "progress", percent: Math.round((closedThisWeek / issues.length) * 100) }} />
      <StatCard icon={MessageSquare} label="평균 댓글" value={String(avgComments)} tone="attention" meter={{ kind: "trend", percent: -5 }} />
      <StatCard icon={Tags} label="라벨 종류" value={String(labelCount)} tone="accent" meter={{ kind: "trend", percent: 12 }} />
    </div>
  );
}

// 7일 이슈 활동 미니 바 차트, 열림/닫힘 2계열. 툴팁은 title로 표시
function IssueTrendChart {
  const max = Math.max(...ISSUE_TREND_7D.flatMap((d) => [d.opened, d.closed]), 1);
  return (
    <Card padding="condensed" style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)" }}>최근 7일 이슈 활동</span>
        <div style={{ display: "flex", gap: "12px", fontSize: "11px", color: "var(--fgColor-muted)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span aria-hidden style={{ width: 8, height: 8, borderRadius: 2, background: "var(--bgColor-success-emphasis)" }} /> 열림
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span aria-hidden style={{ width: 8, height: 8, borderRadius: 2, background: "var(--bgColor-danger-emphasis)" }} /> 닫힘
          </span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "72px" }}>
        {ISSUE_TREND_7D.map((d) => (
          <div key={d.day} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: 1 }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "52px" }}>
              <div title={`${d.day}요일 열림 ${d.opened}건`} aria-hidden style={{ width: "8px", height: `${Math.max(4, (d.opened / max) * 52)}px`, borderRadius: "2px 2px 0 0", background: "var(--bgColor-success-emphasis)" }} />
              <div title={`${d.day}요일 닫힘 ${d.closed}건`} aria-hidden style={{ width: "8px", height: `${Math.max(4, (d.closed / max) * 52)}px`, borderRadius: "2px 2px 0 0", background: "var(--bgColor-danger-emphasis)" }} />
            </div>
            <span style={{ fontSize: "11px", color: "var(--fgColor-muted)" }}>{d.day}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

// 행 클릭, 목록에서 상세로 드릴다운하기
function IssueRow({ issue, onOpen }: { issue: IssueItem; onOpen:  => void }) {
  return (
    <div
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault; onOpen; } }}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        padding: "12px 4px",
        borderBottom: "1px solid var(--borderColor-muted)",
        cursor: "pointer",
      }}
    >
      <StateLabel status={issue.state === "open" ? "issueOpened" : "issueClosed"} />
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span style={{ fontWeight: 600, color: "var(--fgColor-default)" }}>{issue.title}</span>
          {/* LabelGroup으로 라벨 다수일 때 오버플로 관리하기 */}
          <LabelGroup visibleChildCount="auto">
            {issue.labels.map((l) => (
              <Label key={l.text} variant={l.variant}>
                {l.text}
              </Label>
            ))}
          </LabelGroup>
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

const ALL_LABELS = Array.from(new Set(ISSUES.flatMap((i) => i.labels.map((l) => l.text))));

// 라벨 다중 선택 필터 SelectPanel
function LabelFilterPanel({ selected, onChange }: { selected: string[]; onChange: (labels: string[]) => void }) {
  const [open, setOpen] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState("");
  const allItems: ItemInput[] = ALL_LABELS.map((text) => ({ text, id: text }));
  const items = allItems.filter((i) => String(i.text).toLowerCase.includes(filterValue.toLowerCase));
  const selectedItems = allItems.filter((i) => selected.includes(String(i.text)));

  return (
    <SelectPanel
      title="라벨로 거르기"
      placeholder="라벨 검색"
      open={open}
      onOpenChange={setOpen}
      items={items}
      filterValue={filterValue}
      onFilterChange={setFilterValue}
      selected={selectedItems}
      onSelectedChange={(next: ItemInput[]) => onChange(next.map((i) => String(i.text)))}
      renderAnchor={(anchorProps) => (
        <button
          {...anchorProps}
          type="button"
          style={{
            display: "flex", alignItems: "center", gap: "6px", fontSize: "13px",
            border: "1px solid var(--borderColor-default)", borderRadius: "6px",
            padding: "5px 10px", background: "var(--bgColor-default)", color: "var(--fgColor-default)",
            cursor: "pointer",
          }}
        >
          라벨 {selected.length > 0 ? `(${selected.length})` : ""}
        </button>
      )}
    />
  );
}

function NewIssueDialog({ onClose, onAdd }: { onClose:  => void; onAdd: (title: string, body: string) => void }) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  return (
    <Dialog title="새 이슈 작성" subtitle="무엇이 문제인지 짧게 적어 주세요." onClose={onClose} width="medium">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px" }}>
        <FormControl required>
          <FormControl.Label>제목</FormControl.Label>
          <TextInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="예: 다크 모드에서 아이콘이 안 보입니다" block />
        </FormControl>
        <FormControl>
          <FormControl.Label>설명</FormControl.Label>
          <Textarea value={body} onChange={(e) => setBody(e.target.value)} rows={4} block resize="vertical" placeholder="재현 방법·기대 동작을 적어 주세요" />
        </FormControl>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4px" }}>
          <ButtonGroup>
            <Button onClick={onClose}>취소</Button>
            <Button
              variant="primary"
              disabled={title.trim === ""}
              onClick={ => { onAdd(title.trim, body.trim); onClose; }}
            >
              이슈 등록
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Dialog>
  );
}

export function IssuesScreen({ issues: issuesProp, onAddIssue, onNavigate, onSelect }: ScreenProps) {
  const issues = issuesProp ?? ISSUES;
  const [query, setQuery] = React.useState("");
  const [showClosed, setShowClosed] = React.useState(true);
  const [labelFilter, setLabelFilter] = React.useState<string[]>([]);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const rows = issues.filter(
    (i) =>
      (showClosed || i.state === "open") &&
      (query.trim === "" || i.title.includes(query)) &&
      (labelFilter.length === 0 || i.labels.some((l) => labelFilter.includes(l.text))),
  );

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const addIssue = (title: string, body: string) => {
    const nextNumber = Math.max(0, ...issues.map((i) => i.number)) + 1;
    onAddIssue?.({
      id: `i-${Date.now}`,
      number: nextNumber,
      title,
      state: "open",
      author: "김하늘",
      labels: [],
      comments: 0,
      openedLabel: "방금 열림",
      body: body === "" ? "설명이 없습니다." : body,
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <IssueStats issues={issues} />
      <IssueTrendChart />
      {/* 검색창과 라벨 필터에 TextInput, Checkbox, SelectPanel 배치 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "12px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <TextInput
            leadingVisual={Search}
            placeholder="이슈 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            size="small"
          />
          <LabelFilterPanel selected={labelFilter} onChange={setLabelFilter} />
          <FormControl>
            <Checkbox checked={showClosed} onChange={(e) => setShowClosed(e.target.checked)} />
            <FormControl.Label>닫힌 이슈도 보기</FormControl.Label>
          </FormControl>
        </div>
        <Button leadingVisual={Plus} variant="primary" size="small" onClick={ => setDialogOpen(true)}>새 이슈</Button>
      </div>
      {/* 필터 변경 시 결과 수 스크린리더 안내 */}
      <AriaStatus hidden announceOnShow>{`이슈 ${rows.length}건 표시 중`}</AriaStatus>
      {rows.map((issue) => (
        <IssueRow key={issue.id} issue={issue} onOpen={ => open(issue.id)} />
      ))}
      {/* 총량 텍스트, "Showing N out of M" 패턴 */}
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--fgColor-muted)", textAlign: "center" }}>
        {rows.length} out of {issues.length} showing
      </div>
      {dialogOpen && <NewIssueDialog onClose={ => setDialogOpen(false)} onAdd={addIssue} />}
    </div>
  );
}
