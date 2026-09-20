import * as React from "react";
import {
  BookMarked, BookOpen, Clock, LayoutGrid, Layers, Rows3,
} from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Accordion } from "../../../bases/shadcn/Accordion";
import { Badge } from "../../../bases/shadcn/Badge";
import { Carousel } from "../../../bases/shadcn/Carousel";
import { Chart } from "../../../bases/shadcn/Chart";
import { Contextmenu } from "../../../bases/shadcn/Contextmenu";
import { Checkbox } from "../../../bases/shadcn/Checkbox";
import { Input } from "../../../bases/shadcn/Input";
import { Listrow } from "../../../bases/shadcn/Listrow";
import { Pagination } from "../../../bases/shadcn/Pagination";
import { Pageheader } from "../../../bases/shadcn/Pageheader";
import { Radio } from "../../../bases/shadcn/Radio";
import { Segmented } from "../../../bases/shadcn/Segmented";
import { Skeleton } from "../../../bases/shadcn/Skeleton";
import { Spinner } from "../../../bases/shadcn/Spinner";
import { Table } from "../../../bases/shadcn/Table";
import { Toolbar } from "../../../bases/shadcn/Toolbar";
import { Tooltip } from "../../../bases/shadcn/Tooltip";
import { ARTICLES, COLLECTIONS, TAG_IMAGE, TAG_TONE } from "../data";
import type { ScreenProps } from "../screens";

// onClick은 공용 계약엔 없지만 실제 tr은 받음. 이 화면 안에서만 쓰는 로컬 타입임
const ClickableRow = Table.Row as React.ComponentType<
  React.ComponentProps<"tr"> & { onClick?:  => void }
>;

const MAX_TAG_COUNT = Math.max(...COLLECTIONS.map((c) => ARTICLES.filter((a) => a.tag === c.tag).length), 1);

const TOTAL_MINUTES = ARTICLES.reduce((sum, a) => sum + a.minutes, 0);
const AVG_MINUTES = Math.round(TOTAL_MINUTES / ARTICLES.length);
const SOURCE_COUNT = new Set(ARTICLES.map((a) => a.source)).size;

// 태그별 분포 차트. 막대 목록과 같은 데이터를 다른 형태로 표시
const TAG_RADAR_DATA = COLLECTIONS.map((c) => ({
  tag: c.label,
  count: ARTICLES.filter((a) => a.tag === c.tag).length,
}));
const TAG_RADAR_CONFIG = { count: { label: "저장 수", color: "var(--semantic-bg-brand-default)" } };

const STAT_CHIPS = [
  { label: "저장한 글", value: `${ARTICLES.length}개`, icon: BookMarked },
  { label: "평균 읽기 시간", value: `${AVG_MINUTES}분`, icon: Clock },
  { label: "컬렉션", value: `${COLLECTIONS.length}개`, icon: Layers },
  { label: "출처", value: `${SOURCE_COUNT}곳`, icon: BookOpen },
] as const;

function StatChip({ spec }: { spec: (typeof STAT_CHIPS)[number] }) {
  const Icon = spec.icon;
  return (
    <div
      className="flex items-center gap-3"
      style={{
        background: "var(--component-card-bg)",
        borderColor: "var(--component-card-border)",
        borderWidth: "var(--semantic-border-width-default)",
        borderStyle: "solid",
        borderRadius: "var(--component-card-radius)",
        padding: "var(--component-card-padding)",
      }}
    >
      <span
        aria-hidden
        className="flex size-8 shrink-0 items-center justify-center"
        style={{
          background: "var(--semantic-bg-brand-subtle)",
          color: "var(--semantic-fg-brand-default)",
          borderRadius: "var(--semantic-radius-control)",
        }}
      >
        <Icon size={16} />
      </span>
      <div className="flex flex-col">
        <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
          {spec.label}
        </span>
        <span
          className="tabular-nums"
          style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body)" }}
        >
          {spec.value}
        </span>
      </div>
    </div>
  );
}

export function ListScreen({ onOpen }: ScreenProps) {
  const [filter, setFilter] = React.useState<string[]>(["전체"]);
  const [sortOrder, setSortOrder] = React.useState<"default" | "short" | "long">("default");
  const [view, setView] = React.useState<"table" | "grid">("table");
  const [query, setQuery] = React.useState("");
  const [showExcerpt, setShowExcerpt] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [loadingMore, setLoadingMore] = React.useState(false);
  const active = filter[0] ?? "전체";
  const filtered = (active === "전체" ? ARTICLES : ARTICLES.filter((a) => a.tag === active)).filter((a) =>
    `${a.title} ${a.source} ${a.tag}`.toLocaleLowerCase.includes(query.toLocaleLowerCase),
  );
  const rows = [...filtered].sort((a, b) => {
    if (sortOrder === "short") return a.minutes - b.minutes;
    if (sortOrder === "long") return b.minutes - a.minutes;
    return 0;
  });
  const quickReads = [...ARTICLES].sort((a, b) => a.minutes - b.minutes).slice(0, 3);

  return (
    <div className="flex flex-col gap-5">
      <Pageheader
        title="읽기 게시판"
        lede={`${ARTICLES.length}개의 읽을거리를 ${COLLECTIONS.length}개 주제로 정리했어요.`}
        actions={
          <Toolbar>
            <button
              type="button"
              aria-label="표로 보기"
              aria-pressed={view === "table"}
              onClick={ => setView("table")}
              className="inline-flex size-8 items-center justify-center"
              style={{
                color: view === "table" ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-subtle)",
              }}
            >
              <Rows3 size={14} aria-hidden />
            </button>
            <Toolbar.Separator />
            <button
              type="button"
              aria-label="격자로 보기"
              aria-pressed={view === "grid"}
              onClick={ => setView("grid")}
              className="inline-flex size-8 items-center justify-center"
              style={{
                color: view === "grid" ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-subtle)",
              }}
            >
              <LayoutGrid size={14} aria-hidden />
            </button>
          </Toolbar>
        }
      />

      <div
        className="flex flex-col gap-2 p-3 sm:flex-row sm:items-center sm:justify-between"
        style={{
          background: "var(--semantic-bg-brand-subtle)",
          border: "var(--semantic-border-width-default) solid var(--semantic-border-brand-subtle)",
          borderRadius: "var(--semantic-radius-container)",
        }}
      >
        <span className="flex items-center gap-2" style={{ color: "var(--semantic-fg-brand-default)", fontSize: "var(--semantic-text-body-sm)" }}>
          <BookOpen size={15} aria-hidden />
          공지 · 관심 있는 글을 저장하고, 컬렉션으로 다시 찾아보세요.
        </span>
        <Badge variant="subtle" tone="brand">고정</Badge>
      </div>

      {/* 목록 상단에 태그별 표지 사진 띠 추가 */}
      <div className="flex gap-3 overflow-x-auto pb-1">
        {COLLECTIONS.map((c) => (
          <div
            key={c.id}
            className="relative flex shrink-0 flex-col justify-end overflow-hidden p-3"
            style={{
              width: "10rem",
              height: "8rem",
              borderRadius: "var(--semantic-radius-container)",
              boxShadow: "var(--semantic-shadow-raised)",
              backgroundImage:
                `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
                `color-mix(in oklch, var(--semantic-bg-${TAG_TONE[c.tag] ?? "brand"}-default) 25%, black) 100%), url("${TAG_IMAGE[c.tag]}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "var(--semantic-text-body-sm)" }}>
              {c.label}
            </span>
            <span className="tabular-nums" style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.85, fontSize: "var(--semantic-text-caption)" }}>
              {ARTICLES.filter((a) => a.tag === c.tag).length}개
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STAT_CHIPS.map((s) => (
          <StatChip key={s.label} spec={s} />
        ))}
      </div>

      {/* 이번 주 추천 글 3건 슬라이드 전환 표시 */}
      <div className="flex flex-col gap-2">
        <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
          이번 주 추천 · 짧게 읽기
        </span>
        <Carousel opts={{ align: "start" }} className="w-full">
          <Carousel.Content>
            {quickReads.map((a) => (
              <Carousel.Item key={a.id} aria-label={a.title} className="basis-1/2 sm:basis-1/3">
                <button
                  type="button"
                  onClick={ => onOpen?.("reader", a.id)}
                  className="flex w-full flex-col gap-2 overflow-hidden text-start"
                  style={{
                    background: "var(--component-card-bg)",
                    borderColor: "var(--component-card-border)",
                    borderWidth: "var(--semantic-border-width-default)",
                    borderStyle: "solid",
                    borderRadius: "var(--component-card-radius)",
                  }}
                >
                  <img
                    src={TAG_IMAGE[a.tag]}
                    alt=""
                    aria-hidden
                    className="h-20 w-full object-cover"
                  />
                  <div className="flex flex-col gap-1 px-3 pb-3">
                    <span className="truncate" style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}>
                      {a.title}
                    </span>
                    <Badge variant="outline" tone="neutral">{a.minutes}분</Badge>
                  </div>
                </button>
              </Carousel.Item>
            ))}
          </Carousel.Content>
          <Carousel.Previous />
          <Carousel.Next />
        </Carousel>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Segmented value={filter} onValueChange={(v) => setFilter(v.length ? v : ["전체"])}>
          <Segmented.Item value="전체">전체 {ARTICLES.length}</Segmented.Item>
          {COLLECTIONS.map((c) => {
            const count = ARTICLES.filter((a) => a.tag === c.tag).length;
            return (
              <Segmented.Item key={c.id} value={c.tag}>
                {c.label} {count}
              </Segmented.Item>
            );
          })}
        </Segmented>

        <Radio.Group
          value={sortOrder}
          onValueChange={(v) => setSortOrder(v as typeof sortOrder)}
          className="ml-auto w-auto grid-flow-col items-center"
        >
          <label className="inline-flex items-center gap-1">
            <Radio value="default" id="sort-default" />
            <span style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}>저장순</span>
          </label>
          <label className="inline-flex items-center gap-1">
            <Radio value="short" id="sort-short" />
            <span style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}>짧은 순</span>
          </label>
          <label className="inline-flex items-center gap-1">
            <Radio value="long" id="sort-long" />
            <span style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}>긴 순</span>
          </label>
        </Radio.Group>

        <Input
          value={query}
          onChange={(event) => { setQuery(event.target.value); setPage(1); }}
          placeholder="제목, 출처, 태그 검색"
          aria-label="게시글 검색"
          className="min-w-48"
        />
        <Checkbox checked={showExcerpt} onCheckedChange={(checked) => setShowExcerpt(checked === true)}>
          요약 표시
        </Checkbox>
      </div>

      {view === "table" ? <div style={{ borderRadius: "var(--semantic-radius-container)", overflow: "hidden" }}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>글</Table.Head>
              <Table.Head>출처</Table.Head>
              <Table.Head>읽기 시간</Table.Head>
              <Table.Head>저장일</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows.map((a) => (
              <ClickableRow key={a.id} onClick={ => onOpen?.("reader", a.id)} className="cursor-pointer">
                <Table.Cell>
                  <Contextmenu
                    trigger={
                      <div className="flex min-w-0 items-center gap-2">
                        <img
                          src={TAG_IMAGE[a.tag]}
                          alt=""
                          aria-hidden
                          className="size-8 shrink-0 object-cover"
                          style={{ borderRadius: "var(--semantic-radius-control)" }}
                        />
                        <Tooltip content={a.title}>
                          <span className="truncate" style={{ maxWidth: "16rem" }}>{a.title}</span>
                        </Tooltip>
                        <Badge variant="subtle" tone={TAG_TONE[a.tag] ?? "neutral"}>{a.tag}</Badge>
                      </div>
                    }
                    items={[
                      { label: "지금 읽기", onSelect:  => onOpen?.("reader", a.id) },
                      { label: "컬렉션에 추가" },
                      { separator: true },
                      { label: "저장 취소", danger: true },
                    ]}
                  />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-col gap-0.5">
                    <span>{a.source}</span>
                    {showExcerpt ? <span className="line-clamp-1" style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>{a.excerpt}</span> : null}
                  </div>
                </Table.Cell>
                <Table.Cell className="tabular-nums">{a.minutes}분</Table.Cell>
                <Table.Cell>
                  <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{a.savedAt}</span>
                </Table.Cell>
              </ClickableRow>
            ))}
          </Table.Body>
        </Table>
      </div> : <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {rows.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={ => onOpen?.("reader", a.id)}
            className="flex overflow-hidden text-start"
            style={{
              background: "var(--component-card-bg)",
              border: "var(--semantic-border-width-default) solid var(--component-card-border)",
              borderRadius: "var(--component-card-radius)",
            }}
          >
            <img src={TAG_IMAGE[a.tag]} alt="" aria-hidden className="w-24 shrink-0 object-cover" />
            <span className="flex min-w-0 flex-col gap-2 p-3">
              <span className="flex items-center gap-2"><Badge variant="subtle" tone={TAG_TONE[a.tag] ?? "neutral"}>{a.tag}</Badge><span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>{a.savedAt}</span></span>
              <span className="line-clamp-2" style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}>{a.title}</span>
              {showExcerpt ? <span className="line-clamp-2" style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>{a.excerpt}</span> : null}
              <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>{a.source} · {a.minutes}분</span>
            </span>
          </button>
        ))}
      </div>}

      <Pagination page={page} total={3} onPage={setPage} />

      {/* 더 불러오기 버튼. 누르는 동안 스피너 표시, 아래는 스켈레톤으로 다음 행 모양 미리 표시 */}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={ => {
            setLoadingMore(true);
            window.setTimeout( => setLoadingMore(false), 900);
          }}
          disabled={loadingMore}
          className="inline-flex w-fit items-center gap-2 self-center px-3 py-1.5"
          style={{
            color: "var(--semantic-fg-neutral-subtle)",
            fontSize: "var(--semantic-text-body-sm)",
            borderRadius: "var(--semantic-radius-control)",
            border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          {loadingMore ? <Spinner label="불러오는 중" /> : "더 불러오기"}
        </button>
        {loadingMore ? (
          <div className="flex flex-col gap-2 px-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div
          className="flex flex-1 flex-col gap-3"
          style={{
            background: "var(--component-card-bg)",
            borderColor: "var(--component-card-border)",
            borderWidth: "var(--semantic-border-width-default)",
            borderStyle: "solid",
            borderRadius: "var(--component-card-radius)",
            padding: "var(--component-card-padding)",
          }}
        >
          <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
            태그별 저장 비율
          </span>
          <div className="flex flex-col gap-2">
            {COLLECTIONS.map((c) => {
              const count = ARTICLES.filter((a) => a.tag === c.tag).length;
              return (
                <div key={c.id} className="flex items-center gap-2">
                  <span className="w-14 shrink-0 truncate" style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-default)" }}>
                    {c.label}
                  </span>
                  <div className="h-2 flex-1 overflow-hidden" style={{ background: "var(--semantic-bg-neutral-subtle)", borderRadius: "var(--semantic-radius-control)" }}>
                    <div
                      className="h-full"
                      style={{
                        width: `${Math.round((count / MAX_TAG_COUNT) * 100)}%`,
                        background: `var(--semantic-bg-${TAG_TONE[c.tag] ?? "brand"}-default)`,
                        borderRadius: "var(--semantic-radius-control)",
                      }}
                    />
                  </div>
                  <span className="shrink-0 tabular-nums" style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>
                    {count}개
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="flex flex-1 flex-col gap-3"
          style={{
            background: "var(--component-card-bg)",
            borderColor: "var(--component-card-border)",
            borderWidth: "var(--semantic-border-width-default)",
            borderStyle: "solid",
            borderRadius: "var(--component-card-radius)",
            padding: "var(--component-card-padding)",
          }}
        >
          <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
            읽기 시간이 짧은 순
          </span>
          <Listrow.List>
            {quickReads.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={ => onOpen?.("reader", a.id)}
                className="w-full text-start"
              >
                <Listrow
                  lead={<Badge variant="outline" tone="neutral">{a.minutes}분</Badge>}
                  title={a.title}
                />
              </button>
            ))}
          </Listrow.List>
        </div>

        <div
          className="flex flex-1 flex-col gap-3"
          style={{
            background: "var(--component-card-bg)",
            borderColor: "var(--component-card-border)",
            borderWidth: "var(--semantic-border-width-default)",
            borderStyle: "solid",
            borderRadius: "var(--component-card-radius)",
            padding: "var(--component-card-padding)",
          }}
        >
          <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
            태그별 분포
          </span>
          <Chart config={TAG_RADAR_CONFIG} className="h-40 w-full">
            <RadarChart data={TAG_RADAR_DATA}>
              <PolarGrid />
              <PolarAngleAxis dataKey="tag" tick={{ fontSize: 11 }} />
              <Radar dataKey="count" stroke="var(--color-count)" fill="var(--color-count)" fillOpacity={0.4} />
            </RadarChart>
          </Chart>
        </div>
      </div>

      {/* 자주 묻는 질문, 다중 펼침 가능 */}
      <Accordion
        items={[
          {
            value: "delete",
            title: "저장한 글은 어디서 지우나요?",
            body: "글 목록의 각 줄을 우클릭하면 \"저장 취소\"로 지울 수 있어요.",
          },
          {
            value: "auto-collection",
            title: "컬렉션은 자동으로 만들어지나요?",
            body: "네, 글을 저장할 때 붙인 태그가 그대로 컬렉션이 돼요. 따로 만들 필요가 없어요.",
          },
        ]}
      />
    </div>
  );
}
