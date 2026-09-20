import * as React from "react";
import { Breadcrumb, BreadcrumbItem, Button, Select, SelectItem, Tag, TextInput, Tile } from "@carbon/react";
import { ArrowLeft } from "@carbon/icons-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PURCHASE_ORDERS, type PurchaseOrder } from "../data";

// 발주번호/품목 검색 TextInput과 공급업체 필터 Select 추가

type TagColor = "red" | "magenta" | "purple" | "blue" | "cyan" | "teal" | "green" | "gray";

const STATUS_TAG: Record<PurchaseOrder["status"], TagColor> = {
  발주완료: "blue",
  입고대기: "magenta",
  입고완료: "green",
};

// 통계카드와 미니 막대그래프를 목록 위에 추가
const STATUS_ORDER: PurchaseOrder["status"][] = ["발주완료", "입고대기", "입고완료"];

function OrderDetail({ order, onBack }: { order: PurchaseOrder; onBack:  => void }) {
  return (
    <div className="flex flex-col gap-4">
      {/* 상세 화면 네비게이션 */}
      <Breadcrumb noTrailingSlash>
        <BreadcrumbItem href="#" onClick={(e: React.MouseEvent) => { e.preventDefault; onBack; }}>
          발주 목록
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>{order.poNumber}</BreadcrumbItem>
      </Breadcrumb>
      <Button kind="ghost" size="sm" renderIcon={ArrowLeft} onClick={onBack} style={{ alignSelf: "flex-start" }}>
        목록으로
      </Button>
      <Tile>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span style={{ fontWeight: 600 }}>{order.poNumber}</span>
            <Tag size="sm" type={STATUS_TAG[order.status]}>{order.status}</Tag>
          </div>
          <span>{order.item}</span>
          <span style={{ fontSize: "1.125rem", fontWeight: 600 }}>{order.amount.toLocaleString}원</span>
          <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>
            공급업체: {order.supplier} · {order.dateLabel}
          </span>
        </div>
      </Tile>
      <Tile>
        <span style={{ fontWeight: 600, fontSize: "0.8125rem" }}>메모</span>
        <p style={{ marginTop: 4 }}>{order.memo}</p>
      </Tile>
    </div>
  );
}

export function OrdersScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const [supplierFilter, setSupplierFilter] = React.useState("전체");
  const selected = PURCHASE_ORDERS.find((o) => o.id === selectedId) ?? null;

  if (selected) {
    return <OrderDetail order={selected} onBack={ => setSelectedId(null)} />;
  }

  const bySupplier = Object.entries(
    PURCHASE_ORDERS.reduce<Record<string, number>>((acc, o) => {
      acc[o.supplier] = (acc[o.supplier] ?? 0) + 1;
      return acc;
    }, {}),
  ).map(([name, value]) => ({ name, value }));
  const totalAmount = PURCHASE_ORDERS.reduce((s, o) => s + o.amount, 0);
  const suppliers = [...new Set(PURCHASE_ORDERS.map((o) => o.supplier))];
  const filtered = PURCHASE_ORDERS.filter(
    (o) =>
      (supplierFilter === "전체" || o.supplier === supplierFilter) &&
      (query === "" || o.poNumber.includes(query) || o.item.includes(query)),
  );

  return (
    <div className="flex flex-col gap-4">
      {/* 검색과 공급업체 필터 컨트롤 추가 */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "2fr 1fr" }}>
        <TextInput
          id="order-search" labelText="발주 검색" placeholder="발주번호 또는 품목"
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <Select id="supplier-filter" labelText="공급업체" value={supplierFilter} onChange={(e) => setSupplierFilter(e.target.value)}>
          <SelectItem value="전체" text="전체" />
          {suppliers.map((s) => <SelectItem key={s} value={s} text={s} />)}
        </Select>
      </div>

      {/* 작은 통계카드 */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))" }}>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>전체 발주</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{PURCHASE_ORDERS.length}건</div></Tile>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>총 금액</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{totalAmount.toLocaleString}원</div></Tile>
        {STATUS_ORDER.map((s) => (
          <Tile key={s}>
            <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>{s}</div>
            <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{PURCHASE_ORDERS.filter((o) => o.status === s).length}건</div>
          </Tile>
        ))}
      </div>

      {/* 미니 막대그래프 둘 */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
        <Tile>
          <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>상태별</div>
          <div style={{ inlineSize: "100%", blockSize: 100 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={STATUS_ORDER.map((s) => ({ name: s, value: PURCHASE_ORDERS.filter((o) => o.status === s).length }))} layout="vertical" margin={{ left: 8 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={56} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Tile>
        <Tile>
          <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>공급업체별</div>
          <div style={{ inlineSize: "100%", blockSize: 100 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bySupplier} layout="vertical" margin={{ left: 8 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={64} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="value" fill="var(--component-chart-series-2)" radius={[0, 4, 4, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Tile>
      </div>

    <div className="flex flex-col gap-2">
      {filtered.map((order) => (
        <Tile key={order.id} className="cursor-pointer" onClick={ => setSelectedId(order.id)}>
          <div className="flex items-center gap-3">
            <Tag size="sm" type={STATUS_TAG[order.status]}>{order.status}</Tag>
            <span style={{ fontWeight: 600 }}>{order.poNumber}</span>
            <span style={{ flex: 1, fontSize: "0.8125rem", opacity: 0.7 }}>{order.item}</span>
            <span style={{ fontSize: "0.8125rem" }}>{order.amount.toLocaleString}원</span>
          </div>
        </Tile>
      ))}
    </div>
    </div>
  );
}
