import * as React from "react";

const REVIEWS = [
  { product: "무선 이어버드 Pro", author: "김서연", rating: 5, comment: "음질도 좋고 배터리도 오래가요." },
  { product: "캔버스 백팩", author: "박도윤", rating: 4, comment: "수납은 넉넉한데 어깨끈이 조금 얇아요." },
];

export function ReviewsScreen {
  return (
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
  );
}
