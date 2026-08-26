import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { RadioProps } from "../../systems/props";

function RadioRoot({
  value, children, disabled, description, className, ...rest
}: RadioProps) {
  // 라벨 색은 인라인 style로 지정. CSS로 직접 지정 불가능임, 오류 시 빨강 필수임
  const invalid = rest["aria-invalid"] === true || rest["aria-invalid"] === "true";
  const dot = (
    <RadioGroupItem
      value={value}
      disabled={disabled}
      className={className}
      {...rest}
      // Checkbox처럼 크기를 변수로 경유. 가운데 점 38% 위치 규칙임
      style={{
        ["--ods-radio-size" as string]: "var(--component-radio-size)",
        width: "var(--ods-radio-size)",
        height: "var(--ods-radio-size)",
      } as React.CSSProperties}
    />
  );
  if (children === undefined && description === undefined) return dot;

  return (
    <label
      // 설명 있으면 2행이 되어 동그라미 상단 정렬
      className={description === undefined ? "inline-flex items-center" : "inline-flex items-start"}
      style={{
        gap: "var(--component-radio-gap)",
        color: invalid
          ? "var(--component-radio-label-fg-invalid)"
          : "var(--component-radio-label-fg)",
        fontSize: "var(--component-radio-label-font-size)",
        letterSpacing: "var(--component-radio-label-letter-spacing)",
      }}
    >
      {dot}
      {description === undefined ? (
        children
      ) : (
        <span>
          {children}
          <span
            style={{
              display: "block",
              color: "var(--component-radio-description-fg)",
              fontSize: "var(--component-radio-description-font-size)",
              letterSpacing: "var(--component-radio-description-letter-spacing)",
            }}
          >
            {description}
          </span>
        </span>
      )}
    </label>
  );
}

function Group({
  children, value, defaultValue, onValueChange,
}: {
  children?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
}) {
  return (
    <RadioGroup
      value={value}
      defaultValue={defaultValue}
      onValueChange={(v) => onValueChange?.(String(v))}
      style={{ gap: "var(--component-radio-group-gap)" }}
    >
      {children}
    </RadioGroup>
  );
}

export const Radio = Object.assign(RadioRoot, { Group });
