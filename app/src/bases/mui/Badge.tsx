import MuiChip from "@mui/material/Chip";
import type { CSSProperties } from "react";
import type { BadgeProps } from "../../systems/props";

// variant가 실제로 가진 토큰만 반환
function skin(variant: string, tone: string): CSSProperties {
  const border = {
    borderStyle: "solid",
    borderWidth: "var(--semantic-border-width-default)",
    borderColor: `var(--component-badge-${variant}-${tone}-border)`,
  };
  if (variant === "outline") {
    // 배경 없는 투명 variant
    return { background: "transparent", color: `var(--component-badge-outline-${tone}-fg)`, ...border };
  }
  if (variant === "subtle") {
    return {
      background: `var(--component-badge-subtle-${tone}-bg)`,
      color: `var(--component-badge-subtle-${tone}-fg)`,
      ...border,
    };
  }
  return {
    background: `var(--component-badge-solid-${tone}-bg)`,
    color: `var(--component-badge-solid-${tone}-fg)`,
    borderStyle: "none",
  };
}

export function Badge({
  variant = "solid", tone = "neutral", icon, iconPosition = "inline-start",
  children, className,
}: BadgeProps) {
  return (
    <MuiChip
      className={className}
      // 표시는 icon 위치에 넣지 않음. deleteIcon은 삭제 의미라 부적합한 선택임
      label={
        <>
          {icon === undefined ? null : (
            <span aria-hidden style={{ display: "inline-flex", flexShrink: 0 }}>{icon}</span>
          )}
          {children}
        </>
      }
      sx={{
        // 기본 높이 32px 필요. 없으면 여백을 줘도 높이가 안 바뀌어 밀도 조정 효과가 없음
        height: "auto",
        borderRadius: "var(--component-badge-radius)",
        fontSize: "var(--component-badge-font-size)",
        letterSpacing: "var(--component-badge-letter-spacing)",
        ...skin(variant, tone),
        // 여백은 루트가 아닌 label 요소에 적용. 루트만 고치면 반영 안 된 것처럼 보임
        "& .MuiChip-label": {
          display: "inline-flex",
          alignItems: "center",
          flexDirection: iconPosition === "inline-end" ? "row-reverse" : "row",
          gap: "var(--component-badge-gap)",
          paddingInline: "var(--component-badge-padding-inline)",
          paddingBlock: "var(--component-badge-padding-block)",
          // 표시 크기는 토큰이 결정. 텍스트와 정렬 위해 em 대신 토큰 사용
          "& svg": {
            width: "var(--component-badge-icon-size)",
            height: "var(--component-badge-icon-size)",
          },
        },
      }}
    />
  );
}
