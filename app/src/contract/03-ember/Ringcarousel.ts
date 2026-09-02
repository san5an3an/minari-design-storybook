export interface RingcarouselContract {
  // 셰이더 준비 전 상태
  busy?: "true" | "false";
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const RingcarouselParts = [
  "RingCarouselFallback", // WebGL 미지원 대체 목록
  "RingCarouselLabel", // 현재 앞면 항목 이름
  "RingCarouselIndex", // 현재 순서 / 전체 개수
] as const;
