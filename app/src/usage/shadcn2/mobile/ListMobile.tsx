"use client";
import * as React from "react";
import { BookOpen, LayoutGrid, MoreHorizontal, Rows3, Search } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Accordion } from "../../../bases/shadcn/Accordion";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { Carousel } from "../../../bases/shadcn/Carousel";
import { Chart } from "../../../bases/shadcn/Chart";
import { Checkbox } from "../../../bases/shadcn/Checkbox";
import { Empty } from "../../../bases/shadcn/Empty";
import { Input } from "../../../bases/shadcn/Input";
import { Listrow } from "../../../bases/shadcn/Listrow";
import { Menu } from "../../../bases/shadcn/Menu";
import { Pagination } from "../../../bases/shadcn/Pagination";
import { Radio } from "../../../bases/shadcn/Radio";
import { Segmented } from "../../../bases/shadcn/Segmented";
import { Skeleton } from "../../../bases/shadcn/Skeleton";
import { Spinner } from "../../../bases/shadcn/Spinner";
import { Toolbar } from "../../../bases/shadcn/Toolbar";
import { TOUCH } from "../../shadcn/mobile/MobileShell";
import { ARTICLES, COLLECTIONS, TAG_IMAGE, TAG_TONE, type Article } from "../data";
import {
  MAX_TAG_COUNT, STAT_CHIPS, StatChip, TAG_RADAR_CONFIG, TAG_RADAR_DATA,
} from "../screens/ListScreen";
import type { ScreenProps } from "../screens";

// 아이콘 전용 버튼 크기 지정. 시스템 밀도 토큰이 작아도 터치 영역 44px 이상을 확보하기 위함
const ICON_BUTTON = { minWidth: TOUCH, minHeight: TOUCH, padding: 0 } as const;

const CARD = {
  background: "var(--component-card-bg)",
  border: "var(--semantic-border-width-default) solid var(--component-card-border)",
  borderRadius: "var(--component-card-radius)",
} as const;

/* 보조 줄 글자 크기를 본문 최소 0.875rem으로 고정. caption 토큰이 시스템에 따라 11px라 폰에서 읽기 어려움 */
const META = { fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-subtle)" } as const;
const TITLE = {
  fontSize: "var(--semantic-text-body)",
  lineHeight: "var(--semantic-line-height-tight)",
  color: "var(--semantic-fg-neutral-default)",
} as const;

const SORTS = [
  { value: "default", label: "저장순" },
  { value: "short", label: "짧은 순" },
  { value: "long", label: "긴 순" },
] as const;

// 화면 가장자리까지 넓힌 가로 스트립 정의. 의도한 가로 스크롤이라 data-allow-x 지정함
const RAIL = "-mx-(--semantic-space-md) overflow-x-auto px-(--semantic-space-md) pb-(--semantic-space-xs)";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 style={{ margin: 0, fontSize: "var(--semantic-text-body)", color: "var(--semantic-fg-neutral-default)" }}>{children}</h3>;
}

// 글 한 줄 표시. 오른쪽 ⋯ 버튼 메뉴가 데스크탑 우클릭 메뉴를 대신함
function ArticleRow({ a, showExcerpt, onOpen }: { a: Article; showExcerpt: boolean; onOpen: ScreenProps["onOpen"] }) {
  return (
    <li className="flex items-center" style={{ listStyle: "none", ...CARD }}>
      <button
        type="button"
        onClick={() => onOpen?.("reader", a.id)}
        className="flex min-w-0 flex-1 items-center gap-(--semantic-space-sm) p-(--semantic-space-sm) text-start"
        style={{ background: "transparent", border: 0, color: "inherit", cursor: "pointer" }}
      >
        <img
          src={TAG_IMAGE[a.tag]}
          alt=""
          aria-hidden
          className="size-16 shrink-0 object-cover"
          style={{ borderRadius: "var(--semantic-radius-control)" }}
        />
        <span className="flex min-w-0 flex-1 flex-col gap-(--semantic-space-xs)">
          <span className="flex min-w-0 items-center gap-(--semantic-space-sm)">
            <Badge variant="subtle" tone={TAG_TONE[a.tag] ?? "neutral"}>{a.tag}</Badge>
            <span className="truncate" style={META}>{a.savedAt}</span>
          </span>
          <span className="line-clamp-2" style={TITLE}>{a.title}</span>
          {showExcerpt ? <span className="line-clamp-1" style={META}>{a.excerpt}</span> : null}
          <span className="truncate tabular-nums" style={META}>{a.source} · {a.minutes}분</span>
        </span>
      </button>
      <Menu
        side="bottom"
        align="end"
        minWidth="11rem"
        trigger={
          <Button variant="plain" aria-label={`${a.title} 더보기`} style={ICON_BUTTON}>
            <MoreHorizontal size={18} aria-hidden />
          </Button>
        }
        items={[
          { label: "지금 읽기", onSelect: () => onOpen?.("reader", a.id) },
          { label: "컬렉션에 추가" },
          { separator: true },
          { label: "저장 취소", danger: true },
        ]}
      />
    </li>
  );
}

// 사진 카드 2열 표시. 사진은 위, 글은 아래에 둠
function ArticleCard({ a, showExcerpt, onOpen }: { a: Article; showExcerpt: boolean; onOpen: ScreenProps["onOpen"] }) {
  return (
    <li className="min-w-0" style={{ listStyle: "none" }}>
      <button
        type="button"
        onClick={() => onOpen?.("reader", a.id)}
        className="flex h-full w-full flex-col overflow-hidden text-start"
        style={{ ...CARD, cursor: "pointer" }}
      >
        <img src={TAG_IMAGE[a.tag]} alt="" aria-hidden className="h-24 w-full shrink-0 object-cover" />
        <span className="flex min-w-0 flex-1 flex-col gap-(--semantic-space-xs) p-(--semantic-space-sm)">
          <span className="flex min-w-0 items-center gap-(--semantic-space-xs)">
            <Badge variant="subtle" tone={TAG_TONE[a.tag] ?? "neutral"}>{a.tag}</Badge>
            <span className="truncate" style={META}>{a.savedAt}</span>
          </span>
          <span className="line-clamp-2" style={TITLE}>{a.title}</span>
          {showExcerpt ? <span className="line-clamp-2" style={META}>{a.excerpt}</span> : null}
          <span className="mt-auto truncate pt-(--semantic-space-xs) tabular-nums" style={META}>{a.source} · {a.minutes}분</span>
        </span>
      </button>
    </li>
  );
}

export function ListMobile({ onOpen }: ScreenProps) {
  const [filter, setFilter] = React.useState<string[]>(["전체"]);
  const [sortOrder, setSortOrder] = React.useState<"default" | "short" | "long">("default");
  const [view, setView] = React.useState<"table" | "grid">("table");
  const [query, setQuery] = React.useState("");
  const [showExcerpt, setShowExcerpt] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [loadingMore, setLoadingMore] = React.useState(false);
  const active = filter[0] ?? "전체";
  const filtered = (active === "전체" ? ARTICLES : ARTICLES.filter((a) => a.tag === active)).filter((a) =>
    `${a.title} ${a.source} ${a.tag}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );
  const rows = [...filtered].sort((a, b) => {
    if (sortOrder === "short") return a.minutes - b.minutes;
    if (sortOrder === "long") return b.minutes - a.minutes;
    return 0;
  });
  const quickReads = [...ARTICLES].sort((a, b) => a.minutes - b.minutes).slice(0, 3);

  const toggleStyle = (on: boolean): React.CSSProperties => ({
    color: on ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-subtle)",
  });

  return (
    <div className="flex flex-col gap-(--semantic-space-lg)">
      <div className="flex items-start justify-between gap-(--semantic-space-sm)">
        <div className="flex min-w-0 flex-col gap-(--semantic-space-xs)">
          <h2 style={{ margin: 0, fontSize: "var(--semantic-text-heading)", lineHeight: "var(--semantic-line-height-tight)", color: "var(--semantic-fg-neutral-default)" }}>
            읽기 게시판
          </h2>
          <p style={{ margin: 0, ...META }}>
            {ARTICLES.length}개의 읽을거리를 {COLLECTIONS.length}개 주제로 정리했어요.
          </p>
        </div>
        <Toolbar>
          <button
            type="button"
            aria-label="목록으로 보기"
            aria-pressed={view === "table"}
            onClick={() => setView("table")}
            className="inline-flex size-11 items-center justify-center"
            style={toggleStyle(view === "table")}
          >
            <Rows3 size={18} aria-hidden />
          </button>
          <Toolbar.Separator />
          <button
            type="button"
            aria-label="카드로 보기"
            aria-pressed={view === "grid"}
            onClick={() => setView("grid")}
            className="inline-flex size-11 items-center justify-center"
            style={toggleStyle(view === "grid")}
          >
            <LayoutGrid size={18} aria-hidden />
          </button>
        </Toolbar>
      </div>

      <div
        className="flex items-center justify-between gap-(--semantic-space-sm) p-(--semantic-space-sm)"
        style={{
          background: "var(--semantic-bg-brand-subtle)",
          border: "var(--semantic-border-width-default) solid var(--semantic-border-brand-subtle)",
          borderRadius: "var(--semantic-radius-container)",
        }}
      >
        <span className="flex min-w-0 items-start gap-(--semantic-space-sm)" style={{ color: "var(--semantic-fg-brand-default)", fontSize: "var(--semantic-text-body-sm)" }}>
          <BookOpen size={16} aria-hidden className="mt-0.5 shrink-0" />
          <span className="min-w-0 text-balance">공지 · 관심 있는 글을 저장하고, 컬렉션으로 다시 찾아보세요.</span>
        </span>
        <Badge variant="subtle" tone="brand">고정</Badge>
      </div>

      {/* 찾기 입력과 필터를 세로로 한 칸씩 배치 */}
      <div className="flex flex-col gap-(--semantic-space-sm)">
        <Input
          value={query}
          onChange={(event) => { setQuery(event.target.value); setPage(1); }}
          placeholder="제목, 출처, 태그 검색"
          aria-label="게시글 검색"
        />
        {/* 태그 칩을 가로 스트립으로 배치. 여섯 칸이 화면 폭을 넘기 때문임 */}
        <div data-allow-x className={RAIL}>
          <Segmented className="w-max" value={filter} onValueChange={(v) => setFilter(v.length ? v : ["전체"])}>
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
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-(--semantic-space-md)">
          <Radio.Group
            value={sortOrder}
            onValueChange={(v) => setSortOrder(v as typeof sortOrder)}
            className="w-auto grid-flow-col items-center gap-x-(--semantic-space-sm)"
          >
            {SORTS.map((s) => (
              <label key={s.value} className="inline-flex min-h-11 items-center gap-(--semantic-space-xs)">
                <Radio value={s.value} id={`m-sort-${s.value}`} />
                <span style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}>{s.label}</span>
              </label>
            ))}
          </Radio.Group>
          <label className="inline-flex min-h-11 items-center gap-(--semantic-space-xs)">
            <Checkbox id="m-excerpt" checked={showExcerpt} onCheckedChange={(checked) => setShowExcerpt(checked === true)} />
            <span style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}>요약 표시</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-(--semantic-space-sm)">
        <span style={META}>{rows.length}개의 글</span>
        {rows.length === 0 ? (
          <Empty>
            <Empty.Header>
              <Empty.Media variant="icon"><Search size={18} aria-hidden /></Empty.Media>
              <Empty.Title>찾은 글이 없어요</Empty.Title>
              <Empty.Description>다른 낱말이나 태그로 찾아보세요.</Empty.Description>
            </Empty.Header>
          </Empty>
        ) : view === "table" ? (
          <ul className="m-0 flex flex-col gap-(--semantic-space-sm) p-0">
            {rows.map((a) => <ArticleRow key={a.id} a={a} showExcerpt={showExcerpt} onOpen={onOpen} />)}
          </ul>
        ) : (
          <ul className="m-0 grid grid-cols-2 gap-(--semantic-space-sm) p-0">
            {rows.map((a) => <ArticleCard key={a.id} a={a} showExcerpt={showExcerpt} onOpen={onOpen} />)}
          </ul>
        )}
      </div>

      <div className="flex flex-col items-center gap-(--semantic-space-md)">
        <Pagination page={page} total={3} onPage={setPage} />
        {/* 더 불러오기 버튼 배치. 누르는 동안 Spinner, 그 아래 Skeleton으로 다음 줄 모양을 보여 줌 */}
        <Button
          variant="outline"
          tone="neutral"
          disabled={loadingMore}
          onClick={() => {
            setLoadingMore(true);
            window.setTimeout(() => setLoadingMore(false), 900);
          }}
          style={{ width: "100%", minHeight: TOUCH }}
        >
          {loadingMore ? <Spinner label="불러오는 중" /> : "더 불러오기"}
        </Button>
        {loadingMore ? (
          <div className="flex w-full flex-col gap-(--semantic-space-sm) px-(--semantic-space-xs)">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : null}
      </div>

      {/* 이번 주 추천을 앞뒤 버튼 없이 밀어서 넘기는 Carousel로 표시 */}
      <div className="flex flex-col gap-(--semantic-space-sm)">
        <SectionTitle>이번 주 추천 · 짧게 읽기</SectionTitle>
        <div data-allow-x>
          <Carousel opts={{ align: "start" }} className="w-full">
            <Carousel.Content>
              {quickReads.map((a) => (
                <Carousel.Item key={a.id} aria-label={a.title} className="basis-3/4">
                  <button
                    type="button"
                    onClick={() => onOpen?.("reader", a.id)}
                    className="flex h-full w-full flex-col overflow-hidden text-start"
                    style={{ ...CARD, cursor: "pointer" }}
                  >
                    <img src={TAG_IMAGE[a.tag]} alt="" aria-hidden className="h-24 w-full object-cover" />
                    <span className="flex min-w-0 flex-col gap-(--semantic-space-xs) p-(--semantic-space-sm)">
                      <span className="line-clamp-2" style={TITLE}>{a.title}</span>
                      <span><Badge variant="outline" tone="neutral">{a.minutes}분</Badge></span>
                    </span>
                  </button>
                </Carousel.Item>
              ))}
            </Carousel.Content>
          </Carousel>
        </div>
      </div>

      {/* 컬렉션 표지를 가로 스트립으로 표시 */}
      <div className="flex flex-col gap-(--semantic-space-sm)">
        <SectionTitle>컬렉션</SectionTitle>
        <div data-allow-x className={`flex gap-(--semantic-space-sm) ${RAIL}`}>
          {COLLECTIONS.map((c) => (
            <div
              key={c.id}
              className="relative flex shrink-0 flex-col justify-end overflow-hidden p-(--semantic-space-sm)"
              style={{
                width: "9rem",
                height: "7rem",
                borderRadius: "var(--semantic-radius-container)",
                boxShadow: "var(--semantic-shadow-raised)",
                backgroundImage:
                  `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
                  `color-mix(in oklch, var(--semantic-bg-${TAG_TONE[c.tag] ?? "brand"}-default) 25%, black) 100%), url("${TAG_IMAGE[c.tag]}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "var(--semantic-text-body-sm)" }}>{c.label}</span>
              <span className="tabular-nums" style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.85, fontSize: "var(--semantic-text-body-sm)" }}>
                {ARTICLES.filter((a) => a.tag === c.tag).length}개
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 통계 카드를 2 × 2 격자로 배치 */}
      <div className="grid grid-cols-2 gap-(--semantic-space-sm)">
        {STAT_CHIPS.map((s) => <StatChip key={s.label} spec={s} />)}
      </div>

      {/* 분포, 짧은 순 카드 세 장을 한 줄씩 쌓아 배치 */}
      <div className="flex flex-col gap-(--semantic-space-md)">
        <div className="flex flex-col gap-(--semantic-space-sm)" style={{ ...CARD, padding: "var(--component-card-padding)" }}>
          <SectionTitle>태그별 저장 비율</SectionTitle>
          <div className="flex flex-col gap-(--semantic-space-sm)">
            {COLLECTIONS.map((c) => {
              const count = ARTICLES.filter((a) => a.tag === c.tag).length;
              return (
                <div key={c.id} className="flex items-center gap-(--semantic-space-sm)">
                  <span className="w-16 shrink-0 truncate" style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}>
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
                  <span className="shrink-0 tabular-nums" style={META}>{count}개</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-(--semantic-space-sm)" style={{ ...CARD, padding: "var(--component-card-padding)" }}>
          <SectionTitle>읽기 시간이 짧은 순</SectionTitle>
          <Listrow.List>
            {quickReads.map((a) => (
              <button key={a.id} type="button" onClick={() => onOpen?.("reader", a.id)} className="w-full text-start">
                <Listrow lead={<Badge variant="outline" tone="neutral">{a.minutes}분</Badge>} title={a.title} />
              </button>
            ))}
          </Listrow.List>
        </div>

        <div className="flex flex-col gap-(--semantic-space-sm)" style={{ ...CARD, padding: "var(--component-card-padding)" }}>
          <SectionTitle>태그별 분포</SectionTitle>
          <Chart config={TAG_RADAR_CONFIG} className="h-44 w-full">
            <RadarChart data={TAG_RADAR_DATA}>
              <PolarGrid />
              <PolarAngleAxis dataKey="tag" tick={{ fontSize: "0.75rem" }} />
              <Radar dataKey="count" stroke="var(--color-count)" fill="var(--color-count)" fillOpacity={0.4} />
            </RadarChart>
          </Chart>
        </div>
      </div>

      {/* 자주 묻는 질문 표시. 문구 중 우클릭만 폰의 ⋯ 버튼으로 바꿈 */}
      <Accordion
        items={[
          {
            value: "delete",
            title: "저장한 글은 어디서 지우나요?",
            body: "글 목록의 각 줄 오른쪽 ⋯ 단추를 눌러 \"저장 취소\"로 지울 수 있어요.",
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
