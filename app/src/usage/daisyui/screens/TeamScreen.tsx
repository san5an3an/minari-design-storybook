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
  const removeDialogRef = React.useRef<HTMLDialogElement>(null);

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

  const confirmRemove =  => {
    if (!selected) return;
    setMembers((prev) => prev.filter((m) => m.name !== selected.name));
    removeDialogRef.current?.close;
    setSelected(null);
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
          <input type="text" className="d-input w-full" value={inviteName} onChange={(e) => setInviteName(e.target.value)} placeholder="초대할 사람 이름" />
          <label className="d-label mt-3">역할</label>
          <select className="d-select w-full" value={inviteRole} onChange={(e) => setInviteRole(e.target.value)}>
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
      <>
        <dialog ref={removeDialogRef} className="d-modal">
          <div className="d-modal-box">
            <h3 className="text-lg font-bold">팀원 제거</h3>
            <p className="py-2 text-sm opacity-70"><b>{selected.name}</b>님을 팀에서 제거할까요? 이 작업은 되돌릴 수 없어요.</p>
            <div className="d-modal-action">
              <form method="dialog" style={{ display: "flex", gap: "0.5rem" }}>
                <button type="button" className="d-btn" onClick={ => removeDialogRef.current?.close}>취소</button>
                <button type="button" className="d-btn d-btn-error" onClick={confirmRemove}>제거</button>
              </form>
            </div>
          </div>
          <form method="dialog" className="d-modal-backdrop"><button>close</button></form>
        </dialog>

        <div className="d-card bg-base-100 shadow" style={{ padding: "1.25rem" }}>
          <div className="d-card-body">
            <button type="button" className="d-btn d-btn-ghost d-btn-sm" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setSelected(null)}>
              ← 목록으로
            </button>
            <h3 style={{ fontWeight: 700, fontSize: "1.1rem", margin: "0.5rem 0 0" }}>{selected.name}</h3>
            <span className="text-sm opacity-60">{selected.status}</span>
            <label className="d-label mt-3">역할</label>
            <select
              className="d-select w-full"
              value={selected.role}
              onChange={(e) => setRole(selected.name, e.target.value)}
            >
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <div className="d-card-actions justify-end mt-4">
              <button type="button" className="d-btn d-btn-error d-btn-outline d-btn-sm" onClick={ => removeDialogRef.current?.showModal}>
                팀원 제거
              </button>
            </div>
          </div>
        </div>
      </>
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
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 1.25rem 0" }}>
            {/* avatar.json #005 anatomy 기반, 활성 팀원 한눈에 표시 */}
            <div className="d-avatar-group -space-x-4">
              {members.filter((m) => m.status === "활성").slice(0, 5).map((m) => (
                <div key={m.name} className="d-avatar d-avatar-placeholder">
                  <div className="bg-neutral text-neutral-content w-8 rounded-full">
                    <span className="text-xs">{m.name.slice(0, 1)}</span>
                  </div>
                </div>
              ))}
              {active > 5 && (
                <div className="d-avatar d-avatar-placeholder">
                  <div className="bg-base-300 text-base-content w-8 rounded-full">
                    <span className="text-xs">+{active - 5}</span>
                  </div>
                </div>
              )}
            </div>
            <span className="text-sm opacity-60">활성 팀원 {active}명</span>
          </div>
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
                  borderTop: i > 0 ? "1px solid var(--color-base-300)" : undefined,
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
