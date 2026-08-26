import * as React from "react";
import { cx } from "./cx";

export type FieldOrientation = "vertical" | "horizontal" | "responsive";

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  // 이름 위치를 필드 위 또는 옆으로 지정. responsive는 화면 크기로 변경
  orientation?: FieldOrientation;
  // 오류 상태 여부, 이름과 설명 동시 변경
  invalid?: "true" | "false";
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ orientation = "vertical", invalid = "false", children, className, ...rest }, ref) => (
    <div
      className={cx("ods-field", `ods-field--${orientation}`, className)}
      data-invalid={invalid}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Field.displayName = "Field";

// 필드 이름 표시, Field 감싸면 카드 전체가 선택 그룹으로 전환
export const FieldLabel = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, children, ...rest }, ref) => (
    <label ref={ref} className={cx("ods-field-label", className)} {...rest}>
      {children}
    </label>
  )
);
FieldLabel.displayName = "FieldLabel";

// 이름, 설명 래퍼. 가로 배치에서 없으면 한 덩어리로 렌더링되지 않음
export const FieldContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-field-content", className)} {...rest}>
      {children}
    </div>
  )
);
FieldContent.displayName = "FieldContent";

// 카드 그룹 제목
export const FieldTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-field-title", className)} {...rest}>
      {children}
    </div>
  )
);
FieldTitle.displayName = "FieldTitle";

// 필드 아래 보조 설명, 입력 항목 안내
export const FieldDescription = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-field-description", className)} {...rest}>
      {children}
    </span>
  )
);
FieldDescription.displayName = "FieldDescription";

// 오류 문구를 설명과 같은 위치에 표시. 위치 바뀌면 화면이 흔들리는 문제가 있음
export const FieldError = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-field-error", className)} {...rest}>
      {children}
    </span>
  )
);
FieldError.displayName = "FieldError";

// 여러 Field 세로 배치 위치
export const FieldGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-field-group", className)} {...rest}>
      {children}
    </div>
  )
);
FieldGroup.displayName = "FieldGroup";

// 관련 필드 그룹. 보조기술에 그룹 정보를 전달하는 유일한 방법임
export const FieldSet = React.forwardRef<HTMLFieldSetElement, React.FieldsetHTMLAttributes<HTMLFieldSetElement>>(
  ({ className, children, ...rest }, ref) => (
    <fieldset ref={ref} className={cx("ods-field-set", className)} {...rest}>
      {children}
    </fieldset>
  )
);
FieldSet.displayName = "FieldSet";

// 그룹 이름. FieldSet의 첫 자식 필수
export const FieldLegend = React.forwardRef<HTMLLegendElement, React.HTMLAttributes<HTMLLegendElement>>(
  ({ className, children, ...rest }, ref) => (
    <legend ref={ref} className={cx("ods-field-legend", className)} {...rest}>
      {children}
    </legend>
  )
);
FieldLegend.displayName = "FieldLegend";

// 구역이 바뀌는 위치의 구분선
export const FieldSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-field-separator", className)} {...rest}>
      {children}
    </div>
  )
);
FieldSeparator.displayName = "FieldSeparator";
