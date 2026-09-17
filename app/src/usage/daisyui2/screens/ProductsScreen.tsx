import * as React from "react";
import { Award } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  sold: number;
  desc: string;
}

const PRODUCTS: Product[] = [
  { id: "p1", name: "무선 이어버드 Pro", category: "전자기기", price: "129,000원", stock: 42, sold: 312, desc: "능동 소음 차단, 최대 24시간 재생. 색상 3종." },
  { id: "p2", name: "캔버스 백팩", category: "가방", price: "58,000원", stock: 12, sold: 187, desc: "15인치 노트북 수납 가능, 발수 원단." },
  { id: "p3", name: "세라믹 머그컵 세트", category: "리빙", price: "24,000원", stock: 0, sold: 96, desc: "2인 세트, 전자레인지·식기세척기 사용 가능." },
  { id: "p4", name: "미니멀 데스크 램프", category: "리빙", price: "42,000원", stock: 28, sold: 154, desc: "3단 밝기 조절, USB-C 충전." },
  { id: "p5", name: "스테인리스 텀블러", category: "리빙", price: "19,000원", stock: 65, sold: 241, desc: "500ml, 보온 12시간·보냉 24시간." },
  { id: "p6", name: "폴딩 요가매트", category: "스포츠", price: "35,000원", stock: 19, sold: 88, desc: "접이식, 휴대 가방 포함." },
  { id: "p7", name: "블루투스 스피커 Mini", category: "전자기기", price: "49,000원", stock: 8, sold: 133, desc: "방수 IPX7, 8시간 재생." },
  { id: "p8", name: "코튼 니트 담요", category: "리빙", price: "38,000원", stock: 24, sold: 71, desc: "150x200cm, 세탁기 사용 가능." },
];

const RANKING = [...PRODUCTS].sort((a, b) => b.sold - a.sold).slice(0, 5);

export function ProductsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = PRODUCTS.find((p) => p.id === selectedId);

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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid var(--color-base-300, #eee)" }}>
            <span style={{ fontWeight: 700 }}>{selected.price}</span>
            <span className="text-sm opacity-60">재고 {selected.stock}개 · 누적 판매 {selected.sold}개</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
      <div className="overflow-x-auto">
        <table className="d-table">
          <thead>
            <tr>
              <th>상품</th>
              <th>분류</th>
              <th>가격</th>
              <th>재고</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.id} className="cursor-pointer hover" onClick={ => setSelectedId(p.id)}>
                <td style={{ fontWeight: 600 }}>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.price}</td>
                <td>
                  {p.stock === 0 ? <span className="d-badge d-badge-error d-badge-sm">품절</span> : p.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
    </div>
  );
}
