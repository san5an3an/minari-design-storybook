import * as React from "react";
import {
  Avatar, Badge, Banner, Button, Checkbox, FileInput, Label, Modal, ModalBody, ModalFooter, ModalHeader, Radio,
  Select, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput, ToggleSwitch,
} from "flowbite-react";
import { GripVertical, Mail, X } from "lucide-react";
import { USERS, type User } from "../data";
import type { ScreenProps } from "../screens";

const ROLE_TONE: Record<User["role"], { bg: string; fg: string }> = {
  관리자: { bg: "var(--color-primary-50)", fg: "var(--color-primary-700)" },
  편집자: { bg: "var(--color-yellow-50)", fg: "var(--color-yellow-700)" },
  뷰어: { bg: "var(--color-gray-100)", fg: "var(--color-gray-700)" },
};
const ROLE_SERIES: Record<User["role"], string> = {
  관리자: "var(--component-chart-series-1)",
  편집자: "var(--component-chart-series-2)",
  뷰어: "var(--component-chart-series-3)",
};
const STATUS_COLOR: Record<User["status"], string> = {
  활성: "success",
  정지: "failure",
};

// 히어로 대신 인사말 한 문장만 렌더링
function GreetingLine {
  return (
    <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 600 }}>
      Hello, 관리자님! 👋
    </h3>
  );
}

// 스파크라인 없는 작은 통계 카드
function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "10px 12px" }}>
      <div style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{label}</div>
      <div style={{ fontSize: "16px", fontWeight: 600 }}>{value}</div>
    </div>
  );
}

// 미니 막대그래프. 역할별, 상태별 인원 표시
function MiniBarChart({ title, data }: { title: string; data: { label: string; count: number; color: string }[] }) {
  const max = Math.max(...data.map((d) => d.count), 1);
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px", flex: 1, minWidth: 0 }}>
      <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-gray-600)" }}>{title}</span>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "56px", marginTop: "8px" }}>
        {data.map((d) => (
          <div key={d.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: 1 }}>
            <span style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{d.count}</span>
            <div style={{ width: "100%", height: `${Math.max((d.count / max) * 40, 4)}px`, background: d.color, borderRadius: "3px" }} />
            <span style={{ fontSize: "10px", color: "var(--color-gray-500)" }}>{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 카드 리스트, 드래그 기능 없이 grip 아이콘으로만 암시
function UserCard({ user, onOpen }: { user: User; onOpen:  => void }) {
  const completeness = Math.round((user.permissions.length / 4) * 100);
  const tone = ROLE_TONE[user.role];
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => { if (e.key === "Enter") onOpen; }}
      style={{
        display: "flex", alignItems: "center", gap: "10px", border: "1px solid var(--color-gray-200)",
        borderRadius: "8px", padding: "12px", cursor: "pointer", background: "var(--color-gray-50)",
      }}
    >
      <GripVertical size={16} color="var(--color-gray-400)" aria-hidden />
      <Avatar rounded size="sm" placeholderInitials={user.name[0]} />
      <div style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
        <span style={{ fontSize: "13px", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user.name}</span>
        <span style={{ fontSize: "11px", color: "var(--color-gray-500)", display: "flex", alignItems: "center", gap: "4px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          <Mail size={11} aria-hidden />{user.email}
        </span>
      </div>
      <span style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "999px", background: tone.bg, color: tone.fg, fontWeight: 600, flexShrink: 0 }}>
        {user.role}
      </span>
      <Badge color={STATUS_COLOR[user.status]} className="flex-shrink-0">{user.status}</Badge>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px", width: "72px", flexShrink: 0 }}>
        <span style={{ fontSize: "10px", color: "var(--color-gray-500)" }}>권한 {completeness}%</span>
        <div style={{ width: "100%", height: "5px", borderRadius: "999px", background: "var(--color-gray-200)" }}>
          <div style={{ width: `${completeness}%`, height: "100%", borderRadius: "999px", background: "var(--color-primary-500)" }} />
        </div>
      </div>
    </div>
  );
}

// 상태별 인원 도넛 차트, MiniBarChart 막대와 다른 차트 종류
function StatusDonut({ data }: { data: { label: string; count: number; color: string }[] }) {
  const total = data.reduce((s, d) => s + d.count, 0) || 1;
  const r = 26;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px", flex: 1, minWidth: 0 }}>
      <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-gray-600)" }}>상태별 인원</span>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "8px" }}>
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="상태별 인원 도넛 차트">
          <circle cx="30" cy="30" r={r} fill="none" stroke="var(--color-gray-100)" strokeWidth="8" />
          {data.map((d) => {
            const frac = d.count / total;
            const dash = frac * circumference;
            const seg = (
              <circle
                key={d.label}
                cx="30"
                cy="30"
                r={r}
                fill="none"
                stroke={d.color}
                strokeWidth="8"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 30 30)"
              >
                <title>{`${d.label} ${d.count}명`}</title>
              </circle>
            );
            offset += dash;
            return seg;
          })}
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {data.map((d) => (
            <div key={d.label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px" }}>
              <span aria-hidden style={{ width: "7px", height: "7px", borderRadius: "50%", background: d.color, flexShrink: 0 }} />
              <span style={{ color: "var(--color-gray-600)" }}>{d.label}</span>
              <span style={{ fontWeight: 600 }}>{d.count}명</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 정지 사용자 경고를 닫기 가능한 Banner로 표시
function SuspendedBanner({ count, onDismiss }: { count: number; onDismiss:  => void }) {
  if (count === 0) return null;
  return (
    <Banner>
      <div
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px",
          background: "var(--color-yellow-50)", border: "1px solid var(--color-yellow-200)",
          borderRadius: "8px", padding: "10px 14px",
        }}
      >
        <span style={{ fontSize: "13px", color: "var(--color-yellow-700)" }}>
          정지된 사용자 {count}명이 있어요. 계정 상태를 확인해 주세요.
        </span>
        <button type="button" aria-label="배너 닫기" onClick={onDismiss} style={{ display: "flex", color: "var(--color-yellow-700)" }}>
          <X size={14} />
        </button>
      </div>
    </Banner>
  );
}

const EMPTY_INVITE = { name: "", email: "", role: "뷰어" as User["role"] };

export function UsersScreen({ onNavigate, onSelect, users: usersProp, onInviteUser }: ScreenProps) {
  // Dashboard가 기준 목록 제공하기
  const users = usersProp ?? USERS;
  const [cardView, setCardView] = React.useState(true);
  const [roleFilter, setRoleFilter] = React.useState<User["role"] | "전체">("전체");
  const [statusFilter, setStatusFilter] = React.useState<User["status"] | "전체">("전체");
  const [hideSuspended, setHideSuspended] = React.useState(false);
  const [bannerDismissed, setBannerDismissed] = React.useState(false);
  const [importFile, setImportFile] = React.useState<string | null>(null);
  const [inviteOpen, setInviteOpen] = React.useState(false);
  const [invite, setInvite] = React.useState(EMPTY_INVITE);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const inviteUser =  => {
    if (!invite.name.trim || !invite.email.trim) return;
    const next: User = {
      id: `u${Date.now}`,
      name: invite.name.trim,
      email: invite.email.trim,
      role: invite.role,
      status: "활성",
      lastLoginLabel: "아직 로그인 안 함",
      permissions: [],
    };
    onInviteUser?.(next);
    setInvite(EMPTY_INVITE);
    setInviteOpen(false);
  };

  const rows = users.filter((u) => {
    if (hideSuspended && u.status === "정지") return false;
    if (roleFilter !== "전체" && u.role !== roleFilter) return false;
    if (statusFilter !== "전체" && u.status !== statusFilter) return false;
    return true;
  });

  const roleData = (["관리자", "편집자", "뷰어"] as const).map((role) => ({
    label: role, count: users.filter((u) => u.role === role).length,
    color: ROLE_SERIES[role],
  }));
  const statusData = (["활성", "정지"] as const).map((status) => ({
    label: status, count: users.filter((u) => u.status === status).length,
    color: status === "활성" ? "var(--color-green-500)" : "var(--color-red-400)",
  }));

  const suspendedCount = users.filter((u) => u.status === "정지").length;

  return (
    <div className="flex flex-col gap-4">
      {!bannerDismissed && <SuspendedBanner count={suspendedCount} onDismiss={ => setBannerDismissed(true)} />}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <GreetingLine />
        {/* 사용자 초대 기능 추가 */}
        <Button size="sm" onClick={ => setInviteOpen(true)}>+ 새 사용자 초대</Button>
      </div>
      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))" }}>
        <MiniStat label="전체 사용자" value={`${users.length}명`} />
        <MiniStat label="활성" value={`${users.filter((u) => u.status === "활성").length}명`} />
        <MiniStat label="정지" value={`${users.filter((u) => u.status === "정지").length}명`} />
        <MiniStat label="관리자" value={`${users.filter((u) => u.role === "관리자").length}명`} />
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <MiniBarChart title="역할별 인원" data={roleData} />
        <StatusDonut data={statusData} />
      </div>

      <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
        <div className="flex flex-wrap items-center gap-3">
          <Select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value as User["role"] | "전체")} sizing="sm" className="max-w-[140px]">
            <option value="전체">역할 전체</option>
            <option value="관리자">관리자</option>
            <option value="편집자">편집자</option>
            <option value="뷰어">뷰어</option>
          </Select>
          <fieldset className="flex items-center gap-3">
            <legend className="sr-only">상태 필터</legend>
            {(["전체", "활성", "정지"] as const).map((s) => (
              <label key={s} className="flex items-center gap-1 text-sm">
                <Radio name="status" checked={statusFilter === s} onChange={ => setStatusFilter(s)} />
                {s}
              </label>
            ))}
          </fieldset>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox checked={hideSuspended} onChange={(e) => setHideSuspended(e.target.checked)} />
            정지된 사용자 숨기기
          </label>
          <div className="ml-auto flex items-center gap-2">
            {/* 카드, 표 보기 ToggleSwitch로 전환 */}
            <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>표로 보기</span>
            <ToggleSwitch checked={cardView} onChange={setCardView} label="카드로 보기" />
          </div>
        </div>
        {/* FileInput으로 CSV 일괄 가져오기 */}
        <div className="mt-3 flex items-end gap-2" style={{ borderTop: "1px solid var(--color-gray-100)", paddingTop: "12px" }}>
          <div className="flex-1">
            <span style={{ fontSize: "12px", color: "var(--color-gray-500)", marginBottom: "4px", display: "block" }}>
              사용자 일괄 가져오기(CSV)
            </span>
            <FileInput accept=".csv" onChange={(e) => setImportFile(e.target.files?.[0]?.name ?? null)} sizing="sm" />
          </div>
          <Button size="sm" color="light" disabled={!importFile}>가져오기{importFile ? `, ${importFile}` : ""}</Button>
        </div>
      </div>

      {cardView ? (
        <div className="flex flex-col gap-2">
          {rows.map((u) => <UserCard key={u.id} user={u} onOpen={ => open(u.id)} />)}
          {rows.length === 0 && <span style={{ fontSize: "13px", color: "var(--color-gray-500)" }}>조건에 맞는 사용자가 없어요.</span>}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table style={{ minWidth: "560px" }}>
            <TableHead>
              <TableRow>
                <TableHeadCell>이름</TableHeadCell>
                <TableHeadCell>이메일</TableHeadCell>
                <TableHeadCell>역할</TableHeadCell>
                <TableHeadCell>상태</TableHeadCell>
                <TableHeadCell>마지막 로그인</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              {rows.map((u) => (
                <TableRow key={u.id} onClick={ => open(u.id)} style={{ cursor: "pointer" }}>
                  <TableCell className="font-medium">{u.name}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>{u.role}</TableCell>
                  <TableCell><Badge color={STATUS_COLOR[u.status]}>{u.status}</Badge></TableCell>
                  <TableCell>{u.lastLoginLabel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Modal show={inviteOpen} onClose={ => setInviteOpen(false)} size="sm">
        <ModalHeader>새 사용자 초대</ModalHeader>
        <ModalBody>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <Label htmlFor="invite-name">이름</Label>
              <TextInput
                id="invite-name"
                value={invite.name}
                onChange={(e) => setInvite((d) => ({ ...d, name: e.target.value }))}
                placeholder="예: 김하늘"
              />
            </div>
            <div>
              <Label htmlFor="invite-email">이메일</Label>
              <TextInput
                id="invite-email"
                type="email"
                value={invite.email}
                onChange={(e) => setInvite((d) => ({ ...d, email: e.target.value }))}
                placeholder="예: haneul.kim@example.com"
              />
            </div>
            <div>
              <Label htmlFor="invite-role">역할</Label>
              <Select
                id="invite-role"
                value={invite.role}
                onChange={(e) => setInvite((d) => ({ ...d, role: e.target.value as User["role"] }))}
              >
                <option value="관리자">관리자</option>
                <option value="편집자">편집자</option>
                <option value="뷰어">뷰어</option>
              </Select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={inviteUser} disabled={!invite.name.trim || !invite.email.trim}>초대 보내기</Button>
          <Button color="light" onClick={ => setInviteOpen(false)}>취소</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
