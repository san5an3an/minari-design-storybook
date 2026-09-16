import { Card, Rating, RatingStar } from "flowbite-react";
import { REVIEWS } from "../data";

export function ReviewsScreen {
  return (
    <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
      {REVIEWS.map((r) => (
        <Card key={r.id}>
          <Rating>
            {Array.from({ length: 5 }, (_, i) => (
              <RatingStar key={i} filled={i < r.score} />
            ))}
          </Rating>
          <p className="font-normal" style={{ color: "var(--color-gray-700)" }}>{r.comment}</p>
          <div className="flex items-center justify-between" style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>
            <span>{r.customer}</span>
            <span>{r.dateLabel}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
