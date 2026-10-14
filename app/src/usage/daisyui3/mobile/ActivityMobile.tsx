"use client";

import * as React from "react";
import { MessageCircle, PenLine, ThumbsUp } from "lucide-react";
import { BRAND, SUCCESS } from "../../daisyui/mobile/DaisyuiMobileShell";
import { ACTIVITY, FILTERS, type Filter } from "../screens/MyActivityScreen";

export function ActivityMobile() {
  const [filter, setFilter] = React.useState<Filter>("전체");
  const posts = ACTIVITY.filter((a) => a.type === "글").length;
  const comments = ACTIVITY.filter((a) => a.type === "댓글").length;
  const totalLikes = ACTIVITY.reduce((s, a) => s + a.likes, 0);
  const visible = filter === "전체" ? ACTIVITY : ACTIVITY.filter((a) => a.type === filter);

  return (
    <div className="flex flex-col gap-4">
      <div className="d-stats d-stats-vertical w-full bg-base-100 shadow">
        <div className="d-stat py-3">
          <div className="d-stat-figure" style={{ color: BRAND }}><PenLine size={22} aria-hidden /></div>
          <div className="d-stat-title">내가 쓴 글</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>{posts}</div>
        </div>
        <div className="d-stat py-3">
          <div className="d-stat-figure" style={{ color: BRAND }}><MessageCircle size={22} aria-hidden /></div>
          <div className="d-stat-title">내가 쓴 댓글</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>{comments}</div>
        </div>
        <div className="d-stat py-3">
          <div className="d-stat-figure" style={{ color: SUCCESS }}><ThumbsUp size={22} aria-hidden /></div>
          <div className="d-stat-title">받은 공감</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>{totalLikes}</div>
        </div>
      </div>

      <div role="tablist" aria-label="활동 유형" className="d-tabs d-tabs-box w-full">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={`d-tab flex-1 ${filter === f ? "d-tab-active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="d-card bg-base-100 shadow">
          <div className="d-card-body items-center p-6">
            <span className="text-sm opacity-60">해당하는 활동이 없어요.</span>
          </div>
        </div>
      ) : (
        <ul className="d-timeline d-timeline-vertical d-timeline-compact">
          {visible.map((a, i) => {
            const Icon = a.type === "글" ? PenLine : MessageCircle;
            return (
              <li key={a.id}>
                {i > 0 && <hr />}
                <div className="d-timeline-middle">
                  <span
                    aria-hidden
                    className="flex size-7 items-center justify-center rounded-full"
                    style={{ background: "var(--color-primary)", color: "var(--color-primary-content)" }}
                  >
                    <Icon size={13} />
                  </span>
                </div>
                <div className="d-timeline-end d-timeline-box flex w-full min-w-0 flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="d-badge d-badge-outline d-badge-sm shrink-0">{a.type}</span>
                    <span className="min-w-0 flex-1 text-sm">{a.title}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm opacity-60">
                    <span>{a.time}</span>
                    <span className="inline-flex items-center gap-1"><ThumbsUp size={11} aria-hidden />{a.likes}</span>
                  </div>
                </div>
                {i < visible.length - 1 && <hr />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
