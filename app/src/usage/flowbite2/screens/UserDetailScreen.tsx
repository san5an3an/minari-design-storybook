import * as React from "react";
import {
  Accordion, AccordionContent, AccordionPanel, AccordionTitle, Avatar, Badge, Button, Drawer, DrawerHeader,
  DrawerItems, FloatingLabel, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Progress,
  Radio, Toast, ToggleSwitch,
} from "flowbite-react";
import { CheckCircle2, Clock3, KeyRound } from "lucide-react";
import { ACCOUNT_ACTIVITY, USERS, type User } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<User["status"], string> = {
  활성: "success",
  정지: "failure",
};

const PERMISSION_GROUPS: { category: string; permissions: string[] }[] = [
  { category: "계정", permissions: ["읽기", "쓰기", "사용자 관리"] },
  { category: "콘텐츠", permissions: ["콘텐츠 편집", "댓글 관리"] },
  { category: "결제", permissions: ["결제 관리", "삭제"] },
];

const ROLES: User["role"][] = ["관리자", "편집자", "뷰어"];

export function UserDetailScreen({ selectedId, onNavigate, users: usersProp }: ScreenProps) {
  // Dashboard 사용자 목록을 기준으로 사용, 없으면 정적 USERS로 대체하기
  const users = usersProp ?? USERS;
  const user = users.find((u) => u.id === selectedId);
  const [editing, setEditing] = React.useState(false);
  const [roleModal, setRoleModal] = React.useState(false);
  const [auditOpen, setAuditOpen] = React.useState(false);
  const [nextRole, setNextRole] = React.useState<User["role"]>(user?.role ?? "뷰어");
  const [perms, setPerms] = React.useState<Set<string>>(new Set(user?.permissions ?? []));
  const [memo, setMemo] = React.useState("");
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const notify = (message: string) => {
    setToastMessage(message);
    window.setTimeout( => setToastMessage(null), 2500);
  };

  React.useEffect( => {
    setPerms(new Set(user?.permissions ?? []));
    setNextRole(user?.role ?? "뷰어");
  }, [user]);

  if (!user) {
    return (
      <div style={{ border: "1px dashed var(--color-gray-300)", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
        <span style={{ color: "var(--color-gray-500)", fontSize: "14px" }}>
          사용자를 먼저 골라 주세요. "사용자" 탭에서 카드나 행을 눌러 보세요.
        </span>
        <div style={{ marginTop: "12px" }}>
          <Button size="sm" onClick={ => onNavigate?.("users")}>사용자 목록으로</Button>
        </div>
      </div>
    );
  }

  const allPermissionCount = PERMISSION_GROUPS.reduce((s, g) => s + g.permissions.length, 0);
  const completeness = Math.round((perms.size / allPermissionCount) * 100);
  const related = users.filter((u) => u.role === user.role && u.id !== user.id);
  const activity = ACCOUNT_ACTIVITY[user.id] ?? [];

  const togglePerm = (p: string) => {
    setPerms((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p); else next.add(p);
      return next;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Avatar rounded size="md" placeholderInitials={user.name[0]} />
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontWeight: 600, fontSize: "18px" }}>{user.name}</span>
            <Badge color={STATUS_COLOR[user.status]}>{user.status}</Badge>
          </div>
          <span style={{ fontSize: "14px", color: "var(--color-gray-500)" }}>{user.email} · {user.role}</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {/* Drawer로 감사 로그 슬라이드 표시 */}
          <Button size="xs" color="light" onClick={ => setAuditOpen(true)}>감사 로그</Button>
          <Button size="xs" color="light" onClick={ => setRoleModal(true)}>역할 변경</Button>
        </div>
      </div>

      {/* TextInput과 다른 입력 스타일 */}
      <FloatingLabel
        variant="outlined"
        label="관리자 메모"
        sizing="sm"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />

      {/* 스파크라인 없는 작은 통계 카드 */}
      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))" }}>
        <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "10px 12px" }}>
          <div style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>마지막 로그인</div>
          <div style={{ fontSize: "15px", fontWeight: 600 }}>{user.lastLoginLabel}</div>
        </div>
        <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "10px 12px" }}>
          <div style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>보유 권한</div>
          <div style={{ fontSize: "15px", fontWeight: 600 }}>{perms.size}개</div>
        </div>
        <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "10px 12px" }}>
          <div style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>같은 역할 동료</div>
          <div style={{ fontSize: "15px", fontWeight: 600 }}>{related.length}명</div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
          <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-gray-500)" }}>권한 완성도</span>
          <Button size="xs" color="light" onClick={ => setEditing(true)}>일괄 편집</Button>
        </div>
        <Progress progress={completeness} color={completeness >= 75 ? "default" : completeness === 0 ? "gray" : "yellow"} textLabel={`${completeness}%`} textLabelPosition="outside" labelText size="lg" />
      </div>

      {/* Accordion과 ToggleSwitch로 오버레이 없이 권한 켜고 끄기 */}
      <Accordion>
        {PERMISSION_GROUPS.map((group) => (
          <AccordionPanel key={group.category}>
            <AccordionTitle>
              {group.category} ({group.permissions.filter((p) => perms.has(p)).length}/{group.permissions.length})
            </AccordionTitle>
            <AccordionContent>
              <div className="flex flex-col gap-3">
                {group.permissions.map((p) => (
                  <div key={p} className="flex items-center justify-between">
                    <span style={{ fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <KeyRound size={13} aria-hidden color="var(--color-gray-400)" />
                      {p}
                    </span>
                    <ToggleSwitch checked={perms.has(p)} onChange={ => togglePerm(p)} label={`${p} 권한`} />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionPanel>
        ))}
      </Accordion>

      <div className="flex flex-col gap-3 md:flex-row">
        <div style={{ flex: 1, minWidth: 0, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
          <span style={{ fontSize: "13px", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
            <Clock3 size={14} aria-hidden />최근 활동
          </span>
          {activity.length === 0 ? (
            <span style={{ fontSize: "13px", color: "var(--color-gray-500)", display: "block", marginTop: "8px" }}>기록 없음</span>
          ) : (
            <ListGroup className="mt-2">
              {activity.map((a) => (
                <ListGroupItem key={a.id}>
                  <span className="flex w-full items-center justify-between">
                    <span style={{ fontSize: "13px" }}>{a.label}</span>
                    <span style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{a.timeLabel}</span>
                  </span>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
          <span style={{ fontSize: "13px", fontWeight: 600 }}>같은 역할의 다른 사용자</span>
          {related.length === 0 ? (
            <span style={{ fontSize: "13px", color: "var(--color-gray-500)", display: "block", marginTop: "8px" }}>없음</span>
          ) : (
            <div className="mt-2 flex flex-col gap-2">
              {related.map((u) => (
                <div key={u.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Avatar rounded size="xs" placeholderInitials={u.name[0]} />
                  <span style={{ fontSize: "13px", flex: 1 }}>{u.name}</span>
                  <Badge color={STATUS_COLOR[u.status]}>{u.status}</Badge>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Modal show={editing} onClose={ => setEditing(false)} size="sm">
        <ModalHeader>{user.name} 권한 일괄 편집</ModalHeader>
        <ModalBody>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {PERMISSION_GROUPS.flatMap((g) => g.permissions).map((p) => (
              <label key={p} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                <input type="checkbox" checked={perms.has(p)} onChange={ => togglePerm(p)} />
                {p}
              </label>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={ => { setEditing(false); notify("권한이 저장됐어요."); }}>저장</Button>
          <Button color="light" onClick={ => setEditing(false)}>취소</Button>
        </ModalFooter>
      </Modal>

      <Modal show={roleModal} onClose={ => setRoleModal(false)} size="sm">
        <ModalHeader>{user.name} 역할 변경</ModalHeader>
        <ModalBody>
          <fieldset className="flex flex-col gap-3">
            <legend className="sr-only">역할 선택</legend>
            {ROLES.map((r) => (
              <label key={r} className="flex items-center gap-2 text-sm">
                <Radio name="role" checked={nextRole === r} onChange={ => setNextRole(r)} />
                {r}
              </label>
            ))}
          </fieldset>
        </ModalBody>
        <ModalFooter>
          <Button onClick={ => { setRoleModal(false); notify(`역할이 ${nextRole}(으)로 바뀌었어요.`); }}>적용</Button>
          <Button color="light" onClick={ => setRoleModal(false)}>취소</Button>
        </ModalFooter>
      </Modal>

      <Drawer open={auditOpen} onClose={ => setAuditOpen(false)} position="right">
        <DrawerHeader title={`${user.name} 감사 로그`} />
        <DrawerItems>
          {activity.length === 0 ? (
            <span style={{ fontSize: "13px", color: "var(--color-gray-500)" }}>기록 없음</span>
          ) : (
            <ListGroup>
              {activity.map((a) => (
                <ListGroupItem key={a.id}>
                  <span className="flex w-full items-center justify-between">
                    <span style={{ fontSize: "13px" }}>{a.label}</span>
                    <span style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{a.timeLabel}</span>
                  </span>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </DrawerItems>
      </Drawer>

      {/* 저장 확인 Toast로 표시 */}
      {toastMessage && (
        <div style={{ position: "fixed", right: "20px", bottom: "20px", zIndex: 30 }}>
          <Toast>
            <span
              style={{
                display: "inline-flex", height: "32px", width: "32px", flexShrink: 0, alignItems: "center",
                justifyContent: "center", borderRadius: "8px", background: "var(--color-green-100)", color: "var(--color-green-600)",
              }}
            >
              <CheckCircle2 size={16} />
            </span>
            <div className="ml-3 text-sm font-normal">{toastMessage}</div>
          </Toast>
        </div>
      )}
    </div>
  );
}
