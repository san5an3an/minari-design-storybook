export type SheetSide = "top" | "right" | "bottom" | "left";

export interface SheetContract {
  // 나오는 변, 기본값 right
  side?: SheetSide;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const SheetParts = [
  "SheetHeader", // 제목 놓이는 영역
  "SheetTitle", // 시트 주제
  "SheetDescription", // 제목 아래 설명 문장
  "SheetFooter", // 마무리 동작 위치
] as const;
