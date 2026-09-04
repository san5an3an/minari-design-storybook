export type ToastLayout = "fit" | "fixed";
export type ToastTone = "success" | "danger" | "warning" | "info";

export interface ToastContract {
  // 내용 크기 또는 컨테이너 전체 채움 여부, 기본값 fit
  layout?: ToastLayout;
  // 알림 종류, 시스템 팔레트 한정, info는 전용 색 없이 neutral 사용
  tone?: ToastTone;
  // 나가는 중 상태 표시, 삭제 전 부착하고 애니메이션 종료 후 제거
  leaving?: boolean;
  // 퇴장하며 위치 접기, 항목 빠지면 나머지 위치 이동. leaving과 함께 적용
  collapsing?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ToastParts = [
  "ToastIcon", // 토스트 종류 표시 아이콘
  "ToastRegion", // 떠 있는 요소 위치. role="status" 부착 지점
  "ToastAction", // 실행취소 등 동작 버튼 최대 1개
  "ToastContent", // 제목, 본문 세로 배치 래퍼
  "ToastTitle", // 토스트 제목, 본문보다 크고 굵게 표시
  "ToastBody", // 한 행 설명, 제목 부족할 때만 사용
  "ToastClose", // 즉시 닫기 버튼
  "ToastProgress", // 잔여 시간 감소 진행 바
] as const;

export type ToastRegionPosition = "top-start" | "top-center" | "top-end" | "bottom-start" | "bottom-center" | "bottom-end";
export interface ToastRegionContract {
  // 알림 표시 위치, 기본값 오른쪽 아래
  position?: ToastRegionPosition;
}
