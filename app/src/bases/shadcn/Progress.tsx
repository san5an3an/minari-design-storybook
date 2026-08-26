import {
  Progress as ShadcnProgress, ProgressIndicator, ProgressLabel, ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress";
import type { ProgressProps } from "../../systems/props";

export function Progress({ value, lg, indeterminate, label, showValue }: ProgressProps) {
  return (
    <ShadcnProgress
      // 완료 시점 불명이면 null 지정
      value={indeterminate ? null : (value ?? 0)}
      style={{ gap: "var(--component-progress-gap)", width: "100%" }}
    >
      {/* 이름과 값을 한 행에 나란히 정렬 */}
      {label !== undefined || showValue ? (
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: ".5rem" }}>
          {label !== undefined ? (
            <ProgressLabel
              style={{
                color: "var(--component-progress-label-fg)",
                fontSize: "var(--component-progress-label-font-size)",
              }}
            >
              {label}
            </ProgressLabel>
          ) : null}
          {showValue ? (
            <ProgressValue
              style={{
                color: "var(--component-progress-label-fg)",
                fontSize: "var(--component-progress-label-font-size)",
                fontVariantNumeric: "tabular-nums",
              }}
            />
          ) : null}
        </div>
      ) : null}
      <ProgressTrack
        style={{
          background: "var(--component-progress-track-bg)",
          borderRadius: "var(--component-progress-radius)",
          height: lg ? "var(--component-progress-height-lg)" : "var(--component-progress-height)",
        }}
      >
        <ProgressIndicator
          style={{
            background: "var(--component-progress-indicator-bg)",
            borderRadius: "var(--component-progress-radius)",
          }}
        />
      </ProgressTrack>
    </ShadcnProgress>
  );
}
