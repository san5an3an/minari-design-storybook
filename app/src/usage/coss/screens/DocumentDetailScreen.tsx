import * as React from "react";
import {
  ArrowLeft, ArrowRight, Bold, Check, ChevronRight, Clock, Copy, Italic, Link2,
  List as ListIcon, MessageSquare, MoreHorizontal, Pencil, RefreshCw, Settings2, Share2,
  Star, Trash2, Underline,
} from "lucide-react";
import { AlertDialog, AlertDialogClose, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogPopup, AlertDialogTitle } from "../../../bases/coss-ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "../../../bases/coss-ui/alert";
import { Avatar, AvatarFallback } from "../../../bases/coss-ui/avatar";
import { Badge } from "../../../bases/coss-ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../../bases/coss-ui/breadcrumb";
import { Button } from "../../../bases/coss-ui/button";
import { Card, CardTitle } from "../../../bases/coss-ui/card";
import { Checkbox } from "../../../bases/coss-ui/checkbox";
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "../../../bases/coss-ui/collapsible";
import { Dialog, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogPanel, DialogPopup, DialogTitle } from "../../../bases/coss-ui/dialog";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../../../bases/coss-ui/empty";
import { Field, FieldLabel } from "../../../bases/coss-ui/field";
import { Fieldset, FieldsetLegend } from "../../../bases/coss-ui/fieldset";
import { Frame, FrameDescription, FrameHeader, FramePanel, FrameTitle } from "../../../bases/coss-ui/frame";
import { Group, GroupText } from "../../../bases/coss-ui/group";
import { Input } from "../../../bases/coss-ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../../bases/coss-ui/input-group";
import { Menu, MenuItem, MenuPopup, MenuSeparator, MenuTrigger } from "../../../bases/coss-ui/menu";
import { NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput } from "../../../bases/coss-ui/number-field";
import { Popover, PopoverPopup, PopoverTitle, PopoverTrigger } from "../../../bases/coss-ui/popover";
import { PreviewCard, PreviewCardPopup, PreviewCardTrigger } from "../../../bases/coss-ui/preview-card";
import { Progress } from "../../../bases/coss-ui/progress";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "../../../bases/coss-ui/select";
import { Separator } from "../../../bases/coss-ui/separator";
import { Skeleton } from "../../../bases/coss-ui/skeleton";
import { Slider } from "../../../bases/coss-ui/slider";
import { Tabs, TabsList, TabsPanel, TabsTab } from "../../../bases/coss-ui/tabs";
import { Textarea } from "../../../bases/coss-ui/textarea";
import { toastManager } from "../../../bases/coss-ui/toast";
import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator } from "../../../bases/coss-ui/toolbar";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../../../bases/coss-ui/tooltip";
import type { CommentItem, DocItem, DocStatus } from "../data";
import type { ScreenProps } from "../screens";

function StatusBadge({ status }: { status: DocStatus }) {
  if (status === "게시됨") {
    return <Badge variant="outline" style={{ background: "var(--semantic-bg-success-subtle)", color: "var(--semantic-fg-on-success-subtle)", borderColor: "transparent" }}>게시됨</Badge>;
  }
  if (status === "초안") {
    return <Badge variant="outline" style={{ background: "var(--semantic-bg-warning-subtle)", color: "var(--semantic-fg-on-warning-subtle)", borderColor: "transparent" }}>초안</Badge>;
  }
  return <Badge variant="secondary">보관</Badge>;
}

function FavoriteButton({ active, onToggle }: { active: boolean; onToggle:  => void }) {
  return (
    <button
      aria-label={active ? "즐겨찾기 해제" : "즐겨찾기 추가"}
      onClick={onToggle}
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex", flexShrink: 0, color: active ? "var(--semantic-fg-warning-default)" : "var(--semantic-fg-neutral-subtlest)" }}
      type="button"
    >
      <Star size={16} style={active ? { fill: "currentColor" } : undefined} />
    </button>
  );
}

function PropRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "var(--semantic-text-body-sm)" }}>
      <span style={{ width: "3.75rem", flexShrink: 0, color: "var(--semantic-fg-neutral-subtle)" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", minWidth: 0, flexWrap: "wrap" }}>{children}</div>
    </div>
  );
}

function CommentRow({ c }: { c: CommentItem }) {
  return (
    <div style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
      <Avatar style={{ width: "1.75rem", height: "1.75rem", flexShrink: 0 }}>
        <AvatarFallback style={{ fontSize: "0.6875rem" }}>{c.authorInitial}</AvatarFallback>
      </Avatar>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem", minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
          <span style={{ fontWeight: 600, fontSize: "var(--semantic-text-body-sm)" }}>{c.authorName}</span>
          <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>{c.timeLabel}</span>
        </div>
        <span style={{ fontSize: "var(--semantic-text-body-sm)" }}>{c.text}</span>
      </div>
    </div>
  );
}

export function DocumentDetailScreen({
  docs, selectedId, onSelect, onNavigate, onDeleteDoc, onToggleFavorite, onRenameDoc, onChangeStatus,
  onToggleChecklistItem, onAddComment, comments, members,
}: ScreenProps) {
  const [tab, setTab] = React.useState<"body" | "comments" | "history">("body");
  const [shareOpen, setShareOpen] = React.useState(false);
  const [renameOpen, setRenameOpen] = React.useState(false);
  const [renameValue, setRenameValue] = React.useState("");
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);
  const [bodyWidth, setBodyWidth] = React.useState(38);
  const [lineHeight, setLineHeight] = React.useState(1.6);
  const [commentDraft, setCommentDraft] = React.useState("");
  const [olderOpen, setOlderOpen] = React.useState(false);
  const [historyRefreshing, setHistoryRefreshing] = React.useState(false);
  const mountedRef = React.useRef(true);
  React.useEffect( =>  => { mountedRef.current = false; }, []);

  if (docs.length === 0) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon"><MessageSquare /></EmptyMedia>
          <EmptyTitle>문서가 없어요</EmptyTitle>
          <EmptyDescription>문서 목록에서 새 문서를 만들어 보세요.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  const doc = docs.find((d) => d.id === selectedId) ?? docs[0];
  const index = docs.findIndex((d) => d.id === doc.id);
  const docComments = comments.filter((c) => c.docId === doc.id);
  const visibleComments = docComments.slice(0, 2);
  const hiddenComments = docComments.slice(2);
  const doneCount = doc.checklist.filter((c) => c.done).length;
  const relatedDocs = doc.relatedIds
    .map((id) => docs.find((d) => d.id === id))
    .filter((d): d is DocItem => d !== undefined);

  function refreshHistory {
    setHistoryRefreshing(true);
    window.setTimeout( => { if (mountedRef.current) setHistoryRefreshing(false); }, 650);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink onClick={ => onNavigate?.("documents")} style={{ cursor: "pointer" }}>문서</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator><ChevronRight size={14} /></BreadcrumbSeparator>
          <BreadcrumbItem><BreadcrumbPage>{doc.space}</BreadcrumbPage></BreadcrumbItem>
          <BreadcrumbSeparator><ChevronRight size={14} /></BreadcrumbSeparator>
          <BreadcrumbItem><BreadcrumbPage style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{doc.title}</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* 헤더: 즐겨찾기, 제목, 상태, 공유, 더보기 메뉴 */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
          <FavoriteButton active={doc.favorite} onToggle={ => onToggleFavorite(doc.id)} />
          <h1 style={{ fontSize: "1.1875rem", fontWeight: 700, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "18rem" }}>{doc.title}</h1>
          <StatusBadge status={doc.status} />
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
          <Button variant="outline" size="sm" onClick={ => setShareOpen(true)}><Share2 size={14} />공유</Button>
          <Menu>
            <MenuTrigger render={<Button variant="ghost" size="icon" aria-label="더 보기"><MoreHorizontal size={16} /></Button>} />
            <MenuPopup align="end">
              <MenuItem onClick={ => { setRenameValue(doc.title); setRenameOpen(true); }}><Pencil size={14} />이름 변경</MenuItem>
              <MenuItem onClick={ => setShareOpen(true)}><Share2 size={14} />공유</MenuItem>
              <MenuSeparator />
              <MenuItem variant="destructive" onClick={ => setConfirmDeleteOpen(true)}><Trash2 size={14} />삭제</MenuItem>
            </MenuPopup>
          </Menu>
        </div>
      </div>

      {/* 담당자, 갱신시각, 댓글, 체크리스트, 리뷰 진행바 표시 */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-subtle)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
          <Avatar style={{ width: "1.375rem", height: "1.375rem" }}><AvatarFallback style={{ fontSize: "0.625rem" }}>{doc.ownerInitial}</AvatarFallback></Avatar>
          {doc.ownerName}
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}><Clock size={13} />{doc.updatedLabel}</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}><MessageSquare size={13} />댓글 {docComments.length}개</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}><Check size={13} />체크리스트 {doneCount}/{doc.checklist.length}</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", minWidth: "8rem" }}>
          <span style={{ whiteSpace: "nowrap" }}>리뷰 {doc.reviewApproved}/{doc.reviewTotal}</span>
          <Progress value={(doc.reviewApproved / doc.reviewTotal) * 100} style={{ width: "4.5rem" }} />
        </span>
      </div>

      {/* 편집 도구모음: 서식 툴바, 글자크기, 상태 변경, 보기 설정 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", flexWrap: "wrap" }}>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarButton aria-label="굵게"><Bold size={14} /></ToolbarButton>
            <ToolbarButton aria-label="기울임"><Italic size={14} /></ToolbarButton>
            <ToolbarButton aria-label="밑줄"><Underline size={14} /></ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarGroup>
            <ToolbarButton aria-label="목록"><ListIcon size={14} /></ToolbarButton>
            <ToolbarButton aria-label="링크 삽입"><Link2 size={14} /></ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <NumberField defaultValue={15} min={12} max={22} style={{ width: "5rem" }}>
            <NumberFieldGroup>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldGroup>
          </NumberField>
        </Toolbar>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Select value={doc.status} onValueChange={(v: unknown) => onChangeStatus(doc.id, v as DocStatus)}>
            <SelectTrigger size="sm" style={{ width: "6rem" }}><SelectValue /></SelectTrigger>
            <SelectPopup>
              <SelectItem value="게시됨">게시됨</SelectItem>
              <SelectItem value="초안">초안</SelectItem>
              <SelectItem value="보관">보관</SelectItem>
            </SelectPopup>
          </Select>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" size="icon-sm" aria-label="보기 설정"><Settings2 size={14} /></Button>} />
            <PopoverPopup align="end" style={{ width: "13rem" }}>
              <PopoverTitle>보기 설정</PopoverTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginTop: "0.625rem" }}>
                <div>
                  <div style={{ fontSize: "var(--semantic-text-caption)", marginBottom: "0.375rem" }}>본문 너비</div>
                  <Slider value={bodyWidth} min={28} max={48} onValueChange={(v: unknown) => setBodyWidth(Array.isArray(v) ? (v as number[])[0] : (v as number))} />
                </div>
                <div>
                  <div style={{ fontSize: "var(--semantic-text-caption)", marginBottom: "0.375rem" }}>줄 간격</div>
                  <Slider value={Math.round(lineHeight * 10)} min={12} max={20} onValueChange={(v: unknown) => setLineHeight((Array.isArray(v) ? (v as number[])[0] : (v as number)) / 10)} />
                </div>
              </div>
            </PopoverPopup>
          </Popover>
        </div>
      </div>

      {/* 본문 2단 구성. 좌측 탭 본문/댓글/기록, 우측 레일 속성/관련문서 */}
      <div className="coss-split">
        <div style={{ flex: 1, minWidth: 0 }}>
          <Tabs value={tab} onValueChange={(v: unknown) => setTab(v as "body" | "comments" | "history")}>
            <TabsList>
              <TabsTab value="body">본문</TabsTab>
              <TabsTab value="comments">댓글</TabsTab>
              <TabsTab value="history">기록</TabsTab>
            </TabsList>
            <TabsPanel value="body">
              <div style={{ maxWidth: `${bodyWidth}rem`, fontSize: "var(--semantic-text-body-md)", lineHeight, marginTop: "0.875rem" }}>
                {doc.status === "초안" && (
                  <Alert style={{ marginBottom: "0.875rem" }}>
                    <AlertTitle>아직 초안이에요</AlertTitle>
                    <AlertDescription>리뷰 {doc.reviewApproved}/{doc.reviewTotal}건이 승인되면 게시로 전환할 수 있어요.</AlertDescription>
                  </Alert>
                )}
                {doc.bodyParagraphs.map((p, i) => <p key={i} style={{ margin: "0 0 0.875rem" }}>{p}</p>)}
                <Card style={{ padding: "0.875rem" }}>
                  <CardTitle style={{ fontSize: "var(--semantic-text-body-sm)", marginBottom: "0.5rem" }}>체크리스트</CardTitle>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {doc.checklist.map((item) => (
                      <label
                        key={item.id}
                        style={{
                          display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "var(--semantic-text-body-sm)",
                          color: item.done ? "var(--semantic-fg-neutral-subtle)" : undefined,
                          textDecoration: item.done ? "line-through" : undefined,
                        }}
                      >
                        <Checkbox checked={item.done} onCheckedChange={ => onToggleChecklistItem(doc.id, item.id)} />
                        {item.label}
                      </label>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsPanel>
            <TabsPanel value="comments">
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.875rem" }}>
                {docComments.length === 0 ? (
                  <Empty style={{ padding: "2rem 1rem" }}>
                    <EmptyHeader>
                      <EmptyMedia variant="icon"><MessageSquare /></EmptyMedia>
                      <EmptyTitle>아직 댓글이 없어요</EmptyTitle>
                      <EmptyDescription>가장 먼저 의견을 남겨보세요.</EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                ) : (
                  <>
                    {visibleComments.map((c) => <CommentRow key={c.id} c={c} />)}
                    {hiddenComments.length > 0 && (
                      <Collapsible open={olderOpen} onOpenChange={setOlderOpen}>
                        <CollapsibleTrigger
                          style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-brand-default)", cursor: "pointer", background: "none", border: "none", padding: 0, textAlign: "left" }}
                        >
                          {olderOpen ? "이전 댓글 숨기기" : `이전 댓글 ${hiddenComments.length}개 더보기`}
                        </CollapsibleTrigger>
                        <CollapsiblePanel>
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.75rem" }}>
                            {hiddenComments.map((c) => <CommentRow key={c.id} c={c} />)}
                          </div>
                        </CollapsiblePanel>
                      </Collapsible>
                    )}
                  </>
                )}
                <Separator />
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <Avatar style={{ width: "1.5rem", height: "1.5rem", flexShrink: 0 }}><AvatarFallback style={{ fontSize: "0.625rem" }}>나</AvatarFallback></Avatar>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <Textarea value={commentDraft} onChange={(e) => setCommentDraft(e.target.value)} placeholder="댓글을 남겨보세요" size="sm" />
                    <Button
                      size="sm"
                      style={{ alignSelf: "flex-end" }}
                      disabled={commentDraft.trim === ""}
                      onClick={ => { onAddComment(doc.id, commentDraft.trim); setCommentDraft(""); toastManager.add({ title: "댓글을 남겼어요" }); }}
                    >
                      댓글 남기기
                    </Button>
                  </div>
                </div>
              </div>
            </TabsPanel>
            <TabsPanel value="history">
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.875rem" }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Tooltip>
                    <TooltipTrigger render={<Button variant="ghost" size="icon-sm" aria-label="새로고침" onClick={refreshHistory}><RefreshCw size={14} /></Button>} />
                    <TooltipPopup>새로고침</TooltipPopup>
                  </Tooltip>
                </div>
                {historyRefreshing ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <Skeleton style={{ height: "2.25rem" }} />
                    <Skeleton style={{ height: "2.25rem" }} />
                    <Skeleton style={{ height: "2.25rem" }} />
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    {doc.history.slice.reverse.map((h, i) => (
                      <div key={i} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                        <span aria-hidden style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "var(--semantic-bg-brand-default)", marginTop: "0.375rem", flexShrink: 0 }} />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontSize: "var(--semantic-text-body-sm)" }}><b>{h.who}</b>님이 {h.label}</span>
                          <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>{h.when}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsPanel>
          </Tabs>
        </div>

        <div className="coss-rail" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Card style={{ padding: "0.875rem" }}>
            <Fieldset>
              <FieldsetLegend style={{ fontSize: "var(--semantic-text-body-sm)", marginBottom: "0.625rem", display: "block" }}>속성</FieldsetLegend>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                <PropRow label="담당자">
                  <Avatar style={{ width: "1.25rem", height: "1.25rem" }}><AvatarFallback style={{ fontSize: "0.5625rem" }}>{doc.ownerInitial}</AvatarFallback></Avatar>
                  <span>{doc.ownerName}</span>
                </PropRow>
                <PropRow label="스페이스"><Badge variant="outline" size="sm">{doc.space}</Badge></PropRow>
                <PropRow label="태그">{doc.tags.map((t) => <Badge key={t} variant="secondary" size="sm">{t}</Badge>)}</PropRow>
                <PropRow label="조회수"><span>{doc.views.toLocaleString("ko-KR")}회</span></PropRow>
              </div>
            </Fieldset>
          </Card>

          {relatedDocs.length > 0 && (
            <Card style={{ padding: "0.875rem" }}>
              <CardTitle style={{ fontSize: "var(--semantic-text-body-sm)", marginBottom: "0.625rem" }}>관련 문서</CardTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {relatedDocs.map((rd) => (
                  <PreviewCard key={rd.id}>
                    <PreviewCardTrigger
                      render={(
                        <button
                          type="button"
                          onClick={ => onSelect?.(rd.id)}
                          style={{
                            display: "flex", flexDirection: "column", gap: "0.125rem", textAlign: "left", background: "none", border: "none",
                            cursor: "pointer", padding: "0.375rem 0", borderBottom: "var(--semantic-border-width-default) dashed var(--semantic-border-neutral-subtle)",
                          }}
                        >
                          <span style={{ fontSize: "var(--semantic-text-body-sm)", fontWeight: 600, color: "var(--semantic-fg-brand-default)" }}>{rd.title}</span>
                        </button>
                      )}
                    />
                    <PreviewCardPopup>
                      <Frame>
                        <FrameHeader><FrameTitle>{rd.title}</FrameTitle><FrameDescription>{rd.summary}</FrameDescription></FrameHeader>
                        <FramePanel style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>
                          {rd.updatedLabel} · 조회 {rd.views}회
                        </FramePanel>
                      </Frame>
                    </PreviewCardPopup>
                  </PreviewCard>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* 이전/다음 문서 내비게이션 */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}>
        <Group>
          <Button variant="outline" size="sm" disabled={index <= 0} onClick={ => onSelect?.(docs[index - 1].id)}><ArrowLeft size={14} />이전 문서</Button>
          <GroupText>{index + 1} / {docs.length}</GroupText>
          <Button variant="outline" size="sm" disabled={index >= docs.length - 1} onClick={ => onSelect?.(docs[index + 1].id)}>다음 문서<ArrowRight size={14} /></Button>
        </Group>
      </div>

      {/* 공유 다이얼로그 */}
      <Dialog open={shareOpen} onOpenChange={setShareOpen}>
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>“{doc.title}” 공유</DialogTitle>
            <DialogDescription>링크가 있는 팀 구성원은 누구나 볼 수 있어요.</DialogDescription>
          </DialogHeader>
          <DialogPanel style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Field>
              <FieldLabel>공유 링크</FieldLabel>
              <InputGroup>
                <InputGroupInput readOnly value={`https://notes.bloomstudio.im/d/${doc.id}`} />
                <InputGroupAddon align="inline-end">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={ => { void navigator.clipboard?.writeText(`https://notes.bloomstudio.im/d/${doc.id}`); toastManager.add({ title: "링크를 복사했어요" }); }}
                  >
                    <Copy size={13} />복사
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <div>
              <div style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)", marginBottom: "0.5rem" }}>접근 권한이 있는 구성원 {members.length}명</div>
              <div style={{ display: "flex" }}>
                {members.slice(0, 6).map((m) => (
                  <Avatar key={m.id} style={{ width: "1.75rem", height: "1.75rem", marginInlineStart: "-0.4rem", border: "var(--semantic-border-width-default) solid var(--card)" }}>
                    <AvatarFallback style={{ fontSize: "0.625rem" }}>{m.initial}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">닫기</Button>} />
          </DialogFooter>
        </DialogPopup>
      </Dialog>

      {/* 이름 변경 다이얼로그 */}
      <Dialog open={renameOpen} onOpenChange={setRenameOpen}>
        <DialogPopup>
          <DialogHeader><DialogTitle>문서 이름 변경</DialogTitle></DialogHeader>
          <DialogPanel>
            <Field><FieldLabel>제목</FieldLabel><Input value={renameValue} onChange={(e) => setRenameValue(e.target.value)} /></Field>
          </DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">취소</Button>} />
            <DialogClose
              render={(
                <Button
                  disabled={renameValue.trim === ""}
                  onClick={ => { onRenameDoc(doc.id, renameValue.trim); toastManager.add({ title: "이름을 변경했어요" }); }}
                >
                  저장
                </Button>
              )}
            />
          </DialogFooter>
        </DialogPopup>
      </Dialog>

      {/* 삭제 확인 */}
      <AlertDialog open={confirmDeleteOpen} onOpenChange={setConfirmDeleteOpen}>
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>문서를 삭제할까요?</AlertDialogTitle>
            <AlertDialogDescription>“{doc.title}” 문서가 영구적으로 삭제돼요.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="outline">취소</Button>} />
            <AlertDialogClose
              render={(
                <Button
                  variant="destructive"
                  onClick={ => { onDeleteDoc(doc.id); onNavigate?.("documents"); toastManager.add({ title: "문서를 삭제했어요" }); }}
                >
                  삭제
                </Button>
              )}
            />
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </div>
  );
}
