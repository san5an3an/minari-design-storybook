export type SkeletonShape = "text" | "block" | "circle";

export interface SkeletonContract {
  // 전달될 값의 형태, 기본값 text
  shape?: SkeletonShape;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const SkeletonParts = [
  "SkeletonGroup", // 여러 행 래퍼
] as const;
