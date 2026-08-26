export interface ListrowContract {
  // 줄 전체가 하나의 링크인지 여부
  interactive?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ListrowParts = [
  "ListRowList", // 행 목록 컨테이너
  "ListRowLead", // 왼쪽 표시, 아이콘 또는 머리글자
  "ListRowMain", // 본문 위치
  "ListRowTitle", // 행 이름
  "ListRowSub", // 보조 설명
  "ListRowTrail", // 오른쪽에 오는 값, 표시, 컨트롤
] as const;
