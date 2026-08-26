export type BadgeVariant = "solid" | "subtle" | "outline";
export type BadgeTone = "neutral" | "brand" | "danger" | "success" | "warning";

export interface BadgeContract {
  // 시각적 무게 값
  variant?: BadgeVariant;
  // 팔레트 구성과 1:1 대응하는 의미 색
  tone?: BadgeTone;
  // 표시 위치. 기본 앞쪽, 텍스트 우선 시 뒤쪽
  icon?: "inline-start" | "inline-end";
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const BadgeParts = [
  "BadgeIcon", // 배지 아이콘 표시. 글자 대신할 수 없어 아이콘만 있으면 읽을 수 없음
] as const;
