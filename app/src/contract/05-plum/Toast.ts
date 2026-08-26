export type ToastLayout = "fit" | "fixed";
export type ToastTone = "success" | "danger" | "warning";

export interface ToastContract {
  // 내용 크기 또는 컨테이너 전체 채움 여부, 기본값 fit
  layout?: ToastLayout;
  // 알림 종류, 시스템 팔레트로 한정
  tone?: ToastTone;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ToastParts = [
  "ToastIcon", // 토스트 종류 표시 아이콘
  "ToastRegion", // 떠 있는 요소 위치. role="status" 부착 지점
  "ToastAction", // 실행취소 등 동작 버튼 최대 1개
] as const;
