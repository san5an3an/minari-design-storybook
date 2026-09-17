import * as React from "react";

interface Review {
  product: string;
  author: string;
  rating: number;
  comment: string;
}

const REVIEWS: Review[] = [
  { product: "무선 이어버드 Pro", author: "김서연", rating: 5, comment: "음질도 좋고 배터리도 오래가요." },
  { product: "캔버스 백팩", author: "박도윤", rating: 4, comment: "수납은 넉넉한데 어깨끈이 조금 얇아요." },
  { product: "미니멀 데스크 램프", author: "이하은", rating: 5, comment: "밝기 조절이 세밀해서 만족스러워요." },
  { product: "스테인리스 텀블러", author: "정서준", rating: 3, comment: "보온력은 좋은데 뚜껑이 뻑뻑해요." },
  { product: "블루투스 스피커 Mini", author: "최지후", rating: 5, comment: "방수까지 되니 캠핑갈 때 딱이에요." },
  { product: "폴딩 요가매트", author: "오세준", rating: 4, comment: "두께가 적당하고 냄새도 거의 없어요." },
];

const DIST = [5, 4, 3, 2, 1].map((star) => ({
  star,
  count: REVIEWS.filter((r) => r.rating === star).length,
}));

export function ReviewsScreen {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {REVIEWS.map((r, i) => (
          <div key={i} className="d-card bg-base-100 shadow">
            <div className="d-card-body" style={{ padding: "0.9rem 1.1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 600 }}>{r.product}</span>
                <div className="d-rating d-rating-sm">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <input key={n} type="radio" className="d-mask d-mask-star-2 bg-orange-400" readOnly checked={n === r.rating} />
                  ))}
                </div>
              </div>
              <p className="text-sm opacity-70" style={{ margin: "0.25rem 0 0" }}>{r.comment}</p>
              <span className="text-sm opacity-50">— {r.author}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="d-card bg-base-100 shadow" style={{ height: "fit-content" }}>
        <div className="d-card-body">
          <span style={{ fontWeight: 600 }}>별점 분포</span>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", margin: "0.4rem 0 0.75rem" }}>
            <span style={{ fontSize: "1.75rem", fontWeight: 700 }}>
              {(REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1)}
            </span>
            <span className="text-sm opacity-60">/ 5 · {REVIEWS.length}개 리뷰</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {DIST.map((d) => (
              <div key={d.star} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "2.5rem", fontSize: "0.75rem" }} className="opacity-60">{d.star}점</span>
                <progress className="d-progress d-progress-warning w-full" value={d.count} max={REVIEWS.length} />
                <span style={{ width: "1.25rem", textAlign: "right", fontSize: "0.75rem" }} className="opacity-60">{d.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
