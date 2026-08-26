export interface SliderContract {
  // 값 고정
  disabled?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const SliderParts = [
  "SliderField", // 이름, 값, 트랙 래퍼
  "SliderHead", // 이름, 값 배치 행
  "SliderValue", // 현재 값
  "SliderTicks", // 양 끝값
] as const;
