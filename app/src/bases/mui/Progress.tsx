import LinearProgress from "@mui/material/LinearProgress";
import type { ProgressProps } from "../../systems/props";

export function Progress({ value, lg, indeterminate, label, showValue }: ProgressProps) {
  // 반올림 처리. 소수값엔 tabular-nums 자릿수 고정이 적용되지 않음
  const pct = Math.round(Math.min(100, Math.max(0, value ?? 0)));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--component-progress-gap)", width: "100%" }}>
      {label !== undefined || showValue ? (
        // gap 값은 토큰 아님. 새 토큰 정의는 이 파일 범위 밖임
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.5rem" }}>
          {label !== undefined ? (
            <span
              style={{
                color: "var(--component-progress-label-fg)",
                fontSize: "var(--component-progress-label-font-size)",
                letterSpacing: "var(--component-progress-label-letter-spacing)",
              }}
            >
              {label}
            </span>
          ) : null}
          {/* 완료 시점 불명 시 숫자 표시 금지. %는 indeterminate와 모순 */}
          {showValue && !indeterminate ? (
            <span
              style={{
                color: "var(--component-progress-label-fg)",
                fontSize: "var(--component-progress-label-font-size)",
                // 숫자 변경 시 흔들림 방지를 위해 고정폭 숫자 적용
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {pct}%
            </span>
          ) : null}
        </div>
      ) : null}
      <LinearProgress
        variant={indeterminate ? "indeterminate" : "determinate"}
        value={indeterminate ? undefined : pct}
        sx={{
          height: lg ? "var(--component-progress-height-lg)" : "var(--component-progress-height)",
          borderRadius: "var(--component-progress-radius)",
          background: "var(--component-progress-track-bg)",
          border: "var(--semantic-border-width-default) solid var(--component-progress-track-border)",
          // 막대 색은 자식 요소 지정, 루트 지정 시 트랙만 바뀌고 채움은 기본 팔레트 유지
          "& .MuiLinearProgress-bar": {
            background: "var(--component-progress-indicator-bg)",
            borderRadius: "var(--component-progress-radius)",
          },
        }}
      />
    </div>
  );
}
