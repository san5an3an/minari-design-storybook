import * as React from "react";
import { Shield, UserCheck, UserPlus, Users } from "lucide-react";

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
  { name: "정서준", role: "편집자", status: "활성" },
  { name: "최지후", role: "뷰어", status: "활성" },
  { name: "오세준", role: "관리자", status: "활성" },
  { name: "윤새별", role: "뷰어", status: "초대됨" },
];

const ROLES = ["관리자", "편집자", "뷰어"] as const;

export function TeamScreen {
  const active = MEMBERS.filter((m) => m.status === "활성").length;
  const invited = MEMBERS.filter((m) => m.status === "초대됨").length;
  const admins = MEMBERS.filter((m) => m.role === "관리자").length;

  const STATS = [
    { label: "전체 팀원", value: String(MEMBERS.length), icon: Users },
    { label: "활성", value: String(active), icon: UserCheck },
    { label: "초대중", value: String(invited), icon: UserPlus },
    { label: "관리자", value: String(admins), icon: Shield },
  ] as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div className="d-stats shadow" style={{ width: "100%" }}>
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="d-stat">
              <div className="d-stat-figure text-primary">
                <Icon size={24} aria-hidden />
              </div>
              <div className="d-stat-title">{s.label}</div>
              <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>{s.value}</div>
            </div>
          );
        })}
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body">
          <span style={{ fontWeight: 600 }}>역할별 분포</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
            {ROLES.map((role) => {
              const count = MEMBERS.filter((m) => m.role === role).length;
              return (
                <div key={role} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ width: "4.5rem", fontSize: "0.8125rem" }}>{role}</span>
                  <progress className="d-progress d-progress-primary w-full" value={count} max={MEMBERS.length} />
                  <span style={{ width: "2rem", textAlign: "right", fontSize: "0.75rem" }} className="opacity-60">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body" style={{ padding: 0 }}>
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
    </div>
  );
}
