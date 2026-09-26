import {
  Questionnaire as ShadcnQuestionnaire, QuestionnaireActions, QuestionnaireChoice,
  QuestionnaireChoiceDescription, QuestionnaireChoices, QuestionnaireDescription,
  QuestionnaireError, QuestionnaireInput, QuestionnaireItem, QuestionnaireNext,
  QuestionnairePrevious, QuestionnaireProgress, QuestionnaireSkip,
  QuestionnaireSubmit, QuestionnaireTitle,
} from "@/components/ui/questionnaire";
import { cn } from "@/lib/utils";
import type { QuestionnaireImpl, QuestionnaireProps } from "../../systems/props";
import { withDims } from "./tone";

// questionnaire-radius, gap-inner 토큰은 연결 제외. 받을 요소가 분명하지 않고 gap-inner(space.md)를 선택지 안 간격 10px 자리에 넣으면 1.6배가 됨
// 선택지 최소 높이 min-h-11 지정. 좁은 시스템에서 여백이 줄어도 터치 영역이 44px 아래로 안 내려감
function QuestionnaireRoot({ items, children, className, ...rest }: QuestionnaireProps & { className?: string }) {
  return (
    <ShadcnQuestionnaire items={items as never} className={cn("gap-(--component-questionnaire-gap)", className)} {...rest}>
      {children}
    </ShadcnQuestionnaire>
  );
}

export const Questionnaire = Object.assign(QuestionnaireRoot, {
  Progress: QuestionnaireProgress,
  Item: withDims(QuestionnaireItem, "gap-(--component-questionnaire-item-gap)"),
  Title: QuestionnaireTitle,
  Description: QuestionnaireDescription,
  Choices: withDims(QuestionnaireChoices, "gap-(--component-questionnaire-choices-gap)"),
  Choice: withDims(
    QuestionnaireChoice,
    "rounded-(--component-questionnaire-choice-radius) " +
      "px-(--component-questionnaire-choice-padding-inline) py-(--component-questionnaire-choice-padding-block)",
  ),
  ChoiceDescription: QuestionnaireChoiceDescription,
  Input: QuestionnaireInput,
  Error: QuestionnaireError,
  Actions: withDims(QuestionnaireActions, "gap-(--component-questionnaire-actions-gap)"),
  Previous: QuestionnairePrevious,
  Skip: QuestionnaireSkip,
  Next: QuestionnaireNext,
  Submit: QuestionnaireSubmit,
}) as unknown as QuestionnaireImpl;
