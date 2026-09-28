import * as React from "react";
import { BranchName, Button, Link, Pagination, ProgressBar, Spinner, StateLabel } from "@primer/react";
import { Card, DataTable, Table, type Column } from "@primer/react/experimental";
import { Select } from "@primer/react";
import { CheckCircle2, Play, Timer, XCircle, type LucideIcon } from "lucide-react";
import { SECRETS, WORKFLOWS, type WorkflowRun } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_STATUS: Record<WorkflowRun["status"], "issueClosed" | "issueOpened" | "pullOpened"> = {
  성공: "issueClosed",
  실패: "issueOpened",
  "실행 중": "pullOpened",
};

// 이 화면 안에서 스탯카드 4요소 세트 독립 생성
const TONES = {
  success: { fg: "var(--fgColor-success)", bg: "var(--bgColor-success-muted)", path: "success.emphasis" },
  accent: { fg: "var(--fgColor-accent)", bg: "var(--bgColor-accent-muted)", path: "accent.emphasis" },
  neutral: { fg: "var(--fgColor-neutral)", bg: "var(--bgColor-neutral-muted)", path: "neutral.emphasis" },
  danger: { fg: "var(--fgColor-danger)", bg: "var(--bgColor-danger-muted)", path: "danger.emphasis" },
} as const;
type Tone = keyof typeof TONES;
type Meter = { kind: "progress"; percent: number } | { kind: "trend"; percent: number };

function StatCard({ icon: Icon, label, value, tone, meter }: { icon: LucideIcon; label: string; value: string; tone: Tone; meter: Meter }) {
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

function WorkflowStats({ workflows }: { workflows: WorkflowRun[] }) {
  const succeeded = workflows.filter((w) => w.status === "성공").length;
  const failed = workflows.filter((w) => w.status === "실패").length;
  const running = workflows.filter((w) => w.status === "실행 중").length;
  return (
    <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", marginBottom: "16px" }}>
      <StatCard icon={CheckCircle2} label="성공" value={String(succeeded)} tone="success" meter={{ kind: "progress", percent: Math.round((succeeded / workflows.length) * 100) }} />
      <StatCard icon={XCircle} label="실패" value={String(failed)} tone="danger" meter={{ kind: "trend", percent: -8 }} />
      <StatCard icon={Play} label="실행 중" value={String(running)} tone="accent" meter={{ kind: "trend", percent: 100 }} />
      <StatCard icon={Timer} label="등록된 시크릿" value={String(SECRETS.length)} tone="neutral" meter={{ kind: "trend", percent: 0 }} />
    </div>
  );
}

// 성공률 스택 바. 범례와 상태색 매핑, DataTable 목록과 다른 차트로 2종류 충족
function SuccessRateChart({ workflows }: { workflows: WorkflowRun[] }) {
  const succeeded = workflows.filter((w) => w.status === "성공").length;
  const failed = workflows.filter((w) => w.status === "실패").length;
  const running = workflows.filter((w) => w.status === "실행 중").length;
  const segments: { label: string; count: number; path: string; dot: string }[] = [
    { label: "성공", count: succeeded, path: "success.emphasis", dot: "var(--bgColor-success-emphasis)" },
    { label: "실패", count: failed, path: "danger.emphasis", dot: "var(--bgColor-danger-emphasis)" },
    { label: "실행 중", count: running, path: "accent.emphasis", dot: "var(--bgColor-accent-emphasis)" },
  ];
  return (
    <Card padding="condensed" style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)" }}>최근 실행 성공률</span>
        <div style={{ display: "flex", gap: "12px", fontSize: "11px", color: "var(--fgColor-muted)" }}>
          {segments.map((s) => (
            <span key={s.label} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <span aria-hidden style={{ width: 8, height: 8, borderRadius: 2, background: s.dot }} /> {s.label} {s.count}
            </span>
          ))}
        </div>
      </div>
      <ProgressBar barSize="large" aria-label="워크플로 상태 분포">
        {segments.filter((s) => s.count > 0).map((s) => (
          <ProgressBar.Item key={s.label} progress={(s.count / workflows.length) * 100} bg={s.path} aria-label={`${s.label} ${s.count}건`} />
        ))}
      </ProgressBar>
    </Card>
  );
}

const PAGE_SIZE = 5;

export function WorkflowsScreen({ workflows: workflowsProp, onAddWorkflow, onNavigate, onSelect }: ScreenProps) {
  const workflows = workflowsProp ?? WORKFLOWS;
  const [status, setStatus] = React.useState<WorkflowRun["status"] | "all">("all");
  const [page, setPage] = React.useState(1);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  // 워크플로 실행 버튼. 다이얼로그 없이 즉시 생성 후 상세로 이동하기
  const runWorkflow =  => {
    const id = `wf-${Date.now}`;
    onAddWorkflow?.({
      id,
      name: "수동 실행",
      trigger: "workflow_dispatch",
      status: "실행 중",
      branch: "main",
      durationLabel: "진행 중",
      timeLabel: "방금",
      log: ["$ 워크플로 수동 실행", "대기열에 추가되었습니다...", "실행기(runner) 배정 대기 중"],
    });
    open(id);
  };

  const filtered = workflows.filter((w) => status === "all" || w.status === status);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const columns: Column<WorkflowRun>[] = [
    {
      header: "상태",
      field: "status",
      width: "auto",
      renderCell: (w) => (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {w.status === "실행 중" && <Spinner size="small" srText={null} />}
          <StateLabel status={STATUS_STATUS[w.status]} />
        </div>
      ),
    },
    {
      header: "이름",
      field: "name",
      rowHeader: true,
      renderCell: (w) => (
        <Link href="#" onClick={(e: React.MouseEvent) => { e.preventDefault; open(w.id); }}>
          {w.name}
        </Link>
      ),
    },
    {
      // BranchName으로 브랜치를 평문 대신 Primer 칩으로 표시
      header: "브랜치",
      field: "branch",
      renderCell: (w) => <BranchName>{w.branch}</BranchName>,
    },
    { header: "트리거", field: "trigger" },
    { header: "시작", field: "timeLabel" },
    { header: "소요시간", field: "durationLabel", align: "end" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <WorkflowStats workflows={workflows} />
      <SuccessRateChart workflows={workflows} />
      {/* 우측에 CTA 버튼 추가 */}
      <div style={{ marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
        <Select
          value={status}
          onChange={(e) => { setStatus(e.target.value as WorkflowRun["status"] | "all"); setPage(1); }}
          size="small"
          aria-label="상태 거르기"
        >
          <Select.Option value="all">전체 상태</Select.Option>
          <Select.Option value="성공">성공</Select.Option>
          <Select.Option value="실패">실패</Select.Option>
          <Select.Option value="실행 중">실행 중</Select.Option>
        </Select>
        <Button leadingVisual={Play} variant="primary" size="small" onClick={runWorkflow}>워크플로 실행</Button>
      </div>
      <Table.Container>
        <Table.Title as="h3" id="workflows-table-title" style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)" }}>
          최근 실행
        </Table.Title>
        {rows.length === 0 ? (
          <span style={{ fontSize: "14px", color: "var(--fgColor-muted)" }}>조건에 맞는 실행이 없습니다.</span>
        ) : (
          <DataTable aria-labelledby="workflows-table-title" data={rows} columns={columns} cellPadding="condensed" />
        )}
      </Table.Container>
      {/* 총량 텍스트, "Showing N out of M" 패턴 */}
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--fgColor-muted)", textAlign: "center" }}>
        {rows.length} out of {filtered.length} showing
      </div>
      {pageCount > 1 && (
        <div style={{ marginTop: "8px", display: "flex", justifyContent: "center" }}>
          <Pagination pageCount={pageCount} currentPage={page} onPageChange={(e, n) => { e.preventDefault; setPage(n); }} />
        </div>
      )}
    </div>
  );
}
