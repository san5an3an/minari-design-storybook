import CircularProgress from "@mui/material/CircularProgress";
import type { SpinnerProps } from "../../systems/props";

export function Spinner({ onFill, label }: SpinnerProps) {
  const mark = (
    <CircularProgress
      // 텍스트 없을 때 이 요소만으로 대기 중 표시
      aria-label={label === undefined ? "불러오는 중" : undefined}
      // 크기는 size prop으로 지정, sx 무시는 MUI 인라인 style 우선 때문임
      size="var(--component-spinner-size)"
      sx={{
        color: onFill
          ? "var(--component-spinner-indicator-on-fill)"
          : "var(--component-spinner-indicator)",
      }}
    />
  );
  if (label === undefined) return mark;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--component-spinner-gap)",
        color: "var(--component-spinner-label-fg)",
        fontSize: "var(--component-spinner-label-font-size)",
      }}
    >
      {mark}
      {label}
    </span>
  );
}
