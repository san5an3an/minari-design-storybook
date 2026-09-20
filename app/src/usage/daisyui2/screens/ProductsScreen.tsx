import * as React from "react";
import { ArrowDown, ArrowUp, ArrowUpDown, Award, Boxes, Package, Plus } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sold: number;
  desc: string;
}

const INITIAL_PRODUCTS: Product[] = [
  { id: "p1", name: "무선 이어버드 Pro", category: "전자기기", price: 129000, stock: 42, sold: 312, desc: "능동 소음 차단, 최대 24시간 재생. 색상 3종." },
  { id: "p2", name: "캔버스 백팩", category: "가방", price: 58000, stock: 12, sold: 187, desc: "15인치 노트북 수납 가능, 발수 원단." },
  { id: "p3", name: "세라믹 머그컵 세트", category: "리빙", price: 24000, stock: 0, sold: 96, desc: "2인 세트, 전자레인지·식기세척기 사용 가능." },
  { id: "p4", name: "미니멀 데스크 램프", category: "리빙", price: 42000, stock: 28, sold: 154, desc: "3단 밝기 조절, USB-C 충전." },
  { id: "p5", name: "스테인리스 텀블러", category: "리빙", price: 19000, stock: 65, sold: 241, desc: "500ml, 보온 12시간·보냉 24시간." },
  { id: "p6", name: "폴딩 요가매트", category: "스포츠", price: 35000, stock: 19, sold: 88, desc: "접이식, 휴대 가방 포함." },
  { id: "p7", name: "블루투스 스피커 Mini", category: "전자기기", price: 49000, stock: 8, sold: 133, desc: "방수 IPX7, 8시간 재생." },
  { id: "p8", name: "코튼 니트 담요", category: "리빙", price: 38000, stock: 24, sold: 71, desc: "150x200cm, 세탁기 사용 가능." },
];

const CATEGORIES = ["전체", "전자기기", "가방", "리빙", "스포츠"] as const;
type SortKey = "price" | "stock" | "sold";

interface Draft {
  name: string;
  category: string;
  price: string;
  stock: string;
}
const EMPTY_DRAFT: Draft = { name: "", category: "리빙", price: "", stock: "" };

export function ProductsScreen {
  const [products, setProducts] = React.useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState<(typeof CATEGORIES)[number]>("전체");
  const [outOfStockOnly, setOutOfStockOnly] = React.useState(false);
  const [sortKey, setSortKey] = React.useState<SortKey | null>(null);
  const [sortDesc, setSortDesc] = React.useState(true);
  const [draft, setDraft] = React.useState<Draft>(EMPTY_DRAFT);
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const selected = products.find((p) => p.id === selectedId);

  const filtered = products
    .filter((p) => category === "전체" || p.category === category)
    .filter((p) => !outOfStockOnly || p.stock === 0);
  const sorted = sortKey
    ? [...filtered].sort((a, b) => (sortDesc ? b[sortKey] - a[sortKey] : a[sortKey] - b[sortKey]))
    : filtered;

  const outOfStockCount = products.filter((p) => p.stock === 0).length;
  const totalStock = products.reduce((s, p) => s + p.stock, 0);
  const totalSold = products.reduce((s, p) => s + p.sold, 0);
  const RANKING = [...products].sort((a, b) => b.sold - a.sold).slice(0, 5);
  const stockBuckets = [
    { label: "정상(15개 이상)", count: products.filter((p) => p.stock >= 15).length, tone: "d-progress-success" },
    { label: "부족(1~14개)", count: products.filter((p) => p.stock > 0 && p.stock < 15).length, tone: "d-progress-warning" },
    { label: "품절", count: outOfStockCount, tone: "d-progress-error" },
  ] as const;

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDesc((d) => !d);
    else { setSortKey(key); setSortDesc(true); }
  };

  const openCreate =  => { setDraft(EMPTY_DRAFT); dialogRef.current?.showModal; };
  const submitCreate =  => {
    const name = draft.name.trim;
    const price = Number(draft.price);
    const stock = Number(draft.stock);
    if (!name || !Number.isFinite(price) || price <= 0 || !Number.isFinite(stock) || stock < 0) return;
    const next: Product = { id: `local-${Date.now}`, name, category: draft.category, price, stock, sold: 0, desc: "방금 등록한 상품이에요." };
    setProducts((prev) => [next, ...prev]);
    dialogRef.current?.close;
  };

  const SortHeader = ({ label, k }: { label: string; k: SortKey }) => (
    <th className="cursor-pointer select-none" onClick={ => toggleSort(k)}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
        {label}
        {sortKey === k ? (sortDesc ? <ArrowDown size={12} aria-hidden /> : <ArrowUp size={12} aria-hidden />) : <ArrowUpDown size={12} className="opacity-30" aria-hidden />}
      </span>
    </th>
  );

  if (selected) {
    return (
      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body">
          <button type="button" className="d-btn d-btn-ghost d-btn-sm" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setSelectedId(null)}>
            ← 목록으로
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
            <span className="d-badge d-badge-outline">{selected.category}</span>
            {selected.stock === 0 && <span className="d-badge d-badge-error">품절</span>}
          </div>
          <h3 style={{ fontWeight: 700, fontSize: "1.1rem", margin: "0.5rem 0 0" }}>{selected.name}</h3>
          <p className="text-sm opacity-70">{selected.desc}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid var(--color-base-300)" }}>
            <span style={{ fontWeight: 700 }}>{selected.price.toLocaleString}원</span>
            <span className="text-sm opacity-60">재고 {selected.stock}개 · 누적 판매 {selected.sold}개</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <dialog ref={dialogRef} className="d-modal">
        <div className="d-modal-box">
          <h3 className="text-lg font-bold">상품 등록</h3>
          <fieldset className="d-fieldset" style={{ marginTop: "0.5rem" }}>
            <label className="d-label">상품명</label>
            <input className="d-input w-full" value={draft.name} onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))} placeholder="예: 무선 마우스" />
            <label className="d-label mt-2">분류</label>
            <select className="d-select w-full" value={draft.category} onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value }))}>
              {CATEGORIES.filter((c) => c !== "전체").map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <label className="d-label">가격(원)</label>
                <input className="d-input w-full" type="number" min={0} value={draft.price} onChange={(e) => setDraft((d) => ({ ...d, price: e.target.value }))} placeholder="0" />
              </div>
              <div>
                <label className="d-label">초기 재고</label>
                <input className="d-input w-full" type="number" min={0} value={draft.stock} onChange={(e) => setDraft((d) => ({ ...d, stock: e.target.value }))} placeholder="0" />
              </div>
            </div>
          </fieldset>
          <div className="d-modal-action">
            <form method="dialog" style={{ display: "flex", gap: "0.5rem" }}>
              <button type="button" className="d-btn" onClick={ => dialogRef.current?.close}>취소</button>
              <button type="button" className="d-btn d-btn-primary" onClick={submitCreate}>등록</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="d-modal-backdrop"><button>close</button></form>
      </dialog>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <div>
            <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>상품 관리</span>
            <div className="text-sm opacity-60">카테고리별 재고와 판매 현황이에요.</div>
          </div>
          <button type="button" className="d-btn d-btn-primary d-btn-sm" onClick={openCreate}>
            <Plus size={14} aria-hidden /> 상품 등록
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          {/* filter.json #002 anatomy 그대로, d-filter-reset이 전체 역할 */}
          <div className="d-filter">
            {CATEGORIES.map((c) => (
              <input
                key={c}
                className={`d-btn d-btn-sm ${c === "전체" ? "d-filter-reset" : ""}`}
                type="radio"
                name="product-category"
                aria-label={c === "전체" ? "전체" : `${c} (${products.filter((p) => p.category === c).length})`}
                checked={category === c}
                onChange={ => setCategory(c)}
              />
            ))}
          </div>
          <label className="d-label cursor-pointer gap-2">
            <span className="text-sm">품절만 보기</span>
            <input type="checkbox" className="d-toggle d-toggle-error d-toggle-sm" checked={outOfStockOnly} onChange={(e) => setOutOfStockOnly(e.target.checked)} />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-3 d2p-stats">
          <div className="d-card bg-base-100 shadow">
            <div className="d-card-body" style={{ padding: "0.9rem", flexDirection: "row", alignItems: "center", gap: "0.6rem" }}>
              <Package size={20} className="text-primary" aria-hidden />
              <div><div className="text-sm opacity-60">총 상품</div><div style={{ fontWeight: 700 }}>{products.length}종</div></div>
            </div>
          </div>
          <div className="d-card bg-base-100 shadow">
            <div className="d-card-body" style={{ padding: "0.9rem", flexDirection: "row", alignItems: "center", gap: "0.6rem" }}>
              <Boxes size={20} className="text-primary" aria-hidden />
              <div><div className="text-sm opacity-60">총 재고</div><div style={{ fontWeight: 700 }}>{totalStock.toLocaleString}개</div></div>
            </div>
          </div>
          <div className="d-card bg-base-100 shadow">
            <div className="d-card-body" style={{ padding: "0.9rem", flexDirection: "row", alignItems: "center", gap: "0.6rem" }}>
              <Award size={20} className="text-success" aria-hidden />
              <div><div className="text-sm opacity-60">누적 판매</div><div style={{ fontWeight: 700 }}>{totalSold.toLocaleString}개</div></div>
            </div>
          </div>
          <div className="d-card bg-base-100 shadow">
            <div className="d-card-body" style={{ padding: "0.9rem", flexDirection: "row", alignItems: "center", gap: "0.6rem" }}>
              <span className="d-badge d-badge-error d-badge-sm" style={{ width: "1.5rem", height: "1.5rem", borderRadius: "50%" }}>{outOfStockCount}</span>
              <div><div className="text-sm opacity-60">품절 상품</div><div style={{ fontWeight: 700 }}>{outOfStockCount}종</div></div>
            </div>
          </div>
        </div>
        <style>{"@container d2shell (min-width: 32rem) { .d2p-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); } }"}</style>

        <div className="grid grid-cols-1 gap-4 d2p-body">
          <div className="overflow-x-auto d-card bg-base-100 shadow" style={{ minWidth: 0 }}>
            <table className="d-table d-table-zebra">
              <thead>
                <tr>
                  <th>상품</th>
                  <th>분류</th>
                  <SortHeader label="가격" k="price" />
                  <SortHeader label="재고" k="stock" />
                  <SortHeader label="판매" k="sold" />
                </tr>
              </thead>
              <tbody>
                {sorted.length === 0 ? (
                  <tr><td colSpan={5} className="text-center text-sm opacity-60" style={{ padding: "1.5rem" }}>조건에 맞는 상품이 없어요.</td></tr>
                ) : (
                  sorted.map((p) => (
                    <tr key={p.id} className="cursor-pointer hover" onClick={ => setSelectedId(p.id)}>
                      <td style={{ fontWeight: 600 }}>{p.name}</td>
                      <td>{p.category}</td>
                      <td>{p.price.toLocaleString}원</td>
                      <td>{p.stock === 0 ? <span className="d-badge d-badge-error d-badge-sm">품절</span> : p.stock}</td>
                      <td>{p.sold}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: 0 }}>
            <div className="d-card bg-base-100 shadow">
              <div className="d-card-body">
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Award size={16} className="text-primary" aria-hidden />
                  <span style={{ fontWeight: 600 }}>베스트셀러 TOP 5</span>
                </div>
                <ol style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "0.5rem" }}>
                  {RANKING.map((p, i) => (
                    <li key={p.id} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span className="d-badge d-badge-neutral d-badge-sm">{i + 1}</span>
                      <span style={{ flex: 1, fontSize: "0.8125rem" }}>{p.name}</span>
                      <span className="text-sm opacity-60">{p.sold}개</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="d-card bg-base-100 shadow">
              <div className="d-card-body">
                <span style={{ fontWeight: 600 }}>재고 상태 분포</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
                  {stockBuckets.map((b) => (
                    <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: "6.5rem", fontSize: "0.75rem" }} className="opacity-60">{b.label}</span>
                      <progress className={`d-progress ${b.tone} w-full`} value={b.count} max={products.length} />
                      <span style={{ width: "1.25rem", textAlign: "right", fontSize: "0.75rem" }} className="opacity-60">{b.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{"@container d2shell (min-width: 42rem) { .d2p-body { grid-template-columns: 2fr 1fr; } }"}</style>
      </div>
    </>
  );
}
