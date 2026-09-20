import * as React from "react";
import { Boxes, ClipboardList, PackageX, Percent } from "lucide-react";
import { Progress } from "../../../bases/standalone/Progress";
import { Table } from "../../../bases/standalone/Table";
import { Badge } from "../../../bases/standalone/Badge";
import { Stat } from "../../../bases/standalone/Stat";
import { Breadcrumb } from "../../../bases/standalone/Breadcrumb";
import { Accordion } from "../../../bases/standalone/Accordion";

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

const CATEGORY_META: Record<string, { desc: string; reorderAt: number; lastRestock: string }> = {
  전자기기: { desc: "단가가 높고 파손 위험이 커서 재주문 리드타임을 넉넉히 잡아요.", reorderAt: 10, lastRestock: "09-16" },
  가구: { desc: "부피가 커서 한 번에 소량만 입고돼요. 재고 적정 수준을 낮게 잡았어요.", reorderAt: 5, lastRestock: "09-14" },
  문구: { desc: "회전이 빨라 매주 소진량을 확인해요. 적정 수준 미달이면 바로 재주문해요.", reorderAt: 15, lastRestock: "09-18" },
  소모품: { desc: "정기 구독 발주로 채워요. 부족분은 다음 정기 발주에 자동 반영돼요.", reorderAt: 20, lastRestock: "09-13" },
};

export function CategoriesScreen {
  const [active, setActive] = React.useState(ROWS[0].name);

  const totalSku = ROWS.reduce((s, r) => s + r.skuCount, 0);
  const totalStock = ROWS.reduce((s, r) => s + r.totalStock, 0);
  const totalLow = ROWS.reduce((s, r) => s + r.lowStock, 0);
  const avgFill = Math.round(ROWS.reduce((s, r) => s + r.fillPct, 0) / ROWS.length);

  const STATS = [
    { label: "총 SKU", value: `${totalSku}종`, icon: Boxes },
    { label: "총 재고", value: `${totalStock}개`, icon: ClipboardList },
    { label: "부족 품목", value: `${totalLow}건`, icon: PackageX },
    { label: "평균 충족률", value: `${avgFill}%`, icon: Percent },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <style>{`
        .sa2-ct-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
        .sa2-ct-cards { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.75rem; }
        @container sa2 (min-width: 40rem) { .sa2-ct-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
        @container sa2 (min-width: 34rem) { .sa2-ct-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      `}</style>

      <div className="sa2-ct-stats">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", borderRadius: "var(--semantic-radius-control)", background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }}>
                  <Icon size={14} aria-hidden />
                </span>
              </div>
              <Stat label={s.label} value={s.value} />
            </div>
          );
        })}
      </div>

      <Breadcrumb items={[{ label: "전체 창고" }, { label: "분류별 현황" }]} />

      {/* button aria-pressed 직접 구현. Card는 클릭 표면으로 쓸 수 없음 */}
      <div className="sa2-ct-cards">
        {ROWS.map((r) => {
          const isActive = r.name === active;
          return (
            <button
              key={r.name}
              type="button"
              onClick={ => setActive(r.name)}
              aria-pressed={isActive}
              style={{
                textAlign: "left", cursor: "pointer", font: "inherit",
                border: `var(--semantic-border-width-default) solid ${isActive ? "var(--semantic-border-brand-strong)" : "var(--semantic-border-neutral-subtle)"}`,
                background: isActive ? "var(--semantic-bg-brand-subtlest)" : "transparent",
                borderRadius: "var(--semantic-radius-container)",
                padding: "0.9rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <span style={{ fontWeight: 600 }}>{r.name}</span>
                <span className="text-sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>SKU {r.skuCount}종</span>
              </div>
              <Progress value={r.fillPct} showValue label="재고 적정 수준 대비" />
            </button>
          );
        })}
      </div>

      {/* key로 강제 재마운트 처리 */}
      <Accordion
        key={active}
        defaultValue={[active]}
        items={ROWS.map((r) => ({
          value: r.name,
          title: (
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {r.name}
              {r.lowStock > 0 && <Badge tone="warning">부족 {r.lowStock}건</Badge>}
            </span>
          ),
          body: (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", fontSize: "0.8125rem" }}>
              <p style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{CATEGORY_META[r.name]?.desc}</p>
              <span>재주문 기준 재고: {CATEGORY_META[r.name]?.reorderAt}개 미만</span>
              <span>최근 입고일: {CATEGORY_META[r.name]?.lastRestock}</span>
            </div>
          ),
        }))}
      />

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
