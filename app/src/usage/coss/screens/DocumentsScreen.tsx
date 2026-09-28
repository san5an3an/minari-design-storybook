import * as React from "react";
import {
  ArrowDownRight, ArrowUpRight, Eye, FileText, LayoutGrid, MoreHorizontal, Pencil, Plus,
  Rows3, Search, Star, Tag, Trash2, TrendingUp, Users2,
} from "lucide-react";
import { AlertDialog, AlertDialogClose, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogPopup, AlertDialogTitle } from "../../../bases/coss-ui/alert-dialog";
import { Avatar, AvatarFallback } from "../../../bases/coss-ui/avatar";
import { Badge } from "../../../bases/coss-ui/badge";
import { Button } from "../../../bases/coss-ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "../../../bases/coss-ui/card";
import { Checkbox } from "../../../bases/coss-ui/checkbox";
import { CheckboxGroup } from "../../../bases/coss-ui/checkbox-group";
import { ContextMenu, ContextMenuItem, ContextMenuPopup, ContextMenuSeparator, ContextMenuTrigger } from "../../../bases/coss-ui/context-menu";
import { Dialog, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogPanel, DialogPopup, DialogTitle, DialogTrigger } from "../../../bases/coss-ui/dialog";
import { Field, FieldLabel } from "../../../bases/coss-ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../../bases/coss-ui/input-group";
import { Input } from "../../../bases/coss-ui/input";
import { Menu, MenuItem, MenuPopup, MenuSeparator, MenuTrigger } from "../../../bases/coss-ui/menu";
import { Popover, PopoverPopup, PopoverTitle, PopoverTrigger } from "../../../bases/coss-ui/popover";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "../../../bases/coss-ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../bases/coss-ui/table";
import { Textarea } from "../../../bases/coss-ui/textarea";
import { toastManager } from "../../../bases/coss-ui/toast";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../../../bases/coss-ui/pagination";
import type { DocItem, DocSpace, DocStatus } from "../data";
import { SPACE_LIST, STATS_BASELINE, TAG_OPTIONS } from "../data";
import type { ScreenProps } from "../screens";

const PAGE_SIZE = 5;

function StatusBadge({ status }: { status: DocStatus }) {
  if (status === "게시됨") {
    return (
      <Badge variant="outline" style={{ background: "var(--semantic-bg-success-subtle)", color: "var(--semantic-fg-on-success-subtle)", borderColor: "transparent" }}>
        게시됨
      </Badge>
    );
  }
  if (status === "초안") {
    return (
      <Badge variant="outline" style={{ background: "var(--semantic-bg-warning-subtle)", color: "var(--semantic-fg-on-warning-subtle)", borderColor: "transparent" }}>
        초안
      </Badge>
    );
  }
  return <Badge variant="secondary">보관</Badge>;
}

function FavoriteButton({ active, onToggle }: { active: boolean; onToggle:  => void }) {
  return (
    <button
      aria-label={active ? "즐겨찾기 해제" : "즐겨찾기 추가"}
      onClick={(e) => { e.stopPropagation; onToggle; }}
      style={{
        background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex", flexShrink: 0,
        color: active ? "var(--semantic-fg-warning-default)" : "var(--semantic-fg-neutral-subtlest)",
      }}
      type="button"
    >
      <Star size={14} style={active ? { fill: "currentColor" } : undefined} />
    </button>
  );
}

interface StatCardProps { icon: React.ReactNode; label: string; value: string; delta: number; tone: "brand" | "success" | "warning" | "neutral"; }

function StatCard({ icon, label, value, delta, tone }: StatCardProps) {
  const up = delta >= 0;
  return (
    <Card style={{ padding: "0.875rem", display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: 0 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          aria-hidden
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", width: "2rem", height: "2rem",
            borderRadius: "var(--semantic-radius-control)",
            background: `var(--semantic-bg-${tone}-subtle)`,
            color: `var(--semantic-fg-${tone}-default)`,
          }}
        >
          {icon}
        </span>
        <span
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.0625rem", fontSize: "var(--semantic-text-caption)",
            color: up ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-danger-default)",
          }}
        >
          {up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {Math.abs(delta).toLocaleString("ko-KR")}
        </span>
      </div>
      <div>
        <div style={{ fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.1 }}>{value}</div>
        <div style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>{label}</div>
      </div>
    </Card>
  );
}

// 상태 분포 도넛. recharts 없이 순수 CSS conic-gradient로 렌더링
function StatusDonut({ docs }: { docs: DocItem[] }) {
  const total = docs.length || 1;
  const pub = docs.filter((d) => d.status === "게시됨").length;
  const draft = docs.filter((d) => d.status === "초안").length;
  const archived = total - pub - draft;
  const pubDeg = (pub / total) * 360;
  const draftDeg = (draft / total) * 360;
  return (
    <Card style={{ padding: "0.875rem", display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center", minWidth: 0 }}>
      <div style={{ position: "relative", width: "5rem", height: "5rem", flexShrink: 0 }} aria-hidden>
        <div
          style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: `conic-gradient(var(--semantic-bg-brand-default) 0deg ${pubDeg}deg, var(--semantic-bg-warning-default) ${pubDeg}deg ${pubDeg + draftDeg}deg, var(--semantic-bg-neutral-subtle) ${pubDeg + draftDeg}deg 360deg)`,
          }}
        />
        <div
          style={{
            position: "absolute", inset: "0.75rem", borderRadius: "50%", background: "var(--card)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9375rem", fontWeight: 700,
          }}
        >
          {docs.length}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", minWidth: 0 }}>
        <CardTitle style={{ fontSize: "var(--semantic-text-body-sm)", marginBottom: "0.125rem" }}>상태 분포</CardTitle>
        <LegendRow color="var(--semantic-bg-brand-default)" label="게시됨" count={pub} />
        <LegendRow color="var(--semantic-bg-warning-default)" label="초안" count={draft} />
        <LegendRow color="var(--semantic-bg-neutral-subtle)" label="보관" count={archived} />
      </div>
    </Card>
  );
}

function LegendRow({ color, label, count }: { color: string; label: string; count: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "var(--semantic-text-caption)" }}>
      <span aria-hidden style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: color, flexShrink: 0 }} />
      <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{label}</span>
      <span style={{ marginInlineStart: "auto", fontWeight: 600 }}>{count}</span>
    </div>
  );
}

// 인기 태그 상위 5개를 가로 막대로 표시
function TopTagsCard({ docs }: { docs: DocItem[] }) {
  const counts = new Map<string, number>;
  for (const d of docs) for (const t of d.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  const top = Array.from(counts.entries).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const max = Math.max(...top.map(([, c]) => c), 1);
  return (
    <Card style={{ padding: "0.875rem", display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: 0, flex: 1 }}>
      <CardTitle style={{ fontSize: "var(--semantic-text-body-sm)" }}>인기 태그 Top 5</CardTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
        {top.map(([tag, count]) => (
          <div key={tag} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: "5rem", flexShrink: 0, fontSize: "var(--semantic-text-caption)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{tag}</span>
            <div style={{ flex: 1, height: "0.5rem", borderRadius: "var(--semantic-radius-full, 999px)", background: "var(--semantic-bg-neutral-subtle)", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${Math.max(8, (count / max) * 100)}%`, background: "var(--semantic-bg-brand-default)" }} />
            </div>
            <span style={{ width: "1.25rem", textAlign: "right", fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)", flexShrink: 0 }}>{count}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

const STATUS_ORDER: DocStatus[] = ["게시됨", "초안", "보관"];

export function DocumentsScreen({
  docs, onNavigate, onSelect, onCreateDoc, onDeleteDoc, onToggleFavorite, members,
}: ScreenProps) {
  const [view, setView] = React.useState<"table" | "card">("table");
  const [statusFilter, setStatusFilter] = React.useState<DocStatus | "전체">("전체");
  const [spaceFilter, setSpaceFilter] = React.useState<DocSpace | "전체">("전체");
  const [sortKey, setSortKey] = React.useState<"updated" | "views" | "title">("updated");
  const [query, setQuery] = React.useState("");
  const [tagFilter, setTagFilter] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(1);
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set);
  const [pendingDelete, setPendingDelete] = React.useState<string[] | null>(null);
  const [newDocOpen, setNewDocOpen] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState("");
  const [newSpace, setNewSpace] = React.useState<DocSpace>("제품");
  const [newDesc, setNewDesc] = React.useState("");

  const q = query.trim.toLowerCase;
  const filtered = docs.filter((d) =>
    (statusFilter === "전체" || d.status === statusFilter)
    && (spaceFilter === "전체" || d.space === spaceFilter)
    && (tagFilter.length === 0 || tagFilter.some((t) => d.tags.includes(t)))
    && (q === "" || d.title.toLowerCase.includes(q) || d.summary.toLowerCase.includes(q)));
  const sorted = [...filtered].sort((a, b) => {
    if (sortKey === "views") return b.views - a.views;
    if (sortKey === "title") return a.title.localeCompare(b.title, "ko");
    return a.updatedRank - b.updatedRank;
  });
  const pageCount = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const clampedPage = Math.min(page, pageCount);
  const startIdx = (clampedPage - 1) * PAGE_SIZE;
  const pageItems = sorted.slice(startIdx, startIdx + PAGE_SIZE);
  const pageIds = pageItems.map((d) => d.id);
  const allPageSelected = pageIds.length > 0 && pageIds.every((id) => selectedRows.has(id));

  function toggleRow(id: string) {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }
  function toggleAllPage {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (allPageSelected) pageIds.forEach((id) => next.delete(id));
      else pageIds.forEach((id) => next.add(id));
      return next;
    });
  }
  function openDetail(id: string) { onSelect?.(id); onNavigate?.("detail"); }
  function confirmDelete {
    if (!pendingDelete) return;
    for (const id of pendingDelete) onDeleteDoc(id);
    setSelectedRows((prev) => {
      const next = new Set(prev);
      pendingDelete.forEach((id) => next.delete(id));
      return next;
    });
    toastManager.add({ title: pendingDelete.length > 1 ? `문서 ${pendingDelete.length}개를 삭제했어요` : "문서를 삭제했어요" });
    setPendingDelete(null);
  }
  function submitNewDoc {
    const title = newTitle.trim;
    if (title === "") return;
    onCreateDoc({ title, space: newSpace, description: newDesc.trim });
    setNewDocOpen(false);
    setNewTitle("");
    setNewDesc("");
    setNewSpace("제품");
    toastManager.add({ title: "문서를 만들었어요" });
  }

  const activeMembers = members.filter((m) => m.status === "활성").length;
  const totalViews = docs.reduce((s, d) => s + d.views, 0);
  const statusChips: Array<{ key: DocStatus | "전체"; label: string; count: number }> = [
    { key: "전체", label: "전체", count: docs.length },
    ...STATUS_ORDER.map((s) => ({ key: s, label: s, count: docs.filter((d) => d.status === s).length })),
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* ① 제목 + 부제 + 뷰 전환 + 주 액션 */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: "1.125rem", fontWeight: 700 }}>문서</div>
          <div style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-subtle)" }}>
            팀이 함께 쓰는 문서 {docs.length}건을 한곳에서 관리해요.
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
          <div style={{ display: "flex", border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-control)", overflow: "hidden" }}>
            <Button variant={view === "table" ? "secondary" : "ghost"} size="icon-sm" aria-label="표로 보기" onClick={ => setView("table")} style={{ borderRadius: 0 }}>
              <Rows3 size={14} />
            </Button>
            <Button variant={view === "card" ? "secondary" : "ghost"} size="icon-sm" aria-label="카드로 보기" onClick={ => setView("card")} style={{ borderRadius: 0 }}>
              <LayoutGrid size={14} />
            </Button>
          </div>
          <Dialog open={newDocOpen} onOpenChange={setNewDocOpen}>
            <DialogTrigger render={<Button size="sm"><Plus size={14} />새 문서</Button>} />
            <DialogPopup>
              <DialogHeader>
                <DialogTitle>새 문서 만들기</DialogTitle>
                <DialogDescription>제목과 스페이스를 정하면 바로 빈 문서가 생성돼요.</DialogDescription>
              </DialogHeader>
              <DialogPanel style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Field>
                  <FieldLabel>제목</FieldLabel>
                  <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="예: Q4 마케팅 캠페인 기획" />
                </Field>
                <Field>
                  <FieldLabel>스페이스</FieldLabel>
                  <Select value={newSpace} onValueChange={(v: unknown) => setNewSpace(v as DocSpace)}>
                    <SelectTrigger><SelectValue placeholder="스페이스 선택" /></SelectTrigger>
                    <SelectPopup>
                      {SPACE_LIST.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectPopup>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel>간단한 설명</FieldLabel>
                  <Textarea value={newDesc} onChange={(e) => setNewDesc(e.target.value)} placeholder="이 문서가 다룰 내용을 한 줄로 적어주세요" size="sm" />
                </Field>
              </DialogPanel>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">취소</Button>} />
                <Button disabled={newTitle.trim === ""} onClick={submitNewDoc}>만들기</Button>
              </DialogFooter>
            </DialogPopup>
          </Dialog>
        </div>
      </div>

      {/* ② 건수 배지, 필터칩 행 + 검색, 태그, 정렬 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
          {statusChips.map((c) => (
            <Button key={c.key} size="sm" variant={statusFilter === c.key ? "secondary" : "ghost"} onClick={ => { setStatusFilter(c.key); setPage(1); }}>
              {c.label}
              <Badge size="sm" variant="outline">{c.count}</Badge>
            </Button>
          ))}
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <InputGroup style={{ width: "12.5rem" }}>
            <InputGroupAddon align="inline-start"><Search size={14} /></InputGroupAddon>
            <InputGroupInput value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="문서 제목·요약 검색" />
          </InputGroup>
          <Select value={spaceFilter} onValueChange={(v: unknown) => { setSpaceFilter(v as DocSpace | "전체"); setPage(1); }}>
            <SelectTrigger size="sm" style={{ width: "8rem" }}><SelectValue placeholder="스페이스" /></SelectTrigger>
            <SelectPopup>
              <SelectItem value="전체">전체 스페이스</SelectItem>
              {SPACE_LIST.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectPopup>
          </Select>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" size="sm"><Tag size={14} />태그{tagFilter.length > 0 ? ` ${tagFilter.length}` : ""}</Button>} />
            <PopoverPopup align="start" style={{ width: "13rem" }}>
              <PopoverTitle>태그로 거르기</PopoverTitle>
              <CheckboxGroup value={tagFilter} onValueChange={(v: unknown) => { setTagFilter(v as string[]); setPage(1); }} style={{ marginTop: "0.625rem" }}>
                {TAG_OPTIONS.slice(0, 6).map((tag) => (
                  <label key={tag} style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "var(--semantic-text-body-sm)", cursor: "pointer" }}>
                    <Checkbox value={tag} />
                    {tag}
                  </label>
                ))}
              </CheckboxGroup>
            </PopoverPopup>
          </Popover>
          <Select value={sortKey} onValueChange={(v: unknown) => setSortKey(v as "updated" | "views" | "title")}>
            <SelectTrigger size="sm" style={{ width: "8.5rem" }}><SelectValue placeholder="정렬" /></SelectTrigger>
            <SelectPopup>
              <SelectItem value="updated">최근 업데이트순</SelectItem>
              <SelectItem value="views">조회수순</SelectItem>
              <SelectItem value="title">이름순</SelectItem>
            </SelectPopup>
          </Select>
        </div>
      </div>

      {/* ③ 통계카드 4개 + 보조 위젯 도넛, 인기 태그 */}
      <div className="coss-stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.625rem" }}>
        <StatCard icon={<FileText size={16} />} label="전체 문서" value={String(docs.length)} delta={docs.length - STATS_BASELINE.totalDocsLastWeek} tone="brand" />
        <StatCard icon={<TrendingUp size={16} />} label="이번 주 업데이트" value={String(STATS_BASELINE.updatesThisWeek)} delta={STATS_BASELINE.updatesThisWeek - STATS_BASELINE.updatesLastWeek} tone="success" />
        <StatCard icon={<Users2 size={16} />} label="활성 멤버" value={String(activeMembers)} delta={activeMembers - STATS_BASELINE.activeMembersLastWeek} tone="neutral" />
        <StatCard icon={<Eye size={16} />} label="총 조회수" value={totalViews.toLocaleString("ko-KR")} delta={totalViews - STATS_BASELINE.totalViewsLastWeek} tone="warning" />
      </div>
      <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 14rem", minWidth: "14rem" }}><StatusDonut docs={docs} /></div>
        <div style={{ flex: "1 1 14rem", minWidth: "14rem" }}><TopTagsCard docs={docs} /></div>
      </div>

      {/* ④ 선택 삭제 바 + 표/카드 */}
      {selectedRows.size > 0 && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 0.75rem", background: "var(--semantic-bg-brand-subtle)", borderRadius: "var(--semantic-radius-control)" }}>
          <span style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-on-brand-subtle)" }}>{selectedRows.size}개 선택됨</span>
          <Button size="sm" variant="destructive" onClick={ => setPendingDelete(Array.from(selectedRows))}>
            <Trash2 size={14} />선택 삭제
          </Button>
        </div>
      )}

      {view === "table" ? (
        <Card style={{ overflow: "hidden" }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead style={{ width: "2rem" }}><Checkbox checked={allPageSelected} onCheckedChange={toggleAllPage} aria-label="이 페이지 전체 선택" /></TableHead>
                <TableHead>문서</TableHead>
                <TableHead>담당자</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>조회수</TableHead>
                <TableHead>업데이트</TableHead>
                <TableHead style={{ width: "2rem" }} />
              </TableRow>
            </TableHeader>
            <TableBody>
              {pageItems.map((doc) => (
                <TableRow key={doc.id} onClick={ => openDetail(doc.id)} style={{ cursor: "pointer" }}>
                  <TableCell onClick={(e) => e.stopPropagation}>
                    <Checkbox checked={selectedRows.has(doc.id)} onCheckedChange={ => toggleRow(doc.id)} aria-label={`${doc.title} 선택`} />
                  </TableCell>
                  <TableCell>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", minWidth: 0, maxWidth: "16rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                        <FavoriteButton active={doc.favorite} onToggle={ => onToggleFavorite(doc.id)} />
                        <span style={{ fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{doc.title}</span>
                      </div>
                      <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
                        <Badge variant="outline" size="sm">{doc.space}</Badge>
                        {doc.tags.slice(0, 2).map((t) => <Badge key={t} variant="secondary" size="sm">{t}</Badge>)}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                      <Avatar style={{ width: "1.5rem", height: "1.5rem" }}>
                        <AvatarFallback style={{ fontSize: "0.625rem" }}>{doc.ownerInitial}</AvatarFallback>
                      </Avatar>
                      <span style={{ fontSize: "var(--semantic-text-body-sm)", whiteSpace: "nowrap" }}>{doc.ownerName}</span>
                    </div>
                  </TableCell>
                  <TableCell><StatusBadge status={doc.status} /></TableCell>
                  <TableCell>{doc.views.toLocaleString("ko-KR")}</TableCell>
                  <TableCell style={{ color: "var(--semantic-fg-neutral-subtle)", whiteSpace: "nowrap" }}>{doc.updatedLabel}</TableCell>
                  <TableCell onClick={(e) => e.stopPropagation}>
                    <Menu>
                      <MenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="더 보기"><MoreHorizontal size={14} /></Button>} />
                      <MenuPopup align="end">
                        <MenuItem onClick={ => openDetail(doc.id)}><Pencil size={14} />열기</MenuItem>
                        <MenuItem onClick={ => onToggleFavorite(doc.id)}><Star size={14} />{doc.favorite ? "즐겨찾기 해제" : "즐겨찾기"}</MenuItem>
                        <MenuSeparator />
                        <MenuItem variant="destructive" onClick={ => setPendingDelete([doc.id])}><Trash2 size={14} />삭제</MenuItem>
                      </MenuPopup>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(12.5rem, 1fr))", gap: "0.75rem" }}>
          {pageItems.map((doc) => (
            <ContextMenu key={doc.id}>
              <ContextMenuTrigger className="contents" onClick={ => openDetail(doc.id)}>
                <Card style={{ cursor: "pointer", overflow: "hidden" }}>
                  {doc.cover ? (
                    <div aria-hidden style={{ height: "5rem", backgroundImage: `url(${doc.cover})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  ) : null}
                  <CardHeader style={{ paddingBottom: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
                      <CardTitle style={{ fontSize: "var(--semantic-text-body-sm)", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{doc.title}</CardTitle>
                      <FavoriteButton active={doc.favorite} onToggle={ => onToggleFavorite(doc.id)} />
                    </div>
                    <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                      <Badge variant="outline" size="sm">{doc.space}</Badge>
                      <StatusBadge status={doc.status} />
                    </div>
                  </CardHeader>
                  <CardFooter style={{ paddingTop: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                      <Avatar style={{ width: "1.25rem", height: "1.25rem" }}><AvatarFallback style={{ fontSize: "0.5625rem" }}>{doc.ownerInitial}</AvatarFallback></Avatar>
                      <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>{doc.updatedLabel}</span>
                    </div>
                    <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)", display: "inline-flex", alignItems: "center", gap: "0.125rem" }}>
                      <Eye size={12} />{doc.views}
                    </span>
                  </CardFooter>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuPopup>
                <ContextMenuItem onClick={ => openDetail(doc.id)}><Pencil size={14} />열기</ContextMenuItem>
                <ContextMenuItem onClick={ => onToggleFavorite(doc.id)}><Star size={14} />{doc.favorite ? "즐겨찾기 해제" : "즐겨찾기"}</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive" onClick={ => setPendingDelete([doc.id])}><Trash2 size={14} />삭제</ContextMenuItem>
              </ContextMenuPopup>
            </ContextMenu>
          ))}
        </div>
      )}

      {/* ⑤ 페이지네이션 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
        <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>
          {sorted.length === 0 ? "검색 결과가 없어요" : `${startIdx + 1}–${Math.min(startIdx + PAGE_SIZE, sorted.length)} / ${sorted.length}`}
        </span>
        <Pagination style={{ marginInline: 0, width: "auto" }}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={(e) => { e.preventDefault; setPage((p) => Math.max(1, p - 1)); }} style={clampedPage <= 1 ? { pointerEvents: "none", opacity: 0.5 } : undefined} />
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <PaginationItem key={n}>
                <PaginationLink href="#" isActive={n === clampedPage} onClick={(e) => { e.preventDefault; setPage(n); }}>{n}</PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" onClick={(e) => { e.preventDefault; setPage((p) => Math.min(pageCount, p + 1)); }} style={clampedPage >= pageCount ? { pointerEvents: "none", opacity: 0.5 } : undefined} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <AlertDialog open={pendingDelete !== null} onOpenChange={(o: boolean) => { if (!o) setPendingDelete(null); }}>
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>{pendingDelete && pendingDelete.length > 1 ? `문서 ${pendingDelete.length}개를 삭제할까요?` : "문서를 삭제할까요?"}</AlertDialogTitle>
            <AlertDialogDescription>이 작업은 되돌릴 수 없어요.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="outline">취소</Button>} />
            <AlertDialogClose render={<Button variant="destructive" onClick={confirmDelete}>삭제</Button>} />
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </div>
  );
}
