import * as React from "react";
import { BranchName, Breadcrumbs, Button, Checkbox, FormControl, Label, ProgressBar, Spinner, StateLabel, TextInput, TreeView } from "@primer/react";
import { Blankslate, Card } from "@primer/react/experimental";
import { FileText, GitBranch, PlayCircle, Timer, type LucideIcon } from "lucide-react";
import { WORKFLOWS, type WorkflowRun } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_STATUS: Record<WorkflowRun["status"], "issueClosed" | "issueOpened" | "pullOpened"> = {
  성공: "issueClosed",
  실패: "issueOpened",
  "실행 중": "pullOpened",
};

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
          {meter.percent >= 0 ? "▲" : "▼"} {Math.abs(meter.percent)}%
        </span>
      )}
    </Card>
  );
}

export function RunDetailScreen({ selectedId, workflows: workflowsProp, onSelect, onNavigate }: ScreenProps) {
  const workflows = workflowsProp ?? WORKFLOWS;
  const run = workflows.find((w) => w.id === selectedId);
  const [branch, setBranch] = React.useState(run?.branch ?? "");
  const [debugLogging, setDebugLogging] = React.useState(false);

  React.useEffect( => {
    setBranch(run?.branch ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run?.id]);

  // 같은 브랜치의 다른 실행 목록
  const related = run ? workflows.filter((w) => w.id !== run.id && w.branch === run.branch) : [];
  const others = run ? workflows.filter((w) => w.id !== run.id && w.branch !== run.branch).slice(0, 3) : [];

  if (!run) {
    return (
      // Blankslate 실험 컴포넌트 사용. 손으로 만든 빈 상태 div 대신 사용
      <Blankslate>
        <Blankslate.Visual><PlayCircle size={32} /></Blankslate.Visual>
        <Blankslate.Heading>실행을 먼저 골라 주세요</Blankslate.Heading>
        <Blankslate.Description>"워크플로 실행" 탭에서 항목을 눌러 보세요.</Blankslate.Description>
        <Blankslate.PrimaryAction onClick={ => onNavigate?.("workflows")}>워크플로 목록으로</Blankslate.PrimaryAction>
      </Blankslate>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* Breadcrumbs로 드릴다운 위치 표시 */}
      <Breadcrumbs>
        <Breadcrumbs.Item href="#" onClick={(e: React.MouseEvent) => { e.preventDefault; onNavigate?.("workflows"); }}>
          워크플로 실행
        </Breadcrumbs.Item>
        <Breadcrumbs.Item href="#" selected>{run.name}</Breadcrumbs.Item>
      </Breadcrumbs>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {run.status === "실행 중" && <Spinner size="small" srText={null} />}
        <StateLabel status={STATUS_STATUS[run.status]} />
        <span style={{ fontWeight: 600, fontSize: "16px", color: "var(--fgColor-default)" }}>{run.name}</span>
      </div>
      {/* BranchName으로 평문 대신 브랜치 칩 표시 */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--fgColor-muted)" }}>
        <BranchName href="#" onClick={(e: React.MouseEvent) => e.preventDefault}>{run.branch}</BranchName>
        <span>· {run.trigger} · {run.timeLabel} · {run.durationLabel}</span>
      </div>
      {/* 상세 화면 스탯카드 */}
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        <StatCard icon={FileText} label="로그 라인" value={String(run.log.length)} tone="neutral" meter={{ kind: "trend", percent: 0 }} />
        <StatCard icon={GitBranch} label="같은 브랜치 다른 실행" value={String(related.length)} tone="accent" meter={{ kind: "progress", percent: Math.min(100, related.length * 30) }} />
        <StatCard
          icon={Timer}
          label="상태"
          value={run.status}
          tone={run.status === "성공" ? "success" : run.status === "실패" ? "danger" : "accent"}
          meter={{ kind: "progress", percent: run.status === "성공" ? 100 : run.status === "실패" ? 100 : 60 }}
        />
      </div>
      {/* 실행 단계 TreeView로 표시. 단계 상세 없어 체크아웃, 실행, 결과 구조만 보임 */}
      <TreeView aria-label="실행 단계" flat>
        <TreeView.Item id="step-checkout">체크아웃 · {run.branch}</TreeView.Item>
        <TreeView.Item id="step-run" current={run.status === "실행 중"}>빌드 &amp; 테스트</TreeView.Item>
        <TreeView.Item id="step-upload" current={run.status !== "실행 중"}>
          {run.status === "실패" ? "결과 업로드 (실패)" : "결과 업로드"}
        </TreeView.Item>
      </TreeView>
      <pre
        style={{
          background: "var(--bgColor-emphasis)", color: "var(--fgColor-onEmphasis)",
          borderRadius: "6px", padding: "14px", fontSize: "13px", lineHeight: 1.6,
          overflowX: "auto", margin: 0,
        }}
      >
        {run.log.join("\n")}
      </pre>

      <div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)", marginBottom: "6px" }}>재실행 옵션</div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "12px" }}>
          <FormControl>
            <FormControl.Label>브랜치</FormControl.Label>
            <TextInput value={branch} onChange={(e) => setBranch(e.target.value)} size="small" />
          </FormControl>
          <FormControl>
            <Checkbox checked={debugLogging} onChange={(e) => setDebugLogging(e.target.checked)} />
            <FormControl.Label>디버그 로깅 활성화</FormControl.Label>
          </FormControl>
          <Button variant="primary" size="small">재실행</Button>
        </div>
      </div>

      {(related.length > 0 || others.length > 0) && (
        <div>
          <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)", marginBottom: "6px" }}>
            {related.length > 0 ? `${run.branch} 브랜치의 다른 실행` : "최근 다른 실행"}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {(related.length > 0 ? related : others).map((w) => (
              <div
                key={w.id}
                onClick={ => { onSelect?.(w.id); onNavigate?.("detail"); }}
                role="button"
                tabIndex={0}
                style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", padding: "6px 4px" }}
              >
                <StateLabel status={STATUS_STATUS[w.status]} />
                <span style={{ fontSize: "14px", color: "var(--fgColor-accent)" }}>{w.name}</span>
                <Label variant="secondary">{w.branch}</Label>
                <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{w.timeLabel}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
