import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import type { InputProps } from "../../systems/props";

// boolean, true, false 유니온을 하나로 좁히기
function isInvalid(v: InputProps["aria-invalid"]): boolean {
  return v === true || v === "true";
}

export function Input({
  id, label, help, multiline, placeholder, defaultValue, disabled,
  "aria-invalid": ariaInvalid, className,
}: InputProps) {
  // children은 공용 계약에 있지만 여기선 금지, 필드는 글자용이라 자식은 못 받음
  const auto = React.useId;
  const inputId = id ?? auto;
  const invalid = isInvalid(ariaInvalid);
  const helpId = `${inputId}-help`;

  const field = (
    <OutlinedInput
      id={inputId}
      // className은 두 곳 다 유지. label, help 유무로 적용이 갈리는 문제임
      className={label === undefined && help === undefined ? className : undefined}
      multiline={multiline}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={disabled}
      error={invalid}
      // 도움말이 있으면 읽도록 연결. 화면 텍스트와 스크린리더 텍스트가 일치해야 하는 제약임
      aria-describedby={help === undefined ? undefined : helpId}
      // 라벨 전달 제외. NotchedOutline 테두리 홈이 라벨과 겹치는 문제 있음
      notched={false}
      sx={{
        background: "var(--component-input-bg)",
        color: "var(--component-input-fg)",
        borderRadius: "var(--component-input-radius)",
        fontSize: "var(--component-input-font-size)",
        letterSpacing: "var(--component-input-letter-spacing)",
        gap: "var(--component-input-gap)",
        // 여백은 안쪽 input 요소에 16.5px 14px로 지정
        "& .MuiOutlinedInput-input": {
          paddingInline: "var(--component-input-padding-inline)",
          paddingBlock: "var(--component-input-padding-block)",
          // 여러 줄일 때 본문 행간 값 사용. 둘째 줄이 실제로 생기는 구조임
          lineHeight: `var(--base-font-line-height-${multiline ? "normal" : "snug"})`,
          "&::placeholder": { color: "var(--component-input-fg-placeholder)", opacity: 1 },
        },
        // 테두리는 fieldset이 담당. 루트의 border로는 적용되지 않음
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--component-input-border)",
          borderWidth: "var(--semantic-border-width-default)",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--component-input-border-strong)",
        },
        // 오류/포커스 선택자에 클래스 추가. MUI가 클래스 둘 써서 밀릴 수 있음
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--component-input-border-focus)",
        },
        "&.Mui-error .MuiOutlinedInput-notchedOutline, &.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline":
          { borderColor: "var(--component-input-border-invalid)" },
        "&.Mui-disabled": {
          background: "var(--component-input-disabled-bg)",
          color: "var(--component-input-disabled-fg)",
          WebkitTextFillColor: "var(--component-input-disabled-fg)",
        },
      }}
    />
  );

  if (label === undefined && help === undefined) return field;

  return (
    <FormControl
      className={className}
      error={invalid}
      disabled={disabled}
      margin="none"
      sx={{ gap: "var(--component-input-label-gap)" }}
    >
      {label === undefined ? null : (
        <FormLabel
          htmlFor={inputId}
          sx={{
            color: "var(--component-input-label-fg)",
            fontSize: "var(--component-input-label-font-size)",
            letterSpacing: "var(--component-input-label-letter-spacing)",
            // 라벨 색은 오류 시에도 고정
            "&.Mui-error, &.Mui-focused": { color: "var(--component-input-label-fg)" },
          }}
        >
          {label}
        </FormLabel>
      )}
      {field}
      {help === undefined ? null : (
        <FormHelperText
          id={helpId}
          margin="dense"
          sx={{
            margin: 0,
            color: invalid
              ? "var(--component-input-fg-invalid)"
              : "var(--component-input-help-fg)",
            fontSize: "var(--component-input-help-font-size)",
            letterSpacing: "var(--component-input-help-letter-spacing)",
            "&.Mui-error": { color: "var(--component-input-fg-invalid)" },
          }}
        >
          {help}
        </FormHelperText>
      )}
    </FormControl>
  );
}
