export interface ScrollareaContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ScrollareaParts = [
  "ScrollBar", // 스크롤 막대. 방향 지정
] as const;

export type ScrollBarOrientation = "vertical" | "horizontal";
export interface ScrollBarContract {
  // 굴리는 방향, 기본값 vertical
  orientation?: ScrollBarOrientation;
}
