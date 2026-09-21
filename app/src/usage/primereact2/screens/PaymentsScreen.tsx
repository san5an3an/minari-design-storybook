import * as React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Divider } from "primereact/divider";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { Panel } from "primereact/panel";
import { Toast } from "primereact/toast";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip as RTooltip, XAxis } from "recharts";

interface Payment { member: string; item: string; amountNum: number; amount: string; date: string; status: "결제 완료" | "환불"; method: string; orderId: string; refundReason?: string }

type PlanFamily = "프리미엄" | "PT" | "베이직";

const PAYMENTS: Payment[] = [
  { member: "한지우", item: "프리미엄 3개월", amountNum: 270000, amount: "270,000원", date: "09-01", status: "결제 완료", method: "카드 국민 •••• 4821", orderId: "#OD-9931" },
  { member: "김서연", item: "PT 10회권", amountNum: 800000, amount: "800,000원", date: "07-15", status: "결제 완료", method: "카드 신한 •••• 1190", orderId: "#OD-9902" },
  { member: "박도윤", item: "베이직 1개월", amountNum: 60000, amount: "60,000원", date: "09-10", status: "환불", method: "카드 국민 •••• 4821", orderId: "#OD-9928", refundReason: "회원 단순 변심" },
  { member: "이하은", item: "프리미엄 6개월", amountNum: 480000, amount: "480,000원", date: "03-11", status: "결제 완료", method: "카드 하나 •••• 3370", orderId: "#OD-9814" },
  { member: "정서준", item: "PT 10회권", amountNum: 800000, amount: "800,000원", date: "08-01", status: "결제 완료", method: "카드 삼성 •••• 2045", orderId: "#OD-9917" },
  { member: "최지후", item: "베이직 1개월", amountNum: 60000, amount: "60,000원", date: "01-05", status: "환불", method: "카드 신한 •••• 7712", orderId: "#OD-9756", refundReason: "이용 전 결제 취소" },
  { member: "오세준", item: "프리미엄 3개월", amountNum: 270000, amount: "270,000원", date: "06-22", status: "결제 완료", method: "카드 국민 •••• 5508", orderId: "#OD-9873" },
  { member: "윤새별", item: "PT 5회권", amountNum: 420000, amount: "420,000원", date: "04-18", status: "결제 완료", method: "카드 하나 •••• 6629", orderId: "#OD-9838" },
  { member: "황예린", item: "프리미엄 1개월", amountNum: 90000, amount: "90,000원", date: "09-01", status: "결제 완료", method: "카드 삼성 •••• 9134", orderId: "#OD-9930" },
  { member: "임도현", item: "베이직 1개월", amountNum: 60000, amount: "60,000원", date: "08-15", status: "환불", method: "카드 국민 •••• 4460", orderId: "#OD-9920", refundReason: "장기 출장으로 이용 불가" },
];

// 월별 매출 요약, 최근 거래 표 10행과 별도 유지
const MONTHLY_REVENUE: readonly { month: string; revenue: number }[] = [
  { month: "1월", revenue: 3_120_000 }, { month: "2월", revenue: 3_480_000 }, { month: "3월", revenue: 3_260_000 },
  { month: "4월", revenue: 3_710_000 }, { month: "5월", revenue: 3_590_000 }, { month: "6월", revenue: 4_020_000 },
  { month: "7월", revenue: 4_380_000 }, { month: "8월", revenue: 4_150_000 }, { month: "9월", revenue: 3_130_000 },
];

function familyOf(item: string): PlanFamily {
  if (item.startsWith("프리미엄")) return "프리미엄";
  if (item.startsWith("PT")) return "PT";
  return "베이직";
}
const FAMILY_FILL: Record<PlanFamily, string> = {
  "프리미엄": "var(--component-chart-series-1)",
  "PT": "var(--component-chart-series-2)",
  "베이직": "var(--component-chart-series-3)",
};
const FAMILIES: readonly PlanFamily[] = ["프리미엄", "PT", "베이직"];

export function PaymentsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [families, setFamilies] = React.useState<PlanFamily[]>([...FAMILIES]);
  const toast = React.useRef<Toast>(null);
  const selected = PAYMENTS.find((p) => p.orderId === selectedId);
  const total = PAYMENTS.filter((p) => p.status === "결제 완료").reduce((s, p) => s + p.amountNum, 0);
  const refunded = PAYMENTS.filter((p) => p.status === "환불").reduce((s, p) => s + p.amountNum, 0);

  if (selected) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <Toast ref={toast} />
        <Button label="← 목록으로" text size="small" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setSelectedId(null)} />
        <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{selected.item}</div>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", rowGap: "0.4rem", columnGap: "1rem", fontSize: "0.85rem" }}>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>주문번호</span><span>{selected.orderId}</span>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>회원</span><span>{selected.member}</span>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>결제수단</span><span>{selected.method}</span>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>금액</span><span>{selected.amount}</span>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>결제일</span><span>{selected.date}</span>
          <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>상태</span>
          <span><Tag value={selected.status} severity={selected.status === "환불" ? "warning" : "success"} /></span>
          {selected.refundReason ? (
            <>
              <span style={{ color: "var(--semantic-fg-neutral-subtle)" }}>환불 사유</span><span>{selected.refundReason}</span>
            </>
          ) : null}
        </div>
        <Button
          label="영수증 다운로드" icon="pi pi-download" text size="small" style={{ width: "fit-content", paddingInline: 0 }}
          onClick={ => toast.current?.show({ severity: "success", summary: "영수증을 내려받았어요", detail: selected.orderId, life: 2000 })}
        />
      </div>
    );
  }

  const familySet = new Set(families);
  const filtered = PAYMENTS.filter((p) => familySet.has(familyOf(p.item)));
  const buckets = FAMILIES.map((f) => ({
    name: f,
    value: PAYMENTS.filter((p) => p.status === "결제 완료" && familyOf(p.item) === f).reduce((s, p) => s + p.amountNum, 0),
    fill: FAMILY_FILL[f],
  }));
  const bucketTotal = buckets.reduce((s, b) => s + b.value, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Toast ref={toast} />
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>총 결제액</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 700 }}>{total.toLocaleString}원</div>
        </div>
        <Divider layout="vertical" />
        <div>
          <div style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>환불액</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--semantic-fg-warning-default)" }}>{refunded.toLocaleString}원</div>
        </div>
        <Divider layout="vertical" />
        <div>
          <div style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>거래 건수</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 700 }}>{PAYMENTS.length}건</div>
        </div>
      </div>

      <Panel header="월별 매출 추이">
        <div style={{ width: "100%", height: "9rem" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[...MONTHLY_REVENUE]} margin={{ top: 4, right: 4, bottom: 0, left: 4 }}>
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ style: { fontSize: 11, fill: "var(--semantic-fg-neutral-subtle)" } }} />
              <RTooltip
                cursor={{ fill: "var(--semantic-bg-neutral-subtle)" }}
                contentStyle={{ borderRadius: "var(--semantic-radius-control)", border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)", fontSize: "0.72rem" }}
                formatter={(v: unknown) => [`${Number(v).toLocaleString}원`, "매출"] as [string, string]}
              />
              <Bar dataKey="revenue" fill="var(--component-chart-series-1)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Panel>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "stretch" }}>
        <Panel header="이용권 유형별 매출" style={{ flex: "1 1 16rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "6rem", height: "6rem", flexShrink: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={buckets} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="100%" paddingAngle={2} stroke="none" isAnimationActive={false}>
                    {buckets.map((b) => <Cell key={b.name} fill={b.fill} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", flex: 1, minWidth: 0 }}>
              {buckets.map((b) => (
                <div key={b.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", fontSize: "0.76rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <span aria-hidden style={{ width: "0.45rem", height: "0.45rem", borderRadius: "50%", background: b.fill }} />
                    {b.name}
                  </span>
                  <span style={{ fontWeight: 600 }}>{bucketTotal > 0 ? Math.round((b.value / bucketTotal) * 100) : 0}%</span>
                </div>
              ))}
            </div>
          </div>
        </Panel>
        <Panel header="표시할 이용권 유형" style={{ flex: "1 1 14rem" }}>
          <MultiSelect
            value={families}
            onChange={(e) => setFamilies(e.value)}
            options={[...FAMILIES]}
            placeholder="유형 선택"
            display="chip"
            style={{ width: "100%" }}
          />
        </Panel>
      </div>

      <DataTable value={filtered} size="small" stripedRows paginator rows={6} selectionMode="single" onRowClick={(e) => setSelectedId((e.data as Payment).orderId)} style={{ cursor: "pointer" }}>
        <Column field="member" header="회원" sortable />
        <Column field="item" header="상품" sortable />
        <Column field="amount" header="금액" />
        <Column field="date" header="일자" sortable />
        <Column field="status" header="상태" sortable body={(p: Payment) => <Tag value={p.status} severity={p.status === "환불" ? "warning" : "success"} />} />
      </DataTable>
    </div>
  );
}
