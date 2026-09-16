import * as React from "react";

const TRENDING = [
  { rank: 1, title: "다음 릴리즈에 다크모드 넣어주세요", likes: 24 },
  { rank: 2, title: "커스텀 테마 만드는 법 공유합니다", likes: 18 },
  { rank: 3, title: "모바일 앱 알림이 너무 늦게 와요", likes: 9 },
];

export function TrendingScreen {
  return (
    <div className="overflow-x-auto">
      <table className="d-table">
        <thead>
          <tr>
            <th>순위</th>
            <th>제목</th>
            <th>좋아요</th>
          </tr>
        </thead>
        <tbody>
          {TRENDING.map((t) => (
            <tr key={t.rank}>
              <td><span className="d-badge d-badge-neutral d-badge-sm">{t.rank}</span></td>
              <td>{t.title}</td>
              <td>{t.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
