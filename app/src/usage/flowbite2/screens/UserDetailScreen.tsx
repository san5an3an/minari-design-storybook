import { Badge, Button } from "flowbite-react";
import { USERS, type User } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<User["status"], string> = {
  활성: "success",
  정지: "failure",
};

export function UserDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const user = USERS.find((u) => u.id === selectedId);

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
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-gray-500)", marginBottom: "6px" }}>권한</div>
        {user.permissions.length === 0 ? (
          <span style={{ fontSize: "14px", color: "var(--color-gray-500)" }}>부여된 권한 없음</span>
        ) : (
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {user.permissions.map((p) => <Badge key={p} color="gray">{p}</Badge>)}
          </div>
        )}
      </div>
    </div>
  );
}
