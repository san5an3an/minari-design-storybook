export interface CollapsibleContract {
  // 초기 펼쳐진 상태
  open?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const CollapsibleParts = [
  "CollapsibleTrigger", // 펼치기 트리거 라벨
  "CollapsibleContent", // 펼침 콘텐츠 영역
] as const;
