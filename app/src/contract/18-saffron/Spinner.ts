export interface SpinnerContract {
  // 채워진 배경 위 배치 여부. 기본값 false 지정
  onFill?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const SpinnerParts = [
  "SpinnerBlock", // 회전 원, 텍스트 래퍼. role="status" 부착 위치
] as const;
