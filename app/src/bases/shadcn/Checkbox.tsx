import * as React from "react";
import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import type { CheckboxProps } from "../../systems/props";

function CheckboxRoot({
  children, indeterminate, description, className, ...rest
}: CheckboxProps) {
  // 오류 여부 여기서 확인. 인라인 색이 CSS 보다 우선 적용되기 때문임
  const invalid = rest["aria-invalid"] === true || rest["aria-invalid"] === "true";
  const box = (
    <ShadcnCheckbox
      indeterminate={indeterminate}
      className={className}
      // 크기를 변수로 전달. CSS 규칙이 인라인 width를 못 읽는 제약임
      style={{
        ["--ods-checkbox-size" as string]: "var(--component-checkbox-size)",
        width: "var(--ods-checkbox-size)",
        height: "var(--ods-checkbox-size)",
      } as React.CSSProperties}
      {...rest}
    />
  );
  if (children === undefined && description === undefined) return box;

  return (
    <label
      // 설명 있으면 2행이 되어 상자를 세로 중앙 대신 상단 정렬
      className={description === undefined ? "inline-flex items-center" : "inline-flex items-start"}
      style={{
        gap: "var(--component-checkbox-gap)",
        color: invalid
          ? "var(--component-checkbox-label-fg-invalid)"
          : "var(--component-checkbox-label-fg)",
        fontSize: "var(--component-checkbox-label-font-size)",
        letterSpacing: "var(--component-checkbox-label-letter-spacing)",
      }}
    >
      {box}
      {description === undefined ? (
        children
      ) : (
        <span>
          {children}
          <span
            style={{
              display: "block",
              color: "var(--component-checkbox-description-fg)",
              fontSize: "var(--component-checkbox-description-font-size)",
              letterSpacing: "var(--component-checkbox-description-letter-spacing)",
            }}
          >
            {description}
          </span>
        </span>
      )}
    </label>
  );
}

function Group({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col" style={{ gap: "var(--component-checkbox-gap)" }}>
      {children}
    </div>
  );
}

export const Checkbox = Object.assign(CheckboxRoot, { Group });
