"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { Sheet, opensSheet } from "../../daisyui/mobile/DaisyuiMobileShell";
import { INITIAL_REVIEWS, STARS, type Review, type SortMode } from "../screens/ReviewsScreen";

const REPLY_SHEET = "d2-reply-sheet";
const SORT_MODES: readonly SortMode[] = ["최신순", "평점 높은순"];

// 별 색은 daisyUI 경고색 변수로 지정. Tailwind bg-warning 은 이 앱에서 정의 없는 --warning 으로 변환되어 투명해지는 문제 있음
const STAR = { backgroundColor: "var(--color-warning)" } as const;

// 보기 전용 별점 표시. 공식 rating.json 구조 사용함
function Stars({ rating }: { rating: number }) {
  return (
    <div className="d-rating d-rating-sm" role="img" aria-label={`별점 ${rating}점`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className="d-mask d-mask-star-2" style={STAR} aria-current={n === rating ? "true" : undefined} />
      ))}
    </div>
  );
}

export function ReviewsMobile() {
  const [reviews, setReviews] = React.useState<Review[]>(INITIAL_REVIEWS);
  const [starFilter, setStarFilter] = React.useState<number | null>(null);
  const [sortMode, setSortMode] = React.useState<SortMode>("최신순");
  const [replyTargetId, setReplyTargetId] = React.useState<string | null>(null);
  const [replyText, setReplyText] = React.useState("");
  const replyRef = React.useRef<HTMLDialogElement>(null);

  const DIST = STARS.map((star) => ({ star, count: reviews.filter((r) => r.rating === star).length }));
  const visible = reviews
    .filter((r) => starFilter === null || r.rating === starFilter)
    .slice()
    .sort((a, b) => (sortMode === "평점 높은순" ? b.rating - a.rating : 0));
  const replyTarget = reviews.find((r) => r.id === replyTargetId);

  const openReply = (id: string) => {
    setReplyTargetId(id);
    setReplyText(reviews.find((r) => r.id === id)?.reply ?? "");
    replyRef.current?.showModal();
  };
  const submitReply = () => {
    const text = replyText.trim();
    if (!text || !replyTargetId) return;
    setReviews((prev) => prev.map((r) => (r.id === replyTargetId ? { ...r, reply: text } : r)));
    replyRef.current?.close();
  };

  return (
    <div className="flex flex-col gap-4">
      <Sheet id={REPLY_SHEET} label="답글 남기기" ref={replyRef}>
        <h3 className="text-lg font-bold">답글 남기기</h3>
        {replyTarget ? <p className="mt-1 text-sm opacity-60">{replyTarget.product} · {replyTarget.author}</p> : null}
        <textarea
          className="d-textarea mt-3 w-full"
          rows={4}
          placeholder="고객에게 보일 답글을 적어 주세요."
          aria-label="답글"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <div className="d-modal-action">
          <form method="dialog" className="flex w-full gap-2">
            <button type="button" className="d-btn flex-1" onClick={() => replyRef.current?.close()}>취소</button>
            <button type="button" className="d-btn d-btn-primary flex-1" disabled={!replyText.trim()} onClick={submitReply}>등록</button>
          </form>
        </div>
      </Sheet>

      <div className="d-filter gap-y-2">
        <input
          className="d-btn d-filter-reset"
          type="radio"
          name="review-star-mobile"
          aria-label="전체"
          checked={starFilter === null}
          onChange={() => setStarFilter(null)}
        />
        {STARS.map((s) => (
          <input
            key={s}
            className="d-btn"
            type="radio"
            name="review-star-mobile"
            aria-label={`${s}점 (${reviews.filter((r) => r.rating === s).length})`}
            checked={starFilter === s}
            onChange={() => setStarFilter(s)}
          />
        ))}
      </div>

      <div role="tablist" aria-label="정렬" className="d-tabs d-tabs-box w-full">
        {SORT_MODES.map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={sortMode === m}
            className={`d-tab flex-1 ${sortMode === m ? "d-tab-active" : ""}`}
            onClick={() => setSortMode(m)}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {visible.length === 0 ? (
          <div className="d-card bg-base-100 shadow">
            <div className="d-card-body items-center p-6">
              <span className="text-sm opacity-60">해당 별점의 리뷰가 없어요.</span>
            </div>
          </div>
        ) : (
          visible.map((r) => (
            <div key={r.id} className="d-card bg-base-100 shadow">
              <div className="d-card-body gap-1 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="min-w-0 truncate font-semibold">{r.product}</span>
                  <Stars rating={r.rating} />
                </div>
                <p className="text-sm opacity-70">{r.comment}</p>
                <span className="text-sm opacity-50">— {r.author}</span>
                {r.reply ? (
                  <div className="mt-2 px-3 py-2" style={{ background: "var(--color-base-200)", borderRadius: "var(--radius-field, 0.5rem)" }}>
                    <span className="text-sm font-semibold">사장님 답글</span>
                    <p className="mt-0.5 text-sm opacity-70">{r.reply}</p>
                  </div>
                ) : null}
                <div className="d-card-actions mt-1 justify-end">
                  <button type="button" className="d-btn d-btn-ghost" {...opensSheet(REPLY_SHEET)} onClick={() => openReply(r.id)}>
                    <MessageCircle size={16} aria-hidden /> {r.reply ? "답글 수정" : "답글 남기기"}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body p-4">
          <span className="font-semibold">별점 분포</span>
          <div className="mt-1 mb-3 flex items-baseline gap-1.5">
            <span className="text-3xl font-bold">{(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)}</span>
            <span className="text-sm opacity-60">/ 5 · {reviews.length}개 리뷰</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {DIST.map((d) => (
              <div key={d.star} className="flex items-center gap-2">
                <span className="w-10 shrink-0 text-xs opacity-60">{d.star}점</span>
                <progress className="d-progress d-progress-warning w-full" value={d.count} max={reviews.length} />
                <span className="w-5 shrink-0 text-right text-xs opacity-60">{d.count}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm opacity-60">답글 완료 {reviews.filter((r) => r.reply).length} / {reviews.length}건</div>
        </div>
      </div>
    </div>
  );
}
