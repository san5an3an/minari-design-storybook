import * as React from "react";
import {
  Ban, CalendarClock, LayoutGrid, MoreHorizontal, PenSquare, Plus,
  Search, Share2, Sparkles, TableIcon, Target, Trash2, Users2,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../../../bases/coss-ui/avatar";
import { Badge } from "../../../bases/coss-ui/badge";
import { Button } from "../../../bases/coss-ui/button";
import { Card } from "../../../bases/coss-ui/card";
import { ContextMenu, ContextMenuItem, ContextMenuPopup, ContextMenuSeparator, ContextMenuTrigger } from "../../../bases/coss-ui/context-menu";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../../../bases/coss-ui/empty";
import { Input } from "../../../bases/coss-ui/input";
import { Menu, MenuItem, MenuPopup, MenuSeparator, MenuTrigger } from "../../../bases/coss-ui/menu";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../../../bases/coss-ui/pagination";
import { PreviewCard, PreviewCardPopup, PreviewCardTrigger } from "../../../bases/coss-ui/preview-card";
import { Progress, ProgressIndicator, ProgressTrack } from "../../../bases/coss-ui/progress";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "../../../bases/coss-ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../bases/coss-ui/table";
import { Tabs, TabsList, TabsTab } from "../../../bases/coss-ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "../../../bases/coss-ui/toggle-group";
import { responseCountOf, type Survey, type SurveyStatus } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_BADGE: Record<SurveyStatus, "default" | "outline" | "secondary"> = {
  진행중: "default", 마감: "outline", 초안: "secondary",
};

type SortKey = "default" | "responses" | "title";
type ViewMode = "table" | "card";
type StatusFilter = "all" | SurveyStatus;
const PAGE_SIZE = 8;

function StatCard({ icon: Icon, tone, label, value, caption }: {
  icon: React.ComponentType<{ size?: number }>; tone: "brand" | "success" | "warning" | "danger";
  label: string; value: string; caption: string;
}) {
  return (
    <Card className="gap-0 p-3.5">
      <div className="flex items-center justify-between">
        <span
          aria-hidden
          className="flex size-8 shrink-0 items-center justify-center rounded-lg"
          style={{ background: `var(--semantic-bg-${tone}-subtle)`, color: `var(--semantic-fg-on-${tone}-subtle)` }}
        >
          <Icon size={15} />
        </span>
      </div>
      <span className="mt-2 text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{label}</span>
      <span className="font-semibold tabular-nums" style={{ fontSize: "var(--semantic-text-heading-md)" }}>{value}</span>
      <span className="truncate text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{caption}</span>
    </Card>
  );
}

function OwnerHover({ survey }: { survey: Survey }) {
  return (
    <PreviewCard>
      <PreviewCardTrigger render={<span className="inline-flex min-w-0 items-center gap-2 cursor-default" />}>
        <Avatar className="size-6"><AvatarFallback className="text-[0.625rem]">{survey.owner.name[0]}</AvatarFallback></Avatar>
        <span className="truncate" style={{ fontSize: "var(--semantic-text-body-sm)" }}>{survey.owner.name}</span>
      </PreviewCardTrigger>
      <PreviewCardPopup>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9"><AvatarFallback>{survey.owner.name[0]}</AvatarFallback></Avatar>
          <div className="flex min-w-0 flex-col">
            <span className="font-medium truncate">{survey.owner.name}</span>
            <span className="text-muted-foreground truncate" style={{ fontSize: "var(--semantic-text-caption)" }}>{survey.owner.role}</span>
          </div>
        </div>
        <span className="mt-2 block text-muted-foreground truncate" style={{ fontSize: "var(--semantic-text-caption)" }}>{survey.owner.email}</span>
      </PreviewCardPopup>
    </PreviewCard>
  );
}

interface RowActionHandlers {
  survey: Survey; onEdit:  => void; onAnalytics:  => void; onShare:  => void; onDelete:  => void; onClose:  => void;
}

function RowActions({ survey, onEdit, onAnalytics, onShare, onDelete, onClose }: RowActionHandlers) {
  return (
    <Menu>
      <MenuTrigger
        render={
          <Button variant="ghost" size="icon-sm" aria-label={`${survey.title} 작업`} onClick={(e: React.MouseEvent) => e.stopPropagation}>
            <MoreHorizontal size={15} />
          </Button>
        }
      />
      <MenuPopup align="end">
        <MenuItem onClick={onEdit}><PenSquare size={14} />편집</MenuItem>
        <MenuItem onClick={onAnalytics}><TableIcon size={14} />응답 분석</MenuItem>
        <MenuItem onClick={onShare}><Share2 size={14} />공유 설정</MenuItem>
        {survey.status === "진행중" ? <MenuItem onClick={onClose}><Ban size={14} />설문 종료</MenuItem> : null}
        <MenuSeparator />
        <MenuItem variant="destructive" onClick={onDelete}><Trash2 size={14} />설문 삭제</MenuItem>
      </MenuPopup>
    </Menu>
  );
}

function SurveyCard({ survey, onOpen, onEdit, onAnalytics, onShare, onDelete, onClose }: RowActionHandlers & { onOpen:  => void }) {
  const responses = responseCountOf(survey.id);
  const pct = Math.min(100, Math.round((responses / survey.targetResponses) * 100));
  return (
    <ContextMenu>
      <ContextMenuTrigger className="contents">
        <Card className="cursor-pointer gap-2.5 p-4" onClick={onOpen}>
          <div className="flex items-start justify-between gap-2">
            <Badge variant={STATUS_BADGE[survey.status]}>{survey.status}</Badge>
            <RowActions survey={survey} onEdit={onEdit} onAnalytics={onAnalytics} onShare={onShare} onDelete={onDelete} onClose={onClose} />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-medium leading-snug">{survey.title}</span>
            <span className="text-muted-foreground truncate" style={{ fontSize: "var(--semantic-text-caption)" }}>{survey.category} · 문항 {survey.questions.length}개</span>
          </div>
          <Progress value={pct}><ProgressTrack><ProgressIndicator /></ProgressTrack></Progress>
          <div className="flex items-center justify-between">
            <span className="tabular-nums text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{responses}/{survey.targetResponses}명</span>
            <OwnerHover survey={survey} />
          </div>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem onClick={onEdit}><PenSquare size={14} />편집</ContextMenuItem>
        <ContextMenuItem onClick={onAnalytics}><TableIcon size={14} />응답 분석</ContextMenuItem>
        <ContextMenuItem onClick={onShare}><Share2 size={14} />공유 설정</ContextMenuItem>
        {survey.status === "진행중" ? <ContextMenuItem onClick={onClose}><Ban size={14} />설문 종료</ContextMenuItem> : null}
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive" onClick={onDelete}><Trash2 size={14} />설문 삭제</ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  );
}

export function SurveyListScreen({ surveys, onSelect, onNavigate, onCreateSurvey, onOpenShare, onRequestDelete, onRequestClose }: ScreenProps) {
  const [statusFilter, setStatusFilter] = React.useState<StatusFilter>("all");
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState<SortKey>("default");
  const [view, setView] = React.useState<ViewMode>("table");
  const [page, setPage] = React.useState(1);

  const filtered = React.useMemo( => {
    let list = surveys.filter((s) => statusFilter === "all" || s.status === statusFilter);
    if (query.trim) {
      const q = query.trim.toLowerCase;
      list = list.filter((s) => s.title.toLowerCase.includes(q) || s.category.toLowerCase.includes(q));
    }
    list = [...list];
    if (sort === "responses") list.sort((a, b) => responseCountOf(b.id) - responseCountOf(a.id));
    if (sort === "title") list.sort((a, b) => a.title.localeCompare(b.title, "ko"));
    return list;
  }, [surveys, statusFilter, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  React.useEffect( => { setPage(1); }, [statusFilter, query, sort]);

  const open = (id: string, dest: string) => { onSelect?.(id); onNavigate?.(dest); };

  const totalResponses = surveys.reduce((sum, s) => sum + responseCountOf(s.id), 0);
  const activeCount = surveys.filter((s) => s.status === "진행중").length;
  const avgFill = Math.round(
    (surveys.reduce((sum, s) => sum + Math.min(1, responseCountOf(s.id) / s.targetResponses), 0) / surveys.length) * 100,
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <span className="font-semibold" style={{ fontSize: "var(--semantic-text-heading-md)" }}>설문 목록</span>
          <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>총 {surveys.length}개의 설문을 관리하고 있어요.</span>
        </div>
        <Button onClick={onCreateSurvey}><Plus size={14} />새 설문</Button>
      </div>

      <div className="grid grid-cols-2 gap-3" style={{ containerType: "inline-size", containerName: "l4" }}>
        <style>{"@container l4 (min-width: 42rem) { .l4-grid { grid-template-columns: repeat(4, minmax(11rem, 1fr)); } }"}</style>
        <div className="l4-grid col-span-2 grid grid-cols-2 gap-3">
          <StatCard icon={Sparkles} tone="brand" label="전체 설문" value={`${surveys.length}건`} caption={`진행중 ${activeCount}건`} />
          <StatCard icon={Users2} tone="success" label="누적 응답" value={`${totalResponses}건`} caption="전체 설문 합산" />
          <StatCard icon={Target} tone="warning" label="평균 달성률" value={`${avgFill}%`} caption="응답/목표 평균" />
          <StatCard icon={CalendarClock} tone="danger" label="마감 설문" value={`${surveys.filter((s) => s.status === "마감").length}건`} caption="분석만 가능해요" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <Tabs value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)}>
          <TabsList>
            <TabsTab value="all">전체 {surveys.length}</TabsTab>
            <TabsTab value="진행중">진행중 {activeCount}</TabsTab>
            <TabsTab value="마감">마감 {surveys.filter((s) => s.status === "마감").length}</TabsTab>
            <TabsTab value="초안">초안 {surveys.filter((s) => s.status === "초안").length}</TabsTab>
          </TabsList>
        </Tabs>
        <div className="flex flex-wrap items-center gap-2">
          <span className="relative">
            <Search size={13} aria-hidden className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 opacity-60" />
            <Input value={query} onChange={(e) => { const v = e.target.value; setQuery(v); }} placeholder="설문·카테고리 검색" style={{ paddingLeft: "1.75rem", width: "11rem" }} />
          </span>
          <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
            <SelectTrigger style={{ width: "8rem" }}><SelectValue /></SelectTrigger>
            <SelectPopup>
              <SelectItem value="default">기본순</SelectItem>
              <SelectItem value="responses">응답 많은 순</SelectItem>
              <SelectItem value="title">제목 가나다순</SelectItem>
            </SelectPopup>
          </Select>
          <ToggleGroup value={[view]} onValueChange={(v) => { if (v.length > 0) setView(v[0] as ViewMode); }} aria-label="보기 전환">
            <ToggleGroupItem value="table" aria-label="표로 보기"><TableIcon size={14} /></ToggleGroupItem>
            <ToggleGroupItem value="card" aria-label="카드로 보기"><LayoutGrid size={14} /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {pageItems.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon"><Ban /></EmptyMedia>
            <EmptyTitle>검색 결과가 없어요</EmptyTitle>
            <EmptyDescription>다른 검색어나 상태 탭을 확인해보세요.</EmptyDescription>
          </EmptyHeader>
          <Button variant="outline" size="sm" onClick={ => { setQuery(""); setStatusFilter("all"); }}>필터 초기화</Button>
        </Empty>
      ) : view === "table" ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>설문</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>응답 현황</TableHead>
              <TableHead>마감일</TableHead>
              <TableHead>담당자</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageItems.map((survey) => {
              const responses = responseCountOf(survey.id);
              const pct = Math.min(100, Math.round((responses / survey.targetResponses) * 100));
              return (
                <TableRow key={survey.id} className="cursor-pointer" onClick={ => open(survey.id, "editor")}>
                  <TableCell>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">{survey.title}</span>
                      <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{survey.category} · 문항 {survey.questions.length}개</span>
                    </div>
                  </TableCell>
                  <TableCell><Badge variant={STATUS_BADGE[survey.status]}>{survey.status}</Badge></TableCell>
                  <TableCell style={{ minWidth: "9rem" }}>
                    <div className="flex flex-col gap-1">
                      <Progress value={pct}><ProgressTrack><ProgressIndicator /></ProgressTrack></Progress>
                      <span className="tabular-nums text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{responses}/{survey.targetResponses}명 · {pct}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{survey.deadline}</TableCell>
                  <TableCell><OwnerHover survey={survey} /></TableCell>
                  <TableCell>
                    <RowActions
                      survey={survey}
                      onEdit={ => open(survey.id, "editor")}
                      onAnalytics={ => open(survey.id, "analytics")}
                      onShare={ => onOpenShare(survey.id)}
                      onDelete={ => onRequestDelete(survey.id)}
                      onClose={ => onRequestClose(survey.id)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {pageItems.map((survey) => (
            <SurveyCard
              key={survey.id}
              survey={survey}
              onOpen={ => open(survey.id, "editor")}
              onEdit={ => open(survey.id, "editor")}
              onAnalytics={ => open(survey.id, "analytics")}
              onShare={ => onOpenShare(survey.id)}
              onDelete={ => onRequestDelete(survey.id)}
              onClose={ => onRequestClose(survey.id)}
            />
          ))}
        </div>
      )}

      {pageItems.length > 0 ? (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>
            {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} / {filtered.length}
          </span>
          <Pagination className="mx-0 w-auto justify-end">
            <PaginationContent>
              <PaginationItem><PaginationPrevious onClick={ => setPage((p) => Math.max(1, p - 1))} aria-disabled={safePage === 1} /></PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <PaginationItem key={n}><PaginationLink isActive={n === safePage} onClick={ => setPage(n)}>{n}</PaginationLink></PaginationItem>
              ))}
              <PaginationItem><PaginationNext onClick={ => setPage((p) => Math.min(totalPages, p + 1))} aria-disabled={safePage === totalPages} /></PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      ) : null}

      <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>설문을 누르면 편집기로 이동해요 · ⋮ 또는 우클릭으로 다른 작업도 할 수 있어요. 마감 설문은 응답 분석만 가능해요.</span>
    </div>
  );
}
