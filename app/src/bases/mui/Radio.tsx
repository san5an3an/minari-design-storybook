import * as React from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiRadio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import type { RadioProps } from "../../systems/props";

// 동그라미 하나. on이면 안에 점 표시
function Circle({ on, invalid }: { on?: boolean; invalid?: boolean }) {
  return (
    <Box
      component="span"
      aria-hidden
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "var(--component-radio-size)",
        height: "var(--component-radio-size)",
        borderRadius: "50%",
        boxSizing: "border-box",
        borderStyle: "solid",
        borderWidth: "var(--semantic-border-width-default)",
        borderColor: invalid
          ? "var(--component-radio-border-invalid)"
          : on
            ? "var(--component-radio-border-checked)"
            : "var(--component-radio-border)",
        background: on
          ? "var(--component-radio-bg-checked)"
          : "var(--component-radio-bg)",
      }}
    >
      {on ? (
        // 점 크기는 원 비율로 결정. 고정값이면 밀도 축에서 넘치거나 남는 문제 있음
        <Box
          component="span"
          sx={{
            width: "45%",
            height: "45%",
            borderRadius: "50%",
            background: "var(--component-radio-dot)",
          }}
        />
      ) : null}
    </Box>
  );
}

function RadioRoot({
  id, value, disabled, description, children, className, ...rest
}: RadioProps) {
  const invalid = rest["aria-invalid"] === true || rest["aria-invalid"] === "true";
  const dot = (
    <MuiRadio
      id={id}
      value={value}
      disabled={disabled}
      icon={<Circle invalid={invalid} />}
      checkedIcon={<Circle on invalid={invalid} />}
      className={className}
      // aria-invalid를 DOM까지 전달. error prop 없어 색으로만 구분되는 문제임
      slotProps={{ input: { "aria-invalid": invalid || undefined } }}
      // 여백 제거로 물결 효과 비활성화
      disableRipple
      sx={{
        padding: 0,
        "&.Mui-disabled": { opacity: 1 },
        "&.Mui-disabled > span": {
          background: "var(--component-radio-disabled-bg)",
          borderColor: "var(--component-radio-disabled-fg)",
        },
        // 포커스 링은 input에 적용. 루트가 span이라 focus-visible 적용되지 않음
        "& input:focus-visible + span": {
          outline: "var(--semantic-border-width-strong) solid var(--component-radio-border-focus)",
          outlineOffset: "0.125rem",
        },
      }}
    />
  );

  if (children === undefined && description === undefined) return dot;

  return (
    <FormControlLabel
      value={value}
      control={dot}
      disabled={disabled}
      // 설명 있으면 2행이 되어 동그라미 상단 정렬
      sx={{
        margin: 0,
        alignItems: description === undefined ? "center" : "flex-start",
        gap: "var(--component-radio-gap)",
        "& .MuiFormControlLabel-label": {
          color: invalid
            ? "var(--component-radio-label-fg-invalid)"
            : "var(--component-radio-label-fg)",
          fontSize: "var(--component-radio-label-font-size)",
          letterSpacing: "var(--component-radio-label-letter-spacing)",
        },
      }}
      label={
        description === undefined ? (
          children
        ) : (
          <>
            {children}
            <Box
              component="span"
              sx={{
                display: "block",
                color: "var(--component-radio-description-fg)",
                fontSize: "var(--component-radio-description-font-size)",
                letterSpacing: "var(--component-radio-description-letter-spacing)",
              }}
            >
              {description}
            </Box>
          </>
        )
      }
    />
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
      onChange={(_, next) => onValueChange?.(next)}
      sx={{ gap: "var(--component-radio-group-gap)" }}
    >
      {children}
    </RadioGroup>
  );
}

export const Radio = Object.assign(RadioRoot, { Group });
