import * as React from "react";
import { Clock, PackageCheck, PackageX, Plus, Search, SearchX, Truck } from "lucide-react";
import { Table } from "../../../bases/standalone/Table";
import { Badge } from "../../../bases/standalone/Badge";
import { Pagination } from "../../../bases/standalone/Pagination";
import { Stat } from "../../../bases/standalone/Stat";
import { Button } from "../../../bases/standalone/Button";
import { Segmented } from "../../../bases/standalone/Segmented";
import { Checkbox } from "../../../bases/standalone/Checkbox";
import { Nativeselect } from "../../../bases/standalone/Nativeselect";
import { Label } from "../../../bases/standalone/Label";
import { Radio } from "../../../bases/standalone/Radio";
import { Input } from "../../../bases/standalone/Input";
import { Dialog } from "../../../bases/standalone/Dialog";
import { Toast } from "../../../bases/standalone/Toast";
import { Alert } from "../../../bases/standalone/Alert";
import { Breadcrumb } from "../../../bases/standalone/Breadcrumb";
import { Empty } from "../../../bases/standalone/Empty";

interface Order {
  id: string;
  item: string;
  qty: number;
  supplier: string;
  date: string;
  status: "입고 예정" | "입고 완료" | "지연";
}

const ORDERS: Order[] = [
  { id: "#PO-3301", item: "27인치 모니터", qty: 10, supplier: "대한전자유통", date: "09-16", status: "입고 완료" },
  { id: "#PO-3302", item: "기계식 키보드", qty: 30, supplier: "코리아IT유통", date: "09-17", status: "입고 완료" },
  { id: "#PO-3303", item: "A4 복사용지 500매", qty: 100, supplier: "오피스마트", date: "09-18", status: "입고 예정" },
  { id: "#PO-3304", item: "사무용 의자", qty: 5, supplier: "퍼니처웍스", date: "09-15", status: "지연" },
  { id: "#PO-3305", item: "웹캠 1080p", qty: 15, supplier: "대한전자유통", date: "09-19", status: "입고 예정" },
  { id: "#PO-3306", item: "모니터 스탠드", qty: 20, supplier: "퍼니처웍스", date: "09-14", status: "입고 완료" },
  { id: "#PO-3307", item: "화이트보드 마커", qty: 50, supplier: "오피스마트", date: "09-20", status: "입고 예정" },
  { id: "#PO-3308", item: "포스트잇 세트", qty: 80, supplier: "오피스마트", date: "09-13", status: "입고 완료" },
  { id: "#PO-3309", item: "무선 마우스", qty: 40, supplier: "코리아IT유통", date: "09-21", status: "입고 예정" },
  { id: "#PO-3310", item: "스테이플러", qty: 25, supplier: "오피스마트", date: "09-12", status: "입고 완료" },
];

const SUPPLIERS = Array.from(new Set(ORDERS.map((o) => o.supplier)));
const STATUS_LIST: readonly Order["status"][] = ["입고 예정", "입고 완료", "지연"];
const STATUS_TONE: Record<Order["status"], string> = {
  "입고 예정": "neutral",
  "입고 완료": "success",
  지연: "danger",
};
const PAGE_SIZE = 6;

interface Draft {
  item: string;
  supplier: string;
  qty: string;
  shipping: string;
}
const EMPTY_DRAFT: Draft = { item: "", supplier: SUPPLIERS[0], qty: "", shipping: "일반" };

export function OrdersScreen {
  const [orders, setOrders] = React.useState<readonly Order[]>(ORDERS);
  const [query, setQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string[]>(["전체"]);
  const [selectedRowIds, setSelectedRowIds] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(1);
  const [composing, setComposing] = React.useState(false);
  const [draft, setDraft] = React.useState<Draft>(EMPTY_DRAFT);

  const activeFilter = statusFilter[0] ?? "전체";
  const filtered = orders
    .filter((o) => activeFilter === "전체" || o.status === activeFilter)
    .filter((o) => {
      const q = query.trim;
      return q === "" || o.item.includes(q) || o.supplier.includes(q) || o.id.includes(q);
    });
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const shown = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const delayedCount = orders.filter((o) => o.status === "지연").length;
  const STATS = [
    { label: "입고 예정", value: `${orders.filter((o) => o.status === "입고 예정").length}건`, icon: Clock, tone: "neutral" },
    { label: "입고 완료", value: `${orders.filter((o) => o.status === "입고 완료").length}건`, icon: PackageCheck, tone: "success" },
    { label: "지연", value: `${delayedCount}건`, icon: PackageX, tone: "danger" },
    { label: "이번 달 총 수량", value: `${orders.reduce((s, o) => s + o.qty, 0)}개`, icon: Truck, tone: "brand" },
  ] as const;

  const changeFilter = (v: string[]) => { setStatusFilter(v); setPage(1); setSelectedRowIds([]); };
  const changePage = (p: number) => { setPage(p); setSelectedRowIds([]); };

  const toggleAllShown = (checked: boolean) => setSelectedRowIds(checked ? shown.map((o) => o.id) : []);
  const toggleRow = (id: string, checked: boolean) =>
    setSelectedRowIds((prev) => (checked ? [...prev, id] : prev.filter((x) => x !== id)));

  const confirmSelected =  => {
    const n = selectedRowIds.length;
    setOrders((prev) => prev.map((o) => (selectedRowIds.includes(o.id) ? { ...o, status: "입고 완료" as const } : o)));
    setSelectedRowIds([]);
    Toast.show({ title: `${n}건을 입고 완료로 처리했어요`, type: "success" });
  };

  const closeComposer =  => { setComposing(false); setDraft(EMPTY_DRAFT); };
  const canSubmit = draft.item.trim !== "" && draft.qty.trim !== "" && Number(draft.qty) > 0;
  const submitDraft =  => {
    const next: Order = {
      id: `#PO-${3300 + orders.length + 1}`,
      item: draft.item.trim,
      qty: Number(draft.qty) || 0,
      supplier: draft.supplier,
      date: new Date.toISOString.slice(5, 10),
      status: "입고 예정",
    };
    setOrders((prev) => [next, ...prev]);
    closeComposer;
    Toast.show({ title: "발주를 등록했어요", description: `${next.item} · ${next.qty}개 · ${next.supplier}`, type: "success" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
      <style>{`
        .sa2-od-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
        @container sa2 (min-width: 40rem) { .sa2-od-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
      `}</style>

      <Breadcrumb items={[{ label: "전체 창고" }, { label: "입고 내역" }]} />

      {delayedCount > 0 && (
        <Alert tone="warning" title="지연된 발주가 있어요">
          {delayedCount}건이 예정일을 넘겼어요. 공급처에 진행 상황을 확인해 주세요.
        </Alert>
      )}

      <div className="sa2-od-stats">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", borderRadius: "var(--semantic-radius-control)", background: `var(--semantic-bg-${s.tone}-subtle)`, color: `var(--semantic-fg-${s.tone}-default)` }}>
                  <Icon size={14} aria-hidden />
                </span>
              </div>
              <Stat label={s.label} value={s.value} />
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.625rem" }}>
        <Segmented value={statusFilter} onValueChange={changeFilter}>
          {(["전체", ...STATUS_LIST] as const).map((s) => (
            <Segmented.Item key={s} value={s}>{s}</Segmented.Item>
          ))}
        </Segmented>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
            <Search size={13} aria-hidden style={{ position: "absolute", left: "0.6rem", color: "var(--semantic-fg-neutral-subtle)", pointerEvents: "none" }} />
            <input
              className="ods-input"
              style={{ paddingInlineStart: "1.9rem", width: "11rem" }}
              placeholder="품목·공급처·발주번호 검색"
              aria-label="입고 내역 검색"
              value={query}
              onChange={(e) => {
                const v = e.target.value;
                setQuery(v);
                setPage(1);
              }}
            />
          </span>
          <Button variant="solid" tone="brand" size="sm" onClick={ => setComposing(true)}>
            <Plus size={14} aria-hidden /> 발주 등록
          </Button>
        </div>
      </div>

      {selectedRowIds.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", background: "var(--semantic-bg-brand-subtlest)", borderRadius: "var(--semantic-radius-control)" }}>
          <span style={{ fontSize: "0.8125rem" }}>{selectedRowIds.length}건 선택됨</span>
          <Button size="sm" variant="solid" tone="success" onClick={confirmSelected}>입고 확정 처리</Button>
          <Button size="sm" variant="subtle" tone="neutral" onClick={ => setSelectedRowIds([])}>선택 해제</Button>
        </div>
      )}

      {filtered.length === 0 ? (
        <Empty>
          <Empty.Header>
            <Empty.Media><SearchX size={22} aria-hidden /></Empty.Media>
            <Empty.Title>조건에 맞는 입고 내역이 없어요</Empty.Title>
            <Empty.Description>검색어나 상태 필터를 바꿔 보세요.</Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button size="sm" variant="subtle" onClick={ => { setQuery(""); changeFilter(["전체"]); }}>필터 초기화</Button>
          </Empty.Content>
        </Empty>
      ) : (
        <>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>
                  <Checkbox
                    checked={shown.length > 0 && selectedRowIds.length === shown.length}
                    indeterminate={selectedRowIds.length > 0 && selectedRowIds.length < shown.length}
                    onCheckedChange={toggleAllShown}
                  >
                    <span className="sr-only">전체 선택</span>
                  </Checkbox>
                </Table.Head>
                <Table.Head>발주번호</Table.Head>
                <Table.Head>품목</Table.Head>
                <Table.Head>수량</Table.Head>
                <Table.Head>공급처</Table.Head>
                <Table.Head>일자</Table.Head>
                <Table.Head>상태</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {shown.map((o) => (
                <Table.Row key={o.id}>
                  <Table.Cell>
                    <Checkbox checked={selectedRowIds.includes(o.id)} onCheckedChange={(checked) => toggleRow(o.id, checked)}>
                      <span className="sr-only">{o.id} 선택</span>
                    </Checkbox>
                  </Table.Cell>
                  <Table.Cell>{o.id}</Table.Cell>
                  <Table.Cell>{o.item}</Table.Cell>
                  <Table.Cell>{o.qty}개</Table.Cell>
                  <Table.Cell>{o.supplier}</Table.Cell>
                  <Table.Cell>{o.date}</Table.Cell>
                  <Table.Cell>
                    <Badge tone={STATUS_TONE[o.status]}>{o.status}</Badge>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>{filtered.length}건 중 {shown.length}건 표시</span>
            <Pagination page={safePage} total={pageCount} onPage={changePage} />
          </div>
        </>
      )}

      <Dialog
        open={composing}
        onClose={closeComposer}
        title="발주 등록"
        actions={
          <>
            <Button variant="subtle" tone="neutral" onClick={closeComposer}>취소</Button>
            <Button variant="solid" tone="brand" disabled={!canSubmit} onClick={submitDraft}>등록</Button>
          </>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: "16rem" }}>
          <div className="ods-field">
            <Label htmlFor="od-item" required>품목</Label>
            <input
              id="od-item"
              className="ods-input"
              placeholder="예: 무선 키보드"
              value={draft.item}
              onChange={(e) => {
                const v = e.target.value;
                setDraft((d) => ({ ...d, item: v }));
              }}
            />
          </div>
          <div className="ods-field">
            <Label htmlFor="od-supplier">공급처</Label>
            <Nativeselect
              id="od-supplier"
              value={draft.supplier}
              onChange={(e) => {
                const v = e.target.value;
                setDraft((d) => ({ ...d, supplier: v }));
              }}
            >
              {SUPPLIERS.map((s) => (
                <Nativeselect.Option key={s} value={s}>{s}</Nativeselect.Option>
              ))}
            </Nativeselect>
          </div>
          <div className="ods-field">
            <Label htmlFor="od-qty" required>수량</Label>
            <input
              id="od-qty"
              className="ods-input"
              placeholder="예: 20"
              inputMode="numeric"
              value={draft.qty}
              onChange={(e) => {
                const v = e.target.value;
                if (/^\d*$/.test(v)) setDraft((d) => ({ ...d, qty: v }));
              }}
            />
          </div>
          <div>
            <span style={{ display: "block", marginBottom: "0.375rem", fontSize: "0.8125rem", fontWeight: 500 }}>배송 방식</span>
            <Radio.Group value={draft.shipping} onValueChange={(v) => setDraft((d) => ({ ...d, shipping: v }))}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Radio value="일반">일반 배송</Radio>
                <Radio value="특급">특급 배송</Radio>
              </div>
            </Radio.Group>
          </div>
          {/* 제어 불필요한 필드라 Input 그대로 사용. 제출값은 위 필드로 충분하며 메모는 참고용임 */}
          <Input label="메모 (선택)" multiline placeholder="배송 시 참고할 내용을 남겨도 좋아요" />
        </div>
      </Dialog>
    </div>
  );
}
