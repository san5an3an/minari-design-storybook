export interface ProgressContract {
  // 굵은 막대. 기본값 false
  lg?: boolean;
  // 완료 시점 불명 시 사용, Spinner 대안 우선 검토
  indeterminate?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ProgressParts = [
  "ProgressHead", // 이름, 값 놓이는 행
  "ProgressTrack", // 진행바 바탕
  "ProgressBar", // 진행률 채워지는 부분
] as const;
