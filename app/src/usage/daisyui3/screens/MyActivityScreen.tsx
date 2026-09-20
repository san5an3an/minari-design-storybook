import * as React from "react";
import { MessageCircle, PenLine, ThumbsUp } from "lucide-react";

interface Activity { id: string; type: "글" | "댓글"; title: string; time: string; likes: number }

const ACTIVITY: Activity[] = [
  { id: "a1", type: "글", title: "커스텀 테마 만드는 법 공유합니다", time: "1일 전", likes: 18 },
  { id: "a2", type: "댓글", title: "다음 릴리즈에 다크모드 넣어주세요, 저도 원해요 +1", time: "2시간 전", likes: 3 },
  { id: "a3", type: "글", title: "단축키 정리해봤어요", time: "3일 전", likes: 21 },
  { id: "a4", type: "댓글", title: "API 요청 제한이 너무 낮아요, 저도 공감합니다", time: "5시간 전", likes: 5 },
  { id: "a5", type: "댓글", title: "검색 결과 정렬 기준이 궁금해요, 최신순이 맞아요", time: "어제", likes: 2 },
  { id: "a6", type: "글", title: "다국어 지원 관련 제안", time: "5일 전", likes: 7 },
  { id: "a7", type: "댓글", title: "첨부파일 업로드가 자꾸 실패해요, 저도 같은 문제 겪었어요", time: "6시간 전", likes: 1 },
];

type Filter = "전체" | "글" | "댓글";
const FILTERS: Filter[] = ["전체", "글", "댓글"];

export function MyActivityScreen {
  const [filter, setFilter] = React.useState<Filter>("전체");
  const posts = ACTIVITY.filter((a) => a.type === "글").length;
  const comments = ACTIVITY.filter((a) => a.type === "댓글").length;
  const totalLikes = ACTIVITY.reduce((s, a) => s + a.likes, 0);
  const visible = filter === "전체" ? ACTIVITY : ACTIVITY.filter((a) => a.type === filter);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div className="d-stats shadow" style={{ width: "100%" }}>
        <div className="d-stat">
          <div className="d-stat-figure text-primary">
            <PenLine size={24} aria-hidden />
          </div>
          <div className="d-stat-title">내가 쓴 글</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>{posts}</div>
        </div>
        <div className="d-stat">
          <div className="d-stat-figure text-primary">
            <MessageCircle size={24} aria-hidden />
          </div>
          <div className="d-stat-title">내가 쓴 댓글</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>{comments}</div>
        </div>
        <div className="d-stat">
          <div className="d-stat-figure text-success">
            <ThumbsUp size={24} aria-hidden />
          </div>
          <div className="d-stat-title">받은 공감</div>
          <div className="d-stat-value text-success" style={{ fontSize: "1.25rem" }}>{totalLikes}</div>
        </div>
      </div>

      <div role="tablist" className="d-tabs d-tabs-box d-tabs-sm" style={{ width: "fit-content" }}>
        {FILTERS.map((f) => (
          <a key={f} role="tab" className={`d-tab ${filter === f ? "d-tab-active" : ""}`} onClick={ => setFilter(f)}>
            {f}
          </a>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="d-card bg-base-100 shadow">
          <div className="d-card-body" style={{ alignItems: "center", padding: "1.5rem" }}>
            <span className="text-sm opacity-60">해당하는 활동이 없어요.</span>
          </div>
        </div>
      ) : (
        <ul className="d-timeline d-timeline-vertical">
          {visible.map((a, i) => {
            const Icon = a.type === "글" ? PenLine : MessageCircle;
            return (
              <li key={a.id}>
                {i > 0 && <hr />}
                <div className="d-timeline-start text-sm opacity-60" style={{ whiteSpace: "nowrap" }}>{a.time}</div>
                <div className="d-timeline-middle">
                  <span
                    aria-hidden
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: "1.75rem", height: "1.75rem", borderRadius: "50%",
                      background: "var(--color-primary)", color: "var(--color-primary-content)",
                    }}
                  >
                    <Icon size={13} />
                  </span>
                </div>
                <div className="d-timeline-end d-timeline-box" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="d-badge d-badge-outline d-badge-sm">{a.type}</span>
                  <span style={{ flex: 1 }}>{a.title}</span>
                  <span className="text-sm opacity-50" style={{ display: "inline-flex", alignItems: "center", gap: "0.2rem", flexShrink: 0 }}>
                    <ThumbsUp size={11} aria-hidden />{a.likes}
                  </span>
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
