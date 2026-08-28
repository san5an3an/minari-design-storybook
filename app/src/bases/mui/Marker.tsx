import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

type Kid = { children?: React.ReactNode; className?: string };

export interface MuiMarkerProps extends Kid {
  variant?: "default" | "border" | "separator";
  render?: React.ReactNode;
  role?: string;
}

function MarkerRoot({ variant = "default", render, role, children, className }: MuiMarkerProps) {
  if (variant === "separator") {
    // 구분선 변형은 선 하나임. 내부 요소 렌더링 제외
    return <Divider className={className} role={role} />;
  }
  return (
    <Box
      className={className}
      role={role}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--component-marker-gap)",
        ...(variant === "border"
          ? { borderLeft: "var(--component-marker-line)", borderColor: "var(--component-marker-border)", pl: "var(--component-marker-gap)" }
          : null),
      }}
    >
      {render}
      {children}
    </Box>
  );
}

// 표시 위치. 점, 아이콘 등 표시
const Icon = ({ children, className }: Kid) => (
  <Box
    className={className}
    aria-hidden
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: "1em",
      height: "1em",
      color: "var(--component-marker-fg)",
    }}
  >
    {children}
  </Box>
);

// 표시 옆 텍스트
const Content = ({ children, className }: Kid) => (
  <Box className={className} sx={{ minWidth: 0 }}>{children}</Box>
);

export const Marker = Object.assign(MarkerRoot, { Icon, Content });
