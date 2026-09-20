import * as React from "react";
import {
  ActionList, ActionMenu, Avatar, AvatarStack, Button, ButtonGroup, Dialog, FormControl,
  IconButton, Pagination, ProgressBar, SegmentedControl, StateLabel, TextInput,
} from "@primer/react";
import { Blankslate, Card } from "@primer/react/experimental";
import { Ellipsis, FileDiff, GitMerge, GitPullRequestDraft, Inbox, Plus, type LucideIcon } from "lucide-react";
import { PULL_REQUESTS, type PullRequestItem } from "../data";

// 이 화면 안에서 스탯카드 4요소 세트 독립 생성
const TONES = {
  success: { fg: "var(--fgColor-success)", bg: "var(--bgColor-success-muted)", path: "success.emphasis" },
  accent: { fg: "var(--fgColor-accent)", bg: "var(--bgColor-accent-muted)", path: "accent.emphasis" },
  neutral: { fg: "var(--fgColor-neutral)", bg: "var(--bgColor-neutral-muted)", path: "neutral.emphasis" },
  attention: { fg: "var(--fgColor-attention)", bg: "var(--bgColor-attention-muted)", path: "attention.emphasis" },
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

const STATE_STATUS: Record<PullRequestItem["state"], "pullOpened" | "pullMerged" | "draft"> = {
  open: "pullOpened",
  merged: "pullMerged",
  draft: "draft",
};

const FILTERS: { key: "all" | PullRequestItem["state"]; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "open", label: "열림" },
  { key: "merged", label: "병합됨" },
  { key: "draft", label: "Draft" },
];

function PullStats({ pulls }: { pulls: PullRequestItem[] }) {
  const open = pulls.filter((p) => p.state === "open").length;
  const merged = pulls.filter((p) => p.state === "merged").length;
  const draft = pulls.filter((p) => p.state === "draft").length;
  const avgFiles = Math.round(pulls.reduce((sum, p) => sum + p.changedFiles, 0) / pulls.length);
  const totalFiles = pulls.reduce((sum, p) => sum + p.changedFiles, 0);
  const noReviewer = pulls.filter((p) => p.reviewers.length === 0).length;
  return (
    // 열 수는 .pr-stats가 지정. auto-fit 시 검토자 없음이 밀리는 문제 있음
    <div className="pr-stats">
      <StatCard icon={GitMerge} label="열림" value={String(open)} tone="success" meter={{ kind: "progress", percent: Math.round((open / pulls.length) * 100) }} />
      <StatCard icon={GitMerge} label="병합됨" value={String(merged)} tone="accent" meter={{ kind: "trend", percent: 15 }} />
      <StatCard icon={GitPullRequestDraft} label="Draft" value={String(draft)} tone="neutral" meter={{ kind: "trend", percent: -2 }} />
      <StatCard icon={FileDiff} label="평균 변경 파일" value={`${avgFiles}개`} tone="attention" meter={{ kind: "trend", percent: 4 }} />
      <StatCard icon={FileDiff} label="총 변경 파일" value={`${totalFiles}개`} tone="accent" meter={{ kind: "progress", percent: Math.min(100, Math.round((totalFiles / 100) * 100)) }} />
      <StatCard icon={Ellipsis} label="검토자 없음" value={String(noReviewer)} tone="danger" meter={{ kind: "trend", percent: -10 }} />
    </div>
  );
}

// PR 작성 진입점. e.target.value 전달, 늦은 읽기 시 크래시 위험 있음
function NewPullRequestDialog({ onClose, onAdd }: { onClose:  => void; onAdd: (title: string) => void }) {
  const [title, setTitle] = React.useState("");
  return (
    <Dialog title="새 Pull request" subtitle="어떤 변경을 요청하는지 제목으로 적어 주세요." onClose={onClose} width="medium">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px" }}>
        <FormControl required>
          <FormControl.Label>제목</FormControl.Label>
          <TextInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="예: 다크 모드 토큰 스냅샷 테스트 추가" block />
        </FormControl>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4px" }}>
          <ButtonGroup>
            <Button onClick={onClose}>취소</Button>
            <Button variant="primary" disabled={title.trim === ""} onClick={ => { onAdd(title.trim); onClose; }}>
              PR 열기
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Dialog>
  );
}

function PullRow({ pr, onRequestReview, onMerge, onClose }: {
  pr: PullRequestItem;
  onRequestReview:  => void;
  onMerge:  => void;
  onClose:  => void;
}) {
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
      {/* 행별 더보기. ActionMenu, ActionList, IconButton 조합, onSelect 연결 */}
      <ActionMenu>
        <ActionMenu.Anchor>
          <IconButton icon={Ellipsis} aria-label="더 보기" size="small" variant="invisible" />
        </ActionMenu.Anchor>
        <ActionMenu.Overlay>
          <ActionList>
            <ActionList.Item onSelect={onRequestReview}>리뷰 요청</ActionList.Item>
            <ActionList.Item disabled={pr.state !== "open"} onSelect={onMerge}>병합</ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item variant="danger" onSelect={onClose}>닫기</ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </div>
  );
}

const PAGE_SIZE = 5;

export function PullRequestsScreen {
  // PR 목록 저장용 로컬 state
  const [pulls, setPulls] = React.useState<PullRequestItem[]>(PULL_REQUESTS);
  const [filter, setFilter] = React.useState<"all" | PullRequestItem["state"]>("all");
  const [page, setPage] = React.useState(1);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const filtered = pulls.filter((pr) => filter === "all" || pr.state === filter);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  // 마지막 행 삭제 시 page 가 pageCount 초과 가능해 렌더 시점에 범위 조정
  const safePage = Math.min(page, pageCount);
  const rows = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const addPull = (title: string) => {
    const nextNumber = Math.max(0, ...pulls.map((p) => p.number)) + 1;
    setPulls((prev) => [
      { id: `p-${Date.now}`, number: nextNumber, title, state: "open", author: "김하늘", reviewers: [], changedFiles: 1, openedLabel: "방금 열림" },
      ...prev,
    ]);
  };

  const requestReview = (id: string) => {
    setPulls((prev) => prev.map((p) => (p.id === id && !p.reviewers.includes("박서준") ? { ...p, reviewers: [...p.reviewers, "박서준"] } : p)));
  };
  const mergePull = (id: string) => {
    setPulls((prev) => prev.map((p) => (p.id === id && p.state === "open" ? { ...p, state: "merged" } : p)));
  };
  const closePull = (id: string) => {
    setPulls((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PullStats pulls={pulls} />
      {/* 우측 CTA 버튼 */}
      <div style={{ marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
        <SegmentedControl
          aria-label="PR 상태 거르기"
          onChange={(i) => {
            setFilter(FILTERS[i].key);
            setPage(1);
          }}
        >
          {FILTERS.map((f) => (
            <SegmentedControl.Button key={f.key} selected={filter === f.key}>
              {f.label}
            </SegmentedControl.Button>
          ))}
        </SegmentedControl>
        <Button leadingVisual={Plus} variant="primary" size="small" onClick={ => setDialogOpen(true)}>새 Pull request</Button>
      </div>
      {rows.length === 0 ? (
        // Blankslate 실험 컴포넌트 사용. 손으로 만든 빈 상태 div 대신 사용
        <Blankslate>
          <Blankslate.Visual><Inbox size={32} /></Blankslate.Visual>
          <Blankslate.Heading>조건에 맞는 PR이 없습니다</Blankslate.Heading>
          <Blankslate.Description>필터를 바꾸면 다른 PR이 보일 수 있어요.</Blankslate.Description>
        </Blankslate>
      ) : (
        rows.map((pr) => (
          <PullRow
            key={pr.id}
            pr={pr}
            onRequestReview={ => requestReview(pr.id)}
            onMerge={ => mergePull(pr.id)}
            onClose={ => closePull(pr.id)}
          />
        ))
      )}
      {/* 총량 텍스트. "Showing N out of M" 패턴 적용 */}
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--fgColor-muted)", textAlign: "center" }}>
        {rows.length} out of {filtered.length} showing
      </div>
      {pageCount > 1 && (
        <div style={{ marginTop: "8px", display: "flex", justifyContent: "center" }}>
          <Pagination pageCount={pageCount} currentPage={safePage} onPageChange={(e, n) => { e.preventDefault; setPage(n); }} />
        </div>
      )}
      {dialogOpen && <NewPullRequestDialog onClose={ => setDialogOpen(false)} onAdd={addPull} />}
    </div>
  );
}
