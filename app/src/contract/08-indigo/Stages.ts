export interface StagesContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const StagesParts = [
  "StagesItem",
  "StagesMark", // 번호 또는 완료 표시
  "StagesLabel", // 단계 이름
] as const;

export type StagesItemState = "done" | "current" | "todo";
export interface StagesItemContract {
  // 지남, 지금, 아직. 기본값 todo
  state?: StagesItemState;
}
