import * as React from "react";

interface Trend { rank: number; title: string; category: string; likes: number }

const TRENDING: Trend[] = [
  { rank: 1, title: "다음 릴리즈에 다크모드 넣어주세요", category: "기능 제안", likes: 24 },
  { rank: 2, title: "커스텀 테마 만드는 법 공유합니다", category: "팁 공유", likes: 18 },
  { rank: 3, title: "모바일 앱 알림이 너무 늦게 와요", category: "버그 신고", likes: 9 },
  { rank: 4, title: "검색 결과 정렬 기준이 궁금해요", category: "질문", likes: 5 },
  { rank: 5, title: "API 요청 제한이 너무 낮아요", category: "기능 제안", likes: 14 },
  { rank: 6, title: "다국어 지원 로드맵이 있나요", category: "질문", likes: 7 },
  { rank: 7, title: "단축키 정리해봤어요", category: "팁 공유", likes: 21 },
  { rank: 8, title: "첨부파일 업로드가 자꾸 실패해요", category: "버그 신고", likes: 4 },
];

const CATEGORIES = ["기능 제안", "팁 공유", "버그 신고", "질문"] as const;

export function TrendingScreen {
  return (
    <div className="daisyui-dark-scope" style={{ borderRadius: "var(--radius-box, 0.5rem)", padding: "1.25rem" }}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="overflow-x-auto">
          <table className="d-table">
            <thead>
              <tr>
                <th>순위</th>
                <th>제목</th>
                <th>분류</th>
                <th>좋아요</th>
              </tr>
            </thead>
            <tbody>
              {TRENDING.map((t) => (
                <tr key={t.rank}>
                  <td><span className="d-badge d-badge-neutral d-badge-sm">{t.rank}</span></td>
                  <td>{t.title}</td>
                  <td><span className="d-badge d-badge-outline d-badge-sm">{t.category}</span></td>
                  <td>{t.likes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-card bg-base-100 shadow" style={{ height: "fit-content" }}>
          <div className="d-card-body">
            <span style={{ fontWeight: 600 }}>분류별 분포</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
              {CATEGORIES.map((c) => {
                const count = TRENDING.filter((t) => t.category === c).length;
                return (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: "4.5rem", fontSize: "0.75rem" }} className="opacity-60">{c}</span>
                    <progress className="d-progress d-progress-primary w-full" value={count} max={TRENDING.length} />
                    <span style={{ width: "1.25rem", textAlign: "right", fontSize: "0.75rem" }} className="opacity-60">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
