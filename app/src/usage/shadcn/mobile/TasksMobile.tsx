"use client";
import * as React from "react";
import {
  ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ListFilter, MoreHorizontal, X,
} from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { Card } from "../../../bases/shadcn/Card";
import { Checkbox } from "../../../bases/shadcn/Checkbox";
import { Drawer } from "../../../bases/shadcn/Drawer";
import { Empty } from "../../../bases/shadcn/Empty";
import { Input } from "../../../bases/shadcn/Input";
import { Menu } from "../../../bases/shadcn/Menu";
import { Select } from "../../../bases/shadcn/Select";
import {
  LABELS, PAGE_SIZES, PRIORITIES, STATUSES, TASKS,
  type PriorityKey, type StatusKey, type Task,
} from "../screens/TasksScreen";
import { TOUCH } from "./MobileShell";

// 아이콘 전용 버튼 크기 지정. 시스템 밀도 토큰이 작아도 터치 영역 44px 이상을 확보하기 위함
const ICON_BUTTON = { minWidth: TOUCH, minHeight: TOUCH, padding: 0 } as const;

const SUBTLE = { color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" } as const;


// 조건 하나의 선택 묶음 표시. 한 줄 전체가 label이라 글자 어디를 눌러도 선택되고, 옆 숫자는 다른 조건만 적용해 계산함
function FacetGroup<K extends string>({ title, options, picked, onPicked, counts }: {
  title: string;
  options: Record<K, { label: string; Icon: React.ComponentType<{ size?: number }> }>;
  picked: readonly K[];
  onPicked: (next: K[]) => void;
  counts: Record<string, number>;
}) {
  const headingId = React.useId();
  const keys = Object.keys(options) as K[];
  return (
    <div role="group" aria-labelledby={headingId} className="flex flex-col gap-(--semantic-space-xs)">
      <span id={headingId} style={{ ...SUBTLE, paddingInline: "var(--semantic-space-sm)" }}>
        {title}
      </span>
      {keys.map((k) => {
        const { label, Icon } = options[k];
        const on = picked.includes(k);
        return (
          <label
            key={k}
            className="flex cursor-pointer items-center gap-(--semantic-space-md) px-(--semantic-space-sm)"
            style={{
              minHeight: TOUCH,
              borderRadius: "var(--semantic-radius-control)",
              fontSize: "var(--semantic-text-body)",
              color: "var(--semantic-fg-neutral-default)",
              background: on ? "var(--semantic-bg-neutral-subtle)" : undefined,
            }}
          >
            <Checkbox
              checked={on}
              onCheckedChange={(next) => onPicked(next ? [...picked, k] : picked.filter((p) => p !== k))}
            />
            <Icon size={16} aria-hidden />
            <span className="min-w-0 flex-1 truncate">{label}</span>
            <span className="tabular-nums" style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>
              {counts[k] ?? 0}
            </span>
          </label>
        );
      })}
    </div>
  );
}


// 선택된 카드 윤곽선 지정. Card가 style을 받지 않아 테두리 대신 outline으로 표시함
const PICKED_RING = "outline-2 -outline-offset-1 outline-[var(--semantic-border-brand-default)]";

// Card 안쪽 Padding 제거. 시스템별 Padding 토큰이 커서 카드 높이가 지나치게 커지는 문제 방지 위함
const CARD_FLAT_PADDING = "p-0!";

// 할 일 하나를 카드로 표시. 줄 동작 버튼은 label 밖에 두어 버튼을 누를 때 체크가 함께 바뀌는 문제 방지함
function TaskCard({ t, on, onToggle }: { t: Task; on: boolean; onToggle: (next: boolean) => void }) {
  const st = STATUSES[t.status];
  const pr = PRIORITIES[t.priority];
  return (
    <li style={{ listStyle: "none" }}>
      <Card className={`${CARD_FLAT_PADDING} ${on ? PICKED_RING : ""}`}>
        <div className="flex items-stretch">
          <label
            className="flex min-w-0 flex-1 cursor-pointer items-start gap-(--semantic-space-md) p-(--semantic-space-md)"
            style={{ minHeight: TOUCH }}
          >
            <span className="flex shrink-0 items-center" style={{ minHeight: "1.5rem" }}>
              <Checkbox aria-label={`${t.id} 고르기`} checked={on} onCheckedChange={onToggle} />
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-(--semantic-space-xs)">
              <span className="flex min-w-0 items-center gap-(--semantic-space-sm)">
                <span className="tabular-nums" style={{ ...SUBTLE, fontSize: "var(--semantic-text-caption)" }}>{t.id}</span>
                <Badge variant="outline" tone="neutral">{LABELS[t.label]}</Badge>
              </span>
              <span
                className="line-clamp-2 min-w-0"
                style={{
                  /* 한글 줄바꿈을 띄어쓰기 단위로 고정하고 긴 영문은 넘치지 않게 줄바꿈 적용 */
                  wordBreak: "keep-all",
                  overflowWrap: "anywhere",
                  fontSize: "var(--semantic-text-body)",
                  lineHeight: "var(--semantic-line-height-snug)",
                  color: "var(--semantic-fg-neutral-default)",
                }}
              >
                {t.title}
              </span>
              <span className="flex min-w-0 flex-wrap items-center gap-x-(--semantic-space-md) gap-y-(--semantic-space-xs)" style={SUBTLE}>
                <span className="flex items-center gap-(--semantic-space-xs) whitespace-nowrap">
                  <st.Icon size={14} aria-hidden />
                  {st.label}
                </span>
                <span className="flex items-center gap-(--semantic-space-xs) whitespace-nowrap">
                  <pr.Icon size={14} aria-hidden />
                  {pr.label}
                </span>
              </span>
            </span>
          </label>
          <div className="flex shrink-0 items-start p-(--semantic-space-xs)">
            <Menu
              align="end"
              trigger={
                <Button variant="plain" aria-label={`${t.id} 동작`} style={ICON_BUTTON}>
                  <MoreHorizontal size={18} aria-hidden />
                </Button>
              }
              items={[
                { label: "고치기" },
                { label: "복제" },
                { label: "즐겨찾기" },
                { separator: true },
                { label: "지우기", hint: "⌫", danger: true },
              ]}
            />
          </div>
        </div>
      </Card>
    </li>
  );
}


export function TasksMobile() {
  const [query, setQuery] = React.useState("");
  const [statusPick, setStatusPick] = React.useState<StatusKey[]>([]);
  const [priorityPick, setPriorityPick] = React.useState<PriorityKey[]>([]);
  const [picked, setPicked] = React.useState<readonly string[]>([]);
  const [pageSize, setPageSize] = React.useState("10");
  const [page, setPage] = React.useState(0);
  const [sheetOpen, setSheetOpen] = React.useState(false);

  /* 상태, 우선순위, 검색 세 조건을 AND로 겹쳐 목록 필터링 */
  const rows = React.useMemo(
    () =>
      TASKS.filter(
        (t) =>
          (query === "" || t.title.includes(query) || t.id.includes(query.toUpperCase())) &&
          (statusPick.length === 0 || statusPick.includes(t.status)) &&
          (priorityPick.length === 0 || priorityPick.includes(t.priority)),
      ),
    [query, statusPick, priorityPick],
  );

  /* 묶음 옆 숫자 계산. 자기 조건까지 적용하면 항상 전체 또는 0이 나오므로 다른 조건만 적용함 */
  const statusCounts = React.useMemo(() => {
    const out: Record<string, number> = {};
    for (const t of TASKS) {
      if (priorityPick.length && !priorityPick.includes(t.priority)) continue;
      out[t.status] = (out[t.status] ?? 0) + 1;
    }
    return out;
  }, [priorityPick]);
  const priorityCounts = React.useMemo(() => {
    const out: Record<string, number> = {};
    for (const t of TASKS) {
      if (statusPick.length && !statusPick.includes(t.status)) continue;
      out[t.priority] = (out[t.priority] ?? 0) + 1;
    }
    return out;
  }, [statusPick]);

  const size = Number(pageSize);
  const pageCount = Math.max(1, Math.ceil(rows.length / size));
  /* 필터로 줄 수가 줄었을 때 현재 페이지를 범위 안으로 보정 */
  const safePage = Math.min(page, pageCount - 1);
  const view = rows.slice(safePage * size, safePage * size + size);
  const pickCount = statusPick.length + priorityPick.length;
  const filtered = query !== "" || pickCount > 0;

  const clearAll = () => {
    setQuery("");
    setStatusPick([]);
    setPriorityPick([]);
    setPage(0);
  };
  const toggle = (id: string, on: boolean) =>
    setPicked((prev) => (on ? [...prev, id] : prev.filter((p) => p !== id)));
  const allOnPage = view.length > 0 && view.every((t) => picked.includes(t.id));
  const someOnPage = view.some((t) => picked.includes(t.id));

  return (
    <div className="flex flex-col gap-(--semantic-space-md)">
      {/* 인사말과 할 일 추가 버튼 배치 */}
      <div className="flex items-start justify-between gap-(--semantic-space-sm)">
        <div className="flex min-w-0 flex-1 flex-col gap-(--semantic-space-xs)">
          <h3
            style={{
              margin: 0,
              color: "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-heading)",
              letterSpacing: "var(--semantic-tracking-heading)",
              lineHeight: "var(--semantic-line-height-tight)",
            }}
          >
            다시 오셨네요!
          </h3>
          <p style={{ margin: 0, ...SUBTLE }}>이번 달 할 일 목록입니다.</p>
        </div>
        <Button variant="solid" tone="brand" className="shrink-0">
          할 일 추가
        </Button>
      </div>

      {/* 검색 입력과 필터 Drawer 버튼 배치 */}
      <div className="flex items-center gap-(--semantic-space-sm)">
        <div className="min-w-0 flex-1">
          <Input
            placeholder="할 일 거르기…"
            aria-label="할 일 거르기"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(e.target.value);
              setPage(0);
            }}
          />
        </div>
        <Drawer
          open={sheetOpen}
          onOpenChange={setSheetOpen}
          trigger={
            <Button variant="outline" className="shrink-0">
              <ListFilter size={16} aria-hidden />
              거르기
              {pickCount > 0 ? <Badge variant="subtle" tone="brand">{pickCount}</Badge> : null}
            </Button>
          }
          title="거르기"
          description="조건을 겹쳐 고를 수 있어요. 고르는 대로 목록이 바뀝니다."
        >
          <div className="flex min-h-0 flex-col gap-(--semantic-space-lg) overflow-y-auto px-(--component-drawer-padding) py-(--semantic-space-md)">
            <FacetGroup
              title="상태"
              options={STATUSES}
              picked={statusPick}
              onPicked={(next) => { setStatusPick(next); setPage(0); }}
              counts={statusCounts}
            />
            <FacetGroup
              title="우선순위"
              options={PRIORITIES}
              picked={priorityPick}
              onPicked={(next) => { setPriorityPick(next); setPage(0); }}
              counts={priorityCounts}
            />
          </div>
          {/* 하단 safe area만큼 여백 확보. 포털로 떠서 껍데기 여백이 적용되지 않음 */}
          <div
            className="flex flex-col gap-(--semantic-space-sm) px-(--component-drawer-padding) pt-(--semantic-space-sm)"
            style={{ paddingBottom: "calc(var(--ods-safe-bottom, 0px) + var(--semantic-space-md))" }}
          >
            <Button variant="solid" tone="brand" style={{ minHeight: TOUCH }} onClick={() => setSheetOpen(false)}>
              {rows.length}줄 보기
            </Button>
            {pickCount > 0 ? (
              <Button
                variant="plain"
                style={{ minHeight: TOUCH }}
                onClick={() => { setStatusPick([]); setPriorityPick([]); setPage(0); }}
              >
                고른 조건 지우기
              </Button>
            ) : null}
          </div>
        </Drawer>
      </div>

      {/* 적용된 필터 조건 표시. Drawer를 닫은 뒤에도 목록이 줄어든 이유를 알 수 있게 하기 위함 */}
      {filtered ? (
        <div className="flex flex-wrap items-center gap-(--semantic-space-xs)">
          {statusPick.map((k) => (
            <Badge key={k} variant="subtle" tone="neutral" icon={React.createElement(STATUSES[k].Icon, { size: 12 })}>
              {STATUSES[k].label}
            </Badge>
          ))}
          {priorityPick.map((k) => (
            <Badge key={k} variant="subtle" tone="neutral" icon={React.createElement(PRIORITIES[k].Icon, { size: 12 })}>
              {PRIORITIES[k].label}
            </Badge>
          ))}
          {query !== "" ? <Badge variant="subtle" tone="neutral">“{query}”</Badge> : null}
          <Button variant="plain" onClick={clearAll}>
            초기화
            <X size={14} aria-hidden />
          </Button>
        </div>
      ) : null}

      {view.length === 0 ? (
        /* 결과가 없을 때 목록 대신 Empty 표시 */
        <Empty>
          <Empty.Header>
            <Empty.Title className="break-keep">걸린 게 없어요</Empty.Title>
            <Empty.Description className="break-keep">
              조건을 하나 빼 보세요. 지금 {pickCount}개의 골라 둔 조건과{" "}
              {query === "" ? "빈" : `"${query}"`} 검색어가 함께 걸려 있어요.
            </Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button variant="outline" onClick={clearAll}>조건 모두 지우기</Button>
          </Empty.Content>
        </Empty>
      ) : (
        <>
          {/* 현재 페이지 전체 선택 체크박스 배치. 한 줄 전체가 label이라 어디를 눌러도 선택됨 */}
          <label
            className="flex cursor-pointer items-center gap-(--semantic-space-md) px-(--semantic-space-md)"
            style={{ minHeight: TOUCH, fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}
          >
            <Checkbox
              aria-label="이 쪽 모두 고르기"
              checked={allOnPage}
              indeterminate={someOnPage && !allOnPage}
              onCheckedChange={(on) =>
                setPicked((prev) =>
                  on
                    ? [...new Set([...prev, ...view.map((t) => t.id)])]
                    : prev.filter((id) => !view.some((t) => t.id === id)),
                )
              }
            />
            <span className="min-w-0 flex-1 truncate">이 쪽 모두 고르기</span>
          </label>
          <ul className="m-0 flex flex-col gap-(--semantic-space-sm) p-0">
            {view.map((t) => (
              <TaskCard key={t.id} t={t} on={picked.includes(t.id)} onToggle={(on) => toggle(t.id, on)} />
            ))}
          </ul>
        </>
      )}

      {/* 페이지 이동 버튼 네 개 배치. 줄 수와 페이지당 줄 수 표시는 윗줄에 둠 */}
      <div className="flex flex-col gap-(--semantic-space-sm)">
        <div className="flex items-center justify-between gap-(--semantic-space-sm)">
          <span className="min-w-0" style={SUBTLE}>
            {rows.length}줄 가운데 {picked.length}줄 골랐어요
          </span>
          <label
            className="flex shrink-0 items-center gap-(--semantic-space-sm)"
            style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}
          >
            쪽당
            <Select
              aria-label="쪽당 줄 수"
              size="sm"
              value={pageSize}
              onValueChange={(v) => { setPageSize(v); setPage(0); }}
              items={PAGE_SIZES}
            />
          </label>
        </div>
        <div className="flex items-center justify-center gap-(--semantic-space-sm)">
          <Button variant="outline" aria-label="첫 쪽" style={ICON_BUTTON} disabled={safePage === 0} onClick={() => setPage(0)}>
            <ChevronsLeft size={16} aria-hidden />
          </Button>
          <Button variant="outline" aria-label="이전 쪽" style={ICON_BUTTON} disabled={safePage === 0} onClick={() => setPage(safePage - 1)}>
            <ChevronLeft size={16} aria-hidden />
          </Button>
          <span
            className="min-w-20 text-center tabular-nums"
            style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}
          >
            {safePage + 1} / {pageCount} 쪽
          </span>
          <Button variant="outline" aria-label="다음 쪽" style={ICON_BUTTON} disabled={safePage >= pageCount - 1} onClick={() => setPage(safePage + 1)}>
            <ChevronRight size={16} aria-hidden />
          </Button>
          <Button variant="outline" aria-label="끝 쪽" style={ICON_BUTTON} disabled={safePage >= pageCount - 1} onClick={() => setPage(pageCount - 1)}>
            <ChevronsRight size={16} aria-hidden />
          </Button>
        </div>
      </div>
    </div>
  );
}
