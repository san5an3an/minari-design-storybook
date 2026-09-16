import * as React from "react";

interface Member {
  name: string;
  role: string;
  status: "활성" | "초대됨";
}

const MEMBERS: Member[] = [
  { name: "한지우", role: "관리자", status: "활성" },
  { name: "김서연", role: "편집자", status: "활성" },
  { name: "박도윤", role: "편집자", status: "초대됨" },
  { name: "이하은", role: "뷰어", status: "활성" },
];

export function TeamScreen {
  const active = MEMBERS.filter((m) => m.status === "활성").length;
  return (
    <div className="d-card bg-base-100 shadow">
      <div className="d-card-body" style={{ padding: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.25rem 0",
          }}
        >
          <span className="text-sm opacity-60">총 {MEMBERS.length}명</span>
          <span className="d-badge d-badge-success d-badge-sm">활성 {active}명</span>
        </div>
        <ul>
          {MEMBERS.map((m, i) => (
            <li
              key={m.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem 1.25rem",
                borderTop: i > 0 ? "1px solid var(--color-base-300, #eee)" : undefined,
              }}
            >
              <div className="d-avatar d-avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-10 rounded-full">
                  <span>{m.name.slice(0, 1)}</span>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>{m.name}</div>
                <div className="text-sm opacity-60">{m.role}</div>
              </div>
              <span className={`d-badge ${m.status === "활성" ? "d-badge-success" : "d-badge-ghost"}`}>
                {m.status}
              </span>
            </li>
          ))}
        </ul>
        <div className="d-card-actions justify-end" style={{ padding: "0.75rem 1.25rem" }}>
          <button type="button" className="d-btn d-btn-primary d-btn-sm">팀원 초대</button>
        </div>
      </div>
    </div>
  );
}
