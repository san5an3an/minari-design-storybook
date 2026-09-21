import * as React from "react";
import { Alert } from "../../../bases/shadcn/Alert";
import { Badge } from "../../../bases/shadcn/Badge";
import { Datatable } from "../../../bases/shadcn/Datatable";
import { Nativeselect } from "../../../bases/shadcn/Nativeselect";
import { Select } from "../../../bases/shadcn/Select";
import { Switch } from "../../../bases/shadcn/Switch";
import { Table } from "../../../bases/shadcn/Table";
import { ARTICLES, COLLECTIONS, TAG_IMAGE, TAG_TONE } from "../data";

const SORTS = { name: "이름순", count: "저장 많은 순" } as const;

export function CollectionsScreen {
  const [sort, setSort] = React.useState<keyof typeof SORTS>("name");
  const [dir, setDir] = React.useState<"asc" | "desc">("asc");
  const [hideEmpty, setHideEmpty] = React.useState(false);

  const withCount = COLLECTIONS.map((c) => {
    const items = ARTICLES.filter((a) => a.tag === c.tag);
    const avgMinutes = items.length
      ? Math.round(items.reduce((s, a) => s + a.minutes, 0) / items.length)
      : 0;
    return { ...c, count: items.length, avgMinutes };
  });
  const sorted = [...withCount].sort((a, b) =>
    sort === "count" ? b.count - a.count : a.label.localeCompare(b.label, "ko"),
  );
  if (dir === "desc") sorted.reverse;
  const shown = hideEmpty ? sorted.filter((c) => c.count > 0) : sorted;
  const emptyCount = withCount.filter((c) => c.count === 0).length;

  return (
    <div className="flex flex-col gap-4">
      {emptyCount > 0 ? (
        <Alert tone="warning" title="빈 컬렉션이 있어요">
          아직 저장한 글이 없는 컬렉션이 {emptyCount}개예요.
        </Alert>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* 라벨은 두 드롭다운 위에 하나만 배치. Select label prop 쓰면 높이 안 맞음 */}
        <div className="flex flex-col" style={{ gap: "var(--component-input-label-gap)" }}>
          <span style={{ color: "var(--component-input-label-fg)", fontSize: "var(--component-input-label-font-size)" }}>
            정렬
          </span>
          <div className="flex items-center gap-2">
            <Select
              items={SORTS}
              value={sort}
              onValueChange={(v) => setSort(v as keyof typeof SORTS)}
            />
            <Nativeselect
              aria-label="정렬 방향"
              value={dir}
              onChange={(e) => setDir(e.target.value as "asc" | "desc")}
            >
              <Nativeselect.Option value="asc">오름차순</Nativeselect.Option>
              <Nativeselect.Option value="desc">내림차순</Nativeselect.Option>
            </Nativeselect>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="hide-empty" checked={hideEmpty} onCheckedChange={setHideEmpty} />
          <label
            htmlFor="hide-empty"
            style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}
          >
            빈 컬렉션 숨기기
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {shown.map((c) => {
        const count = c.count;
        const tone = TAG_TONE[c.tag] ?? "brand";
        return (
          <div
            key={c.id}
            className="relative flex flex-col justify-end gap-1 overflow-hidden p-3"
            style={{
              // 상단 65% 유지, 하단 35% 어둡게 처리
              minHeight: "9rem",
              borderRadius: "var(--component-card-radius)",
              boxShadow: "var(--component-card-shadow)",
              backgroundImage:
                `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
                `color-mix(in oklch, var(--semantic-bg-${tone}-default) 25%, black) 100%), url("${TAG_IMAGE[c.tag]}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span
              className="flex-1"
              style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "var(--component-card-title-font-size)" }}
            >
              {c.label}
            </span>
            <Badge variant="solid" tone={tone}>{count}개</Badge>
          </div>
        );
      })}
      </div>

      <div style={{ borderRadius: "var(--semantic-radius-container)", overflow: "hidden" }}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>컬렉션</Table.Head>
              <Table.Head>글</Table.Head>
              <Table.Head>출처</Table.Head>
              <Table.Head>읽기 시간</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {shown.flatMap((c) =>
              ARTICLES.filter((a) => a.tag === c.tag).map((a) => (
                <Table.Row key={a.id}>
                  <Table.Cell>
                    <Badge variant="subtle" tone={TAG_TONE[c.tag] ?? "neutral"}>{c.label}</Badge>
                  </Table.Cell>
                  <Table.Cell className="truncate">{a.title}</Table.Cell>
                  <Table.Cell>{a.source}</Table.Cell>
                  <Table.Cell className="tabular-nums">{a.minutes}분</Table.Cell>
                </Table.Row>
              )),
            )}
          </Table.Body>
        </Table>
      </div>

      <div className="flex flex-col gap-2">
        <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
          컬렉션별 요약
        </span>
        <Datatable
          columns={[
            { key: "label", header: "컬렉션" },
            { key: "count", header: "글", numeric: true },
            { key: "avgMinutes", header: "평균 분", numeric: true },
          ]}
          rows={withCount.map((c) => ({ label: c.label, count: c.count, avgMinutes: c.avgMinutes }))}
          filterKey="label"
          filterPlaceholder="컬렉션 이름으로 거르기"
          pageSize={5}
        />
      </div>
    </div>
  );
}
