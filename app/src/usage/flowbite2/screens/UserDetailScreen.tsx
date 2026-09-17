import * as React from "react";
import { Badge, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { USERS, type User } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<User["status"], string> = {
  활성: "success",
  정지: "failure",
};

const ALL_PERMISSIONS = ["읽기", "쓰기", "삭제", "사용자 관리", "결제 관리"];

export function UserDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const user = USERS.find((u) => u.id === selectedId);
  const [editing, setEditing] = React.useState(false);

  if (!user) {
    return (
      <div style={{ border: "1px dashed var(--color-gray-300)", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
        <span style={{ color: "var(--color-gray-500)", fontSize: "14px" }}>
          사용자를 먼저 골라 주세요. "사용자" 탭에서 행을 눌러 보세요.
        </span>
        <div style={{ marginTop: "12px" }}>
          <Button size="sm" onClick={ => onNavigate?.("users")}>사용자 목록으로</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontWeight: 600, fontSize: "18px" }}>{user.name}</span>
          <Badge color={STATUS_COLOR[user.status]}>{user.status}</Badge>
        </div>
        <span style={{ fontSize: "14px", color: "var(--color-gray-500)" }}>{user.email} · {user.role}</span>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
          <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-gray-500)" }}>권한</span>
          <Button size="xs" color="light" onClick={ => setEditing(true)}>권한 편집</Button>
        </div>
        {user.permissions.length === 0 ? (
          <span style={{ fontSize: "14px", color: "var(--color-gray-500)" }}>부여된 권한 없음</span>
        ) : (
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {user.permissions.map((p) => <Badge key={p} color="gray">{p}</Badge>)}
          </div>
        )}
      </div>

      <Modal show={editing} onClose={ => setEditing(false)} size="sm">
        <ModalHeader>{user.name} 권한 편집</ModalHeader>
        <ModalBody>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {ALL_PERMISSIONS.map((p) => (
              <label key={p} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                <input type="checkbox" defaultChecked={user.permissions.includes(p)} />
                {p}
              </label>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={ => setEditing(false)}>저장</Button>
          <Button color="light" onClick={ => setEditing(false)}>취소</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
