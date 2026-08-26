export interface QuestionnaireContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const QuestionnaireParts = [
  "QuestionnaireProgress", // 현재 문항 순서. role="progressbar"
  "QuestionnaireItem",
  "QuestionnaireTitle", // 질문 제목. legend 요소로 표시
  "QuestionnaireDescription", // 질문 보조 설명
  "QuestionnaireChoices", // 답안 목록 위치
  "QuestionnaireChoice", // 정해진 답 하나. 행 전체가 클릭 가능한 위치임
  "QuestionnaireChoiceDescription", // 답 보조 설명
  "QuestionnaireInput", // 자유 입력 답
  "QuestionnaireError", // 오류 문구. 검증 실패 시만 표시
  "QuestionnaireActions", // 이전, 다음 이동 위치
] as const;
