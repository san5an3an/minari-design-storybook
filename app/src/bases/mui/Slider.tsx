import MuiSlider from "@mui/material/Slider";
import type { SliderProps } from "../../systems/props";

// 대상 형태로 변환. 읽기 전용 배열은 얕은 복사 적용
function toMui(v: SliderProps["value"]): number | number[] | undefined {
  return Array.isArray(v) ? [...v] : (v as number | undefined);
}

export function Slider({
  value, defaultValue, onValueChange, min, max, step,
  orientation = "horizontal", disabled, className,
}: SliderProps) {
  const vertical = orientation === "vertical";
  // 세로 방향에서 두께를 너비로 적용. 축만 바꿔 같은 토큰 재사용
  const thickness = vertical
    ? { width: "var(--component-slider-track-height)" }
    : { height: "var(--component-slider-track-height)" };

  return (
    <MuiSlider
      value={toMui(value)}
      defaultValue={toMui(defaultValue)}
      onChange={(_, next) => onValueChange?.(next)}
      min={min}
      max={max}
      step={step}
      orientation={orientation}
      disabled={disabled}
      className={className}
      sx={{
        // 두께, 여백 변경 금지. padding은 장식이 아니라 42px 터치 타겟을 위한 영역임
        "& .MuiSlider-rail": {
          ...thickness,
          opacity: 1,
          background: "var(--component-slider-track)",
          borderRadius: "var(--component-slider-track-radius)",
        },
        "& .MuiSlider-track": {
          ...thickness,
          border: "none",
          background: "var(--component-slider-track-filled)",
          borderRadius: "var(--component-slider-track-radius)",
        },
        "& .MuiSlider-thumb": {
          width: "var(--component-slider-thumb-size)",
          height: "var(--component-slider-thumb-size)",
          background: "var(--component-slider-thumb-bg)",
          border: "var(--semantic-border-width-default) solid var(--component-slider-thumb-border)",
          boxSizing: "border-box",
          // 라이브러리 그림자는 쓰지 않음. elevation은 별도 체계로 관리
          boxShadow: "none",
          "&:hover, &.Mui-focusVisible, &.Mui-active": { boxShadow: "none" },
          // 포커스는 테두리 대신 링으로 표시. 테두리를 바꾸면 핸들 크기가 흔들리는 문제가 있음
          "&.Mui-focusVisible": {
            outline: "var(--semantic-border-width-strong) solid var(--component-slider-border-focus)",
            outlineOffset: "0.125rem",
          },
        },
        // marks 지정 시에만 눈금과 라벨 생성
        "& .MuiSlider-mark": { background: "var(--component-slider-tick-fg)" },
        "& .MuiSlider-markLabel": {
          color: "var(--component-slider-tick-fg)",
          fontSize: "var(--component-slider-tick-font-size)",
          letterSpacing: "var(--component-slider-tick-letter-spacing)",
        },
        // valueLabelDisplay 지정 시 표시되는 값 풍선
        "& .MuiSlider-valueLabel": {
          color: "var(--component-slider-value-fg)",
          fontSize: "var(--component-slider-value-font-size)",
          letterSpacing: "var(--component-slider-value-letter-spacing)",
        },
        "&.Mui-disabled": {
          "& .MuiSlider-track": { background: "var(--component-slider-disabled-track)" },
          "& .MuiSlider-thumb": { background: "var(--component-slider-disabled-thumb)" },
        },
      }}
    />
  );
}
