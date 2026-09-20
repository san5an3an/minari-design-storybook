import { Progress } from "../../../bases/standalone/Progress";
import { Table } from "../../../bases/standalone/Table";
import { Badge } from "../../../bases/standalone/Badge";

interface CategoryRow {
  name: string;
  skuCount: number;
  totalStock: number;
  lowStock: number;
  fillPct: number;
}

const ROWS: CategoryRow[] = [
  { name: "전자기기", skuCount: 4, totalStock: 119, lowStock: 2, fillPct: 68 },
  { name: "가구", skuCount: 3, totalStock: 39, lowStock: 1, fillPct: 42 },
  { name: "문구", skuCount: 3, totalStock: 80, lowStock: 1, fillPct: 85 },
  { name: "소모품", skuCount: 2, totalStock: 63, lowStock: 1, fillPct: 57 },
];

export function CategoriesScreen {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.4fr]">
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {ROWS.map((r) => (
          <div key={r.name} style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
              <span style={{ fontWeight: 600 }}>{r.name}</span>
              <span className="text-sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>SKU {r.skuCount}종</span>
            </div>
            <Progress value={r.fillPct} showValue label="재고 적정 수준 대비" />
          </div>
        ))}
      </div>

      <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
        <div style={{ fontWeight: 600, marginBottom: "0.6rem" }}>분류별 요약</div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>분류</Table.Head>
              <Table.Head>SKU 수</Table.Head>
              <Table.Head>총 재고</Table.Head>
              <Table.Head>부족 품목</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {ROWS.map((r) => (
              <Table.Row key={r.name}>
                <Table.Cell>{r.name}</Table.Cell>
                <Table.Cell>{r.skuCount}</Table.Cell>
                <Table.Cell>{r.totalStock}개</Table.Cell>
                <Table.Cell>
                  {r.lowStock > 0 ? <Badge tone="warning">{r.lowStock}건</Badge> : "0건"}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
