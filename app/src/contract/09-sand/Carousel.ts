export type CarouselOrientation = "horizontal" | "vertical";

export interface CarouselContract {
  // 미는 방향, 기본값 horizontal
  orientation?: CarouselOrientation;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const CarouselParts = [
  "CarouselContent", // 캐러셀 트랙. 넘치는 부분 잘라내기
  "CarouselItem", // 캐러셀 항목 하나, role="group"
  "CarouselPrevious", // 이전 슬라이드로 이동하기
  "CarouselNext", // 다음 슬라이드로 이동하기
] as const;
