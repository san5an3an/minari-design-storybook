export type AttachmentState = "idle" | "uploading" | "processing" | "error" | "done";
export type AttachmentSize = "default" | "sm" | "xs";
export type AttachmentOrientation = "horizontal" | "vertical";

export interface AttachmentContract {
  // 현재 가능한 동작, 기본값 done
  state?: AttachmentState;
  // 카드 크기. 기본값 default
  size?: AttachmentSize;
  // 미리보기 배치 방향. 기본값 horizontal
  orientation?: AttachmentOrientation;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const AttachmentParts = [
  "AttachmentMedia", // 미리보기 위치
  "AttachmentContent", // 이름과 설명 래퍼
  "AttachmentTitle", // 파일 이름
  "AttachmentDescription", // 종류, 크기, 상태 표시
  "AttachmentActions", // 동작 버튼 위치. 끝쪽 정렬
  "AttachmentAction",
  "AttachmentTrigger", // 카드 전체를 덮는 열기 트리거
  "AttachmentGroup", // 여러 항목 가로 배치
] as const;

export type AttachmentMediaVariant = "icon" | "image";
export interface AttachmentMediaContract {
  // 표시인가 그림인가. 기본값 icon
  variant?: AttachmentMediaVariant;
}
