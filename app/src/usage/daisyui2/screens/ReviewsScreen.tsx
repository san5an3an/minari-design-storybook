import * as React from "react";
import { MessageCircle } from "lucide-react";

interface Review { id: string; product: string; author: string; rating: number; comment: string; reply?: string }

const INITIAL_REVIEWS: Review[] = [
  { id: "r1", product: "무선 이어버드 Pro", author: "김서연", rating: 5, comment: "음질도 좋고 배터리도 오래가요." },
  { id: "r2", product: "캔버스 백팩", author: "박도윤", rating: 4, comment: "수납은 넉넉한데 어깨끈이 조금 얇아요." },
  { id: "r3", product: "미니멀 데스크 램프", author: "이하은", rating: 5, comment: "밝기 조절이 세밀해서 만족스러워요." },
  { id: "r4", product: "스테인리스 텀블러", author: "정서준", rating: 3, comment: "보온력은 좋은데 뚜껑이 뻑뻑해요.", reply: "불편을 드려 죄송해요. 뚜껑 교체 부품을 보내드릴게요." },
  { id: "r5", product: "블루투스 스피커 Mini", author: "최지후", rating: 5, comment: "방수까지 되니 캠핑갈 때 딱이에요." },
  { id: "r6", product: "폴딩 요가매트", author: "오세준", rating: 4, comment: "두께가 적당하고 냄새도 거의 없어요." },
];

const STARS = [5, 4, 3, 2, 1] as const;
type SortMode = "최신순" | "평점 높은순";

export function ReviewsScreen {
  const [reviews, setReviews] = React.useState<Review[]>(INITIAL_REVIEWS);
  const [starFilter, setStarFilter] = React.useState<number | null>(null);
  const [sortMode, setSortMode] = React.useState<SortMode>("최신순");
  const [replyTargetId, setReplyTargetId] = React.useState<string | null>(null);
  const [replyText, setReplyText] = React.useState("");
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const DIST = STARS.map((star) => ({ star, count: reviews.filter((r) => r.rating === star).length }));

  const visible = reviews
    .filter((r) => starFilter === null || r.rating === starFilter)
    .slice
    .sort((a, b) => (sortMode === "평점 높은순" ? b.rating - a.rating : 0));

  const openReply = (id: string) => {
    setReplyTargetId(id);
    setReplyText(reviews.find((r) => r.id === id)?.reply ?? "");
    dialogRef.current?.showModal;
  };
  const submitReply =  => {
    const text = replyText.trim;
    if (!text || !replyTargetId) return;
    setReviews((prev) => prev.map((r) => (r.id === replyTargetId ? { ...r, reply: text } : r)));
    dialogRef.current?.close;
  };

  return (
    <>
      <dialog ref={dialogRef} className="d-modal">
        <div className="d-modal-box">
          <h3 className="text-lg font-bold">답글 남기기</h3>
          <textarea
            className="d-textarea w-full"
            rows={3}
            placeholder="고객에게 보일 답글을 적어 주세요."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            style={{ marginTop: "0.5rem" }}
          />
          <div className="d-modal-action">
            <form method="dialog" style={{ display: "flex", gap: "0.5rem" }}>
              <button type="button" className="d-btn" onClick={ => dialogRef.current?.close}>취소</button>
              <button type="button" className="d-btn d-btn-primary" disabled={!replyText.trim} onClick={submitReply}>등록</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="d-modal-backdrop"><button>close</button></form>
      </dialog>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <div className="d-filter">
            <input
              className="d-btn d-btn-sm d-filter-reset"
              type="radio"
              name="review-star"
              aria-label="전체"
              checked={starFilter === null}
              onChange={ => setStarFilter(null)}
            />
            {STARS.map((s) => (
              <input
                key={s}
                className="d-btn d-btn-sm"
                type="radio"
                name="review-star"
                aria-label={`${s}점 (${reviews.filter((r) => r.rating === s).length})`}
                checked={starFilter === s}
                onChange={ => setStarFilter(s)}
              />
            ))}
          </div>
          <div role="tablist" className="d-tabs d-tabs-box d-tabs-sm">
            {(["최신순", "평점 높은순"] as const).map((m) => (
              <a key={m} role="tab" className={`d-tab ${sortMode === m ? "d-tab-active" : ""}`} onClick={ => setSortMode(m)}>{m}</a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 d2r-body">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: 0 }}>
            {visible.length === 0 ? (
              <div className="d-card bg-base-100 shadow">
                <div className="d-card-body" style={{ alignItems: "center", padding: "1.5rem" }}>
                  <span className="text-sm opacity-60">해당 별점의 리뷰가 없어요.</span>
                </div>
              </div>
            ) : (
              visible.map((r) => (
                <div key={r.id} className="d-card bg-base-100 shadow">
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

                    {r.reply ? (
                      <div style={{ marginTop: "0.5rem", padding: "0.5rem 0.75rem", background: "var(--color-base-200)", borderRadius: "var(--radius-field, 0.5rem)" }}>
                        <span className="text-sm" style={{ fontWeight: 600 }}>사장님 답글</span>
                        <p className="text-sm opacity-70" style={{ margin: "0.15rem 0 0" }}>{r.reply}</p>
                      </div>
                    ) : null}

                    <div className="d-card-actions justify-end" style={{ marginTop: "0.4rem" }}>
                      <button type="button" className="d-btn d-btn-ghost d-btn-xs" onClick={ => openReply(r.id)}>
                        <MessageCircle size={12} aria-hidden /> {r.reply ? "답글 수정" : "답글 남기기"}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="d-card bg-base-100 shadow" style={{ height: "fit-content", minWidth: 0 }}>
            <div className="d-card-body">
              <span style={{ fontWeight: 600 }}>별점 분포</span>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", margin: "0.4rem 0 0.75rem" }}>
                <span style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                  {(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)}
                </span>
                <span className="text-sm opacity-60">/ 5 · {reviews.length}개 리뷰</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {DIST.map((d) => (
                  <div key={d.star} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: "2.5rem", fontSize: "0.75rem" }} className="opacity-60">{d.star}점</span>
                    <progress className="d-progress d-progress-warning w-full" value={d.count} max={reviews.length} />
                    <span style={{ width: "1.25rem", textAlign: "right", fontSize: "0.75rem" }} className="opacity-60">{d.count}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm opacity-60" style={{ marginTop: "0.6rem" }}>
                답글 완료 {reviews.filter((r) => r.reply).length} / {reviews.length}건
              </div>
            </div>
          </div>
        </div>
        <style>{"@container d2shell (min-width: 40rem) { .d2r-body { grid-template-columns: 2fr 1fr; } }"}</style>
      </div>
    </>
  );
}
