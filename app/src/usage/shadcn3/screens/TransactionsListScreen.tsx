import * as React from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { Select } from "../../../bases/shadcn/Select";
import { Table } from "../../../bases/shadcn/Table";
import type { ScreenProps } from "../screens";

function won(n: number): string {
  return `${n < 0 ? "-" : ""}₩${Math.abs(n).toLocaleString("ko-KR")}`;
}

// onClick은 공유 계약에 없음. 공유 계약 대신 이 파일에만 로컬로 추가한 것임
const ClickableRow = Table.Row as React.ComponentType<
  React.ComponentProps<"tr"> & { onClick?:  => void }
>;

export function TransactionsListScreen({ transactions, onOpen, query }: ScreenProps) {
  const categories = Array.from(new Set(transactions.map((t) => t.category)));
  const [category, setCategory] = React.useState<string>("all");
  const q = (query ?? "").trim.toLowerCase;

  const rows = transactions
    .filter((t) => category === "all" || t.category === category)
    .filter((t) => !q || t.title.toLowerCase.includes(q) || t.category.toLowerCase.includes(q))
    .slice
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <span style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-heading-md)" }}>거래 내역</span>
        <Select
          aria-label="카테고리 거르개"
          value={category}
          onValueChange={setCategory}
          size="sm"
          items={{ all: "전체 카테고리", ...Object.fromEntries(categories.map((c) => [c, c])) }}
        />
      </div>

      <div
        style={{
          background: "var(--component-card-bg)",
          borderColor: "var(--component-card-border)",
          borderWidth: "var(--semantic-border-width-default)",
          borderStyle: "solid",
          borderRadius: "var(--component-card-radius)",
          padding: "var(--component-card-padding)",
        }}
      >
        {rows.length === 0 ? (
          <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>
            조건에 맞는 거래가 없어요.
          </span>
        ) : (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>거래</Table.Head>
                <Table.Head>카테고리</Table.Head>
                <Table.Head>결제 수단</Table.Head>
                <Table.Head>날짜</Table.Head>
                <Table.Head className="text-end">금액</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {rows.map((t) => (
                <ClickableRow key={t.id} onClick={ => onOpen?.("detail", t.id)} className="cursor-pointer">
                  <Table.Cell>
                    <span className="flex items-center gap-2">
                      <span aria-hidden style={{ color: t.kind === "수입" ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-subtle)" }}>
                        {t.kind === "수입" ? <ArrowDownLeft size={13} /> : <ArrowUpRight size={13} />}
                      </span>
                      {t.title}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="subtle" tone="neutral">{t.category}</Badge>
                  </Table.Cell>
                  <Table.Cell>{t.method}</Table.Cell>
                  <Table.Cell>{t.date}</Table.Cell>
                  <Table.Cell className="text-end tabular-nums">
                    {t.kind === "수입" ? "+" : "-"}{won(t.amount)}
                  </Table.Cell>
                </ClickableRow>
              ))}
            </Table.Body>
          </Table>
        )}
      </div>
    </div>
  );
}
