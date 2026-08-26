import * as React from "react";
import { Switch as ShadcnSwitch } from "@/components/ui/switch";
import {
  Field as ShadcnField, FieldContent, FieldDescription, FieldLabel, FieldTitle,
} from "@/components/ui/field";
import type { SwitchProps } from "../../systems/props";

function SwitchRoot({
  size = "md", description, children, className, ...rest
}: SwitchProps) {
  const invalid = rest["aria-invalid"] === true || rest["aria-invalid"] === "true";
  const knob = (
    <ShadcnSwitch
      className={className}
      // 트랙만 토큰값 적용, 핸들 16px 고정이라 24px 트랙에서 작아 보임
      style={{
        // 너비는 높이에서 파생, 별도 지정하면 단마다 비율이 달라지는 문제가 있음
        ["--ods-switch-h" as string]: `var(--component-switch-${size}-track-height)`,
        ["--ods-switch-w" as string]: `var(--component-switch-${size}-track-width)`,
        ["--ods-switch-thumb" as string]: `var(--component-switch-${size}-thumb-size)`,
        ["--ods-switch-inset" as string]: `var(--component-switch-${size}-thumb-inset)`,
        height: "var(--ods-switch-h)",
        width: "var(--ods-switch-w)",
      } as React.CSSProperties}
      {...rest}
    />
  );
  if (children === undefined && description === undefined) return knob;

  return (
    <label
      className="inline-flex items-center"
      style={{
        gap: "var(--component-switch-gap)",
        color: invalid
          ? "var(--component-switch-label-fg-invalid)"
          : "var(--component-switch-label-fg)",
        fontSize: "var(--component-switch-label-font-size)",
      }}
    >
      {knob}
      {description === undefined ? (
        children
      ) : (
        <span>
          {children}
          <span
            style={{
              display: "block",
              color: "var(--component-switch-description-fg)",
              fontSize: "var(--component-switch-description-font-size)",
            }}
          >
            {description}
          </span>
        </span>
      )}
    </label>
  );
}

function Card({ title, description, ...rest }: SwitchProps & {
  title?: React.ReactNode; description?: React.ReactNode;
}) {
  return (
    <FieldLabel className="ods-switch-card" htmlFor={rest.id}>
      <ShadcnField orientation="horizontal">
        <FieldContent>
          <FieldTitle>{title}</FieldTitle>
          {description === undefined ? null : (
            <FieldDescription>{description}</FieldDescription>
          )}
        </FieldContent>
        <SwitchRoot {...rest} />
      </ShadcnField>
    </FieldLabel>
  );
}

export const Switch = Object.assign(SwitchRoot, { Card });
