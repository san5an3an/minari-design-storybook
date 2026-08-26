import * as React from "react";
import { cx } from "./cx";

export type QuestionnaireProps = React.FormHTMLAttributes<HTMLFormElement>;

export const Questionnaire = React.forwardRef<HTMLFormElement, QuestionnaireProps>(
  ({ children, className, ...rest }, ref) => (
    <form
      className={cx("ods-questionnaire", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </form>
  )
);
Questionnaire.displayName = "Questionnaire";

// 현재 순서 표시, role=progressbar
export const QuestionnaireProgress = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-questionnaire-progress", className)} {...rest}>
      {children}
    </div>
  )
);
QuestionnaireProgress.displayName = "QuestionnaireProgress";

export const QuestionnaireItem = React.forwardRef<HTMLFieldSetElement, React.FieldsetHTMLAttributes<HTMLFieldSetElement>>(
  ({ className, children, ...rest }, ref) => (
    <fieldset ref={ref} className={cx("ods-questionnaire-item", className)} {...rest}>
      {children}
    </fieldset>
  )
);
QuestionnaireItem.displayName = "QuestionnaireItem";

// 질문 텍스트, legend로 표시
export const QuestionnaireTitle = React.forwardRef<HTMLLegendElement, React.HTMLAttributes<HTMLLegendElement>>(
  ({ className, children, ...rest }, ref) => (
    <legend ref={ref} className={cx("ods-questionnaire-title", className)} {...rest}>
      {children}
    </legend>
  )
);
QuestionnaireTitle.displayName = "QuestionnaireTitle";

// 보조 설명
export const QuestionnaireDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cx("ods-questionnaire-description", className)} {...rest}>
      {children}
    </p>
  )
);
QuestionnaireDescription.displayName = "QuestionnaireDescription";

// 답이 표시되는 위치
export const QuestionnaireChoices = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-questionnaire-choices", className)} {...rest}>
      {children}
    </div>
  )
);
QuestionnaireChoices.displayName = "QuestionnaireChoices";

// 정답 단일 선택, 행 전체 클릭 영역
export const QuestionnaireChoice = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, children, ...rest }, ref) => (
    <label ref={ref} className={cx("ods-questionnaire-choice", className)} {...rest}>
      {children}
    </label>
  )
);
QuestionnaireChoice.displayName = "QuestionnaireChoice";

// 답에 딸린 설명
export const QuestionnaireChoiceDescription = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-questionnaire-choice-description", className)} {...rest}>
      {children}
    </span>
  )
);
QuestionnaireChoiceDescription.displayName = "QuestionnaireChoiceDescription";

// 자유 서술형 답
export const QuestionnaireInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, children, ...rest }, ref) => (
    <input ref={ref} className={cx("ods-questionnaire-input", className)} {...rest}>
      {children}
    </input>
  )
);
QuestionnaireInput.displayName = "QuestionnaireInput";

// 오류 메시지, 어긋났을 때만 표시
export const QuestionnaireError = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cx("ods-questionnaire-error", className)} {...rest}>
      {children}
    </p>
  )
);
QuestionnaireError.displayName = "QuestionnaireError";

// 이전/다음 이동 버튼 위치
export const QuestionnaireActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-questionnaire-actions", className)} {...rest}>
      {children}
    </div>
  )
);
QuestionnaireActions.displayName = "QuestionnaireActions";
