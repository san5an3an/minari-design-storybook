import * as React from "react";
import { Folder } from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { Select } from "../../../bases/shadcn/Select";
import { Switch } from "../../../bases/shadcn/Switch";
import { Table } from "../../../bases/shadcn/Table";
import { ARTICLES, COLLECTIONS } from "../data";

const SORTS = { name: "이름순", count: "저장 많은 순" } as const;

export function CollectionsScreen {
  const [sort, setSort] = React.useState<keyof typeof SORTS>("name");
  const [hideEmpty, setHideEmpty] = React.useState(false);

  const withCount = COLLECTIONS.map((c) => ({
    ...c,
    count: ARTICLES.filter((a) => a.tag === c.tag).length,
  }));
  const sorted = [...withCount].sort((a, b) =>
    sort === "count" ? b.count - a.count : a.label.localeCompare(b.label, "ko"),
  );
  const shown = hideEmpty ? sorted.filter((c) => c.count > 0) : sorted;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Select
          items={SORTS}
          value={sort}
          onValueChange={(v) => setSort(v as keyof typeof SORTS)}
          label="정렬"
        />
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
        return (
          <div
            key={c.id}
            className="flex items-center gap-3"
            style={{
              background: "var(--component-card-bg)",
              borderColor: "var(--component-card-border)",
              borderWidth: "var(--semantic-border-width-default)",
              borderStyle: "solid",
              borderRadius: "var(--component-card-radius)",
              boxShadow: "var(--component-card-shadow)",
              padding: "var(--component-card-padding)",
            }}
          >
            <span
              aria-hidden
              className="flex size-9 shrink-0 items-center justify-center"
              style={{
                background: "var(--semantic-bg-brand-subtle)",
                color: "var(--semantic-fg-brand-default)",
                borderRadius: "var(--semantic-radius-control)",
              }}
            >
              <Folder size={16} />
            </span>
            <span
              className="flex-1"
              style={{ color: "var(--component-card-title-fg)", fontSize: "var(--component-card-title-font-size)" }}
            >
              {c.label}
            </span>
            <Badge variant="outline" tone="neutral">{count}개</Badge>
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
                    <Badge variant="subtle" tone="neutral">{c.label}</Badge>
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
    </div>
  );
}
