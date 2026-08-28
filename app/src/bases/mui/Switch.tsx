import * as React from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiSwitch from "@mui/material/Switch";
import type { SwitchProps } from "../../systems/props";

function SwitchRoot({
  id, size = "md", checked, defaultChecked, disabled, onCheckedChange,
  description, children, className, ...rest
}: SwitchProps) {
  const invalid = rest["aria-invalid"] === true || rest["aria-invalid"] === "true";
  // 단계별로 다른 토큰. size 미지정 시 기본값 md
  const t = (name: string) => `var(--component-switch-${size}-${name})`;
  const travel = `calc(${t("track-width")} - ${t("track-height")})`;

  const knob = (
    <MuiSwitch
      id={id}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={(_, next) => onCheckedChange?.(next)}
      className={className}
      aria-label={rest["aria-label"]}
      // aria-invalid를 DOM까지 전달. error prop 없어 색으로만 표시되는 문제임
      slotProps={{ input: { "aria-invalid": invalid || undefined } }}
      // 여백 제거로 물결 효과 비활성화
      disableRipple
      sx={{
        // 바깥 상자 트랙 크기 유지
        width: t("track-width"),
        height: t("track-height"),
        padding: 0,
        overflow: "visible",
        // ② 트랙은 상자를 꽉 채우기
        "& .MuiSwitch-track": {
          width: "100%",
          height: "100%",
          borderRadius: "62.4375rem", // 999px 알약 모양 고정. pill 토큰 부재라 리터럴값 사용 중임
          opacity: 1,
          background: "var(--component-switch-bg-off)",
          border: `var(--semantic-border-width-default) solid ${
            invalid ? "var(--component-switch-border-invalid)" : "var(--component-switch-border-off)"
          }`,
          boxSizing: "border-box",
        },
        // ③ 움직이는 부분. 여백으로 위치 지정 금지
        "& .MuiSwitch-switchBase": {
          padding: 0,
          top: "50%",
          // 테두리 한 겹 추가. 기준 핸들은 트랙 33 기준, switchBase는 루트 35 기준임
          left: `calc(var(--semantic-border-width-default) + ${t("thumb-inset")})`,
          transform: "translateY(-50%)",
          "&.Mui-checked": {
            // 세로 중앙 유지하며 오른쪽 이동. translateX만 쓰면 핸들이 처지는 문제 있음
            transform: `translate(${travel}, -50%)`,
          },
          // 트랙 색 적용 대상은 switchBase 형제 요소임. 트랙에 직접 주면 반영되지 않음
          "&.Mui-checked + .MuiSwitch-track": {
            background: "var(--component-switch-bg-on)",
            borderColor: "var(--component-switch-bg-on)",
            opacity: 1,
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            background: "var(--component-switch-disabled-bg)",
            borderColor: "var(--component-switch-disabled-fg)",
            opacity: 1,
          },
        },
        // ④ 핸들은 크기, 색, 테두리 전부 토큰 사용
        "& .MuiSwitch-thumb": {
          width: t("thumb-size"),
          height: t("thumb-size"),
          background: "var(--component-switch-thumb-off)",
          border: "var(--semantic-border-width-default) solid var(--component-switch-thumb-edge)",
          boxSizing: "border-box",
          // 라이브러리 그림자는 쓰지 않음. elevation은 별도 체계로 관리
          boxShadow: "none",
        },
        "& .Mui-checked .MuiSwitch-thumb": {
          background: "var(--component-switch-thumb-on)",
        },
        "& .Mui-disabled .MuiSwitch-thumb": {
          background: "var(--component-switch-disabled-fg)",
        },
        // 포커스 링은 input에 적용. 루트가 span이라 focus-visible 적용되지 않음
        "& input:focus-visible ~ .MuiSwitch-track": {
          outline: `var(--semantic-border-width-strong) solid var(--component-switch-border-focus)`,
          outlineOffset: "0.125rem",
        },
      }}
    />
  );

  if (children === undefined && description === undefined) return knob;

  return (
    <FormControlLabel
      control={knob}
      disabled={disabled}
      sx={{
        margin: 0,
        alignItems: description === undefined ? "center" : "flex-start",
        gap: "var(--component-switch-gap)",
        "& .MuiFormControlLabel-label": {
          color: invalid
            ? "var(--component-switch-label-fg-invalid)"
            : "var(--component-switch-label-fg)",
          fontSize: "var(--component-switch-label-font-size)",
          letterSpacing: "var(--component-switch-label-letter-spacing)",
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
                color: "var(--component-switch-description-fg)",
                fontSize: "var(--component-switch-description-font-size)",
                letterSpacing: "var(--component-switch-description-letter-spacing)",
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

// 카드 전체 클릭 영역 지정
function Card({
  title, description, children, ...rest
}: SwitchProps & { title?: React.ReactNode; description?: React.ReactNode }) {
  // children 여기서 제거. SwitchRoot가 label 중첩시키는 문제임
  void children;
  return (
    <Box
      component="label"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--component-switch-card-gap)",
        padding: "var(--component-switch-card-padding)",
        borderRadius: "var(--component-switch-card-radius)",
        border: "var(--semantic-border-width-default) solid var(--component-switch-card-border)",
        background: "var(--component-switch-card-bg)",
        cursor: "pointer",
      }}
    >
      <Box component="span" sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          component="span"
          sx={{
            color: "var(--component-switch-label-fg)",
            fontSize: "var(--component-switch-label-font-size)",
            letterSpacing: "var(--component-switch-label-letter-spacing)",
          }}
        >
          {title}
        </Box>
        {description === undefined ? null : (
          <Box
            component="span"
            sx={{
              color: "var(--component-switch-description-fg)",
              fontSize: "var(--component-switch-description-font-size)",
              letterSpacing: "var(--component-switch-description-letter-spacing)",
            }}
          >
            {description}
          </Box>
        )}
      </Box>
      <SwitchRoot {...rest} />
    </Box>
  );
}

export const Switch = Object.assign(SwitchRoot, { Card });
