import {
  Field as ShadcnField, FieldContent, FieldDescription, FieldError, FieldGroup,
  FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";
import type { FieldImpl, FieldProps } from "../../systems/props";

function FieldRoot({
  orientation = "vertical", label, htmlFor, description, error, disabled,
  children, className, ...rest
}: FieldProps) {
  const invalid = error !== undefined && error !== "";
  const help = invalid ? (
    <FieldError>{error}</FieldError>
  ) : description === undefined ? null : (
    <FieldDescription>{description}</FieldDescription>
  );
  const side = orientation === "horizontal" || orientation === "responsive";

  return (
    <ShadcnField
      orientation={orientation}
      data-invalid={invalid ? "true" : undefined}
      data-disabled={disabled ? "true" : undefined}
      // 이름과 입력칸 사이 간격 지정. shadcn 원본 gap-2 를 대체함
      className={cn("gap-(--component-field-gap)", className)}
      {...rest}
    >
      {/* 가로 배치 시 라벨, 설명을 FieldContent로 그룹화, 안 하면 셋 나란히 배치 */}
      {side && (label !== undefined || help) ? (
        <FieldContent>
          {label === undefined ? null : <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>}
          {help}
        </FieldContent>
      ) : (
        label === undefined ? null : <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
      )}
      {children}
      {side ? null : help}
    </ShadcnField>
  );
}

function Group({ children, className }: { children?: React.ReactNode; className?: string }) {
  // Field 사이 간격 지정. 안에 든 묶음은 shadcn 의 *:data-[slot=field-group]:gap-4 가 더 강해 그대로 유지됨
  return <FieldGroup className={cn("gap-(--component-field-group-gap)", className)}>{children}</FieldGroup>;
}

// 의미가 같은 필드는 fieldset, legend 사용. 제목만으론 그룹 정보 미전달
function Set({
  legend, description, children,
}: { legend?: React.ReactNode; description?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <FieldSet>
      {legend === undefined ? null : <FieldLegend>{legend}</FieldLegend>}
      {description === undefined ? null : <FieldDescription>{description}</FieldDescription>}
      {children}
    </FieldSet>
  );
}

function Separator({ children }: { children?: React.ReactNode }) {
  return <FieldSeparator>{children}</FieldSeparator>;
}

export const Field = Object.assign(FieldRoot, {
  Group,
  Set,
  Separator,
  Content: FieldContent,
  Title: FieldTitle,
  Label: FieldLabel,
  Description: FieldDescription,
  Error: FieldError,
}) as FieldImpl;
