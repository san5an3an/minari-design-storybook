import MuiDivider from "@mui/material/Divider";
import type { DividerProps } from "../../systems/props";

export function Divider({ strong, inset, vertical, label }: DividerProps) {
  const color = strong
    ? "var(--component-divider-color-strong)"
    : "var(--component-divider-color)";

  return (
    <MuiDivider
      orientation={vertical ? "vertical" : "horizontal"}
      // 세로선에 flexItem 지정. 없으면 높이가 0이 되어 아무것도 안 보이고 에러도 안 남음
      flexItem={vertical || undefined}
      sx={{
        borderColor: color,
        marginBlock: vertical ? undefined : "var(--component-divider-space)",
        marginInline: vertical
          ? "var(--component-divider-space)"
          : inset
            ? "var(--component-divider-inset)"
            : undefined,
        // 가운데 글자. MUI는 이를 ::before, ::after로 나눈 선 사이에 배치
        "& .MuiDivider-wrapper": {
          color: "var(--component-divider-label-fg)",
          fontSize: "var(--component-divider-label-font-size)",
          paddingInline: "var(--component-divider-label-gap)",
        },
      }}
    >
      {label}
    </MuiDivider>
  );
}
