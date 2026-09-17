import * as React from "react";
import { Avatar, Breadcrumbs, Button, FormControl, Label, LabelGroup, StateLabel, Textarea } from "@primer/react";
import { Blankslate } from "@primer/react/experimental";
import { MessageSquare, Search } from "lucide-react";
import type { IssueItem } from "../data";
import type { ScreenProps } from "../screens";

interface Comment {
  id: string;
  author: string;
  text: string;
  timeLabel: string;
}

// 댓글 개수만 있는 데이터 기반, 개수만큼 시드 댓글 생성
function seedComments(issue: IssueItem): Comment[] {
  if (issue.comments === 0) return [];
  const pool = [
    "같은 문제를 겪고 있어요. 재현됩니다.",
    "스크린샷 첨부할게요, 확인 부탁드려요.",
    "다음 릴리스에 반영 예정입니다.",
    "PR 올렸습니다, 리뷰 부탁드려요.",
  ];
  const authors = ["박서준", "이도윤", "김하늘"];
  return Array.from({ length: Math.min(issue.comments, 4) }, (_, i) => ({
    id: `${issue.id}-seed-${i}`,
    author: authors[i % authors.length],
    text: pool[i % pool.length],
    timeLabel: issue.openedLabel,
  }));
}

export function IssueDetailScreen({ selectedId, issues, onNavigate }: ScreenProps) {
  const issue = (issues ?? []).find((i) => i.id === selectedId);
  const [comments, setComments] = React.useState<Comment[]>( => (issue ? seedComments(issue) : []));
  const [draft, setDraft] = React.useState("");

  // 이슈 전환 시 댓글 목록, 초안을 새 이슈 기준으로 재설정
  React.useEffect( => {
    setComments(issue ? seedComments(issue) : []);
    setDraft("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issue?.id]);

  if (!issue) {
    return (
      <Blankslate>
        <Blankslate.Visual><Search size={32} /></Blankslate.Visual>
        <Blankslate.Heading>이슈를 먼저 골라 주세요</Blankslate.Heading>
        <Blankslate.Description>"이슈" 탭에서 항목을 눌러 보세요.</Blankslate.Description>
        <Blankslate.PrimaryAction onClick={ => onNavigate?.("issues")}>이슈 목록으로</Blankslate.PrimaryAction>
      </Blankslate>
    );
  }

  // e.currentTarget.value를 동기 추출 후 전달. 늦게 읽으면 값을 잃음
  const addComment =  => {
    const text = draft.trim;
    if (text === "") return;
    setComments((prev) => [...prev, { id: `c-${Date.now}`, author: "김하늘", text, timeLabel: "방금" }]);
    setDraft("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Breadcrumbs로 usage2, usage3과 같은 드릴다운 위치 표시 */}
      <Breadcrumbs>
        <Breadcrumbs.Item href="#" onClick={(e: React.MouseEvent) => { e.preventDefault; onNavigate?.("issues"); }}>
          이슈
        </Breadcrumbs.Item>
        <Breadcrumbs.Item href="#" selected>#{issue.number}</Breadcrumbs.Item>
      </Breadcrumbs>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <StateLabel status={issue.state === "open" ? "issueOpened" : "issueClosed"} />
          <span style={{ fontWeight: 600, fontSize: "18px", color: "var(--fgColor-default)" }}>{issue.title}</span>
        </div>
        <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>
          #{issue.number} · {issue.openedLabel} · {issue.author}
        </span>
      </div>

      {issue.labels.length > 0 && (
        <LabelGroup visibleChildCount="auto">
          {issue.labels.map((l) => (
            <Label key={l.text} style={{ backgroundColor: l.color, color: "#fff", borderColor: "transparent" }}>
              {l.text}
            </Label>
          ))}
        </LabelGroup>
      )}

      <div style={{ display: "flex", gap: "10px", padding: "14px", border: "1px solid var(--borderColor-default)", borderRadius: "6px" }}>
        <Avatar src={`https://avatars.githubusercontent.com/u/${issue.number}?s=32`} size={24} alt={issue.author} />
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-default)" }}>{issue.author}</span>
          <span style={{ fontSize: "14px", color: "var(--fgColor-default)" }}>{issue.body}</span>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)", marginBottom: "8px" }}>
          <MessageSquare size={14} /> 댓글 {comments.length}개
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {comments.map((c) => (
            <div key={c.id} style={{ display: "flex", gap: "10px" }}>
              <Avatar src={`https://avatars.githubusercontent.com/u/${c.id.length}?s=32`} size={20} alt={c.author} />
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-default)" }}>
                  {c.author} <span style={{ fontWeight: 400, color: "var(--fgColor-muted)" }}>· {c.timeLabel}</span>
                </span>
                <span style={{ fontSize: "13px", color: "var(--fgColor-default)" }}>{c.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 댓글 작성 영역. 제출 시 로컬 state로 위 목록에 즉시 반영 */}
      <FormControl>
        <FormControl.Label>댓글 남기기</FormControl.Label>
        <Textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={3} block resize="vertical" placeholder="의견을 남겨보세요" />
      </FormControl>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="primary" size="small" disabled={draft.trim === ""} onClick={addComment}>
          댓글 등록
        </Button>
      </div>
    </div>
  );
}
