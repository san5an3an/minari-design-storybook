import * as React from "react";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fieldVars, sizeVars } from "./tone";

export interface ShadcnInputProps
  extends Omit<React.ComponentProps<"input">, "size"> {
  // 필드가 받는 값 표시. placeholder 아니며 입력 시 사라지는 라벨임
  label?: React.ReactNode;
  // 도움말, 오류 문구 위치. 항상 공간을 차지해야 화면이 흔들리지 않음
  help?: React.ReactNode;
  // 여러 줄 지원, 토큰은 동일하게 유지하고 태그만 변경
  multiline?: boolean;
}

export function Input({
  label, help, multiline, style, id, ...rest
}: ShadcnInputProps) {
  const auto = React.useId;
  const inputId = id ?? auto;
  const boxStyle = {
    ...fieldVars("input"),
    // 여러 줄일 때 본문 행간 값 사용. 둘째 줄이 실제로 생기는 구조임
    ...sizeVars("input", undefined, multiline ? "normal" : "snug"),
    ...style,
  };

  // 여러 줄 입력은 Textarea 사용
  const field = multiline ? (
    <Textarea
      id={inputId}
      style={boxStyle}
      {...(rest as React.ComponentProps<"textarea">)}
    />
  ) : (
    <ShadcnInput id={inputId} style={boxStyle} {...rest} />
  );

  if (label === undefined && help === undefined) return field;

  return (
    <div
      className="flex flex-col"
      style={{ gap: "var(--component-input-label-gap)" }}
    >
      {label !== undefined ? (
        <Label
          htmlFor={inputId}
          style={{
            color: "var(--component-input-label-fg)",
            fontSize: "var(--component-input-label-font-size)",
          }}
        >
          {label}
        </Label>
      ) : null}
      {field}
      {help !== undefined ? (
        <span
          style={{
            color: "var(--component-input-help-fg)",
            fontSize: "var(--component-input-help-font-size)",
          }}
        >
          {help}
        </span>
      ) : null}
    </div>
  );
}
