"use client";
import * as React from "react";
import { Search, SearchX } from "lucide-react";
import { Card } from "../../../bases/shadcn/Card";
import { Empty } from "../../../bases/shadcn/Empty";
import { Input } from "../../../bases/shadcn/Input";
import { Select } from "../../../bases/shadcn/Select";
import type { MobileScreenProps } from "../screens";
import { RowList, TxRow } from "./parts";

export function TransactionsListMobile({ transactions, onOpen, query, onQueryChange }: MobileScreenProps) {
  const categories = Array.from(new Set(transactions.map((t) => t.category)));
  const [category, setCategory] = React.useState<string>("all");
  const q = (query ?? "").trim().toLowerCase();

  const rows = transactions
    .filter((t) => category === "all" || t.category === category)
    .filter((t) => !q || t.title.toLowerCase().includes(q) || t.category.toLowerCase().includes(q))
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const dates = Array.from(new Set(rows.map((t) => t.date)));

  return (
    <div className="flex flex-col">
      {/* 검색창과 카테고리 Select 상단 고정. 배경을 칠해 뒤로 지나가는 줄이 비치지 않게 함 */}
      <div
        className="sticky top-0 z-10 flex flex-col gap-(--semantic-space-sm) p-(--semantic-space-md)"
        style={{ background: "var(--semantic-bg-neutral-surface)" }}
      >
        <span className="relative flex items-center">
          <Search
            size={16}
            aria-hidden
            className="pointer-events-none absolute left-3"
            style={{ color: "var(--semantic-fg-neutral-subtle)" }}
          />
          <Input
            aria-label="거래 검색"
            placeholder="거래·카테고리 검색…"
            value={query ?? ""}
            onChange={(e) => onQueryChange(e.target.value)}
            style={{ width: "100%", paddingLeft: "var(--semantic-space-xl)" }}
          />
        </span>
        <div className="flex items-center justify-between gap-(--semantic-space-sm)">
          <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>
            {rows.length}건
          </span>
          <Select
            aria-label="카테고리 거르개"
            value={category}
            onValueChange={setCategory}
            size="sm"
            items={{ all: "전체 카테고리", ...Object.fromEntries(categories.map((c) => [c, c])) }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-(--semantic-space-md) px-(--semantic-space-md) pb-(--semantic-space-md)">
        {rows.length === 0 ? (
          <Empty>
            <Empty.Header>
              <Empty.Media variant="icon"><SearchX aria-hidden /></Empty.Media>
              <Empty.Title>조건에 맞는 거래가 없어요</Empty.Title>
              <Empty.Description>검색어나 카테고리를 바꿔 보세요.</Empty.Description>
            </Empty.Header>
          </Empty>
        ) : dates.map((date) => (
          <section key={date} className="flex flex-col gap-(--semantic-space-xs)">
            <h2 className="m-0" style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)", fontWeight: 400 }}>
              {date}
            </h2>
            <Card>
              <RowList>
                {rows.filter((t) => t.date === date).map((t) => (
                  <TxRow key={t.id} t={t} onOpen={(id) => onOpen?.("detail", id)} />
                ))}
              </RowList>
            </Card>
          </section>
        ))}
      </div>
    </div>
  );
}
