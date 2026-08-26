export interface AlertdialogContract {
  // 창 크기. sm은 한 가지만 묻는 짧은 창임
  size?: "default" | "sm";
  // 되돌릴 수 없는 작업 여부. destructive면 확인 버튼과 배지가 danger 색임
  variant?: "default" | "destructive";
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const AlertdialogParts = [
  "AlertDialogMedia", // 경고 유형 표시. 색보다 모양으로 우선 구분
  "AlertDialogTitle", // 일어날 일을 요약한 제목
  "AlertDialogDescription", // 되돌릴 수 없음을 알리는 설명
  "AlertDialogFooter", // 버튼 두 개 위치
] as const;
