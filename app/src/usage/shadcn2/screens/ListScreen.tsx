import * as React from "react";
import { BookMarked, BookOpen, Clock, Info, Layers } from "lucide-react";
import { Avatar } from "../../../bases/shadcn/Avatar";
import { Badge } from "../../../bases/shadcn/Badge";
import { Popover } from "../../../bases/shadcn/Popover";
import { Segmented } from "../../../bases/shadcn/Segmented";
import { Table } from "../../../bases/shadcn/Table";
import { Tooltip } from "../../../bases/shadcn/Tooltip";
import { ARTICLES, COLLECTIONS } from "../data";
import type { ScreenProps } from "../screens";

const MAX_TAG_COUNT = Math.max(...COLLECTIONS.map((c) => ARTICLES.filter((a) => a.tag === c.tag).length), 1);

const TOTAL_MINUTES = ARTICLES.reduce((sum, a) => sum + a.minutes, 0);
const AVG_MINUTES = Math.round(TOTAL_MINUTES / ARTICLES.length);
const SOURCE_COUNT = new Set(ARTICLES.map((a) => a.source)).size;

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
  const active = filter[0] ?? "전체";
  const rows = active === "전체" ? ARTICLES : ARTICLES.filter((a) => a.tag === active);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STAT_CHIPS.map((s) => (
          <StatChip key={s.label} spec={s} />
        ))}
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
      </div>

      <div style={{ borderRadius: "var(--semantic-radius-container)", overflow: "hidden" }}>
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
              <Table.Row key={a.id}>
                <Table.Cell>
                  <button
                    type="button"
                    onClick={ => onOpen?.("reader", a.id)}
                    className="flex min-w-0 items-center gap-2 text-start"
                  >
                    <Avatar size="sm" fallback={a.source.slice(0, 1)} />
                    <Tooltip content={a.title}>
                      <span className="truncate" style={{ maxWidth: "16rem" }}>{a.title}</span>
                    </Tooltip>
                    <Badge variant="subtle" tone="neutral">{a.tag}</Badge>
                  </button>
                  <Popover
                    trigger={
                      <button
                        type="button"
                        aria-label="발췌 미리보기"
                        className="ms-1 inline-flex size-5 shrink-0 items-center justify-center align-middle"
                        style={{ color: "var(--semantic-fg-neutral-subtle)" }}
                      >
                        <Info size={13} />
                      </button>
                    }
                    title={a.title}
                    description={a.excerpt}
                  />
                </Table.Cell>
                <Table.Cell>{a.source}</Table.Cell>
                <Table.Cell className="tabular-nums">{a.minutes}분</Table.Cell>
                <Table.Cell>
                  <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{a.savedAt}</span>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
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
                        background: "var(--semantic-bg-brand-default)",
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
          <div className="flex flex-col gap-1">
            {[...ARTICLES].sort((a, b) => a.minutes - b.minutes).slice(0, 3).map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={ => onOpen?.("reader", a.id)}
                className="flex items-center gap-2 rounded-[var(--semantic-radius-control)] px-1 py-1.5 text-start transition-colors hover:bg-[var(--component-card-bg-hover)]"
              >
                <Badge variant="outline" tone="neutral">{a.minutes}분</Badge>
                <span className="min-w-0 flex-1 truncate" style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-default)" }}>
                  {a.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
