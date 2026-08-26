export type FieldOrientation = "vertical" | "horizontal" | "responsive";

export interface FieldContract {
  // 이름 위치를 필드 위 또는 옆으로 지정. responsive는 화면 크기로 변경
  orientation?: FieldOrientation;
  // 오류 상태 여부, 이름과 설명 동시 변경
  invalid?: "true" | "false";
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const FieldParts = [
  "FieldLabel", // 필드 라벨, Field를 감싸면 카드 선택 그룹으로 전환
  "FieldContent", // 라벨과 설명을 포함하는 영역
  "FieldTitle", // 카드 선택 그룹 제목
  "FieldDescription", // 필드 아래 입력 안내 설명 행
  "FieldError", // 오류 문구를 설명과 같은 위치에 표시
  "FieldGroup", // 여러 Field를 세로로 쌓는 영역
  "FieldSet", // 의미상 관련된 필드 그룹. 보조기술에 그룹 정보를 전달하는 유일한 방법임
  "FieldLegend", // 그룹 이름 표시. legend는 fieldset의 첫 자식이어야 하는 명세임
  "FieldSeparator", // 구역 경계 구분선
] as const;
