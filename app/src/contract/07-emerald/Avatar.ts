export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarContract {
  // 지름. 기본값 md
  size?: AvatarSize;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const AvatarParts = [
  "AvatarStack", // 겹친 아바타 위치
] as const;
