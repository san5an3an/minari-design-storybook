export type AlertTone = "neutral" | "brand" | "danger" | "success" | "warning" | "info";

export interface AlertContract {
  // 알림 종류, 시스템 팔레트로 한정
  tone?: AlertTone;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const AlertParts = [
  "AlertIcon", // 종류 구분 아이콘. 색상과 모양을 함께 사용
  "AlertTitle", // 알림 제목
  "AlertDescription", // 제목 아래 본문. 제목만으로 부족할 때 사용
  "AlertAction", // 되돌리기 등 동작 버튼. 최대 1개
] as const;
