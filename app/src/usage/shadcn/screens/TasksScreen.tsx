import * as React from "react";
import {
  ArrowDown, ArrowRight, ArrowUp, ChevronLeft, ChevronRight,
  ChevronsLeft, ChevronsRight, Circle, CircleCheck, CircleHelp, CircleOff,
  MoreHorizontal, Settings2, Timer, X,
} from "lucide-react";
import { Avatar } from "../../../bases/shadcn/Avatar";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { Checkbox } from "../../../bases/shadcn/Checkbox";
import { Divider } from "../../../bases/shadcn/Divider";
import { Empty } from "../../../bases/shadcn/Empty";
import { Input } from "../../../bases/shadcn/Input";
import { Menu } from "../../../bases/shadcn/Menu";
import { Popover } from "../../../bases/shadcn/Popover";
import { Select } from "../../../bases/shadcn/Select";
import { Table } from "../../../bases/shadcn/Table";

const LABELS = { bug: "버그", feature: "기능", docs: "문서" } as const;
type LabelKey = keyof typeof LABELS;

// data/data.tsx의 다섯 상태. 아이콘이 상태 표시 역할이라 색으로만 구분하지 않음
const STATUSES = {
  backlog: { label: "대기", Icon: CircleHelp },
  todo: { label: "할 일", Icon: Circle },
  doing: { label: "진행 중", Icon: Timer },
  done: { label: "완료", Icon: CircleCheck },
  canceled: { label: "취소", Icon: CircleOff },
} as const;
type StatusKey = keyof typeof STATUSES;

const PRIORITIES = {
  low: { label: "낮음", Icon: ArrowDown },
  medium: { label: "보통", Icon: ArrowRight },
  high: { label: "높음", Icon: ArrowUp },
} as const;
type PriorityKey = keyof typeof PRIORITIES;

interface Task {
  id: string;
  label: LabelKey;
  title: string;
  status: StatusKey;
  priority: PriorityKey;
}

// 고정값 데이터
const TASKS: readonly Task[] = [
  { id: "TASK-8782", label: "docs", title: "SMTP 다운스트림 데이터 흐름을 다시 재 봐야 함", status: "doing", priority: "medium" },
  { id: "TASK-7878", label: "docs", title: "AGP 인터페이스를 우회하는 경로를 정리", status: "backlog", priority: "medium" },
  { id: "TASK-7839", label: "bug", title: "SAS 회로가 끊겨 재부팅이 필요함", status: "todo", priority: "high" },
  { id: "TASK-5562", label: "feature", title: "SAS 인터페이스를 압축해 대역폭을 줄이기", status: "backlog", priority: "medium" },
  { id: "TASK-8686", label: "feature", title: "ADP 배열을 파싱해도 값이 안 잡힘", status: "canceled", priority: "medium" },
  { id: "TASK-1280", label: "bug", title: "HTTP 모니터를 우회해 지연을 재는 길", status: "done", priority: "high" },
  { id: "TASK-7262", label: "feature", title: "UTF8 대역을 가로질러 값을 옮기기", status: "done", priority: "high" },
  { id: "TASK-1138", label: "feature", title: "AI 보조기를 새로 배선", status: "doing", priority: "medium" },
  { id: "TASK-7184", label: "feature", title: "PNG 인터페이스를 새로 세움", status: "todo", priority: "low" },
  { id: "TASK-5160", label: "docs", title: "SQL 회로를 눌러 THX 대역을 재기", status: "doing", priority: "high" },
  { id: "TASK-5618", label: "docs", title: "SSL 프로그램을 통째로 다시 시작", status: "done", priority: "medium" },
  { id: "TASK-6699", label: "docs", title: "GB 드라이버를 인덱싱하면 멈춤", status: "backlog", priority: "medium" },
  { id: "TASK-2858", label: "bug", title: "UTF8 대역을 재기 전에 초기화가 필요", status: "backlog", priority: "medium" },
  { id: "TASK-9864", label: "bug", title: "AI 모듈이 응답을 두 번 보냄", status: "done", priority: "low" },
  { id: "TASK-8404", label: "bug", title: "SAS 대역을 재면 값이 튐", status: "doing", priority: "low" },
  { id: "TASK-5365", label: "docs", title: "COM 카드를 다시 꽂아야 잡힘", status: "doing", priority: "low" },
  { id: "TASK-1780", label: "docs", title: "SAS 회로를 넘어 값이 새어 나감", status: "todo", priority: "high" },
  { id: "TASK-6938", label: "feature", title: "RSS 대역을 압축하면 되돌릴 수 없음", status: "doing", priority: "high" },
  { id: "TASK-9885", label: "bug", title: "COM 배열이 비면 화면이 빈칸으로 남음", status: "backlog", priority: "high" },
  { id: "TASK-3216", label: "docs", title: "SMS 인터페이스를 우회하는 임시 경로", status: "backlog", priority: "medium" },
];

const PAGE_SIZES = { "10": "10", "20": "20", "30": "30" } as const;

// 다중 값 선택 필터 필드
function Facet<K extends string>({
  title,
  options,
  picked,
  onPicked,
  counts,
}: {
  title: string;
  options: Record<K, { label: string; Icon: React.ComponentType<{ size?: number }> }>;
  picked: readonly K[];
  onPicked: (next: K[]) => void;
  counts: Record<string, number>;
}) {
  const keys = Object.keys(options) as K[];
  return (
    <Popover
      trigger={
        <Button variant="outline">
          <span
            aria-hidden
            className="inline-block size-3 shrink-0 rounded-full"
            style={{
              border:
                "var(--semantic-border-width-default) dashed var(--semantic-border-neutral-strong)",
            }}
          />
          {title}
          {picked.length ? (
            <>
              <span
                aria-hidden
                className="mx-1 inline-block h-4 w-px"
                style={{ background: "var(--semantic-border-neutral-subtle)" }}
              />
              {picked.map((k) => (
                <Badge key={k} variant="subtle" tone="neutral">
                  {options[k].label}
                </Badge>
              ))}
            </>
          ) : null}
        </Button>
      }
      align="start"
    >
      <div className="flex min-w-44 flex-col gap-1">
        {keys.map((k) => {
          const { label, Icon } = options[k];
          const on = picked.includes(k);
          return (
            <label
              key={k}
              className="flex cursor-pointer items-center gap-2 px-1 py-1.5"
              style={{
                borderRadius: "var(--semantic-radius-control)",
                fontSize: "var(--semantic-text-body-sm)",
                color: "var(--semantic-fg-neutral-default)",
              }}
            >
              <Checkbox
                checked={on}
                onCheckedChange={(next) =>
                  onPicked(next ? [...picked, k] : picked.filter((p) => p !== k))
                }
              />
              <Icon size={14} aria-hidden />
              <span className="flex-1">{label}</span>
              {/* 해당 행 수 미리 표시. 클릭 후 0행이면 복귀 필요 */}
              <span
                className="tabular-nums"
                style={{
                  color: "var(--semantic-fg-neutral-subtle)",
                  fontSize: "var(--semantic-text-caption)",
                }}
              >
                {counts[k] ?? 0}
              </span>
            </label>
          );
        })}
        {picked.length ? (
          <>
            <Divider />
            <Button variant="plain" onClick={ => onPicked([])}>
              고른 것 지우기
            </Button>
          </>
        ) : null}
      </div>
    </Popover>
  );
}

export function TasksScreen {
  const [query, setQuery] = React.useState("");
  const [statusPick, setStatusPick] = React.useState<StatusKey[]>([]);
  const [priorityPick, setPriorityPick] = React.useState<PriorityKey[]>([]);
  const [picked, setPicked] = React.useState<readonly string[]>([]);
  const [pageSize, setPageSize] = React.useState("10");
  const [page, setPage] = React.useState(0);
  const [hidden, setHidden] = React.useState<readonly string[]>([]);

  // 필터링된 행, 세 조건 AND 결합, 원본 filterFn 과 동일 동작
  const rows = React.useMemo(
     =>
      TASKS.filter(
        (t) =>
          (query === "" || t.title.includes(query) || t.id.includes(query.toUpperCase)) &&
          (statusPick.length === 0 || statusPick.includes(t.status)) &&
          (priorityPick.length === 0 || priorityPick.includes(t.priority)),
      ),
    [query, statusPick, priorityPick],
  );

  // facet 옆 숫자는 해당 조건 빼고 계산. 자기 필터 적용하면 전부/0만 나와 의미 없음
  const statusCounts = React.useMemo( => {
    const out: Record<string, number> = {};
    for (const t of TASKS) {
      if (priorityPick.length && !priorityPick.includes(t.priority)) continue;
      out[t.status] = (out[t.status] ?? 0) + 1;
    }
    return out;
  }, [priorityPick]);

  const priorityCounts = React.useMemo( => {
    const out: Record<string, number> = {};
    for (const t of TASKS) {
      if (statusPick.length && !statusPick.includes(t.status)) continue;
      out[t.priority] = (out[t.priority] ?? 0) + 1;
    }
    return out;
  }, [statusPick]);

  const size = Number(pageSize);
  const pageCount = Math.max(1, Math.ceil(rows.length / size));
  // 필터로 행이 줄면 페이지가 범위 밖일 수 있음. 결과없음과 구별 안 되는 문제가 있음
  const safePage = Math.min(page, pageCount - 1);
  const view = rows.slice(safePage * size, safePage * size + size);
  const filtered = query !== "" || statusPick.length > 0 || priorityPick.length > 0;

  const columns = ["작업", "제목", "상태", "우선순위"] as const;
  const shown = columns.filter((c) => !hidden.includes(c));

  return (
    <div className="flex flex-col gap-6">
      {/* 인사말과 사용자 정보 */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <h3
            style={{
              color: "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-heading)",
              letterSpacing: "var(--semantic-tracking-heading)",
              lineHeight: "var(--semantic-line-height-tight)",
            }}
          >
            다시 오셨네요!
          </h3>
          <p
            style={{
              color: "var(--semantic-fg-neutral-subtle)",
              fontSize: "var(--semantic-text-body-sm)",
            }}
          >
            이번 달 할 일 목록입니다.
          </p>
        </div>
        <Menu
          trigger={
            <button type="button" className="cursor-pointer rounded-full">
              <Avatar size="sm" fallback="SK" />
            </button>
          }
          align="end"
          items={[
            { heading: "김수경 · sukyung@example.com" },
            { label: "프로필" },
            { label: "청구" },
            { label: "설정" },
            { separator: true },
            { label: "로그아웃", danger: true },
          ]}
        />
      </div>

      {/* 툴바. 좁으면 접힘. 원본은 한 행 고정이지만 md 미만은 그리지 않아 접힐 수 있음 */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="min-w-40 flex-1">
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
        <Facet
          title="상태"
          options={STATUSES}
          picked={statusPick}
          onPicked={(next) => {
            setStatusPick(next);
            setPage(0);
          }}
          counts={statusCounts}
        />
        <Facet
          title="우선순위"
          options={PRIORITIES}
          picked={priorityPick}
          onPicked={(next) => {
            setPriorityPick(next);
            setPage(0);
          }}
          counts={priorityCounts}
        />
        {filtered ? (
          <Button
            variant="plain"
            onClick={ => {
              setQuery("");
              setStatusPick([]);
              setPriorityPick([]);
              setPage(0);
            }}
          >
            초기화
            <X size={14} aria-hidden />
          </Button>
        ) : null}

        <div className="ms-auto flex items-center gap-2">
          {/* 열 감추기는 실제로 숨김 처리. 그림으로만 두면 클릭한 사람이 고장으로 오해하는 문제 있음 */}
          <Popover
            align="end"
            trigger={
              <Button variant="outline">
                <Settings2 size={14} aria-hidden />
                보기
              </Button>
            }
          >
            <div className="flex min-w-36 flex-col gap-1">
              {columns.map((c) => (
                <label
                  key={c}
                  className="flex cursor-pointer items-center gap-2 px-1 py-1.5"
                  style={{
                    fontSize: "var(--semantic-text-body-sm)",
                    color: "var(--semantic-fg-neutral-default)",
                  }}
                >
                  <Checkbox
                    checked={!hidden.includes(c)}
                    onCheckedChange={(on) =>
                      setHidden((prev) =>
                        on ? prev.filter((h) => h !== c) : [...prev, c],
                      )
                    }
                  />
                  {c}
                </label>
              ))}
            </div>
          </Popover>
          <Button variant="solid" tone="brand">
            할 일 추가
          </Button>
        </div>
      </div>

      {view.length === 0 ? (
        <Empty>
          <Empty.Header>
            <Empty.Title>걸린 게 없어요</Empty.Title>
            <Empty.Description>
              조건을 하나 빼 보세요. 지금 {statusPick.length + priorityPick.length}개의 골라 둔
              조건과 {query === "" ? "빈" : `"${query}"`} 검색어가 함께 걸려 있어요.
            </Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button
              variant="outline"
              onClick={ => {
                setQuery("");
                setStatusPick([]);
                setPriorityPick([]);
                setPage(0);
              }}
            >
              조건 모두 지우기
            </Button>
          </Empty.Content>
        </Empty>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>
                  <Checkbox
                    aria-label="이 쪽 모두 고르기"
                    checked={view.every((t) => picked.includes(t.id))}
                    indeterminate={
                      view.some((t) => picked.includes(t.id)) &&
                      !view.every((t) => picked.includes(t.id))
                    }
                    onCheckedChange={(on) =>
                      setPicked((prev) =>
                        on
                          ? [...new Set([...prev, ...view.map((t) => t.id)])]
                          : prev.filter((id) => !view.some((t) => t.id === id)),
                      )
                    }
                  />
                </Table.Head>
                {shown.map((c) => (
                  <Table.Head key={c}>{c}</Table.Head>
                ))}
                <Table.Head>
                  <span className="sr-only">줄 동작</span>
                </Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {view.map((t) => {
                const st = STATUSES[t.status];
                const pr = PRIORITIES[t.priority];
                return (
                  <Table.Row key={t.id}>
                    <Table.Cell>
                      <Checkbox
                        aria-label={`${t.id} 고르기`}
                        checked={picked.includes(t.id)}
                        onCheckedChange={(on) =>
                          setPicked((prev) =>
                            on ? [...prev, t.id] : prev.filter((id) => id !== t.id),
                          )
                        }
                      />
                    </Table.Cell>
                    {shown.includes("작업") ? (
                      <Table.Cell>
                        <span className="whitespace-nowrap tabular-nums">{t.id}</span>
                      </Table.Cell>
                    ) : null}
                    {shown.includes("제목") ? (
                      <Table.Cell>
                        <span className="flex items-center gap-2">
                          <Badge variant="outline" tone="neutral">
                            {LABELS[t.label]}
                          </Badge>
                          <span className="min-w-0 truncate">{t.title}</span>
                        </span>
                      </Table.Cell>
                    ) : null}
                    {shown.includes("상태") ? (
                      <Table.Cell>
                        <span className="flex items-center gap-2 whitespace-nowrap">
                          <st.Icon size={14} aria-hidden />
                          {st.label}
                        </span>
                      </Table.Cell>
                    ) : null}
                    {shown.includes("우선순위") ? (
                      <Table.Cell>
                        <span className="flex items-center gap-2 whitespace-nowrap">
                          <pr.Icon size={14} aria-hidden />
                          {pr.label}
                        </span>
                      </Table.Cell>
                    ) : null}
                    <Table.Cell>
                      <Menu
                        align="end"
                        trigger={
                          <Button variant="plain" aria-label={`${t.id} 동작`}>
                            <MoreHorizontal size={16} aria-hidden />
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
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      )}

      {/* 페이지 넘김. 처음, 이전, 다음, 끝 버튼 4개 유지 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span
          style={{
            color: "var(--semantic-fg-neutral-subtle)",
            fontSize: "var(--semantic-text-body-sm)",
          }}
        >
          {rows.length}줄 가운데 {picked.length}줄 골랐어요
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <label
            className="flex items-center gap-2"
            style={{
              color: "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-body-sm)",
            }}
          >
            쪽당 줄 수
            <Select
              aria-label="쪽당 줄 수"
              size="sm"
              value={pageSize}
              onValueChange={(v) => {
                setPageSize(v);
                setPage(0);
              }}
              items={PAGE_SIZES}
            />
          </label>
          <span
            className="tabular-nums"
            style={{
              color: "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-body-sm)",
            }}
          >
            {safePage + 1} / {pageCount} 쪽
          </span>
          <div className="flex gap-1">
            <Button variant="outline" aria-label="첫 쪽"
              disabled={safePage === 0} onClick={ => setPage(0)}>
              <ChevronsLeft size={14} aria-hidden />
            </Button>
            <Button variant="outline" aria-label="이전 쪽"
              disabled={safePage === 0} onClick={ => setPage(safePage - 1)}>
              <ChevronLeft size={14} aria-hidden />
            </Button>
            <Button variant="outline" aria-label="다음 쪽"
              disabled={safePage >= pageCount - 1} onClick={ => setPage(safePage + 1)}>
              <ChevronRight size={14} aria-hidden />
            </Button>
            <Button variant="outline" aria-label="끝 쪽"
              disabled={safePage >= pageCount - 1} onClick={ => setPage(pageCount - 1)}>
              <ChevronsRight size={14} aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
