export interface BannerContract {
  // 옅은 배경 표시 여부. 기본값 false
  soft?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const BannerParts = [
  "BannerTitle", // 배너 제목
  "BannerBody", // 배너 본문
  "BannerActions", // 배너 동작 버튼 위치
] as const;
