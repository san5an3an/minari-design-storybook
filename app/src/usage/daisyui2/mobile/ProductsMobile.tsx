"use client";

import * as React from "react";
import { Award, Boxes, ChevronRight, Package, Plus } from "lucide-react";
import { BRAND, BackToList, DIVIDER, SUCCESS, Sheet, opensSheet, useBodyTopOn } from "../../daisyui/mobile/DaisyuiMobileShell";
import { CATEGORIES, EMPTY_DRAFT, INITIAL_PRODUCTS, type Draft, type Product, type SortKey } from "../screens/ProductsScreen";

const CREATE_SHEET = "d2-create-sheet";

// 정렬 Select 값 정의. 빈 값은 등록 순서 그대로임
const SORTS: { value: string; label: string }[] = [
  { value: "", label: "등록 순서" },
  { value: "price-desc", label: "가격 높은순" },
  { value: "price-asc", label: "가격 낮은순" },
  { value: "stock-desc", label: "재고 많은순" },
  { value: "stock-asc", label: "재고 적은순" },
  { value: "sold-desc", label: "판매 많은순" },
  { value: "sold-asc", label: "판매 적은순" },
];

export function ProductsMobile() {
  const [products, setProducts] = React.useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState<(typeof CATEGORIES)[number]>("전체");
  const [outOfStockOnly, setOutOfStockOnly] = React.useState(false);
  const [sort, setSort] = React.useState("");
  const [draft, setDraft] = React.useState<Draft>(EMPTY_DRAFT);
  const createRef = React.useRef<HTMLDialogElement>(null);
  const top = useBodyTopOn<HTMLDivElement>(selectedId ?? "list");

  const selected = products.find((p) => p.id === selectedId);
  const [rawKey, rawDir] = sort.split("-");
  const sortKey = (rawKey || null) as SortKey | null;
  const sortDesc = rawDir === "desc";

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

  const openCreate = () => { setDraft(EMPTY_DRAFT); createRef.current?.showModal(); };
  const submitCreate = () => {
    const name = draft.name.trim();
    const price = Number(draft.price);
    const stock = Number(draft.stock);
    if (!name || !Number.isFinite(price) || price <= 0 || !Number.isFinite(stock) || stock < 0) return;
    const next: Product = { id: `local-${Date.now()}`, name, category: draft.category, price, stock, sold: 0, desc: "방금 등록한 상품이에요." };
    setProducts((prev) => [next, ...prev]);
    createRef.current?.close();
  };

  if (selected) {
    return (
      <div ref={top} className="d-card bg-base-100 shadow">
        <div className="d-card-body gap-2 p-4">
          <BackToList onClick={() => setSelectedId(null)} />
          <div className="flex items-center gap-2">
            <span className="d-badge d-badge-outline">{selected.category}</span>
            {selected.stock === 0 && <span className="d-badge d-badge-error">품절</span>}
          </div>
          <h3 className="text-lg font-bold">{selected.name}</h3>
          <p className="text-sm opacity-70">{selected.desc}</p>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 pt-3" style={{ borderTop: DIVIDER }}>
            <span className="font-bold">{selected.price.toLocaleString()}원</span>
            <span className="text-sm opacity-60">재고 {selected.stock}개 · 누적 판매 {selected.sold}개</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={top} className="flex flex-col gap-4">
      <Sheet id={CREATE_SHEET} label="상품 등록" ref={createRef}>
        <h3 className="text-lg font-bold">상품 등록</h3>
        <fieldset className="d-fieldset mt-2">
          <label className="d-label" htmlFor="d2m-name">상품명</label>
          <input id="d2m-name" className="d-input w-full" value={draft.name} onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))} placeholder="예: 무선 마우스" />
          <label className="d-label mt-2" htmlFor="d2m-category">분류</label>
          <select id="d2m-category" className="d-select w-full" value={draft.category} onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value }))}>
            {CATEGORIES.filter((c) => c !== "전체").map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div>
              <label className="d-label" htmlFor="d2m-price">가격(원)</label>
              <input id="d2m-price" className="d-input w-full" type="number" inputMode="numeric" min={0} value={draft.price} onChange={(e) => setDraft((d) => ({ ...d, price: e.target.value }))} placeholder="0" />
            </div>
            <div>
              <label className="d-label" htmlFor="d2m-stock">초기 재고</label>
              <input id="d2m-stock" className="d-input w-full" type="number" inputMode="numeric" min={0} value={draft.stock} onChange={(e) => setDraft((d) => ({ ...d, stock: e.target.value }))} placeholder="0" />
            </div>
          </div>
        </fieldset>
        <div className="d-modal-action">
          <form method="dialog" className="flex w-full gap-2">
            <button type="button" className="d-btn flex-1" onClick={() => createRef.current?.close()}>취소</button>
            <button type="button" className="d-btn d-btn-primary flex-1" onClick={submitCreate}>등록</button>
          </form>
        </div>
      </Sheet>

      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="font-bold">상품 관리</div>
          <div className="text-sm opacity-60">카테고리별 재고와 판매 현황이에요.</div>
        </div>
        <button type="button" className="d-btn d-btn-primary shrink-0" {...opensSheet(CREATE_SHEET)} onClick={openCreate}>
          <Plus size={16} aria-hidden /> 상품 등록
        </button>
      </div>

      {/* 공식 d-filter 구조 그대로 사용. d-filter-reset 이 전체 버튼임 */}
      <div className="d-filter gap-y-2">
        {CATEGORIES.map((c) => (
          <input
            key={c}
            className={`d-btn ${c === "전체" ? "d-filter-reset" : ""}`}
            type="radio"
            name="product-category-mobile"
            aria-label={c === "전체" ? "전체" : `${c} (${products.filter((p) => p.category === c).length})`}
            checked={category === c}
            onChange={() => setCategory(c)}
          />
        ))}
      </div>

      <label className="flex min-h-11 cursor-pointer items-center justify-between gap-3 rounded-box bg-base-100 px-4 shadow">
        <span className="text-sm">품절만 보기</span>
        <input type="checkbox" className="d-toggle d-toggle-error" checked={outOfStockOnly} onChange={(e) => setOutOfStockOnly(e.target.checked)} />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <div className="d-card bg-base-100 shadow">
          <div className="d-card-body flex-row items-center gap-2.5 p-3">
            <Package size={20} style={{ color: BRAND }} aria-hidden />
            <div><div className="text-sm opacity-60">총 상품</div><div className="font-bold">{products.length}종</div></div>
          </div>
        </div>
        <div className="d-card bg-base-100 shadow">
          <div className="d-card-body flex-row items-center gap-2.5 p-3">
            <Boxes size={20} style={{ color: BRAND }} aria-hidden />
            <div><div className="text-sm opacity-60">총 재고</div><div className="font-bold">{totalStock.toLocaleString()}개</div></div>
          </div>
        </div>
        <div className="d-card bg-base-100 shadow">
          <div className="d-card-body flex-row items-center gap-2.5 p-3">
            <Award size={20} style={{ color: SUCCESS }} aria-hidden />
            <div><div className="text-sm opacity-60">누적 판매</div><div className="font-bold">{totalSold.toLocaleString()}개</div></div>
          </div>
        </div>
        <div className="d-card bg-base-100 shadow">
          <div className="d-card-body flex-row items-center gap-2.5 p-3">
            <span className="d-badge d-badge-error d-badge-sm size-6 rounded-full">{outOfStockCount}</span>
            <div><div className="text-sm opacity-60">품절 상품</div><div className="font-bold">{outOfStockCount}종</div></div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <label className="d-label shrink-0" htmlFor="d2m-sort">정렬</label>
        <select id="d2m-sort" className="d-select w-full" value={sort} onChange={(e) => setSort(e.target.value)}>
          {SORTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>

      <ul className="d-list rounded-box bg-base-100 shadow">
        {sorted.length === 0 ? (
          <li className="p-6 text-center text-sm opacity-60">조건에 맞는 상품이 없어요.</li>
        ) : (
          sorted.map((p) => (
            <li key={p.id}>
              <button type="button" className="d-list-row w-full items-center py-3 text-left" onClick={() => setSelectedId(p.id)}>
                <div className="d-list-col-grow min-w-0">
                  <div className="truncate font-semibold">{p.name}</div>
                  <div className="text-sm opacity-60">{p.category} · {p.price.toLocaleString()}원</div>
                </div>
                <div className="flex flex-col items-end gap-0.5 text-sm">
                  {p.stock === 0 ? <span className="d-badge d-badge-error d-badge-sm">품절</span> : <span>재고 {p.stock}</span>}
                  <span className="opacity-60">판매 {p.sold}</span>
                </div>
                <ChevronRight size={16} className="opacity-40" aria-hidden />
              </button>
            </li>
          ))
        )}
      </ul>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body p-4">
          <div className="flex items-center gap-1.5">
            <Award size={16} style={{ color: BRAND }} aria-hidden />
            <span className="font-semibold">베스트셀러 TOP 5</span>
          </div>
          <ol className="mt-2 flex flex-col gap-2.5">
            {RANKING.map((p, i) => (
              <li key={p.id} className="flex items-center gap-2.5">
                <span className="d-badge d-badge-neutral d-badge-sm">{i + 1}</span>
                <span className="min-w-0 flex-1 truncate text-sm">{p.name}</span>
                <span className="text-sm opacity-60">{p.sold}개</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body p-4">
          <span className="font-semibold">재고 상태 분포</span>
          <div className="mt-2 flex flex-col gap-2">
            {stockBuckets.map((b) => (
              <div key={b.label} className="flex items-center gap-2">
                <span className="w-26 shrink-0 text-xs opacity-60">{b.label}</span>
                <progress className={`d-progress ${b.tone} w-full`} value={b.count} max={products.length} />
                <span className="w-5 shrink-0 text-right text-xs opacity-60">{b.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
