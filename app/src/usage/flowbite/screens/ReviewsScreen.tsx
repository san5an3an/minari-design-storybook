import * as React from "react";
import { Blockquote, Card, Carousel, Progress, Radio, Rating, RatingStar, Select } from "flowbite-react";
import { REVIEWS, type ReviewItem } from "../data";

function reviewStats {
  const avg = REVIEWS.reduce((s, r) => s + r.score, 0) / REVIEWS.length;
  const distribution = [5, 4, 3, 2, 1].map((score) => ({
    score,
    count: REVIEWS.filter((r) => r.score === score).length,
  }));
  return { avg, distribution };
}

// 평점 요약 통계 카드 렌더링
function ReviewSummaryStats({ avg }: { avg: number }) {
  const items = [
    { label: "평균 평점", value: `${avg.toFixed(1)}점` },
    { label: "전체 리뷰", value: `${REVIEWS.length}건` },
    { label: "4점 이상", value: `${REVIEWS.filter((r) => r.score >= 4).length}건` },
  ];
  return (
    <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
      {items.map((it) => (
        <div key={it.label} style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
          <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>{it.label}</span>
          <div style={{ fontSize: "18px", fontWeight: 600 }}>{it.value}</div>
        </div>
      ))}
    </div>
  );
}

// 별점 분포. Progress 막대 다섯 줄로 표시
function RatingDistribution({ distribution }: { distribution: { score: number; count: number }[] }) {
  const max = Math.max(...distribution.map((d) => d.count), 1);
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
      <span style={{ fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>별점 분포</span>
      {distribution.map((d) => (
        <div key={d.score} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "12px", width: "28px", flexShrink: 0, color: "var(--color-gray-600)" }}>{d.score}점</span>
          <Progress progress={(d.count / max) * 100} color="yellow" size="sm" className="flex-1" />
          <span style={{ fontSize: "12px", width: "20px", textAlign: "right", flexShrink: 0, color: "var(--color-gray-500)" }}>{d.count}</span>
        </div>
      ))}
    </div>
  );
}

// 베스트 리뷰. 5점 리뷰를 Carousel로 순환 표시
function BestReviewCarousel {
  const best = REVIEWS.filter((r) => r.score === 5);
  if (best.length === 0) return null;
  return (
    <div style={{ height: "140px", border: "1px solid var(--color-gray-200)", borderRadius: "8px", overflow: "hidden" }}>
      <Carousel slideInterval={5000} indicators={best.length > 1}>
        {best.map((r) => (
          <div
            key={r.id}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "6px", height: "100%", padding: "20px 48px", background: "var(--color-primary-50)" }}
          >
            <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-primary-700)" }}>베스트 리뷰</span>
            <Blockquote style={{ fontSize: "15px", fontWeight: 600 }}>{r.comment}</Blockquote>
            <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>{r.customer}</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export function ReviewsScreen {
  const { avg, distribution } = reviewStats;
  const [minScore, setMinScore] = React.useState<number>(0);
  const [sort, setSort] = React.useState<"latest" | "score">("latest");

  const rows: ReviewItem[] = REVIEWS
    .filter((r) => r.score >= minScore)
    .slice
    .sort((a, b) => (sort === "score" ? b.score - a.score : 0));

  return (
    <div className="flex flex-col gap-4">
      <BestReviewCarousel />
      <ReviewSummaryStats avg={avg} />
      <div className="flex flex-col gap-3 md:flex-row">
        <div style={{ flex: 1, minWidth: 0 }}>
          <RatingDistribution distribution={distribution} />
        </div>
        <div style={{ flex: 1, minWidth: 0, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "16px" }}>
          <span style={{ fontSize: "13px", fontWeight: 600, marginBottom: "10px", display: "block" }}>필터·정렬</span>
          <div className="flex flex-col gap-3">
            <Select
              value={minScore}
              onChange={(e) => setMinScore(Number(e.target.value))}
              sizing="sm"
            >
              <option value={0}>모든 평점</option>
              <option value={4}>4점 이상</option>
              <option value={5}>5점만</option>
            </Select>
            <fieldset className="flex items-center gap-4">
              <legend className="sr-only">정렬 기준</legend>
              <label className="flex items-center gap-2 text-sm">
                <Radio name="sort" checked={sort === "latest"} onChange={ => setSort("latest")} />
                최신순
              </label>
              <label className="flex items-center gap-2 text-sm">
                <Radio name="sort" checked={sort === "score"} onChange={ => setSort("score")} />
                평점순
              </label>
            </fieldset>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
        {rows.map((r) => (
          <Card key={r.id}>
            <Rating>
              {Array.from({ length: 5 }, (_, i) => (
                <RatingStar key={i} filled={i < r.score} />
              ))}
            </Rating>
            <Blockquote className="font-normal" style={{ color: "var(--color-gray-700)" }}>{r.comment}</Blockquote>
            <div className="flex items-center justify-between" style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>
              <span>{r.customer}</span>
              <span>{r.dateLabel}</span>
            </div>
          </Card>
        ))}
        {rows.length === 0 && (
          <span style={{ fontSize: "13px", color: "var(--color-gray-500)" }}>조건에 맞는 리뷰가 없어요.</span>
        )}
      </div>
    </div>
  );
}
