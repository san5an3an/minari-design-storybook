import {
  Questionnaire as ShadcnQuestionnaire, QuestionnaireActions, QuestionnaireChoice,
  QuestionnaireChoiceDescription, QuestionnaireChoices, QuestionnaireDescription,
  QuestionnaireError, QuestionnaireInput, QuestionnaireItem, QuestionnaireNext,
  QuestionnairePrevious, QuestionnaireProgress, QuestionnaireSkip,
  QuestionnaireSubmit, QuestionnaireTitle,
} from "@/components/ui/questionnaire";
import type { QuestionnaireImpl, QuestionnaireProps } from "../../systems/props";

function QuestionnaireRoot({ items, children, ...rest }: QuestionnaireProps) {
  return (
    <ShadcnQuestionnaire items={items as never} {...rest}>
      {children}
    </ShadcnQuestionnaire>
  );
}

export const Questionnaire = Object.assign(QuestionnaireRoot, {
  Progress: QuestionnaireProgress,
  Item: QuestionnaireItem,
  Title: QuestionnaireTitle,
  Description: QuestionnaireDescription,
  Choices: QuestionnaireChoices,
  Choice: QuestionnaireChoice,
  ChoiceDescription: QuestionnaireChoiceDescription,
  Input: QuestionnaireInput,
  Error: QuestionnaireError,
  Actions: QuestionnaireActions,
  Previous: QuestionnairePrevious,
  Skip: QuestionnaireSkip,
  Next: QuestionnaireNext,
  Submit: QuestionnaireSubmit,
}) as unknown as QuestionnaireImpl;
