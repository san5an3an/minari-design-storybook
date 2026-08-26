export interface MessagescrollerContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const MessagescrollerParts = [
  "MessageScrollerViewport", // 실제 스크롤 이동 위치
  "MessageScrollerContent", // 메시지 누적 위치. role="log"
  "MessageScrollerItem", // 스크롤 앵커 가능한 메시지 항목
  "MessageScrollerButton", // 끝으로 이동 버튼. 가로 중앙 정렬
] as const;
