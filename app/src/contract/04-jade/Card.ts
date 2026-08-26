export interface CardContract {
  // 카드 전체 링크 여부. 기본값 false
  interactive?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const CardParts = [
  "CardTitle", // 카드 제목
  "CardBody", // 카드 본문
] as const;
