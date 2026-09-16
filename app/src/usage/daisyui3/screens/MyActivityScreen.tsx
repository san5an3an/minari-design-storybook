import * as React from "react";

const ACTIVITY = [
  { type: "글", title: "커스텀 테마 만드는 법 공유합니다", time: "1일 전" },
  { type: "댓글", title: "다음 릴리즈에 다크모드 넣어주세요, 저도 원해요 +1", time: "2시간 전" },
];

export function MyActivityScreen {
  return (
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
  );
}
