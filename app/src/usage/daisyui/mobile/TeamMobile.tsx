"use client";

import * as React from "react";
import { ChevronRight, Shield, UserCheck, UserPlus, Users } from "lucide-react";
import { INITIAL_MEMBERS, ROLES, type Member } from "../screens/TeamScreen";
import { BRAND, BackToList, Sheet, opensSheet, useBodyTopOn } from "./DaisyuiMobileShell";

const REMOVE_SHEET = "d1-remove-sheet";

export function TeamMobile() {
  const [members, setMembers] = React.useState<Member[]>(INITIAL_MEMBERS);
  const [selected, setSelected] = React.useState<Member | null>(null);
  const [inviting, setInviting] = React.useState(false);
  const [inviteName, setInviteName] = React.useState("");
  const [inviteRole, setInviteRole] = React.useState<Member["role"]>("뷰어");
  const removeRef = React.useRef<HTMLDialogElement>(null);
  const top = useBodyTopOn<HTMLDivElement>(inviting ? "invite" : selected?.name ?? "list");

  const active = members.filter((m) => m.status === "활성").length;
  const invited = members.filter((m) => m.status === "초대됨").length;
  const admins = members.filter((m) => m.role === "관리자").length;

  const setRole = (name: string, role: string) => {
    setMembers((prev) => prev.map((m) => (m.name === name ? { ...m, role } : m)));
    setSelected((prev) => (prev && prev.name === name ? { ...prev, role } : prev));
  };
  const submitInvite = () => {
    if (!inviteName.trim()) return;
    setMembers((prev) => [...prev, { name: inviteName.trim(), role: inviteRole, status: "초대됨" }]);
    setInviteName("");
    setInviting(false);
  };
  const confirmRemove = () => {
    if (!selected) return;
    setMembers((prev) => prev.filter((m) => m.name !== selected.name));
    removeRef.current?.close();
    setSelected(null);
  };

  if (inviting) {
    return (
      <div ref={top} className="d-card bg-base-100 shadow">
        <div className="d-card-body gap-2 p-4">
          <BackToList onClick={() => setInviting(false)} />
          <h3 className="text-lg font-bold">팀원 초대</h3>
          <label className="d-label mt-2" htmlFor="d1m-invite-name">이름</label>
          <input id="d1m-invite-name" type="text" className="d-input w-full" value={inviteName} onChange={(e) => setInviteName(e.target.value)} placeholder="초대할 사람 이름" />
          <label className="d-label mt-2" htmlFor="d1m-invite-role">역할</label>
          <select id="d1m-invite-role" className="d-select w-full" value={inviteRole} onChange={(e) => setInviteRole(e.target.value)}>
            {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          <div className="mt-4 flex gap-2">
            <button type="button" className="d-btn d-btn-ghost flex-1" onClick={() => setInviting(false)}>취소</button>
            <button type="button" className="d-btn d-btn-primary flex-1" disabled={!inviteName.trim()} onClick={submitInvite}>초대 보내기</button>
          </div>
        </div>
      </div>
    );
  }

  if (selected) {
    return (
      <div ref={top}>
        <Sheet id={REMOVE_SHEET} label="팀원 제거" ref={removeRef}>
          <h3 className="text-lg font-bold">팀원 제거</h3>
          <p className="py-2 text-sm opacity-70"><b>{selected.name}</b>님을 팀에서 제거할까요? 이 작업은 되돌릴 수 없어요.</p>
          <div className="d-modal-action">
            <form method="dialog" className="flex w-full gap-2">
              <button type="button" className="d-btn flex-1" onClick={() => removeRef.current?.close()}>취소</button>
              <button type="button" className="d-btn d-btn-error flex-1" onClick={confirmRemove}>제거</button>
            </form>
          </div>
        </Sheet>

        <div className="d-card bg-base-100 shadow">
          <div className="d-card-body gap-2 p-4">
            <BackToList onClick={() => setSelected(null)} />
            <h3 className="text-lg font-bold">{selected.name}</h3>
            <span className="text-sm opacity-60">{selected.status}</span>
            <label className="d-label mt-2" htmlFor="d1m-member-role">역할</label>
            <select id="d1m-member-role" className="d-select w-full" value={selected.role} onChange={(e) => setRole(selected.name, e.target.value)}>
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <button type="button" className="d-btn d-btn-error d-btn-outline mt-4 w-full" {...opensSheet(REMOVE_SHEET)} onClick={() => removeRef.current?.showModal()}>
              팀원 제거
            </button>
          </div>
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
    <div ref={top} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="d-stat rounded-box bg-base-100 px-4 py-3 shadow">
              <div className="d-stat-figure" style={{ color: BRAND }}><Icon size={20} aria-hidden /></div>
              <div className="d-stat-title">{s.label}</div>
              <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>{s.value}</div>
            </div>
          );
        })}
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body p-4">
          <span className="font-semibold">역할별 분포</span>
          <div className="mt-2 flex flex-col gap-2">
            {ROLES.map((role) => {
              const count = members.filter((m) => m.role === role).length;
              return (
                <div key={role} className="flex items-center gap-2.5">
                  <span className="w-16 shrink-0 text-sm">{role}</span>
                  <progress className="d-progress d-progress-primary w-full" value={count} max={members.length} />
                  <span className="w-6 shrink-0 text-right text-xs opacity-60">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="rounded-box bg-base-100 shadow">
        <ul className="d-list">
          <li className="flex items-center gap-3 px-4 pt-4 pb-2">
            {/* 공식 d-avatar-group 으로 활성 팀원 아바타 표시 */}
            <div className="d-avatar-group -space-x-4">
              {members.filter((m) => m.status === "활성").slice(0, 5).map((m) => (
                <div key={m.name} className="d-avatar d-avatar-placeholder">
                  <div className="w-8 rounded-full bg-neutral text-neutral-content">
                    <span className="text-xs">{m.name.slice(0, 1)}</span>
                  </div>
                </div>
              ))}
              {active > 5 && (
                <div className="d-avatar d-avatar-placeholder">
                  <div className="w-8 rounded-full bg-base-300 text-base-content">
                    <span className="text-xs">+{active - 5}</span>
                  </div>
                </div>
              )}
            </div>
            <span className="text-sm opacity-60">활성 팀원 {active}명</span>
          </li>
          {members.map((m) => (
            <li key={m.name}>
              <button type="button" className="d-list-row w-full items-center py-3 text-left" onClick={() => setSelected(m)}>
                <div className="d-avatar d-avatar-placeholder">
                  <div className="w-10 rounded-full bg-neutral text-neutral-content">
                    <span>{m.name.slice(0, 1)}</span>
                  </div>
                </div>
                <div className="d-list-col-grow min-w-0">
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm opacity-60">{m.role}</div>
                </div>
                <span className={`d-badge ${m.status === "활성" ? "d-badge-success" : "d-badge-ghost"}`}>{m.status}</span>
                <ChevronRight size={16} className="opacity-40" aria-hidden />
              </button>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-4">
          <button type="button" className="d-btn d-btn-primary w-full" onClick={() => setInviting(true)}>
            <UserPlus size={16} aria-hidden /> 팀원 초대
          </button>
        </div>
      </div>
    </div>
  );
}
