import * as React from "react";
import CheckRounded from "@mui/icons-material/CheckRounded";
import RemoveRounded from "@mui/icons-material/RemoveRounded";
import Box from "@mui/material/Box";
import MuiCheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import type { CheckboxProps } from "../../systems/props";

function Square({ mark, invalid }: { mark?: React.ReactNode; invalid?: boolean }) {
  const on = mark !== undefined;
  return (
    <Box
      component="span"
      // 시각적 표시용. 실제 상태는 내부 input이 유지
      aria-hidden
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "var(--component-checkbox-size)",
        height: "var(--component-checkbox-size)",
        borderRadius: "var(--component-checkbox-radius)",
        borderStyle: "solid",
        borderWidth: "var(--semantic-border-width-default)",
        borderColor: invalid
          ? "var(--component-checkbox-border-invalid)"
          : on
            ? "var(--component-checkbox-border-checked)"
            : "var(--component-checkbox-border)",
        background: on
          ? "var(--component-checkbox-bg-checked)"
          : "var(--component-checkbox-bg)",
        color: "var(--component-checkbox-mark)",
        // 표시 크기는 박스를 따라감. 고정값이면 밀도 설정에서 넘치거나 남음
        boxSizing: "border-box",
      }}
    >
      {mark}
    </Box>
  );
}

// 사각형 내부 표시, 크기는 사각형 비율에 연동
const markSx = { width: "70%", height: "70%" } as const;

function CheckboxRoot({
  id, checked, defaultChecked, indeterminate, disabled, onCheckedChange,
  description, children, className, ...rest
}: CheckboxProps) {
  const invalid = rest["aria-invalid"] === true || rest["aria-invalid"] === "true";
  const box = (
    <MuiCheckbox
      id={id}
      checked={checked}
      defaultChecked={defaultChecked}
      indeterminate={indeterminate}
      disabled={disabled}
      onChange={(_, next) => onCheckedChange?.(next)}
      // strokeWidth 지정 금지. MUI 아이콘은 채워진 글리프라 값이 적용되지 않음
      icon={<Square invalid={invalid} />}
      checkedIcon={<Square invalid={invalid} mark={<CheckRounded sx={markSx} />} />}
      indeterminateIcon={<Square invalid={invalid} mark={<RemoveRounded sx={markSx} />} />}
      className={className}
      // aria-invalid를 DOM까지 전달. error prop 없어 색으로만 구분되는 문제임
      slotProps={{ input: { "aria-invalid": invalid || undefined } }}
      // 물결 효과 비활성화. 여백 제거로 모서리 밖까지 퍼지는 문제가 있음
      disableRipple
      sx={{
        padding: 0,
        "&.Mui-disabled": { opacity: 1 },
        // 잠긴 셀 색으로 표시. 흐리게만 하면 잠금 여부를 알아보기 어려운 문제가 있음
        "&.Mui-disabled > span": {
          background: "var(--component-checkbox-disabled-bg)",
          color: "var(--component-checkbox-disabled-fg)",
        },
        // 포커스 링은 input에 적용. 루트가 span이라 focus-visible 적용되지 않음
        "& input:focus-visible + span": {
          outline: "var(--semantic-border-width-strong) solid var(--component-checkbox-border-focus)",
          outlineOffset: "0.125rem",
        },
      }}
    />
  );

  if (children === undefined && description === undefined) return box;

  return (
    <FormControlLabel
      control={box}
      disabled={disabled}
      // 설명 있으면 2행이 되어 네모를 세로 중앙 대신 상단 정렬
      sx={{
        margin: 0,
        alignItems: description === undefined ? "center" : "flex-start",
        gap: "var(--component-checkbox-gap)",
        "& .MuiFormControlLabel-label": {
          color: invalid
            ? "var(--component-checkbox-label-fg-invalid)"
            : "var(--component-checkbox-label-fg)",
          fontSize: "var(--component-checkbox-label-font-size)",
          letterSpacing: "var(--component-checkbox-label-letter-spacing)",
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
                color: "var(--component-checkbox-description-fg)",
                fontSize: "var(--component-checkbox-description-font-size)",
                letterSpacing: "var(--component-checkbox-description-letter-spacing)",
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

function Group({ children }: { children?: React.ReactNode }) {
  return (
    <FormGroup sx={{ gap: "var(--component-checkbox-gap)" }}>
      {children}
    </FormGroup>
  );
}

export const Checkbox = Object.assign(CheckboxRoot, { Group });
