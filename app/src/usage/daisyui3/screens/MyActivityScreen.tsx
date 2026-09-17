import * as React from "react";
import { MessageCircle, PenLine } from "lucide-react";

interface Activity { type: "글" | "댓글"; title: string; time: string }

const ACTIVITY: Activity[] = [
  { type: "글", title: "커스텀 테마 만드는 법 공유합니다", time: "1일 전" },
  { type: "댓글", title: "다음 릴리즈에 다크모드 넣어주세요, 저도 원해요 +1", time: "2시간 전" },
  { type: "글", title: "단축키 정리해봤어요", time: "3일 전" },
  { type: "댓글", title: "API 요청 제한이 너무 낮아요, 저도 공감합니다", time: "5시간 전" },
  { type: "댓글", title: "검색 결과 정렬 기준이 궁금해요, 최신순이 맞아요", time: "어제" },
  { type: "글", title: "다국어 지원 관련 제안", time: "5일 전" },
  { type: "댓글", title: "첨부파일 업로드가 자꾸 실패해요, 저도 같은 문제 겪었어요", time: "6시간 전" },
];

export function MyActivityScreen {
  const posts = ACTIVITY.filter((a) => a.type === "글").length;
  const comments = ACTIVITY.filter((a) => a.type === "댓글").length;

  return (
    <div className="daisyui-dark-scope" style={{ borderRadius: "var(--radius-box, 0.5rem)", padding: "1.25rem" }}>
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
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {ACTIVITY.map((a, i) => (
            <div key={i} className="d-card bg-base-100 shadow">
              <div className="d-card-body" style={{ padding: "0.9rem 1.1rem", flexDirection: "row", alignItems: "center", gap: "0.75rem" }}>
                <span className="d-badge d-badge-outline d-badge-sm">{a.type}</span>
                <span style={{ flex: 1 }}>{a.title}</span>
                <span className="text-sm opacity-50">{a.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
