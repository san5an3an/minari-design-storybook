import * as React from "react";
import { Shield, UserCheck, UserPlus, Users } from "lucide-react";

interface Member {
  name: string;
  role: string;
  status: "활성" | "초대됨";
}

const INITIAL_MEMBERS: Member[] = [
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
  const [members, setMembers] = React.useState<Member[]>(INITIAL_MEMBERS);
  const [selected, setSelected] = React.useState<Member | null>(null);
  const [inviting, setInviting] = React.useState(false);
  const [inviteName, setInviteName] = React.useState("");
  const [inviteRole, setInviteRole] = React.useState<Member["role"]>("뷰어");

  const active = members.filter((m) => m.status === "활성").length;
  const invited = members.filter((m) => m.status === "초대됨").length;
  const admins = members.filter((m) => m.role === "관리자").length;

  const setRole = (name: string, role: string) => {
    setMembers((prev) => prev.map((m) => (m.name === name ? { ...m, role } : m)));
    setSelected((prev) => (prev && prev.name === name ? { ...prev, role } : prev));
  };

  const submitInvite =  => {
    if (!inviteName.trim) return;
    setMembers((prev) => [...prev, { name: inviteName.trim, role: inviteRole, status: "초대됨" }]);
    setInviteName("");
    setInviting(false);
  };

  if (inviting) {
    return (
      <div className="d-card bg-base-100 shadow" style={{ padding: "1.25rem" }}>
        <div className="d-card-body">
          <button type="button" className="d-btn d-btn-ghost d-btn-sm" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setInviting(false)}>
            ← 목록으로
          </button>
          <h3 style={{ fontWeight: 700, fontSize: "1.1rem", margin: "0.5rem 0 0" }}>팀원 초대</h3>
          <label className="d-label mt-3">이름</label>
          <input type="text" className="d-input d-input-bordered w-full" value={inviteName} onChange={(e) => setInviteName(e.target.value)} placeholder="초대할 사람 이름" />
          <label className="d-label mt-3">역할</label>
          <select className="d-select d-select-bordered w-full" value={inviteRole} onChange={(e) => setInviteRole(e.target.value)}>
            {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          <div className="d-card-actions justify-end mt-4">
            <button type="button" className="d-btn d-btn-ghost" onClick={ => setInviting(false)}>취소</button>
            <button type="button" className="d-btn d-btn-primary" disabled={!inviteName.trim} onClick={submitInvite}>초대 보내기</button>
          </div>
        </div>
      </div>
    );
  }

  if (selected) {
    return (
      <div className="d-card bg-base-100 shadow" style={{ padding: "1.25rem" }}>
        <div className="d-card-body">
          <button type="button" className="d-btn d-btn-ghost d-btn-sm" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setSelected(null)}>
            ← 목록으로
          </button>
          <h3 style={{ fontWeight: 700, fontSize: "1.1rem", margin: "0.5rem 0 0" }}>{selected.name}</h3>
          <span className="text-sm opacity-60">{selected.status}</span>
          <label className="d-label mt-3">역할</label>
          <select
            className="d-select d-select-bordered w-full"
            value={selected.role}
            onChange={(e) => setRole(selected.name, e.target.value)}
          >
            {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>
    );
  }

  const STATS = [
    { label: "전체 팀원", value: String(members.length), icon: Users },
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
              const count = members.filter((m) => m.role === role).length;
              return (
                <div key={role} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ width: "4.5rem", fontSize: "0.8125rem" }}>{role}</span>
                  <progress className="d-progress d-progress-primary w-full" value={count} max={members.length} />
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
            {members.map((m, i) => (
              <li
                key={m.name}
                onClick={ => setSelected(m)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1.25rem",
                  borderTop: i > 0 ? "1px solid var(--color-base-300, #eee)" : undefined,
                  cursor: "pointer",
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
            <button type="button" className="d-btn d-btn-primary d-btn-sm" onClick={ => setInviting(true)}>팀원 초대</button>
          </div>
        </div>
      </div>
    </div>
  );
}
