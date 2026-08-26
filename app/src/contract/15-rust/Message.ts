export type MessageAlign = "start" | "end";

export interface MessageContract {
  // 대화 내 메시지 좌우 위치. 기본값 start
  align?: MessageAlign;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const MessageParts = [
  "MessageGroup", // 같은 사람의 연속 발화 그룹
  "MessageAvatar", // 아바타 위치. self-end로 하단 정렬
  "MessageContent", // 머리, 말풍선, 바닥 래퍼
  "MessageHeader", // 이름, 시각 표시. 말풍선과 좌우 여백 동일 유지
  "MessageFooter", // 상태, 동작 표시. align=end 시 끝으로 정렬
] as const;
